import { CommonHeader } from '@/components/CommonHeader';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { StyleSheet } from 'react-native';

export default function PostTripScreen() {
  return (
    <ThemedView style={styles.container}>
      <CommonHeader title="Post a Trip" />
      <ThemedView style={styles.content}>
        <ThemedText type="title" style={styles.title}>Post a Trip</ThemedText>
        <ThemedText>Trip posting form goes here.</ThemedText>
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20 },
  title: { marginBottom: 16 },
});
