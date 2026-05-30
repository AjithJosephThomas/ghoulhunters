# Ghoulhunters — Solution Design (Simple)

**Project:** Community Gold Clam Watch  
**Audience:** Year 5 team, teachers, parents  
**Version:** 1.0 — high level

---

## 1. Solution overview

We build a **small system** made of four parts that work together:

```
┌─────────────┐     scan      ┌──────────────────┐
│   POSTER    │ ────────────► │  WEBSITE / APP   │
│  (at river  │     QR code     │  (on phone)      │
│   or booth) │                 └────────┬─────────┘
└─────────────┘                          │
                                         │ submit
                                         ▼
                                ┌──────────────────┐
                                │  DEMO STORAGE    │
                                │  (sheet/database)│
                                └────────┬─────────┘
                                         │
                                         ▼
                                ┌──────────────────┐
                                │  USER REMINDER   │
                                │  Report to BQ    │
                                │  13 25 23        │
                                └──────────────────┘
```

**Tagline:** *See it. Snap it. Report it. Don’t move it.*

---

## 2. Solution components

### 2.1 Website (main hub)

| Page | Purpose |
|---|---|
| **Home** | Welcome, big buttons: Learn \| Report |
| **Learn** | Photos, facts, do/don’t list |
| **Report** | Form: photo, location, note, submit |
| **About** | STEM MAD team, disclaimer, official links |

**How to build (pick one with teacher):**

| Option | Difficulty | Good for |
|---|---|---|
| Google Sites + Google Form | Easy | Fastest start |
| Canva website + form link | Easy | Nice design |
| Simple HTML on GitHub Pages / Netlify | Medium | More “tech” demo |

### 2.2 Mobile app (prototype)

**Recommended:** Same website as a **PWA** (add to home screen on phone).

**Screens:**

1. Home  
2. Learn (short)  
3. Report — camera → location → note → agree checkbox → Submit  
4. Done — thank you + **13 25 23**

**Alternative:** MIT App Inventor or Thunkable if teacher knows how.

### 2.3 Poster

- A3 or A4, laminated if possible  
- QR → `https://your-site.com/report`  
- Same messages as website  
- Printed for: STEM MAD booth; Council presentation; photo for design journal  

### 2.4 Demo storage (backend — simple)

For school project, reports can go to:

| Option | What gets saved |
|---|---|
| **Google Sheet** | Date, lat, lng, photo link, note |
| **Google Form responses** | Same |
| **Firebase (with adult setup)** | Slightly fancier demo map later |

No real government connection in prototype.

### 2.5 Blueprint & design journal (paper or PDF)

- Sketches of poster and app  
- User test results  
- Photos of versions 1, 2, 3  

---

## 3. User journeys

### 3.1 River visitor (happy path)

1. Sees poster at river or school display  
2. Scans QR → opens Report page on phone  
3. Reads “Do not move the clam”  
4. Takes photo  
5. Allows location (or drops pin on map)  
6. Ticks “I will not move the clam”  
7. Submits → sees thank you + **call 13 25 23**  
8. (Ideally) parent helps report to Biosecurity Queensland officially  

### 3.2 STEM MAD judge (showcase)

1. Student explains problem (30 sec)  
2. Student shows design journal (30 sec)  
3. Student runs live demo on phone (60 sec)  
4. Student shows poster and QR scan (30 sec)  
5. Student explains impact and Laudato Si’ (30 sec)  

### 3.3 Council presentation

Same as judge, plus: ask Council to support **awareness** (posters, education), not student clam collection.

---

## 4. Data (what we collect in prototype)

| Field | Required? | Why |
|---|---|---|
| Photo | Yes | Help identify sighting |
| Latitude / longitude | Yes | Show where |
| Date and time | Yes (auto) | When seen |
| Short note | No | Extra detail |
| Email | No | Only if follow-up wanted |
| Consent checkbox | Yes | User agrees to demo privacy notice |

**We do NOT collect:** voice recordings (out of scope), passwords (no login needed for MVP).

---

## 5. Technology choices (recommended for Year 5)

| Layer | Recommendation | Student role |
|---|---|---|
| Website | Google Sites or Netlify static site | Write text, choose pictures |
| Form / app | Google Form or Glide | Test on phones |
| QR | Free QR generator | Test before print |
| Poster | Canva | Design layout |
| Slides | Canva or PowerPoint | One slide per student topic |
| Video | Phone camera + CapCut/iMovie | 2.5 min team video |
| Map (optional) | Google My Maps with demo pins | Plot test reports |

**Adult role:** Publish site, create QR, print poster, set up form destination.

---

## 6. Screen wireframes (text)

### Home
```
┌─────────────────────────┐
│   GHOULHUNTERS          │
│   Gold Clam Watch       │
│                         │
│  [  LEARN  ]            │
│  [  REPORT ]            │
│                         │
│  Official: 13 25 23     │
└─────────────────────────┘
```

### Report
```
┌─────────────────────────┐
│  REPORT A SIGHTING      │
│  ⚠ Do NOT move the clam │
│                         │
│  [ Take photo ]         │
│  📍 Location: -27.xx    │
│  Note: ___________      │
│  ☐ I will not move it   │
│  [ SUBMIT ]             │
└─────────────────────────┘
```

### Done
```
┌─────────────────────────┐
│  ✓ Thank you!           │
│  Ref: GH-2026-003       │
│                         │
│  ALSO REPORT TO         │
│  BIOSECURITY QUEENSLAND │
│  📞 13 25 23            │
│  [ Open official form ] │
└─────────────────────────┘
```

---

## 7. Build phases

| Phase | Weeks | Output |
|---|---|---|
| **1. Research** | 1 | Facts, sources, problem slide |
| **2. Design** | 1 | Sketches, poster draft, wireframes |
| **3. Build** | 2 | Website + form + phone test |
| **4. Test** | 1 | User test round 1 → fixes → round 2 |
| **5. Polish** | 1 | Poster print, slides, blueprint, video |
| **6. Present** | 1 | STEM MAD + Council rehearsal |

---

## 8. Testing plan (simple)

| Test | How many people | Pass if |
|---|---|---|
| Understand “don’t move” | 10 | 8+ correct |
| Can submit report | 5 | 5 succeed |
| QR opens correct page | 3 phones | All work |
| Live demo at school | 1 full run | No crashes |

Record results in design journal.

---

## 9. Risks and fixes

| Risk | Fix |
|---|---|
| No Wi‑Fi at showcase | Save screen recording backup |
| GPS wrong under trees | Allow manual map pin |
| QR broken | Print URL under QR |
| Wrong biosecurity message | Use `queensland-compliance.md` checklist |
| Demo form spam | Use for demo only; don’t share URL widely |

---

## 10. Links to other documents

| Need | Document |
|---|---|
| What we must deliver | `business-requirements.md` |
| STEM MAD rules | `stem-mad-requirements.md` |
| Legal messages | `queensland-compliance.md` |
| Short summary | `distillations.md` |

---

*Ghoulhunters Year 5 — Solution design v1.0*
