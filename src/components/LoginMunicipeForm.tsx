// src/components/LoginMunicipeForm.tsx

'use client';

import { useState } from 'react';
import { Users, Lock, Eye, EyeOff } from 'lucide-react';
import { useLogin } from '@/hooks/useAuthMutations';
import { useQueryState } from 'nuqs';

export default function LoginMunicipeForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [identifier, setIdentifier] = useQueryState('identifier', { defaultValue: '' });
  const [password, setPassword] = useState('');
  
  const loginMutation = useLogin('municipe');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    loginMutation.mutate({
      email: identifier,
      senha: password,
    });
  };

  return (
    <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md" data-test="form-login-municipe">
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-2" data-test="titulo-login">Login</h2>
      <p className="text-gray-600 text-center mb-6 text-sm" data-test="subtitulo-login">Acesse como suas informações</p>

      {loginMutation.isError && (
        <div 
          className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm"
          data-test="mensagem-erro"
          role="alert"
        >
          {loginMutation.error?.message || 'Erro ao fazer login. Verifique suas credenciais.'}
        </div>
      )}

      {/* Dica de senha */}
      <div 
        className="mb-4 p-3 bg-blue-50 border border-blue-200 rounded-lg text-blue-700 text-xs"
        data-test="dica-senha"
      >
        <strong>Dica:</strong> A senha deve ter no mínimo 8 caracteres, incluindo maiúsculas, minúsculas e números.
      </div>

      <form onSubmit={handleSubmit} className="space-y-4" data-test="formulario-login">
        {/* Campo E-mail / CPF / CNPJ */}
        <div data-test="campo-identificador-wrapper">
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
              disabled={loginMutation.isPending}
              data-test="input-identificador"
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-0 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
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
        <div data-test="campo-senha-wrapper">
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
              disabled={loginMutation.isPending}
              data-test="input-senha"
              className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-0 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
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
              data-test="button-toggle-senha"
              aria-label={showPassword ? 'Ocultar senha' : 'Mostrar senha'}
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
            data-test="link-esqueceu-senha"
          >
            Esqueceu sua senha?
          </a>
        </div>

        {/* Botão de Login */}
        <button
          type="submit"
          disabled={loginMutation.isPending}
          data-test="button-acessar"
          className="w-full text-white font-semibold py-3 rounded-lg transition-all shadow-lg uppercase text-sm tracking-wide disabled:opacity-70 disabled:cursor-not-allowed"
          style={{
            backgroundColor: '#5BA5B8',
            opacity: loginMutation.isPending ? 0.7 : 1,
          }}
          onMouseEnter={(e) => {
            if (!loginMutation.isPending) {
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
          {loginMutation.isPending ? 'ENTRANDO...' : 'ACESSAR'}
        </button>
      </form>

      {/* Link de Cadastro */}
      <div className="mt-6 text-center text-sm text-gray-600" data-test="link-cadastro-wrapper">
        Não possui cadastro?{' '}
        <a 
          href="#" 
          className="text-[#5BA5B8] font-medium hover:underline transition-colors"
          data-test="link-cadastro"
        >
          Clique aqui
        </a>
      </div>
    </div>
  );
}
