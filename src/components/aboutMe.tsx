import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";

export default function AboutMe() {
  return (
    <section className="w-full h-full bg-[#f9f4f3] py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Imagem da Ana */}
        <div className="flex justify-center">
          <Image
            src="/ana.jpg"
            alt="Ana Grigio - Nails Designer"
            width={500}
            height={600}
            className="rounded-2xl shadow-md object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Texto sobre ela */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4">
          <h2 className="text-5xl font-bold text-[#b3827d]">Sobre Mim</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Olá! Eu sou a <span className="font-semibold text-[#b3827d]">Ana Grigio</span>, Nails Designer especializada em unhas de gel.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Minha jornada com as unhas começou aos 13 anos, em um salão de beleza familiar.
            Por alguns anos fiz uma pausa profissional mas nunca deixei de fato de ter contato com as unhas.
            Mas o amor pela profissão me fez retornar novamente, atendendo amigas na sala da minha casa e fui ganhando confiança, experiência e o amor das minhas clientes.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Hoje, após muita dedicação, cursos e muito trabalho, me orgulho em oferecer um serviço profissional, com carinho, atenção aos detalhes e aquele toque especial que só quem ama o que faz consegue entregar.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Aqui, cada unha é única, e cada cliente sai se sentindo mais linda do que entrou. 💅✨
          </p>

            {/* Botão igual do About */}
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
    </section>
  );
}
