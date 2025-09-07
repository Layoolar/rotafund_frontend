import React, { useEffect } from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";
import { useRouter } from "expo-router";
import ThemedText from "./reusables/ThemeText";
import { colors } from "./constants/theme";

export default function SplashScreen() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/auth/login");
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      {/* App Name */}
      <ThemedText style={styles.logoText}>Rota Funds</ThemedText>

      {/* Tagline */}
      <ThemedText style={styles.subtitle}>Secure • Fast • Reliable</ThemedText>

      {/* Loading Indicator */}
      <ActivityIndicator size="large" color="#1031AA" style={{ marginTop: 30 }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bg,
    justifyContent: "center",
    alignItems: "center",
  },
  logoText: {
    fontSize: 36,
    fontWeight: "800",
    color: colors.activeBlue,
    letterSpacing: 1,
  },
  subtitle: {
    fontSize: 16,
    color: colors.gray,
    marginTop: 12,
    fontWeight: "500",
  },
});
