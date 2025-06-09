import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function BackButton() {
  const router = useRouter();

  return (
    <TouchableOpacity style={styles.container} onPress={() => router.back()}>
      <Ionicons name="chevron-back" size={26} color="#7C3AED" />
      <Text style={styles.text}>Voltar</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 0,
    position: 'absolute',
    top: '5%',
    left: '4%',
    zIndex: 10,
  },
  text: {
    color: '#7C3AED',
    fontSize: 20,
    marginLeft: 4,
    fontWeight: '500',
  },
});
