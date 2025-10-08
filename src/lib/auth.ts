// lib/auth.ts
import Cookies from 'js-cookie';

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

export type UserType = 'administrador' | 'operador' | 'secretaria' | 'municipe';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

export async function login(credentials: LoginCredentials): Promise<LoginResponse> {
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

export function saveTokens(accessToken: string, refreshToken: string) {
  // Salva os tokens nos cookies
  // secure: true apenas em produção (HTTPS), false em desenvolvimento (HTTP localhost)
  const isProduction = process.env.NODE_ENV === 'production';
  Cookies.set('access_token', accessToken, { expires: 7, secure: isProduction, sameSite: 'strict' });
  Cookies.set('refresh_token', refreshToken, { expires: 30, secure: isProduction, sameSite: 'strict' });
}

export function getAccessToken(): string | undefined {
  return Cookies.get('access_token');
}

export function getRefreshToken(): string | undefined {
  return Cookies.get('refresh_token');
}

export function clearTokens() {
  Cookies.remove('access_token');
  Cookies.remove('refresh_token');
}

export async function logout() {
  const accessToken = getAccessToken();
  
  if (accessToken) {
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
  
  clearTokens();
}

export function getUserTypeFromLevel(nivel_acesso: LoginResponse['usuario']['nivel_acesso']): UserType {
  if (nivel_acesso.administrador) return 'administrador';
  if (nivel_acesso.secretario) return 'secretaria';
  if (nivel_acesso.operador) return 'operador';
  if (nivel_acesso.municipe) return 'municipe';
  return 'municipe'; // fallback
}
