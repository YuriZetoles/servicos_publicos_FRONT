// components/LoginMunicipeForm.tsx
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Users, Lock, Eye, EyeOff } from 'lucide-react';
import { login, saveTokens } from '@/lib/auth';

export default function LoginMunicipeForm() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      // A API espera email e senha
      const credentials = {
        email: identifier, // Pode ser email, CPF ou CNPJ
        senha: password,
      };

      const response = await login(credentials);
      
      // Salvar tokens
      saveTokens(response.access_token, response.refresh_token);
      
      // Redirecionar para a página de demanda
      router.push('/demanda');
      
    } catch (err) {
      const error = err as Error;
      setError(error.message || 'Erro ao fazer login. Verifique suas credenciais.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-2">Login</h2>
      <p className="text-gray-600 text-center mb-6 text-sm">Acesse como suas informações</p>

      {error && (
        <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
          {error}
        </div>
      )}

      {/* Dica de senha */}
      <div className="mb-4 p-3 bg-blue-50 border border-blue-200 rounded-lg text-blue-700 text-xs">
        <strong>Dica:</strong> A senha deve ter no mínimo 8 caracteres, incluindo maiúsculas, minúsculas e números.
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Campo E-mail / CPF / CNPJ */}
        <div>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Users className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
              placeholder="E-mail / CPF ou CNPJ"
              required
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-0 transition-all"
              style={{ 
                focusRingColor: '#5BA5B8',
                borderColor: '#e5e7eb'
              } as React.CSSProperties}
              onFocus={(e) => {
                e.target.style.borderColor = '#5BA5B8';
                e.target.style.boxShadow = '0 0 0 3px rgba(91, 165, 184, 0.1)';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = '#e5e7eb';
                e.target.style.boxShadow = 'none';
              }}
            />
          </div>
        </div>

        {/* Campo Senha */}
        <div>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Lock className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Senha"
              required
              className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-0 transition-all"
              style={{ 
                focusRingColor: '#5BA5B8',
                borderColor: '#e5e7eb'
              } as React.CSSProperties}
              onFocus={(e) => {
                e.target.style.borderColor = '#5BA5B8';
                e.target.style.boxShadow = '0 0 0 3px rgba(91, 165, 184, 0.1)';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = '#e5e7eb';
                e.target.style.boxShadow = 'none';
              }}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 pr-3 flex items-center"
            >
              {showPassword ? (
                <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
              ) : (
                <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
              )}
            </button>
          </div>
        </div>

        {/* Link Esqueceu a senha */}
        <div className="flex justify-end">
          <a
            href="#"
            className="text-sm text-[#5BA5B8] hover:underline transition-colors"
          >
            Esqueceu sua senha?
          </a>
        </div>

        {/* Botão de Login */}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full text-white font-semibold py-3 rounded-lg transition-all shadow-lg uppercase text-sm tracking-wide disabled:opacity-70 disabled:cursor-not-allowed"
          style={{
            backgroundColor: '#5BA5B8',
            opacity: isLoading ? 0.7 : 1,
          }}
          onMouseEnter={(e) => {
            if (!isLoading) {
              e.currentTarget.style.backgroundColor = '#4A8FA0';
              e.currentTarget.style.transform = 'translateY(-1px)';
              e.currentTarget.style.boxShadow = '0 10px 25px -5px rgba(0, 0, 0, 0.3)';
            }
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#5BA5B8';
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)';
          }}
        >
          {isLoading ? 'ENTRANDO...' : 'ACESSAR'}
        </button>
      </form>

      {/* Link de Cadastro */}
      <div className="mt-6 text-center text-sm text-gray-600">
        Não possui cadastro?{' '}
        <a href="#" className="text-[#5BA5B8] font-medium hover:underline transition-colors">
          Clique aqui
        </a>
      </div>
    </div>
  );
}
