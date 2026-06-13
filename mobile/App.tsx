import { useCallback, useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AppMenuButton } from './src/components/AppMenuButton';
import type { RootStackParamList } from './src/navigation/types';
import { RegisterScreen } from './src/screens/RegisterScreen';
import { ReportScreen } from './src/screens/ReportScreen';
import { ThankYouScreen } from './src/screens/ThankYouScreen';
import { loadUser } from './src/storage/user';
import { colors } from './src/theme/colors';
import type { UserProfile } from './src/types';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [booting, setBooting] = useState(true);

  useEffect(() => {
    loadUser()
      .then(setUser)
      .finally(() => setBooting(false));
  }, []);

  const handleRegistered = useCallback((profile: UserProfile) => {
    setUser(profile);
  }, []);

  const handleLogout = useCallback(() => {
    setUser(null);
  }, []);

  if (booting) {
    return (
      <View style={styles.boot}>
        <ActivityIndicator size="large" color={colors.green} />
        <StatusBar style="dark" />
      </View>
    );
  }

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          key={user?.userId ?? 'guest'}
          initialRouteName={user ? 'Report' : 'Register'}
          screenOptions={{
            headerStyle: { backgroundColor: colors.yellow },
            headerTintColor: colors.ink,
            headerTitleStyle: { fontWeight: '700' },
            contentStyle: { backgroundColor: colors.white },
          }}
        >
          <Stack.Screen name="Register" options={{ title: 'Register' }}>
            {(props) => (
              <RegisterScreen {...props} onRegistered={handleRegistered} />
            )}
          </Stack.Screen>
          {user ? (
            <Stack.Screen
              name="Report"
              options={({ navigation }) => ({
                title: 'Bio Buddies',
                headerRight: () => (
                  <AppMenuButton
                    navigation={navigation}
                    user={user}
                    onLogout={handleLogout}
                  />
                ),
              })}
            >
              {(props) => <ReportScreen {...props} user={user} />}
            </Stack.Screen>
          ) : null}
          <Stack.Screen
            name="ThankYou"
            options={{ title: 'Submitted', headerBackVisible: false }}
            component={ThankYouScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="dark" />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  boot: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
  },
});
