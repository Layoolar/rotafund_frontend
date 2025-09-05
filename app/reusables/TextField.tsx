import React from "react";
import { View, TextInput, StyleSheet, Text, TextInputProps } from "react-native";
import { colors, radius, spacing } from "../constants/theme";

type Props = TextInputProps & { label?: string; error?: string };

export default function TextField({ label, error, style, ...rest }: Props) {
  return (
    <View style={{ width: "100%" }}>
      {label ? <Text style={styles.label}>{label}</Text> : null}
      <TextInput
        placeholderTextColor={colors.subtext}
        style={[styles.input, style]}
        {...rest}
      />
      {error ? <Text style={styles.error}>{error}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  label: { marginBottom: spacing.xs, color: colors.text, fontWeight: "600" },
  input: {
    height: 56,
    backgroundColor: colors.fieldBg,
    borderWidth: 1,
    borderColor: colors.fieldBorder,
    borderRadius: radius.xl,
    paddingHorizontal: spacing.lg,
    fontSize: 16,
    color: colors.text,
  },
  error: { color: "#DC2626", marginTop: 6, fontSize: 12 },
});
