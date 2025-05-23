import { FaSpa, FaHandSparkles, FaGem, FaPlusCircle, FaWhatsapp } from "react-icons/fa";

export default function Services() {
  const services = [
    {
      icon: <FaGem size={28} />,
      title: "Alinhamento de lâmina",
      description: "Durabilidade e brilho para quem ama praticidade com estilo.",
    },
    {
      icon: <FaGem size={28} />,
      title: "Blindagem",
      description: "Para quem ama unhas naturais com durabilidade na esmaltação..",
    },
    {
      icon: <FaSpa size={28} />,
      title: "Spa dos Pés",
      description: "Cuidado, hidratação e relaxamento completo para seus pés.",
    },
  ];

  const phone = "5548998481349";

  return (
    <section className="bg-white py-20 px-6 text-black">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-5xl font-bold text-[#b3827d] mb-4">Meus Serviços</h2>
        <p className="text-lg text-gray-600 mb-12">
          Tudo que você precisa para deixar suas unhas maravilhosas.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#f9f4f3] p-6 rounded-2xl shadow-md hover:shadow-lg hover:bg-rose-100 transition flex flex-col justify-between"
            >
              <div>
                <div className="text-[#b3827d] mb-4 flex justify-center">{service.icon}</div>
                <h3 className="text-2xl font-semibold text-[#b3827d] mb-2">{service.title}</h3>
                <p className="text-gray-700 mb-6">{service.description}</p>
              </div>
              <a
                href={`https://wa.me/${phone}?text=Olá, gostaria de saber mais sobre o serviço de ${encodeURIComponent(service.title)}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center gap-2 bg-[#b3827d] text-white font-semibold px-6 py-3 rounded-full hover:bg-rose-300 transition justify-center"
              >
                <FaWhatsapp size={20} />
                Fazer um orçamento
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
