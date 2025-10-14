// src/hooks/useAuthMutations.ts
'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import { getUserTypeFromLevel, type UserType } from '@/lib/auth';

export interface LoginCredentials {
  email: string;
  senha: string;
}

export interface LoginResponse {
  access_token: string;
  refresh_token: string;
  expires_in: number;
  usuario: {
    id: string;
    nome: string;
    email: string;
    nivel_acesso: {
      municipe: boolean;
      operador: boolean;
      secretario: boolean;
      administrador: boolean;
    };
  };
}

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

async function loginRequest(credentials: LoginCredentials): Promise<LoginResponse> {
  const response = await fetch(`${API_URL}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Erro ao fazer login');
  }

  const data = await response.json();
  const userData = data.data.user || data.data;
  
  return {
    access_token: userData.accessToken || data.data.access_token,
    refresh_token: userData.refreshtoken || data.data.refresh_token,
    expires_in: data.data.expires_in || 7200,
    usuario: {
      id: userData._id || userData.id,
      nome: userData.nome,
      email: userData.email,
      nivel_acesso: userData.nivel_acesso
    }
  };
}

async function logoutRequest(accessToken: string): Promise<void> {
  try {
    await fetch(`${API_URL}/logout`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`,
      },
      body: JSON.stringify({ access_token: accessToken }),
    });
  } catch (error) {
    console.error('Erro ao fazer logout:', error);
  }
}

function saveTokens(accessToken: string, refreshToken: string) {
  const isProduction = process.env.NODE_ENV === 'production';
  Cookies.set('access_token', accessToken, { 
    expires: 7, 
    secure: isProduction, 
    sameSite: 'strict' 
  });
  Cookies.set('refresh_token', refreshToken, { 
    expires: 30, 
    secure: isProduction, 
    sameSite: 'strict' 
  });
}

function clearTokens() {
  Cookies.remove('access_token');
  Cookies.remove('refresh_token');
}

export function useLogin(expectedUserType?: UserType) {
  const router = useRouter();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: loginRequest,
    onSuccess: (data) => {
      // Verifica se o tipo de usuário logado corresponde ao esperado
      if (expectedUserType) {
        const userType = getUserTypeFromLevel(data.usuario.nivel_acesso);
        
        if (userType !== expectedUserType) {
          throw new Error(
            `Acesso negado. Esta tela é exclusiva para ${
              expectedUserType === 'municipe' ? 'munícipes' :
              expectedUserType === 'administrador' ? 'administradores' :
              expectedUserType === 'operador' ? 'operadores' :
              'secretarias'
            }.`
          );
        }
      }
      
      saveTokens(data.access_token, data.refresh_token);
      queryClient.setQueryData(['user'], data.usuario);
      router.push('/');
    },
  });
}

export function useLogout() {
  const router = useRouter();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async () => {
      const accessToken = Cookies.get('access_token');
      if (accessToken) {
        await logoutRequest(accessToken);
      }
    },
    onSuccess: () => {
      clearTokens();
      queryClient.clear();
      router.push('/login');
    },
  });
}

export function getAccessToken(): string | undefined {
  return Cookies.get('access_token');
}

export function getRefreshToken(): string | undefined {
  return Cookies.get('refresh_token');
}
