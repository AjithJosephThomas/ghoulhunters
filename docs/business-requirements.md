# Ghoulhunters — Business Requirements (Simple)

**Project name:** Ghoulhunters — Community Gold Clam Watch  
**Type:** Year 5 school STEM MAD project (student prototype)  
**Location focus:** Brisbane River, Queensland  
**Version:** 1.0 — high level, simple language

---

## 1. Purpose

### 1.1 Why this project exists

Freshwater gold clam is an invasive pest in the Brisbane River. Many people do not know what it looks like or what to do if they see it.

**Our goal:** Help the community **learn**, **report safely**, and **not spread** the pest — as part of STEM MAD and a presentation to Brisbane City Council.

### 1.2 Who it is for

| User | Need |
|---|---|
| River visitors (public) | Learn ID; report a sighting without moving the clam |
| Year 5 team | Build and present the prototype |
| Teachers / parents | Support build and safety |
| STEM MAD judges | See design process and working demo |
| Brisbane City Council | Hear our student idea for community awareness |

### 1.3 What success looks like

- People understand: **do not touch or move** the clam  
- Our prototype can capture **photo + location + time**  
- We present at STEM MAD with a **live demo** and **poster with QR code**  
- All materials use **correct Queensland biosecurity messages**  
- We tell users to **also report to Biosecurity Queensland**

---

## 2. Scope

### 2.1 In scope (must have)

| ID | Requirement | Priority |
|---|---|---|
| BR-01 | Website with home page and “learn about gold clam” | Must |
| BR-02 | Website page: what to DO and what NOT to do | Must |
| BR-03 | Report form: upload photo, location, time, optional note | Must |
| BR-04 | Mobile-friendly app or PWA: camera + GPS + submit | Must |
| BR-05 | Thank-you screen with reminder: call **13 25 23** / report online to BQ | Must |
| BR-06 | Poster: warning + QR code to our website/app | Must |
| BR-07 | Blueprint document (how our system works) | Must |
| BR-08 | Presentation slides for STEM MAD and Council | Must |
| BR-09 | Design journal (sketches, tests, improvements) | Must |
| BR-10 | Disclaimer: student prototype, not official government app | Must |

### 2.2 Out of scope (not for this project)

| ID | Item | Reason |
|---|---|---|
| OUT-01 | Volunteer clam collection | Not legal for students; not in QLD plan |
| OUT-02 | “Eradication program” branding | Use “Community Watch” instead |
| OUT-03 | Machine learning auto-delete reports | Too complex for Year 5 |
| OUT-04 | Rewards, vouchers, lucky draws | Future idea only |
| OUT-05 | Voice-to-text remarks | Optional later; text is enough for MVP |
| OUT-06 | User accounts and login | Optional; simple form is enough |
| OUT-07 | Connection to government databases | Needs official partnership |

### 2.3 Future ideas (mention in blueprint only)

- Map of demo reports  
- Simple look-alike guide (gold clam vs native clam)  
- Partnership with Council or Biosecurity Queensland  

---

## 3. Functional requirements (what the system does)

### 3.1 Website

| ID | Requirement |
|---|---|
| WEB-01 | Landing page explains the problem in simple words |
| WEB-02 | “Identify” page: pictures, size, colour, ridges |
| WEB-03 | “Brisbane River” page: clam is in our local area |
| WEB-04 | “What to do” page: take photo, don’t move, report to BQ |
| WEB-05 | Report page: photo upload, GPS or map pin, date/time auto, short note |
| WEB-06 | After submit: show reference number (e.g. GH-2026-001) |
| WEB-07 | Footer on every page: link to official BQ reporting |

### 3.2 Mobile app (prototype)

| ID | Requirement |
|---|---|
| APP-01 | Open from phone (browser or simple app) |
| APP-02 | “Report” button starts camera |
| APP-03 | Save location and time automatically when allowed |
| APP-04 | Optional text note |
| APP-05 | “Submit” only after user ticks “I understand not to move the clam” |
| APP-06 | Show same BQ reminder as website |

### 3.3 Poster

| ID | Requirement |
|---|---|
| APP-07 | Headline: do not touch or move freshwater gold clam |
| APP-08 | QR code links to report page |
| APP-09 | Official reporting: 13 25 23 |
| APP-10 | Credit Queensland Government images if used |
| APP-11 | Say “STEM MAD student project” |

### 3.4 Presentation materials

| ID | Requirement |
|---|---|
| PRE-01 | 6–8 slides: problem, research, solution, demo, poster, impact |
| PRE-02 | Every team member has a speaking part |
| PRE-03 | 2.5 minute video if going to National (all students on camera) |

---

## 4. Content requirements (messages)

| ID | Must say | Must NOT say |
|---|---|---|
| MSG-01 | Do not touch or move the clam | Touching causes skin irritation (not official) |
| MSG-02 | Moving spreads the pest | We will eradicate all clams |
| MSG-03 | Report to Biosecurity Queensland within 24 hours | Our app replaces official reporting |
| MSG-04 | Take a photo if safe to do so | Pick up the clam to show someone |
| MSG-05 | Check, clean, dry boats and gear (optional extra) | Students will collect clams |

---

## 5. Non-functional requirements (simple)

| ID | Requirement |
|---|---|
| NFR-01 | Works on mobile phones (iPhone and Android) |
| NFR-02 | QR code tested before printing poster |
| NFR-03 | Simple words — Year 5 can explain every screen |
| NFR-04 | Demo works at showcase (backup video if Wi‑Fi fails) |
| NFR-05 | Privacy: say photos and location are stored for school demo only |
| NFR-06 | Adult helps publish site; students own design and content |

---

## 6. Stakeholders

| Stakeholder | Role |
|---|---|
| Year 5 students | Design, test, present |
| Teacher | Guide STEM links, timeline, safety |
| Parents | Help with hosting, printing, transport |
| STEM MAD / BCE | Judging and showcase |
| Brisbane City Council | Hear presentation (awareness) |
| Biosecurity Queensland | Official reporting authority (not building our app) |

---

## 7. Assumptions and constraints

**Assumptions**

- Project is for education and competition, not commercial use  
- Internet available at showcase for live demo  
- Teacher/parent can help with website hosting  

**Constraints**

- Year 5 reading and presentation level  
- Limited time before showcase  
- Must follow Queensland biosecurity messaging (see `queensland-compliance.md`)

---

## 8. Acceptance criteria (done = ready for showcase)

- [ ] Website live with learn + report pages  
- [ ] Phone demo works end-to-end  
- [ ] Poster printed with working QR  
- [ ] Blueprint and design journal complete  
- [ ] Slides finished; all students practised  
- [ ] Every page shows BQ reporting reminder  
- [ ] No “eradication” or “collect clams” language in public materials  
- [ ] User test done with results written down  

---

## 9. Glossary (simple)

| Word | Meaning |
|---|---|
| **Biosecurity** | Stopping pests and diseases from spreading |
| **Invasive species** | A plant or animal that is not native and causes harm |
| **Freshwater gold clam** | Small invasive clam in Brisbane River |
| **Prototype** | First working version to test an idea |
| **PWA** | Website that works like an app on a phone |
| **QR code** | Square barcode that opens a link when scanned |
| **GPS** | Shows where you are on a map |

---

*Document owner: Ghoulhunters Year 5 team — STEM MAD 2026*
