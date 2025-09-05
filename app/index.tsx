import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import ThemedText from './reusables/ThemeText';
import { useRouter } from 'expo-router';

import Colors from './constants/Color';

import { useTheme } from './providers/ThemeProviders';

export default function SplashScreen() {
  const { theme } = useTheme();
  const colors = Colors[theme];
  const router = useRouter();

  return (
    <View style={styles.container}>
      <ThemedText variant="caption">Welcome to Rota Funds</ThemedText>
      <TouchableOpacity onPress={() => router.push("/screens/VerificationScreen")}>
         <ThemedText variant='caption'>Selfie</ThemedText>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.push('/auth/login')}>
        <ThemedText variant='caption'>Login</ThemedText>
      </TouchableOpacity>
      {/* <Text style={[Typography.body, { color: colors.text }, styles.longCopy]}>
        Welcome to Rota Funds
      </Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  longCopy: {
    textAlign: 'center',
    lineHeight: 24,
  },
});