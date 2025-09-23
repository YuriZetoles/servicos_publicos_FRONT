import { Plus } from "lucide-react";
import { Button } from "./ui/button";

export interface CardDemandaProps {
    titulo: string;
    descricao: string;
    imagem: string;
    theme?: 'default' | 'green' | 'purple';
}

export default function CardDemanda({ titulo, descricao, imagem, theme = 'default' }: CardDemandaProps) {
  const themeClass = theme === 'green' ? 'global-theme-green' : theme === 'purple' ? 'global-theme-purple' : '';

  return (
    <div className={`w-[400px] h-[420px] rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 hover:scale-105 transform flex flex-col ${themeClass}`}>
      <div className="h-48 overflow-hidden flex-shrink-0">
        <img
          src={imagem}
          alt={titulo}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6 flex flex-col justify-between h-[240px]">
        <div className="flex flex-col">
          <h3 className="text-xl font-semibold text-gray-800 mb-3 text-center">
            {titulo}
          </h3>
          <p className="text-gray-600 text-sm text-center mb-4 line-clamp-4 overflow-hidden">
            {descricao}
          </p>
        </div>
        <Button size="lg" colorClass="w-full font-medium py-3 px-4 bg-[var(--global-text-primary)] text-[var(--global-bg)] hover:bg-[var(--global-text-secondary)]">
          <Plus className="w-4 h-4" />
          Criar demanda
        </Button>
      </div>
    </div>
  );
}