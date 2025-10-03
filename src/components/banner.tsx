"use client";
import * as React from "react";
import { cn } from "@/lib/utils";

export interface BannerProps {
  titulo: string;
  descricao?: string;
  icone?: string;
  className?: string;
}

export default function Banner({ 
  titulo,
  descricao,
  icone,
  className 
}: BannerProps) {
  return (
    <div className="w-full">
      {/* Banner principal */}
      <div 
        className={cn(
          "relative w-full h-48 md:h-56 overflow-hidden",
          className
        )}
        style={{
          background: 'linear-gradient(135deg, var(--global-accent) 0%, var(--global-text-primary) 100%)',
          minHeight: 200,
        }}
      >
        {/* Círculos decorativos animados com mais visibilidade */}
        <div className="absolute inset-0">
          {/* Círculo extra grande superior direito */}
          <div 
            className="absolute -top-20 right-16 w-96 h-96 rounded-full opacity-25"
            style={{
              background: `radial-gradient(circle, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0.05) 80%, transparent 100%)`,
              animation: 'floatBig 12s ease-in-out infinite',
              filter: 'blur(0.5px)',
            }}
          />
          
          {/* Círculo grande centro-direita */}
          <div 
            className="absolute top-6 right-28 w-64 h-64 rounded-full opacity-30"
            style={{
              background: `radial-gradient(circle, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.15) 40%, rgba(255,255,255,0.03) 70%, transparent 100%)`,
              animation: 'floatMedium 8s ease-in-out infinite 2s',
              filter: 'blur(0.3px)',
            }}
          />
          
          {/* Círculo médio superior centro */}
          <div 
            className="absolute top-2 right-1/2 w-32 h-32 rounded-full opacity-35"
            style={{
              background: `radial-gradient(circle, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.2) 30%, rgba(255,255,255,0.05) 60%, transparent 100%)`,
              animation: 'floatSmall 6s ease-in-out infinite 1s',
            }}
          />
          
          {/* Círculo grande fundo centro-esquerda */}
          <div 
            className="absolute -bottom-24 left-32 w-72 h-72 rounded-full opacity-20"
            style={{
              background: `radial-gradient(circle, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.02) 80%, transparent 100%)`,
              animation: 'floatLeft 10s ease-in-out infinite 3s',
              filter: 'blur(0.4px)',
            }}
          />
          
          {/* Círculo gigante fundo direita */}
          <div 
            className="absolute -bottom-40 -right-32 w-[400px] h-[400px] rounded-full opacity-15"
            style={{
              background: `radial-gradient(circle, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.08) 60%, rgba(255,255,255,0.01) 85%, transparent 100%)`,
              animation: 'floatExtra 14s ease-in-out infinite 4s',
              filter: 'blur(0.6px)',
            }}
          />
          
          {/* Círculo pequeno superior esquerda */}
          <div 
            className="absolute top-8 left-20 w-20 h-20 rounded-full opacity-40"
            style={{
              background: `radial-gradient(circle, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0.3) 25%, rgba(255,255,255,0.1) 50%, transparent 100%)`,
              animation: 'floatSmall2 5s ease-in-out infinite 0.5s',
            }}
          />
          
          {/* Círculo médio centro superior */}
          <div 
            className="absolute -top-8 left-1/3 w-48 h-48 rounded-full opacity-18"
            style={{
              background: `radial-gradient(circle, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0.12) 45%, rgba(255,255,255,0.02) 75%, transparent 100%)`,
              animation: 'floatMedium2 9s ease-in-out infinite 1.5s',
              filter: 'blur(0.2px)',
            }}
          />
        </div>

        {/* Conteúdo do banner */}
        <div className="relative z-10 h-full flex items-center px-6 sm:px-6 lg:px-40">
          <div className="flex items-center gap-8">
            {/* Ícone circular */}
            <div className="w-20 h-20 md:w-24 md:h-24 bg-white rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
              {icone ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img 
                  src={icone} 
                  alt="Ícone do serviço"
                  className="w-12 h-12 md:w-14 md:h-14 object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
              ) : (
                <div className="w-12 h-12 md:w-14 md:h-14 bg-gray-200 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                  </svg>
                </div>
              )}
            </div>
            
            {/* Título e descrição */}
            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-normal text-white leading-tight mb-1">
                {titulo}
              </h1>
              {descricao && (
                <p className="text-sm md:text-base lg:text-lg text-white/90 leading-relaxed max-w-4xl font-light">
                  {descricao}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* CSS para animações aprimoradas */}
        <style jsx>{`
          @keyframes floatBig {
            0%, 100% { 
              transform: translateY(0px) translateX(0px) scale(1) rotate(0deg);
              opacity: 0.25;
            }
            25% { 
              transform: translateY(-20px) translateX(-25px) scale(1.08) rotate(1deg);
              opacity: 0.18;
            }
            50% { 
              transform: translateY(-35px) translateX(15px) scale(0.92) rotate(-1deg);
              opacity: 0.30;
            }
            75% { 
              transform: translateY(-12px) translateX(30px) scale(1.05) rotate(0.5deg);
              opacity: 0.22;
            }
          }
          
          @keyframes floatMedium {
            0%, 100% { 
              transform: translateY(0px) translateX(0px) scale(1) rotate(0deg);
              opacity: 0.30;
            }
            33% { 
              transform: translateY(-25px) translateX(20px) scale(1.12) rotate(-1.5deg);
              opacity: 0.24;
            }
            66% { 
              transform: translateY(-40px) translateX(-12px) scale(0.88) rotate(1deg);
              opacity: 0.35;
            }
          }
          
          @keyframes floatSmall {
            0%, 100% { 
              transform: translateY(0px) translateX(0px) scale(1) rotate(0deg);
              opacity: 0.35;
            }
            50% { 
              transform: translateY(-30px) translateX(-18px) scale(1.15) rotate(-2deg);
              opacity: 0.45;
            }
          }
          
          @keyframes floatLeft {
            0%, 100% { 
              transform: translateY(0px) translateX(0px) scale(1) rotate(0deg);
              opacity: 0.20;
            }
            40% { 
              transform: translateY(-22px) translateX(25px) scale(1.06) rotate(1.2deg);
              opacity: 0.15;
            }
            80% { 
              transform: translateY(-8px) translateX(-18px) scale(0.95) rotate(-0.8deg);
              opacity: 0.25;
            }
          }
          
          @keyframes floatExtra {
            0%, 100% { 
              transform: translateY(0px) translateX(0px) scale(1) rotate(0deg);
              opacity: 0.15;
            }
            30% { 
              transform: translateY(-15px) translateX(-35px) scale(1.04) rotate(-0.5deg);
              opacity: 0.10;
            }
            70% { 
              transform: translateY(-28px) translateX(20px) scale(0.94) rotate(0.8deg);
              opacity: 0.18;
            }
          }
          
          @keyframes floatSmall2 {
            0%, 100% { 
              transform: translateY(0px) translateX(0px) scale(1) rotate(0deg);
              opacity: 0.40;
            }
            50% { 
              transform: translateY(-20px) translateX(12px) scale(1.2) rotate(2deg);
              opacity: 0.50;
            }
          }
          
          @keyframes floatMedium2 {
            0%, 100% { 
              transform: translateY(0px) translateX(0px) scale(1) rotate(0deg);
              opacity: 0.18;
            }
            45% { 
              transform: translateY(-18px) translateX(-22px) scale(1.07) rotate(-1deg);
              opacity: 0.12;
            }
            90% { 
              transform: translateY(-32px) translateX(8px) scale(0.93) rotate(1.5deg);
              opacity: 0.22;
            }
          }
        `}</style>
      </div>
    </div>
  );
}

