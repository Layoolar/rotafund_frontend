import React, { useState } from 'react';
import { SafeAreaView, View,  StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as DocumentPicker from "expo-document-picker";
import { useRouter } from 'expo-router';
import { FileUpload } from '@/app/reusables/fileUpload';
import ThemedText from '@/app/reusables/ThemeText';
import { colors } from '@/app/constants/theme';

export default function UserDashboard() {
  const [screen, setScreen] = useState('dashboard');
  const [file, setFile] = useState<DocumentPicker.DocumentPickerAsset | null>(null);
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.iconButton} onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={28} color="#222" />
        </TouchableOpacity>

        <ThemedText style={styles.headerTitle}>
          {screen === 'dashboard' ? 'User Dashboard' : 'Credit Profile'}
        </ThemedText>

        <TouchableOpacity style={styles.avatarButton} onPress={() => console.log('profile')}>
          <View style={styles.avatarPlaceholder} />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        {screen === 'dashboard' ? (
          <View>
            {/* Card: Credit Profile */}
            <TouchableOpacity activeOpacity={0.95} onPress={() => setScreen('credit')} style={styles.card}>
              <ThemedText style={styles.cardTitle}>Credit Profile</ThemedText>
              <ThemedText style={styles.amount}>€500.00</ThemedText>
              <ThemedText style={styles.available}>Available Credit: €200.00</ThemedText>

              <View style={{ height: 16 }} />

              <ThemedText style={styles.sectionTitle}>Persona Verification</ThemedText>
              <ThemedText style={styles.sectionValue}>VERIFIED</ThemedText>

              <View style={{ height: 14 }} />

              <ThemedText style={styles.sectionTitle}>Stripe Onboarding</ThemedText>
              <ThemedText style={styles.sectionValue}>PENDING</ThemedText>
            </TouchableOpacity>

            {/* Menu list */}
            <View style={styles.menuList}>
              {['Notifications', 'Security and Privacy', 'Agreement', 'Active Pot'].map((item) => (
                <TouchableOpacity key={item} style={styles.menuItem} onPress={() => console.log(item)}>
                  <ThemedText style={styles.menuText}>{item}</ThemedText>
                  <Ionicons name="chevron-forward" size={20} color="#666" />
                </TouchableOpacity>
              ))}
            </View>
          </View>
        ) : (
          <View>
            <ThemedText style={styles.sectionHeading}>Credit Limit</ThemedText>

            <View style={[styles.card, styles.innerCard]}> 
              <ThemedText style={styles.cardTitleSmall}>Credit Limit</ThemedText>
              <ThemedText style={styles.amountLarge}>€500.00</ThemedText>
              <ThemedText style={styles.available}>Available Credit: €200.00</ThemedText>

              <View style={{ height: 18 }} />

              <ThemedText 
                style={[styles.sectionTitle, { marginBottom: 10 }]}>
                    Credit History
              </ThemedText>

              <View style={styles.historyCard}>
                <ThemedText 
                  style={styles.historyTitle}>
                  Auto growth +20 EUR
                </ThemedText>
                <ThemedText 
                  style={styles.historyDate}>
                April 12, 2024
              </ThemedText>
              </View>

              {/* ✅ Replace old TouchableOpacity with FileUpload */}
              <FileUpload
                label="Upload Bank Statement"
                onFileSelected={(selectedFile) => setFile(selectedFile)}
              />

              {file && (
                <ThemedText style={{ marginTop: 10, fontSize: 14, color: '#333' }}>
                  Uploaded: {file.name}
                </ThemedText>
              )}
            </View>

            <View style={{ height: 24 }} />
          </View>
        )}
      </ScrollView>

      {screen === 'credit' && (
        <TouchableOpacity style={styles.fab} onPress={() => setScreen('dashboard')}>
          <Ionicons name="arrow-back" size={20} color="#fff" />
        </TouchableOpacity>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.grey },
  header: {
    paddingHorizontal: 18,
    paddingTop: 12,
    paddingBottom: 18,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.backgroundWaf,
  },
  iconButton: { width: 44, alignItems: 'flex-start' },
  headerTitle: { fontSize: 28, fontWeight: '700', color: '#111' },
  avatarButton: { width: 44, alignItems: 'flex-end' },
  avatarPlaceholder: { width: 38, height: 38, borderRadius: 19, backgroundColor: colors.board },
  content: { padding: 18, paddingBottom: 40 },
  card: {
    backgroundColor: colors.bg,
    borderRadius: 14,
    padding: 18,
    marginBottom: 18,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.05,
    shadowRadius: 12,
    elevation: 3,
  },
  innerCard: { paddingBottom: 28 },
  cardTitle: { fontSize: 18, fontWeight: '700', color: colors.dark, marginBottom: 6 },
  cardTitleSmall: { fontSize: 16, fontWeight: '600', color: colors.dark },
  amount: { fontSize: 40, fontWeight: '800', color: colors.dark, marginVertical: 6 },
  amountLarge: { fontSize: 48, fontWeight: '800', color: colors.dark, marginVertical: 6 },
  available: { fontSize: 14, color: colors.gray, marginBottom: 8 },
  sectionTitle: { fontSize: 18, fontWeight: '700', color: colors.dark },
  sectionValue: { fontSize: 14, color: colors.gray, marginTop: 6, marginBottom: 8 },
  menuList: { marginTop: 6 },
  menuItem: {
    backgroundColor: colors.bg,
    paddingVertical: 18,
    paddingHorizontal: 14,
    borderRadius: 10,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.03,
    shadowRadius: 8,
    elevation: 1,
  },
  menuText: { fontSize: 18, color: colors.dark, fontWeight: '600' },
  sectionHeading: { fontSize: 22, fontWeight: '700', color: colors.dark, marginBottom: 12 },
  historyCard: {
    borderWidth: 1,
    borderColor: colors.anton,
    borderRadius: 10,
    padding: 14,
    marginBottom: 12,
    backgroundColor: colors.bg,
  },
  historyTitle: { fontSize: 18, fontWeight: '700', color: colors.dark },
  historyDate: { fontSize: 14, color: colors.lightGray, marginTop: 6 },
  fab: {
    position: 'absolute',
    right: 18,
    bottom: 22,
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: colors.dark,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.12,
    shadowRadius: 12,
    elevation: 6,
  },
});
