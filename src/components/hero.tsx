import { FaWhatsapp } from "react-icons/fa";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black flex items-center justify-center px-6">
      <section className="flex flex-col md:flex-row w-full max-w-7xl py-20">

        {/* Coluna do texto */}
        <div className="flex-1 flex flex-col justify-center items-center md:items-start text-center md:text-left space-y-6 pr-4">
          <h1 className="text-5xl text-[#b3827d]">
            ANA GRIGIO NAILS
          </h1>
          <p className="text-xl font-light">
            Dedicação a beleza e ao cuidado das unhas, sempre com carinho, profissionalismo e atenção aos detalhes. 
          </p>
          <a
            href="https://wa.me/seunumeroaqui"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#b3827d] text-white font-semibold px-6 py-3 rounded-full hover:bg-rose-300 transition"
          >
            <FaWhatsapp size={20} />
            Agende um horário
          </a>
        </div>

        {/* Coluna da imagem */}
        <div className="flex-1 h-[500px] md:h-auto hidden md:flex">
          <Image
            src="/menina.jpg"
            alt="Nails Designer Ana Grigio"
            width={600}
            height={800}
            className="w-full h-full object-cover rounded-xl mt-4 md:mt-0"
            priority
          />
        </div>
      </section>
    </main>
  );
}
