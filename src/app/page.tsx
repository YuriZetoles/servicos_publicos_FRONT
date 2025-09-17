import Image from "next/image";
import Footer from "@/components/footer";

const dadosFooter = {
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


export default function Home() {
  return (
    <div>
      <Footer endereco={dadosFooter.endereco} contato={dadosFooter.contato} />
    </div>
  );
}
