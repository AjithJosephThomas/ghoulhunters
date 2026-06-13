import { Alert, Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import type { NavigationProp } from '@react-navigation/native';
import { clearUser } from '../storage/user';
import { colors } from '../theme/colors';
import type { RootStackParamList } from '../navigation/types';
import type { UserProfile } from '../types';

type Props = {
  navigation: NavigationProp<RootStackParamList>;
  user: UserProfile;
  onLogout: () => void;
};

export function AppMenuButton({ navigation, user, onLogout }: Props) {
  const showMenu = () => {
    Alert.alert('Menu', undefined, [
      {
        text: 'Edit profile',
        onPress: () => navigation.navigate('Register', { existingUser: user }),
      },
      {
        text: 'Log out',
        style: 'destructive',
        onPress: async () => {
          await clearUser();
          onLogout();
          navigation.reset({ index: 0, routes: [{ name: 'Register' }] });
        },
      },
      { text: 'Cancel', style: 'cancel' },
    ]);
  };

  return (
    <Pressable
      onPress={showMenu}
      hitSlop={8}
      style={styles.button}
      accessibilityRole="button"
      accessibilityLabel="Open menu"
    >
      <Ionicons name="menu" size={26} color={colors.ink} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    marginRight: 4,
    padding: 4,
  },
});
