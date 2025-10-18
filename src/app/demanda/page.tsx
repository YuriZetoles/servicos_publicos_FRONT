// src/app/demanda/page.tsx

"use client";

import CardDemanda from "@/components/cardDemanda";
import Banner from "@/components/banner";
import Footer from "@/components/footer";
import { useState, useEffect, useCallback } from "react";
import { getAccessToken } from "@/hooks/useAuthMutations";
import { CreateDemandaDialog } from "@/components/CreateDemandaDialog";

interface DemandaProps {
  titulo: string,
  descricao: string,
  link_imagem: string,
  _id: string,
  tipo?: string,
  createdAt?: string,
  updatedAt?: string
}

const dadosFooter = {
  endereco: {
    nome: "Centro Administrativo Senador Doutor Teotônio Vilela",
    rua: "Av. Senador Teotônio Vilela, 4177 - Jardim América",
    cidade: "Vilhena - RO",
    cep: "78995-000",
  },
  contato: {
    email: "mailto:gabinete@vilhena.ro.gov.br",
    telefone: "tel:+5693919-7080",
    facebook: "https://www.facebook.com/municipiodevilhena/?locale=pt_BR",
    instagram: "https://www.instagram.com/municipiodevilhena/",
  }
}

export default function Demanda() {
  const [cards, setCards] = useState<DemandaProps[]>([]);
  const [bannerData, setBannerData] = useState<DemandaProps | null>(null);
  const [loading, setLoading] = useState(true);
  const [imageBlobs, setImageBlobs] = useState<{ [key: string]: string }>({});
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedTipo, setSelectedTipo] = useState<string>('');

  const fetchImageAsBlob = async (cardId: string) => {
    try {
      const token = getAccessToken();
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
      const token = getAccessToken();
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5011';

      const response = await fetch(`${apiUrl}/tipoDemanda`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      const result = await response.json();

      if (result.data?.docs?.length > 0) {
        // Pegar dados: primeiro tipo "Coleta" para o banner, todos os itens para cards
        const demandaItem = result.data.docs.find((item: DemandaProps) => item.tipo === 'Coleta');
        const allItems = result.data.docs; // Todos os itens vão para os cards

        if (demandaItem) {
          setBannerData(demandaItem);
          fetchImageAsBlob(demandaItem._id);
        }

        setCards(allItems);
        // Busca as imagens para todos os cards
        allItems.forEach((card: DemandaProps) => {
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
      <div className="min-h-screen flex justify-center items-center bg-gray-50" data-test="demanda-loading-container">
        <div className="text-lg text-gray-600" data-test="demanda-loading-message">Carregando...</div>
      </div>
    );
  }

  return (
    <div data-test="demanda-page">
      <Banner
        titulo={bannerData?.tipo || "Coleta"}
        descricao={bannerData?.descricao || "Serviços prestados com relação a coleta de restos de construção, entulho, lixos, vegetais e coleta de animais mortos."}
        icone={"/trash-icon.svg"}
        className="mb-4"
      />
      <div className="px-6 sm:px-6 lg:px-40 py-8" data-test="demanda-page-container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-stretch" data-test="demanda-cards-grid">
          {cards.map((card) => (
            <div key={card._id} data-test={`demanda-card-${card._id}`}>
              <CardDemanda
                titulo={card.titulo}
                descricao={card.descricao}
                imagem={imageBlobs[card._id] || card.link_imagem}
                onCreateClick={() => {
                  setSelectedTipo(card.tipo || card.titulo);
                  setIsDialogOpen(true);
                }}
              />
            </div>
          ))}
        </div>
      </div>

      <Footer endereco={dadosFooter.endereco} contato={dadosFooter.contato} />

      {/* Dialog de criação de demanda */}
      <CreateDemandaDialog
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        tipoDemanda={selectedTipo}
      />
    </div>
  );
}