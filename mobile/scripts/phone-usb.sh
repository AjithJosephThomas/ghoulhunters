#!/usr/bin/env bash
# Forward Metro port over USB so Expo Go can reach your laptop without Wi‑Fi.
set -euo pipefail

PORT="${EXPO_DEV_SERVER_PORT:-8081}"

if ! command -v adb >/dev/null 2>&1; then
  echo "adb not found. Install Android platform-tools or set ANDROID_HOME." >&2
  exit 1
fi

DEVICES="$(adb devices | awk 'NR>1 && $2=="device" { print $1 }')"
if [[ -z "$DEVICES" ]]; then
  echo "No Android device detected." >&2
  echo "Enable Developer options → USB debugging, connect USB, accept the trust prompt." >&2
  adb devices
  exit 1
fi

adb reverse "tcp:${PORT}" "tcp:${PORT}"
echo "✓ adb reverse tcp:${PORT} tcp:${PORT} — start Metro with: yarn start"
