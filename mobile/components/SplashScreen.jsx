import React, { useEffect, useState } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export default function SplashScreen() {
  const [showLink, setShowLink] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLink(true);
    }, 1000); // Show "Tap to continue" after 1 second

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>


      {showLink && (
        <Link href="/" style={styles.link}>
          <Image
          source={require('../assets/images/logo.png')}
          style={styles.image}
          resizeMode="contain"
        />
        </Link>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF8F3',
  },
  image: {
    width: 200,
    height: 200,
  },
  link: {
    marginTop: 30,
    fontSize: 18,
    color: '#9A8478',
  },
});