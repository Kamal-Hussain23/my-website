# Project Brief

## 1. Website Concept
<!-- Fill in after Phase 2 — Defining the Project Brief -->

**Website Topic:** A single-page showcase of three small, interactive JavaScript tools built with plain HTML, CSS, and JavaScript — no libraries or frameworks.

**Why:** To practice core web development skills (DOM manipulation, event handling, CSS layout) while creating something useful that demonstrates practical JavaScript.

**Target Audience:** Beginner web developers and anyone looking for quick, no-signup browser tools.

**Visitor Outcome:** Try out three useful mini-tools (Color Picker, Word Counter, Tip Calculator) and understand how each one works at a glance.

**Three Main Sections:**
1. Color Picker — Pick a color and get its HEX, RGB, and HSL values instantly
2. Word Counter — Paste text to see live word count, character count, and reading time
3. Tip Calculator — Calculate tips, total, and per-person split with a few clicks

**Key Highlight:** Every tool is interactive and works entirely in the browser with zero dependencies.

---

## 2. Visual Plan
<!-- Fill in after Phase 3 — Visual Planning Prompt -->

**Mood and Tone:** Bold and playful — energetic, friendly, and approachable. Feels like a fun developer playground.

**Color Palette:**
- Background: Deep navy `#0f0f1a`
- Card surface: Dark slate `#1a1a2e`
- Primary Text: Soft white `#e0e0e0`
- Muted Text: Lavender gray `#9a9ab0`
- Brand Color: Sky blue `#4fc3f7`
- Accent Hover: Deeper blue `#039be5`
- Border / Subtle: Muted navy `#2a2a3e`

**Typography:**
- Heading Font: Poppins (rounded, friendly, modern)
- Body Font: System UI stack (`'Segoe UI', system-ui, sans-serif`)
- Code / Values: Monospace (`'Courier New', monospace`)

**Layout Approach:** Fixed top navbar with clickable section links. Hero section with title, tagline, and CTA. About section. Three tool cards in a 2-column grid (two on first row, one centered on second). Simple footer.

**Images & Graphics Style:** No images — use simple SVG icons or emoji next to each tool heading. Subtle radial gradient glow behind the hero section.

**Button & UI Style:** Soft rounded corners (`border-radius: 8px`). Primary buttons with sky blue background and white text with slight hover lift. Inputs with dark background, subtle border, and sky blue focus ring. Cards with dark surface, thin border, and gentle hover effect.

---

## 3. Interaction Specifications
<!-- Fill in after Phase 4 — Interaction Planning & Specification -->

### Interaction 1 — Live Color Preview
- **Interaction Name:** Color Picker Live Update
- **Visitor Action:** Click or drag on the color input to choose a color
- **Page Response:** Preview box updates to the selected color; HEX, RGB, and HSL fields populate with values
- **HTML Elements:** `<input type="color">`, `<div>` preview box, three `<input type="text">` read-only fields
- **JS Event:** `input`
- **Function Name:** `updateColorPreview()`
- **CSS Class Toggled:** `.color-preview` background update

### Interaction 2 — Live Word & Character Counter
- **Interaction Name:** Word Counter Stats
- **Visitor Action:** Type or paste text into the textarea
- **Page Response:** Four stat boxes (words, characters, sentences, reading time) update instantly
- **HTML Elements:** `<textarea>`, four `<span>` stat displays
- **JS Event:** `input`
- **Function Name:** `updateWordCount()`
- **CSS Class Toggled:** none (direct text content update)

### Interaction 3 — Tip Calculator with Split
- **Interaction Name:** Tip Calculator
- **Visitor Action:** Enter bill amount, pick a tip %, adjust split count
- **Page Response:** Tip amount, total, and per-person cost recalculate and display immediately
- **HTML Elements:** `<input type="number">`, tip `%` buttons, split `+`/`−` buttons, three `<strong>` result fields
- **JS Event:** `click`, `input`
- **Function Name:** `calculateTip()`
- **CSS Class Toggled:** `.active` on selected tip button

### Interaction 4 — Smooth Scroll with Active Nav Highlight
- **Interaction Name:** Nav Highlight on Scroll
- **Visitor Action:** Click a nav link or scroll through the page
- **Page Response:** Page smoothly scrolls to section; matching nav link highlights as section enters view
- **HTML Elements:** `<nav>` links, `<section>` targets
- **JS Event:** `click`, `scroll`
- **Function Name:** `highlightNav()`
- **CSS Class Toggled:** `.active` on the current nav link

---

## 4. Architecture Plan
<!-- Fill in after Phase 5 — Required Files and Architecture Prompt -->

**HTML Structure Plan:**
- `<nav>` — Fixed top navbar with `<ul class="nav-links">` containing section links (Home, About, Tools)
- `<section id="home">` — Hero with `<h1>` title, `<p>` tagline, `<a class="btn">` CTA
- `<section id="about">` — About section with `<h2>` and `<p>`
- `<section id="tools">` — Tools grid wrapper with `<div class="tools-grid">` containing three `.tool-card` divs:
  - `#color-picker` — `<input type="color">`, `<div id="colorPreview">`, three `<input type="text" readonly>` for HEX/RGB/HSL
  - `#word-counter` — `<textarea id="textInput">`, four `<span>` stat displays (`#wordCount`, `#charCount`, `#sentenceCount`, `#readTime`)
  - `#tip-calculator` — `<input type="number" id="billAmount">`, four `<button class="tip-btn">`, `<button id="splitMinus">`/`<button id="splitPlus">`, `<span id="splitCount">`, three `<strong>` result fields
- `<footer>` — Simple centered text

**CSS Architecture Plan:**
- Reset: `*` box-sizing, margin/padding reset, `html` scroll-behavior
- Base: `body` font, background `#0f0f1a`, text `#e0e0e0`, `:root` CSS variables for palette
- Nav: Fixed position, backdrop blur, flex layout, `.active` highlight state
- Hero: Full-height centering, radial gradient glow, `.btn` sky blue with hover lift
- About: Simple padding, heading + paragraph
- Tools Grid: `.tools-grid` 2-column grid, responsive to 1-column on mobile
- Tool Cards: `.tool-card` dark surface `#1a1a2e`, border, border-radius 12px, hover lift
- Color Picker: Full-width color input, preview box, `.value-row` flex, monospace inputs
- Word Counter: Textarea full-width, `.stats-row` 4-column grid, `.stat` box styling
- Tip Calculator: `.calc-row` vertical stack, `.tip-buttons` flex, `.active` button state, `.split-control` flex, `.result-box`
- Footer: Centered text, border-top, muted color
- Responsive: `@media (max-width: 640px)` grid to 1-col, stats to 2-col, nav to hamburger

**JavaScript Function Map:**
- `updateColorPreview()` — Trigger: `input` on `#colorInput` — Manipulates: `#colorPreview` background, `#hexValue`, `#rgbValue`, `#hslValue`
- `updateWordCount()` — Trigger: `input` on `#textInput` — Manipulates: `#wordCount`, `#charCount`, `#sentenceCount`, `#readTime`
- `calculateTip()` — Trigger: `click` on `.tip-btn`, `input` on `#billAmount`, `click` on split buttons — Manipulates: `.tip-btn.active` class, `#tipAmount`, `#totalAmount`, `#perPerson`, `#splitCount`
- `highlightNav()` — Trigger: `scroll` on `window` — Manipulates: `.nav-links a.active` class based on section position

**Implementation Steps:**
1. Write the HTML skeleton — nav, hero, about, tools grid with all 3 cards, footer
2. Add CSS reset and base variables (`:root` palette, fonts)
3. Style the nav (fixed, blur, links, mobile toggle)
4. Style the hero section (centering, gradient glow, CTA button)
5. Style the about section and footer
6. Build the tools grid and tool card component
7. Style each tool's inner elements (inputs, stats, buttons, results)
8. Add responsive breakpoints
9. Implement `updateColorPreview()` + test
10. Implement `updateWordCount()` + test
11. Implement `calculateTip()` + test
12. Implement `highlightNav()` + test
13. Final polish — hover states, focus rings, transitions
