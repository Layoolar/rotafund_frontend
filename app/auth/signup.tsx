import React, { useState } from "react";
import { View, Text, StyleSheet, KeyboardAvoidingView, Platform, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import Button from "../reusables/buttons";
import TextField from "../reusables/TextField";
import CountrySelect from "../reusables/CountrySelect";
import { AntDesign } from "@expo/vector-icons";
import { colors, spacing } from "../constants/theme";

export default function SignUp() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [country, setCountry] = useState<string | undefined>();

  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : undefined} style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
        <Text style={styles.title}>Sign up</Text>

        <View style={styles.stack}>
          <Button
            variant="outline"
            label="Sign up with Google"
            leftIcon={<AntDesign name="google" size={20} color={colors.text} />}
            onPress={() => {}}
          />

          <TextField placeholder="Full name" value={name} onChangeText={setName} />
          <CountrySelect value={country} onChange={setCountry} placeholder="Country of residence" />

          <Button label="Next" onPress={() => router.push({ pathname: "/auth/nationality", params: { name, country } })} />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flexGrow: 1, padding: spacing.xxl, backgroundColor: colors.bg, justifyContent: "center" },
  title: { fontSize: 36, fontWeight: "800", textAlign: "center", marginBottom: spacing.xxl },
  stack: { gap: spacing.lg },
});
