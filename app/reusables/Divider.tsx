import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors, spacing } from "../constants/theme";

export default function Divider({ text = "or" }: { text?: string }) {
  return (
    <View style={styles.row}>
      <View style={styles.line} />
      <Text style={styles.text}>{text}</Text>
      <View style={styles.line} />
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: "row", alignItems: "center", gap: spacing.md, marginVertical: spacing.lg },
  line: { flex: 1, height: 1, backgroundColor: colors.outline },
  text: { color: colors.subtext, fontSize: 14, fontWeight: "500" },
});
