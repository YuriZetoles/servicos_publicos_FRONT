// app/login/[tipo]/page.tsx
import { redirect } from 'next/navigation';
import LoginForm from '@/components/LoginForm';
import LoginTypeSelector from '@/components/LoginTypeSelector';
import type { UserType } from '@/lib/auth';

interface LoginPageProps {
  params: Promise<{
    tipo: UserType;
  }>;
}

const themes = {
  administrador: {
    primary: '#2C5F7F',
    primaryHover: '#234a63',
    gradientFrom: '#2C5F7F',
    gradientTo: '#1a3a4d',
    bgPattern: 'linear-gradient(135deg, #2C5F7F 0%, #1a3a4d 100%)',
  },
  operador: {
    primary: '#4CAF93',
    primaryHover: '#3d9178',
    gradientFrom: '#7FD8BE',
    gradientTo: '#4CAF93',
    bgPattern: 'linear-gradient(135deg, #7FD8BE 0%, #4CAF93 100%)',
  },
  secretaria: {
    primary: '#8B5BA8',
    primaryHover: '#6f4987',
    gradientFrom: '#A77BC0',
    gradientTo: '#6B4080',
    bgPattern: 'linear-gradient(135deg, #A77BC0 0%, #6B4080 100%)',
  },
};

export default async function LoginPage({ params }: LoginPageProps) {
  const { tipo } = await params;
  
  // Se for munícipe, redireciona para a página específica
  if (tipo === 'municipe') {
    redirect('/login/municipe');
  }
  
  // Validar tipo
  if (!['administrador', 'operador', 'secretaria'].includes(tipo)) {
    redirect('/login/municipe');
  }

  const theme = themes[tipo];

  return (
    <div className="min-h-screen flex">
      {/* Lado Esquerdo - Branding */}
      <div
        className="hidden lg:flex lg:w-1/2 relative items-center justify-center p-12 overflow-hidden"
        style={{
          background: theme.bgPattern,
        }}
      >
        {/* Elementos decorativos */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3"></div>
        
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
            <h1 className="text-4xl font-bold mb-2" style={{ color: theme.primary }}>
              Vilhena+Pública
            </h1>
          </div>

          {/* Seletor de Tipo de Login */}
          <LoginTypeSelector currentType={tipo} theme={theme} />

          <LoginForm userType={tipo} theme={theme} />
        </div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return [
    { tipo: 'municipe' },
    { tipo: 'administrador' },
    { tipo: 'operador' },
    { tipo: 'secretaria' },
  ];
}
