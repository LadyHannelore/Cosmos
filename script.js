// Military Doctrine Builder Script
// NOTE: doctrineContent is imported from doctrine-data.js

// Store selections
const selections = {
    philosophy: null,
    structure: null,
    domain: null,
    tactics: null,
    technology: null,
    command: null,
    logistics: null,
    special: [] // Multi-select
};

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    // Initialize multi-page system
    window.pageManager = new PageManager();
    
    initializeCards();
    initializeButtons();
    updateCardContent();
    initializeThemeToggle();
    initializeProgressTracking();
    updateProgress();
});

// Theme Toggle
function initializeThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    const savedTheme = localStorage.getItem('theme') || 'dark';
    
    if (savedTheme === 'light') {
        document.body.classList.add('light-theme');
        themeToggle.textContent = '☀️';
    }
    
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('light-theme');
        const newTheme = document.body.classList.contains('light-theme') ? 'light' : 'dark';
        localStorage.setItem('theme', newTheme);
        themeToggle.textContent = newTheme === 'light' ? '☀️' : '🌙';
    });
}

// Progress Tracking
function initializeProgressTracking() {
    document.addEventListener('change', updateProgress);
}

function updateProgress() {
    const requiredCategories = ['philosophy', 'structure', 'domain', 'tactics', 'technology', 'command', 'logistics'];
    let completed = 0;
    
    requiredCategories.forEach(category => {
        const badge = document.getElementById(`badge-${category}`);
        if (selections[category]) {
            completed++;
            badge.classList.add('visible');
        } else {
            badge.classList.remove('visible');
        }
    });
    
    // Update special characteristics counter
    const specialCounter = document.getElementById('special-counter');
    specialCounter.textContent = `${selections.special.length} selected`;
    
    const percentage = Math.round((completed / requiredCategories.length) * 100);
    document.getElementById('progressFill').style.width = percentage + '%';
    document.getElementById('progressPercent').textContent = percentage + '%';
}

// Update card content from doctrineContent object
function updateCardContent() {
    for (const category in doctrineContent) {
        const options = doctrineContent[category];
        for (const value in options) {
            const card = document.querySelector(`.options-grid[data-category="${category}"] .option-card[data-value="${value}"]`);
            if (card) {
                const titleEl = card.querySelector('h3');
                const descEl = card.querySelector('p');
                if (titleEl) titleEl.textContent = options[value].title;
                if (descEl) descEl.textContent = options[value].description;
            }
        }
    }
}

// Initialize card click handlers
function initializeCards() {
    const optionCards = document.querySelectorAll('.option-card');
    
    optionCards.forEach(card => {
        card.addEventListener('click', function() {
            const grid = this.closest('.options-grid');
            const category = grid.dataset.category;
            const value = this.dataset.value;
            const isMultiSelect = grid.classList.contains('multi-select');
            
            if (isMultiSelect) {
                // Toggle selection for multi-select
                this.classList.toggle('selected');
                
                if (this.classList.contains('selected')) {
                    if (!selections[category].includes(value)) {
                        selections[category].push(value);
                    }
                } else {
                    selections[category] = selections[category].filter(v => v !== value);
                }
            } else {
                // Single select - deselect others first
                grid.querySelectorAll('.option-card').forEach(c => c.classList.remove('selected'));
                this.classList.add('selected');
                selections[category] = value;
            }
            
            // Hide results when selection changes
            document.getElementById('results').classList.remove('visible');
        });
    });
}

// Initialize button handlers
function initializeButtons() {
    document.getElementById('generateBtn').addEventListener('click', generateDoctrine);
    document.getElementById('resetBtn').addEventListener('click', resetSelections);
    document.getElementById('copyBtn').addEventListener('click', copyToClipboard);
    document.getElementById('printBtn').addEventListener('click', printDoctrine);
    document.getElementById('shareBtn').addEventListener('click', shareDoctrine);
    document.getElementById('saveBtn').addEventListener('click', saveDoctrine);
    document.getElementById('exportBtn').addEventListener('click', exportDoctrine);
    document.getElementById('importBtn').addEventListener('click', () => {
        document.getElementById('importFile').click();
    });
    document.getElementById('importFile').addEventListener('change', importDoctrine);
}

// Generate the doctrine summary
function generateDoctrine() {
    const resultsSection = document.getElementById('results');
    const output = document.getElementById('doctrine-output');
    const nationName = document.getElementById('nationName').value.trim() || 'Your Nation';
    
    // Check if minimum selections are made
    const requiredCategories = ['philosophy', 'structure', 'domain', 'tactics', 'technology', 'command', 'logistics'];
    const missingCategories = requiredCategories.filter(cat => !selections[cat]);
    
    if (missingCategories.length > 0) {
        output.textContent = 'ERROR: Please make a selection in all required sections before generating your doctrine.';
        resultsSection.classList.add('visible');
        return;
    }
    
    // Build the output
    let doctrineText = '';
    
    // Try to match to a named historical/alternate doctrine
    const matchedDoctrine = matchToNamedDoctrine();
    lastMatchedDoctrine = matchedDoctrine ? matchedDoctrine.name : null;
    
    const timestamp = new Date().toISOString();
    doctrineText += `[${timestamp}] DOCTRINE GENERATION INITIATED\n`;
    doctrineText += `[NATION] ${nationName}\n`;
    doctrineText += `[SYSTEM] Military Doctrine Compiler v1.0\n`;
    doctrineText += `========================================\n\n`;
    
    if (matchedDoctrine) {
        doctrineText += `[MATCH FOUND] >> ${matchedDoctrine.name}\n`;
        doctrineText += `[DIFFICULTY] ${matchedDoctrine.difficulty}\n`;
        doctrineText += `\n>>> STRATEGIC MAXIM\n    "${matchedDoctrine.maxim}"\n`;
        doctrineText += `\n>>> DOCTRINE OVERVIEW\n    ${matchedDoctrine.description}\n`;
        
        doctrineText += `\n>>> OPERATIONAL STRENGTHS\n`;
        matchedDoctrine.strengths.forEach(strength => {
            doctrineText += `    [+] ${strength}\n`;
        });
        
        doctrineText += `\n>>> OPERATIONAL WEAKNESSES\n`;
        matchedDoctrine.weaknesses.forEach(weakness => {
            doctrineText += `    [-] ${weakness}\n`;
        });
        
        doctrineText += `\n>>> COMPONENT BREAKDOWN\n`;
    } else {
        doctrineText += `[UNIQUE] Custom military doctrine generated\n`;
        doctrineText += `    Your nation has forged a unique doctrine combining diverse elements.\n`;
        doctrineText += `\n>>> COMPONENT BREAKDOWN\n`;
    }
    
    const philosophy = doctrineContent.philosophy[selections.philosophy];
    doctrineText += `\n[PHILOSOPHY] ${philosophy.title}\n    ${philosophy.summary}\n    Doctrine Vector: ${selections.philosophy.toUpperCase()}\n`;
    
    const structure = doctrineContent.structure[selections.structure];
    doctrineText += `\n[FORCE STRUCTURE] ${structure.title}\n    ${structure.summary}\n    Composition: ${selections.structure.toUpperCase()}\n`;
    
    const domain = doctrineContent.domain[selections.domain];
    doctrineText += `\n[DOMAIN FOCUS] ${domain.title}\n    ${domain.summary}\n    Primary Theater: ${selections.domain.toUpperCase()}\n`;
    
    const tactics = doctrineContent.tactics[selections.tactics];
    doctrineText += `\n[TACTICAL DOCTRINE] ${tactics.title}\n    ${tactics.summary}\n    Engagement Model: ${selections.tactics.toUpperCase()}\n`;
    
    const technology = doctrineContent.technology[selections.technology];
    doctrineText += `\n[TECHNOLOGY LEVEL] ${technology.title}\n    ${technology.summary}\n    Equipment Standard: ${selections.technology.toUpperCase()}\n`;
    
    const command = doctrineContent.command[selections.command];
    doctrineText += `\n[COMMAND AUTHORITY] ${command.title}\n    ${command.summary}\n    Control Model: ${selections.command.toUpperCase()}\n`;
    
    const logistics = doctrineContent.logistics[selections.logistics];
    doctrineText += `\n[LOGISTICS FRAMEWORK] ${logistics.title}\n    ${logistics.summary}\n    Supply Method: ${selections.logistics.toUpperCase()}\n`;
    
    // Special characteristics (if any selected)
    if (selections.special.length > 0) {
        doctrineText += `\n[SPECIAL CHARACTERISTICS]\n`;
        selections.special.forEach(trait => {
            const special = doctrineContent.special[trait];
            doctrineText += `    [*] ${special.title}\n        ${special.summary}\n`;
        });
    } else {
        doctrineText += `\n[SPECIAL CHARACTERISTICS] NONE SELECTED\n`;
    }
    
    doctrineText += `\n========================================\n`;
    doctrineText += `[SUCCESS] Doctrine compilation complete\n`;
    doctrineText += `[${timestamp}] DOCTRINE GENERATION COMPLETE\n`;
    
    output.textContent = doctrineText;
    resultsSection.classList.add('visible');
    
    // Scroll to results
    resultsSection.scrollIntoView({ behavior: 'smooth' });
}

// Attempt to match selections to a named historical doctrine
function matchToNamedDoctrine() {
    const philosophy = selections.philosophy;
    const structure = selections.structure;
    const domain = selections.domain;
    const tactics = selections.tactics;
    const technology = selections.technology;
    const command = selections.command;
    const logistics = selections.logistics;
    
    // A-1: Massive Retaliation - Nuclear deterrence, air-centric
    if (philosophy === 'offensive' && technology === 'cutting-edge' && domain === 'air' && command === 'centralized') {
        return namedDoctrines['A-1'];
    }
    
    // A-2: Sandys Logic - Air-centric, technological superiority
    if (domain === 'air' && technology === 'cutting-edge' && command === 'centralized' && tactics === 'maneuver') {
        return namedDoctrines['A-2'];
    }
    
    // A-3: Pentomic Division - Cutting edge, professional, decentralized
    if (technology === 'cutting-edge' && structure === 'professional' && command === 'decentralized') {
        return namedDoctrines['A-3'];
    }
    
    // B-1: Deep Battle - Conscript, offensive, attrition, centralized, land
    if (structure === 'conscript' && philosophy === 'offensive' && tactics === 'attrition' && command === 'centralized' && domain === 'land') {
        return namedDoctrines['B-1'];
    }
    
    // B-2: Mobile Warfare - Professional, land, maneuver, decentralized, light logistics
    if (structure === 'professional' && domain === 'land' && tactics === 'maneuver' && command === 'decentralized' && logistics === 'light') {
        return namedDoctrines['B-2'];
    }
    
    // B-3: Diesel Juggernaut - Heavy armor, attrition tactics, modern tech
    if (tactics === 'attrition' && logistics === 'heavy' && technology === 'modern' && domain === 'land') {
        return namedDoctrines['B-3'];
    }
    
    // C-1: Superior Firepower - Land attrition doctrine, heavy logistics, modern/cutting-edge
    if (domain === 'land' && tactics === 'attrition' && logistics === 'heavy' && command === 'centralized') {
        return namedDoctrines['C-1'];
    }
    
    // C-2: Chemical/Biopunk - Guerrilla or attrition with practical tech
    if ((tactics === 'guerrilla' || tactics === 'attrition') && philosophy === 'offensive' && technology === 'practical') {
        return namedDoctrines['C-2'];
    }
    
    // D-1: People's War - Militia, defensive, guerrilla
    if (structure === 'militia' && philosophy === 'defensive' && tactics === 'guerrilla') {
        return namedDoctrines['D-1'];
    }
    
    // D-2: Guerre Révolutionnaire - Conscript or militia, defensive, focused on command control
    if ((structure === 'conscript' || structure === 'militia') && philosophy === 'defensive' && command === 'centralized') {
        return namedDoctrines['D-2'];
    }
    
    // E-1: Fast & Light - Professional, light logistics, maneuver, expeditionary
    if (structure === 'professional' && logistics === 'light' && tactics === 'maneuver' && philosophy === 'expeditionary') {
        return namedDoctrines['E-1'];
    }
    
    // E-2: Fortress Nation - Defensive, heavy logistics, siege tactics
    if (philosophy === 'defensive' && tactics === 'siegecraft' && logistics === 'heavy') {
        return namedDoctrines['E-2'];
    }
    
    // F-1: Asymmetric Insurgency - Militia, guerrilla, defensive, practical tech
    if (structure === 'militia' && tactics === 'guerrilla' && philosophy === 'defensive' && technology === 'practical') {
        return namedDoctrines['F-1'];
    }
    
    // F-2: Cyber-Dominance - Cutting edge technology, decentralized command, balanced philosophy
    if (technology === 'cutting-edge' && command === 'decentralized' && philosophy === 'balanced' && tactics === 'maneuver') {
        return namedDoctrines['F-2'];
    }
    
    // G-1: Hybrid Threat - Combined arms focus with multiple characteristics
    if (domain === 'combined' && (selections.special.length >= 3)) {
        return namedDoctrines['G-1'];
    }
    
    // G-2: Expeditionary Capitalism - Professional expeditionary with heavy logistics
    if (philosophy === 'expeditionary' && structure === 'professional' && logistics === 'heavy') {
        return namedDoctrines['G-2'];
    }
    
    return null;
}
}

// Reset all selections
function resetSelections() {
    // Clear selection objects
    for (const key in selections) {
        if (Array.isArray(selections[key])) {
            selections[key] = [];
        } else {
            selections[key] = null;
        }
    }
    
    // Remove selected class from all cards
    document.querySelectorAll('.option-card').forEach(card => {
        card.classList.remove('selected');
    });
    
    // Hide results
    document.getElementById('results').classList.remove('visible');
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Copy results to clipboard
function copyToClipboard() {
    const output = document.getElementById('doctrine-output');
    const copyBtn = document.getElementById('copyBtn');
    
    // Get text content directly (now using textContent)
    const textContent = output.textContent;
    
    navigator.clipboard.writeText(textContent).then(() => {
        copyBtn.textContent = '✓ Copied!';
        copyBtn.style.background = 'var(--success-color)';
        
        setTimeout(() => {
            copyBtn.textContent = '📋 Copy to Clipboard';
            copyBtn.style.background = '';
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy:', err);
        copyBtn.textContent = '❌ Failed to copy';
    });
}

// Print doctrine
function printDoctrine() {
    window.print();
}

// Share doctrine (uses Web Share API or fallback)
function shareDoctrine() {
    const output = document.getElementById('doctrine-output');
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = output.innerHTML;
    const textContent = tempDiv.textContent || tempDiv.innerText;
    
    const doctrineText = `Check out my 1959 Alternate History Military Doctrine!\n\n${textContent}\n\nBuilt with the Military Doctrine Builder`;
    
    if (navigator.share) {
        navigator.share({
            title: 'My Military Doctrine',
            text: doctrineText,
        }).catch(err => console.log('Share cancelled:', err));
    } else {
        // Fallback: copy to clipboard and show message
        navigator.clipboard.writeText(doctrineText).then(() => {
            alert('Doctrine copied to clipboard! You can now paste it anywhere.');
        });
    }
}

// ============================================
// HOW TO CUSTOMIZE THIS FOR YOUR RP SERVER:
// ============================================
// 
// 1. Edit the 'doctrineContent' object above to change:
//    - title: The name shown on the card
//    - description: Short text shown on the card
//    - summary: The full text used in the final output
//
// 2. To ADD new options to a category:
//    - Add a new entry in the doctrineContent object
//    - Add a matching option-card in the HTML with data-value matching the key
//
// 3. To ADD new categories:
//    - Add the category to the 'selections' object
//    - Add the category content to 'doctrineContent'
//    - Add a new section in the HTML
//    - Add the category to 'requiredCategories' in generateDoctrine() if required
//    - Add output generation in generateDoctrine()
//

// Save Doctrine Function
let lastGeneratedOutput = '';
let lastMatchedDoctrine = null;

function saveDoctrine() {
    const output = document.getElementById('doctrine-output');
    
    if (!output.textContent.trim()) {
        alert('Please generate a doctrine first before saving!');
        return;
    }
    
    const nationName = document.getElementById('nationName').value.trim() || 'Unnamed Nation';
    const doctrineData = {
        nationName: nationName,
        selections: JSON.parse(JSON.stringify(selections)),
        matchedDoctrine: lastMatchedDoctrine,
        fullOutput: output.textContent,
        timestamp: new Date().toISOString()
    };
    
    DoctrineStorage.saveDoctrine(doctrineData);
    alert(`Doctrine for "${nationName}" saved successfully!`);
}

// Export Doctrine as JSON
function exportDoctrine() {
    const json = DoctrineStorage.exportAsJSON();
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `doctrines-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

// Import Doctrine from JSON
function importDoctrine(event) {
    const file = event.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = (e) => {
        const json = e.target.result;
        if (DoctrineStorage.importFromJSON(json)) {
            alert('Doctrines imported successfully!');
            // Reset file input
            event.target.value = '';
        } else {
            alert('Failed to import doctrines. Please check the JSON file format.');
        }
    };
    reader.readAsText(file);
}
// 4. To make a category multi-select:
//    - Add 'multi-select' class to the options-grid
//    - Initialize the category as an array in 'selections'
//    - Handle array output in generateDoctrine()
//
