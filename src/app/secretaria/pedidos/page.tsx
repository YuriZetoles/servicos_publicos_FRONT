"use client";

import { useState } from "react";
import Banner from "@/components/banner";
import { ChevronLeft, ChevronRight, ClipboardList, Filter } from "lucide-react";
import { Select, SelectItem, SelectTrigger, SelectValue, SelectContent } from "@/components/ui/select";
import { Button } from "@/components/ui/button";

interface Demanda {
  id: string;
  titulo: string;
  descricao: string;
  status: "solicitação" | "sugestão" | "reclamação" | "elogio";
}

const demandasMock: Demanda[] = [
  {
    id: "1",
    titulo: "Demanda sobre Iluminação",
    descricao: "O poste da rua está apagado, essa já é a segunda vez em 5 semanas seguidas. Então, eu acho que seria interessante um jeito de diminuir isso, tenha um medo de sair.",
    status: "solicitação",
  },
  {
    id: "2",
    titulo: "Demanda sobre Iluminação",
    descricao: "O poste da rua está apagado, essa já é a segunda vez em 5 semanas seguidas.",
    status: "reclamação",
  },
  {
    id: "3",
    titulo: "Demanda sobre Iluminação",
    descricao: "O poste da rua está apagado, essa já é a segunda vez em 5 semanas seguidas.",
    status: "sugestão",
  },
  {
    id: "4",
    titulo: "Demanda sobre Iluminação",
    descricao: "O poste da rua está apagado, essa já é a segunda vez em 5 semanas seguidas.",
    status: "solicitação",
  },
  {
    id: "5",
    titulo: "Demanda sobre Iluminação",
    descricao: "O poste da rua está apagado, essa já é a segunda vez em 5 semanas seguidas.",
    status: "elogio",
  },
  {
    id: "6",
    titulo: "Demanda sobre Iluminação",
    descricao: "O poste da rua está apagado, essa já é a segunda vez em 5 semanas seguidas.",
    status: "solicitação",
  },
];

export default function PedidosSecretariaPage() {
  const [filtroSelecionado, setFiltroSelecionado] = useState("todos");
  const [demandas, setDemandas] = useState(demandasMock);
  const [paginaAtual, setPaginaAtual] = useState(1);

  const handleFiltroChange = (value: string) => {
    setFiltroSelecionado(value);
    setPaginaAtual(1); 
  };

  const handlePaginaAnterior = () => {
    setPaginaAtual(paginaAtual - 1);
  };

  const handleProximaPagina = () => {
    setPaginaAtual(paginaAtual + 1);
  };

  const handleAnalisarDemanda = (id: string) => {
    // Navegar para página de análise ou abrir modal
    console.log("Analisar demanda:", id);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "solicitação":
        return "bg-purple-100 text-purple-800";
      case "sugestão":
        return "bg-blue-100 text-blue-800";
      case "reclamação":
        return "bg-red-100 text-red-800";
      case "elogio":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const demandasFiltradas = demandas.filter(demanda => {
    if (filtroSelecionado === "todos") {
      return true;
    }
    return demanda.status === filtroSelecionado;
  });

  return (
    <div className="min-h-screen bg-[var(--global-bg)]">
      <Banner
        icone={ClipboardList}
        titulo="Pedidos recebidos"
        className="mb-6 md:mb-8"
      />

      <div className="px-6 sm:px-6 lg:px-40 py-6 md:py-8">
        <div className="mx-auto">
          <div className="mb-6">


            <div className="flex items-center gap-4">
              <Filter className="h-4 w-4 text-gray-400" />
              <span className="text-sm text-gray-700">Filtrar por:</span>
              <Select value={filtroSelecionado} onValueChange={handleFiltroChange}>
                <SelectTrigger className="w-64">
                  <SelectValue placeholder="Todos os pedidos" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="todos">Todos os pedidos</SelectItem>
                  <SelectItem value="solicitação">Solicitações</SelectItem>
                  <SelectItem value="sugestão">Sugestões</SelectItem>
                  <SelectItem value="reclamação">Reclamações</SelectItem>
                  <SelectItem value="elogio">Elogios</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {demandasFiltradas.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16 mb-8">
              {demandasFiltradas.map((demanda) => (
                <div 
                  key={demanda.id}
                  className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-semibold text-gray-700 flex-1">
                      {demanda.titulo}
                    </h3>
                    <span className={`ml-2 px-3 py-1 rounded-full text-xs font-medium capitalize whitespace-nowrap ${getStatusColor(demanda.status)}`}>
                      {demanda.status}
                    </span>
                  </div>
                  
                  <p className="text-sm text-gray-900/80 mb-6 flex-1 line-clamp-3">
                    {demanda.descricao}
                  </p>
                  
                  <Button 
                    onClick={() => handleAnalisarDemanda(demanda.id)}
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white"
                  >
                    Analisar Demanda
                  </Button>
                </div>
              ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center mt-16 mb-8 py-12">
            <ClipboardList className="h-16 w-16 text-gray-400 mb-4" />
            <h3 className="text-lg font-medium text-[var(--global-text-primary)] mb-2">
              Nenhum pedido encontrado
            </h3>
            <p className="text-sm text-gray-500 text-center">
              {filtroSelecionado === "todos" 
                ? "Não há pedidos registrados no momento."
                : `Não há pedidos com status "${filtroSelecionado}".`
              }
            </p>
          </div>
        )}

        <div className="flex items-center justify-center gap-4">
            <button
              onClick={handlePaginaAnterior}
              disabled={paginaAtual === 1}
              className="cursor-pointer flex items-center justify-center w-8 h-8 rounded-full border border-gray-300 text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
            
            <div className="flex items-center gap-2 text-sm text-[var(--global-text-primary)]">
              <span>Página atual: {paginaAtual}</span>
            </div>
            
            <button
              onClick={handleProximaPagina}
              className="cursor-pointer flex items-center justify-center w-8 h-8 rounded-full border border-gray-300 text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </div>

      </div>
    </div>
  );
}
