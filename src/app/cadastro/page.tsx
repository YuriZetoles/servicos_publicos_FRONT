"use client";

import { useState } from "react";
import Banner from "@/components/banner";
import { User } from "lucide-react";

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
  const [formData, setFormData] = useState<FormData>({
    nomeCivil: "Lucas Silva",
    nomeSocial: "Lucas Silva",
    email: "lucas.silva@gmail.com",
    dataNascimento: "12/09/1999",
    cpf: "99999999999",
    celular: "(69) 98125-2365",
    cep: "76980-632",
    rua: "Av. Presidente Nasser",
    bairro: "Jardim das Oliveira",
    numero: "1240",
    complemento: "Av. Presidente Nasser",
    cidade: "Vilhena",
    estado: "RO",
    confirmarEmail: "lucas.silva@gmail.com",
    senha: "***********",
    confirmarSenha: "***********",
  });


  return (
    <div className="min-h-screen bg-[var(--global-bg)]">
      <Banner
        icone={User}
        titulo="Cadastro do Residente de Vilhena-RO"
        className="mb-8"
      />
    </div>
  );
}
