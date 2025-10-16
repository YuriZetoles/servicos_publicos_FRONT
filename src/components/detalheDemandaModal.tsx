"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Pedido } from "./cardPedido";
import ProgressoPedido from "./ProgressoPedido";
import Image from "next/image";

interface DetalhesDemandaModalProps {
  pedido: Pedido | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function DetalhesDemandaModal({ 
  pedido, 
  isOpen, 
  onClose 
}: DetalhesDemandaModalProps) {

  if (!pedido) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-center text-xl font-semibold bg-[var(--global-accent)] text-white py-3 px-6 rounded-md">
            {pedido.titulo}
          </DialogTitle>
        </DialogHeader>

        <div className="my-4">
          {pedido.status === "aceito" && pedido.progresso && (
            <ProgressoPedido progresso={pedido.progresso} />
          )}
        </div>

        {pedido.descricao && (
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-[var(--global-text-primary)]">
                Descrição da demanda
              </h3>
              <div className="bg-[var(--global-bg-select)] p-4 rounded-md">
                <p>{pedido.descricao}</p>
              </div>
            </div>
        )}

        {pedido.imagem && (
            <div className="space-y-2">
              <h3 className="text-lg font-medium text-[var(--global-text-primary)]">
                Imagem da demanda
              </h3>
              <div className="relative w-full h-60 rounded-md overflow-hidden ">
                <Image
                  src={pedido.imagem}
                  alt="Imagem da demanda"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
        )}
      </DialogContent>
    </Dialog>
  );
}


