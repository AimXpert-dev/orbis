import type { Metadata } from "next";
import { Inter, Orbitron } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["700", "900"],
});

export const metadata: Metadata = {
  title: "ORBIS — Soluzioni digitali per il Business",
  description:
    "ORBIS offre soluzioni digitali su misura per il tuo business: dal sistema di prenotazioni multicanale al gestionale completo per contabilità, clienti e inventario.",
  keywords: ["SaaS", "gestionale", "prenotazioni", "Discord bot", "Telegram bot", "app mobile", "contabilità", "fatturazione"],
  openGraph: {
    title: "ORBIS — Soluzioni digitali per il Business",
    description: "Soluzioni digitali professionali per il tuo business. Prenotazioni, comunicazioni, contabilità e gestione aziendale — tutto integrato.",
    type: "website",
    url: "https://orbis-italia.it",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body className={`${inter.variable} ${orbitron.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
