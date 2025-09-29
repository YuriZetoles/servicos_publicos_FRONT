"use client";
import * as React from "react";
import { cn } from "@/lib/utils";

export interface BannerProps {
  titulo: string;
  icone?: string;
  backgroundImage?: string;
  className?: string;
}

export default function Banner({ 
  titulo,
  icone,
  backgroundImage = "/banner.png",
  className 
}: BannerProps) {
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
        <div className="relative z-10 h-full flex items-center px-6 sm:px-6 lg:px-40">
          <div className="flex items-center gap-6">
            {/* Ícone circular */}
            {icone && (
              <div className="w-22 h-22 md:w-24 md:h-24 bg-white rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={icone} 
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

