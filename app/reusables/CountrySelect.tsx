import React, { useMemo, useState } from "react";
import {
  Modal,
  View,
  Text,
  FlatList,
  Pressable,
  StyleSheet,
} from "react-native";
import { colors, radius, spacing } from "../constants/theme";
import TextField from "./TextField";
import { AntDesign } from "@expo/vector-icons";

const DEFAULTS = ["Nigeria", "Ghana", "Kenya", "South Africa", "United Kingdom", "United States"];

type Props = {
  value?: string;
  onChange: (v: string) => void;
  placeholder?: string;
};

export default function CountrySelect({ value, onChange, placeholder }: Props) {
  const [open, setOpen] = useState(false);
  const data = useMemo(() => DEFAULTS, []);

  return (
    <>
      <Pressable onPress={() => setOpen(true)}>
        <TextField
          pointerEvents="none"
          editable={false}
          value={value}
          placeholder={placeholder || "Country of residence"}
          style={{ paddingRight: 44 }}
        />
        <AntDesign
          name="down"
          size={16}
          color={colors.subtext}
          style={styles.chevron}
          accessibilityElementsHidden
          importantForAccessibility="no"
        />
      </Pressable>

      <Modal visible={open} animationType="slide" transparent>
        <Pressable style={styles.backdrop} onPress={() => setOpen(false)}>
          <Pressable style={styles.sheet}>
            <Text style={styles.title}>Select country</Text>
            <FlatList
              data={data}
              keyExtractor={(i) => i}
              ItemSeparatorComponent={() => <View style={styles.sep} />}
              renderItem={({ item }) => (
                <Pressable
                  onPress={() => {
                    onChange(item);
                    setOpen(false);
                  }}
                  style={styles.item}
                >
                  <Text style={styles.itemText}>{item}</Text>
                </Pressable>
              )}
            />
          </Pressable>
        </Pressable>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  chevron: { position: "absolute", right: 18, top: 20 },
  backdrop: { flex: 1, backgroundColor: "rgba(0,0,0,0.2)", justifyContent: "flex-end" },
  sheet: {
    backgroundColor: colors.bg,
    borderTopLeftRadius: radius.xl,
    borderTopRightRadius: radius.xl,
    padding: spacing.lg,
    maxHeight: "70%",
    gap: spacing.md,
  },
  title: { fontSize: 16, fontWeight: "700" },
  item: { paddingVertical: spacing.md },
  itemText: { fontSize: 16, color: colors.text },
  sep: { height: 1, backgroundColor: colors.outline },
});
