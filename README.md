# 🕵️ Military Doctrine Builder - 1959 Alternate History

A comprehensive web application for designing military doctrines for Nation Roleplay servers set in alternate 1959 timelines. Build your nation's military strategy and get matched against 10 historical and alternate doctrines.

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
- **10 Named Doctrines**: Your choices are matched against historical doctrines (Massive Retaliation, Deep Battle, Mobile Warfare, People's War, etc.)
- **27 UI/UX Features**: Progress bars, theme toggle, tooltips, print support, sharing, and more

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
| **Special** | Elite Units, Intelligence, Psyops, Engineering, Marines, Cavalry | Bonus traits |

### 🎨 UI/UX Features (27 Total)
Progress Bar • Completion Badges • Tooltip Icons • Theme Toggle • Responsive Design • Copy Button • Print Button • Share Button • Smooth Animations • Keyboard Navigation • Doctrine Matching • Strengths/Weaknesses • Multi-select Options • Selection Counter • Info Boxes • And 12 more...

### 📤 Export Options
- **Copy to Clipboard** - Paste in Discord, forums, email
- **Print to PDF** - Save or share as PDF
- **Web Share API** - Native mobile sharing
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

Your selections are matched against these 10 historical/alternate doctrines:

### Strategic-Nuclear Phylogeny
- **A-1: Massive Retaliation** - Nuclear deterrence (\"More Bang for the Buck\")
- **A-2: Sandys Doctrine** - Automated systems (\"The Pilot is Obsolete\")
- **A-3: Pentomic Division** - Dispersed nuclear units (\"Dispersion is Survival\")

### Operational-Maneuver Phylogeny
- **B-1: Deep Battle** - Simultaneous multi-layer attacks (\"Red Steamroller\")
- **B-2: Mobile Warfare** - Rapid mechanized warfare (\"Iron Spearhead\")
- **B-3: Diesel Juggernaut** - Super-heavy armor (alternate history)

### Firepower-Attrition Phylogeny
- **C-1: Superior Firepower** - Massive artillery focus (\"Steel Rain\")
- **C-2: Chemical/Biopunk** - Area denial weapons (alternate history)

### Asymmetric-Revolutionary Phylogeny
- **D-1: People's War** - Population-based guerrilla (\"Human Sea\")
- **D-2: Guerre Révolutionnaire** - Counter-insurgency control

Each matched doctrine shows: Strategic Maxim • Description • Strengths • Weaknesses

---

## 🛠️ Technical Details

### What You Get
- **4 Application Files** (70 KB total)
  - `index.html` - Page structure
  - `styles.css` - Styling + responsive design
  - `script.js` - All interactivity
  - `doctrine-data.js` - All content data

### Requirements
- **None!** Pure HTML/CSS/JavaScript
- No server needed • No database required • No build step • Works offline after first load

### Browser Support
✅ Chrome 90+ • ✅ Firefox 88+ • ✅ Safari 14+ • ✅ Edge 90+ • ✅ Mobile browsers

### Performance
- **Total Size**: 70 KB
- **Load Time**: <100ms on most connections
- **Zero Dependencies**: No external libraries
- **Offline Ready**: Works without internet after first load

---

## 🎨 Customization Guide

### Add a New Doctrine

Edit `doctrine-data.js` and add to `namedDoctrines`:

```javascript
\"X-1\": {
    name: \"Your Doctrine Name\",
    maxim: \"Your Strategic Maxim\",
    description: \"Your doctrine description...\",
    strengths: [\"Strength 1\", \"Strength 2\"],
    weaknesses: [\"Weakness 1\", \"Weakness 2\"]
}
```

Then add matching logic in `script.js` `matchToNamedDoctrine()` function.

### Change Colors

Edit `:root` variables in `styles.css`:

```css
:root {
    --primary-color: #2c3e50;      /* Dark color */
    --accent-color: #c0392b;       /* Alert color */
    --gold-color: #d4af37;         /* Accents */
    /* ...etc... */
}
```

### Add a New Category

1. Add section to `index.html` with 4 option cards
2. Add category to `doctrineContent` in `doctrine-data.js`
3. Initialize category in `selections` object in `script.js`
4. Add output generation in `generateDoctrine()` function
5. Add to required categories check if mandatory

---

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
