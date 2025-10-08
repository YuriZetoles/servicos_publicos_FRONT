// hooks/useAuth.ts
'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { getAccessToken, logout as logoutAuth, type UserType } from '@/lib/auth';

interface User {
  id: string;
  nome: string;
  email: string;
  tipo: UserType;
}

export function useAuth() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      const token = getAccessToken();
      
      if (!token) {
        setUser(null);
        setIsLoading(false);
        return;
      }

      // Decodificar o token JWT para obter informações do usuário
      // Ou fazer uma requisição para a API para validar o token
      
      setIsLoading(false);
    } catch (error) {
      console.error('Erro ao verificar autenticação:', error);
      setUser(null);
      setIsLoading(false);
    }
  };

  const logout = async () => {
    await logoutAuth();
    setUser(null);
    router.push('/login/municipe');
  };

  return {
    user,
    isLoading,
    isAuthenticated: !!user || !!getAccessToken(),
    logout,
  };
}
