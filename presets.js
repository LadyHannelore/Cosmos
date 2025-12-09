// Military Doctrine Builder - Preset Templates
// Pre-configured doctrine packages for quick loading

const doctrinePresets = {
    "soviet-1959": {
        name: "Soviet Deep Battle (1959)",
        description: "Classic Soviet operational doctrine emphasizing mass and coordination",
        selections: {
            philosophy: "offensive",
            structure: "conscript",
            domain: "land",
            tactics: "maneuver",
            technology: "modern",
            command: "centralized",
            logistics: "heavy",
            special: ["elite-units"]
        }
    },
    
    "nato-1959": {
        name: "NATO Flexible Response (1959)",
        description: "Western alliance doctrine balancing deterrence with tactical flexibility",
        selections: {
            philosophy: "balanced",
            structure: "professional",
            domain: "combined",
            tactics: "maneuver",
            technology: "cutting-edge",
            command: "decentralized",
            logistics: "heavy",
            special: ["elite-units", "intelligence-focus"]
        }
    },
    
    "guerrilla-insurgency": {
        name: "Guerrilla Insurgency",
        description: "Asymmetric warfare for non-state or resistance forces",
        selections: {
            philosophy: "defensive",
            structure: "militia",
            domain: "land",
            tactics: "guerrilla",
            technology: "legacy",
            command: "decentralized",
            logistics: "light",
            special: ["infiltration"]
        }
    },
    
    "professional-expeditionary": {
        name: "Professional Expeditionary Force",
        description: "Small, highly trained force for power projection",
        selections: {
            philosophy: "expeditionary",
            structure: "professional",
            domain: "combined",
            tactics: "maneuver",
            technology: "cutting-edge",
            command: "flexible",
            logistics: "light",
            special: ["elite-units", "airborne"]
        }
    },
    
    "defensive-fortress": {
        name: "Fortress Nation Defense",
        description: "Homeland defense focused on fortifications and territory control",
        selections: {
            philosophy: "defensive",
            structure: "hybrid",
            domain: "land",
            tactics: "siege",
            technology: "modern",
            command: "centralized",
            logistics: "depot",
            special: ["engineering"]
        }
    },
    
    "naval-dominance": {
        name: "Naval Power Projection",
        description: "Navy-centric doctrine for maritime power and protection",
        selections: {
            philosophy: "offensive",
            structure: "professional",
            domain: "naval",
            tactics: "maneuver",
            technology: "cutting-edge",
            command: "centralized",
            logistics: "heavy",
            special: ["marines"]
        }
    },
    
    "air-superiority": {
        name: "Air Superiority Focus",
        description: "Air-centric doctrine prioritizing air control",
        selections: {
            philosophy: "offensive",
            structure: "professional",
            domain: "air",
            tactics: "maneuver",
            technology: "cutting-edge",
            command: "centralized",
            logistics: "heavy",
            special: ["airborne"]
        }
    },
    
    "armor-breakthrough": {
        name: "Armor Breakthrough Doctrine",
        description: "Heavy armor-focused doctrine for rapid breakthroughs",
        selections: {
            philosophy: "offensive",
            structure: "professional",
            domain: "land",
            tactics: "maneuver",
            technology: "modern",
            command: "decentralized",
            logistics: "heavy",
            special: ["armor"]
        }
    },
    
    "balanced-practical": {
        name: "Practical Balanced Approach",
        description: "Realistic doctrine balancing all domains and resources",
        selections: {
            philosophy: "balanced",
            structure: "hybrid",
            domain: "combined",
            tactics: "maneuver",
            technology: "practical",
            command: "flexible",
            logistics: "light",
            special: []
        }
    },
    
    "cold-war-neutral": {
        name: "Cold War Neutral State",
        description: "Non-aligned doctrine emphasizing deterrence and independence",
        selections: {
            philosophy: "defensive",
            structure: "conscript",
            domain: "combined",
            tactics: "defense",
            technology: "practical",
            command: "rigid",
            logistics: "depot",
            special: ["intelligence-focus"]
        }
    }
};

/**
 * Load a preset doctrine into the selections
 * @param {string} presetKey - Key of the preset to load
 * @returns {boolean} - True if successful, false if preset not found
 */
function loadPreset(presetKey) {
    if (!doctrinePresets[presetKey]) {
        console.error(`Preset not found: ${presetKey}`);
        return false;
    }
    
    const preset = doctrinePresets[presetKey];
    
    // Apply selections to global selections object
    selections.philosophy = preset.selections.philosophy;
    selections.structure = preset.selections.structure;
    selections.domain = preset.selections.domain;
    selections.tactics = preset.selections.tactics;
    selections.technology = preset.selections.technology;
    selections.command = preset.selections.command;
    selections.logistics = preset.selections.logistics;
    selections.special = [...preset.selections.special]; // Copy array
    
    // Update UI to reflect selections
    updateUIFromSelections();
    
    return true;
}

/**
 * Get all available presets as an array
 * @returns {Array} - Array of preset objects with key and metadata
 */
function getAllPresets() {
    return Object.entries(doctrinePresets).map(([key, preset]) => ({
        key,
        name: preset.name,
        description: preset.description
    }));
}

/**
 * Get a specific preset
 * @param {string} presetKey - Key of the preset
 * @returns {Object|null} - Preset object or null if not found
 */
function getPreset(presetKey) {
    return doctrinePresets[presetKey] || null;
}
