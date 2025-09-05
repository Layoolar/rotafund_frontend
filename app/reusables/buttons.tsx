import React from "react";
import { Pressable, ActivityIndicator, StyleSheet, ViewStyle } from "react-native";
import { colors, radius, spacing } from '../constants/theme';
import ThemedText from "./ThemeText";

type Props = {
  label: string;
  onPress?: () => void;
  loading?: boolean;
  variant?: "solid" | "outline" | "google";
  style?: ViewStyle;
  leftIcon?: React.ReactNode;
  disabled?: boolean;
};

export default function Button({
  label,
  onPress,
  loading,
  variant = "solid",
  style,
  leftIcon,
  disabled,
}: Props) {
  const isOutline = variant === "outline" || variant === "google";
  return (
    <Pressable
      accessibilityRole="button"
      onPress={onPress}
      disabled={disabled || loading}
      style={({ pressed }) => [
        styles.base,
        variant === "solid" ? styles.solid : styles.outline,
        pressed && { opacity: 0.9 },
        disabled && { opacity: 0.6 },
        style,
      ]}
    >
      {loading ? (
        <ActivityIndicator color={variant === "solid" ? colors.buttonText : colors.text} />
      ) : (
        <>
          {leftIcon}
          <ThemedText style={[styles.label, isOutline ? styles.labelOutline : styles.labelSolid]}>
            {label}
          </ThemedText>
        </>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    height: 56,
    borderRadius: radius.xl,
    paddingHorizontal: spacing.lg,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: spacing.sm,
  },
  solid: {
    backgroundColor: colors.button,
  },
  outline: {
    backgroundColor: colors.bg,
    borderWidth: 1,
    borderColor: colors.outline,
  },
  label: { fontSize: 16, fontWeight: "600" },
  labelSolid: { color: colors.buttonText },
  labelOutline: { color: colors.text },
});

