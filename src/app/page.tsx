'use client';

import { useAuth } from '@/hooks/useAuth';

export default function Home() {
  const { isAuthenticated, logout, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Carregando...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">Vilhena+ Pública</h1>
          {isAuthenticated && (
            <button
              onClick={logout}
              className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
            >
              Sair
            </button>
          )}
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Bem-vindo ao Sistema de Serviços Públicos
          </h2>
          <p className="text-gray-600 mb-6">
            Você está autenticado e pode acessar todas as funcionalidades do sistema.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Demandas</h3>
              <p className="text-gray-600 mb-4">Gerencie as demandas do município</p>
              <a href="/demanda" className="text-blue-600 hover:underline">
                Acessar →
              </a>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Usuários</h3>
              <p className="text-gray-600 mb-4">Administre os usuários do sistema</p>
              <a href="#" className="text-blue-600 hover:underline">
                Acessar →
              </a>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Relatórios</h3>
              <p className="text-gray-600 mb-4">Visualize relatórios e estatísticas</p>
              <a href="#" className="text-blue-600 hover:underline">
                Acessar →
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
