import { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ScreenContainer } from '../components/ScreenContainer';
import { siteConfig } from '../constants/site';
import { generateUserId, saveUser } from '../storage/user';
import { colors } from '../theme/colors';
import { useResponsiveLayout } from '../theme/layout';
import type { RootStackParamList } from '../navigation/types';
import type { UserProfile } from '../types';
import { getTimestampWithTimezone } from '../utils/timestamp';
import { isNonEmpty, isValidEmail, isValidPhone } from '../utils/validation';

type Props = NativeStackScreenProps<RootStackParamList, 'Register'> & {
  onRegistered: (user: UserProfile) => void;
};

export function RegisterScreen({ route, navigation, onRegistered }: Props) {
  const existing = route.params?.existingUser;
  const isEditing = Boolean(existing);
  const { isTablet } = useResponsiveLayout();

  const [firstName, setFirstName] = useState(existing?.firstName ?? '');
  const [lastName, setLastName] = useState(existing?.lastName ?? '');
  const [address, setAddress] = useState(existing?.address ?? '');
  const [phone, setPhone] = useState(existing?.phone ?? '');
  const [email, setEmail] = useState(existing?.email ?? '');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async () => {
    if (!isNonEmpty(firstName)) {
      setError('First name is required.');
      return;
    }
    if (!isNonEmpty(lastName)) {
      setError('Last name is required.');
      return;
    }
    if (!isNonEmpty(address)) {
      setError('Address is required.');
      return;
    }
    if (!isValidPhone(phone)) {
      setError('Enter a valid phone number (at least 8 digits).');
      return;
    }
    if (!isValidEmail(email)) {
      setError('Enter a valid email address.');
      return;
    }

    const user: UserProfile = {
      userId: existing?.userId ?? generateUserId(),
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      address: address.trim(),
      phone: phone.trim(),
      email: email.trim().toLowerCase(),
      registeredAt: existing?.registeredAt ?? getTimestampWithTimezone(),
    };

    await saveUser(user);
    onRegistered(user);
    if (isEditing) {
      navigation.goBack();
    } else {
      navigation.reset({ index: 0, routes: [{ name: 'Report' }] });
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.flex}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 88 : 0}
    >
      <ScreenContainer contentContainerStyle={styles.content}>
        <Text style={styles.title}>{isEditing ? 'Edit profile' : 'Register'}</Text>
        <Text style={styles.subtitle}>
          {isEditing
            ? 'Update your details before reporting a sighting.'
            : 'Tell us who you are so we can link your reports to you.'}
        </Text>

        <View style={[styles.nameRow, isTablet && styles.nameRowTablet]}>
          <View style={styles.nameField}>
            <Field label="First name *" value={firstName} onChangeText={setFirstName} />
          </View>
          <View style={styles.nameField}>
            <Field label="Last name *" value={lastName} onChangeText={setLastName} />
          </View>
        </View>

        <Field
          label="Address *"
          value={address}
          onChangeText={setAddress}
          multiline
        />
        <Field
          label="Phone number *"
          value={phone}
          onChangeText={setPhone}
          keyboardType="phone-pad"
        />
        <Field
          label="Email *"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        {error ? <Text style={styles.error}>{error}</Text> : null}

        <Pressable style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>{isEditing ? 'Save profile' : 'Register'}</Text>
        </Pressable>

        {isEditing ? (
          <Pressable onPress={() => navigation.goBack()}>
            <Text style={styles.link}>Cancel</Text>
          </Pressable>
        ) : null}

        <Text style={styles.disclaimer}>
          Student prototype — {siteConfig.name}. Not an official government app.
        </Text>
      </ScreenContainer>
    </KeyboardAvoidingView>
  );
}

function Field({
  label,
  value,
  onChangeText,
  multiline,
  keyboardType,
  autoCapitalize,
}: {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  multiline?: boolean;
  keyboardType?: 'default' | 'email-address' | 'phone-pad';
  autoCapitalize?: 'none' | 'sentences';
}) {
  return (
    <View style={styles.field}>
      <Text style={styles.fieldLabel}>{label}</Text>
      <TextInput
        style={[styles.input, multiline && styles.inputMultiline]}
        value={value}
        onChangeText={onChangeText}
        multiline={multiline}
        keyboardType={keyboardType}
        autoCapitalize={autoCapitalize ?? 'sentences'}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1, backgroundColor: colors.white },
  content: {
    paddingBottom: 32,
    gap: 12,
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: colors.ink,
  },
  subtitle: {
    fontSize: 15,
    color: colors.stone,
    lineHeight: 22,
    marginBottom: 8,
  },
  nameRow: {
    gap: 12,
  },
  nameRowTablet: {
    flexDirection: 'row',
  },
  nameField: {
    flex: 1,
  },
  field: { gap: 6 },
  fieldLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.ink,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.grey,
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
    color: colors.ink,
    backgroundColor: colors.offWhite,
  },
  inputMultiline: {
    minHeight: 72,
    textAlignVertical: 'top',
  },
  error: {
    color: colors.alert,
    fontSize: 14,
    fontWeight: '600',
  },
  button: {
    backgroundColor: colors.green,
    paddingVertical: 14,
    borderRadius: 24,
    alignItems: 'center',
    marginTop: 8,
  },
  buttonText: {
    color: colors.white,
    fontSize: 17,
    fontWeight: '700',
  },
  link: {
    textAlign: 'center',
    color: colors.green,
    fontWeight: '600',
    fontSize: 15,
  },
  disclaimer: {
    marginTop: 16,
    fontSize: 12,
    color: colors.stone,
    textAlign: 'center',
    lineHeight: 18,
  },
});
