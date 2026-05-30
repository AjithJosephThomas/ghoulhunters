# PRP — Ghoulhunters Static Website

**Document type:** Product Requirements Prompt (PRP)  
**Product:** Ghoulhunters hostable education website  
**Audience:** Grade 6 students, teachers, parents; optional adult help for first setup  
**Version:** 2.2 — **Nature / biodiversity · Grade 6 · GitHub Pages · CSS animations**  
**Related docs:** `business-requirements.md`, `solution-design.md`, `queensland-compliance.md`

---

## 1. Purpose of this PRP

This PRP defines a **simple, maintainable, static website** for **Ghoulhunters** — a **nature, environment, and biodiversity** project focused on protecting the **Brisbane River** from invasive freshwater gold clam.

Grade 6 students can edit, understand, and deploy it to **GitHub Pages** without a complex framework.

### 1.1 Site identity — nature, environment, biodiversity

| Theme | What the website communicates |
|---|---|
| **Nature** | Rivers, waterways, plants and animals, outdoor places we care for |
| **Environment** | Healthy ecosystems, pollution prevention, “leave no trace” by the river |
| **Biodiversity** | Native species vs invasive pests; every species has a role in the web of life |
| **Biosecurity** | How humans can help or harm nature when we move plants, animals, or mud |

**Visual identity must match the theme:** colours should feel like **forest, water, earth, and sky** — not a generic tech startup or gaming site.

**STEM MAD link:** Caring for our common home (Laudato Si’) — science in service of **living ecosystems**.

**Out of scope (Phase 2):** Report form backend, user login, mobile app store.

### 1.2 Design goals

| Goal | How we achieve it |
|---|---|
| **Nature-first look** | Biodiversity colour tokens in `theme.css` (forest, river, earth, sky) |
| **Simple** | HTML + CSS + small JS — students edit real files |
| **Maintainable** | One page per topic; shared header/footer; semantic colour names |
| **Easy deploy** | GitHub Pages from `/website` — no build step |
| **Clean, jazzy, exciting** | Motion and gradients inspired by **water and leaves**, not neon arcade |
| **CSS animations** | Pure CSS in `animations.css` — gentle, organic movement |
| **STEM MAD ready** | All pages, diagrams, compliance text |

---

## 2. Technology choice — right stack for these requirements

We need technology that supports **all** of the following at once:

| Requirement | Must support |
|---|---|
| Nature / biodiversity education site | Rich content pages, images, diagrams |
| Grade 6 maintainability | Edit without npm, TypeScript, or frameworks |
| GitHub Pages hosting | Static files only |
| Clean, jazzy, exciting + CSS animations | Modern CSS, no heavy UI library |
| STEM MAD / Council presentation | Fast load, works on school Wi‑Fi and phones |
| Biosecurity accuracy | Easy to update text in HTML |

### 2.1 Decision: recommended stack ✅

| Layer | Technology | Why this is the **right** choice |
|---|---|---|
| **Structure** | **HTML5** | Universal; students learn web standards; perfect for content about species and habitats |
| **Styling** | **CSS3** (`theme.css` + `animations.css`) | Full control over **nature palette** and organic animations; no framework overrides |
| **Behaviour** | **Vanilla JavaScript** (`site.js`, &lt;60 lines) | Load shared nav/footer; optional scroll-reveal for biodiversity sections |
| **Graphics** | **SVG** (diagrams + optional leaf/wave shapes) | Sharp at any size; small files; fits environmental infographics |
| **Icons** | **Material Symbols** (CDN) | `water`, `eco`, `forest`, `pest_control` — nature-appropriate icons, no install |
| **Fonts** | **Nunito** + **Roboto** (Google Fonts CDN) | Nunito: soft, organic headings; Roboto: clear body text for adults |
| **Hosting** | **GitHub Pages** (`/website` folder) | Free HTTPS; one `git push` to update; ideal for school projects |
| **Version control** | **Git + GitHub** | Team collaboration; STEM MAD design history |

**Official name for this approach:** *static site* or *hand-coded environmental education website*.

### 2.2 Technologies we evaluated and rejected ❌

| Technology | Verdict | Why not for Ghoulhunters |
|---|---|---|
| **Vue.js / React** | ❌ Reject | Build tools, components, debugging — blocks Grade 6 ownership; overkill for 6 content pages |
| **Vuetify / Material UI** | ❌ Reject | Hard to customise to **biodiversity** palette; large download; needs npm |
| **WordPress / CMS** | ❌ Reject | Hosting complexity; students don’t learn HTML/CSS |
| **Google Sites / Canva only** | ❌ Reject | Limited animations and design control; weak “we built this” story for STEM MAD |
| **Single-page app frameworks** | ❌ Reject | Bad for SEO, refresh issues on GitHub Pages without extra config |
| **Animation libraries** (GSAP, AOS) | ❌ Reject | Extra JS dependency; pure CSS meets PRP and teaches standards |
| **Sass / Less** | ⚠️ Optional | Teacher-only; plain CSS variables are enough |
| **11ty / Hugo** | ⚠️ Optional | Teacher-only if site grows; not needed for v1 |

### 2.3 Optional teacher-only add-ons (not required)

| Add-on | When to use |
|---|---|
| VS Code **Live Server** | Preview header/footer locally |
| **GitHub Actions** | Auto-deploy — only if class outgrows manual push |
| Embedded **Google Form** | Phase 2 sighting reports |

### 2.4 Stack summary diagram

```
┌─────────────────────────────────────────────────────────┐
│  GHOULHUNTERS — Biodiversity education website          │
├─────────────────────────────────────────────────────────┤
│  HTML pages (content: species, river, team, blueprint)   │
│       ↓                                                  │
│  theme.css ──► nature colour tokens (forest, river…)     │
│  animations.css ──► water/leaf motion, reduced-motion    │
│       ↓                                                  │
│  site.js ──► shared nav + scroll reveal (minimal)        │
│       ↓                                                  │
│  SVG + images (ecosystem diagrams, species photos)       │
│       ↓                                                  │
│  GitHub Pages (static hosting, HTTPS, QR-friendly)     │
└─────────────────────────────────────────────────────────┘
```

### 2.5 What students actually edit

| File type | Student skill | Example task |
|---|---|---|
| `.html` | ⭐ Easy | Add a fact about the Brisbane River |
| `theme.css` | ⭐⭐ Medium | Change `--color-river` to a darker blue |
| `animations.css` | ⭐⭐ Medium | Slow down `--anim-slow` |
| `site.js` | ⭐⭐⭐ Teacher | Rarely — copy template once |
| `.svg` | ⭐⭐⭐ With help | Update diagram label |

**Material-inspired layout (not Material UI):** rounded cards, soft shadows, nature icons via CDN — no npm.

---

## 3. Goals and success criteria

| Goal | Success criteria |
|---|---|
| Grade 6 can edit text | Students change words in `.html` files without breaking the site |
| Grade 6 can change colours | Students edit variables at top of `css/theme.css` |
| GitHub Pages works | Site loads at `https://<username>.github.io/<repo>/` |
| Nature / biodiversity theme | All pages use shared **ecosystem colour** variables (§7.1) |
| All pages exist | 6 HTML pages (see §5) with real project content |
| Mobile-friendly | Site readable on a phone (responsive CSS) |
| Compliance | Footer on every page: disclaimer + **13 25 23** |
| Blueprint diagrams | 4 diagrams on `blueprint.html` (SVG files or inline SVG) |
| **Feel & motion** | Site feels lively on home; animations respect `prefers-reduced-motion` |

---

## 4. Hosting — GitHub Pages (primary)

### 4.1 Repository layout

```
ghoulhunters/
├── website/                       ← GitHub Pages serves THIS folder
│   ├── .nojekyll                  ← Skip Jekyll processing
│   ├── index.html
│   ├── asian-gold-clam.html
│   ├── program.html
│   ├── who-we-are.html
│   ├── eradication-project.html
│   ├── blueprint.html
│   ├── css/
│   │   ├── theme.css
│   │   └── animations.css
│   ├── js/site.js
│   ├── partials/
│   │   ├── header.html
│   │   └── footer.html
│   └── images/
│       ├── clam/
│       ├── team/
│       └── diagrams/*.svg
├── docs/                          ← Project planning (markdown only)
│   ├── PRP-website.md
│   ├── business-requirements.md
│   └── ...
└── README.md
```

GitHub Pages publishes the **`website/`** folder on the `main` branch. No build command.

### 4.2 Turn on GitHub Pages (teacher checklist)

1. Push the repo to GitHub.  
2. **Settings → Pages**  
3. **Source:** Deploy from a branch  
4. **Branch:** `main`  
5. **Folder:** `/website`  
6. Save — wait 1–2 minutes.  
7. Open the URL shown (e.g. `https://schooluser.github.io/ghoulhunters/`)

The **`.nojekyll`** file in `website/` prevents Jekyll from hiding folders or changing paths.

### 4.3 Links between pages (important for GitHub Pages)

If the repo is named `ghoulhunters`, links must include the repo name:

```html
<a href="/ghoulhunters/program.html">Program</a>
```

**Easier for Grade 6:** use **relative** links (works in `website/`):

```html
<a href="program.html">Program</a>
<a href="asian-gold-clam.html">Asian Gold Clam</a>
```

Always use **relative** links in `header.html` and between pages.

### 4.4 Optional: custom domain

Teacher can add a custom domain later in Pages settings. Not required for STEM MAD.

### 4.5 What we do NOT need

- `npm install`  
- GitHub Actions build workflow (optional later)  
- Server-side code  

---

## 5. Site map (pages)

| File | Page title (browser tab) | Nav label |
|---|---|---|
| `index.html` | Ghoulhunters — Home | Home |
| `asian-gold-clam.html` | Asian Gold Clam | Asian Gold Clam |
| `program.html` | Program & Execution | Program |
| `who-we-are.html` | Who We Are | Who We Are |
| `eradication-project.html` | Gold Clam Watch Project | Eradication Project |
| `blueprint.html` | Blueprint & Process | Blueprint |

**Home:** Hero, tagline, cards linking to each page, official reporting box.

---

## 6. Shared header and footer (maintainability)

### 6.1 How it works

Each page has an empty placeholder:

```html
<div id="site-header"></div>
<main>
  <!-- page content only -->
</main>
<div id="site-footer"></div>
<script src="js/site.js"></script>
```

`js/site.js` loads `partials/header.html` and `partials/footer.html` into those divs.

**Grade 6 benefit:** Change the menu once in `header.html` — every page updates.

### 6.2 `partials/header.html`

- Logo text: **Ghoulhunters**  
- Nav links to all 6 pages (relative URLs)  
- Forest green bar (`class="site-header"`, `--color-forest`)  
- On small screens: hamburger menu (simple CSS + small JS toggle in `site.js`)

### 6.3 `partials/footer.html`

- Student prototype disclaimer  
- **Biosecurity Queensland: 13 25 23**  
- Link to [official report form](https://www.dpi.qld.gov.au/contact/report-a-biosecurity-pest-or-disease)  
- “Grade 6 STEM MAD project” + school name placeholder  

---

## 7. Visual design — nature, biodiversity, clean & exciting

The site is an **environmental education** website first. It must look like we care about **rivers, habitats, and living things** — then add **jazzy motion** so kids stay engaged.

### 7.0 Design mood board — environment & audience

| Layer | Feeling | Design choices |
|---|---|---|
| **Ecosystem** | Brisbane River at dusk — forest banks, moving water | Forest greens + river blues + sandy banks |
| **Biodiversity** | Web of life — native species worth protecting | Species photos, “invasive vs native” callouts |
| **Kids** | Outdoor adventure, citizen scientist | Nunito headings, floating water icons, stagger cards |
| **Adults** | Credible conservation / biosecurity message | Roboto body, clear alerts, government links |
| **STEM MAD** | We use science to protect nature | Blueprint diagrams, design journal mentions |

**Clean:** Airy layouts like a field guide — not cramped.  
**Jazzy:** River-gradient hero, leaf-soft shadows, cards that rise like ripples.  
**Exciting:** Home page = “mission to protect the river”; inner pages = calm nature documentary pace.

**Avoid for a biodiversity site:**

| Avoid | Use instead |
|---|---|
| Neon pink/purple cyber colours | Forest, river, earth, sky tones |
| Generic corporate blue-grey | `--color-river`, `--color-forest` |
| Plastic/clinical white only | Warm `--color-sand` / `--color-mist` backgrounds |
| Jungle cartoon overload | Real species photos + simple icons |
| Flashing red alerts | One soft pulse on “do not move” warning |

### 7.1 Colour palette — biodiversity & environment tokens

**Rule:** Every colour variable has a **nature name** so Grade 6 students know *why* it exists. Comments in CSS must describe the habitat link.

All colours live in `css/theme.css`:

```css
:root {
  /* —— Living ecosystem (primary UI) —— */
  --color-forest: #2D5016;       /* deep forest green — header, primary buttons */
  --color-canopy: #4A7C3F;     /* tree canopy — secondary nav, links */
  --color-moss: #7CB342;       /* moss / new growth — highlights, badges */
  --color-leaf: #A8D5A2;       /* young leaf — soft accents, hover fills */

  /* —— Water & sky (Brisbane River) —— */
  --color-river: #1A6B7C;       /* river water — hero gradient, callouts */
  --color-river-light: #4A9EAE; /* shallow water — gradients */
  --color-sky: #B8D4E8;        /* Queensland sky — hero top gradient */
  --color-mist: #E8F4F0;       /* morning mist — alternate sections */

  /* —— Earth & shore —— */
  --color-earth: #6B5344;      /* riverbank soil — footer, subtle borders */
  --color-sand: #F7F3E8;       /* sandy bank — main page background */
  --color-stone: #E5E0D5;      /* pebble — card borders, section stripes */

  /* —— Light & energy (use sparingly) —— */
  --color-sunrise: #E8B84A;    /* sunrise on water — STEM MAD badge only */
  --color-invasive-alert: #B71C1C; /* warning — do not move clam */

  /* —— Text —— */
  --color-text: #1A2E1A;       /* near-black with green tint — body copy */
  --color-text-muted: #4A5D4A;
  --color-text-on-dark: #ffffff;

  /* —— Aliases (use in components) —— */
  --color-primary: var(--color-forest);
  --color-secondary: var(--color-canopy);
  --color-accent: var(--color-moss);
  --color-surface: var(--color-sand);
  --color-background: var(--color-mist);
  --color-warning: var(--color-invasive-alert);

  /* —— Typography —— */
  --font-main: 'Roboto', system-ui, sans-serif;
  --font-display: 'Nunito', 'Roboto', sans-serif;  /* rounded, organic — nature sites */

  /* —— Shape & depth (organic, not sharp tech) —— */
  --radius-card: 16px;
  --radius-pill: 999px;
  --shadow-card: 0 4px 24px rgba(45, 80, 22, 0.1);
  --shadow-card-hover: 0 12px 36px rgba(26, 107, 124, 0.15);
  --shadow-river-glow: 0 0 40px rgba(74, 158, 174, 0.25);
}
```

#### How each colour maps to biodiversity content

| Token | Use on site | Environmental meaning |
|---|---|---|
| `--color-forest` | Header, primary buttons | Riverbank trees, habitat |
| `--color-river` | Hero gradient, water sections | Brisbane River — project focus |
| `--color-moss` / `--color-leaf` | Icons, chips, success states | Healthy native vegetation |
| `--color-earth` | Footer, diagram boxes | Bank soil — where clams sit |
| `--color-sand` / `--color-mist` | Page backgrounds | Natural light, open air |
| `--color-invasive-alert` | “Do not move” banner | Invasive pest — urgent care |
| `--color-sunrise` | STEM MAD badge only | Hope / new day — not dominant |

#### Hero gradient (river at dawn)

```css
.hero-nature {
  background: linear-gradient(
    165deg,
    var(--color-sky) 0%,
    var(--color-river-light) 45%,
    var(--color-forest) 100%
  );
}
```

#### Accessibility

- Body text on `--color-sand`: use `--color-text` (passes contrast)  
- White text only on `--color-forest` or `--color-river` (dark enough)  
- Never put `--color-moss` text on `--color-sand` (too low contrast)

Link both stylesheets on every page:

```html
<link rel="stylesheet" href="css/theme.css">
<link rel="stylesheet" href="css/animations.css">
```

### 7.2 Typography — friendly nature tone

| Use | Font | Why |
|---|---|---|
| Headings (`h1`, `h2`, hero) | **Nunito** (Google Fonts) | Soft, rounded — used on many **environment and NGO** sites; kid-friendly |
| Body text | **Roboto** | Neutral, readable — facts and biosecurity text |

```html
<link href="https://fonts.googleapis.com/css2?family=Nunito:wght@600;700;800&family=Roboto:wght@400;500;700&display=swap" rel="stylesheet">
```

**Page `<title>` pattern:** `Ghoulhunters — [Topic] | Brisbane River Biodiversity`

- Hero `h1`: large (`clamp(2rem, 5vw, 3.5rem)`), `font-family: var(--font-display)`  
- Body: max-width **65ch**, line-height **1.6**

### 7.3 Layout patterns (clean structure)

| Pattern | Class | Use on |
|---|---|---|
| Hero band | `.hero-nature` | Home — river/forest gradient + animated title |
| Section strip | `.section-mist` / `.section-sand` | Alternating natural backgrounds |
| Card grid | `.grid-3` | Home feature cards, team page |
| Callout | `.callout-biodiversity` | River-green left border — species facts |
| Callout | `.callout-invasive` | Earth-tone box — invasive species warnings |
| Badge | `.badge-eco` | “Protecting biodiversity” / STEM MAD pill |
| Divider | `.wave-divider` | Optional SVG wave between sections (water theme) |

### 7.4 Material-inspired CSS classes (no framework)

| Class | Looks like |
|---|---|
| `.card` | White/ cream box, rounded corners, shadow |
| `.btn` | Forest green button, white text, rounded |
| `.btn-river` | River blue secondary action |
| `.btn-outline` | Canopy green border, transparent fill |
| `.alert-warning` | Red left border — “Do not move” |
| `.hero` | Big title area on home page |
| `.grid-2` / `.grid-3` | Responsive columns (stacks on phone) |
| `.card-interactive` | Card + hover lift + click ripple feel (CSS only) |
| `.btn-pulse` | Primary CTA with subtle pulse (home report box) |

### 7.5 CSS animations (`animations.css`)

**Rule:** All motion in **`website/css/animations.css`** only. Grade 6 can change speed by editing `--anim-duration` variables without touching HTML.

**Rule:** Always include reduced-motion fallback (see §7.6).

#### Animation variables (top of `animations.css`)

```css
:root {
  --anim-fast: 0.25s;
  --anim-normal: 0.5s;
  --anim-slow: 0.8s;
  --anim-ease-out: cubic-bezier(0.22, 1, 0.36, 1);
  --anim-ease-bounce: cubic-bezier(0.34, 1.56, 0.64, 1);
}
```

#### Required animations

| ID | Name | Class | Where | Effect |
|---|---|---|---|---|
| A1 | Hero entrance | `.anim-hero-in` | Home hero | Title + subtitle fade up and in |
| A2 | Stagger cards | `.anim-stagger` on children | Home card grid | Cards appear one-by-one (delay via `:nth-child`) |
| A3 | Float icon | `.anim-float` | Home / species icons | Gentle up-down loop on Material icons |
| A4 | Card hover lift | `.card-interactive:hover` | All `.card` links | Lift + stronger shadow (transition, not infinite) |
| A5 | Button shine | `.btn-shine` | Primary buttons | Light sweep on hover |
| A6 | Scroll reveal | `.anim-reveal` | Sections on inner pages | Fade + slide up when class added |
| A7 | Nav underline | `.nav-link` | Header | Moss/canopy underline grows on hover |
| A8 | Warning pulse | `.alert-warning` | Do-not-move banner | **One** soft pulse on load only (not flashing) |
| A9 | Diagram draw-in | `.anim-diagram` | Blueprint SVG wrappers | Scale from 0.95 → 1 + fade in |
| A10 | River shimmer | `.hero-nature::before` | Home hero background | Slow shifting river gradient (`@keyframes`) |
| A11 | Leaf settle | `.anim-leaf-in` | Section headings (optional) | Gentle fade + slight rotate (1–2deg) |

#### Example: hero entrance (copy into `animations.css`)

```css
@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(24px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.anim-hero-in h1 {
  animation: fadeUp var(--anim-slow) var(--anim-ease-out) both;
}
.anim-hero-in .tagline {
  animation: fadeUp var(--anim-slow) var(--anim-ease-out) 0.15s both;
}
.anim-hero-in .hero-cta {
  animation: fadeUp var(--anim-slow) var(--anim-ease-out) 0.3s both;
}
```

#### Example: staggered cards

```css
.anim-stagger > * {
  animation: fadeUp var(--anim-normal) var(--anim-ease-out) both;
}
.anim-stagger > *:nth-child(1) { animation-delay: 0.1s; }
.anim-stagger > *:nth-child(2) { animation-delay: 0.2s; }
.anim-stagger > *:nth-child(3) { animation-delay: 0.3s; }
/* add more nth-child as needed */
```

#### Example: gentle floating icon

```css
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
}
.anim-float {
  animation: float 3s ease-in-out infinite;
}
```

#### Scroll reveal (small JS — optional, teacher adds)

Add class `is-visible` when section enters viewport (~15 lines in `site.js` using `IntersectionObserver`). CSS:

```css
.anim-reveal {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity var(--anim-normal), transform var(--anim-normal);
}
.anim-reveal.is-visible {
  opacity: 1;
  transform: translateY(0);
}
```

If Grade 6 skips JS: apply `is-visible` by default on inner pages so content is never hidden.

### 7.6 Accessibility — motion safety

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
  .anim-float {
    animation: none;
  }
}
```

- No flashing more than **3 times per second**  
- Warning alert: pulse **once** on load, not infinite blink  
- All content readable with animations off  

### 7.7 Home page — maximum “wow” (spec)

| Element | Animation | Nature link |
|---|---|---|
| Hero gradient | Slow `background-position` shift (15–20s) | Flowing river |
| Title + tagline | `fadeUp` stagger | — |
| Icon (`water`, `eco`, `forest`) | `.anim-float` | Ecosystem symbols |
| Feature cards | `.anim-stagger` + hover lift | “Habitats” of the site |
| Biodiversity intro strip | `.anim-reveal` | One sentence on why river health matters |
| “Report 13 25 23” box | `.btn-pulse` + `--shadow-river-glow` | Official protection of environment |

### 7.8 Inner pages — calmer but alive

| Page | Motion level |
|---|---|
| Asian gold clam | Scroll reveal on sections; image zoom on hover |
| Program | Timeline steps fade in with stagger |
| Who we are | Team cards pop in on hover |
| Eradication | Compliance alert: single pulse; no joke motion on warning |
| Blueprint | Diagrams `.anim-diagram` when scrolled into view |

### 7.9 Fonts and icons (CDN — copy into every page `<head>`)

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Nunito:wght@600;700;800&family=Roboto:wght@400;500;700&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet">
<link rel="stylesheet" href="css/theme.css">
<link rel="stylesheet" href="css/animations.css">
```

**Preferred nature icons:** `water`, `eco`, `forest`, `pest_control`, `photo_camera` — see table in §7.2.

### 7.10 Global warning strip (optional)

Below header on all pages:

```html
<div class="alert-warning">Do not touch or move freshwater gold clam.</div>
```

---

## 8. Page requirements (content)

Language: **simple, Grade 6 reading level.**  
Compliance: see §12 — required on eradication and species pages.

### 8.1 Home — `index.html`

| Section | Content |
|---|---|
| Hero | Ghoulhunters · Community Gold Clam Watch — **animated** (§7.7) |
| Tagline | *See it. Snap it. Report it. Don’t move it.* |
| Cards | Links to each sub-page with icon + one sentence — **stagger animate** |
| Report box | Call **13 25 23** + button to official DPI link — `.btn-pulse` |
| Disclaimer | Student prototype — not government |
| Visual | `.hero-nature` gradient (sky → river → forest); optional wave SVG; tagline mentions **biodiversity** |
| Meta | `<meta name="description" content="…Brisbane River biodiversity and invasive species education…">` |

### 8.2 Asian Gold Clam — `asian-gold-clam.html`

| Section | Content |
|---|---|
| Intro | *Corbicula fluminea* — also called freshwater / Asian gold clam |
| What it looks like | Size, colour, ridges; images in `images/clam/` |
| Where in Brisbane | Brisbane River; named crossings |
| Why it is a problem | Spreads fast; harms river and pipes |
| Do / Don’t | Photo yes; move no |
| Look-alikes | When unsure, still report |
| Official links | Button to Queensland Government pages |

### 8.3 Program & Execution — `program.html`

| Section | Content |
|---|---|
| Mission | Help people learn and report safely |
| How it works | Numbered list (learn → see → photo → report to BQ) |
| Execution phases | Table or list: Research → Design → Build → Test → Showcase |
| Deliverables | Website, posters, blueprint, slides |
| What we don’t do | No collecting clams; we support official reporting |

### 8.4 Who We Are — `who-we-are.html`

| Section | Content |
|---|---|
| About | Grade 6 STEM MAD team; `[School Name]` |
| Why we care | Protect Brisbane River |
| Team grid | Photo + name per student (edit HTML cards) |
| Teachers | Optional thank-you line |

**Easy edit pattern:**

```html
<article class="card team-card">
  <img src="images/team/alex.jpg" alt="Alex">
  <h3>Alex</h3>
  <p>Research and posters</p>
</article>
```

### 8.5 Gold Clam Eradication Project — `eradication-project.html`

**Nav label:** Eradication Project  

| Section | Content |
|---|---|
| Overview | Student awareness and reporting project |
| **Important notice** | Queensland focuses on **surveillance and containment**; our job is education and safe reporting |
| Goals | Posters, website, community learning |
| Community role | Don’t move clam; report to BQ |
| Links | Buttons to `program.html` and `blueprint.html` |

**Do not include:** Volunteer clam collection, fertilizer factory, or “we will eradicate all clams.”

### 8.6 Blueprint & Process — `blueprint.html`

| Section | Content |
|---|---|
| What is a blueprint? | Simple explanation |
| Design process | Research → Sketch → Build → Test → Improve |
| Diagram 1 | `<img src="images/diagrams/system-context.svg" alt="...">` |
| Diagram 2 | execution-cycle.svg |
| Diagram 3 | design-process.svg |
| Diagram 4 | report-flow.svg |
| Phase 2 | “Report form coming later” note |

---

## 9. Diagram specifications

Store as **SVG files** in `website/images/diagrams/`. Use biodiversity colours: `#2D5016` (forest), `#1A6B7C` (river), `#7CB342` (moss) accents.

Students can open SVG in browser or edit labels with teacher help in Inkscape / Figma / VS Code.

### 9.1 system-context.svg

```
POSTER --QR scan--> WEBSITE --(future form)--> DEMO STORAGE --> Report to BQ 13 25 23
```

### 9.2 execution-cycle.svg

```
RESEARCH → DESIGN → BUILD → TEST → SHOWCASE → IMPROVE → (loop back)
```

### 9.3 design-process.svg

```
PROBLEM → RESEARCH → SKETCH → PROTOTYPE → TEST → IMPROVE
```

### 9.4 report-flow.svg

Numbered steps 1–6:

1. See clam  
2. Do not move  
3. Take photo  
4. Use Ghoulhunters site  
5. (Future) demo form  
6. Report Biosecurity Queensland within 24 hours  

### 9.5 ASCII reference (for drawing SVG)

Keep copies in `blueprint.html` inside `<details>` as backup if SVG not ready:

```html
<details>
  <summary>Text version of diagram</summary>
  <pre>POSTER → QR → WEBSITE → BQ 13 25 23</pre>
</details>
```

---

## 10. `js/site.js` (minimal behaviour)

**Grade 6 does not need to write this file** — copy from template once. Teacher explains: “This loads our menu.”

Required functions:

1. `loadPartial(id, url)` — fetch `partials/header.html` into `#site-header`  
2. `loadPartial(id, url)` — fetch `partials/footer.html` into `#site-footer`  
3. `highlightCurrentPage()` — add class `active` to nav link matching `window.location.pathname`  
4. `toggleMobileMenu()` — show/hide nav on small screens  

No frameworks. Total file ideally **under 50 lines**.

---

## 11. Page HTML template (copy for each new page)

```html
<!DOCTYPE html>
<html lang="en-AU">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Ghoulhunters — PAGE NAME</title>
  <meta name="description" content="Short description for search.">
  <link rel="stylesheet" href="css/theme.css">
  <link rel="stylesheet" href="css/animations.css">
  <!-- Google Fonts + Material Symbols (see §7.9) -->
</head>
<body>
  <div id="site-header"></div>

  <main class="container">
    <header class="page-hero">
      <h1>Page Title</h1>
      <p class="subtitle">One line summary</p>
    </header>
    <!-- sections with .card -->
  </main>

  <div id="site-footer"></div>
  <script src="js/site.js"></script>
</body>
</html>
```

---

## 12. Queensland compliance (mandatory)

**Footer text (in `partials/footer.html`):**

> Ghoulhunters is a Grade 6 STEM MAD **student prototype**. It does not replace official reporting. If you see a suspected freshwater gold clam, **do not move it**. Report to Biosecurity Queensland within 24 hours: **13 25 23** or [report online](https://www.dpi.qld.gov.au/contact/report-a-biosecurity-pest-or-disease).

**Alert box on `asian-gold-clam.html` and `eradication-project.html`:**

```html
<div class="alert-warning" role="alert">
  <strong>Do not touch or move</strong> the clam. Moving it can spread the pest.
</div>
```

See `queensland-compliance.md` for full rules.

---

## 13. What Grade 6 students maintain

| Task | File | Difficulty |
|---|---|---|
| Change wording on a page | `*.html` | ⭐ Easy |
| Add team member | `who-we-are.html` | ⭐ Easy |
| Change nature colours (e.g. river blue) | `css/theme.css` `:root` | ⭐⭐ Medium |
| Speed up / slow down motion | `css/animations.css` `--anim-*` variables | ⭐⭐ Medium |
| Add menu item | `partials/header.html` | ⭐⭐ Medium |
| Change footer disclaimer | `partials/footer.html` | ⭐⭐ Medium |
| Replace diagram | `images/diagrams/*.svg` | ⭐⭐⭐ With teacher |
| Edit `site.js` | `js/site.js` | ⭐⭐⭐ Teacher only |

---

## 14. Teacher / parent one-time setup

1. Create GitHub repo `ghoulhunters`  
2. Ensure `website/` folder has files from this PRP (including `.nojekyll`)  
3. Enable GitHub Pages → **`/website`**  
4. Share repo URL with class; students clone or edit in GitHub web editor  
5. Optional: print QR code to `https://<user>.github.io/ghoulhunters/` for posters  

**Preview locally:** From `website/`, run `python3 -m http.server 8765` or use VS Code Live Server on `index.html`.

---

## 15. Phase 2 placeholders (optional later)

| Feature | Placeholder HTML |
|---|---|
| Report form | `<p class="card">Report a sighting — coming soon. For now call <strong>13 25 23</strong>.</p>` |
| Google Form embed | `<iframe>` on home — teacher adds when ready |

---

## 16. Acceptance checklist

- [ ] All 6 HTML pages exist in `website/`
- [ ] `website/.nojekyll` present  
- [ ] `css/theme.css` uses **biodiversity palette** (forest, river, earth, sand, mist) with nature-named tokens  
- [ ] Site reads clearly as **nature / environment / biodiversity** (colours, copy, icons)  
- [ ] `css/animations.css` includes hero, stagger, hover, and reduced-motion rules  
- [ ] Home page feels **jazzy**; inner pages use scroll reveal or calmer motion  
- [ ] Nunito headings + Roboto body on all pages  
- [ ] Header/footer load on every page via `site.js`  
- [ ] Relative links work on GitHub Pages  
- [ ] Site works on mobile (resize browser test)  
- [ ] `blueprint.html` shows 4 diagrams  
- [ ] Footer has disclaimer + 13 25 23  
- [ ] No instructions to collect or move clams  
- [ ] README in repo explains “edit HTML → push → site updates”  
- [ ] GitHub Pages URL documented for STEM MAD poster QR  

---

## 17. Agent implementation prompt (copy-paste)

---

**TASK:** Build the Ghoulhunters website per `PRP-website.md` v2.2.

**Identity:** Nature, **environment, and biodiversity** education site protecting the Brisbane River from invasive freshwater gold clam.

**Stack (mandatory — see §2):** Static **HTML5** + **CSS3** (`theme.css` with nature colour tokens + `animations.css`) + **vanilla JavaScript** (`site.js`) + **SVG** diagrams. **GitHub Pages** from `/website` with **`.nojekyll`**. **No Vue, React, Vuetify, npm, or build step.**

**Theme:** Biodiversity palette — `--color-forest`, `--color-river`, `--color-moss`, `--color-earth`, `--color-sand`, `--color-mist` (§7.1). **Nunito** + **Roboto**. Nature Material icons (`water`, `eco`, `forest`).

**Feel:** Clean, **jazzy, exciting** — organic motion (river shimmer, float, stagger). `prefers-reduced-motion` safe.

**Technology rationale:** Static HTML/CSS is the right fit for Grade 6 maintenance, environmental content, CSS animations, and free GitHub Pages hosting (§2.1).

**Pages:** `index.html`, `asian-gold-clam.html`, `program.html`, `who-we-are.html`, `eradication-project.html`, `blueprint.html`.

**Shared:** `partials/header.html`, `partials/footer.html` loaded by `site.js`.

**Diagrams:** Four SVG files in `images/diagrams/` referenced from `blueprint.html`.

**Compliance:** Footer disclaimer and “do not move” alerts per §12. Eradication page: surveillance/education framing only.

**README:** Step-by-step GitHub Pages setup for teachers and “how to edit a page” for Grade 6.

---

## 18. Comparison — versions

| Topic | v1.0 | v2.0 | v2.1 | v2.2 (this PRP) |
|---|---|---|---|---|
| Framework | Vue + Vuetify | Plain HTML | Plain HTML | Plain HTML |
| Build | npm | None | None | None |
| Deploy | Various | GitHub Pages | GitHub Pages | GitHub Pages |
| Theme | Generic olive | Olive + teal | Jazzy animations | **Biodiversity colour system** |
| Fonts | Roboto | Roboto | Fredoka | **Nunito + Roboto** |
| Identity | App | School project | Exciting UI | **Nature / environment / biodiversity** |
| Tech docs | — | Grade 6 | Animations | **§2 decision matrix** |

---

## 19. Document map

| File | Role |
|---|---|
| `PRP-website.md` | This document |
| `queensland-compliance.md` | Legal messages |
| `stem-mad-requirements.md` | Competition checklist |
| `business-requirements.md` | Program goals |

---

*PRP v2.2 — Ghoulhunters biodiversity education website — Grade 6 / GitHub Pages / HTML+CSS+JS — May 2026*
