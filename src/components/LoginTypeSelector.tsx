// src/components/LoginTypeSelector.tsx

'use client';

import Link from 'next/link';
import { UserType } from '@/lib/auth';

interface LoginTypeSelectorProps {
  currentType: UserType;
  theme: {
    primary: string;
  };
}

export default function LoginTypeSelector({ currentType, theme }: LoginTypeSelectorProps) {
  const types: { value: UserType; label: string }[] = [
    { value: 'municipe', label: 'Munícipe' },
    { value: 'administrador', label: 'Administrador' },
    { value: 'operador', label: 'Operador' },
    { value: 'secretaria', label: 'Secretaria' },
  ];

  return (
    <div className="mb-6 flex justify-center gap-2" data-test="selector-tipo-usuario">
      {types.map((type) => (
        <Link
          key={type.value}
          href={`/login/${type.value}`}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
            currentType === type.value
              ? 'text-white shadow-lg'
              : 'text-gray-600 bg-gray-100 hover:bg-gray-200'
          }`}
          style={
            currentType === type.value
              ? { backgroundColor: theme.primary }
              : undefined
          }
          data-test={`link-tipo-${type.value}`}
          aria-current={currentType === type.value ? 'page' : undefined}
        >
          {type.label}
        </Link>
      ))}
    </div>
  );
}
