import { Linking, Pressable, StyleSheet, Text, View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { siteConfig } from '../constants/site';
import { colors } from '../theme/colors';
import type { RootStackParamList } from '../navigation/types';

type Props = NativeStackScreenProps<RootStackParamList, 'ThankYou'>;

export function ThankYouScreen({ route, navigation }: Props) {
  const { reportId } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Thank you!</Text>
        <Text style={styles.body}>
          Your report was submitted to Bio Buddies (prototype).
        </Text>
        <Text style={styles.reference}>Reference: {reportId}</Text>
      </View>

      <View style={styles.bqCard}>
        <Text style={styles.bqTitle}>Also report to {siteConfig.biosecurity.authority}</Text>
        <Text style={styles.bqBody}>
          Call {siteConfig.biosecurity.phone} or use the official online form so authorities can
          respond.
        </Text>
        <Pressable
          style={styles.linkButton}
          onPress={() => Linking.openURL(siteConfig.biosecurity.reportUrl)}
        >
          <Text style={styles.linkButtonText}>Open official report form</Text>
        </Pressable>
      </View>

      <Pressable
        style={styles.primaryButton}
        onPress={() => navigation.reset({ index: 0, routes: [{ name: 'Report' }] })}
      >
        <Text style={styles.primaryButtonText}>Report another sighting</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    padding: 20,
    gap: 16,
    justifyContent: 'center',
  },
  card: {
    backgroundColor: colors.greenPale,
    borderRadius: 16,
    padding: 20,
    gap: 10,
    borderLeftWidth: 4,
    borderLeftColor: colors.green,
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: colors.green,
  },
  body: {
    fontSize: 16,
    color: colors.ink,
    lineHeight: 24,
  },
  reference: {
    fontSize: 15,
    fontWeight: '700',
    color: colors.ink,
    marginTop: 4,
  },
  bqCard: {
    backgroundColor: colors.yellowLight,
    borderRadius: 16,
    padding: 20,
    gap: 10,
  },
  bqTitle: {
    fontSize: 17,
    fontWeight: '700',
    color: colors.ink,
  },
  bqBody: {
    fontSize: 15,
    color: colors.stone,
    lineHeight: 22,
  },
  linkButton: {
    alignSelf: 'flex-start',
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 20,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.green,
  },
  linkButtonText: {
    color: colors.green,
    fontWeight: '700',
    fontSize: 14,
  },
  primaryButton: {
    backgroundColor: colors.green,
    paddingVertical: 16,
    borderRadius: 28,
    alignItems: 'center',
  },
  primaryButtonText: {
    color: colors.white,
    fontSize: 18,
    fontWeight: '700',
  },
});
