// curso/buscar.tsx - Tela de busca
import BackButton from "@/components/backbutton";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function BuscarScreen() {
  return (
    <SafeAreaProvider>
      <ScrollView style={styles.container}>
        <BackButton />

        <Text style={styles.title}>Busca</Text>

        <View style={styles.searchContainer}>
          <Ionicons
            name="search"
            size={18}
            color="#ccc"
            style={{ marginHorizontal: 6 }}
          />
          <TextInput
            style={styles.searchInput}
            placeholder="Pesquisar"
            placeholderTextColor="#aaa"
          />
          <Ionicons
            name="filter"
            size={18}
            color="#A78BFA"
            style={{ marginHorizontal: 6 }}
          />
        </View>

        <View style={styles.tagList}>
          <TouchableOpacity style={styles.tag} onPress={() => router.push("/(tabs)/curso/[id]")}>
            <Text style={styles.tagText}>Neurodiversidade</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tag}>
            <Text style={styles.tagText}>TEA</Text>
          </TouchableOpacity>
          <View style={{ alignItems: "center" , width: '100%', gap: 0}}>
            <TouchableOpacity style={styles.tag}>
              <Text style={styles.tagText}>Neurodivergência</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.tag, styles.activeTag]}>
              <Text style={styles.tagText}>Estamos revisando o curso</Text>
            </TouchableOpacity>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Acessados recentemente</Text>
        <View style={styles.recentContainer}>
          <View style={styles.recentItem} />
          <View style={styles.recentItem} />
          <View style={styles.recentItem} />
        </View>
      </ScrollView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F0A1A",
    padding: 20,
  },
  title: {
    color: "white",
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 12,
    marginLeft: "40%",
    marginTop: "22%",
  },
  searchContainer: {
    flexDirection: "row",
    backgroundColor: "#1F1F2E",
    borderRadius: 10,
    alignItems: "center",
    paddingHorizontal: 8,
    marginBottom: '8%',
    padding: 10,
  },
  searchInput: {
    flex: 1,
    height: 40,
    color: "white",
  },
  tagList: {
    flexDirection: "column",
    gap: 30,
    marginHorizontal: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  tag: {
    backgroundColor: "#2C2C3C",
    padding: 30,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  tagText: {
    color: "#fff",
    fontSize: 20,
  },
  activeTag: {
    backgroundColor: "#6E41E2",
    marginBottom: 40,
  },
  sectionTitle: {
    color: "#A78BFA",
    fontWeight: "bold",
    marginBottom: 10,
  },
  recentContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  recentItem: {
    backgroundColor: "#333",
    width: 100,
    height: 100,
    borderRadius: 12,
  },
});
