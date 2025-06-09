// curso/aulas.tsx - Tela de lista de aulas
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function CursoAulasScreen() {
  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity style={styles.backButton}>
        <Ionicons name="arrow-back" size={24} color="white" />
      </TouchableOpacity>

      <Image source={{ uri: 'https://placehold.co/300x160' }} style={styles.thumbnail} />

      <View style={styles.content}>
        <Text style={styles.courseTitle}>Curso</Text>
        <Text style={styles.courseName}>Introdução à Neurodiversidades</Text>
        <Text style={styles.meta}>30min • 4 aulas</Text>

        <View style={styles.tabBar}>
          <Text style={[styles.tab, styles.activeTab]}>Aulas</Text>
          <Text style={styles.tab}>Descrição</Text>
        </View>

        <View style={styles.lessonList}>
          <View style={styles.lessonItem}>
            <Text style={styles.lessonTitle}>O que é Neurodiversidade?</Text>
            <Text style={styles.lessonTime}>04:26 min</Text>
          </View>

          <View style={styles.lessonItem}>
            <Text style={styles.lessonTitle}>Tipos de Transtornos</Text>
            <Text style={styles.lessonTime}>10:12 min</Text>
          </View>

          <View style={styles.lessonItem}>
            <Text style={styles.lessonTitle}>Comunicação e Comportamento</Text>
            <Text style={styles.lessonTime}>06:35 min</Text>
          </View>

          <View style={styles.lessonItem}>
            <Text style={styles.lessonTitle}>Inclusão e Acessibilidade</Text>
            <Text style={styles.lessonTime}>09:18 min</Text>
          </View>
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
    padding: 20,
  },
  thumbnail: {
    width: '100%',
    height: 180,
    backgroundColor: '#333',
  },
  content: {
    padding: 20,
  },
  courseTitle: {
    color: '#A78BFA',
    fontWeight: 'bold',
    fontSize: 14,
    marginBottom: 4,
  },
  courseName: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  meta: {
    color: '#888',
    marginVertical: 4,
  },
  tabBar: {
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 12,
  },
  tab: {
    color: '#888',
    marginRight: 20,
  },
  activeTab: {
    color: '#A78BFA',
    borderBottomColor: '#A78BFA',
    borderBottomWidth: 2,
    paddingBottom: 4,
  },
  lessonList: {
    gap: 14,
  },
  lessonItem: {
    backgroundColor: '#1F1F2E',
    padding: 14,
    borderRadius: 10,
  },
  lessonTitle: {
    color: 'white',
    fontWeight: '600',
  },
  lessonTime: {
    color: '#aaa',
    fontSize: 13,
    marginTop: 4,
  },
});
