#!/usr/bin/env bash
# Build iOS IPA via EAS cloud (requires eas-cli login + Apple Developer account).
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

if ! npx eas-cli whoami >/dev/null 2>&1; then
  echo "Not logged in. Run:  npx eas-cli login" >&2
  exit 1
fi

if ! grep -q 'projectId' "$ROOT/app.config.ts" 2>/dev/null; then
  echo "EAS project not linked. Run:  yarn setup:eas" >&2
  exit 1
fi

VERSION="$(node -p "require('$ROOT/package.json').version")"
echo "→ Building iOS IPA v${VERSION} via EAS cloud…"
echo "  Profile: preview (internal distribution)"
echo ""

npx eas-cli build --platform ios --profile preview

echo ""
echo "→ When the build finishes, open:"
ACCOUNT="$(npx eas-cli whoami 2>/dev/null | head -1)"
echo "  https://expo.dev/accounts/${ACCOUNT}/projects/bio-buddies-mobile-v2/builds"
echo ""
echo "Download the .ipa from the build page and install via TestFlight or ad-hoc provisioning."
