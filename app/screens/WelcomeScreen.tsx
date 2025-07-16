import { Link } from 'expo-router';
import { Image } from 'expo-image';
import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

const slides = [
  'Find a caring travel companion for your journey.',
  'Secure and private matching system.',
  'Peace of mind for you and your family.',
];

export default function WelcomeScreen() {
  return (
    <ThemedView style={styles.container}>
      <Image
        source={require('@/assets/images/icon.png')}
        style={styles.logo}
        accessibilityLabel="App logo"
      />
      <ThemedText type="title" style={styles.title}>
        Bon Voyage Companion
      </ThemedText>
      <ThemedText type="subtitle" style={styles.tagline}>
        Travel Together, Travel Safer.
      </ThemedText>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.carousel}
      >
        {slides.map((text) => (
          <ThemedView key={text} style={styles.slide}>
            <ThemedText style={styles.slideText}>{text}</ThemedText>
          </ThemedView>
        ))}
      </ScrollView>
      <View style={styles.buttonRow}>
        <Link
          href="/login"
          style={[styles.button, styles.buttonOutline]}
          asChild
        >
          <ThemedText style={styles.buttonText}>Login</ThemedText>
        </Link>
        <Link
          href="/register"
          style={[styles.button, styles.buttonOutline]}
          asChild
        >
          <ThemedText style={styles.buttonText}>Register</ThemedText>
        </Link>
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    gap: 16,
  },
  logo: {
    width: 120,
    height: 120,
  },
  title: {
    textAlign: 'center',
  },
  tagline: {
    textAlign: 'center',
  },
  carousel: {
    paddingVertical: 16,
  },
  slide: {
    width: 260,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  slideText: {
    textAlign: 'center',
  },
  buttonRow: {
    flexDirection: 'row',
    gap: 16,
    marginTop: 24,
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 6,
  },
  buttonOutline: {
    borderWidth: 2,
    borderColor: '#007AFF',
  },
  buttonText: {
    color: '#007AFF',
    fontWeight: '600',
    textAlign: 'center',
  },
});
