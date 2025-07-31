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

  const phone = "5548999572643";

  const duvidas = [
    {
      pergunta: "O que são unhas de gel?",
      resposta:
        "São unhas artificiais feitas com gel especial que é aplicado sobre as unhas naturais ou tips, garantindo resistência e um visual natural.",
    },
    {
      pergunta: "Quanto tempo dura as unhas de gel?",
      resposta:
        "Em média, de 2 a 3 semanas, dependendo dos cuidados da cliente. Após esse período, é recomendado fazer a manutenção.",
    },
    {
      pergunta: "Precisa lixar minha unha natural para aplicar gel?",
      resposta:
        "Sim, é feito um lixamento leve apenas para fixação do gel. Todo o processo é seguro e sem agressões profundas à unha natural.",
    },
    {
      pergunta: "Unhas de gel estragam a unha natural?",
      resposta:
        "Não! Quando aplicadas e removidas corretamente por uma profissional, suas unhas continuam saudáveis.",
    },
    {
      pergunta: "Posso fazer qualquer formato de unha?",
      resposta:
        "Sim! Quadrada, bailarina, stiletto, amendoada... o formato é personalizado de acordo com seu gosto.",
    },
    {
      pergunta: "Quanto tempo leva para fazer as unhas de gel?",
      resposta:
        "O procedimento dura entre 1h30 a 2h, dependendo do estilo e da decoração escolhida.",
    },
  ];

  return (
    <>
      <section className="bg-white py-20 px-6 text-black">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-[#b3827d] mb-4">Depoimentos das Minhas Clientes</h2>
          <p className="text-lg text-gray-600 mb-12">
            Carinho, profissionalismo e satisfação em cada atendimento.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {testimonials.map((src, index) => (
              <div
                key={index}
                className="bg-[#f9f4f3] p-3 rounded-2xl shadow-md hover:shadow-lg transition h-[300px] flex"
              >
                <div className="relative w-full h-auto">
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
        </div>
      </section>

      {/* Dúvidas Frequentes */}
      <section className="bg-[#fdf8f7] py-20 px-6 text-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-[#b3827d] mb-8">Dúvidas Frequentes</h2>

          <div className="space-y-6 text-left">
            {duvidas.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-lg font-semibold text-[#b3827d] mb-2">{item.pergunta}</h3>
                <p className="text-gray-700">{item.resposta}</p>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <a
              href={`https://wa.me/${phone}?text=Olá, vi as dúvidas frequentes e quero agendar ou saber mais sobre unhas de gel!`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#b3827d] text-white font-semibold px-6 py-3 rounded-full hover:bg-rose-300 transition"
            >
              <FaWhatsapp size={20} />
              Tirar dúvidas no WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
