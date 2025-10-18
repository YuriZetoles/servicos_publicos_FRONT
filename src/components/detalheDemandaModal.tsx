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
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-hidden p-0 bg-white border-none [&>button]:text-white [&>button]:hover:text-gray-200">
        <DialogHeader className="bg-[var(--global-accent)] py-4 px-6 rounded-t-lg">
          <DialogTitle className="text-center text-xl font-semibold bg-[var(--global-accent)] text-white py-3 px-6 rounded-md text-white">
            {pedido.titulo}
          </DialogTitle>
        </DialogHeader>

        <div className="flex-1 overflow-y-auto space-y-6 p-6">
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
                {Array.isArray(pedido.imagem) ? 'Imagens da demanda' : 'Imagem da demanda'}
              </h3>
              {Array.isArray(pedido.imagem) ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {pedido.imagem.map((img, index) => (
                    <div key={index} className="relative w-full h-60 rounded-md overflow-hidden">
                      <Image
                        src={img}
                        alt={`Imagem da demanda ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="relative w-full h-60 rounded-md overflow-hidden">
                  <Image
                    src={pedido.imagem}
                    alt="Imagem da demanda"
                    fill
                    className="object-cover"
                  />
                </div>
              )}
            </div>
          )}

        {pedido.endereco && (
            <div className="space-y-2">
              <h3 className="text-lg font-medium text-[var(--global-text-primary)]">
                Endereço do ocorrido
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-sm text-gray-600">Bairro</label>
                  <div className="p-2 rounded-md bg-[var(--global-bg-select)] text-sm">
                    {pedido.endereco.bairro}
                  </div>
                </div>
                <div className="space-y-1">
                  <label className="text-sm text-gray-600">Tipo de logradouro</label>
                  <div className="p-2 rounded-md bg-[var(--global-bg-select)] text-sm">
                    {pedido.endereco.tipoLogradouro}
                  </div>
                </div>
                <div className="space-y-1">
                  <label className="text-sm text-gray-600">Logradouro</label>
                  <div className="p-2 rounded-md bg-[var(--global-bg-select)] text-sm">
                    {pedido.endereco.logradouro}
                  </div>
                </div>
                <div className="space-y-1">
                  <label className="text-sm text-gray-600">Número</label>
                  <div className="p-2 rounded-md bg-[var(--global-bg-select)] text-sm">
                    {pedido.endereco.numero}
                  </div>
                </div>
              </div>
            </div>
          )}
          </div>
      </DialogContent>
    </Dialog>
  );
}


