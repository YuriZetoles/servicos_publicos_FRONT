"use client";
import * as React from "react";
import { cn } from "@/lib/utils";
import { useTipoDemanda } from "@/hooks/useTipoDemanda";

interface BannerProps {
  tipoDemandaId?: string;
  manualIcon?: string;
  manualLinkImagem?: string;
  manualTitulo?: string;
  backgroundImage?: string;
  className?: string;
}

export default function Banner({ 
  tipoDemandaId, 
  manualIcon, 
  manualLinkImagem, 
  manualTitulo,
  backgroundImage = "/banner.png",
  className 
}: BannerProps) {
  const { data: tipoDemanda, loading, error, fetch } = useTipoDemanda();

  React.useEffect(() => {
    if (tipoDemandaId) {
      fetch(tipoDemandaId);
    }
  }, [tipoDemandaId, fetch]);

  // Determinar quais valores usar (API ou manual)
  const iconSrc = tipoDemanda?.icone || manualIcon;
  const titulo = tipoDemanda?.titulo || manualTitulo || "Serviços Públicos";

  if (loading) {
    return (
      <div className={cn(
        "relative w-full h-48 md:h-64 bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center",
        className
      )}>
        <div className="text-white text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white mx-auto mb-2"></div>
          <p>Carregando...</p>
        </div>
      </div>
    );
  }

  if (error && !manualIcon && !manualLinkImagem) {
    return (
      <div className={cn(
        "relative w-full h-48 md:h-64 bg-gradient-to-r from-red-500 to-red-600 flex items-center justify-center",
        className
      )}>
        <div className="text-white text-center px-4">
          <p className="text-lg font-semibold mb-2">Erro ao carregar banner</p>
          <p className="text-sm opacity-90">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Banner principal */}
      <div 
        className={cn(
          "relative w-full h-64 md:h-80",
          className
        )}
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(6,49,84,0.96) 0%, rgba(8,86,136,0.82) 28%, rgba(17,124,150,0.62) 60%), url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          minHeight: 260,
        }}
      >
        
        {/* Conteúdo do banner */}
        <div className="relative z-10 h-full flex items-center px-6 md:px-12">
          <div className="flex items-center gap-6">
            {/* Ícone circular */}
            {iconSrc && (
              <div className="w-22 h-22 md:w-24 md:h-24 bg-white rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={iconSrc} 
                  alt="Ícone do serviço"
                  className="w-14 h-14 md:w-16 md:h-16 object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
              </div>
            )}
            
            {/* Título */}
            <div>
              <h1 className="text-5xl md:text-6xl font-semibold text-white leading-tight tracking-wide">
                {titulo}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

