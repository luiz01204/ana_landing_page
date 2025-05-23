import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Ana Grigio | Nails Designer | Unhas de Gel em Alta Floresta",
  description:
    "Unhas de gel com estilo e elegância em Alta Floresta. Agende com Ana Grigio, Nails Designer com experiência, certificação e mais de 1.000 clientes atendidas.",
  keywords: [
    "unhas de gel Criciúma",
    "nails designer Criciúma",
    "manicure em Criciúma",
    "Ana Grigio unhas",
    "unhas decoradas Criciúma",
    "especialista em unhas Criciúma",
    "nails art Criciúma",
    "unhas femininas Criciúma",
    "unhas elegantes Criciúma",
    "manicure profissional Criciúma",
    "unhas de gel com alongamento",
    "unhas decoradas tendência Criciúma",
    // Novas palavras-chave adicionadas
    "blindagem de unhas",
    "blindagem em gel",
    "unhas blindadas",
    "proteção de unhas",
    "esmaltação blindada",
    "blindagem para unhas fracas",
    "spa para pés",
    "tratamento para pés",
    "esfoliação dos pés",
    "hidratação profunda dos pés",
    "relaxamento dos pés",
    "alinhamento de lâmina",
    "correção de lâmina ungueal",
    "simetria das unhas",
    "tratamento de ranhuras nas unhas",
    "fortalecimento da lâmina ungueal"
  ],
  authors: [{ name: "Luiz Antonio Dos Santos" }],
  creator: "Luiz Antonio Dos Santos",
  openGraph: {
    title: "Ana Grigio | Nails Designer em Alta Floresta",
    description:
      "Landing page profissional da Ana Grigio, especialista em unhas de gel. Veja fotos, conheça os serviços e agende seu horário pelo WhatsApp.",
    url: "https://ana-landing-page-puce.vercel.app/",
    siteName: "Ana Grigio Nails",
    images: [
      {
        url: "/logo_ana_1.jpg",
        width: 800,
        height: 600,
        alt: "Ana Grigio Nails Designer",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  metadataBase: new URL("https://ana-landing-page-puce.vercel.app/"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br" className={` ${inter.variable}`}>
      <body className="font-inter bg-black text-white">{children}</body>
    </html>
  );
}
