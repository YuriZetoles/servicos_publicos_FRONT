'use client';

import Image from "next/image";
import { useAuth } from '@/hooks/useAuth';
import Link from "next/link";

export default function Home() {
  const { isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-[var(--global-accent)] border-t-transparent mx-auto"></div>
          <p className="mt-6 text-[var(--global-text-primary)] font-medium">Carregando...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Seção principal da onda */}
      <section className="relative w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#2d6c85] via-[var(--global-accent)] to-[#4a9bb8]">
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="hero-grid" width="60" height="60" patternUnits="userSpaceOnUse">
                  <circle cx="30" cy="30" r="2" fill="white"/>
                  <circle cx="0" cy="0" r="1" fill="white"/>
                  <circle cx="60" cy="0" r="1" fill="white"/>
                  <circle cx="0" cy="60" r="1" fill="white"/>
                  <circle cx="60" cy="60" r="1" fill="white"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#hero-grid)"/>
            </svg>
          </div>
          <div className="absolute top-20 right-20 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-cyan-300/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-32 left-32 w-16 h-16 border-2 border-white/20 rounded-lg rotate-12"></div>
          <div className="absolute bottom-40 right-40 w-12 h-12 border-2 border-white/20 rounded-full"></div>
        </div>

        {/* Conteúdo principal da seção hero */}
        <div className="relative z-10 pt-20 md:pt-32 pb-36 md:pb-48">
          <div className="px-6 sm:px-6 lg:px-40 grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="text-white space-y-8">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight">
                Vilhena<span className="text-cyan-200">+</span>
                <br />
                Pública
              </h1>
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
                O Vilhena+Pública foi desenvolvido para manter você conectado com a cidade de Vilhena - RO. Os moradores podem solicitar atendimentos de forma rápida e segura.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link 
                  href="/demanda"
                  className="text-center px-10 py-4 bg-white text-[var(--global-accent)] font-bold rounded-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  Comece Agora
                </Link>
                <a 
                  href="#servicos"
                  className="text-center px-10 py-4 bg-transparent text-white font-bold rounded-lg border-2 border-white hover:bg-white hover:text-[var(--global-accent)] transition-all duration-300"
                >
                  Saiba Mais
                </a>
              </div>
            </div>

            <div className="hidden md:flex items-center justify-end -mt-16">
              <div className="relative w-96 h-[400px] flex items-center justify-center">   
                <svg className="absolute w-96 h-96 opacity-35" style={{ zIndex: -1 }}>
                  <circle cx="192" cy="192" r="140" fill="none" stroke="white" strokeWidth="1" strokeDasharray="3 8" />
                  <circle cx="192" cy="192" r="100" fill="none" stroke="white" strokeWidth="0.5" />
                </svg>
                {/* Círculo principal - ícone centralizado */}
                <div className="absolute w-28 h-28 flex items-center justify-center">
                  <svg className="w-28 h-28 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/** Animação de pontos na parte inferior da onda */}
        <div className="absolute bottom-0 left-0 w-full">
          <div className="absolute bottom-8 left-0 right-0 opacity-20">
            <div className="flex justify-around px-20">
              {[...Array(12)].map((_, i) => (
                <div 
                  key={i} 
                  className="w-2 h-2 bg-white rounded-full animate-pulse-slow"
                  style={{ animationDelay: `${i * 0.2}s` }}
                ></div>
              ))}
            </div>
          </div>
          <div className="absolute bottom-16 left-10 right-10 opacity-10">
            <svg className="w-full h-8" viewBox="0 0 1000 30">
              <path d="M0 15 Q 250 5, 500 15 T 1000 15" stroke="white" strokeWidth="2" fill="none"/>
              <path d="M0 20 Q 250 10, 500 20 T 1000 20" stroke="white" strokeWidth="1.5" fill="none"/>
            </svg>
          </div>
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto relative z-10">
            <path d="M0 80L60 73.3C120 67 240 53 360 46.7C480 40 600 40 720 43.3C840 47 960 53 1080 46.7C1200 40 1320 20 1380 10L1440 0V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V80Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Seção com os 6 serviços do sistema */}
      <section id="servicos" className="pt-8 pb-16 px-6 sm:px-6 lg:px-40 bg-white relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--global-text-secondary)] mb-6">
            Nossos Serviços
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[var(--global-accent)] to-[#4a9bb8] mx-auto mb-6 rounded-full"></div>
          <p className="text-lg md:text-xl text-[var(--global-text-primary)] max-w-3xl mx-auto leading-relaxed">
            Escolha uma das categorias abaixo para reportar problemas e solicitar atendimentos na cidade de Vilhena
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {[
            {
              icon: "/homeIconeColeta.svg",
              label: "Coleta",
              href: "/demanda/coleta",
              description: "Solicite serviço de coleta de lixo e resíduos"
            },
            {
              icon: "/homeIconeIluminacao.svg",
              label: "Iluminação",
              href: "/demanda/iluminação",
              description: "Reporte problemas com postes e iluminação pública"
            },
            {
              icon: "/homeIconeDog.svg",
              label: "Animais",
              href: "/demanda/animais",
              description: "Informe sobre animais em vias públicas"
            },
            {
              icon: "/homeIconeArvores.svg",
              label: "Árvores",
              href: "/demanda/arvores",
              description: "Solicite poda e remoção de árvores"
            },
            {
              icon: "/homeIconePavimento.svg",
              label: "Pavimentação",
              href: "/demanda/pavimentação",
              description: "Reporte buracos e problemas no pavimento"
            },
            {
              icon: "/homeIconeSaneamento.svg",
              label: "Saneamento",
              href: "/demanda/saneamento",
              description: "Informe problemas de esgoto e saneamento"
            },
          ].map((service) => (
            <Link
              key={service.label}
              href={service.href}
              className="group relative bg-gradient-to-br from-blue-50/50 to-white rounded-2xl p-8 md:p-10 border border-blue-100 hover:border-[var(--global-accent)] transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="flex flex-col items-center text-center space-y-5 md:space-y-6">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-[var(--global-accent)] to-[#4a9bb8] rounded-2xl flex items-center justify-center shadow-md group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                  <Image
                    src={service.icon}
                    alt={service.label}
                    width={36}
                    height={36}
                    className="filter brightness-0 invert"
                  />
                </div>
                <div>
                  <h3 className="text-[var(--global-text-secondary)] text-lg md:text-xl font-bold mb-2 group-hover:text-[var(--global-accent)] transition-colors">
                    {service.label}
                  </h3>
                  <p className="text-sm md:text-base text-[var(--global-text-primary)]/60 hidden md:block leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-base md:text-lg text-[var(--global-text-primary)] leading-relaxed max-w-4xl mx-auto">
            É rápido e eficaz! Com apenas três passos simples, você contribui com a melhoria de Vilhena.
          </p>
        </div>
      </section>

      {/* Separador visual entre as seções de Serviços e Como Funciona */}
      <div className="relative py-6 px-6 sm:px-6 lg:px-40 bg-gradient-to-b from-white to-blue-50/20">
        <div className="flex items-center justify-center">
          <div className="relative flex items-center gap-8 max-w-3xl w-full">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[var(--global-accent)]/40 to-[var(--global-accent)]/60"></div>
            <div className="relative flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-gradient-to-br from-[var(--global-accent)] to-[#4a9bb8] shadow-lg"></div>
              <div className="w-2 h-2 rounded-full bg-[var(--global-accent)]/60"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-[var(--global-accent)]/40"></div>
            </div>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent via-[var(--global-accent)]/40 to-[var(--global-accent)]/60"></div>
          </div>
        </div>
      </div>

      {/* Seção explicando o processo em 3 passos simples */}
      <section className="pt-12 pb-20 px-6 sm:px-6 lg:px-40 bg-gradient-to-b from-blue-50/20 to-white relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--global-text-secondary)] mb-6">
            Como Funciona
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[var(--global-accent)] to-[#4a9bb8] mx-auto mb-6 rounded-full"></div>
          <p className="text-lg md:text-xl text-[var(--global-text-primary)] max-w-3xl mx-auto leading-relaxed">
            Siga estes três passos simples para reportar problemas e ajudar a melhorar nossa cidade
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {[
            {
              number: "1",
              title: "Tire uma foto",
              description: "Registre o problema com uma foto clara do local",
              icon: (
                <svg className="w-14 h-14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              ),
              bgColor: "from-[#2d6c85] to-[var(--global-accent)]"
            },
            {
              number: "2",
              title: "Descreva o problema",
              description: "Adicione detalhes sobre a localização e a situação",
              icon: (
                <svg className="w-14 h-14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              ),
              bgColor: "from-[var(--global-accent)] to-[#4a9bb8]"
            },
            {
              number: "3",
              title: "Envie a demanda",
              description: "Submeta sua solicitação e acompanhe o andamento",
              icon: (
                <svg className="w-14 h-14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              ),
              bgColor: "from-[#4a9bb8] to-[#5bb0c8]"
            },
          ].map((step, index) => (
            <div key={step.number} className="relative">
              <div className="bg-white rounded-3xl p-10 md:p-12 shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100 h-full">
                {/* Ícone representativo do passo */}
                <div className={`w-24 h-24 bg-gradient-to-br ${step.bgColor} rounded-2xl flex items-center justify-center shadow-md mb-8 mx-auto`}>
                  <div className="text-white">
                    {step.icon}
                  </div>
                </div>

                <div className="text-center space-y-4">
                  <div className="text-5xl font-bold text-[var(--global-accent)] mb-3">
                    {step.number}°
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-[var(--global-text-secondary)]">
                    {step.title}
                  </h3>
                  <p className="text-base md:text-lg text-[var(--global-text-primary)] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-md border border-blue-100">
          <p className="text-center text-[var(--global-text-primary)] text-base md:text-lg leading-relaxed">
            Sua solicitação será analisada por nossa equipe e, caso aprovada, 
            encaminhada ao setor responsável da prefeitura. Esse setor definirá 
            as ações necessárias para que sua solicitação seja resolvida. Você poderá 
            acompanhar o status em tempo real e receber atualizações sobre o andamento.
          </p>
        </div>
      </section>

      {/* Separador entre Como Funciona e Por que utilizar */}
      <div className="relative py-6 px-6 sm:px-6 lg:px-40 bg-gradient-to-b from-white to-blue-50/20">
        <div className="flex items-center justify-center">
          <div className="relative flex items-center gap-8 max-w-3xl w-full">
            {/* Linha esquerda */}
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[var(--global-accent)]/40 to-[var(--global-accent)]/60"></div>
            
            {/* Centro decorativo */}
            <div className="relative flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-gradient-to-br from-[var(--global-accent)] to-[#4a9bb8] shadow-lg"></div>
              <div className="w-2 h-2 rounded-full bg-[var(--global-accent)]/60"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-[var(--global-accent)]/40"></div>
            </div>
            
            {/* Linha direita */}
            <div className="flex-1 h-px bg-gradient-to-l from-transparent via-[var(--global-accent)]/40 to-[var(--global-accent)]/60"></div>
          </div>
        </div>
      </div>

      {/* Seção do Porque utilizar o Vilhena+Pública */}
      <section className="py-24 px-6 sm:px-6 lg:px-40 bg-gradient-to-b from-white via-blue-50/20 to-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute top-20 right-20 w-64 h-64 bg-[var(--global-accent)] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-cyan-400 rounded-full blur-3xl"></div>
        </div>
        <div className="absolute inset-0 opacity-[0.02]">
          <svg width="100%" height="100%">
            <pattern id="diagonals" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M0 40L40 0" stroke="currentColor" strokeWidth="1" className="text-[var(--global-accent)]"/>
            </pattern>
            <rect width="100%" height="100%" fill="url(#diagonals)" />
          </svg>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center relative z-10">
          <div className="lg:col-span-3 space-y-10 order-2 lg:order-1">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[var(--global-accent)]/10 to-transparent px-6 py-3 rounded-full border border-[var(--global-accent)]/20">
                <div className="w-2 h-2 bg-[var(--global-accent)] rounded-full animate-pulse"></div>
                <span className="text-sm font-bold text-[var(--global-accent)] uppercase tracking-wider">Vantagens</span>
              </div>
              
              <div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--global-text-secondary)] leading-tight mb-3">
                  Por que utilizar o
                </h2>
                <div className="flex items-center gap-4 mb-6">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[var(--global-accent)] via-[#3d8aa8] to-[#4a9bb8] bg-clip-text text-transparent">
                    Vilhena+Pública
                  </h2>
                  <div className="flex-1 h-1 bg-gradient-to-r from-[var(--global-accent)] to-transparent rounded-full max-w-[100px]"></div>
                </div>
              </div>

              <p className="text-base md:text-lg text-[var(--global-text-primary)] leading-relaxed max-w-2xl">
                Nós acreditamos que um cidadão ativo é essencial para uma cidade melhor. 
                Com o Vilhena+Pública, você tem uma maneira fácil e direta de comunicar 
                suas necessidades e ajudar a melhorar a qualidade de vida em Vilhena.
              </p>
            </div>
          

            {/* Lista com 4 vantagens de utilizar o Vilhena+Pública */}
            <div className="space-y-5">
              {[
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  ),
                  title: "Comunicação Direta com a Prefeitura",
                  description: "Conecte-se diretamente sem burocracia e com respostas rápidas"
                },
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  ),
                  title: "Acompanhamento em Tempo Real",
                  description: "Monitore o status da sua solicitação a qualquer momento"
                },
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  ),
                  title: "Seguro e Confiável",
                  description: "Plataforma oficial com seus dados protegidos e criptografados"
                },
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  ),
                  title: "Rápido e Eficiente",
                  description: "Processos otimizados para resolução ágil das demandas"
                },
              ].map((benefit, index) => (
                <div 
                  key={index} 
                  className="group relative bg-white rounded-2xl p-6 border border-blue-100 hover:border-[var(--global-accent)]/40 hover:shadow-lg transition-all duration-300"
                >
                  <div className="absolute left-0 top-6 bottom-6 w-1 bg-gradient-to-b from-[var(--global-accent)] to-[#4a9bb8] rounded-r-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="flex gap-5 items-start pl-2">
                    <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-[var(--global-accent)] to-[#4a9bb8] rounded-xl flex items-center justify-center text-white shadow-md group-hover:scale-110 group-hover:shadow-lg transition-all duration-300">
                      {benefit.icon}
                    </div>
                    <div className="flex-1 pt-1">
                      <h3 className="text-lg font-bold text-[var(--global-text-secondary)] mb-2 group-hover:text-[var(--global-accent)] transition-colors">
                        {benefit.title}
                      </h3>
                      <p className="text-sm text-[var(--global-text-primary)]/70 leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2 order-1 lg:order-2">
            <div className="relative">
              {/* Container da imagem com proporção quadrada */}
              <div className="relative aspect-[4/4] max-w-sm mx-auto lg:max-w-none">
                <div className="absolute -inset-6 bg-gradient-to-br from-[var(--global-accent)]/20 via-cyan-400/10 to-transparent rounded-3xl blur-2xl"></div>
                <div className="absolute -inset-3 bg-gradient-to-tr from-blue-400/10 via-transparent to-[#4a9bb8]/10 rounded-3xl"></div>
                
                {/* Borda gradiente ao redor da imagem */}
                <div className="absolute -inset-2 bg-gradient-to-br from-[var(--global-accent)] to-[#4a9bb8] rounded-3xl opacity-20"></div>
                
                {/* Moldura branca com a imagem dentro */}
                <div className="relative h-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white">
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--global-accent)]/5 via-transparent to-cyan-400/5 z-10"></div>
                  <Image
                    src="/homeCardPorqueUsar.png"
                    alt="Pessoa usando tablet"
                    fill
                    className="object-cover relative z-0"
                  />
                </div>

                {/* Badge com ícone de estrela */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-[var(--global-accent)] to-[#4a9bb8] rounded-2xl shadow-xl flex items-center justify-center text-white font-bold text-2xl rotate-12 hover:rotate-0 transition-transform duration-300">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-10 px-6 sm:px-6 lg:px-40 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--global-accent)]/40 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--global-accent)] via-[#3d8aa8] to-[#4a9bb8]">
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
                  <circle cx="30" cy="30" r="2" fill="white"/>
                  <circle cx="0" cy="0" r="1" fill="white"/>
                  <circle cx="60" cy="0" r="1" fill="white"/>
                  <circle cx="0" cy="60" r="1" fill="white"/>
                  <circle cx="60" cy="60" r="1" fill="white"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)"/>
            </svg>
          </div>
          
          <div className="absolute top-10 right-10 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-cyan-300/20 rounded-full blur-3xl"></div>
          <div className="absolute top-20 left-20 w-20 h-20 border-2 border-white/20 rounded-lg rotate-12"></div>
          <div className="absolute bottom-32 right-32 w-16 h-16 border-2 border-white/20 rounded-full"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center text-white space-y-8">
          <div className="inline-block px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold mb-4">
            Junte-se a nós
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Pronto para começar?
          </h2>
          
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Faça parte da transformação de Vilhena. Sua participação é fundamental 
            para construirmos juntos uma cidade melhor para todos.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Link 
              href="/cadastro"
              className="group relative px-10 py-5 bg-white text-[var(--global-accent)] font-bold text-lg rounded-lg shadow-2xl hover:shadow-3xl transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10">Criar Conta Agora</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
            <Link 
              href="/login"
              className="px-10 py-5 bg-transparent text-white font-bold text-lg rounded-lg border-2 border-white hover:bg-white hover:text-[var(--global-accent)] transition-all duration-300"
            >
              Já tenho conta
            </Link>
          </div>

          <div className="flex justify-center gap-8 pt-12 text-white/80 text-sm">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
              </svg>
              <span>100% Gratuito</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
              </svg>
              <span>Seguro</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
              </svg>
              <span>Fácil de usar</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}