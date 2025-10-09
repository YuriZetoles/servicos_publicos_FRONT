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

                <div className="space-y-2">
                    <label htmlFor="nomeSocial" className="block text-sm font-medium text-[var(--global-text-primary)]">
                        Nome social
                    </label>
                    <Input
                        id="nomeSocial"
                        type="text"
                        placeholder="Lucas Silva"
                    />
                </div>

                <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium text-[var(--global-text-primary)]">
                        E-mail
                    </label>
                    <Input
                        id="email"
                        type="email"
                        placeholder="lucas.silva@gmail.com"
                    />
                </div>

                <div className="space-y-2">
                    <label htmlFor="dataNascimento" className="block text-sm font-medium text-[var(--global-text-primary)]">
                        Data de nascimento
                    </label>
                    <Input
                        id="dataNascimento"
                        type="date"
                        placeholder="12/09/1999"
                    />
                </div>

                <div className="space-y-2">
                    <label htmlFor="cpf" className="block text-sm font-medium text-[var(--global-text-primary)]">
                        CPF
                    </label>
                    <Input
                        id="cpf"
                        type="text"
                        placeholder="999.999.999-99"
                    />
                </div>

                <div className="space-y-2">
                    <label htmlFor="celular" className="block text-sm font-medium text-[var(--global-text-primary)]">
                        Celular
                    </label>
                    <Input
                        id="celular"
                        type="tel"
                        placeholder="(69) 98125-2365"
                        required
                    />
                </div>
              </div>
            </div>
        </form>
      </div>
    </div>
  );
}
