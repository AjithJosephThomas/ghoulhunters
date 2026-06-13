import { useState, type ReactNode } from 'react';
import {
  ActivityIndicator,
  Alert,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import * as Location from 'expo-location';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { submitReport } from '../api/mockSubmit';
import { InlineCamera } from '../components/InlineCamera';
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

async function captureLocation(): Promise<Coordinates | null> {
  const { status } = await Location.requestForegroundPermissionsAsync();
  if (status !== 'granted') {
    return null;
  }

  const position = await Location.getCurrentPositionAsync({
    accuracy: Location.Accuracy.Balanced,
  });

  return {
    latitude: position.coords.latitude,
    longitude: position.coords.longitude,
  };
}

export function ReportScreen({ navigation, user }: Props) {
  const [photoUri, setPhotoUri] = useState<string | null>(null);
  const [photoBase64, setPhotoBase64] = useState<string | null>(null);
  const [selectedTag, setSelectedTag] = useState<ReportTag | null>(null);
  const [remarks, setRemarks] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitPhase, setSubmitPhase] = useState<'idle' | 'location' | 'upload'>('idle');
  const [error, setError] = useState<string | null>(null);

  const remarksRequired = selectedTag === 'others';

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
      setError('Remarks are required when you select Others.');
      return;
    }

    setSubmitting(true);
    setError(null);
    setSubmitPhase('location');

    let location: Coordinates | null = null;
    try {
      location = await captureLocation();
    } catch {
      setError('Could not get your location. Check GPS is enabled and try again.');
      setSubmitting(false);
      setSubmitPhase('idle');
      return;
    }

    if (!location) {
      setError('Location permission is required to submit a report.');
      setSubmitting(false);
      setSubmitPhase('idle');
      return;
    }

    const timestamp = getTimestampWithTimezone();
    setSubmitPhase('upload');

    try {
      const response = await submitReport({
        userId: user.userId,
        tag: selectedTag,
        remarks: remarks.trim() || undefined,
        latitude: location.latitude,
        longitude: location.longitude,
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
    >
      <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
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

        <Section title={remarksRequired ? 'Remarks *' : 'Remarks (optional)'}>
          <TextInput
            style={styles.remarksInput}
            value={remarks}
            onChangeText={setRemarks}
            placeholder={
              remarksRequired
                ? 'Describe what you saw (required for Others)'
                : 'Add any extra details'
            }
            multiline
            textAlignVertical="top"
          />
        </Section>

        <Text style={styles.timestampNote}>
          Location and timestamp are captured when you submit.
        </Text>

        {error ? <Text style={styles.error}>{error}</Text> : null}

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
      </ScrollView>
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
  container: {
    padding: 20,
    paddingBottom: 40,
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
