# Bio Buddies Mobile App

Expo prototype (SDK 54) for reporting suspected invasive species sightings on Android and iOS.

## Requirements

- **Expo SDK 54** (matches Expo Go 54.x, e.g. 54.0.8)
- Node.js 20.19+

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

Scan the QR code with **Expo Go** on your phone (same Wi‑Fi as your dev machine).

- Android: Expo Go app
- iOS: Camera app or Expo Go

If you see a version mismatch or bundling error after upgrading SDK:

```bash
rm -rf node_modules .expo dist-export
yarn install
yarn start
```

The dev server clears Metro cache on each start. Always restart after changing Expo SDK versions.

## Build standalone installs (optional)

```bash
npx eas-cli login
npx eas build --platform android
npx eas build --platform ios
```

Requires an [Expo](https://expo.dev) account. Android builds produce an APK/AAB; iOS builds require an Apple Developer account for device installs.

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
