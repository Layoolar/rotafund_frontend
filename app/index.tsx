import React from 'react';
import { View,  StyleSheet } from 'react-native';
import ThemedText from './reusables/ThemeText';

import Typography from './constants/Typography';
import Colors from './constants/Color';

import { useTheme } from './providers/ThemeProviders';

export default function SplashScreen() {
  const { theme } = useTheme();
  const colors = Colors[theme];

  return (
    <View style={styles.container}>
      <ThemedText variant="caption">Welcome to Rota Funds</ThemedText>
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