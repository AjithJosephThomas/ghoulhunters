# Deploy Ghoulhunters to GitHub Pages

Host the site under [AjithJosephThomas](https://github.com/AjithJosephThomas) on GitHub Pages.

**Live URL (after setup):**  
https://ajithjosephthomas.github.io/ghoulhunters/

---

## One-time setup

### 1. Create the repository on GitHub

1. Sign in at https://github.com/AjithJosephThomas  
2. **New repository** → name: `ghoulhunters`  
3. Public, **no** README / .gitignore (we already have them locally)  
4. Create repository  

Or with [GitHub CLI](https://cli.github.com/) (`gh auth login` first):

```bash
cd /home/joe/projects/ghoulhunters
gh repo create AjithJosephThomas/ghoulhunters --public --source=. --remote=origin
```

### 2. Push this project

```bash
cd /home/joe/projects/ghoulhunters
export GIT_AUTHOR_NAME='Ajith J Thomas'
export GIT_AUTHOR_EMAIL='AjithJosephThomas@users.noreply.github.com'
export GIT_COMMITTER_NAME='Ajith J Thomas'
export GIT_COMMITTER_EMAIL='AjithJosephThomas@users.noreply.github.com'
git init   # skip if already done
git add .
git commit -m "Ghoulhunters website — community invasive species watch"
git branch -M main
git remote add origin https://github.com/AjithJosephThomas/ghoulhunters.git   # skip if already added
git push -u origin main
```

Use **`main`** (not `main~`) when pushing.

**Authentication:** Run `git push` in your terminal (GitHub must verify you). Install [GitHub CLI](https://cli.github.com/) (`sudo apt install gh`), run `gh auth login`, then `gh auth setup-git`, then push again — or use a Personal Access Token when prompted.

### 3. Enable GitHub Pages (required — do this before re-running Actions)

If the workflow fails with **Get Pages site failed** / **Not Found**, Pages is not turned on yet.

1. Open **[ghoulhunters → Settings → Pages](https://github.com/AjithJosephThomas/ghoulhunters/settings/pages)**  
2. Under **Build and deployment**, set **Source** to **GitHub Actions** (not “Deploy from a branch”)  
3. Save — you do not need to pick a workflow template; ours is already in `.github/workflows/deploy-pages.yml`  
4. Go to **Actions** → **Deploy GitHub Pages** → **Re-run all jobs** (or push any small commit)

When the run is green, the site is at https://ajithjosephthomas.github.io/ghoulhunters/

**Order matters:** enable Pages (step 3) → then run the deploy workflow. Pushing code alone does not enable Pages.

---

## Troubleshooting

| Error | Fix |
|-------|-----|
| `Get Pages site failed` / `Not Found` on configure-pages or deploy | Complete **step 3** above (Source = GitHub Actions) |
| Workflow does not start | Push to `main` and check **Actions** tab is enabled for the repo |
| Site 404 after green deploy | Wait 2–5 minutes; hard-refresh; confirm URL includes `/ghoulhunters/` |

---

## Updates

After you change the site:

```bash
cd /home/joe/projects/ghoulhunters
git add .
git commit -m "Describe your change"
git push
```

Pages redeploys in about 1–2 minutes.

---

## Notes

- The workflow deploys the **`website/`** folder only (not `docs/`).  
- `website/.nojekyll` tells GitHub not to run Jekyll.  
- Use a local server while editing: `cd website && python3 -m http.server 8080`  
- Official reporting: Biosecurity Queensland **13 25 23**
