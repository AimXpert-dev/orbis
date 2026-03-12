import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChannelIcon from "@/components/ChannelIcon";

export const metadata: Metadata = {
  title: "Bot Telegram — Sistema Orbis",
  description: "Prenotazioni inline, notifiche automatiche e pannello staff — tutto dentro Telegram.",
};

const features = [
  {
    title: "Prenotazioni inline",
    desc: "Keyboard interattive per scegliere servizio, giorno e orario senza mai lasciare la chat.",
    icon: "⚡",
  },
  {
    title: "Notifiche clienti",
    desc: "Conferme, promemoria e aggiornamenti automatici direttamente nella chat del cliente.",
    icon: "🔔",
  },
  {
    title: "Pannello staff",
    desc: "Approva o rifiuta prenotazioni con un tap. Lo staff gestisce tutto da Telegram.",
    icon: "✅",
  },
  {
    title: "Topic per prenotazione",
    desc: "Ogni prenotazione ha il suo topic dedicato con storico completo della conversazione.",
    icon: "💬",
  },
  {
    title: "Bridge con Discord e App",
    desc: "Messaggi sincronizzati in tempo reale. Rispondi da Telegram, arriva ovunque.",
    icon: "🔗",
  },
  {
    title: "Comandi personalizzati",
    desc: "Configura comandi su misura per il tuo workflow. Flessibilità totale.",
    icon: "🛠️",
  },
];

const screenshots = [
  { src: "/screenshots/benvenuto tg.jpg", alt: "Benvenuto" },
  { src: "/screenshots/scegli piattaforma tg.jpg", alt: "Scegli piattaforma" },
  { src: "/screenshots/scegli servizio tg.jpg", alt: "Scegli servizio" },
  { src: "/screenshots/scegli giorno tg.jpg", alt: "Scegli giorno" },
  { src: "/screenshots/scegli orario tg.jpg", alt: "Scegli orario" },
];

export default function TelegramPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative z-1 min-h-[70vh] flex items-center justify-center text-center px-6 md:px-16 pt-28 pb-16">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(42,171,238,0.1)_0%,transparent_60%)] pointer-events-none" />
        <div className="relative max-w-[700px]">
          {/* Breadcrumb */}
          <div className="flex items-center justify-center gap-2 text-xs text-[var(--color-muted)] mb-8">
            <Link href="/" className="hover:text-[var(--color-white)] transition-colors no-underline">Home</Link>
            <span>/</span>
            <Link href="/sistema" className="hover:text-[var(--color-white)] transition-colors no-underline">Sistema</Link>
            <span>/</span>
            <span className="text-[#2AABEE]">Telegram</span>
          </div>

          <div className="inline-flex items-center gap-2.5 bg-[rgba(42,171,238,0.1)] border border-[rgba(42,171,238,0.25)] rounded-full px-4 py-1.5 text-[11px] font-bold tracking-[2px] text-[#2AABEE] uppercase mb-8">
            <span className="w-2 h-2 rounded-full bg-[#2AABEE] animate-pulse" />
            Modulo Telegram
          </div>
          <h1 className="font-[family-name:var(--font-display)] text-[clamp(32px,5vw,56px)] font-black tracking-[4px] leading-[1.1] mb-6">
            Prenota.<br />
            <span className="text-[#2AABEE]">Direttamente in chat.</span>
          </h1>
          <p className="text-[var(--color-muted)] text-lg leading-relaxed mb-10">
            Il tuo bot Telegram gestisce prenotazioni, notifiche e comunicazioni.
            I clienti prenotano con pochi tap, lo staff approva in un secondo.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/sistema/pacchetti"
              className="bg-[#2AABEE] text-white px-8 py-3.5 rounded-xl text-[15px] font-bold no-underline shadow-[0_4px_30px_rgba(42,171,238,0.35)] hover:bg-[#1D9AD8] hover:-translate-y-0.5 transition-all"
            >
              Vedi i pacchetti
            </Link>
            <Link
              href="/contatti"
              className="border border-[rgba(42,171,238,0.3)] text-[#2AABEE] px-8 py-3.5 rounded-xl text-[15px] font-semibold no-underline hover:bg-[rgba(42,171,238,0.06)] transition-all"
            >
              Contattaci
            </Link>
          </div>

          <div className="mt-16 flex justify-center">
            <div className="w-[120px] h-[120px] rounded-full bg-[rgba(42,171,238,0.06)] border border-[rgba(42,171,238,0.15)] flex items-center justify-center shadow-[0_0_50px_rgba(42,171,238,0.15)]">
              <ChannelIcon name="telegram" size={64} />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="relative z-1 py-20 px-6 md:px-16 border-t border-[var(--color-border)] bg-[var(--color-bg2)]">
        <div className="max-w-[1000px] mx-auto">
          <div className="text-center mb-14">
            <div className="text-[11px] font-bold tracking-[4px] text-[#2AABEE] uppercase mb-4">
              Funzionalità
            </div>
            <h2 className="font-[family-name:var(--font-display)] text-[clamp(22px,3vw,32px)] font-bold tracking-[2px]">
              Potente. Semplice. Veloce.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((f, i) => (
              <div
                key={f.title}
                className={`flex gap-5 items-start bg-[var(--color-bg)] border border-[var(--color-border)] rounded-xl p-7 hover:border-[rgba(42,171,238,0.3)] transition-colors ${
                  i % 2 === 1 ? "md:translate-y-4" : ""
                }`}
              >
                <span className="text-2xl shrink-0 mt-0.5">{f.icon}</span>
                <div>
                  <h3 className="text-[15px] font-bold mb-1.5">{f.title}</h3>
                  <p className="text-[13px] text-[var(--color-muted)] leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshots */}
      <section className="relative z-1 py-20 px-6 md:px-16">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-10">
            <div className="text-[11px] font-bold tracking-[4px] text-[#2AABEE] uppercase mb-4">
              Anteprima
            </div>
            <h2 className="font-[family-name:var(--font-display)] text-[clamp(22px,3vw,32px)] font-bold tracking-[2px]">
              Il bot in azione
            </h2>
          </div>

          <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory">
            {screenshots.map((img) => (
              <div
                key={img.src}
                className="bg-[var(--color-bg2)] border border-[var(--color-border)] rounded-xl overflow-hidden min-w-[280px] h-[240px] relative snap-start hover:border-[rgba(42,171,238,0.3)] transition-colors shrink-0"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-contain bg-[var(--color-bg3)]"
                  sizes="280px"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="relative z-1 py-20 px-6 md:px-16 border-t border-[var(--color-border)] bg-[var(--color-bg2)]">
        <div className="max-w-[600px] mx-auto text-center">
          <div className="text-[11px] font-bold tracking-[4px] text-[#2AABEE] uppercase mb-4">
            Prezzo
          </div>
          <h2 className="font-[family-name:var(--font-display)] text-[clamp(22px,3vw,32px)] font-bold tracking-[2px] mb-10">
            Bot Telegram
          </h2>

          <div className="bg-[var(--color-bg)] border border-[rgba(42,171,238,0.3)] rounded-2xl p-10 shadow-[0_0_40px_rgba(42,171,238,0.08)]">
            <div className="font-[family-name:var(--font-display)] text-5xl font-black text-[#2AABEE] leading-none mb-2">
              <sup className="text-xl font-normal text-[var(--color-muted)] align-top mr-1">&euro;</sup>
              149
            </div>
            <div className="text-sm text-[var(--color-muted)] mb-8">setup + &euro;14,90/mese</div>

            <ul className="text-left flex flex-col gap-3 mb-8">
              {[
                "Prenotazioni inline",
                "Notifiche clienti automatiche",
                "Pannello staff con approvazione",
                "Topic per ogni prenotazione",
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
              className="block w-full text-center py-3.5 rounded-xl text-sm font-bold no-underline bg-[#2AABEE] text-white shadow-[0_4px_20px_rgba(42,171,238,0.3)] hover:bg-[#1D9AD8] transition-all"
            >
              Richiedi il Bot Telegram
            </Link>
          </div>

          <p className="text-sm text-[var(--color-muted)] mt-6">
            Vuoi combinarlo con altri canali?{" "}
            <Link href="/sistema/pacchetti" className="text-[#2AABEE] no-underline hover:underline">
              Guarda i pacchetti &rarr;
            </Link>
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
