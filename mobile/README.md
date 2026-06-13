# Bio Buddies Mobile App

Expo prototype (SDK 54) for reporting suspected invasive species sightings on Android and iOS.

## Supported devices

- **Android phones and tablets**
- **iPhones and iPads** (including Split View / Slide Over on iPad)
- Portrait and landscape orientations
- Responsive layout: content is centred with a readable max width on larger screens

## Requirements

- **Expo SDK 54** (matches Expo Go 54.x, e.g. 54.0.8)
- Node.js 20.19+
- **Google Chrome** on your dev machine (Expo dev tools, debugger, web preview)
- **Expo Go** on your phone ([Android](https://play.google.com/store/apps/details?id=host.exp.exponent) / [iOS](https://apps.apple.com/app/expo-go/id982107779))

## Phone development setup (one time)

Run the setup script from the `mobile/` folder. It installs Chrome if missing, installs dependencies (including EAS CLI and tunnel support), and links the project to Expo when you are logged in.

```bash
cd mobile
yarn setup:phone
```

Then log in to Expo (free account) if prompted:

```bash
npx eas-cli login
npx eas-cli init    # adds projectId to app.config.ts — needed for EAS builds
```

### On your phone

| Step | Android | iOS |
|------|---------|-----|
| Install client | [Expo Go](https://expo.dev/go) from Play Store | [Expo Go](https://expo.dev/go) from App Store |
| Open project | Expo Go → **Scan QR code** | Camera app or Expo Go |
| Important | Do **not** scan with Chrome or the stock Camera app — links must open in **Expo Go** | — |

Grant **camera** and **location** when the app asks (needed for sightings).

### On your laptop

- **Chrome** — Expo opens the dev UI and debugger in the browser. The setup script sets `CHROME_PATH` in `mobile/.env` when it finds Chrome.
- **Same Wi‑Fi** — phone and laptop on the same network; then `yarn start`.
- **Different Wi‑Fi / strict router** — `yarn start:tunnel` (uses `@expo/ngrok`).
- **USB (Android fallback)** — enable USB debugging, plug in the phone, then:

```bash
yarn phone:usb   # adb reverse tcp:8081 tcp:8081
yarn start
```

Open the project from Expo Go (recent projects or enter the `exp://` URL shown in the terminal).

## Features

- User registration (first name, last name, address, phone, email) with persisted profile and `userId`
- Inline camera capture
- GPS latitude/longitude
- Species tags: **Asian Gold Clam** or **Others** (remarks required for Others)
- Mock report submission with timestamp (timezone), user id, photo, location, and remarks
- Thank-you screen with Biosecurity Queensland reminder

## Run locally

```bash
cd mobile
npm install
npm start
```

Scan the QR code with **Expo Go** on your phone (same Wi‑Fi as your dev machine). See **Phone development setup** above if this is your first run.

- Android: Expo Go → Scan QR code (not Chrome)
- iOS: Camera app or Expo Go

If you see a version mismatch or bundling error after upgrading SDK:

```bash
rm -rf node_modules .expo dist-export
yarn install
yarn start
```

The dev server clears Metro cache on each start. Always restart after changing Expo SDK versions.

### Phone still shows the old app?

Metro on your computer already has the latest code. Expo Go on the phone often keeps a cached bundle until you force a reload:

1. **In the terminal** where `yarn start` is running, press **`r`** to reload all connected devices.
2. **On the phone**, fully close Expo Go (swipe it away from recent apps), open Expo Go again, and **scan the QR code** from the terminal (do not reopen an old “Recent project”).
3. If it still looks stale: Android → Settings → Apps → Expo Go → **Clear cache**, then scan again.
4. Confirm you see **“Bio Buddies app v1.0.3”** at the bottom of the report screen when you tap ☰.
5. Phone and laptop must be on the **same Wi‑Fi**. If not, run `yarn start:tunnel` and scan the new QR code.

## Build standalone installs

### One-time EAS setup

After logging in to Expo, link the project and verify build tooling:

```bash
cd mobile
npx eas-cli login
yarn setup:eas
```

This links `@ajithjosephthomas/bio-buddies-mobile-v2` to EAS (adds `extra.eas.projectId` in `app.config.ts`).

### Android APK (local, no Expo cloud)

```bash
yarn build:android:local
```

Output: `releases/bio-buddies-android-v1.0.3.apk` — copy to the phone and install.

### iOS IPA (EAS cloud — requires Apple Developer account)

Run **in your terminal** (interactive — EAS will ask for Apple ID / app-specific password on first build):

```bash
yarn build:ios:cloud
# or
yarn build:ios:eas
```

When the build finishes, download the `.ipa` from:

https://expo.dev/accounts/ajithjosephthomas/projects/bio-buddies-mobile-v2/builds

Install via the build page QR code, TestFlight, or ad-hoc provisioning.

### Both platforms via EAS cloud

```bash
yarn build:cloud
```

Requires an [Expo](https://expo.dev) account. iOS device installs also require an [Apple Developer Program](https://developer.apple.com/programs/) membership.

## Project structure

```
src/
  api/mockSubmit.ts      # Mock POST — logs payload to Metro console
  components/            # InlineCamera, TagSelector
  constants/site.ts      # Bio Buddies copy from website
  navigation/types.ts
  screens/               # Register, Home, Report, ThankYou
  storage/user.ts        # AsyncStorage profile persistence
  theme/colors.ts
  utils/
```

## Notes

- Student prototype — not an official government app.
- Submissions are mocked locally; swap `submitReport` in `src/api/mockSubmit.ts` when a real API exists.
