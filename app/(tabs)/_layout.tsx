// app/(tabs)/_layout.tsx
import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: '#5930EF',
      tabBarStyle: { backgroundColor: '#0F0A1A' },
      tabBarShowLabel: false,
    }}>
      <Tabs.Screen name="home" options={{
        tabBarLabel: 'Início',
        tabBarIcon: ({ color }) => <Ionicons name="home" size={30} color={color} />,
      }} />
      <Tabs.Screen name="buscar" options={{
        tabBarLabel: 'Buscar',
        tabBarIcon: ({ color }) => <Ionicons name="search" size={30} color={color} />,
      }} />
      <Tabs.Screen name="salvos" options={{
        tabBarLabel: 'Salvos',
        tabBarIcon: ({ color }) => <Ionicons name="bookmark" size={30} color={color} />,
      }} />
      <Tabs.Screen name="menu" options={{
        tabBarLabel: 'Menu',
        tabBarIcon: ({ color }) => <Ionicons name="menu" size={30} color={color} />,
      }} />
      <Tabs.Screen name='configuracoes' options={{
        href: null
      }}/>
      <Tabs.Screen name='curso/[id]' options={{
        href: null
      }}/>
      <Tabs.Screen name='curso/aula' options={{
        href: null
      }}/>
      <Tabs.Screen name='acessibilidade' options={{
        href: null
      }}/>
      <Tabs.Screen name='ajuda' options={{
        href: null
      }}/>
    </Tabs>
  );
}
