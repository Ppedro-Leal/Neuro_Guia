import { useRouter } from 'expo-router';
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function Home() {
  const router = useRouter();

  return (
    <SafeAreaProvider>
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Olá, Thiago</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.section}>Sugestões para você</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {[1, 2, 3].map((item) => (
            <TouchableOpacity key={item} style={styles.card} onPress={() => router.push('/(tabs)/curso/[id]')}> 
              <Image src='../assets/images/icon.png' style={styles.cardImage} />
              <Text style={styles.cardText}>Curso {item}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <Text style={styles.section}>Em andamento</Text>
        <View style={styles.progressCard}>
          <Text style={styles.progressText}>Curso de Inclusão Escolar</Text>
          <Text style={styles.progressSub}>30% concluído</Text>
        </View>
      </ScrollView>
    </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F0A1A',
    paddingHorizontal: 24,
    paddingTop: 48,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
  },
  section: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#A78BFA',
    marginBottom: 12,
  },
  card: {
    width: 160,
    height: 120,
    backgroundColor: '#1C1532',
    borderRadius: 12,
    marginRight: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardImage: {
    width: 80,
    height: 80,
    marginBottom: 8,
    resizeMode: 'contain',
  },
  cardText: {
    color: '#fff',
  },
  progressCard: {
    backgroundColor: '#1C1532',
    borderRadius: 12,
    padding: 16,
    marginTop: 12,
  },
  progressText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  progressSub: {
    color: '#aaa',
    fontSize: 14,
    marginTop: 4,
  },
});
