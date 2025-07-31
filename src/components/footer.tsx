import { FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#f9f4f3] text-[#b3827d] py-8 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Nome ou Marca */}
        <p className="text-lg font-[Satisfy] text-center">
          Ana Grigio Nails Designer © {new Date().getFullYear()}
        </p>

        {/* Links sociais */}
        <div className="flex gap-6 text-2xl">
          <a
            href="https://www.instagram.com/anagrigionails"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-rose-400 transition-colors"
          >
            <FaInstagram />
          </a>

          <a
            href="https://wa.me/5548998481349?text=Olá, vi seu site e quero agendar um horário! 💅"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-rose-400 transition-colors"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>

      {/* Créditos do Dev */}
      <div className="mt-8 text-center text-sm text-[#b3827d]">
        Desenvolvido por{" "}
        <a
          href="https://luizmachado.dev.br"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-rose-400"
        >
          Luiz Machado
        </a>
      </div>
    </footer>
  );
}
