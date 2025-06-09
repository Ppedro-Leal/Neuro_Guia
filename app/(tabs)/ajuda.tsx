import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function AjudaScreen() {
  const options = [
    'Tutoriais',
    'Perguntas frequentes',
    'Suporte',
    'Acessibilidade'
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Ajuda</Text>
      {options.map((label, index) => (
        <TouchableOpacity key={index} style={styles.item}>
          <Text style={styles.itemText}>{label}</Text>
          <Ionicons name="chevron-forward" size={20} color="#A0A0A0" style={{ marginLeft: 'auto' }} />
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAF9FF',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1C1532',
    marginBottom: 24,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#EEE',
  },
  itemText: {
    fontSize: 16,
    color: '#1C1532',
  },
});
