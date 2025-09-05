import React from "react";
import { View, StyleSheet } from "react-native";
import Button from "../reusables/buttons";
import { useRouter } from "expo-router";
import ThemedText from "../reusables/ThemeText";
import { colors, spacing } from "../constants/theme";

export default function Done() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <ThemedText style={styles.title}>Done</ThemedText>
      <ThemedText style={styles.copy}>Your account has been created.</ThemedText>
      <Button 
         label="Continue" 
         style={{ 
            marginTop: spacing.xl 
          }} 
         onPress={() => router.replace("/auth/login")} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.bg, padding: spacing.xxl, justifyContent: "center" },
  title: { fontSize: 36, fontWeight: "800", marginBottom: spacing.md, textAlign: 'center' },
  copy: { color: colors.subtext, fontSize: 16, textAlign: 'center' },
});
