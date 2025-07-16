import { StyleSheet } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { BackButton } from '@/components/BackButton';

export default function LoginScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.header}>
        <BackButton href="/welcome" />
      </ThemedView>
      
      <ThemedView style={styles.content}>
        <ThemedText type="title" style={styles.title}>Welcome Back</ThemedText>
        <ThemedText type="subtitle" style={styles.subtitle}>
          Sign in to continue your journey
        </ThemedText>
        
        <ThemedView style={styles.form}>
          <ThemedText>Email and password fields will be added here</ThemedText>
        </ThemedView>
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 20,
    paddingTop: 60,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    textAlign: 'center',
    marginBottom: 32,
  },
  form: {
    gap: 16,
  },
});
