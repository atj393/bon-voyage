import React, { useState } from 'react';
import { Alert, Platform, ScrollView, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';

import { CommonHeader } from '@/components/CommonHeader';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

interface TripFormData {
  from: string;
  to: string;
  date: string;
  flightNumber: string;
  notes?: string;
}

export default function PostTripScreen() {
  const [form, setForm] = useState<TripFormData>({
    from: '',
    to: '',
    date: '',
    flightNumber: '',
    notes: '',
  });
  const [trips, setTrips] = useState<TripFormData[]>([]);

  const handleChange = (key: keyof TripFormData, value: string) => {
    setForm({ ...form, [key]: value });
  };

  const handleSubmit = () => {
    if (!form.from || !form.to || !form.date || !form.flightNumber) {
      Alert.alert('Missing Fields', 'Please fill in all required fields');
      return;
    }
    setTrips([...trips, form]);
    Alert.alert('Trip Posted', 'Your trip has been posted successfully', [
      {
        text: 'OK',
        onPress: () => router.push('/dashboard?role=host'),
      },
    ]);
    setForm({ from: '', to: '', date: '', flightNumber: '', notes: '' });
  };

  return (
    <ThemedView style={styles.container}>
      <CommonHeader title="Post a New Trip" />
      <ScrollView contentContainerStyle={styles.content}>
        <ThemedText type="title" style={styles.title}>
          Post a New Trip
        </ThemedText>
        <ThemedView style={styles.inputGroup}>
          <ThemedText style={styles.label}>From</ThemedText>
          <TextInput
            style={styles.input}
            placeholder="From (City or Airport)"
            placeholderTextColor="#999"
            value={form.from}
            onChangeText={(v) => handleChange('from', v)}
          />
        </ThemedView>

        <ThemedView style={styles.inputGroup}>
          <ThemedText style={styles.label}>To</ThemedText>
          <TextInput
            style={styles.input}
            placeholder="To (City or Airport)"
            placeholderTextColor="#999"
            value={form.to}
            onChangeText={(v) => handleChange('to', v)}
          />
        </ThemedView>

        <ThemedView style={styles.inputGroup}>
          <ThemedText style={styles.label}>Date</ThemedText>
          <TextInput
            style={styles.input}
            placeholder="YYYY-MM-DD"
            placeholderTextColor="#999"
            value={form.date}
            onChangeText={(v) => handleChange('date', v)}
            inputMode={Platform.OS === 'web' ? 'text' : 'numeric'}
          />
        </ThemedView>

        <ThemedView style={styles.inputGroup}>
          <ThemedText style={styles.label}>Flight Number</ThemedText>
          <TextInput
            style={styles.input}
            placeholder="Flight Number"
            placeholderTextColor="#999"
            value={form.flightNumber}
            onChangeText={(v) => handleChange('flightNumber', v)}
          />
        </ThemedView>

        <ThemedView style={styles.inputGroup}>
          <ThemedText style={styles.label}>Notes</ThemedText>
          <TextInput
            style={[styles.input, styles.textArea]}
            placeholder="Any additional info..."
            placeholderTextColor="#999"
            value={form.notes}
            onChangeText={(v) => handleChange('notes', v)}
            multiline
            numberOfLines={4}
          />
        </ThemedView>

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <ThemedText style={styles.buttonText}>Post Trip</ThemedText>
        </TouchableOpacity>
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: { padding: 20, gap: 16, paddingBottom: 100 },
  title: { textAlign: 'center', marginBottom: 8 },
  inputGroup: { gap: 8 },
  label: { fontSize: 16, fontWeight: '500' },
  input: {
    borderWidth: 2,
    borderColor: '#007AFF',
    borderRadius: 12,
    padding: 12,
    fontSize: 16,
    backgroundColor: 'transparent',
    color: '#000',
    minHeight: 44,
  },
  textArea: { minHeight: 100, textAlignVertical: 'top' },
  button: {
    backgroundColor: '#007AFF',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
    minHeight: 50,
  },
  buttonText: { color: '#fff', fontSize: 18, fontWeight: '600' },
});
