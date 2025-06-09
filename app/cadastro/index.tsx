import BackButton from "@/components/backbutton";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function CadastroEtapa1() {
  const router = useRouter();
  const [perfil, setPerfil] = useState<"Responsavel" | "Educador" | null>(null);

  return (
    <SafeAreaProvider>
      <View
        style={{
          position: "absolute",
          width: "100%",
          height: "2%",
          borderBottomColor: "#aaafb9",
          borderBottomWidth: 2,
          zIndex: 10,
          top: "52%",
        }}
      ></View>
      <View style={styles.container}>
        <BackButton />

        <View style={styles.textos}>
          <Text style={styles.label}>Antes de começarmos</Text>
          <Text style={styles.title}>Você é...</Text>
        </View>

        <View
          style={{
            flexDirection: "column",
            gap: "25%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            style={[styles.option, perfil === "Responsavel" && styles.optionSelected]}
            onPress={() => setPerfil("Responsavel")}
          >
            <Text style={styles.optionText}>Responsável</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.option,
              perfil === "Educador" && styles.optionSelected,
            ]}
            onPress={() => setPerfil("Educador")}
          >
            <Text style={styles.optionText}>Educador</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={[styles.button, !perfil && { opacity: 0.5 }]}
          disabled={!perfil}
          onPress={() =>
            router.push({
              pathname: "/cadastro/etapa2",
              params: { perfil },
            })
          }
        >
          <Text style={styles.buttonText}>Continuar</Text>
        </TouchableOpacity>

        <Text style={styles.etapa}>Etapa 1 de 2</Text>
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F0A1A",
    padding: 24,
    justifyContent: "center",
  },
  textos: {
    width: "100%",
    alignItems: "center",
    marginBottom: "20%",
  },
  label: {
    color: "#aaa",
    fontSize: 18,
    marginBottom: "2%",
  },
  title: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 24,
  },
  option: {
    borderColor: "#5930EF",
    borderWidth: 2,
    borderRadius: 14,
    padding: 25,
    alignItems: "center",
    width: "80%",
  },
  optionSelected: {
    backgroundColor: "#5930EF",
  },
  optionText: {
    color: "#fff",
    fontSize: 18,
  },
  button: {
    backgroundColor: "#5930EF",
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 32,
  },
  buttonText: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 16,
  },
  etapa: {
    color: "#aaa",
    marginTop: 12,
    alignSelf: "center",
  },
});
