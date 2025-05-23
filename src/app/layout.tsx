import "./globals.css";
import { Satisfy, Inter } from "next/font/google";

const satisfy = Satisfy({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-satisfy",
});

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
  ],

  authors: [{ name: "Luiz Antonio Dos Santos" }],
  creator: "Luiz Antonio Dos Santos",
  openGraph: {
    title: "Ana Grigio | Nails Designer em Alta Floresta",
    description:
      "Landing page profissional da Ana Grigio, especialista em unhas de gel. Veja fotos, conheça os serviços e agende seu horário pelo WhatsApp.",
    url: "https://anagrigionails.com.br", // Substitui pelo domínio real depois
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
  metadataBase: new URL("https://anagrigionails.com.br"), // Substitui pelo domínio real
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br" className={` ${inter.variable}`}>
      <body className="font-inter bg-black text-white">{children}</body>
    </html>
  );
}
