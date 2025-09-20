// Configurações da API
export const API_CONFIG = {
  // URL base da API - ajuste conforme necessário
  BASE_URL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001",
  
  // Endpoints
  ENDPOINTS: {
    TIPO_DEMANDA: "/tipoDemanda",
    TIPO_DEMANDA_BY_ID: (id: string) => `/tipoDemanda/${id}`,
    TIPO_DEMANDA_FOTO: (id: string) => `/tipodemanda/${id}/foto`,
  },
  
  // Headers padrão
  DEFAULT_HEADERS: {
    "Content-Type": "application/json",
  },
} as const;

// Utilitário para construir URLs completas
export function buildApiUrl(endpoint: string): string {
  return `${API_CONFIG.BASE_URL}${endpoint}`;
}

// Utilitário para fazer requisições com configuração padrão
export async function apiRequest<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const url = buildApiUrl(endpoint);
  
  const config: RequestInit = {
    headers: {
      ...API_CONFIG.DEFAULT_HEADERS,
      ...options.headers,
    },
    ...options,
  };

  const response = await fetch(url, config);
  
  if (!response.ok) {
    throw new Error(`Erro ${response.status}: ${response.statusText}`);
  }
  
  return response.json();
}
