import { Mail, Facebook, Instagram, Phone } from "lucide-react"

const footerData = {
    endereco: {
        nome: "Centro Administrativo Senador Doutor Teotônio Vilela",
        rua: "Av. Senador Teotônio Vilela, 4177 - Jardim América",
        cidade: "Vilhena - RO",
        cep: "78995-000",
    },
    contato: {
        email: "mailto:ifro@gmail.com",
        telefone: "tel:+5568999999999",
        facebook: "https://www.facebook.com/ifroficial",
        instagram: "https://www.instagram.com/ifroficial/",
    }
}

export default function Footer() {
    return (
        <footer className="border-t border-blue-200 bg-white px-6 py-4 text-sm text-[#337695]">
            <div className="container mx-auto flex flex-col justify-between gap-4 md:flex-row md:items-center">
                <div>
                    <p>{footerData.endereco.nome}</p>
                    <p>{footerData.endereco.rua}</p>
                    <p>{footerData.endereco.cidade}, {footerData.endereco.cep}</p>
                </div>

                    <div className="flex flex-col items-start md:items-end gap-2">
                        <span className="font-medium">Fale Conosco</span>
                        <div className="flex gap-3">
                        <a href={footerData.contato.email} target="_blank" rel="noreferrer">
                            <Mail className="h-5 w-5 hover:text-blue-800" />
                        </a>
                        <a href={footerData.contato.telefone} target="_blank" rel="noreferrer">
                            <Phone className="h-5 w-5 hover:text-blue-800" />
                        </a>
                        <a href={footerData.contato.facebook} target="_blank" rel="noreferrer">
                            <Facebook className="h-5 w-5 hover:text-blue-800" />
                        </a>
                        <a href={footerData.contato.instagram} target="_blank" rel="noreferrer">
                            <Instagram className="h-5 w-5 hover:text-blue-800" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}