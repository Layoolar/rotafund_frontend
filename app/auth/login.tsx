import React, { useState } from "react";
import { View, StyleSheet, KeyboardAvoidingView, Platform, ScrollView, Pressable } from "react-native";
import { useRouter } from "expo-router";
import TextField from "../reusables/TextField";
import Button from "../reusables/buttons";
import ThemedText from "../reusables/ThemeText";
import Divider from "../reusables/Divider";
import { AntDesign } from "@expo/vector-icons";
import { colors, spacing } from "../constants/theme";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : undefined} style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
        <ThemedText style={styles.title}>Login</ThemedText>

        <View style={styles.stack}>
          <TextField
            placeholder="Email address"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
          />
          <TextField
            placeholder="Password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
          <Button label="Log in"  />

          <Divider text="or" />

          <Button
            variant="outline"
            label="Log in with Google"
            leftIcon={<AntDesign name="google" size={20} color={colors.text} />}
            onPress={() => {}}
          />

          <View style={styles.footer}>
            <ThemedText style={styles.footerText}>Don't have an account?</ThemedText>
            <Pressable onPress={() => router.push("/auth/signup")}>
              <ThemedText variant="caption" style={styles.link}>Sign up</ThemedText>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flexGrow: 1, padding: spacing.xxl, backgroundColor: colors.bg, justifyContent: "center" },
  title: { fontSize: 36, fontWeight: "800", textAlign: "center", marginBottom: spacing.xxl },
  stack: { gap: spacing.lg },
  footer: { flexDirection: "row", justifyContent: "center", marginTop: spacing.lg },
  footerText: { color: colors.subtext },
  link: { fontWeight: "700", fontSize: 17, },
});
