import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChannelIcon from "@/components/ChannelIcon";

export const metadata: Metadata = {
  title: "Bot Discord — ORBIS",
  description: "Prenotazioni, ticket e gestione staff direttamente dal tuo server Discord. Tutto automatizzato.",
};

const features = [
  {
    title: "Prenotazioni interattive",
    desc: "Menu a tendina per servizio, data e orario. Il cliente prenota senza uscire da Discord.",
    icon: "📋",
  },
  {
    title: "Ticket automatici",
    desc: "Canale privato per ogni prenotazione con storico messaggi, note e stato in tempo reale.",
    icon: "🎫",
  },
  {
    title: "Gestione staff",
    desc: "Assegna slot, gestisci disponibilita e conferma prenotazioni con un click dal pannello.",
    icon: "👥",
  },
  {
    title: "Bridge bidirezionale",
    desc: "I messaggi del ticket arrivano anche su Telegram e App. Rispondi da dove vuoi.",
    icon: "🔗",
  },
  {
    title: "Annunci multicanale",
    desc: "Pubblica un annuncio su Discord e arriva automaticamente su Telegram e nell'App.",
    icon: "📢",
  },
  {
    title: "Comandi custom",
    desc: "Crea comandi personalizzati per il tuo business. Automatizza qualsiasi workflow.",
    icon: "⚙️",
  },
];

const screenshots = [
  { src: "/screenshots/prenota una sessione dis.jpg", alt: "Prenota una sessione" },
  { src: "/screenshots/scegli servizio ds.jpg", alt: "Scegli servizio" },
  { src: "/screenshots/scegli giorno ds.png", alt: "Scegli giorno" },
  { src: "/screenshots/scegli orario ds.jpg", alt: "Scegli orario" },
  { src: "/screenshots/note sessione ds.png", alt: "Note sessione" },
  { src: "/screenshots/prenota ds.png", alt: "Pannello prenotazione" },
];

export default function DiscordPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative z-1 min-h-[70vh] flex items-center px-6 md:px-16 pt-28 pb-16">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(88,101,242,0.12)_0%,transparent_60%)] pointer-events-none" />
        <div className="max-w-[1200px] mx-auto w-full relative">
          <div className="max-w-[640px]">
            <div className="inline-flex items-center gap-2.5 bg-[rgba(88,101,242,0.12)] border border-[rgba(88,101,242,0.3)] rounded-full px-4 py-1.5 text-[11px] font-bold tracking-[2px] text-[#5865F2] uppercase mb-8">
              <span className="w-2 h-2 rounded-full bg-[#5865F2] animate-pulse" />
              Modulo Discord
            </div>
            <h1 className="font-[family-name:var(--font-display)] text-[clamp(32px,5vw,56px)] font-black tracking-[4px] leading-[1.1] mb-6">
              Il tuo server.<br />
              <span className="text-[#5865F2]">Il tuo business.</span>
            </h1>
            <p className="text-[var(--color-muted)] text-lg leading-relaxed mb-10 max-w-[520px]">
              Trasforma Discord nel centro operativo della tua attivita.
              Prenotazioni, ticket e comunicazioni — tutto automatico,
              tutto dal tuo server.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Link
                href="/pacchetti"
                className="bg-[#5865F2] text-white px-8 py-3.5 rounded-xl text-[15px] font-bold no-underline shadow-[0_4px_30px_rgba(88,101,242,0.35)] hover:bg-[#4752C4] hover:-translate-y-0.5 transition-all"
              >
                Vedi i pacchetti
              </Link>
              <Link
                href="/contatti"
                className="border border-[rgba(88,101,242,0.3)] text-[#5865F2] px-8 py-3.5 rounded-xl text-[15px] font-semibold no-underline hover:bg-[rgba(88,101,242,0.06)] transition-all"
              >
                Contattaci
              </Link>
            </div>
          </div>

          {/* Floating emoji */}
          <div className="hidden lg:flex absolute right-10 top-1/2 -translate-y-1/2 w-[200px] h-[200px] items-center justify-center">
            <div className="w-[160px] h-[160px] rounded-full bg-[rgba(88,101,242,0.08)] border border-[rgba(88,101,242,0.2)] flex items-center justify-center shadow-[0_0_60px_rgba(88,101,242,0.2)]">
              <ChannelIcon name="discord" size={72} />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="relative z-1 py-20 px-6 md:px-16 border-t border-[var(--color-border)] bg-[var(--color-bg2)]">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-[11px] font-bold tracking-[4px] text-[#5865F2] uppercase mb-4">
            Funzionalita
          </div>
          <h2 className="font-[family-name:var(--font-display)] text-[clamp(22px,3vw,32px)] font-bold tracking-[2px] mb-14">
            Tutto quello che il bot puo fare
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f) => (
              <div
                key={f.title}
                className="bg-[var(--color-bg)] border border-[var(--color-border)] rounded-xl p-7 hover:border-[rgba(88,101,242,0.4)] transition-colors"
              >
                <span className="text-2xl block mb-3">{f.icon}</span>
                <h3 className="text-[15px] font-bold mb-2">{f.title}</h3>
                <p className="text-[13px] text-[var(--color-muted)] leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshots */}
      <section className="relative z-1 py-20 px-6 md:px-16">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-[11px] font-bold tracking-[4px] text-[#5865F2] uppercase mb-4">
            Anteprima
          </div>
          <h2 className="font-[family-name:var(--font-display)] text-[clamp(22px,3vw,32px)] font-bold tracking-[2px] mb-10">
            Il bot in azione
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {screenshots.map((img) => (
              <div
                key={img.src}
                className="bg-[var(--color-bg2)] border border-[var(--color-border)] rounded-xl overflow-hidden h-[220px] relative hover:border-[rgba(88,101,242,0.4)] hover:-translate-y-1 transition-all"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-contain bg-[var(--color-bg3)]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="relative z-1 py-20 px-6 md:px-16 border-t border-[var(--color-border)] bg-[var(--color-bg2)]">
        <div className="max-w-[600px] mx-auto text-center">
          <div className="text-[11px] font-bold tracking-[4px] text-[#5865F2] uppercase mb-4">
            Prezzo
          </div>
          <h2 className="font-[family-name:var(--font-display)] text-[clamp(22px,3vw,32px)] font-bold tracking-[2px] mb-10">
            Bot Discord
          </h2>

          <div className="bg-[var(--color-bg)] border border-[rgba(88,101,242,0.3)] rounded-2xl p-10 shadow-[0_0_40px_rgba(88,101,242,0.08)]">
            <div className="font-[family-name:var(--font-display)] text-5xl font-black text-[#5865F2] leading-none mb-2">
              <sup className="text-xl font-normal text-[var(--color-muted)] align-top mr-1">&euro;</sup>
              149
            </div>
            <div className="text-sm text-[var(--color-muted)] mb-8">setup + &euro;14,90/mese</div>

            <ul className="text-left flex flex-col gap-3 mb-8">
              {[
                "Prenotazioni via menu interattivi",
                "Apertura ticket automatica",
                "Gestione slot staff",
                "Benvenuto nuovi membri",
                "Comandi custom",
                "Server condiviso incluso",
              ].map((p) => (
                <li key={p} className="flex items-start gap-2.5 text-sm text-[var(--color-muted)]">
                  <span className="text-[var(--color-green)] font-bold mt-0.5">&#10003;</span>
                  {p}
                </li>
              ))}
            </ul>

            <Link
              href="/contatti"
              className="block w-full text-center py-3.5 rounded-xl text-sm font-bold no-underline bg-[#5865F2] text-white shadow-[0_4px_20px_rgba(88,101,242,0.3)] hover:bg-[#4752C4] transition-all"
            >
              Richiedi il Bot Discord
            </Link>
          </div>

          <p className="text-sm text-[var(--color-muted)] mt-6">
            Vuoi combinarlo con altri canali?{" "}
            <Link href="/pacchetti" className="text-[#5865F2] no-underline hover:underline">
              Guarda i pacchetti &rarr;
            </Link>
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
