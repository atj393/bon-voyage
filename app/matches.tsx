import { CommonHeader } from '@/components/CommonHeader';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { StyleSheet } from 'react-native';

export default function MatchesScreen() {
  return (
    <ThemedView style={styles.container}>
      <CommonHeader title="Matched Companions" />
      <ThemedView style={styles.content}>
        <ThemedText type="title" style={styles.title}>Matched Companions</ThemedText>
        <ThemedText>No matches yet.</ThemedText>
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20 },
  title: { marginBottom: 16 },
});
