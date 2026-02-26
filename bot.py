import discord
from discord.ext import commands
from discord import app_commands
import json
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv()
TOKEN = os.getenv('DISCORD_TOKEN')

# Bot setup
intents = discord.Intents.default()
intents.message_content = True
bot = commands.Bot(command_prefix='!', intents=intents)

# Data file to store reservations
RESERVATIONS_FILE = 'reservations.json'

# Track reservation messages to delete later
reservation_messages = {}

# Nation list organized by regions
NATIONS = {
    "EASTERN STATES": [
        "Washington D.C.", "Pennsylvania", "Maryland", "Massachusetts", 
        "Virginia", "New York City", "Rhode Island", "North Carolina", 
        "South Carolina", "Georgia", "Florida"
    ],
    "SOUTHERN STATES": [
        "Kentucky", "Tennessee", "Louisiana", "New Orleans", "Mississippi", 
        "Alabama", "Arkansas", "Oklahoma", "Texas"
    ],
    "WESTERN STATES": [
        "California", "Washington", "Oregon", "Colorado", "Utah", 
        "Nevada", "Alaska"
    ],
    "MIDWEST STATES": [
        "Ohio"
    ],
    "CANADIAN TERRITORIES": [
        "Ontario", "Quebec", "Alberta", "British Columbia", 
        "Yukon Territory", "St. Pierre and Miquelon"
    ],
    "MEXICO & CENTRAL AMERICA": [
        "Mexico", "Cristeros", "Cozumel"
    ],
    "SPECIAL FORCES": [
        "Japanese Navy At Midway", "Soviet Navy At Aleutians", "Navajo"
    ],
    "MISCELLANEOUS NATIONS": [
        "Miscellaneous Nation 1", "Miscellaneous Nation 2", "Miscellaneous Nation 3",
        "Miscellaneous Nation 4", "Miscellaneous Nation 5", "Miscellaneous Nation 6"
    ]
}

def load_reservations():
    """Load reservations from JSON file"""
    if os.path.exists(RESERVATIONS_FILE):
        with open(RESERVATIONS_FILE, 'r') as f:
            return json.load(f)
    return {}

def save_reservations(reservations):
    """Save reservations to JSON file"""
    with open(RESERVATIONS_FILE, 'w') as f:
        json.dump(reservations, f, indent=4)

def format_reservation_message(reservations):
    """Format the reservations into a Discord message"""
    message = "# GAME NATION RESERVATIONS\n\n"
    
    for region, nations in NATIONS.items():
        message += f"**{region}**\n"
        for nation in nations:
            user_mention = reservations.get(nation, "")
            message += f"{nation}: {user_mention}\n"
        message += "\n"
    
    return message

@bot.event
async def on_ready():
    """Event triggered when bot is ready"""
    print(f'{bot.user} has connected to Discord!')
    try:
        synced = await bot.tree.sync()
        print(f"Synced {len(synced)} command(s)")
    except Exception as e:
        print(f"Failed to sync commands: {e}")

@bot.tree.command(name="reservations", description="Show the current nation reservations")
async def show_reservations(interaction: discord.Interaction):
    """Display all nation reservations"""
    reservations = load_reservations()
    message = format_reservation_message(reservations)
    response = await interaction.response.send_message(message)
    # Track this message for later deletion
    channel_id = interaction.channel_id
    if channel_id not in reservation_messages:
        reservation_messages[channel_id] = []
    reservation_messages[channel_id].append(response.id)

async def nation_autocomplete(
    interaction: discord.Interaction,
    current: str,
) -> list[app_commands.Choice[str]]:
    """Autocomplete for nation names"""
    all_nations = [n for nations in NATIONS.values() for n in nations]
    # Filter nations based on current input
    matches = [n for n in all_nations if current.lower() in n.lower()]
    # Return top 25 matches (Discord limit)
    return [
        app_commands.Choice(name=nation, value=nation)
        for nation in matches[:25]
    ]

@bot.tree.command(name="reserve", description="Reserve a nation for yourself")
@app_commands.describe(nation="The name of the nation you want to reserve")
@app_commands.autocomplete(nation=nation_autocomplete)
async def reserve_nation(interaction: discord.Interaction, nation: str):
    """Reserve a nation"""
    reservations = load_reservations()
    
    # Check if nation exists
    all_nations = [n for nations in NATIONS.values() for n in nations]
    
    # Find exact or close match
    matched_nation = None
    for n in all_nations:
        if n.lower() == nation.lower():
            matched_nation = n
            break
    
    if not matched_nation:
        await interaction.response.send_message(
            f"❌ Nation '{nation}' not found. Please check the spelling and try again.",
            ephemeral=True
        )
        return
    
    # Check if already reserved
    if matched_nation in reservations and reservations[matched_nation]:
        current_user = reservations[matched_nation]
        await interaction.response.send_message(
            f"❌ {matched_nation} is already reserved by {current_user}",
            ephemeral=True
        )
        return
    
    # Check if user already has a reservation
    user_mention = interaction.user.mention
    for nation_name, reserved_by in reservations.items():
        if reserved_by == user_mention:
            await interaction.response.send_message(
                f"❌ You already have {nation_name} reserved. Unreserve it first if you want to switch.",
                ephemeral=True
            )
            return
    
    # Reserve the nation
    reservations[matched_nation] = user_mention
    save_reservations(reservations)
    
    await interaction.response.send_message(
        f"✅ {matched_nation} has been reserved for {user_mention}!"
    )

@bot.tree.command(name="unreserve", description="Remove your nation reservation")
async def unreserve_nation(interaction: discord.Interaction):
    """Unreserve your nation"""
    reservations = load_reservations()
    user_mention = interaction.user.mention
    
    # Find user's reservation
    user_nation = None
    for nation, reserved_by in reservations.items():
        if reserved_by == user_mention:
            user_nation = nation
            break
    
    if not user_nation:
        await interaction.response.send_message(
            "❌ You don't have any nation reserved.",
            ephemeral=True
        )
        return
    
    # Remove reservation
    reservations[user_nation] = ""
    save_reservations(reservations)
    
    await interaction.response.send_message(
        f"✅ Your reservation of {user_nation} has been removed."
    )

@bot.tree.command(name="delete", description="Delete all reservations - use when game ends (Admin only)")
@app_commands.checks.has_permissions(administrator=True)
async def delete_reservations(interaction: discord.Interaction):
    """Delete all reservations and remove reservation messages (admin only)"""
    channel_id = interaction.channel_id
    channel = interaction.channel
    
    # Delete tracked reservation messages
    if channel_id in reservation_messages:
        for message_id in reservation_messages[channel_id]:
            try:
                message = await channel.fetch_message(message_id)
                await message.delete()
            except:
                pass  # Message already deleted or doesn't exist
        reservation_messages[channel_id] = []
    
    # Clear all reservations
    save_reservations({})
    await interaction.response.send_message("✅ All reservations and messages have been deleted! Game reset complete.")

@delete_reservations.error
async def delete_error(interaction: discord.Interaction, error):
    """Error handler for delete command"""
    if isinstance(error, app_commands.errors.MissingPermissions):
        await interaction.response.send_message(
            "❌ You need administrator permissions to use this command.",
            ephemeral=True
        )

@bot.tree.command(name="clear_all", description="Clear all reservations (Admin only)")
@app_commands.checks.has_permissions(administrator=True)
async def clear_all_reservations(interaction: discord.Interaction):
    """Clear all reservations (admin only)"""
    save_reservations({})
    await interaction.response.send_message("✅ All reservations have been cleared!")

@clear_all_reservations.error
async def clear_all_error(interaction: discord.Interaction, error):
    """Error handler for clear_all command"""
    if isinstance(error, app_commands.errors.MissingPermissions):
        await interaction.response.send_message(
            "❌ You need administrator permissions to use this command.",
            ephemeral=True
        )

@bot.tree.command(name="list_nations", description="Show all available nations")
async def list_nations(interaction: discord.Interaction):
    """List all nations by region"""
    message = "# AVAILABLE NATIONS\n\n"
    for region, nations in NATIONS.items():
        message += f"**{region}**\n"
        message += ", ".join(nations)
        message += "\n\n"
    
    await interaction.response.send_message(message, ephemeral=True)

@bot.tree.command(name="force_unreserve", description="Force unreserve a nation (Admin only)")
@app_commands.describe(nation="The name of the nation to unreserve")
@app_commands.autocomplete(nation=nation_autocomplete)
@app_commands.checks.has_permissions(administrator=True)
async def force_unreserve(interaction: discord.Interaction, nation: str):
    """Force unreserve a nation (admin only)"""
    reservations = load_reservations()
    
    # Find exact or close match
    all_nations = [n for nations in NATIONS.values() for n in nations]
    matched_nation = None
    for n in all_nations:
        if n.lower() == nation.lower():
            matched_nation = n
            break
    
    if not matched_nation:
        await interaction.response.send_message(
            f"❌ Nation '{nation}' not found.",
            ephemeral=True
        )
        return
    
    if matched_nation in reservations:
        reservations[matched_nation] = ""
        save_reservations(reservations)
        await interaction.response.send_message(
            f"✅ {matched_nation} has been unreserved."
        )
    else:
        await interaction.response.send_message(
            f"ℹ️ {matched_nation} was not reserved.",
            ephemeral=True
        )

@force_unreserve.error
async def force_unreserve_error(interaction: discord.Interaction, error):
    """Error handler for force_unreserve command"""
    if isinstance(error, app_commands.errors.MissingPermissions):
        await interaction.response.send_message(
            "❌ You need administrator permissions to use this command.",
            ephemeral=True
        )

if __name__ == "__main__":
    if not TOKEN:
        print("ERROR: DISCORD_TOKEN not found in .env file!")
        exit(1)
    bot.run(TOKEN)
