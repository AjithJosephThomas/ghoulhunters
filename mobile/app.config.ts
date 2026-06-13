import { ExpoConfig, ConfigContext } from 'expo/config';

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: 'Bio Buddies',
  slug: 'bio-buddies-mobile-v2',
  version: '1.0.3',
  extra: {
    eas: {
      projectId: '0b8da95e-7dab-457d-90cd-83f6dc97ed33',
    },
  },
  orientation: 'default',
  icon: './assets/icon.png',
  userInterfaceStyle: 'light',
  android: {
    versionCode: 2,
    adaptiveIcon: {
      backgroundColor: '#FFCC00',
      foregroundImage: './assets/android-icon-foreground.png',
      backgroundImage: './assets/android-icon-background.png',
      monochromeImage: './assets/android-icon-monochrome.png',
    },
    package: 'com.stanthony.biobuddies',
    permissions: ['CAMERA', 'ACCESS_FINE_LOCATION', 'ACCESS_COARSE_LOCATION'],
  },
  ios: {
    buildNumber: '2',
    supportsTablet: true,
    requireFullScreen: false,
    bundleIdentifier: 'com.stanthony.biobuddies',
    infoPlist: {
      ITSAppUsesNonExemptEncryption: false,
      NSCameraUsageDescription:
        'Bio Buddies needs camera access to photograph suspected creatures.',
      NSLocationWhenInUseUsageDescription:
        'Bio Buddies needs your location to record where a sighting occurred.',
    },
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
