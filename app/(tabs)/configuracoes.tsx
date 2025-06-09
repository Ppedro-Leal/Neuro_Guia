import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity
} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function ConfiguracoesScreen() {
  const items = [
    { label: "Perfil", icon: "person-outline" },
    { label: "Notificações", icon: "notifications-outline" },
    { label: "Carteira", icon: "wallet-outline" },
    { label: "Segurança", icon: "lock-closed-outline" },
    { label: "Serviço", icon: "briefcase-outline" },
    { label: "Termos e serviço", icon: "document-text-outline" },
  ];

  return (
    <SafeAreaProvider>
      <ScrollView style={styles.container}>
        <Text style={styles.title}>Configurações</Text>
        {items.map((item, index) => (
          <TouchableOpacity key={index} style={styles.item}>
            <Ionicons name={item.icon as any} size={20} color="#7C3AED" />
            <Text style={styles.itemText}>{item.label}</Text>
            <Ionicons
              name="chevron-forward-outline"
              size={20}
              color="#A0A0A0"
              style={{ marginLeft: "auto" }}
            />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAF9FF",
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1C1532",
    marginBottom: 24,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: "#EEE",
  },
  itemText: {
    marginLeft: 12,
    fontSize: 16,
    color: "#1C1532",
  },
});
