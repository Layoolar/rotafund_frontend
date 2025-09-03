import { Stack } from 'expo-router';
import React from 'react';
import { ThemeProvider } from './providers/ThemeProviders';


const RootLayout = () => {
  return (
    <ThemeProvider>
      <Stack>
          <Stack.Screen name="index" options={{headerShown: false}} />
          <Stack.Screen name="screens/VerificationScreen" options={{ headerShown: false}} />
      </Stack>
    </ThemeProvider>
  )
}

export default RootLayout;