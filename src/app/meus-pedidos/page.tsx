"use client";

import { useState } from "react";
import Banner from "@/components/banner";
import { ChevronLeft, ChevronRight, ClipboardList, Filter } from "lucide-react";
import { Select, SelectItem, SelectTrigger, SelectValue, SelectContent } from "@/components/ui/select";
import CardPedido, { Pedido } from "@/components/cardPedido";

const pedidosMock: Pedido[] = [
  {
    id: "1",
    titulo: "Demanda sobre Iluminação",
    status: "aceito",
    progresso: {
      aprovado: true,
      emProgresso: true,
      concluido: false,
    },
  },
  {
    id: "2",
    titulo: "Demanda sobre Iluminação",
    status: "aceito",
    progresso: {
      aprovado: true,
      emProgresso: true,
      concluido: false,
    },
  },
  {
    id: "3",
    titulo: "Demanda sobre Iluminação",
    status: "aceito",
    progresso: {
      aprovado: true,
      emProgresso: true,
      concluido: false,
    },
  },
  {
    id: "4",
    titulo: "Demanda sobre Iluminação",
    status: "aceito",
    progresso: {
      aprovado: true,
      emProgresso: true,
      concluido: true,
    },
  },
  {
    id: "5",
    titulo: "Demanda sobre Iluminação",
    status: "recusado",
  },
  {
    id: "6",
    titulo: "Demanda sobre Iluminação",
    status: "recusado",
  },
];

export default function MeusPedidosPage() {
  const [filtroSelecionado, setFiltroSelecionado] = useState("todos");
  const [pedidos, setPedidos] = useState(pedidosMock);
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

  const pedidosFiltrados = pedidos.filter(pedido => {
    if (filtroSelecionado === "todos") {
      return true;
    }
    return pedido.status === filtroSelecionado;
  });

  return (
    <div className="min-h-screen bg-[var(--global-bg)]">
      <Banner
        icone={ClipboardList}
        titulo="Meus Pedidos"
        className="mb-6 md:mb-8"
      />

      <div className="px-6 sm:px-6 lg:px-40 py-6 md:py-8">
        <div className="mx-auto">
          <div className="mb-6">
            <div className="flex items-center gap-4">
              <Filter className="h-4 w-4 text-[var(--global-text-primary)]" />
              <span className="text-sm text-[var(--global-text-primary)]">Filtrar por:</span>
              <Select value={filtroSelecionado} onValueChange={handleFiltroChange}>
                <SelectTrigger className="w-64">
                  <SelectValue placeholder="Todos os pedidos" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="todos">Todos os pedidos</SelectItem>
                  <SelectItem value="aceito">Aceitos</SelectItem>
                  <SelectItem value="recusado">Recusados</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {pedidosFiltrados.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16 mb-8">
              {pedidosFiltrados.map((pedido) => (
                <CardPedido
                  key={pedido.id}
                  pedido={pedido}
                />
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
                ? "Você ainda não possui pedidos registrados."
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
