import BackButton from '@/components/backbutton';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function MenuScreen() {
  const router = useRouter();

  const t = 30;

  return (
    <SafeAreaProvider>
    <View style={styles.container}>
      <BackButton />

      <Text style={styles.header}>Menu</Text>

      <View style={styles.profileSection}>
        <Image source={require('../../assets/images/icon.png')} style={styles.avatar} />
        <Text style={styles.username}>Thiago Castro</Text>
      </View>

      <TouchableOpacity style={styles.menuItem} onPress={() => router.push('/(tabs)/home')}>
        <Ionicons name="time-outline" size={t} color="#7C3AED" />
        <Text style={styles.menuText}>Atividade recente</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItem} onPress={() => router.push('/(tabs)/buscar')}>
        <Ionicons name="search-outline" size={t} color="#7C3AED" />
        <Text style={styles.menuText}>Buscar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItem} onPress={() => router.push('/(tabs)/salvos')}>
        <Ionicons name="bookmark-outline" size={t} color="#7C3AED" />
        <Text style={styles.menuText}>Meus salvos</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItem} onPress={() => {}}>
        <Ionicons name="chatbubbles-outline" size={t} color="#7C3AED" />
        <Text style={styles.menuText}>Conversas</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItem} onPress={() => router.push('/(tabs)/configuracoes')}>
        <Ionicons name="settings-outline" size={t} color="#7C3AED" />
        <Text style={styles.menuText}>Configurações</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItem} onPress={() => router.push('/(tabs)/ajuda')}>
        <Ionicons name="help-circle-outline" size={t} color="#7C3AED" />
        <Text style={styles.menuText}>Ajuda</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.logout} onPress={() => router.push('/')}>
        <Text style={styles.logoutText}>Sair</Text>
      </TouchableOpacity>
    </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F0A1A',
    padding: 24,
  },
  header: {
    fontWeight: 'bold',
    fontSize: 28,
    marginBottom: 12,
    marginLeft: '40%',
    marginTop: '10%',
    color: '#5930EF'
  },
  title: {
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 12,
    marginLeft: '40%',
    marginTop: '20%'
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 12,
  },
  username: {
    fontSize: 16,
    fontWeight: '600',
    color: '#5930EF',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
  },
  menuText: {
    marginLeft: 12,
    fontSize: 24,
    color: '#5930EF',
  },
  logout: {
    position: 'absolute',
    top: '95%',
    alignSelf: 'center',
    width: '40%',
    height: '5%',
    backgroundColor: '#5930EF',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8
  },
  logoutText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
    
  },
});