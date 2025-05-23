import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";

export default function Testimonials() {
  const testimonials = [
    "/print_1.jpg",
    "/print_2.jpg",
    "/print_3.jpg",
    "/print_4.jpg",
    "/print_5.jpg",
    "/print_6.jpg",
  ];

  const phone = "5548998481349";

  return (
    <section className="bg-white py-20 px-6 text-black">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-5xl font-bold text-[#b3827d] mb-4">O Que Dizem  Minhas Clientes</h2>
        <p className="text-lg text-gray-600 mb-12">
          Carinho, profissionalismo e satisfação em cada atendimento.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {testimonials.map((src, index) => (
            <div
              key={index}
              className="bg-[#f9f4f3] p-3 rounded-2xl shadow-md hover:shadow-lg transition h-[300px] flex items-center justify-center"
            >
              <div className="relative w-full max-w-[250px] h-auto">
                <Image
                  src={src}
                  alt={`Depoimento ${index + 1}`}
                  width={500}
                  height={500}
                  className="rounded-xl w-full h-auto object-contain"
                />
              </div>
            </div>
          ))}
        </div>

        <a
          href={`https://wa.me/${phone}?text=Olá, vi os depoimentos e gostaria de saber mais sobre os serviços!`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#b3827d] text-white font-semibold px-6 py-3 rounded-full hover:bg-rose-300 transition"
        >
          <FaWhatsapp size={20} />
          Fale com a Ana no WhatsApp
        </a>
      </div>
    </section>
  );
}
