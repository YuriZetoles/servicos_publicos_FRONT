"use client";

import { useState } from "react";
import Banner from "@/components/banner";
import { User } from "lucide-react";
import { Input } from "@/components/ui/input";

interface FormData {
  nomeCivil: string;
  nomeSocial: string;
  email: string;
  dataNascimento: string;
  cpf: string;
  celular: string;
  
  cep: string;
  rua: string;
  bairro: string;
  numero: string;
  complemento: string;
  cidade: string;
  estado: string;
  
  confirmarEmail: string;
  senha: string;
  confirmarSenha: string;
}

export default function CadastroPage() {
  return (
    <div className="min-h-screen bg-[var(--global-bg)]">
      <Banner
        icone={User}
        titulo="Cadastro do Residente de Vilhena-RO"
        className="mb-8"
      />

      <div className="px-6 sm:px-6 lg:px-40 py-8">
        <form className="mx-auto space-y-8">
            <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-[var(--global-text-primary)] mb-6">
                    Dados Pessoais
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label htmlFor="nomeCivil" className="block text-sm font-medium text-[var(--global-text-primary)]">
                        Nome civil completo
                    </label>
                    <Input
                        id="nomeCivil"
                        type="text"
                        placeholder="Lucas Silva"
                    />
                </div>
              </div>
            </div>
        </form>
      </div>
    </div>
  );
}
