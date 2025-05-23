import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";

export default function Photos() {
  const images = [
    "/cliente_1.webp",
    "/cliente_2.webp",
    "/cliente_3.webp",
    "/cliente_4.webp",
    "/cliente_5.jpg",
    "/cliente_6.webp",
    "/cliente_7.webp",
    "/cliente_8.jpg",
    "/cliente_9.webp",
  ];

  return (
    <section className="bg-[#f9f4f3] py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-5xl font-bold text-[#b3827d] mb-4">Fotos de Clientes</h2>
        <p className="text-lg text-gray-600 mb-12">
          Veja algumas unhas que já passaram por aqui!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
          {images.map((src, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl shadow-md hover:shadow-lg transition-transform hover:scale-105"
            >
              <Image
                src={src}
                alt={`Unhas feitas pela Ana - Foto ${index + 1}`}
                width={500}
                height={500}
                className="w-full h-[300px] object-cover"
              />
            </div>
          ))}
        </div>

        {/* Botão centralizado */}
        <a 
          target="_blank"
          href="https://wa.me/5548999572643?text=Olá, vi suas fotos no site e quero agendar um horário! 💅"
          className="inline-flex items-center gap-2 bg-[#b3827d] text-white font-semibold px-6 py-3 rounded-full hover:bg-rose-300 transition"
        >
          <FaWhatsapp size={20} />
          Agende seu horário
        </a>
      </div>
    </section>
  );
}
