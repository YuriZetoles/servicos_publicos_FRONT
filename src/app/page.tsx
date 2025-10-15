'use client';

import Image from "next/image";
import { useAuth } from '@/hooks/useAuth';

export default function Home() {
  const { isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Carregando...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white font-sans">
      <section className="relative w-full h-[240px] md:h-[350px] bg-gradient-to-r from-cyan-200 via-blue-300 to-blue-400 overflow-hidden flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/homeBanner.png"
            alt="Imagem de fundo"
            fill
            className="object-cover opacity-50"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/40 to-blue-500/50"></div>
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full h-full px-6 sm:px-6 lg:px-40">
          <div className="flex flex-col justify-center">
            <h1 className="text-white font-bold text-5xl md:text-6xl leading-tight">
              Vilhena+
              <br />
              Pública
            </h1>
          </div>
          <p className="text-white text-lg md:text-xl max-w-3xl mt-4 md:mt-0 md:ml-8">
            O Vilhena+Pública foi desenvolvido para manter você conectado com a
            cidade de Vilhena - RO. Os moradores podem solicitar atendimentos de
            forma rápida e segura. Nosso objetivo é facilitar o acesso dos
            munícipes aos serviços públicos municipais.
          </p>
        </div>
      </section>

      <section className="py-16 px-6 sm:px-6 lg:px-40 bg-[var(--global-bg)]">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
          {[
            {
              icon: "/homeIconeColeta.svg",
              label: "Coleta",
              href: "/demanda/coleta",
            },
            {
              icon: "/homeIconeIluminacao.svg",
              label: "Iluminação",
              href: "/demanda/iluminação",
            },
            {
              icon: "/homeIconeDog.svg",
              label: "Animais",
              href: "/demanda/animais",
            },
            {
              icon: "/homeIconeArvores.svg",
              label: "Árvores",
              href: "/demanda/arvores",
            },
            {
              icon: "/homeIconePavimento.svg",
              label: "Pavimentação",
              href: "/demanda/pavimentação",
            },
            {
              icon: "/homeIconeSaneamento.svg",
              label: "Saneamento",
              href: "/demanda/saneamento",
            },
          ].map((service) => (
            <a
              key={service.label}
              href={service.href}
              className="flex flex-col items-center group cursor-pointer"
            >
              <div className="w-20 h-20 bg-[var(--global-accent)] rounded-full flex items-center justify-center mb-4 group-hover:bg-[var(--global-accent-hover)] transition-all duration-300 group-hover:scale-110 shadow-lg">
                <Image
                  src={service.icon}
                  alt={service.label}
                  width={40}
                  height={40}
                  className="filter brightness-0 invert"
                />
              </div>
              <span className="text-[var(--global-text-primary)] text-sm font-medium text-center group-hover:text-[var(--global-accent)] transition-colors">
                {service.label}
              </span>
            </a>
          ))}
        </div>
        <p className="text-center text-[var(--global-text-primary)] text-base font-medium mb-16">
          É rápido e eficaz! Com apenas esses três passos, você contribui com a
          melhoria de Vilhena.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="relative h-80 rounded-3xl overflow-hidden shadow-lg">
            <Image
              src="/homeCard1.png"
              alt="Tire uma foto"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[var(--global-text-secondary)]/80 flex flex-col items-center justify-center text-white">
              <span className="text-6xl font-bold mb-2">1°</span>
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 mb-4">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <span className="text-lg font-medium">Tire uma foto</span>
            </div>
          </div>
          <div className="relative h-80 rounded-3xl overflow-hidden shadow-lg">
            <Image
              src="/homeCard2.png"
              alt="Descreva o problema"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[var(--global-accent)]/80 flex flex-col items-center justify-center text-white">
              <span className="text-6xl font-bold mb-2">2°</span>
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 mb-4">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </div>
              <span className="text-lg font-medium">Descreva o problema</span>
            </div>
          </div>
          <div className="relative h-80 rounded-3xl overflow-hidden shadow-lg">
            <Image
              src="/homeCard3.png"
              alt="Envie a demanda"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[var(--global-text-primary)]/80 flex flex-col items-center justify-center text-white">
              <span className="text-6xl font-bold mb-2">3°</span>
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 mb-4">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </div>
              <span className="text-lg font-medium">Envie a demanda</span>
            </div>
          </div>
        </div>
        <p className="text-center text-[var(--global-text-primary)] text-base">
          Sua solicitação será analisada por uma equipe e, caso aprovada,
          repassada para o setor responsável da prefeitura. Esse setor definirá
          as ações responsáveis para que sua solicitação seja resolvida. Após o
          envio, nossa equipe se prontifica para que você obtenha sua resposta
          da maneira mais rápida e eficaz possível, sempre priorizando soluções
          que impactem positivamente a qualidade de vida na cidade de
          Vilhena-RO.
        </p>
      </section>

      {/* Separador visual */}
      <div className="py-8">
        <div className="px-6 sm:px-6 lg:px-40">
          <div className="border-t border-[var(--global-border)]/30"></div>
        </div>
      </div>

      <section className="py-16 px-6 sm:px-6 lg:px-40 bg-[var(--global-bg)]">
        <div className="flex items-center gap-16">
          <div className="flex-1">
            <h2 className="text-4xl font-bold text-[var(--global-text-secondary)] mb-6 leading-tight">
              Por que utilizar o <br />
              <span className="text-[var(--global-accent)]">
                Vilhena+Pública?
              </span>
            </h2>
            <p className="text-[var(--global-text-primary)] text-lg leading-relaxed mb-4">
              Nós acreditamos que um cidadão ativo é essencial para uma cidade
              melhor. Com o Vilhena+Pública, você tem uma maneira fácil e direta
              de comunicar suas necessidades e ajudar a melhorar a qualidade de
              vida em Vilhena.
            </p>
            <p className="text-[var(--global-text-primary)] text-lg leading-relaxed">
              O Vilhena+Pública foi desenvolvido para manter você conectado com
              a cidade de Vilhena - RO. Os moradores podem solicitar
              atendimentos de forma rápida e segura. Nosso objetivo é facilitar
              o acesso dos munícipes aos serviços públicos municipais.
            </p>
          </div>
          <div className="flex-1">
            <Image
              src="/homePorque.png"
              alt="Pessoa usando tablet"
              width={400}
              height={400}
              className="rounded-2xl shadow-2xl w-full max-w-md ml-auto"
            />
          </div>
        </div>
      </section>
    </div>
  );
}