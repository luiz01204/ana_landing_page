import { FaWhatsapp, FaMapMarkerAlt, FaGlobe } from "react-icons/fa";

export default function LinksPage() {
  const phone = "5548998481349";

  return (
    <section className="min-h-screen bg-white flex items-center justify-center px-6 py-20 text-black">
      <div className="max-w-md w-full text-center">
        <h1 className="text-4xl font-bold text-[#b3827d] mb-6">Ana Grigio</h1>
        <p className="text-gray-600 mb-10">Beleza, cuidado e carinho em cada detalhe 💅</p>

        <div className="flex flex-col gap-4">
          {/* WhatsApp */}
          <a
            href={`https://wa.me/${phone}?text=Olá, vim pelo Instagram e quero saber mais sobre os serviços!`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#b3827d] text-white font-semibold px-6 py-4 rounded-full hover:bg-rose-300 transition"
          >
            <FaWhatsapp size={20} />
            Agendar no WhatsApp
          </a>

          {/* Endereço */}
          <a
            href="https://g.co/kgs/urjFdS5"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#f9f4f3] text-[#b3827d] font-semibold px-6 py-4 rounded-full hover:bg-rose-100 transition"
          >
            <FaMapMarkerAlt size={20} />
            Como chegar na Esmalteria
          </a>

          {/* Site / Landing Page */}
          <a
            href="https://anagrigionails.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#f9f4f3] text-[#b3827d] font-semibold px-6 py-4 rounded-full hover:bg-rose-100 transition"
          >
            <FaGlobe size={20} />
            Ver portfólio e serviços
          </a>
        </div>
      </div>
    </section>
  );
}
