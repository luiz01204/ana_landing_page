import Image from 'next/image';
import { FaRegCheckCircle, FaWhatsapp } from "react-icons/fa";

export default function About() {
  return (
    <section className="w-full h-full bg-[#f9f4f3] pb-12">
      <div className="px-6 py-4 grid grid-cols-1 md:grid-cols-2 gap-4 justify-around items-center">
        <div>
          <Image 
            src="/logo_ana_fundo.png"
            alt="Ana Grigio trabalhando com unhas de gel"
            width={540}
            height={540}
            className="rounded-2xl hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Texto */}
        <div className="flex flex-col items-center w-full">
          <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-md w-full">
            <h2 className="text-[#b3827d] font-semibold text-5xl">
              Sobre nós:
            </h2>

            <p className="flex gap-2 text-black mt-3 md:text-2xl items-center">
              <FaRegCheckCircle size={16} className="text-[#b3827d]" />
              + de 1.000 clientes com unhas impecáveis
            </p>

            <p className="flex gap-2 text-black mt-3 md:text-2xl items-center">
              <FaRegCheckCircle size={16} className="text-[#b3827d]" />
              5 anos de experiência com unhas de gel
            </p>

            <p className="flex gap-2 text-black mt-3 md:text-2xl items-center">
              <FaRegCheckCircle size={16} className="text-[#b3827d]" />
              Mais de 10 estilos e técnicas exclusivas
            </p>

            <p className="flex gap-2 text-black mt-3 md:text-2xl items-center">
              <FaRegCheckCircle size={16} className="text-[#b3827d]" />
              Atendimento personalizado e com qualidade
            </p>

            <div className="w-full flex justify-center md:justify-start mt-6">
              <a 
                target="_blank"
                className="bg-[#b3827d] text-white font-semibold flex gap-2 rounded-full px-6 py-3 justify-center items-center cursor-pointer hover:bg-rose-300 transition"
                href="https://wa.me/5548999572643?text=Olá vim pelo site e gostaria de mais informações..."
              >
                <FaWhatsapp size={20} />
                Faça seu orçamento
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
