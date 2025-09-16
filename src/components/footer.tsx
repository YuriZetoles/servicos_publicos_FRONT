import { Mail, Facebook, Instagram, Phone } from "lucide-react"
import Link from "next/link"

const footerData = {
    endereco: {
        nome: "Centro Administrativo Senador Doutor Teotônio Vilela",
        rua: "Av. Senador Teotônio Vilela, 4177 - Jardim América",
        cidade: "Vilhena - RO",
        cep: "78995-000",
    },
    contato: {
        email: "mailto:gabinete@vilhena.ro.gov.br",
        telefone: "tel:+5693919-7080",
        facebook: "https://www.facebook.com/municipiodevilhena/?locale=pt_BR",
        instagram: "https://www.instagram.com/municipiodevilhena/",
    }
}

export default function Footer() {
    return (
        <footer className="border-t border-blue-200 bg-white px-6 py-4 text-sm text-[#337695]">
            <div className="container mx-auto">
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-center">
                    <div className="md:flex-1">
                        <p>{footerData.endereco.nome}</p>
                        <p>{footerData.endereco.rua}</p>
                        <p>{footerData.endereco.cidade}, {footerData.endereco.cep}</p>
                    </div>
                    <div className="hidden md:flex md:justify-center md:px-4">
                        <div className="w-px bg-blue-200 h-16"></div>
                    </div>

                    <div className="md:flex-1 flex flex-col items-start md:items-end gap-2">
                        <span className="font-medium">Fale Conosco</span>
                        <div className="flex gap-3">
                            <a href={footerData.contato.email} target="_blank" rel="noreferrer">
                                <Mail className="h-5 w-5 hover:text-blue-400" />
                            </a>
                            <a href={footerData.contato.telefone} target="_blank" rel="noreferrer">
                                <Phone className="h-5 w-5 hover:text-blue-400" />
                            </a>
                            <a href={footerData.contato.facebook} target="_blank" rel="noreferrer">
                                <Facebook className="h-5 w-5 hover:text-blue-400" />
                            </a>
                            <a href={footerData.contato.instagram} target="_blank" rel="noreferrer">
                                <Instagram className="h-5 w-5 hover:text-blue-400" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="border-t border-blue-200 mt-3 pt-2">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
                        <p className="text-xs text-[#337695]">
                            © {new Date().getFullYear()} Vilhena+Pública. Todos os direitos reservados.
                        </p>
                        <div className="flex gap-4 text-xs">
                            <Link 
                                href="/..." 
                                className="text-[#337695] hover:text-blue-400 transition-colors"
                            >
                                Política de Privacidade
                            </Link>
                            <Link 
                                href="/..." 
                                className="text-[#337695] hover:text-blue-400 transition-colors"
                            >
                                Termos de Uso
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}