import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useRouter, useSegments, Stack, Slot } from 'expo-router';
import { colors } from '../constants/theme';

export default function ProtectedLayout() {
  const segments = useSegments();
  const router = useRouter();

  const navItems = [
    {
      label: 'Dashboard',
      icon: <AntDesign name="home" size={24} color="#8C8C8C" />,
      activeIcon: <Ionicons name="home" size={24} color="#1031AA" />,
      activeIconText: <Text style={styles.activeText}>Dashboard</Text>,
      route: '/protected/dashboard',
    },
    {
      icon: (
        <View style={styles.middleButton}>
          <MaterialIcons name="menu-book" size={24} color="white" />
        </View>
      ),
      route: null,
    },
    {
      label: 'Profile',
      icon: <Entypo name="chat" size={24} color="#8C8C8C" />,
      activeIcon: <Entypo name="chat" size={24} color="#1031AA" />,
      activeIconText: <Text style={styles.activeText}>Credit Profile</Text>,
      route: '/protected/profile',
    },
    {
      label: 'Wallet',
      icon: <MaterialCommunityIcons name="wallet-outline" size={24} color="#8C8C8C" />,
      activeIcon: <MaterialCommunityIcons name="wallet-outline" size={24} color="#1031AA" />,
      activeIconText: <Text style={styles.activeText}>Wallet</Text>,
      route: '/protected/wallet',
    },
    {
      label: 'Settings',
      icon: <MaterialCommunityIcons name="account-cog" size={24} color="#8C8C8C" />,
      activeIcon: <MaterialCommunityIcons name="account-cog" size={24} color="#1031AA" />,
      activeIconText: <Text style={styles.activeText}>Settings</Text>,
      route: '/protected/settings',
    },
  ];

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />

      <View style={styles.flex1}>
        <Slot />
      </View>

      {/* Separator line */}
      <View style={styles.separator} />

      {/* Bottom Nav Bar */}
      <View style={styles.bottomNav}>
        {navItems.map((item, index) => {
          const currentRoute = segments[1];
          const isActive = currentRoute === item.route?.split('/').pop();

          return (
            <TouchableOpacity
              key={index}
              style={styles.navItem}
              onPress={() => {
                if (item.route) {
                  router.push(item.route);
                } else {
                  console.log('Load More clicked!');
                }
              }}
            >
              <View style={styles.navItemInner}>
                {isActive ? item.activeIcon : item.icon}
                <Text style={[styles.label, isActive && styles.activeLabel]}>
                  {isActive ? item.activeIconText : item.label}
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  flex1: {
    flex: 1,
  },
  separator: {
    height: 1,
    backgroundColor: colors.anton,
    width: '100%',
  },
  bottomNav: {
    height: 74,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: colors.bg,
    borderTopWidth: 1,
    borderTopColor: colors.anton,
   shadowColor: colors.black,
   shadowOffset: { width: 0, height: -3 },
   shadowOpacity: 0.05,
   shadowRadius: 6,
   elevation: 4
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  navItemInner: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontSize: 12,
    color:  colors.gray,
    marginTop: 4,
    fontWeight: '500',
  },
  activeLabel: {
    fontWeight: '400',
    color: colors.dark,
  },
  activeText: {
    color: colors.activeBlue,
    fontSize: 12,
    fontWeight: '400',
  },
  middleButton: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: colors.dark,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 6,
  },
});
