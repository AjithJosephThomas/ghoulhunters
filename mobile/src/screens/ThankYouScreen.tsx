import { Linking, Pressable, StyleSheet, Text, View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ScreenContainer } from '../components/ScreenContainer';
import { siteConfig } from '../constants/site';
import { colors } from '../theme/colors';
import type { RootStackParamList } from '../navigation/types';

type Props = NativeStackScreenProps<RootStackParamList, 'ThankYou'>;

export function ThankYouScreen({ route, navigation }: Props) {
  const { reportId } = route.params;

  const openUrl = (url: string) => {
    Linking.openURL(url);
  };

  return (
    <ScreenContainer centerContent contentContainerStyle={styles.content}>
      <View style={styles.card}>
        <Text style={styles.title}>Thank you!</Text>
        <Text style={styles.body}>
          Your report was submitted to Bio Buddies (prototype).
        </Text>
        <Text style={styles.reference}>Reference: {reportId}</Text>
      </View>

      <View style={styles.linksCard}>
        <Text style={styles.linksTitle}>On the Bio Buddies website</Text>
        <Text style={styles.linksBody}>
          Learn how to report to official biosecurity channels and find out about spotter rewards.
        </Text>

        <Pressable
          style={styles.linkButton}
          onPress={() => openUrl(siteConfig.website.reportBiosecurityUrl)}
        >
          <Text style={styles.linkButtonText}>Report to Biosecurity Queensland</Text>
        </Pressable>

        <Pressable
          style={styles.linkButton}
          onPress={() => openUrl(siteConfig.website.spotterRewardsUrl)}
        >
          <Text style={styles.linkButtonText}>Spotter rewards</Text>
        </Pressable>
      </View>

      <Pressable
        style={styles.primaryButton}
        onPress={() => navigation.reset({ index: 0, routes: [{ name: 'Report' }] })}
      >
        <Text style={styles.primaryButtonText}>Report another sighting</Text>
      </Pressable>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  content: {
    gap: 16,
    paddingBottom: 32,
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
  linksCard: {
    backgroundColor: colors.yellowLight,
    borderRadius: 16,
    padding: 20,
    gap: 12,
  },
  linksTitle: {
    fontSize: 17,
    fontWeight: '700',
    color: colors.ink,
  },
  linksBody: {
    fontSize: 15,
    color: colors.stone,
    lineHeight: 22,
  },
  linkButton: {
    paddingVertical: 12,
    paddingHorizontal: 14,
    borderRadius: 20,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.green,
  },
  linkButtonText: {
    color: colors.green,
    fontWeight: '700',
    fontSize: 15,
    textAlign: 'center',
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
