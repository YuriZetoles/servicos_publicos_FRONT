"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Pedido } from "./cardPedido";
import ProgressoPedido from "./ProgressoPedido";

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
          <div className="flex items-center gap-4 mb-4">
          </div>
          <DialogTitle className="text-center text-xl font-semibold bg-[var(--global-accent)] text-white py-3 px-6 rounded-md">
            {pedido.titulo}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {pedido.status === "aceito" && pedido.progresso && (
            <ProgressoPedido progresso={pedido.progresso} />
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}


