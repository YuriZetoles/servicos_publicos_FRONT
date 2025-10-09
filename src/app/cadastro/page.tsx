"use client";

import { useState } from "react";
import Banner from "@/components/banner";
import { User, Eye, EyeOff } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

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
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [mostrarConfirmarSenha, setMostrarConfirmarSenha] = useState(false);

  return (
    <div className="min-h-screen bg-[var(--global-bg)]">
      <Banner
        icone={User}
        titulo="Cadastro do Residente de Vilhena-RO"
        className="mb-6 md:mb-8"
      />

      <div className="px-6 sm:px-6 lg:px-40 py-6 md:py-8">
        <form className="mx-auto space-y-6 md:space-y-8 max-w-7xl">
            <div className="space-y-4 md:space-y-6">
                <h2 className="text-xl md:text-2xl font-semibold text-[var(--global-text-primary)] mb-4 md:mb-6">
                    Dados Pessoais
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
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

            <div className="space-y-4 md:space-y-6">
                <h2 className="text-xl md:text-2xl font-semibold text-[var(--global-text-primary)] mb-4 md:mb-6">
                    Endereço
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    <div className="space-y-2">
                        <label htmlFor="cep" className="block text-sm font-medium text-[var(--global-text-primary)]">
                            CEP
                        </label>
                        <Input
                            id="cep"
                            type="text"
                            placeholder="76980-632"
                            required
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="rua" className="block text-sm font-medium text-[var(--global-text-primary)]">
                            Rua
                        </label>
                        <Input
                            id="rua"
                            type="text"
                            placeholder="Av. Presidente Nasser"
                            required
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="bairro" className="block text-sm font-medium text-[var(--global-text-primary)]">
                            Bairro
                        </label>
                        <Input
                            id="bairro"
                            type="text"
                            placeholder="Jardim das Oliveira"
                            required
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="numero" className="block text-sm font-medium text-[var(--global-text-primary)]">
                            Número
                        </label>
                        <Input
                            id="numero"
                            type="text"
                            placeholder="1240"
                            required
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="complemento" className="block text-sm font-medium text-[var(--global-text-primary)]">
                            Complemento
                        </label>
                        <Input
                            id="complemento"
                            type="text"
                            placeholder="Av. Presidente Nasser"
                            required
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="cidade" className="block text-sm font-medium text-[var(--global-text-primary)]">
                            Cidade
                        </label>
                        <Input
                            id="cidade"
                            type="text"
                            placeholder="Vilhena"
                            required
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="estado" className="block text-sm font-medium text-[var(--global-text-primary)]">
                            Estado
                        </label>
                        <Input
                            id="estado"
                            type="text"
                            placeholder="RO"
                            required
                        />
                    </div>
                </div>
            </div>

            <div className="space-y-4 md:space-y-6">
                <h2 className="text-xl md:text-2xl font-semibold text-[var(--global-text-primary)] mb-4 md:mb-6">
                    Senha
                </h2>

                <div className="space-y-2">
                        <label htmlFor="confirmarEmail" className="block text-sm font-medium text-[var(--global-text-primary)]">
                            Confirmar e-mail
                        </label>
                        <Input
                            id="confirmarEmail"
                            type="email"
                            placeholder="lucas.silva@gmail.com"
                            required
                        />
                    </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    <div className="space-y-2">
                        <label htmlFor="senha" className="block text-sm font-medium text-[var(--global-text-primary)]">
                            Senha
                        </label>
                        <div className="relative">
                            <Input
                                id="senha"
                                type={mostrarSenha ? "text" : "password"}
                                placeholder="***********"
                                required
                            />
                            <button
                                type="button"
                                onClick={() => setMostrarSenha(!mostrarSenha)}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--global-text-primary)] cursor-pointer"
                            >
                                {mostrarSenha ? <EyeOff size={20} /> : <Eye size={20} />}
                            </button>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="confirmarSenha" className="block text-sm font-medium text-[var(--global-text-primary)]">
                            Confirmar senha
                        </label>
                        <div className="relative">
                            <Input
                                id="confirmarSenha"
                                type={mostrarConfirmarSenha ? "text" : "password"}
                                placeholder="***********"
                                required
                            />
                            <button
                                type="button"
                                onClick={() => setMostrarConfirmarSenha(!mostrarConfirmarSenha)}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--global-text-primary)] cursor-pointer"
                            >
                                {mostrarConfirmarSenha ? <EyeOff size={20} /> : <Eye size={20} />}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
        <div className="pt-6 pb-8 md:pt-8 md:pb-12 md:flex md:justify-center">
            <Button size="lg" colorClass="w-full md:w-auto font-medium py-2 px-8 md:px-12 bg-[var(--global-text-primary)] text-[var(--global-bg)] hover:bg-[var(--global-text-secondary)]">Cadastrar</Button>
        </div>
      </div>
    </div>
  );
}
