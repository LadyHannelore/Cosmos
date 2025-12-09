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
}

// Generate the doctrine summary
function generateDoctrine() {
    const resultsSection = document.getElementById('results');
    const output = document.getElementById('doctrine-output');
    
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
    
    const timestamp = new Date().toISOString();
    doctrineText += `[${timestamp}] DOCTRINE GENERATION INITIATED\n`;
    doctrineText += `[SYSTEM] Military Doctrine Compiler v1.0\n`;
    doctrineText += `========================================\n\n`;
    
    if (matchedDoctrine) {
        doctrineText += `[MATCH FOUND] >> ${matchedDoctrine.name}\n`;
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
// 4. To make a category multi-select:
//    - Add 'multi-select' class to the options-grid
//    - Initialize the category as an array in 'selections'
//    - Handle array output in generateDoctrine()
//
