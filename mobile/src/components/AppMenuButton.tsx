import { Linking, Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import type { NavigationProp } from '@react-navigation/native';
import { useState } from 'react';
import { siteConfig } from '../constants/site';
import { clearUser } from '../storage/user';
import { colors } from '../theme/colors';
import type { RootStackParamList } from '../navigation/types';
import type { UserProfile } from '../types';

type Props = {
  navigation: NavigationProp<RootStackParamList>;
  user: UserProfile;
  onLogout: () => void;
};

type MenuItem = {
  label: string;
  onPress: () => void;
  destructive?: boolean;
};

export function AppMenuButton({ navigation, user, onLogout }: Props) {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  const openUrl = (url: string) => {
    close();
    Linking.openURL(url);
  };

  const items: MenuItem[] = [
    {
      label: 'Bio Buddies website',
      onPress: () => openUrl(siteConfig.website.homeUrl),
    },
    {
      label: 'About us',
      onPress: () => openUrl(siteConfig.website.aboutUsUrl),
    },
    {
      label: 'Biodiversity Queensland',
      onPress: () => openUrl(siteConfig.website.biodiversityQueenslandUrl),
    },
    {
      label: 'Spotter rewards',
      onPress: () => openUrl(siteConfig.website.spotterRewardsUrl),
    },
    {
      label: 'Edit profile',
      onPress: () => {
        close();
        navigation.navigate('Register', { existingUser: user });
      },
    },
    {
      label: 'Log out',
      destructive: true,
      onPress: async () => {
        close();
        await clearUser();
        onLogout();
        navigation.reset({ index: 0, routes: [{ name: 'Register' }] });
      },
    },
  ];

  return (
    <>
      <Pressable
        onPress={() => setOpen(true)}
        hitSlop={8}
        style={styles.button}
        accessibilityRole="button"
        accessibilityLabel="Open menu"
      >
        <Ionicons name="menu" size={26} color={colors.ink} />
      </Pressable>

      <Modal visible={open} animationType="slide" transparent onRequestClose={close}>
        <Pressable style={styles.backdrop} onPress={close}>
          <Pressable style={styles.sheet} onPress={(e) => e.stopPropagation()}>
            <Text style={styles.sheetTitle}>Bio Buddies menu</Text>
            <Text style={styles.sheetVersion}>App version {siteConfig.appVersion}</Text>

            {items.map((item) => (
              <Pressable
                key={item.label}
                style={[styles.menuItem, item.destructive && styles.menuItemDestructive]}
                onPress={item.onPress}
              >
                <Text
                  style={[styles.menuItemText, item.destructive && styles.menuItemTextDestructive]}
                >
                  {item.label}
                </Text>
              </Pressable>
            ))}

            <Pressable style={styles.cancelButton} onPress={close}>
              <Text style={styles.cancelText}>Close</Text>
            </Pressable>
          </Pressable>
        </Pressable>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  button: {
    marginRight: 4,
    padding: 4,
  },
  backdrop: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.45)',
  },
  sheet: {
    backgroundColor: colors.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 28,
    gap: 8,
  },
  sheetTitle: {
    fontSize: 20,
    fontWeight: '800',
    color: colors.ink,
  },
  sheetVersion: {
    fontSize: 13,
    color: colors.stone,
    marginBottom: 8,
  },
  menuItem: {
    paddingVertical: 14,
    paddingHorizontal: 12,
    borderRadius: 12,
    backgroundColor: colors.offWhite,
  },
  menuItemDestructive: {
    backgroundColor: colors.alertPale,
  },
  menuItemText: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.ink,
  },
  menuItemTextDestructive: {
    color: colors.alert,
  },
  cancelButton: {
    marginTop: 8,
    paddingVertical: 14,
    alignItems: 'center',
  },
  cancelText: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.green,
  },
});
