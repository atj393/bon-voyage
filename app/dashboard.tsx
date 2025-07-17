import { Link, useLocalSearchParams, Href, useRouter } from 'expo-router';
import { StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import React from 'react';

export default function DashboardScreen() {
  const router = useRouter();
  const params = useLocalSearchParams<{ role?: string }>();
  const role = params.role === 'companion' ? 'companion' : 'host';

  const handleNavigate = (href: Href) => {
    router.push(href);
  };

  return (
    <ThemedView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <ThemedView style={styles.header}>
          <ThemedText type="title">
            {role === 'host' ? 'Welcome, Host' : 'Welcome, Companion'}
          </ThemedText>
        </ThemedView>
        {role === 'host' ? (
          <>
            <DashboardLink text="Post a Trip" href="/post-trip" onPress={handleNavigate} />
            <DashboardLink text="View Matched Companions" href="/matches" onPress={handleNavigate} />
            <ThemedView style={styles.card}>
              <ThemedText type="subtitle">My Trips</ThemedText>
              <ThemedText>No trips yet</ThemedText>
            </ThemedView>
          </>
        ) : (
          <>
            <DashboardLink text="Post Your Availability" href="/post-availability" onPress={handleNavigate} />
            <DashboardLink text="View Travel Requests" href="/requests" onPress={handleNavigate} />
            <ThemedView style={styles.card}>
              <ThemedText type="subtitle">My Supports</ThemedText>
              <ThemedText>No supports yet</ThemedText>
            </ThemedView>
          </>
        )}
      </ScrollView>
    </ThemedView>
  );
}

interface DashboardLinkProps {
  text: string;
  href: Href;
  onPress: (href: Href) => void;
}

function DashboardLink({ text, href, onPress }: DashboardLinkProps) {
  return (
    <Link href={href} asChild>
      <TouchableOpacity style={styles.card} onPress={() => onPress(href)}>
        <ThemedText type="subtitle">{text}</ThemedText>
      </TouchableOpacity>
    </Link>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: { padding: 20, gap: 16 },
  header: { alignItems: 'center', marginBottom: 16 },
  card: {
    padding: 16,
    borderRadius: 8,
    backgroundColor: 'rgba(0,0,0,0.05)',
  },
});
