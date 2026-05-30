# Ghoulhunters website

**Community Invasive Species Watch** — static site for species guides and watch programs.

## Run locally

```bash
cd website
python3 -m http.server 8080
```

Open http://localhost:8080 (required for config-driven pages and content loading).

## GitHub Pages (live site)

Repository: [github.com/AjithJosephThomas/ghoulhunters](https://github.com/AjithJosephThomas/ghoulhunters)

**Public URL:** https://ajithjosephthomas.github.io/ghoulhunters/

First-time deploy steps are in **[DEPLOY.md](../DEPLOY.md)** at the repo root (create repo, push, enable Pages → GitHub Actions).

## Architecture (scalable)

| Piece | Purpose |
|-------|---------|
| `js/config.js` | **Single source of truth** — site settings, biosecurity defaults, all programs |
| `species.html?species={id}` | Generic species guide shell |
| `watch.html?program={id}` | Generic watch program shell |
| `content/species/{id}.html` | Species-specific body HTML |
| `content/watch/{id}.html` | Watch program body HTML |
| `images/species/{id}/` | Photos for that species |

Shared pages (`program.html`, `blueprint.html`, `who-we-are.html`) apply to all programs.

## Add a new invasive species program

1. **Copy the example** in `js/config.js` — add a new object to `programs` with `status: "active"`.
2. **Create content files:**
   - `content/species/your-species-id.html`
   - `content/watch/your-species-id.html`
3. **Add images** under `images/species/your-species-id/`.
4. Set `showInNav: true` when ready to appear in the menu.

No new HTML pages are required — `species.html` and `watch.html` load automatically.

Optional: add `legacyUrls: ['old-page.html']` and create a redirect file pointing to the new URLs.

## URLs

| URL | Content |
|-----|---------|
| `species.html?species=freshwater-gold-clam` | Freshwater gold clam guide |
| `watch.html?program=freshwater-gold-clam` | Gold Clam Watch project |
| `programs.html` | List of all programs |
| `asian-gold-clam.html` | Redirects to species guide (legacy) |
| `eradication-project.html` | Redirects to watch program (legacy) |

## Edit content

- **Program metadata** — `js/config.js`
- **Species facts & photos** — `content/species/{id}.html`
- **Watch project copy** — `content/watch/{id}.html`
- **Team** — `who-we-are.html`

## Pages

| File | Role |
|------|------|
| `index.html` | Home — program cards from config |
| `programs.html` | All active / coming-soon programs |
| `species.html` | Dynamic species guide |
| `watch.html` | Dynamic watch program |
| `program.html` | How Ghoulhunters works (shared) |
| `blueprint.html` | Diagrams (shared) |
| `who-we-are.html` | Team |

This site supports community awareness — not a government service. Always use official Biosecurity Queensland reporting (**13 25 23**).
