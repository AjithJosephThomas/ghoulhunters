#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

export ANDROID_HOME="${ANDROID_HOME:-$HOME/Android/Sdk}"

echo "→ Prebuild Android native project…"
npx expo prebuild --platform android --clean --no-install

echo "→ Sign release APK with debug keystore (prototype install only)…"
GRADLE_FILE="$ROOT/android/app/build.gradle"
if ! grep -q "signingConfig signingConfigs.debug" "$GRADLE_FILE" 2>/dev/null; then
  perl -0pi -e 's/(buildTypes \{\s*release \{\s*)((?!signingConfig).)*?(minifyEnabled)/$1            signingConfig signingConfigs.debug\n            $3/s' "$GRADLE_FILE" || true
fi

echo "→ Build release APK…"
cd android
./gradlew assembleRelease --no-daemon

APK="$ROOT/android/app/build/outputs/apk/release/app-release.apk"
OUT_DIR="$ROOT/releases"
mkdir -p "$OUT_DIR"
OUT="$OUT_DIR/bio-buddies-android-v$(node -p "require('../app.config.ts')" 2>/dev/null || echo "1.0.2").apk"

# Read version from package.json
VERSION="$(node -p "require('$ROOT/package.json').version")"
OUT="$OUT_DIR/bio-buddies-android-v${VERSION}.apk"

cp "$APK" "$OUT"
echo ""
echo "✓ Android APK: $OUT"
ls -lh "$OUT"
