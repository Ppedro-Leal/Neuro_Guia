// curso/salvos.tsx - Tela de arquivos salvos
import BackButton from '@/components/backbutton';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function SalvosScreen() {
  return (
    <SafeAreaProvider>
    <ScrollView style={styles.container}>
      <BackButton />

      <Text style={styles.title}>Salvos</Text>

      <View style={styles.searchContainer}>
        <Ionicons name="search" size={18} color="#ccc" style={{ marginHorizontal: 6 }} />
        <TextInput style={styles.searchInput} placeholder="Pesquisar" placeholderTextColor="#aaa" />
      </View>

      <TouchableOpacity style={styles.createFolderButton}>
        <Text style={styles.createFolderText}>Criar pasta</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.item}>
        <View>
          <Text style={styles.itemTitle}>Revisar</Text>
          <Text style={styles.itemCategory}>Categoria: Atividades - 8 exercícios</Text>
        </View>
        <Ionicons name="star" size={20} color="#A78BFA" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.item}>
        <View>
          <Text style={styles.itemTitle}>Boas leituras</Text>
          <Text style={styles.itemCategory}>Categoria: Leitura - 10 Arquivos</Text>
        </View>
        <Ionicons name="star" size={20} color="#A78BFA" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.item}>
        <View>
          <Text style={styles.itemTitle}>Aulas enviar p/é</Text>
          <Text style={styles.itemCategory}>Categoria: Notas - 10 Arquivos salvos</Text>
        </View>
        <Ionicons name="star" size={20} color="#A78BFA" />
      </TouchableOpacity>
    </ScrollView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F0A1A',
    padding: 20,
  },
 title: {
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 12,
    marginLeft: '40%',
    marginTop: '20%'
  },
  searchContainer: {
    flexDirection: 'row',
    backgroundColor: '#1F1F2E',
    borderRadius: 10,
    alignItems: 'center',
    paddingHorizontal: 8,
    marginBottom: 16,
  },
  searchInput: {
    flex: 1,
    height: 40,
    color: 'white',
  },
  createFolderButton: {
    alignSelf: 'flex-end',
    marginBottom: 20,
  },
  createFolderText: {
    color: '#A78BFA',
    fontWeight: 'bold',
  },
  item: {
    backgroundColor: '#1F1F2E',
    padding: 16,
    borderRadius: 10,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  itemCategory: {
    color: '#AAA',
    fontSize: 13,
  },
});
