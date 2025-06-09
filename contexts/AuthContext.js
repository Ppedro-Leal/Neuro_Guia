// contexts/AuthContext.js
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

// contexts/AuthContext.js
export const AuthProvider = ({ children }) => {
  const [userToken, setUserToken] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [userData, setUserData] = useState(null); // Adicione este estado

  const login = async (token, user) => {
    await AsyncStorage.setItem("userToken", token);
    await AsyncStorage.setItem("userData", JSON.stringify(user));
    setUserToken(token);
    setUserData(user);
    return Promise.resolve(); // Retorna uma Promise
  };

  const logout = async () => {
    await AsyncStorage.removeItem("userToken");
    await AsyncStorage.removeItem("userData");
    console.log("Dados recuperados:", userData); // Verifique aqui
    setUserToken(null);
    setUserData(null); // Limpe os dados do usuário
  };

  const checkLogin = async () => {
    try {
      const token = await AsyncStorage.getItem("userToken");
      const userDataString = await AsyncStorage.getItem("userData");
      const userData = userDataString ? JSON.parse(userDataString) : null;

      setUserToken(token);
      setUserData(userData); // Carregue os dados do usuário
    } catch (e) {
      console.log("Erro ao verificar login:", e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    checkLogin();
  }, []);

  return (
    <AuthContext.Provider
      value={{ login, logout, userToken, isLoading, userData }}
    >
      {children}
    </AuthContext.Provider>
  );
};
