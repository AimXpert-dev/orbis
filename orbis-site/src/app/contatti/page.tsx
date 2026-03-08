import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Contatti — ORBIS",
  description: "Contattaci per una consulenza gratuita. Telegram, Discord o Email.",
};

export default function ContattiPage() {
  return (
    <>
      <Navbar />
      <div className="pt-20" />
      <Contact />
      <Footer />
    </>
  );
}
