import { Link } from 'expo-router';
import { Image } from 'expo-image';
import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

const slides = [
  'Find a caring travel companion for your journey.',
  'Secure and private matching system.',
  'Peace of mind for you and your family.',
];

export default function WelcomeScreen() {
  const scrollViewRef = useRef<ScrollView>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideWidth = 280;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => {
        const nextSlide = (prev + 1) % slides.length;
        scrollViewRef.current?.scrollTo({
          x: nextSlide * slideWidth,
          animated: true,
        });
        return nextSlide;
      });
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.content}>
        <ThemedView style={styles.headerSection}>
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
        </ThemedView>
        
        <ThemedView style={styles.carouselSection}>
          <ScrollView
            ref={scrollViewRef}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            style={styles.scrollView}
            onMomentumScrollEnd={(event) => {
              const slideIndex = Math.round(event.nativeEvent.contentOffset.x / slideWidth);
              setCurrentSlide(slideIndex);
            }}
          >
            {slides.map((text, index) => (
              <ThemedView key={index} style={styles.slide}>
                <ThemedText style={styles.slideText}>{text}</ThemedText>
              </ThemedView>
            ))}
          </ScrollView>
          
          <View style={styles.pagination}>
            {slides.map((_, index) => (
              <View
                key={index}
                style={[
                  styles.paginationDot,
                  index === currentSlide && styles.paginationDotActive,
                ]}
              />
            ))}
          </View>
        </ThemedView>
        
        <ThemedView style={styles.buttonSection}>
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
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: 400,
    width: '100%',
    alignSelf: 'center',
  },
  headerSection: {
    alignItems: 'center',
    marginBottom: 32,
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 16,
  },
  title: {
    textAlign: 'center',
    marginBottom: 8,
  },
  tagline: {
    textAlign: 'center',
  },
  carouselSection: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 32,
  },
  scrollView: {
    width: 280,
    height: 80,
  },
  slide: {
    width: 280,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    height: 80,
  },
  slideText: {
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 24,
  },
  buttonSection: {
    width: '100%',
    alignItems: 'center',
  },
  buttonRow: {
    flexDirection: 'row',
    gap: 16,
    justifyContent: 'center',
    width: '100%',
  },
  button: {
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: 12,
    minWidth: 120,
  },
  buttonOutline: {
    borderWidth: 2,
    borderColor: '#007AFF',
  },
  buttonText: {
    color: '#007AFF',
    fontWeight: '600',
    textAlign: 'center',
    fontSize: 16,
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 16,
    gap: 8,
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#E0E0E0',
  },
  paginationDotActive: {
    backgroundColor: '#007AFF',
  },
});
