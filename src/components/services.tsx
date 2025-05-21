import { FaSpa, FaPaintBrush, FaTools, FaHandSparkles, FaGem, FaPlusCircle } from "react-icons/fa";

export default function Services() {
  const services = [
    {
      icon: <FaGem size={28} />,
      title: "Unhas de Gel",
      description: "Durabilidade e brilho para quem ama praticidade com estilo.",
    },
    {
      icon: <FaPlusCircle size={28} />,
      title: "Alongamento",
      description: "Unhas longas e naturais com acabamento perfeito.",
    },
    {
      icon: <FaTools size={28} />,
      title: "Manutenção",
      description: "Deixe suas unhas sempre impecáveis com nossa manutenção profissional.",
    },
    {
      icon: <FaPaintBrush size={28} />,
      title: "Nail Art",
      description: "Arte personalizada para destacar sua personalidade.",
    },
    {
      icon: <FaHandSparkles size={28} />,
      title: "Fibra de Vidro",
      description: "Resistência e beleza com técnica avançada.",
    },
    {
      icon: <FaSpa size={28} />,
      title: "Spa das Mãos",
      description: "Cuidado, hidratação e relaxamento completo para suas mãos.",
    },
  ];

  return (
    <section className="bg-white py-20 px-6 text-black">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-5xl font-bold text-[#b3827d] mb-4">Nossos Serviços</h2>
        <p className="text-lg text-gray-600 mb-12">
          Tudo que você precisa para deixar suas unhas maravilhosas.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#f9f4f3] p-6 rounded-2xl shadow-md hover:shadow-lg hover:bg-rose-100 transition"
            >
              <div className="text-[#b3827d] mb-4 flex justify-center">{service.icon}</div>
              <h3 className="text-2xl font-semibold text-[#b3827d] mb-2">{service.title}</h3>
              <p className="text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
