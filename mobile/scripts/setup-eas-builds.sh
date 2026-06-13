#!/usr/bin/env bash
# One-time setup for EAS cloud builds (Android APK + iOS IPA).
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

info() { echo "→ $*"; }
warn() { echo "⚠ $*" >&2; }
ok() { echo "✓ $*"; }

info "Installing dependencies…"
yarn install --frozen-lockfile 2>/dev/null || yarn install
ok "Dependencies installed"

if ! npx eas-cli whoami >/dev/null 2>&1; then
  warn "Not logged in to Expo."
  echo ""
  echo "Run:  npx eas-cli login"
  echo "Create a free account at https://expo.dev/signup if needed."
  exit 1
fi

ACCOUNT="$(npx eas-cli whoami 2>/dev/null | head -1)"
ok "Logged in to Expo as $ACCOUNT"

if ! grep -q 'projectId' "$ROOT/app.config.ts" 2>/dev/null; then
  info "Linking project to EAS (adds projectId to app.config.ts)…"
  npx eas-cli init --force --non-interactive
else
  ok "EAS projectId already in app.config.ts"
fi

echo ""
ok "EAS build setup complete."
echo ""
echo "Build installable apps:"
echo "  yarn build:android:local   # Android APK on this machine (no Apple account)"
echo "  yarn build:android:cloud   # Android APK via EAS cloud"
echo "  yarn build:ios:cloud       # iOS IPA via EAS cloud (Apple Developer account required)"
echo "  yarn build:cloud           # Both platforms via EAS cloud"
echo ""
echo "After a cloud build finishes, download the artifact from:"
echo "  https://expo.dev/accounts/$ACCOUNT/projects/bio-buddies-mobile-v2/builds"
echo ""
echo "iOS install notes:"
echo "  • Requires an Apple Developer account (99 USD/year) for device installs."
echo "  • EAS will prompt for Apple credentials on first iOS build (or use automatic signing)."
echo "  • Install via the EAS build page QR code, TestFlight, or ad-hoc provisioning."
