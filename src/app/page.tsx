import Banner from "@/components/banner";
import Coleta from "./coleta/page";

export default function Home() {
  return (
    <div>
      {/* Banner principal para Coleta */}
      <Banner
        tipoDemandaId="exemplo-coleta-id"
        manualIcon="/trash-icon.svg"
        manualTitulo="Coleta"
        backgroundImage="/banner.png"
        className="mb-8"
      />

      {/* Exemplo comentado para outros serviços */}
      {/* 
      <Banner 
        tipoDemandaId="outro-servico-id"
        manualIcon="/outro-icon.svg"
        manualTitulo="Outro Serviço"
        backgroundImage="/banner.png"
        className="mb-8"
      />
      */}
      <Coleta />
    </div>
  );
}
