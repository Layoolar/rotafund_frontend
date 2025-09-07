import React, { useState } from "react";
import { View,  StyleSheet, KeyboardAvoidingView, Platform, ScrollView } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import Button from "../reusables/buttons";
import CountrySelect from "../reusables/CountrySelect";
import ThemedText from "../reusables/ThemeText";
import { colors, spacing } from  "../constants/theme";

export default function Nationality() {
  const router = useRouter();
  const params = useLocalSearchParams<{ name?: string; country?: string }>();
  const [nationality, setNationality] = useState<string | undefined>();
  const [residence, setResidence] = useState<string | undefined>(params.country);

  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : undefined} style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.container}>
        <ThemedText  style={styles.title}>Nationality</ThemedText>

        <View style={styles.stack}>
          <CountrySelect value={nationality} onChange={setNationality} placeholder="Select" />
          <CountrySelect value={residence} onChange={setResidence} placeholder="Country of residence" />
        </View>

        <View style={{ height: 80 }} />

         <ThemedText variant="caption" style={styles.doneTitle}>Done</ThemedText>
        <ThemedText style={styles.doneCopy}>Your account has been created.</ThemedText> 

        <Button label="Continue" style={{ marginTop: spacing.xl }} onPress={() => router.replace("/protected/dashboard")} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flexGrow: 1, padding: spacing.xxl, backgroundColor: colors.bg, justifyContent: "center" },
  title: { fontSize: 36, fontWeight: "800", textAlign: "center", marginBottom: spacing.xl, color: "#3F3F46" },
  stack: { gap: spacing.lg },
  doneTitle: { fontSize: 32, fontWeight: "800", textAlign: "center", marginTop: spacing.sm, color: "#3F3F46" },
  doneCopy: { marginTop: spacing.sm, color: colors.button, fontSize: 16, textAlign: "center" },
});
