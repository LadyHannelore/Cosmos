// Military Doctrine Builder - Content Data
// This file contains all the doctrine descriptions and information

const doctrineContent = {
    philosophy: {
        defensive: {
            title: "Defensive Doctrine",
            description: "Focus on protecting homeland and territory",
            summary: "Your nation's military exists primarily to defend the homeland. The armed forces are organized around territorial defense, with emphasis on fortifications, defensive positions, and repelling invaders."
        },
        offensive: {
            title: "Offensive Doctrine",
            description: "Focus on power projection and strikes abroad",
            summary: "Your nation's military is built for offensive operations and power projection. The armed forces are designed to strike first and carry the fight to enemy territory."
        },
        balanced: {
            title: "Balanced Doctrine",
            description: "Flexible approach combining offense and defense",
            summary: "Your nation maintains a balanced military capable of both offensive and defensive operations. Flexibility and adaptability are key tenets of military planning."
        },
        expeditionary: {
            title: "Expeditionary Doctrine",
            description: "Operations abroad and distant theaters",
            summary: "Your nation's military specializes in expeditionary warfare, projecting power far from home shores. Forces are optimized for deployment and sustained operations in distant theaters."
        }
    },

    structure: {
        professional: {
            title: "Professional Army",
            description: "Career soldiers serving voluntarily",
            summary: "The military consists of full-time, career soldiers who serve voluntarily. This creates a highly trained but smaller force optimized for complex operations."
        },
        conscript: {
            title: "Conscript-Based Forces",
            description: "Mandatory military service for citizens",
            summary: "Military service is mandatory for citizens. This provides large numbers of trained personnel but with varying levels of experience and motivation."
        },
        militia: {
            title: "Militia System",
            description: "Citizen-soldiers training part-time",
            summary: "Defense relies on citizen-soldiers who train part-time while maintaining civilian occupations. The entire nation can be mobilized in times of war."
        },
        hybrid: {
            title: "Hybrid Model",
            description: "Professional core with conscript reserves",
            summary: "The military combines a professional core with conscript or militia reserves. This balances quality with quantity and allows for rapid mobilization."
        }
    },

    domain: {
        land: {
            title: "Land Power Focus",
            description: "Army as the primary military branch",
            summary: "The army is the primary branch, receiving the largest share of resources and prestige. Ground forces form the backbone of military power and territorial control."
        },
        naval: {
            title: "Naval Power Focus",
            description: "Navy as the senior service",
            summary: "The navy is the senior service, with maritime power being central to national strategy. Control of the seas is paramount for power projection and commerce protection."
        },
        air: {
            title: "Air Power Focus",
            description: "Air superiority and strategic bombing",
            summary: "Air power is considered decisive. The air force receives priority in resources and is expected to achieve air superiority in any conflict."
        },
        combined: {
            title: "Combined Arms Focus",
            description: "Integration of land, sea, and air power",
            summary: "No single branch dominates. The military emphasizes joint operations and the integration of land, sea, and air power for maximum effectiveness."
        }
    },

    tactics: {
        maneuver: {
            title: "Maneuver Warfare",
            description: "Speed, surprise, and exploiting weakness",
            summary: "Tactics emphasize speed, surprise, and attacking enemy weaknesses. Victory comes through outmaneuvering rather than overwhelming the enemy with firepower."
        },
        attrition: {
            title: "Attrition Warfare",
            description: "Wearing down enemy through sustained combat",
            summary: "Tactics focus on wearing down the enemy through sustained combat. Victory comes through superior numbers, firepower, and industrial capacity."
        },
        guerrilla: {
            title: "Guerrilla/Asymmetric Warfare",
            description: "Unconventional tactics and asymmetric approaches",
            summary: "Tactics emphasize unconventional warfare, avoiding pitched battles in favor of raids, ambushes, and harassment of enemy forces."
        },
        siegecraft: {
            title: "Siege & Fortification",
            description: "Fortifications and methodical sieges",
            summary: "Tactics center on the construction and reduction of fortifications. Warfare involves methodical sieges and the defense of strong points."
        }
    },

    technology: {
        "cutting-edge": {
            title: "Cutting Edge Technology",
            description: "Most advanced weapons and equipment available",
            summary: "The military pursues the most advanced weapons and equipment available. Technological superiority is seen as the decisive factor in warfare."
        },
        modern: {
            title: "Modern Standard Equipment",
            description: "Current-generation reliable equipment",
            summary: "The military maintains modern, effective equipment without pursuing bleeding-edge technology. Balance of capability and cost-effectiveness."
        },
        practical: {
            title: "Practical & Reliable Equipment",
            description: "Proven systems over sophistication",
            summary: "Equipment is chosen for reliability and ease of maintenance over sophistication. Rugged, proven systems are preferred over experimental technology."
        },
        legacy: {
            title: "Legacy Systems",
            description: "Older but functional equipment",
            summary: "The military relies on older but functional equipment. Modernization is limited by resources or doctrine, requiring adaptation of proven designs."
        }
    },

    command: {
        centralized: {
            title: "Centralized Command",
            description: "Concentrated authority at the top",
            summary: "Command authority is concentrated at the top. Senior officers make decisions with subordinates executing orders precisely according to doctrine."
        },
        decentralized: {
            title: "Decentralized/Mission-Type Command",
            description: "Subordinates given freedom to accomplish objectives",
            summary: "Subordinate commanders are given objectives and the freedom to achieve them as they see fit. Initiative is encouraged at all levels."
        },
        rigid: {
            title: "Rigid Hierarchy",
            description: "Strict hierarchical command structure",
            summary: "The command structure is strictly hierarchical with clear chains of command. Protocol and procedure are paramount in all operations."
        },
        flexible: {
            title: "Flexible Leadership",
            description: "Adaptive command structures",
            summary: "Command structures adapt to circumstances. Leadership may shift based on expertise and situation rather than strict rank."
        }
    },

    logistics: {
        heavy: {
            title: "Heavy Logistics Train",
            description: "Extensive supply lines and support",
            summary: "Armies travel with extensive supply trains. Troops are well-supplied but movement can be slow due to logistical constraints."
        },
        light: {
            title: "Light & Mobile Logistics",
            description: "Minimal supply lines for maximum speed",
            summary: "Forces travel light for speed. Supply lines are minimal, trading sustainment for mobility and rapid deployment capability."
        },
        forage: {
            title: "Live Off the Land",
            description: "Requisition supplies from conquered territory",
            summary: "Armies supplement supplies through foraging and requisition. This enables rapid movement but can strain occupied territories."
        },
        depot: {
            title: "Depot System",
            description: "Network of supply depots",
            summary: "Military operations are supported by a network of supply depots. Campaigns are planned around these logistical hubs."
        }
    },

    special: {
        "elite-units": {
            title: "Elite Units",
            description: "Specially trained formations for critical missions",
            summary: "The military maintains specially trained elite formations for critical missions. These units receive premium equipment and training."
        },
        intelligence: {
            title: "Intelligence Focus",
            description: "Intelligence gathering and reconnaissance",
            summary: "Significant resources are devoted to intelligence gathering, reconnaissance, and information warfare capabilities."
        },
        psychological: {
            title: "Psychological Warfare",
            description: "Psychological operations and information control",
            summary: "The military employs psychological operations to demoralize enemies and influence populations through propaganda and disinformation."
        },
        engineering: {
            title: "Military Engineering",
            description: "Combat engineers and fortification emphasis",
            summary: "Combat engineers play a crucial role, with emphasis on fortification, bridging, obstacle clearing, and siege works."
        },
        "naval-infantry": {
            title: "Naval Infantry/Marines",
            description: "Amphibious assault and ship-to-shore operations",
            summary: "Specialized amphibious forces capable of ship-to-shore operations form an important component of military capability."
        },
        cavalry: {
            title: "Cavalry Tradition",
            description: "Mounted forces holding special significance",
            summary: "Mounted forces (traditional or modern equivalent) hold special prestige and tactical importance in national military tradition."
        },
        armor: {
            title: "Armor Emphasis",
            description: "Mechanized and armored forces as doctrine core",
            summary: "The military doctrine places heavy emphasis on armored and mechanized forces. Tanks form the backbone of ground operations."
        },
        airborne: {
            title: "Airborne Capability",
            description: "Rapid deployment via aircraft",
            summary: "Specialized airborne forces capable of rapid deployment and insertion by aircraft. Strategic rapid response capability."
        },
        infiltration: {
            title: "Infiltration Tactics",
            description: "Deep penetration and rear area operations",
            summary: "Doctrine emphasizes infiltration of enemy lines and operations in rear areas. Breaking the front rather than holding it."
        },
        mobilization: {
            title: "Total Mobilization",
            description: "Rapid mobilization of civilian forces",
            summary: "The nation maintains systems for rapid mobilization of civilian forces for military service. Total war capability."
        }
    }
};

// Named Doctrines mapping player choices to historical/alternate doctrines
const namedDoctrines = {
    "A-1": {
        name: "Massive Retaliation (The 'New Look')",
        maxim: "More Bang for the Buck",
        difficulty: "EXPERT",
        description: "A doctrine based on the Eisenhower administration's policy. Facing numerically superior enemies, the nation relies on nuclear deterrence rather than conventional forces. Local defenses are merely a 'tripwire' for total retaliation.",
        strengths: ["Nuclear Deterrence", "Psychological Intimidation", "Low Conventional Manpower", "Cost Efficient"],
        weaknesses: ["Inflexibility", "Lacks tools for small conflicts", "Risk of escalation", "Requires nuclear arsenal"]
    },
    "A-2": {
        name: "Sandys Logic (Technocratic Interdiction)",
        maxim: "The Pilot is Obsolete",
        difficulty: "ELITE",
        description: "Based on the British 1957 Defence White Paper. War is a mathematical equation solved by guidance systems. Manned fighters are replaced by guided missiles and SAM grids.",
        strengths: ["Technological Superiority", "Airspace Denial", "Low Manpower Requirements", "Automated Defense"],
        weaknesses: ["Vulnerable to Electronic Warfare", "No human fallback", "Research-intensive", "Expensive to maintain"]
    },
    "A-3": {
        name: "Pentomic Division (Nuclear Dispersion)",
        maxim: "Dispersion is Survival",
        difficulty: "ELITE",
        description: "The US Army's response to tactical nuclear warfare. Rather than concentrated forces, the division operates as five independent Battle Groups, each equipped with tactical nuclear weapons.",
        strengths: ["Survivability in nuclear environment", "Flexible tactics", "Self-sufficient units", "Nuclear Resilience"],
        weaknesses: ["Logistical nightmare", "Command and control chaos", "Vulnerable to conventional forces", "Complex coordination"]
    },
    "B-1": {
        name: "Deep Battle (The 'Red Steamroller')",
        maxim: "Catastrophic Systemic Failure",
        difficulty: "ADVANCED",
        description: "Soviet doctrine emphasizing simultaneous attacks across the entire front depth. Unlike narrow breakthroughs, Deep Battle paralyzes enemy response through coordinated assaults.",
        strengths: ["Overwhelming Offense", "Systemic Paralysis", "High Reinforcement Rates", "Breakthrough Capability"],
        weaknesses: ["Requires strict centralization", "Vulnerable to ambush", "Logistically demanding", "Slow to adapt"]
    },
    "B-2": {
        name: "Mobile Warfare (The 'Iron Spearhead')",
        maxim: "Speed is Armor",
        difficulty: "ADVANCED",
        description: "Derived from German Bewegungskrieg. Defense is conducted aggressively with rapid counter-attacks. Combined arms at the lowest level with high emphasis on radio communication.",
        strengths: ["Tactical Flexibility", "Rapid Response", "Aggressive Defense", "Battlefield Initiative"],
        weaknesses: ["Fuel-intensive", "Complex logistics", "Requires trained officers", "Supply dependent"]
    },
    "B-3": {
        name: "Diesel Juggernaut (Landship Doctrine)",
        maxim: "The Fortress that Moves",
        difficulty: "EXPERT",
        description: "An alternate-history doctrine featuring super-heavy tanks and armored trains. In a timeline where armor advanced faster than anti-tank weapons, these mobile fortresses dominate.",
        strengths: ["Unstoppable Momentum", "Fortress Protection", "Psychological Impact", "Armor Dominance"],
        weaknesses: ["Slow Speed", "Fuel consumption", "Vulnerable to air power", "High maintenance"]
    },
    "C-1": {
        name: "Superior Firepower (Active Defense)",
        maxim: "Steel Rain",
        difficulty: "MODERATE",
        description: "Standard Western doctrine relying on wealth to expend ammunition rather than blood. Massive organic fire support and tactical air assets dominate the battlefield.",
        strengths: ["Massive Firepower", "Air Support Integration", "Proven Western doctrine", "Casualty Efficient"],
        weaknesses: ["Requires industrial capacity", "Slow movement", "Supply-dependent", "Expensive ammunition"]
    },
    "C-2": {
        name: "Chemical/Biopunk Front (Area Denial)",
        maxim: "The Silent Spring",
        difficulty: "EXPERT",
        description: "An alternate doctrine focusing on making the battlefield uninhabitable. Gas troops in hazmat gear and biological agents create zones of denial.",
        strengths: ["Area Denial", "Psychological Terror", "Unique capabilities", "Population Dispersal"],
        weaknesses: ["International pariah status", "Indiscriminate effects", "Risk of backblast", "Difficult to control"]
    },
    "D-1": {
        name: "People's War (The Human Sea)",
        maxim: "Drowning the Enemy",
        difficulty: "MODERATE",
        description: "Maoist doctrine emphasizing political will over military might. By mobilizing the peasantry and retreating into the countryside, the army becomes invisible and ubiquitous.",
        strengths: ["Morale and Will", "Attrition Capability", "Population Mobilization", "Political Integration"],
        weaknesses: ["Lack of technology", "Long-term commitment required", "Vulnerable to concentrated force", "Slow progress"]
    },
    "D-2": {
        name: "Guerre Révolutionnaire (Counter-Insurgency State)",
        maxim: "Pacification through Control",
        difficulty: "ADVANCED",
        description: "The French response to People's War. Total control of the population's physical and mental environment through grid-based occupation and psychological warfare.",
        strengths: ["Population Control", "Rapid Response", "Psychological Dominance", "Grid-based Security"],
        weaknesses: ["Political instability", "Requires military to govern", "Moral hazards", "Resource intensive"]
    },
    "E-1": {
        name: "Fast & Light (Rapid Reaction Doctrine)",
        maxim: "Speed Beats Strength",
        difficulty: "MODERATE",
        description: "Modern doctrine emphasizing rapid deployment, light mechanization, and high mobility. Small professional forces deployed globally for quick response.",
        strengths: ["Fast Deployment", "Global Reach", "Flexible Response", "Rapid Mobilization"],
        weaknesses: ["Limited sustained combat power", "Requires logistics network", "Vulnerable to heavy forces", "Manpower limitations"]
    },
    "E-2": {
        name: "Fortress Nation (Total Defense)",
        maxim: "Our Land is Our Strength",
        difficulty: "MODERATE",
        description: "Doctrine emphasizing the defense of homeland through fortification, civil defense, and total mobilization. Every citizen is a defender.",
        strengths: ["Defensive Strength", "Mobilization Capability", "Civil-Military Integration", "Homeland Advantage"],
        weaknesses: ["No offensive capability", "Requires mobilization time", "Limited power projection", "Vulnerable to blockade"]
    },
    "F-1": {
        name: "Asymmetric Insurgency (David's Doctrine)",
        maxim: "The Mighty Fall Slow",
        difficulty: "MODERATE",
        description: "Doctrine designed for smaller nations resisting larger powers. Focus on making occupation costly, political warfare, and protracted conflict.",
        strengths: ["Attrition of Occupier", "Political Resistance", "Unconventional Advantage", "Cost Imposition"],
        weaknesses: ["Cannot seize territory", "No conventional victory possible", "Requires population support", "Long time horizon"]
    },
    "F-2": {
        name: "Cyber-Dominance (Digital Warfare State)",
        maxim: "The Code is the Weapon",
        difficulty: "ELITE",
        description: "Futuristic doctrine where cyber operations, information warfare, and network disruption form the primary battlefield. Conventional forces are secondary.",
        strengths: ["Information Control", "Infrastructure Disruption", "Deniable Operations", "Psychological Warfare"],
        weaknesses: ["Requires technological superiority", "Vulnerable to air power", "Physical defense weak", "Attribution difficult"]
    },
    "G-1": {
        name: "Hybrid Threat (Multi-Domain Warfare)",
        maxim: "War on All Fronts",
        difficulty: "EXPERT",
        description: "Integration of conventional military, irregulars, cyber, information, and economic warfare. Blurs the line between war and peace.",
        strengths: ["Multi-Domain Integration", "Psychological Confusion", "Deniability", "Resilience"],
        weaknesses: ["Difficult to counter unified response", "Requires coordination", "Attribution challenges", "Risk of escalation"]
    },
    "G-2": {
        name: "Expeditionary Capitalism (Corporate-Military State)",
        maxim: "Commerce Follows the Flag",
        difficulty: "ADVANCED",
        description: "Doctrine where military power serves primarily to expand trade and secure resources. Military-industrial fusion drives national strategy.",
        strengths: ["Economic Leverage", "Trade Protection", "Global Presence", "Industrial Backing"],
        weaknesses: ["Economically dependent", "Vulnerable to trade disruption", "High cost", "Political instability"]
    }
};

// Naval Philosophies
const navalPhilosophies = {
    "carrier": {
        title: "Carrier Strike Group (Blue Water)",
        basis: "US Navy Doctrine",
        description: "The Supercarrier is the capital ship. Focus on 'Power Projection' (striking land targets) rather than sea control. Massive logistics, multi-national task forces, jet fighters launching from sea.",
        strengths: ["Global Reach", "Power Projection", "Air Support"],
        weaknesses: ["Logistically demanding", "Vulnerable to missiles", "High cost"]
    },
    "seadenial": {
        title: "Jeune École Redux (Sea Denial)",
        basis: "Soviet Naval Strategy",
        description: "One missile is cheaper than one carrier. Focus on submarines and fast attack craft armed with heavy anti-ship missiles. Asymmetric naval warfare and 'Bastion' defense.",
        strengths: ["Cost Effective", "Asymmetric Advantage", "Defensive"],
        weaknesses: ["Limited reach", "No power projection", "Submarine dependent"]
    },
    "submersible": {
        title: "Submersible Navy (Dieselpunk Variant)",
        basis: "Alternate History",
        description: "Surface ships are obsolete. Everything goes underwater - submarine aircraft carriers, supply ships, even battleships. Sonar duels and the claustrophobia of the Silent Service.",
        strengths: ["Hidden threat", "Unique capability", "Mysterious"],
        weaknesses: ["Limited communication", "Slow surface speed", "Cramped operations"]
    }
};

// Aerial Philosophies
const aerialPhilosophies = {
    "strategic": {
        title: "Strategic Bombing (Cult of the Offensive)",
        basis: "SAC / RAF Bomber Command",
        description: "The war is won by destroying the enemy's will and industry. Fighters are secondary. 24-hour airborne alerts, massive formations of bombers.",
        strengths: ["Offensive Reach", "Industrial Destruction", "Deterrence"],
        weaknesses: ["Requires bomber fleet", "Slow response", "Vulnerable to fighters"]
    },
    "superiority": {
        title: "Air Superiority (The Dogfighters)",
        basis: "USAF Tactical Air Command",
        description: "Control the air, and the ground war wins itself. Focus on pilot training and high-performance fighters. Ace culture and napalm support.",
        strengths: ["Air Control", "Pilot Morale", "Tactical Flexibility"],
        weaknesses: ["Expensive fighters", "Pilot training required", "Limited range"]
    }
};
