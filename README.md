# 🎮 Nation Reservation Discord Bot

A Discord bot for managing nation and territory reservations in multiplayer games. Players can reserve nations/states, view current reservations, and admins can manage the system.

## ✨ Features

- 🗺️ Display all nation reservations organized by region
- ✅ Reserve nations for yourself (one per player)
- ❌ Unreserve your current nation anytime
- 📋 List all available nations by region
- 🗑️ Delete all reservations and messages when game ends
- 🔧 Admin commands for managing the system
- 💾 Persistent storage (reservations saved to JSON)
- 🎯 Autocomplete suggestions when typing nation names

## 📍 Available Regions

- **Eastern States**: Washington D.C., Pennsylvania, Maryland, Massachusetts, Virginia, New York City, Rhode Island, North Carolina, South Carolina, Georgia, Florida
- **Southern States**: Kentucky, Tennessee, Louisiana, New Orleans, Mississippi, Alabama, Arkansas, Oklahoma, Texas
- **Western States**: California, Washington, Oregon, Colorado, Utah, Nevada, Alaska
- **Midwest States**: Ohio
- **Canadian Territories**: Ontario, Quebec, Alberta, British Columbia, Yukon Territory, St. Pierre and Miquelon
- **Mexico & Central America**: Mexico, Cristeros, Cozumel
- **Special Forces**: Japanese Navy At Midway, Soviet Navy At Aleutians, Navajo
- **Miscellaneous Nations**: 6 slots for minor/custom nations

## 📋 Commands

### 👥 User Commands

| Command | Description | Example |
|---------|-------------|---------|
| `/reservations` | Display all current reservations | `/reservations` |
| `/reserve <nation>` | Reserve a nation for yourself | `/reserve California` |
| `/unreserve` | Remove your current reservation | `/unreserve` |
| `/list_nations` | Show all available nations by region | `/list_nations` |

### 🔑 Admin Commands (Requires Administrator Permission)

| Command | Description | Example |
|---------|-------------|---------|
| `/delete` | Clear all reservations and delete messages (use when game ends) | `/delete` |
| `/clear_all` | Clear all reservations without deleting messages | `/clear_all` |
| `/force_unreserve <nation>` | Force unreserve a specific nation | `/force_unreserve Texas` |

## 🚀 Setup Instructions

### Prerequisites

- Python 3.8 or higher
- A Discord account
- Administrator access to a Discord server

### Step 1: Create a Discord Bot

1. Visit the [Discord Developer Portal](https://discord.com/developers/applications)
2. Click **"New Application"** and name your bot
3. Go to the **"Bot"** section in the left sidebar
4. Click **"Add Bot"**
5. Enable **"Message Content Intent"** under Privileged Gateway Intents
6. Click **"Save Changes"**

### Step 2: Get Your Bot Token

1. In the Bot section, click **"Reset Token"** (under TOKEN section)
2. Click **"Copy"** to copy your token
3. ⚠️ **Keep this token secret!** Never share it publicly

### Step 3: Invite Bot to Your Server

1. Go to **"OAuth2"** → **"URL Generator"**
2. Under **SCOPES**, check:
   - ✅ `bot`
   - ✅ `applications.commands`
3. Under **BOT PERMISSIONS**, check:
   - ✅ `Send Messages`
   - ✅ `Use Slash Commands`
   - ✅ `Read Message History`
   - ✅ `Manage Messages` (needed for /delete command)
4. Copy the generated URL and paste it in your browser
5. Select your Discord server and authorize

### Step 4: Install Dependencies

Open a terminal in your project folder and run:

```bash
pip install -r requirements.txt
```

### Step 5: Create Configuration File

1. Create a `.env` file in your project folder (same location as `bot.py`)
2. Add your bot token:
   ```
   DISCORD_TOKEN=your_bot_token_here
   ```
3. Replace `your_bot_token_here` with the token from Step 2
4. Save the file

### Step 6: Run the Bot

```bash
python bot.py
```

You should see:
```
YourBotName#1234 has connected to Discord!
Synced 7 command(s)
```

🎉 **Your bot is now live!**

### Step 7: Test It Out

1. Go to your Discord server
2. Type `/` in a channel to see available commands
3. Try `/reservations` to view the board
4. Try `/reserve California` to make a reservation
5. Try `/list_nations` to see all available options

## 📝 Usage Examples

### Viewing Reservations
```
/reservations
```
Shows the full reservation board with all nations and who reserved them.

### Making a Reservation
```
/reserve Texas
```
Reserves Texas for you. If Texas is already taken, you'll get an error.

### Unreserving a Nation
```
/unreserve
```
Removes your reservation so someone else can take your nation.

### Ending the Game
```
/delete
```
(Admin only) Clears all reservations, deletes all bot messages, and resets for a new game.

## 🎯 Game Flow Example

1. **Setup**: `/reservations` - Host shows the empty board
2. **Players Reserve**: Players use `/reserve <nation>` to claim territories
3. **During Game**: `/reservations` - Anyone can check who plays what
4. **Game Ends**: Admin uses `/delete` to reset everything
5. **New Game**: Repeat!

## ⚙️ Customization

### Changing Miscellaneous Nation Names

Edit the `"MISCELLANEOUS NATIONS"` section in [bot.py](bot.py):

```python
"MISCELLANEOUS NATIONS": [
    "Minor Nation A", "Minor Nation B", "Minor Nation C",
    "Minor Nation D", "Minor Nation E", "Minor Nation F"
]
```

### Adding New Regions

Add new regions to the `NATIONS` dictionary in [bot.py](bot.py):

```python
"YOUR REGION": [
    "Nation 1", "Nation 2", "Nation 3"
],
```

### Changing the Prefix

Edit the bot initialization in [bot.py](bot.py):

```python
bot = commands.Bot(command_prefix='!', intents=intents)  # Change '!' to your prefix
```

## 💾 Data Storage

- Reservations are stored in `reservations.json` in your project folder
- This file is auto-created when the first reservation is made
- All reservations persist between bot restarts

## 🐛 Troubleshooting

### Bot won't start
```
ERROR: DISCORD_TOKEN not found in .env file!
```
- Make sure `.env` file exists and has `DISCORD_TOKEN=your_token`
- Check there are no extra spaces around the equals sign

### Commands not showing up
- Slash commands can take up to 1 hour to appear globally
- Try waiting a few minutes
- Kick the bot and re-invite it if problems persist
- Make sure you selected `applications.commands` scope when inviting

### Bot offline immediately
- Verify your token is correct (copy it again from Developer Portal)
- Check that "Message Content Intent" is enabled
- Try regenerating your token and updating `.env`

### `/delete` command doesn't work
- Make sure the bot has **"Manage Messages"** permission
- Verify you're an admin in the server
- Check that the bot has access to the channel

### Can't reserve a nation
- Check spelling (autocomplete helps with this)
- Make sure someone hasn't already reserved it
- Check that you don't already have a different nation reserved

## 📦 Files

- `bot.py` - Main bot code with all commands
- `requirements.txt` - Python dependencies
- `.env.example` - Configuration template
- `README.md` - This file
- `reservations.json` - Auto-generated, stores all reservations

## 📄 License

Free to use and modify for your gaming needs!

## 🤝 Support

Need help? Check the troubleshooting section above or review the [Discord.py documentation](https://discordpy.readthedocs.io/).

---

**Ready to play?** Start with Step 1 above and you'll be up and running in minutes! 🎮

