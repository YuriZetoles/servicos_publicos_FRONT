"use client";

import { Check, X, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import { Progress } from "./ui/progress";

export interface Pedido {
  id: string;
  titulo: string;
  status: "aceito" | "recusado";
  progresso?: {
    aprovado: boolean;
    emProgresso: boolean;
    concluido: boolean;
  };
}

interface CardPedidoProps {
  pedido: Pedido;
  onVerMais?: (id: string) => void;
}

export default function CardPedido({ pedido, onVerMais }: CardPedidoProps) {
  const handleVerMais = () => {
    if (onVerMais) {
      onVerMais(pedido.id);
    }
  };

  return (
    <div className="bg-white rounded-md border border-gray-200 p-4 shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-md font-medium text-[var(--global-text-primary)]">
          {pedido.titulo}
        </h3>
        
        {pedido.status === "aceito" ? (
          <div className="inline-flex items-center gap-1 bg-green-100 text-green-800 px-2 py-1 rounded-md text-sm font-medium">
            <Check size={16} />
            Aceito
          </div>
        ) : (
          <div className="inline-flex items-center gap-1 bg-red-100 text-red-800 px-2 py-1 rounded-md text-sm font-medium">
            <X size={16} />
            Recusado
          </div>
        )}
      </div>

      <div className="flex-1 flex flex-col justify-center">
        {pedido.status === "aceito" && pedido.progresso && (
          <div className="mb-10 mt-10"> 
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
                  pedido.progresso.aprovado ? 'bg-[var(--global-accent)] text-white' : 'bg-gray-200'
                }`}>
                  <Check size={12} />
                </div>
                <span className="text-sm text-[var(--global-text-primary)]">Aprovado</span>
              </div>
              <div className="flex items-center gap-2">
                <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
                  pedido.progresso.emProgresso ? 'bg-[var(--global-accent)] text-white' : 'bg-gray-200'
                }`}>
                  <Check size={12} />
                </div>
                <span className="text-sm text-[var(--global-text-primary)]">Em progresso</span>
              </div>
              <div className="flex items-center gap-2">
                <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
                  pedido.progresso.concluido ? 'bg-[var(--global-accent)] text-white' : 'bg-gray-200'
                }`}>
                  <Check size={12} />
                </div>
                <span className="text-sm text-[var(--global-text-primary)]">Concluído</span>
              </div>
            </div>
            
            <Progress 
              value={
                pedido.progresso.concluido ? 100 :
                pedido.progresso.emProgresso ? 66 :
                pedido.progresso.aprovado ? 33 : 0
              }
              className="h-2 bg-gray-200"
              indicatorClassName="bg-[var(--global-accent)]"
            />
          </div>
        )}

        {pedido.status === "recusado" && (
          <div className="mb-10 mt-10">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full flex items-center justify-center bg-red-500 text-white">
                  <X size={12} />
                </div>
                <span className="text-sm text-[var(--global-text-primary)]">Aprovado</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full flex items-center justify-center bg-red-500 text-white">
                  <X size={12} />
                </div>
                <span className="text-sm text-[var(--global-text-primary)]">Em progresso</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full flex items-center justify-center bg-red-500 text-white">
                  <X size={12} />
                </div>
                <span className="text-sm text-[var(--global-text-primary)]">Concluído</span>
              </div>
            </div>
            
            <Progress 
              value={100}
              className="h-2 bg-gray-200"
              indicatorClassName="bg-red-500"
            />
          </div>
        )}
      </div>

      <Button className="w-full flex items-center justify-center gap-1 text-[var(--global-accent)] hover:text-[var(--global-accent-hover)] text-sm cursor-pointer" onClick={handleVerMais}>
        Ver mais
        <ChevronRight size={16} />
      </Button>
    </div>
  );
}
