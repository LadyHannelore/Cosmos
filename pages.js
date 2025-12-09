// Multi-Page Navigation System
// Handles switching between different pages and managing page state

class PageManager {
    constructor() {
        this.currentPage = 'builder';
        this.pages = ['builder', 'gallery', 'compare', 'history', 'guide'];
        this.initializePages();
        this.setupNavigation();
    }

    initializePages() {
        // Create page elements if they don't exist
        this.pages.forEach(page => {
            if (!document.getElementById(`page-${page}`)) {
                const pageDiv = document.createElement('div');
                pageDiv.id = `page-${page}`;
                pageDiv.className = 'page';
                if (page === 'builder') {
                    pageDiv.classList.add('active');
                }
                document.body.appendChild(pageDiv);
            }
        });
    }

    setupNavigation() {
        const nav = document.getElementById('main-nav');
        if (nav) {
            this.pages.forEach(page => {
                const btn = document.createElement('button');
                btn.className = 'nav-button';
                btn.dataset.page = page;
                btn.textContent = this.getPageTitle(page);
                btn.addEventListener('click', () => this.switchPage(page));
                nav.appendChild(btn);
            });
        }
    }

    getPageTitle(page) {
        const titles = {
            builder: '🔨 Builder',
            gallery: '📚 Gallery',
            compare: '⚔️ Compare',
            history: '📜 History',
            guide: '📖 Guide'
        };
        return titles[page] || page;
    }

    switchPage(page) {
        if (!this.pages.includes(page)) return;

        // Hide all pages
        this.pages.forEach(p => {
            document.getElementById(`page-${p}`).classList.remove('active');
        });

        // Show selected page
        document.getElementById(`page-${page}`).classList.add('active');
        this.currentPage = page;

        // Update active button
        document.querySelectorAll('.nav-button').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.page === page);
        });

        // Call page-specific initialization
        this.initializePage(page);

        // Scroll to top
        window.scrollTo(0, 0);
    }

    initializePage(page) {
        switch(page) {
            case 'gallery':
                this.loadGalleryPage();
                break;
            case 'compare':
                this.loadComparePage();
                break;
            case 'history':
                this.loadHistoryPage();
                break;
            case 'guide':
                this.loadGuidePage();
                break;
        }
    }

    loadGalleryPage() {
        const pageContent = document.getElementById('page-gallery');
        const doctrines = DoctrineStorage.getAllDoctrines();
        
        if (doctrines.length === 0) {
            pageContent.innerHTML = `
                <div class="page-container">
                    <h2>📚 Doctrine Gallery</h2>
                    <p>No saved doctrines yet. Create one in the Builder and save it!</p>
                </div>
            `;
            return;
        }

        let html = `
            <div class="page-container">
                <h2>📚 Doctrine Gallery</h2>
                <p>${doctrines.length} saved doctrine${doctrines.length !== 1 ? 's' : ''}</p>
                <div class="gallery-grid">
        `;

        doctrines.forEach((doctrine, idx) => {
            html += `
                <div class="gallery-card">
                    <h3>${doctrine.nationName || 'Unnamed Nation'}</h3>
                    <p class="doctrine-name">${doctrine.matchedDoctrine || 'Custom Doctrine'}</p>
                    <p class="saved-date">Saved: ${new Date(doctrine.timestamp).toLocaleDateString()}</p>
                    <div class="gallery-actions">
                        <button onclick="pageManager.viewDoctrine(${idx})" class="gallery-btn">📖 View</button>
                        <button onclick="pageManager.deleteDoctrine(${idx})" class="gallery-btn delete-btn">🗑️ Delete</button>
                    </div>
                </div>
            `;
        });

        html += `
                </div>
            </div>
        `;

        pageContent.innerHTML = html;
    }

    loadComparePage() {
        const pageContent = document.getElementById('page-compare');
        const doctrines = DoctrineStorage.getAllDoctrines();

        if (doctrines.length < 2) {
            pageContent.innerHTML = `
                <div class="page-container">
                    <h2>⚔️ Doctrine Comparison</h2>
                    <p>Save at least 2 doctrines to compare them.</p>
                </div>
            `;
            return;
        }

        let html = `
            <div class="page-container">
                <h2>⚔️ Compare Doctrines</h2>
                <div class="compare-selectors">
                    <div class="selector">
                        <label>Doctrine 1:</label>
                        <select id="compare-select-1">
                            ${doctrines.map((d, i) => `<option value="${i}">${d.nationName || 'Unnamed'}</option>`).join('')}
                        </select>
                    </div>
                    <div class="selector">
                        <label>Doctrine 2:</label>
                        <select id="compare-select-2">
                            ${doctrines.map((d, i) => `<option value="${i}" ${i === 1 ? 'selected' : ''}>${d.nationName || 'Unnamed'}</option>`).join('')}
                        </select>
                    </div>
                    <button onclick="pageManager.performComparison()" class="compare-btn">Compare</button>
                </div>
                <div id="comparison-results"></div>
            </div>
        `;

        pageContent.innerHTML = html;
    }

    loadHistoryPage() {
        const pageContent = document.getElementById('page-history');
        const history = DoctrineStorage.getHistory();

        if (history.length === 0) {
            pageContent.innerHTML = `
                <div class="page-container">
                    <h2>📜 Doctrine Evolution Timeline</h2>
                    <p>No doctrine history yet. Create and save doctrines to see your evolution timeline.</p>
                </div>
            `;
            return;
        }

        let html = `
            <div class="page-container">
                <h2>📜 Doctrine Evolution Timeline</h2>
                <div class="timeline">
        `;

        history.forEach((entry, idx) => {
            const date = new Date(entry.timestamp);
            html += `
                <div class="timeline-item">
                    <div class="timeline-marker"></div>
                    <div class="timeline-content">
                        <h4>${entry.nationName || 'Unnamed Nation'}</h4>
                        <p class="doctrine-type">${entry.matchedDoctrine || 'Custom Doctrine'}</p>
                        <p class="timeline-date">${date.toLocaleDateString()} at ${date.toLocaleTimeString()}</p>
                        <button onclick="pageManager.viewHistoryEntry(${idx})" class="history-btn">View Details</button>
                    </div>
                </div>
            `;
        });

        html += `
                </div>
            </div>
        `;

        pageContent.innerHTML = html;
    }

    loadGuidePage() {
        const pageContent = document.getElementById('page-guide');
        pageContent.innerHTML = `
            <div class="page-container guide-content">
                <h2>📖 Military Doctrine Builder Guide</h2>
                
                <section>
                    <h3>Getting Started</h3>
                    <p>Welcome to the Military Doctrine Builder! This tool helps you design military doctrines for your nation in a 1959 alternate history setting.</p>
                    <ol>
                        <li>Enter your nation's name (optional)</li>
                        <li>Select options from each of the 8 doctrine categories</li>
                        <li>Click "Generate Doctrine Summary" to see your results</li>
                        <li>Save your doctrine for later reference</li>
                    </ol>
                </section>

                <section>
                    <h3>Understanding the Categories</h3>
                    <dl>
                        <dt>Core Military Philosophy</dt>
                        <dd>What is your nation's fundamental military purpose? Defensive, Offensive, Balanced, or Expeditionary?</dd>
                        
                        <dt>Force Structure</dt>
                        <dd>How do you recruit and organize soldiers? Professional, Conscript, Militia, or Hybrid?</dd>
                        
                        <dt>Primary Domain Focus</dt>
                        <dd>Which military branch gets priority? Land, Naval, Air, or Combined Arms?</dd>
                        
                        <dt>Tactical Approach</dt>
                        <dd>How do you fight? Maneuver, Attrition, Guerrilla, or Siege warfare?</dd>
                        
                        <dt>Technology & Equipment</dt>
                        <dd>What level of technology? Cutting-Edge, Modern, Practical, or Legacy?</dd>
                        
                        <dt>Command Structure</dt>
                        <dd>How are decisions made? Centralized, Decentralized, Rigid, or Flexible?</dd>
                        
                        <dt>Logistics & Supply</dt>
                        <dd>How are troops supplied? Heavy, Light, Forage, or Depot system?</dd>
                        
                        <dt>Special Characteristics</dt>
                        <dd>Add special traits (multiple allowed) like Elite Units, Intelligence Focus, etc.</dd>
                    </dl>
                </section>

                <section>
                    <h3>Features</h3>
                    <ul>
                        <li><strong>Builder</strong> - Design your military doctrine</li>
                        <li><strong>Gallery</strong> - View and manage your saved doctrines</li>
                        <li><strong>Compare</strong> - Compare two doctrines side-by-side</li>
                        <li><strong>History</strong> - See your doctrine evolution over time</li>
                        <li><strong>Export/Import</strong> - Save doctrines as JSON files</li>
                    </ul>
                </section>

                <section>
                    <h3>Tips</h3>
                    <ul>
                        <li>Your choices are matched against 16 historical and alternate doctrines</li>
                        <li>Each doctrine has unique strengths and weaknesses to roleplay around</li>
                        <li>Save multiple doctrines to show evolution of military strategy</li>
                        <li>Use the comparison tool to see differences between strategies</li>
                        <li>Export your doctrines as JSON to share with your GM</li>
                    </ul>
                </section>
            </div>
        `;
    }

    viewDoctrine(idx) {
        const doctrine = DoctrineStorage.getAllDoctrines()[idx];
        alert(`Nation: ${doctrine.nationName}\nDoctrine: ${doctrine.matchedDoctrine || 'Custom'}\n\n${doctrine.fullOutput}`);
    }

    deleteDoctrine(idx) {
        if (confirm('Delete this doctrine?')) {
            DoctrineStorage.deleteDoctrine(idx);
            this.loadGalleryPage();
        }
    }

    performComparison() {
        const select1 = document.getElementById('compare-select-1');
        const select2 = document.getElementById('compare-select-2');
        
        if (!select1 || !select2) return;

        const doctrines = DoctrineStorage.getAllDoctrines();
        const doc1 = doctrines[parseInt(select1.value)];
        const doc2 = doctrines[parseInt(select2.value)];

        const resultsDiv = document.getElementById('comparison-results');
        resultsDiv.innerHTML = `
            <div class="comparison-view">
                <div class="comparison-column">
                    <h3>${doc1.nationName || 'Doctrine 1'}</h3>
                    <p><strong>${doc1.matchedDoctrine || 'Custom'}</strong></p>
                    <pre>${doc1.fullOutput}</pre>
                </div>
                <div class="comparison-column">
                    <h3>${doc2.nationName || 'Doctrine 2'}</h3>
                    <p><strong>${doc2.matchedDoctrine || 'Custom'}</strong></p>
                    <pre>${doc2.fullOutput}</pre>
                </div>
            </div>
        `;
    }

    viewHistoryEntry(idx) {
        const entry = DoctrineStorage.getHistory()[idx];
        alert(`Nation: ${entry.nationName}\nDoctrine: ${entry.matchedDoctrine || 'Custom'}\nDate: ${new Date(entry.timestamp).toLocaleString()}\n\n${entry.fullOutput}`);
    }
}

// Doctrine Storage System
class DoctrineStorage {
    static STORAGE_KEY = 'cosmos_doctrines';
    static HISTORY_KEY = 'cosmos_history';

    static saveDoctrine(doctrine) {
        const doctrines = this.getAllDoctrines();
        doctrines.push({
            ...doctrine,
            timestamp: new Date().toISOString()
        });
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(doctrines));
        
        // Also add to history
        const history = this.getHistory();
        history.push({
            nationName: doctrine.nationName,
            matchedDoctrine: doctrine.matchedDoctrine,
            timestamp: new Date().toISOString(),
            fullOutput: doctrine.fullOutput
        });
        localStorage.setItem(this.HISTORY_KEY, JSON.stringify(history));
    }

    static getAllDoctrines() {
        const stored = localStorage.getItem(this.STORAGE_KEY);
        return stored ? JSON.parse(stored) : [];
    }

    static deleteDoctrine(idx) {
        const doctrines = this.getAllDoctrines();
        doctrines.splice(idx, 1);
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(doctrines));
    }

    static getHistory() {
        const stored = localStorage.getItem(this.HISTORY_KEY);
        return stored ? JSON.parse(stored) : [];
    }

    static exportAsJSON() {
        const doctrines = this.getAllDoctrines();
        return JSON.stringify(doctrines, null, 2);
    }

    static importFromJSON(jsonString) {
        try {
            const doctrines = JSON.parse(jsonString);
            if (!Array.isArray(doctrines)) throw new Error('Invalid format');
            
            const existing = this.getAllDoctrines();
            const merged = [...existing, ...doctrines];
            localStorage.setItem(this.STORAGE_KEY, JSON.stringify(merged));
            return true;
        } catch (e) {
            console.error('Import failed:', e);
            return false;
        }
    }
}
