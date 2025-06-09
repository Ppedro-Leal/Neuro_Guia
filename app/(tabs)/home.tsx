import { AuthContext } from "@/contexts/AuthContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect, useRouter } from "expo-router";
import React, { useCallback, useContext, useState } from "react";
import {
  ActivityIndicator,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function Home() {
  const router = useRouter();

  const { userData, isLoading } = useContext(AuthContext);
  const [localUserData, setLocalUserData] = useState(null);
  const [isScreenReady, setIsScreenReady] = useState(false);

  useFocusEffect(
    useCallback(() => {
      if (userData) {
        setLocalUserData(userData);
        setIsScreenReady(true);
      } else {
        const loadUserData = async () => {
          const storedData = await AsyncStorage.getItem("userData");
          if (storedData) {
            setLocalUserData(JSON.parse(storedData));
          }
          setIsScreenReady(true);
        };
        loadUserData();
      }

      return () => {
       
        setIsScreenReady(false);
      };
    }, [userData])
  );

  if (!isScreenReady || isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#5930EF" />
      </View>
    );
  }

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Olá, {userData?.nome || "Usuário"}</Text>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.section}>Sugestões de curso para você</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {['NeuroDiversidade', 'TDAH', 'TEA'].map((item) => (
              <TouchableOpacity
                key={item}
                style={styles.card}
                onPress={() => router.push("/(tabs)/curso/[id]")}
              >
                <Image
                  src="../assets/images/icon.png"
                  style={styles.cardImage}
                />
                <Text style={styles.cardText}>{item}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>

          <Text style={styles.section}>Em andamento</Text>
          <View style={styles.progressCard}>
            <Text style={styles.progressText}>Neurodiversidade</Text>
            <Text style={styles.progressSub}>30% concluído</Text>
          </View>
        </ScrollView>
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
   loadingContainer: {
    flex: 1,
    backgroundColor: "#0F0A1A",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "#0F0A1A",
    paddingHorizontal: 24,
    paddingTop: 48,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
  },
  section: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#A78BFA",
    marginBottom: 12,
  },
  card: {
    width: 160,
    height: 120,
    backgroundColor: "#1C1532",
    borderRadius: 12,
    marginRight: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  cardImage: {
    width: 80,
    height: 80,
    marginBottom: 8,
    resizeMode: "contain",
  },
  cardText: {
    color: "#fff",
  },
  progressCard: {
    backgroundColor: "#1C1532",
    borderRadius: 12,
    padding: 16,
    marginTop: 12,
  },
  progressText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  progressSub: {
    color: "#aaa",
    fontSize: 14,
    marginTop: 4,
  },
});
