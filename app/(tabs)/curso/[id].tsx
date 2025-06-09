import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function CursoDetalhesScreen() {
  const router = useRouter();

  return (
    <ScrollView style={styles.container}>

      <Image source={{ uri: 'https://via.placeholder.com/150' }} style={styles.courseImage} />

      <View style={styles.content}>
        <Text style={styles.title}>Descrição</Text>
        <Text style={styles.description}>
          O curso de Neurodiversidade oferece uma introdução ao tema voltado para a diversidade de
          funcionamento neurológico, como autismo, TDAH e dislexia.
        </Text>

        <View style={styles.professorContainer}>
          <Text style={styles.professorTitle}>Professor</Text>
          <Text style={styles.professorName}>Allan Vasconcelos Carneiro</Text>
        </View>

        <View style={styles.statsContainer}>
          <Text style={styles.stat}>Atividades: <Text style={styles.bold}>18</Text></Text>
          <Text style={styles.stat}>Realizadas: <Text style={styles.bold}>15</Text></Text>
          <Text style={styles.stat}>Progresso: <Text style={styles.bold}>82%</Text></Text>
        </View>

        <TouchableOpacity style={styles.continueButton} onPress={() => router.push("/(tabs)/curso/aula")}>
          <Text style={styles.continueText}>Continuar assistindo</Text>
          <Ionicons name="play-circle" size={20} color="#fff" />
        </TouchableOpacity>

        <View style={styles.module}>
          <Text style={styles.moduleTitle}>Módulo 1:</Text>
          <Text style={styles.moduleDesc}>Introdução à Neurodiversidade</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F0A1A',
  },
  backButton: {
    padding: 16,
    position: 'absolute',
    zIndex: 10,
  },
  courseImage: {
    width: '100%',
    height: 180,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  content: {
    padding: 20,
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  description: {
    color: '#C5C5C5',
    fontSize: 14,
    marginBottom: 16,
  },
  professorContainer: {
    marginBottom: 12,
  },
  professorTitle: {
    color: '#888',
    fontSize: 12,
  },
  professorName: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  stat: {
    color: '#C5C5C5',
    fontSize: 14,
  },
  bold: {
    color: '#fff',
    fontWeight: 'bold',
  },
  continueButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#6C40FF',
    padding: 14,
    borderRadius: 12,
    marginBottom: 24,
  },
  continueText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  module: {
    backgroundColor: '#1C1532',
    padding: 16,
    borderRadius: 12,
  },
  moduleTitle: {
    color: '#A78BFA',
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  moduleDesc: {
    color: '#fff',
    fontSize: 14,
  },
});
