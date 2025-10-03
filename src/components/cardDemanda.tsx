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
    <div className={`w-full h-[400px] rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 hover:scale-105 transform flex flex-col ${themeClass}`}>
      <div className="h-48 overflow-hidden flex-shrink-0 bg-gray-100 flex items-center justify-center">
        {imagem ? (
          <img
            src={imagem}
            alt={titulo}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="text-gray-400 text-center">
            <div className="text-xs">Nenhuma imagem disponível</div>
          </div>
        )}
      </div>
      <div className="p-4 flex flex-col justify-between h-[208px]">
        <div className="flex flex-col flex-1">
          <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center line-clamp-2">
            {titulo}
          </h3>
          <p className="text-gray-600 text-sm text-center mb-3 line-clamp-3 overflow-hidden flex-1">
            {descricao}
          </p>
        </div>
        <Button size="lg" colorClass="w-full font-medium py-2 px-3 bg-[var(--global-text-primary)] text-[var(--global-bg)] hover:bg-[var(--global-text-secondary)]">
          <Plus className="w-4 h-4" />
          Criar demanda
        </Button>
      </div>
    </div>
  );
}