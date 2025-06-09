import { Slot } from 'expo-router';
import { AuthProvider } from '../contexts/AuthContext';

export default function RootLayout() {
  return (
    <AuthProvider>
      <AuthLayout />
    </AuthProvider>
  );
}

function AuthLayout() {


  return <Slot />; // Ou sua navegação principal
}

function useAuth(): { userToken: any; isLoading: any; } {
  throw new Error('Function not implemented.');
}
