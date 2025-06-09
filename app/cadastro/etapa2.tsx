import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function CadastroEtapa2() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [senha, setSenha] = useState("");

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <Image
          source={require("../../assets/images/logo.png")}
          style={styles.logo}
        />
        <Text style={styles.title}>NEURO GUIA</Text>
        <View style={styles.inputs}>
          <View style={styles.iconInput}>
            <Ionicons name="person" size={24} color="#7859ea" />
            <TextInput
              style={styles.input}
              placeholder="Nome"
              placeholderTextColor="#aaa"
              keyboardType="default"
              value={telefone}
              onChangeText={setTelefone}
            />
          </View>
          <View style={styles.iconInput}>
            <Ionicons name="mail" size={24} color="#7859ea" />
            <TextInput
              style={styles.input}
              placeholder="email@exemplo.com"
              placeholderTextColor="#aaa"
              value={email}
              onChangeText={setEmail}
            />
          </View>

          <View style={styles.iconInput}>
            <Ionicons name="lock-closed" size={24} color="#7859ea" />
            <TextInput
              style={styles.input}
              placeholder="Senha"
              placeholderTextColor="#aaa"
              secureTextEntry
              value={senha}
              onChangeText={setSenha}
            />
          </View>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("/")}
        >
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>

        <Text style={styles.or}>Ou</Text>

        <View style={styles.social}>
          <FontAwesome name="google" size={34} color="white" />
          <FontAwesome
            name="facebook"
            size={34}
            color="white"
            style={{ marginHorizontal: 50 }}
          />
          <FontAwesome name="phone" size={34} color="white" />
        </View>

        <TouchableOpacity onPress={() => router.push("/")}>
          <Text style={styles.link}>Já possui conta? Entrar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F0A1A",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: "10%",
  },
  logo: {
    width: 190,
    height: 190,
    marginBottom: "5%",
    resizeMode: "cover",
  },
  title: {
    fontSize: 22,
    color: "#5930EF",
    marginBottom: "25%",
    fontWeight: "bold",
  },
  inputs: {
    width: "100%",
    flexDirection: "column",
    paddingRight: "5%",
    marginBottom: "5%",
  },
  iconInput: {
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    backgroundColor: "transparent",
    color: "white",
    width: "100%",
    padding: 14,
    borderBottomColor: "#7C3AED",
    borderBottomWidth: 2,
    borderRadius: 12,
    marginBottom: "5%",
    marginRight: "10%",
  },
  button: {
    backgroundColor: "#5930EF",
    padding: 14,
    borderRadius: 12,
    width: "80%",
    alignItems: "center",
    marginBottom: 16,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  or: {
    color: "#aaa",
    marginBottom: "8%",
    fontSize: 16,
  },
  social: {
    flexDirection: "row",
    marginBottom: "10%",
  },
  link: {
    color: "#A78BFA",
    fontSize: 16,
  },
});
