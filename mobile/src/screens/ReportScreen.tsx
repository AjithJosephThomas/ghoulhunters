import { useState, type ReactNode } from 'react';
import {
  ActivityIndicator,
  Alert,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import * as Location from 'expo-location';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { submitReport } from '../api/mockSubmit';
import { InlineCamera } from '../components/InlineCamera';
import { ScreenContainer } from '../components/ScreenContainer';
import { TagSelector } from '../components/TagSelector';
import { siteConfig } from '../constants/site';
import type { RootStackParamList } from '../navigation/types';
import type { ReportTag, UserProfile } from '../types';
import { colors } from '../theme/colors';
import { getTimestampWithTimezone } from '../utils/timestamp';
import { isNonEmpty } from '../utils/validation';

type Props = NativeStackScreenProps<RootStackParamList, 'Report'> & {
  user: UserProfile;
};

interface Coordinates {
  latitude: number;
  longitude: number;
}

type LocationResult =
  | { ok: true; coords: Coordinates }
  | { ok: false; reason: 'denied' | 'unavailable' };

async function captureLocation(): Promise<LocationResult> {
  const { status } = await Location.requestForegroundPermissionsAsync();
  if (status !== 'granted') {
    return { ok: false, reason: 'denied' };
  }

  try {
    const position = await Location.getCurrentPositionAsync({
      accuracy: Location.Accuracy.Balanced,
    });

    return {
      ok: true,
      coords: {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      },
    };
  } catch {
    return { ok: false, reason: 'unavailable' };
  }
}

export function ReportScreen({ navigation, user }: Props) {
  const [photoUri, setPhotoUri] = useState<string | null>(null);
  const [photoBase64, setPhotoBase64] = useState<string | null>(null);
  const [selectedTag, setSelectedTag] = useState<ReportTag | null>(null);
  const [remarks, setRemarks] = useState('');
  const [locationFallbackNeeded, setLocationFallbackNeeded] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitPhase, setSubmitPhase] = useState<'idle' | 'location' | 'upload'>('idle');
  const [error, setError] = useState<string | null>(null);

  const remarksRequired = selectedTag === 'others' || locationFallbackNeeded;

  const handleCapture = (uri: string, base64: string) => {
    setPhotoUri(uri);
    setPhotoBase64(base64);
    setError(null);
  };

  const handleRetake = () => {
    setPhotoUri(null);
    setPhotoBase64(null);
  };

  const handleSubmit = async () => {
    if (!photoBase64) {
      setError('Take a photo before submitting.');
      return;
    }
    if (!selectedTag) {
      setError('Choose a suspected creature tag.');
      return;
    }
    if (remarksRequired && !isNonEmpty(remarks)) {
      if (locationFallbackNeeded) {
        setError('GPS is unavailable. Add where you saw it in remarks (e.g. riverbank, park name).');
      } else {
        setError('Remarks are required when you select Others.');
      }
      return;
    }

    setSubmitting(true);
    setError(null);
    setSubmitPhase('location');

    const locationResult = await captureLocation();

    if (locationResult.ok) {
      setLocationFallbackNeeded(false);
      const timestamp = getTimestampWithTimezone();
      setSubmitPhase('upload');

      try {
        const response = await submitReport({
          userId: user.userId,
          tag: selectedTag,
          remarks: remarks.trim() || undefined,
          latitude: locationResult.coords.latitude,
          longitude: locationResult.coords.longitude,
          locationSource: 'gps',
          timestamp,
          imageBase64: photoBase64,
        });

        navigation.replace('ThankYou', { reportId: response.reportId });
      } catch {
        Alert.alert('Submit failed', 'Please try again in a moment.');
      } finally {
        setSubmitting(false);
        setSubmitPhase('idle');
      }
      return;
    }

    setLocationFallbackNeeded(true);
    setSubmitting(false);
    setSubmitPhase('idle');

    if (!isNonEmpty(remarks)) {
      setError(
        locationResult.reason === 'denied'
          ? 'Location permission denied. Add where you saw it in remarks below, then submit again.'
          : 'Could not get GPS. Add where you saw it in remarks below, then submit again.',
      );
      return;
    }

    const timestamp = getTimestampWithTimezone();
    setSubmitting(true);
    setSubmitPhase('upload');

    try {
      const response = await submitReport({
        userId: user.userId,
        tag: selectedTag,
        remarks: remarks.trim(),
        latitude: null,
        longitude: null,
        locationSource: 'manual',
        timestamp,
        imageBase64: photoBase64,
      });

      navigation.replace('ThankYou', { reportId: response.reportId });
    } catch {
      Alert.alert('Submit failed', 'Please try again in a moment.');
    } finally {
      setSubmitting(false);
      setSubmitPhase('idle');
    }
  };

  const remarksPlaceholder = locationFallbackNeeded
    ? 'Describe where you saw it (required — GPS unavailable)'
    : remarksRequired
      ? 'Describe what you saw (required for Others)'
      : 'Add any extra details';

  const remarksSectionTitle = locationFallbackNeeded
    ? 'Remarks * (include location)'
    : remarksRequired
      ? 'Remarks *'
      : 'Remarks (optional)';

  const submitLabel =
    submitPhase === 'location'
      ? 'Getting location…'
      : submitPhase === 'upload'
        ? 'Submitting…'
        : 'Submit report';

  return (
    <KeyboardAvoidingView
      style={styles.flex}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 88 : 0}
    >
      <ScreenContainer contentContainerStyle={styles.content}>
        <Text style={styles.tagline}>{siteConfig.tagline}</Text>
        <Text style={styles.warning}>{siteConfig.biosecurity.defaultWarning}</Text>

        <InlineCamera
          photoUri={photoUri}
          onCapture={handleCapture}
          onRetake={handleRetake}
        />

        <Section title="Tag">
          <TagSelector selectedTag={selectedTag} onSelect={setSelectedTag} />
        </Section>

        <Section title={remarksSectionTitle}>
          {locationFallbackNeeded ? (
            <Text style={styles.locationHint}>
              GPS could not be used. Please type where you saw the creature so we can still
              record the sighting.
            </Text>
          ) : null}
          <TextInput
            style={styles.remarksInput}
            value={remarks}
            onChangeText={setRemarks}
            placeholder={remarksPlaceholder}
            multiline
            textAlignVertical="top"
          />
        </Section>

        <Text style={styles.timestampNote}>
          GPS location is captured on submit when available. Otherwise, add location details in
          remarks.
        </Text>

        {error ? <Text style={styles.error}>{error}</Text> : null}

        <Text style={styles.version}>
          Updated build {siteConfig.appVersion} — menu slides up from bottom with website links
        </Text>

        <Pressable
          style={[styles.submitButton, submitting && styles.submitDisabled]}
          onPress={handleSubmit}
          disabled={submitting}
        >
          {submitting ? (
            <View style={styles.submittingRow}>
              <ActivityIndicator color={colors.white} />
              <Text style={styles.submitText}>{submitLabel}</Text>
            </View>
          ) : (
            <Text style={styles.submitText}>Submit report</Text>
          )}
        </Pressable>
      </ScreenContainer>
    </KeyboardAvoidingView>
  );
}

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{title}</Text>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1, backgroundColor: colors.white },
  content: {
    paddingBottom: 32,
    gap: 8,
  },
  tagline: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.green,
  },
  warning: {
    fontSize: 14,
    color: colors.alert,
    lineHeight: 20,
    marginBottom: 8,
  },
  section: {
    marginTop: 16,
    gap: 10,
  },
  sectionTitle: {
    fontSize: 17,
    fontWeight: '700',
    color: colors.ink,
  },
  locationHint: {
    fontSize: 14,
    color: colors.stone,
    lineHeight: 20,
  },
  remarksInput: {
    borderWidth: 1,
    borderColor: colors.grey,
    borderRadius: 10,
    padding: 12,
    minHeight: 96,
    fontSize: 16,
    color: colors.ink,
    backgroundColor: colors.offWhite,
  },
  timestampNote: {
    fontSize: 14,
    color: colors.stone,
    lineHeight: 20,
    marginTop: 8,
  },
  error: {
    color: colors.alert,
    fontWeight: '600',
    fontSize: 14,
    marginTop: 8,
  },
  version: {
    marginTop: 12,
    fontSize: 12,
    color: colors.stone,
    textAlign: 'center',
  },
  submitButton: {
    marginTop: 20,
    backgroundColor: colors.green,
    paddingVertical: 16,
    borderRadius: 28,
    alignItems: 'center',
  },
  submitDisabled: {
    opacity: 0.7,
  },
  submittingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  submitText: {
    color: colors.white,
    fontSize: 18,
    fontWeight: '700',
  },
});
