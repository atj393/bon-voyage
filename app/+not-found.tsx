import { Link, Stack } from 'expo-router';
import { StyleSheet } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Page Not Found' }} />
      <ThemedView style={styles.container}>
        <ThemedText type="title" style={styles.title}>Oops!</ThemedText>
        <ThemedText type="subtitle" style={styles.subtitle}>
          This page does not exist.
        </ThemedText>
        <Link href="/welcome" style={styles.link}>
          <ThemedText type="link">Return to Welcome</ThemedText>
        </Link>
      </ThemedView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    marginBottom: 8,
  },
  subtitle: {
    textAlign: 'center',
    marginBottom: 16,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});
