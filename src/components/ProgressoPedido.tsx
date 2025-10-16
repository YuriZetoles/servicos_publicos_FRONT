"use client";

import { Check } from "lucide-react";
import { Progress } from "./ui/progress";

interface ProgressoPedidoProps {
  progresso: {
    aprovado: boolean;
    emProgresso: boolean;
    concluido: boolean;
  };
  size?: "sm" | "md";
  variant?: "default" | "error";
}

export default function ProgressoPedido({ progresso, size = "md", variant = "default" }: ProgressoPedidoProps) {
  const getProgressValue = () => {
    if (progresso.concluido) return 100;
    if (progresso.emProgresso) return 66;
    if (progresso.aprovado) return 33;
    return 0;
  };

  const getIconSize = () => size === "sm" ? 12 : 14;
  const getCircleSize = () => size === "sm" ? "w-5 h-5" : "w-6 h-6";
  const getProgressHeight = () => size === "sm" ? "h-2" : "h-2";
  
  const getColors = () => {
    if (variant === "error") {
      return {
        active: "bg-red-500 text-white",
        inactive: "bg-red-500 text-white",
        progress: "bg-red-500"
      };
    }
    return {
      active: "bg-[var(--global-accent)] text-white",
      inactive: "bg-gray-200",
      progress: "bg-[var(--global-accent)]"
    };
  };

  const colors = getColors();

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className={`${getCircleSize()} rounded-full flex items-center justify-center ${
            progresso.aprovado ? colors.active : colors.inactive
          }`}>
            <Check size={getIconSize()} />
          </div>
          <span className="text-sm text-[var(--global-text-primary)]">Aprovado</span>
        </div>
        <div className="flex items-center gap-2">
          <div className={`${getCircleSize()} rounded-full flex items-center justify-center ${
            progresso.emProgresso ? colors.active : colors.inactive
          }`}>
            <Check size={getIconSize()} />
          </div>
          <span className="text-sm text-[var(--global-text-primary)]">Em progresso</span>
        </div>
        <div className="flex items-center gap-2">
          <div className={`${getCircleSize()} rounded-full flex items-center justify-center ${
            progresso.concluido ? colors.active : colors.inactive
          }`}>
            <Check size={getIconSize()} />
          </div>
          <span className="text-sm text-[var(--global-text-primary)]">Concluído</span>
        </div>
      </div>
      
      <Progress 
        value={getProgressValue()}
        className={`${getProgressHeight()} bg-gray-200`}
        indicatorClassName={colors.progress}
      />
    </div>
  );
}
