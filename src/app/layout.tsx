// app/layout.tsx
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
  title: "Unhas de Gel",
  description: "Landing page para Nails Designer",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br" className={`${satisfy.variable} ${inter.variable}`}>
      <body className="font-inter bg-black text-white">{children}</body>
    </html>
  );
}
