import { useState, useCallback } from "react";
import { apiRequest, API_CONFIG } from "@/lib/api";

// Interface para tipoDemanda da API
export interface TipoDemanda {
  _id: string;
  titulo: string;
  descricao: string;
  subdescricao: string;
  tipo: string;
  link_imagem?: string;
  icone?: string;
  createdAt: string;
  updatedAt: string;
}

// Hook para buscar um tipo de demanda específico
export function useTipoDemanda(id?: string) {
  const [data, setData] = useState<TipoDemanda | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetch = useCallback(async (tipoDemandaId?: string) => {
    const targetId = tipoDemandaId || id;
    if (!targetId) return;

    setLoading(true);
    setError(null);
    
    try {
      const endpoint = API_CONFIG.ENDPOINTS.TIPO_DEMANDA_BY_ID(targetId);
      const result = await apiRequest<TipoDemanda>(endpoint);
      setData(result);
    } catch (err) {
      console.error("Erro ao buscar tipoDemanda:", err);
      setError(err instanceof Error ? err.message : "Erro desconhecido");
    } finally {
      setLoading(false);
    }
  }, [id]);

  const reset = useCallback(() => {
    setData(null);
    setError(null);
    setLoading(false);
  }, []);

  return {
    data,
    loading,
    error,
    fetch,
    reset,
  };
}

// Hook para buscar lista de tipos de demanda
export function useTiposDemanda() {
  const [data, setData] = useState<TipoDemanda[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetch = useCallback(async () => {
    setLoading(true);
    setError(null);
    
    try {
      const endpoint = API_CONFIG.ENDPOINTS.TIPO_DEMANDA;
      const result = await apiRequest<TipoDemanda[]>(endpoint);
      setData(result);
    } catch (err) {
      console.error("Erro ao buscar tipos de demanda:", err);
      setError(err instanceof Error ? err.message : "Erro desconhecido");
    } finally {
      setLoading(false);
    }
  }, []);

  const reset = useCallback(() => {
    setData([]);
    setError(null);
    setLoading(false);
  }, []);

  return {
    data,
    loading,
    error,
    fetch,
    reset,
  };
}
