"use client";

import CardDemanda from "@/components/cardDemanda";
import { useState, useEffect } from "react";

interface ColetaProps {
  titulo: string,
  descricao: string,
  link_imagem: string,
  _id: string,
  createdAt?: string,
  updatedAt?: string
}

export default function Coleta() {
  const [cards, setCards] = useState<ColetaProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [imageBlob, setImageBlob] = useState<string>('');

  // Função para encontrar o último card cadastrado
  const getLatestCard = (cards: ColetaProps[]) => {
    if (cards.length === 0) return null;
    
    if (cards[0]?.createdAt) {
      return cards.sort((a, b) => 
        new Date(b.createdAt!).getTime() - new Date(a.createdAt!).getTime()
      )[0];
    }
    
    return cards[cards.length - 1];
  };

  const fetchImageAsBlob = async (cardId: string) => {
    try {
      const token = process.env.NEXT_PUBLIC_API_TOKEN;
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5011';
      
      const response = await fetch(`${apiUrl}/tipoDemanda/${cardId}/foto`, {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      
      if (response.ok) {
        const blob = await response.blob();
        setImageBlob(URL.createObjectURL(blob));
      }
    } catch (error) {
      console.error('Erro ao buscar imagem:', error);
    }
  };

  const fetchData = async () => {
    try {
      const token = process.env.NEXT_PUBLIC_API_TOKEN;
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5011';
      
      const response = await fetch(`${apiUrl}/tipoDemanda`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
      
      const result = await response.json();
      
      if (result.data?.docs?.length > 0) {
        setCards(result.data.docs);
        const lastCard = getLatestCard(result.data.docs);
        if (lastCard) fetchImageAsBlob(lastCard._id);
      }
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-gray-50">
        <div className="text-lg text-gray-600">Carregando...</div>
      </div>
    );
  }

  const lastCard = getLatestCard(cards);
  if (!lastCard) return null;

  const imageUrl = imageBlob || lastCard.link_imagem;

  return (
    <div className="min-h-screen flex justify-center items-center p-2 bg-gray-50">
      <div className="w-full max-w-md">
        <CardDemanda 
          titulo={lastCard.titulo}
          descricao={lastCard.descricao}
          imagem={imageUrl}
        />
      </div>
    </div>
  );
}