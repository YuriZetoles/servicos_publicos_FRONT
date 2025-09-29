"use client";

import CardDemanda from "@/components/cardDemanda";
import Banner from "@/components/banner";
import { useState, useEffect, useCallback } from "react";

interface ColetaProps {
  titulo: string,
  descricao: string,
  link_imagem: string,
  _id: string,
  tipo?: string,
  createdAt?: string,
  updatedAt?: string
}

export default function Coleta() {
  const [cards, setCards] = useState<ColetaProps[]>([]);
  const [bannerData, setBannerData] = useState<ColetaProps | null>(null);
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

  const fetchData = useCallback(async () => {
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
        // Separar dados: primeiro tipo "Coleta" para o banner, todos os itens para cards
        const coletaItem = result.data.docs.find((item: ColetaProps) => item.tipo === 'Coleta');
        const allItems = result.data.docs; // Todos os itens vão para os cards
        
        if (coletaItem) {
          setBannerData(coletaItem);
          fetchImageAsBlob(coletaItem._id);
        }
        
        setCards(allItems);
        // Busca as imagens para todos os cards
        allItems.forEach((card: ColetaProps) => {
          fetchImageAsBlob(card._id);
        });
      }
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-gray-50">
        <div className="text-lg text-gray-600">Carregando...</div>
      </div>
    );
  }

  return (
    <div>
      <Banner
        titulo={bannerData?.tipo || "Coleta"}
        icone={imageBlobs[bannerData?._id || ''] || "/trash-icon.svg"}
        backgroundImage="/banner.png"
        className="mb-8"
      />
      
      <div className="flex flex-wrap gap-12 justify-center px-6 py-6 max-w-[1400px] mx-auto">
        {cards.length === 0 && !loading && (
          <div className="text-center py-8">
            <p className="text-gray-500">Nenhum card encontrado</p>
          </div>
        )}
        {cards.map((card) => (
          <CardDemanda 
            key={card._id}
            titulo={card.titulo}
            descricao={card.descricao}
            imagem={imageBlobs[card._id] || card.link_imagem}
          />
        ))}
      </div>
    </div>
  );
}