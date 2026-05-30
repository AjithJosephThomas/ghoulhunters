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
git init
git add .
git commit -m "Ghoulhunters community watch website and docs"
git branch -M main
git remote add origin https://github.com/AjithJosephThomas/ghoulhunters.git
git push -u origin main
```

### 3. Enable GitHub Pages

1. Open https://github.com/AjithJosephThomas/ghoulhunters/settings/pages  
2. **Build and deployment** → **Source:** GitHub Actions  
3. After the first push, the **Deploy GitHub Pages** workflow runs automatically  
4. When it finishes (green), open the site URL above  

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
