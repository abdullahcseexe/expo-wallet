

import { useEffect, useState } from 'react';
import { ClerkProvider } from '@clerk/clerk-expo';
import { Slot } from 'expo-router';
import { tokenCache } from '@clerk/clerk-expo/token-cache';
import SafeScreen from '../components/SafeScreen';
import SplashScreen from '../components/SplashScreen.jsx'; // Adjust path if needed
import { StatusBar } from 'expo-status-bar';

export default function RootLayout() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 3000); // Duration of splash
    return () => clearTimeout(timer);
  }, []);

  return (
    <ClerkProvider
      tokenCache={tokenCache}
      publishableKey={process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY}
    >
      <SafeScreen>
        {showSplash ? <SplashScreen /> : <Slot />}
      </SafeScreen>
      <StatusBar style="dark"/>
    </ClerkProvider>
  );
}