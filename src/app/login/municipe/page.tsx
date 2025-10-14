// app/login/municipe/page.tsx
import LoginMunicipeForm from '@/components/LoginMunicipeForm';

export default function LoginMunicipePage() {
  return (
    <div className="min-h-screen flex">
      {/* Lado Esquerdo - Branding */}
      <div className="hidden lg:flex lg:w-1/2 relative items-center justify-center p-12 overflow-hidden bg-gradient-to-br from-[#5BA5B8] via-[#4A8FA0] to-[#3A7988]">
        {/* Elementos decorativos - Círculos */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3"></div>
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        
        {/* Conteúdo centralizado */}
        <div className="relative z-10 text-white">
          <h1 className="text-6xl font-bold mb-4">
            Vilhena+
            <br />
            Pública
          </h1>
          <div className="w-20 h-1 bg-white/50 mb-6"></div>
          <p className="text-xl opacity-90">
            Sistema de Gestão de Serviços Públicos
          </p>
        </div>
      </div>

      {/* Lado Direito - Form de Login */}
      <div className="flex-1 flex items-center justify-center p-6 bg-gray-50">
        <div className="w-full max-w-md">
          {/* Logo mobile */}
          <div className="lg:hidden text-center mb-8">
            <h1 className="text-4xl font-bold mb-2 text-[#5BA5B8]">
              Vilhena+Pública
            </h1>
          </div>

          <LoginMunicipeForm />
        </div>
      </div>
    </div>
  );
}
