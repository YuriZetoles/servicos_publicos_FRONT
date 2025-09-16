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
        <footer className="border-t border-blue-300 bg-white px-6 py-4 text-sm text-[#2c5f7a]">
            <div className="container mx-auto">
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-center">
                    <address className="md:flex-1 text-center md:text-left not-italic">
                        <p className="font-semibold text-base text-[#1e4d63] mb-1">{footerData.endereco.nome}</p>
                        <p className="text-[#2c5f7a]">{footerData.endereco.rua}</p>
                        <p className="text-[#2c5f7a]">{footerData.endereco.cidade}, {footerData.endereco.cep}</p>
                    </address>
                    <div className="hidden md:flex md:justify-center md:px-4">
                        <div className="w-px bg-[#337695] h-16 opacity-60"></div>
                    </div>
                    <div className="md:flex-1 flex flex-col items-center md:items-end gap-3">
                        <span className="font-semibold text-base text-[#1e4d63]">Fale Conosco</span>
                        <div className="flex gap-4">
                            <a 
                                href={footerData.contato.email} 
                                target="_blank" 
                                rel="noreferrer"
                                className="p-2 rounded-lg bg-[#337695]/10 hover:bg-[#337695] hover:text-white transition-all duration-300 text-[#2c5f7a] hover:scale-110"
                                aria-label="Enviar e-mail para o gabinete"
                                title="Enviar e-mail"
                            >
                                <Mail className="h-5 w-5" />
                            </a>
                            <a 
                                href={footerData.contato.telefone} 
                                target="_blank" 
                                rel="noreferrer"
                                className="p-2 rounded-lg bg-[#337695]/10 hover:bg-[#337695] hover:text-white transition-all duration-300 text-[#2c5f7a] hover:scale-110"
                                aria-label="Ligar para o telefone do gabinete"
                                title="Ligar"
                            >
                                <Phone className="h-5 w-5" />
                            </a>
                            <a 
                                href={footerData.contato.facebook} 
                                target="_blank" 
                                rel="noreferrer"
                                className="p-2 rounded-lg bg-[#337695]/10 hover:bg-[#1877f2] hover:text-white transition-all duration-300 text-[#2c5f7a] hover:scale-110"
                                aria-label="Acessar página oficial do Facebook"
                                title="Facebook"
                            >
                                <Facebook className="h-5 w-5" />
                            </a>
                            <a 
                                href={footerData.contato.instagram} 
                                target="_blank" 
                                rel="noreferrer"
                                className="p-2 rounded-lg bg-[#337695]/10 hover:bg-gradient-to-r hover:from-[#833ab4] hover:to-[#fd1d1d] hover:text-white transition-all duration-300 text-[#2c5f7a] hover:scale-110"
                                aria-label="Acessar perfil oficial do Instagram"
                                title="Instagram"
                            >
                                <Instagram className="h-5 w-5" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="border-t border-[#337695]/30 mt-4 pt-3">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
                        <p className="text-xs text-[#2c5f7a]/90">
                            © {new Date().getFullYear()} Vilhena+Pública. Todos os direitos reservados.
                        </p>
                        <div className="flex gap-4 text-xs">
                            <Link 
                                href="/politica-de-privacidade" 
                                className="text-[#2c5f7a] hover:text-[#1e4d63] transition-colors underline-offset-2 hover:underline"
                            >
                                Política de Privacidade
                            </Link>
                            <Link 
                                href="/termos-de-uso" 
                                className="text-[#2c5f7a] hover:text-[#1e4d63] transition-colors underline-offset-2 hover:underline"
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