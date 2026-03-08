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
  title: "ORBIS — One Platform. Every Channel.",
  description:
    "Un ecosistema completo per gestire prenotazioni, clienti e comunicazioni su Discord, Telegram, App Mobile e WhatsApp — tutto sincronizzato in tempo reale.",
  keywords: ["SaaS", "white-label", "Discord bot", "Telegram bot", "app mobile", "prenotazioni", "gestionale"],
  openGraph: {
    title: "ORBIS — One Platform. Every Channel.",
    description: "Gestisci prenotazioni, clienti e comunicazioni su ogni canale da un unico centro di controllo.",
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
