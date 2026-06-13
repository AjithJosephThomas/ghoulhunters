#!/usr/bin/env bash
# One-time setup so Expo Go / EAS dev works on a physical phone from this machine.
set -uo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

info() { echo "→ $*"; }
warn() { echo "⚠ $*" >&2; }
ok() { echo "✓ $*"; }

# --- Google Chrome (Expo dev tools, debugger, web preview) ---
has_chrome() {
  command -v google-chrome-stable >/dev/null 2>&1 \
    || command -v google-chrome >/dev/null 2>&1 \
    || command -v chromium >/dev/null 2>&1 \
    || command -v chromium-browser >/dev/null 2>&1
}

if has_chrome; then
  ok "Chrome/Chromium found ($(command -v google-chrome-stable || command -v google-chrome || command -v chromium || command -v chromium-browser))"
else
  info "Installing Google Chrome (needed for Expo dev tools in the browser)…"
  if command -v apt-get >/dev/null 2>&1; then
    TMP_DEB="$(mktemp /tmp/google-chrome.XXXXXX.deb)"
    if curl -fsSL -o "$TMP_DEB" https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb \
      && sudo dpkg -i "$TMP_DEB" 2>/dev/null; then
      ok "Google Chrome installed"
    elif sudo apt-get install -y chromium-browser 2>/dev/null || sudo apt-get install -y chromium 2>/dev/null; then
      ok "Chromium installed"
    else
      warn "Could not install Chrome (sudo required). Install manually, then re-run:"
      warn "  sudo apt install chromium-browser   OR   https://www.google.com/chrome/"
    fi
    rm -f "$TMP_DEB"
  else
    warn "Could not auto-install Chrome. Install Google Chrome or Chromium, then re-run this script."
    warn "https://www.google.com/chrome/"
  fi
fi

# Prefer Chrome for expo-cli / chrome-launcher
if [[ -z "${CHROME_PATH:-}" ]]; then
  for candidate in google-chrome-stable google-chrome chromium chromium-browser; do
    if command -v "$candidate" >/dev/null 2>&1; then
      export CHROME_PATH="$(command -v "$candidate")"
      break
    fi
  done
fi
if [[ -n "${CHROME_PATH:-}" ]]; then
  ok "CHROME_PATH=$CHROME_PATH"
  if ! grep -q 'CHROME_PATH=' "$ROOT/.env" 2>/dev/null; then
    echo "CHROME_PATH=$CHROME_PATH" >> "$ROOT/.env"
    ok "Wrote CHROME_PATH to mobile/.env (gitignored)"
  fi
fi

# --- Android platform tools (USB debugging) ---
if command -v adb >/dev/null 2>&1; then
  ok "adb found ($(adb --version | head -1))"
else
  warn "adb not found. Install Android platform-tools for USB debugging:"
  warn "  sudo apt install android-tools-adb   # or set ANDROID_HOME and add platform-tools to PATH"
fi

# --- Node dependencies (includes eas-cli, @expo/ngrok for tunnel) ---
info "Installing npm dependencies…"
yarn install --frozen-lockfile 2>/dev/null || yarn install
ok "Dependencies installed"

# --- EAS / Expo account ---
if npx eas-cli whoami >/dev/null 2>&1; then
  ok "Logged in to Expo as $(npx eas-cli whoami 2>/dev/null)"
else
  warn "Not logged in to Expo. Run:  npx eas-cli login"
  warn "Create a free account at https://expo.dev/signup if needed."
fi

# Link project to EAS (adds extra.eas.projectId to app.config.ts)
EAS_PROJECT_ID="0b8da95e-7dab-457d-90cd-83f6dc97ed33"
if ! grep -q 'projectId' "$ROOT/app.config.ts" 2>/dev/null; then
  if npx eas-cli whoami >/dev/null 2>&1; then
    info "Linking project to EAS (creates expo.dev project + projectId)…"
    if ! npx eas-cli init --force --non-interactive 2>/dev/null; then
      info "Adding known EAS projectId to app.config.ts…"
      perl -0pi -e 's/(version: .+,)/$1\n  extra: {\n    eas: {\n      projectId: '"'"'$EAS_PROJECT_ID'"'"',\n    },\n  },/s' "$ROOT/app.config.ts" || \
        warn "Could not auto-patch app.config.ts — add extra.eas.projectId manually: $EAS_PROJECT_ID"
    fi
  else
    warn "Skip EAS project link until you run:  npx eas-cli login && yarn setup:eas"
  fi
else
  ok "EAS projectId already in app.config.ts"
fi

echo ""
ok "Phone dev setup complete."
echo ""
echo "On your phone:"
echo "  1. Install Expo Go (SDK 54): https://expo.dev/go"
echo "  2. Android: open Expo Go → Scan QR code (do NOT scan with Chrome or the Camera app)"
echo "  3. iOS: Camera app or Expo Go"
echo ""
echo "Start the dev server:"
echo "  yarn start          # same Wi‑Fi (LAN)"
echo "  yarn start:tunnel   # different networks / strict router"
echo ""
echo "USB (Android, when Wi‑Fi fails):"
echo "  Enable USB debugging on the phone, plug in USB, then:  yarn phone:usb && yarn start"
echo ""
