import { Plus } from "lucide-react";

interface CardDemandaProps {
    title: string;
    description: string;
    image: string;
}

export default function CardDemanda({ title, description, image }: CardDemandaProps) {
    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 hover:scale-105 transform">
          <div className="aspect-video overflow-hidden">
            <img
              src={image}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3 text-center">
              {title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-6 text-center">
              {description}
            </p>
            <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2">
              <Plus className="w-4 h-4" />
              Criar demanda
            </button>
          </div>
        </div>
      );
}