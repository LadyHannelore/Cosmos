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
    initializeCards();
    initializeButtons();
    updateCardContent();
});

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
}

// Generate the doctrine summary
function generateDoctrine() {
    const resultsSection = document.getElementById('results');
    const output = document.getElementById('doctrine-output');
    
    // Check if minimum selections are made
    const requiredCategories = ['philosophy', 'structure', 'domain', 'tactics', 'technology', 'command', 'logistics'];
    const missingCategories = requiredCategories.filter(cat => !selections[cat]);
    
    if (missingCategories.length > 0) {
        output.innerHTML = `<div class="warning">Please make a selection in all required sections before generating your doctrine.</div>`;
        resultsSection.classList.add('visible');
        return;
    }
    
    // Build the output
    let doctrineText = '';
    
    // Try to match to a named historical/alternate doctrine
    const matchedDoctrine = matchToNamedDoctrine();
    
    if (matchedDoctrine) {
        doctrineText += `<h2>${matchedDoctrine.name}</h2>\n`;
        doctrineText += `<p><strong>Strategic Maxim:</strong> "${matchedDoctrine.maxim}"</p>\n`;
        doctrineText += `<p><strong>Overview:</strong> ${matchedDoctrine.description}</p>\n\n`;
        
        doctrineText += `<h3>Strengths</h3>\n`;
        matchedDoctrine.strengths.forEach(strength => {
            doctrineText += `<p>• ${strength}</p>\n`;
        });
        
        doctrineText += `<h3>Weaknesses</h3>\n`;
        matchedDoctrine.weaknesses.forEach(weakness => {
            doctrineText += `<p>• ${weakness}</p>\n`;
        });
        
        doctrineText += `<h3>Your Doctrine Components</h3>\n`;
    } else {
        doctrineText += `<h2>Custom Military Doctrine</h2>\n`;
        doctrineText += `<p>Your nation has forged a unique military doctrine combining diverse elements:</p>\n\n`;
    }
    
    doctrineText += `<h3>⚔️ CORE PHILOSOPHY</h3>\n`;
    doctrineText += `<p>${doctrineContent.philosophy[selections.philosophy].title}: ${doctrineContent.philosophy[selections.philosophy].summary}</p>\n\n`;
    
    doctrineText += `<h3>🏛️ FORCE STRUCTURE</h3>\n`;
    doctrineText += `<p>${doctrineContent.structure[selections.structure].title}: ${doctrineContent.structure[selections.structure].summary}</p>\n\n`;
    
    doctrineText += `<h3>🎯 PRIMARY DOMAIN</h3>\n`;
    doctrineText += `<p>${doctrineContent.domain[selections.domain].title}: ${doctrineContent.domain[selections.domain].summary}</p>\n\n`;
    
    doctrineText += `<h3>⚔️ TACTICAL APPROACH</h3>\n`;
    doctrineText += `<p>${doctrineContent.tactics[selections.tactics].title}: ${doctrineContent.tactics[selections.tactics].summary}</p>\n\n`;
    
    doctrineText += `<h3>🔧 TECHNOLOGY & EQUIPMENT</h3>\n`;
    doctrineText += `<p>${doctrineContent.technology[selections.technology].title}: ${doctrineContent.technology[selections.technology].summary}</p>\n\n`;
    
    doctrineText += `<h3>📋 COMMAND STRUCTURE</h3>\n`;
    doctrineText += `<p>${doctrineContent.command[selections.command].title}: ${doctrineContent.command[selections.command].summary}</p>\n\n`;
    
    doctrineText += `<h3>📦 LOGISTICS</h3>\n`;
    doctrineText += `<p>${doctrineContent.logistics[selections.logistics].title}: ${doctrineContent.logistics[selections.logistics].summary}</p>\n\n`;
    
    // Special characteristics (if any selected)
    if (selections.special.length > 0) {
        doctrineText += `<h3>⭐ SPECIAL CHARACTERISTICS</h3>\n`;
        selections.special.forEach(trait => {
            doctrineText += `<p>• ${doctrineContent.special[trait].title}: ${doctrineContent.special[trait].summary}</p>\n`;
        });
    }
    
    output.innerHTML = doctrineText;
    resultsSection.classList.add('visible');
    
    // Scroll to results
    resultsSection.scrollIntoView({ behavior: 'smooth' });
}

// Attempt to match selections to a named historical doctrine
function matchToNamedDoctrine() {
    // Simple matching based on combinations
    // This can be expanded with more sophisticated matching logic
    
    const philosophy = selections.philosophy;
    const structure = selections.structure;
    const domain = selections.domain;
    const tactics = selections.tactics;
    const technology = selections.technology;
    const command = selections.command;
    const logistics = selections.logistics;
    
    // Massive Retaliation match
    if (philosophy === 'offensive' && structure === 'professional' && technology === 'cutting-edge' && 
        domain === 'air' && command === 'centralized') {
        return namedDoctrines['A-1'];
    }
    
    // Sandys Logic match
    if (domain === 'air' && technology === 'cutting-edge' && structure === 'professional' && 
        command === 'centralized') {
        return namedDoctrines['A-2'];
    }
    
    // Pentomic Division match
    if (technology === 'cutting-edge' && structure === 'professional' && tactics === 'maneuver' && 
        command === 'decentralized') {
        return namedDoctrines['A-3'];
    }
    
    // Deep Battle match
    if (structure === 'conscript' && philosophy === 'offensive' && tactics === 'attrition' && 
        command === 'centralized' && domain === 'land') {
        return namedDoctrines['B-1'];
    }
    
    // Mobile Warfare match
    if (structure === 'professional' && domain === 'land' && tactics === 'maneuver' && 
        command === 'decentralized' && logistics === 'light') {
        return namedDoctrines['B-2'];
    }
    
    // People's War match
    if (structure === 'militia' && philosophy === 'defensive' && tactics === 'guerrilla') {
        return namedDoctrines['D-1'];
    }
    
    // Superior Firepower match
    if (domain === 'land' && tactics === 'attrition' && technology === 'modern' && 
        command === 'centralized' && logistics === 'heavy') {
        return namedDoctrines['C-1'];
    }
    
    return null;
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
    
    // Get text content (strip HTML)
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = output.innerHTML;
    const textContent = tempDiv.textContent || tempDiv.innerText;
    
    navigator.clipboard.writeText(textContent).then(() => {
        copyBtn.textContent = 'Copied!';
        copyBtn.classList.add('copied');
        
        setTimeout(() => {
            copyBtn.textContent = 'Copy to Clipboard';
            copyBtn.classList.remove('copied');
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy:', err);
        copyBtn.textContent = 'Failed to copy';
    });
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
// 4. To make a category multi-select:
//    - Add 'multi-select' class to the options-grid
//    - Initialize the category as an array in 'selections'
//    - Handle array output in generateDoctrine()
//
