import { ExpoConfig, ConfigContext } from 'expo/config';

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: 'Bio Buddies',
  slug: 'bio-buddies',
  version: '1.0.0',
  orientation: 'portrait',
  icon: './assets/icon.png',
  userInterfaceStyle: 'light',
  ios: {
    supportsTablet: true,
    bundleIdentifier: 'com.stanthony.biobuddies',
    infoPlist: {
      NSCameraUsageDescription:
        'Bio Buddies needs camera access to photograph suspected creatures.',
      NSLocationWhenInUseUsageDescription:
        'Bio Buddies needs your location to record where a sighting occurred.',
    },
  },
  android: {
    adaptiveIcon: {
      backgroundColor: '#FFCC00',
      foregroundImage: './assets/android-icon-foreground.png',
      backgroundImage: './assets/android-icon-background.png',
      monochromeImage: './assets/android-icon-monochrome.png',
    },
    package: 'com.stanthony.biobuddies',
    permissions: ['CAMERA', 'ACCESS_FINE_LOCATION', 'ACCESS_COARSE_LOCATION'],
  },
  web: {
    favicon: './assets/favicon.png',
  },
  plugins: [
    [
      'expo-camera',
      {
        cameraPermission:
          'Bio Buddies needs camera access to photograph suspected creatures.',
      },
    ],
    [
      'expo-location',
      {
        locationWhenInUsePermission:
          'Bio Buddies needs your location to record where a sighting occurred.',
      },
    ],
  ],
});
