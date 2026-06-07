# Nature Ninjas website

**React + Material UI** site for biodiversity education, species guides, and community watch programs.

## Run locally

```bash
cd website
npm install
npm run dev
```

Open http://localhost:5173/ghoulhunters/ (Vite dev server uses the GitHub Pages base path).

## Build

```bash
npm run build
npm run preview
```

Production output is in `dist/` — deployed automatically via GitHub Actions.

## GitHub Pages (live site)

Repository: [github.com/AjithJosephThomas/ghoulhunters](https://github.com/AjithJosephThomas/ghoulhunters)

**Public URL:** https://ajithjosephthomas.github.io/ghoulhunters/

## Stack

| Piece | Purpose |
|-------|---------|
| React 19 + Vite | UI framework and build |
| Material UI 6 | Professional components and theming |
| Framer Motion | Scroll reveals, hero animations, blueprint stepper |
| React Router | Client-side routing with legacy URL redirects |
| `src/config.ts` | Single source of truth for programs and site copy |

## Add a new invasive species program

1. Add a program object to `src/config.ts`.
2. Create content components in `src/content/`.
3. Wire the species ID in `SpeciesPage.tsx` and `WatchPage.tsx` content maps.
4. Add images under `public/images/species/{id}/`.

## Legacy static site

The previous HTML/CSS version is archived in `website-legacy/` at the repo root.

This site supports community awareness — not a government service. Always use official Biosecurity Queensland reporting (**13 25 23**).
