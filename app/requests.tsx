import { CommonHeader } from '@/components/CommonHeader';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { StyleSheet } from 'react-native';

export default function RequestsScreen() {
  return (
    <ThemedView style={styles.container}>
      <CommonHeader title="Travel Requests" />
      <ThemedView style={styles.content}>
        <ThemedText type="title" style={styles.title}>Travel Requests</ThemedText>
        <ThemedText>No requests yet.</ThemedText>
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20 },
  title: { marginBottom: 16 },
});
