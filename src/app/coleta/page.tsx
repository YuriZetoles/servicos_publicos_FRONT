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
  const [imageBlobs, setImageBlobs] = useState<{[key: string]: string}>({});

  const fetchImageAsBlob = async (cardId: string) => {
    try {
      const token = process.env.NEXT_PUBLIC_API_TOKEN;
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5011';
      
      const response = await fetch(`${apiUrl}/tipoDemanda/${cardId}/foto`, {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      
      if (response.ok) {
        const blob = await response.blob();
        const imageUrl = URL.createObjectURL(blob);
        setImageBlobs(prev => ({ ...prev, [cardId]: imageUrl }));
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
        // Busca as imagens para todos os cards
        result.data.docs.forEach((card: ColetaProps) => {
          fetchImageAsBlob(card._id);
        });
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

  return (
    <div className="flex flex-wrap gap-6 px-6 sm:px-8 lg:px-40 py-6">
      {cards.map((card, index) => (
        //TODO: Adicionar tamanho padrão dos cards
        <div key={card._id} className="flex flex-col w-full sm:w-[calc(50%-1.5rem)] lg:w-[calc(33%-1rem)]">
          <CardDemanda 
            titulo={card.titulo}
            descricao={card.descricao}
            imagem={imageBlobs[card._id] || card.link_imagem}
          />
        </div>
      ))}
    </div>
  );
}