// components/LoginForm.tsx
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Eye, EyeOff, Lock, Mail, User as UserIcon } from 'lucide-react';
import { login, saveTokens, type UserType } from '@/lib/auth';

interface LoginFormProps {
  userType: UserType;
  theme: {
    primary: string;
    primaryHover: string;
    gradientFrom: string;
    gradientTo: string;
  };
}

export default function LoginForm({ userType, theme }: LoginFormProps) {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [password, setPassword] = useState('');
  const [loginType, setLoginType] = useState<'email' | 'cpf' | 'usuario'>('email');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      // A API espera email e senha
      const credentials = {
        email: loginType === 'email' ? email : loginType === 'cpf' ? cpf : email,
        senha: password,
      };

      const response = await login(credentials);
      
      // Salvar tokens
      saveTokens(response.access_token, response.refresh_token);
      
      // Redirecionar para a página inicial
      router.push('/');
      
    } catch (err) {
      const error = err as Error;
      setError(error.message || 'Erro ao fazer login. Verifique suas credenciais.');
    } finally {
      setIsLoading(false);
    }
  };

  const getUserTypeLabel = () => {
    if (userType === 'administrador') return 'Administrador';
    if (userType === 'operador') return 'Operador';
    return 'Secretaria';
  };

  return (
    <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-2">Login</h2>
      <p className="text-gray-600 text-center mb-6 text-sm">Acesse como {getUserTypeLabel()}</p>

      {/* Abas de tipo de login */}
      <div className="flex gap-1 mb-6 bg-gray-100 rounded-lg p-1">
        <button
          type="button"
          onClick={() => setLoginType('email')}
          className={`flex-1 py-2.5 text-sm font-medium rounded-md transition-all ${
            loginType === 'email'
              ? 'bg-white text-gray-900 shadow-sm'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          E-mail
        </button>
        <button
          type="button"
          onClick={() => setLoginType('cpf')}
          className={`flex-1 py-2.5 text-sm font-medium rounded-md transition-all ${
            loginType === 'cpf'
              ? 'bg-white text-gray-900 shadow-sm'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          CPF
        </button>
        <button
          type="button"
          onClick={() => setLoginType('usuario')}
          className={`flex-1 py-2.5 text-sm font-medium rounded-md transition-all ${
            loginType === 'usuario'
              ? 'bg-white text-gray-900 shadow-sm'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          Usuário
        </button>
      </div>

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
        {/* Campo de Email/CPF/Usuário */}
        <div>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              {loginType === 'email' ? (
                <Mail className="h-5 w-5 text-gray-400" />
              ) : loginType === 'cpf' ? (
                <UserIcon className="h-5 w-5 text-gray-400" />
              ) : (
                <UserIcon className="h-5 w-5 text-gray-400" />
              )}
            </div>
            <input
              type={loginType === 'email' ? 'email' : 'text'}
              value={loginType === 'cpf' ? cpf : email}
              onChange={(e) => {
                if (loginType === 'cpf') {
                  setCpf(e.target.value);
                } else {
                  setEmail(e.target.value);
                }
              }}
              placeholder={
                loginType === 'email'
                  ? 'E-mail / CPF'
                  : loginType === 'cpf'
                  ? 'CPF'
                  : 'Usuário'
              }
              required
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-0 transition-all"
              style={{ 
                focusRingColor: theme.primary,
                borderColor: '#e5e7eb'
              } as React.CSSProperties}
              onFocus={(e) => {
                e.target.style.borderColor = theme.primary;
                e.target.style.boxShadow = `0 0 0 3px ${theme.primary}20`;
              }}
              onBlur={(e) => {
                e.target.style.borderColor = '#e5e7eb';
                e.target.style.boxShadow = 'none';
              }}
            />
          </div>
        </div>

        {/* Campo de Senha */}
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
                focusRingColor: theme.primary,
                borderColor: '#e5e7eb'
              } as React.CSSProperties}
              onFocus={(e) => {
                e.target.style.borderColor = theme.primary;
                e.target.style.boxShadow = `0 0 0 3px ${theme.primary}20`;
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
            className="text-sm hover:underline transition-colors"
            style={{ color: theme.primary }}
          >
            Esqueceu sua senha?
          </a>
        </div>

        {/* Botão de Login */}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full text-white font-semibold py-3 rounded-lg transition-all shadow-lg uppercase text-sm tracking-wide"
          style={{
            backgroundColor: theme.primary,
            opacity: isLoading ? 0.7 : 1,
          }}
          onMouseEnter={(e) => {
            if (!isLoading) {
              e.currentTarget.style.backgroundColor = theme.primaryHover;
              e.currentTarget.style.transform = 'translateY(-1px)';
              e.currentTarget.style.boxShadow = '0 10px 25px -5px rgba(0, 0, 0, 0.3)';
            }
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = theme.primary;
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)';
          }}
        >
          {isLoading ? 'Entrando...' : 'ACESSAR'}
        </button>
      </form>

      {/* Link de Cadastro */}
      <div className="mt-6 text-center text-sm text-gray-600">
        Não possui cadastro?{' '}
        <a href="#" className="font-medium hover:underline transition-colors" style={{ color: theme.primary }}>
          Clique aqui
        </a>
      </div>
    </div>
  );
}
