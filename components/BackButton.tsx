import { TouchableOpacity, StyleSheet } from 'react-native';
import { Link, Href } from 'expo-router';
import { ThemedText } from '@/components/ThemedText';

interface BackButtonProps {
  href: Href;
  text?: string;
}

export function BackButton({ href, text = "← Back" }: BackButtonProps) {
  return (
    <Link href={href} asChild>
      <TouchableOpacity style={styles.backButton}>
        <ThemedText style={styles.backButtonText}>{text}</ThemedText>
      </TouchableOpacity>
    </Link>
  );
}

const styles = StyleSheet.create({
  backButton: {
    alignSelf: 'flex-start',
    padding: 8,
  },
  backButtonText: {
    fontSize: 16,
    color: '#007AFF',
    fontWeight: '500',
  },
});
