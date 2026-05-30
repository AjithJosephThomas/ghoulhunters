#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")/.."

export GIT_AUTHOR_NAME="${GIT_AUTHOR_NAME:-Ajith J Thomas}"
export GIT_AUTHOR_EMAIL="${GIT_AUTHOR_EMAIL:-AjithJosephThomas@users.noreply.github.com}"
export GIT_COMMITTER_NAME="${GIT_COMMITTER_NAME:-Ajith J Thomas}"
export GIT_COMMITTER_EMAIL="${GIT_COMMITTER_EMAIL:-AjithJosephThomas@users.noreply.github.com}"

git add .

if ! git rev-parse HEAD >/dev/null 2>&1; then
  git commit -m "Ghoulhunters website — community invasive species watch"
else
  if ! git diff --cached --quiet || ! git diff --quiet; then
    git commit -m "Ghoulhunters website — community invasive species watch" || true
  fi
fi

git branch -M main

if ! git remote get-url origin >/dev/null 2>&1; then
  git remote add origin https://github.com/AjithJosephThomas/ghoulhunters.git
fi

echo "Pushing to origin main..."
git push -u origin main

echo "Done. Enable GitHub Pages → GitHub Actions if you have not already."
