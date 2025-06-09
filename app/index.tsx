import { AuthContext } from "@/contexts/AuthContext";
import { Feather, FontAwesome, Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import React, { useContext, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [lembrar, setLembrar] = useState(false);
  const [loading, setLoading] = useState(false);
   const { login } = useContext(AuthContext);

  const API_URL = "https://autenticao.onrender.com/api/auth/login";

  const handleLogin = async () => {
    // Validação simples
    if (!email || !senha) {
      Alert.alert("Erro", "Por favor, preencha todos os campos");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          senha,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Erro ao fazer login");
      }

      // Salvar token e dados do usuário
      if (lembrar) {
        await AsyncStorage.setItem("userToken", data.token);
        await AsyncStorage.setItem("userData", JSON.stringify(data.user));
      }
      await login(data.token, data.user);
      await new Promise((resolve) => setTimeout(resolve, 100));
      router.replace("/(tabs)/home");
    } catch (error) {
      console.error("Erro no login:", error);
      Alert.alert("Erro", "Não foi possível fazer login");
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <Image
          source={require("../assets/images/logo.png")}
          style={styles.logo}
        />
        <Text style={styles.title}>NEURO GUIA</Text>

        <View style={styles.inputs}>
          <View style={styles.iconInput}>
            <Ionicons name="mail" size={24} color="#7859ea" />
            <TextInput
              style={styles.input}
              placeholder="Insira seu email"
              placeholderTextColor="#aaa"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          <View style={styles.iconInput}>
            <Ionicons name="lock-closed" size={24} color="#7859ea" />
            <TextInput
              style={styles.input}
              placeholder="Insira sua senha"
              placeholderTextColor="#aaa"
              secureTextEntry
              value={senha}
              onChangeText={setSenha}
            />
          </View>
        </View>

        <View style={styles.checkboxContainer}>
          <TouchableOpacity
            onPress={() => setLembrar(!lembrar)}
            style={styles.checkbox}
          >
            {lembrar && <Feather name="check" size={16} color="#fff" />}
          </TouchableOpacity>
          <Text style={styles.checkboxLabel}>Lembrar de mim</Text>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={handleLogin}
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text style={styles.buttonText}>Entrar</Text>
          )}
        </TouchableOpacity>

        <Text style={styles.link}>Esqueceu a senha?</Text>

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

        <TouchableOpacity onPress={() => router.push("/cadastro")}>
          <Text style={styles.cadastrar}>
            Não possui conta?{" "}
            <Text style={{ textDecorationLine: "underline" }}>
              Cadastrar-se
            </Text>
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaProvider>
  );
}

// Mantenha os estilos como estão
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
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    alignSelf: "flex-start",
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#A78BFA",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
  },
  checkboxLabel: {
    color: "#fff",
    fontSize: 14,
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
    fontSize: 16,
  },
  link: {
    color: "#5930EF",
    fontSize: 18,
    marginBottom: 16,
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
  cadastrar: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
  },
});
