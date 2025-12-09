# 🕵️ Military Doctrine Builder - 1959 Alternate History

A comprehensive web application for designing military doctrines for Nation Roleplay servers set in alternate 1959 timelines. Build your nation's military strategy and get matched against 16 historical and alternate doctrines.

**Live Demo**: Push to GitHub, enable Pages, and it's live at `https://yourusername.github.io/Cosmos`

---

## ⚡ Quick Start (2 Minutes)

### Deploy to GitHub Pages
```bash
git add .
git commit -m "Military Doctrine Builder"
git push origin main
```
Then go to **Settings → Pages → Source: main/root** and wait 1-2 minutes.

### Use Locally
Just open `index.html` in any modern browser. That's it!

---

## ✨ Features

### 🎯 Core Functionality
- **8 Doctrine Categories**: Philosophy, Force Structure, Domain, Tactics, Technology, Command, Logistics, Special Characteristics
- **16 Named Doctrines**: Your choices are matched against historical doctrines (A-1 through G-2 difficulty ratings)
- **27+ UI/UX Features**: Progress bars, theme toggle, tooltips, print support, sharing, multi-page navigation, and more

### 📊 Categories

| Category | Options | Purpose |
|----------|---------|---------|
| **Philosophy** | Defensive, Offensive, Balanced, Expeditionary | Military purpose |
| **Structure** | Professional, Conscript, Militia, Hybrid | Force composition |
| **Domain** | Land, Naval, Air, Combined | Branch priority |
| **Tactics** | Maneuver, Attrition, Guerrilla, Siege | Combat approach |
| **Technology** | Cutting-Edge, Modern, Practical, Legacy | Equipment level |
| **Command** | Centralized, Decentralized, Rigid, Flexible | Decision-making |
| **Logistics** | Heavy, Light, Forage, Depot | Supply method |
| **Special** | Elite Units, Intelligence, Psyops, Engineering, Marines, Cavalry, Armor, Airborne, Infiltration, Mobilization | Bonus traits |

### 🎨 UI/UX Features (27+)
Progress Bar • Completion Badges • Tooltip Icons • Theme Toggle • Responsive Design • Copy Button • Print Button • Share Button • Smooth Animations • Keyboard Navigation • Doctrine Matching • Strengths/Weaknesses • Multi-select Options • Selection Counter • Info Boxes • Multi-page Navigation • Save/Load Doctrines • Export as JSON • Import from JSON • Doctrine Gallery • Compare Tool • Evolution Timeline • Help Guide • And 5+ more...

### 📤 Export Options
- **Copy to Clipboard** - Paste in Discord, forums, email
- **Print to PDF** - Save or share as PDF
- **Web Share API** - Native mobile sharing
- **Save to Library** - Store doctrines in browser localStorage
- **Export as JSON** - Download doctrine collection as backup
- **Import from JSON** - Restore doctrine collection
- **Print-Optimized** - Clean, readable formatting

---

## 🎮 How to Use

### For Players
1. **Open the app** - Click link your GM provides
2. **Select choices** - Answer 8 questions about your military
3. **Watch progress** - See the green checkmarks and progress bar
4. **Generate doctrine** - Click "Generate Doctrine Summary"
5. **Export** - Copy, print, or share your doctrine

### For Game Masters
1. **Deploy** - Follow Quick Start above (2 minutes)
2. **Share link** - Send to your Nation RP community
3. **Players use it** - They generate their doctrines
4. **Roleplay consequences** - Use doctrines to guide military behavior

### For Developers
1. **Customize** - Edit `doctrine-data.js` to add doctrines
2. **Change colors** - Edit `:root` variables in `styles.css`
3. **Add categories** - Follow the patterns in HTML/JS
4. **Deploy** - Works on any static hosting (GitHub Pages, Netlify, etc.)

---

## 📚 Doctrine Matching

Your selections are matched against these 16 historical/alternate doctrines:

### Strategic-Nuclear Phylogeny
- **A-1: Massive Retaliation** - Nuclear deterrence, expert-level doctrine
- **A-2: Sandys Logic** - Technocratic interdiction, elite-level doctrine
- **A-3: Pentomic Division** - Nuclear dispersion, elite-level doctrine

### Operational-Maneuver Phylogeny
- **B-1: Deep Battle** - Soviet steamroller doctrine, advanced-level
- **B-2: Mobile Warfare** - German Blitzkrieg tradition, advanced-level
- **B-3: Diesel Juggernaut** - Alternate armor-focused doctrine, expert-level

### Firepower-Attrition Phylogeny
- **C-1: Superior Firepower** - Western active defense, moderate-level
- **C-2: Chemical/Biopunk** - Area denial systems, expert-level

### Asymmetric-Revolutionary Phylogeny
- **D-1: People's War** - Maoist population mobilization, moderate-level
- **D-2: Guerre Révolutionnaire** - French counter-insurgency, advanced-level

### Modern-Expeditionary Phylogeny
- **E-1: Fast & Light** - Rapid deployment doctrine, moderate-level
- **E-2: Fortress Nation** - Total homeland defense, moderate-level

### Resistance-Asymmetric Phylogeny
- **F-1: Asymmetric Insurgency** - David vs Goliath doctrine, moderate-level
- **F-2: Cyber-Dominance** - Digital warfare state, elite-level

### Integrated-Future Phylogeny
- **G-1: Hybrid Threat** - Multi-domain warfare, expert-level
- **G-2: Expeditionary Capitalism** - Military-industrial capitalism, advanced-level

---

## 📊 Doctrine Details

### Difficulty Ratings
- **MODERATE** - Easier to master, proven strategies
- **ADVANCED** - Complex coordination, modern systems
- **EXPERT** - Specialized approach, unique challenges
- **ELITE** - Cutting-edge or highly experimental

Each doctrine includes:
- **Strategic Maxim** - Core philosophy in one sentence
- **4 Operational Strengths** - What this doctrine does well
- **4 Operational Weaknesses** - Vulnerabilities and challenges

---

## 🎮 How to Use

### For Players
1. **Open the app** - Click link your GM provides
2. **Select choices** - Answer 8 questions about your military
3. **Watch progress** - See the green checkmarks and progress bar
4. **Generate doctrine** - Click "Generate Doctrine Summary"
5. **Export** - Copy, print, or share your doctrine
6. **Save** - Store in your browser or export as JSON

### For Game Masters
1. **Deploy** - Follow Quick Start above (2 minutes)
2. **Share link** - Send to your Nation RP community
3. **Players use it** - They generate and save their doctrines
4. **Roleplay consequences** - Use doctrines to guide military behavior
5. **Track evolution** - See how doctrines change with the timeline

### For Developers
1. **Customize** - Edit `doctrine-data.js` to add doctrines
2. **Change colors** - Edit `:root` variables in `styles.css`
3. **Add categories** - Follow the patterns in HTML/JS
4. **Deploy** - Works on any static hosting (GitHub Pages, Netlify, etc.)

---

## 🛠️ Technical Details

### What You Get
- **5 Application Files** (100 KB total)
  - `index.html` - Page structure
  - `styles.css` - Styling + responsive design + multi-page layouts
  - `script.js` - All interactivity and generation logic
  - `pages.js` - Multi-page navigation and doctrine storage
  - `doctrine-data.js` - All doctrine and content data

### Requirements
- **None!** Pure HTML/CSS/JavaScript
- No server needed • No database required • No build step • Works offline after first load

### Browser Support
✅ Chrome 90+ • ✅ Firefox 88+ • ✅ Safari 14+ • ✅ Edge 90+ • ✅ Mobile browsers

### Performance
- **Total Size**: ~100 KB (5 files)
- **Load Time**: <100ms on most connections
- **Zero Dependencies**: No external libraries or frameworks
- **Offline Ready**: Works without internet after first load
- **Storage**: Uses browser localStorage for doctrine persistence (unlimited for most browsers)

### Multi-Page System
The application includes 5 pages accessed via navigation bar:
- **Builder** - Create and customize doctrines
- **Gallery** - View, delete, and manage saved doctrines
- **Compare** - Side-by-side comparison of two doctrines
- **History** - Timeline view of doctrine evolution
- **Guide** - Help documentation and usage tips

### Data Persistence
- Doctrines saved to browser localStorage (persists after closing browser)
- Export/Import functionality via JSON files for backup and sharing
- DoctrineStorage class manages all data operations

---

## 🎨 Customization Guide

### Add a New Doctrine

Edit `doctrine-data.js` and add to `namedDoctrines`:

```javascript
"X-1": {
    name: "Your Doctrine Name",
    maxim: "Your Strategic Maxim",
    difficulty: "MODERATE",  // MODERATE, ADVANCED, EXPERT, ELITE
    description: "Your doctrine description...",
    strengths: ["Strength 1", "Strength 2", "Strength 3", "Strength 4"],
    weaknesses: ["Weakness 1", "Weakness 2", "Weakness 3", "Weakness 4"]
}
```

Then add matching logic in `script.js` in the `matchToNamedDoctrine()` function.

### Change Colors

Edit `:root` variables in `styles.css`:

```css
:root {
    --bg-dark-primary: #0a1428;     /* Primary dark background */
    --bg-dark-secondary: #2d5a3d;   /* Secondary dark background */
    --accent-color: #dc143c;        /* Alert/highlight color */
    --gold-color: #d4af37;          /* Accent color */
    --text-color: #e0e0e0;          /* Primary text */
    --secondary-text-color: #b0b0b0; /* Secondary text */
    /* ...etc... */
}
```

The same variables work for both light and dark themes via `.light-theme` class.

### Add a New Category

1. Add section to `index.html` with 4 option cards in the builder
2. Add category to `doctrineContent` in `doctrine-data.js`
3. Initialize category in `selections` object in `script.js` 
4. Add output generation in `generateDoctrine()` function
5. Add to `requiredCategories` array if mandatory
6. Update the matching algorithm in `matchToNamedDoctrine()` if needed

### Add a New Page

1. Create page HTML structure in `index.html` (the builder page is already wrapped)
2. Add page name to `pages` array in `PageManager` constructor in `pages.js`
3. Add title mapping in `getPageTitle()` method
4. Create `load[PageName]Page()` method in `PageManager` class
5. Add page-specific CSS styles in `styles.css`

------

## 📖 File Structure

```
Cosmos/
├── index.html              (15 KB) - Main application
├── styles.css              (14 KB) - All styling
├── script.js               (14 KB) - All functionality
├── doctrine-data.js        (19 KB) - All content
├── README.md               (this file)
└── .git/                   - Version control
```

---

## 🚀 Deployment

### GitHub Pages (Recommended)
1. Push repository to GitHub
2. Go to Settings → Pages
3. Source: `main` branch / `root` folder
4. Site live at: `https://yourusername.github.io/Cosmos`

### Other Static Hosting
Works on any static host: Netlify • GitLab Pages • Vercel • AWS S3 • Any web server

### Local Testing
Just open `index.html` in a browser. No server needed!

---

## 💡 Tips for Roleplayers

### Make Consistent Choices
- Professional military → Centralized command
- Militia forces → Guerrilla tactics
- Advanced tech → Centralized to coordinate
- Large manpower → Attrition tactics

### Use Your Weaknesses
Your doctrine's weaknesses are features! They create interesting roleplay:
- Logistics fragile? → Supply convoys get raided
- Slow movement? → Enemy outmaneuvers you
- Vulnerable to air? → Rely on allies or find cover

### Build a Nation Around It
- What percentage of economy is military?
- How do you conscript/recruit soldiers?
- What's your nuclear policy?
- How do you train soldiers?
- What's your diplomatic stance?

### Evolve Your Doctrine
Doctrines change over time! If you suffer defeats, maybe you shift approaches. That's great roleplay!

---

## 🎓 Historical Context (1959)

The year 1959 is a fascinating military crossroads:
- **Nuclear Age**: Atomic weapons reshape warfare
- **Jet Aircraft**: Speed changes everything
- **Cold War Peak**: Ideological conflict dominates
- **Technology Boom**: Early computers, missiles, guided weapons
- **Decolonization**: Old empires losing control
- **Last Cavalry**: Mounted warfare becoming obsolete
- **Weird Science**: Anything seems possible to futurists

Your doctrine builder captures this moment, allowing:
✅ Historical 1959 doctrines • ✅ Alternate history variants • ✅ Dieselpunk aesthetics • ✅ Weird War elements

---

## ❓ FAQ

**Q: Can I add my own doctrines?**
A: Yes! Edit `doctrine-data.js` and add to `namedDoctrines`.

**Q: Does it collect data?**
A: No! Everything runs in your browser. Only theme preference is saved locally.

**Q: Can I customize the colors?**
A: Yes! Edit `:root` variables in `styles.css`.

**Q: How do I print my doctrine?**
A: Click the 🖨️ button. Choose \"Save as PDF\" in the print dialog.

**Q: Can I share my doctrine?**
A: Yes! Click 📤 Share button for mobile, or 📋 Copy and paste text anywhere.

**Q: Will it work on my phone?**
A: Yes! Fully responsive. Works on any device with a modern browser.

**Q: Can I embed this on my website?**
A: Not yet, but you can link to it on GitHub Pages. Embedding support could be added.

**Q: How do I suggest improvements?**
A: Edit the files and test locally first. Submit pull requests with improvements!

---

## 🎯 Use Cases

### For Nation RP Communities
- Give players a framework for military customization
- Create balanced military forces through doctrine variety
- Generate roleplay hooks through doctrine weaknesses
- Teach players about real military history (1959)

### For Worldbuilding
- Design military cultures for fictional nations
- Create realistic alternate history scenarios
- Explore \"what if\" military technology divergences
- Build coherent military-economy relationships

### For Game Design
- Inspire TTRPG (tabletop RPG) mechanics
- Create faction identities through doctrine
- Generate tactical challenges through weaknesses
- Build campaign-spanning military conflicts

### For Education
- Teach Cold War history interactively
- Explain military doctrine concepts
- Show doctrine-strategy connections
- Illustrate real military decision-making

---

## 🌍 Examples

### Example 1: \"The Red Steamroller\"
Offensive • Conscript • Land • Attrition • Modern • Centralized • Heavy • Psychological Warfare
**Matches**: Deep Battle doctrine. Soviet-style overwhelming power.

### Example 2: \"The Fast Response\"
Balanced • Professional • Land • Maneuver • Cutting-Edge • Decentralized • Light • Elite Units + Intelligence
**Matches**: Mobile Warfare doctrine. German-style rapid response.

### Example 3: \"The Fortress Nation\"
Defensive • Militia • Land • Siegecraft • Practical • Rigid • Depot • Military Engineering + Elite Units
**Matches**: No historical match. A unique defensive doctrine.

---

## 📞 Support & Documentation

**Getting Started?**
- Open `index.html` in your browser
- Read the tooltips (?) for help
- Check info boxes for tips

**Deploying to GitHub Pages?**
- Push files to GitHub
- Settings → Pages → main/root
- Enable, wait 1-2 minutes, done!

**Want to customize?**
- Edit `doctrine-data.js` to add content
- Edit `:root` in `styles.css` to change colors
- Read code comments for details

**Find a bug?**
- Check browser console (F12)
- Try different browser
- Clear cache and refresh

---

## 📋 Checklist for Game Masters

- [ ] Read this README
- [ ] Test locally (open index.html)
- [ ] Push to GitHub
- [ ] Enable GitHub Pages
- [ ] Test live link
- [ ] Share with players
- [ ] Gather feedback
- [ ] Customize doctrines (optional)
- [ ] Share final link in Discord

---

## 🎊 Credits

- **Military Doctrine Research**: Comprehensive analysis of 1959 military strategies
- **1959 Historical Doctrines**: US, USSR, UK, France, Israel, Germany
- **Alternate History Variants**: Dieselpunk, Weird War, speculative technologies
- **UI/UX Design**: Cold War aesthetic with modern accessibility

---

## 📄 License

Free to use and modify for your Nation RP community. No attribution required, but appreciated!

---

**Built for roleplayers who want deep military doctrine customization for their 1959 alternate history worlds.** ⚔️

*Version 1.0 | December 2025 | Ready for GitHub Pages*
