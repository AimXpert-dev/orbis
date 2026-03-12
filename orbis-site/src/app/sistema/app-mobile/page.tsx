import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChannelIcon from "@/components/ChannelIcon";

export const metadata: Metadata = {
  title: "App Mobile — Orbis Hub",
  description: "App nativa iOS e Android, completamente white label. Gestisci prenotazioni e clienti dal tuo smartphone.",
};

const features = [
  {
    title: "White Label completa",
    desc: "Il tuo logo, i tuoi colori, il tuo nome. L'app è tua al 100%.",
  },
  {
    title: "Pannello admin nativo",
    desc: "Gestisci prenotazioni, conferma o annulla, tutto dall'app.",
  },
  {
    title: "Push notifications",
    desc: "Notifiche in tempo reale per ogni evento: nuova prenotazione, conferma, annullamento.",
  },
  {
    title: "Calendario prenotazioni",
    desc: "Vista calendario con tutti gli appuntamenti. Filtra per servizio, staff o data.",
  },
  {
    title: "Annunci in-app",
    desc: "Pubblica annunci che arrivano anche su Discord e Telegram in automatico.",
  },
  {
    title: "OTA updates",
    desc: "Aggiornamenti automatici senza passare dagli store. Sempre l'ultima versione.",
  },
];

const screenshots = [
  { src: "/screenshots/scegli servizio da app.jpg", alt: "Scegli servizio" },
  { src: "/screenshots/acquisto da app.jpg", alt: "Acquisto" },
  { src: "/screenshots/prenota da app.jpg", alt: "Prenota" },
];

export default function AppMobilePage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative z-1 min-h-[75vh] flex items-center justify-center px-6 md:px-16 pt-28 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(0,174,239,0.1)_0%,transparent_60%)] pointer-events-none" />
        <div className="absolute top-20 right-[10%] w-[300px] h-[300px] bg-[radial-gradient(circle,rgba(0,174,239,0.06)_0%,transparent_70%)] pointer-events-none hidden lg:block" />

        <div className="relative max-w-[1200px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs text-[var(--color-muted)] mb-8">
              <Link href="/" className="hover:text-[var(--color-white)] transition-colors no-underline">Home</Link>
              <span>/</span>
              <Link href="/sistema" className="hover:text-[var(--color-white)] transition-colors no-underline">Sistema</Link>
              <span>/</span>
              <span className="text-[var(--color-cyan)]">App Mobile</span>
            </div>

            <div className="inline-flex items-center gap-2.5 mb-3">
              <span className="bg-[rgba(0,174,239,0.12)] border border-[rgba(0,174,239,0.3)] rounded-full text-[10px] font-bold tracking-[1.5px] text-[var(--color-cyan)] px-3 py-1 uppercase">
                White Label
              </span>
            </div>
            <div className="inline-flex items-center gap-2.5 bg-[rgba(0,174,239,0.08)] border border-[rgba(0,174,239,0.2)] rounded-full px-4 py-1.5 text-[11px] font-bold tracking-[2px] text-[var(--color-cyan)] uppercase mb-8">
              <span className="w-2 h-2 rounded-full bg-[var(--color-cyan)] animate-pulse" />
              Modulo App Mobile
            </div>
            <h1 className="font-[family-name:var(--font-display)] text-[clamp(32px,5vw,56px)] font-black tracking-[4px] leading-[1.1] mb-6">
              La tua app.<br />
              <span className="text-[var(--color-cyan)]">Il tuo brand.</span>
            </h1>
            <p className="text-[var(--color-muted)] text-lg leading-relaxed mb-10 max-w-[480px]">
              App nativa per iOS e Android con il tuo logo, i tuoi colori e il tuo nome.
              I clienti prenotano, lo staff gestisce — tutto da un&apos;unica app.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Link
                href="/sistema/pacchetti"
                className="bg-[var(--color-cyan)] text-[#080B14] px-8 py-3.5 rounded-xl text-[15px] font-bold no-underline shadow-[0_4px_30px_rgba(0,174,239,0.35)] hover:shadow-[0_4px_40px_rgba(0,174,239,0.55)] hover:-translate-y-0.5 transition-all"
              >
                Vedi i pacchetti
              </Link>
              <Link
                href="/contatti"
                className="border border-[rgba(0,174,239,0.3)] text-[var(--color-cyan)] px-8 py-3.5 rounded-xl text-[15px] font-semibold no-underline hover:bg-[rgba(0,174,239,0.06)] transition-all"
              >
                Contattaci
              </Link>
            </div>
          </div>

          {/* Phone mockup */}
          <div className="flex justify-center">
            <div className="relative w-[220px] h-[420px] rounded-[36px] border-2 border-[rgba(0,174,239,0.2)] bg-[var(--color-bg2)] shadow-[0_0_80px_rgba(0,174,239,0.1)] overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-[24px] bg-[var(--color-bg)] rounded-b-2xl" />
              <div className="w-full h-full flex flex-col items-center justify-center gap-4 p-6">
                <ChannelIcon name="app" size={52} />
                <div className="font-[family-name:var(--font-display)] text-xs tracking-[3px] text-[var(--color-cyan)] uppercase">
                  Your App
                </div>
                <div className="w-full space-y-2 mt-4">
                  <div className="h-2 bg-[rgba(0,174,239,0.15)] rounded-full w-full" />
                  <div className="h-2 bg-[rgba(0,174,239,0.1)] rounded-full w-3/4" />
                  <div className="h-2 bg-[rgba(0,174,239,0.08)] rounded-full w-1/2" />
                </div>
                <div className="flex gap-2 mt-4">
                  <div className="w-8 h-8 rounded-lg bg-[rgba(0,174,239,0.12)] border border-[rgba(0,174,239,0.2)]" />
                  <div className="w-8 h-8 rounded-lg bg-[rgba(0,174,239,0.12)] border border-[rgba(0,174,239,0.2)]" />
                  <div className="w-8 h-8 rounded-lg bg-[rgba(0,174,239,0.12)] border border-[rgba(0,174,239,0.2)]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="relative z-1 py-20 px-6 md:px-16 border-t border-[var(--color-border)] bg-[var(--color-bg2)]">
        <div className="max-w-[1000px] mx-auto">
          <div className="text-center mb-14">
            <div className="text-[11px] font-bold tracking-[4px] text-[var(--color-cyan)] uppercase mb-4">
              Funzionalità
            </div>
            <h2 className="font-[family-name:var(--font-display)] text-[clamp(22px,3vw,32px)] font-bold tracking-[2px]">
              Nativa. Veloce. Tua.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((f) => (
              <div
                key={f.title}
                className="bg-[var(--color-bg)] rounded-2xl p-6 border border-[var(--color-border)] hover:border-[rgba(0,174,239,0.3)] transition-colors"
              >
                <h3 className="text-[15px] font-bold mb-2 text-[var(--color-cyan)]">{f.title}</h3>
                <p className="text-[13px] text-[var(--color-muted)] leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshots */}
      <section className="relative z-1 py-20 px-6 md:px-16">
        <div className="max-w-[1000px] mx-auto">
          <div className="text-center mb-10">
            <div className="text-[11px] font-bold tracking-[4px] text-[var(--color-cyan)] uppercase mb-4">
              Anteprima
            </div>
            <h2 className="font-[family-name:var(--font-display)] text-[clamp(22px,3vw,32px)] font-bold tracking-[2px]">
              L&apos;app in azione
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {screenshots.map((img) => (
              <div
                key={img.src}
                className="bg-[var(--color-bg2)] border border-[var(--color-border)] rounded-2xl overflow-hidden h-[280px] relative hover:border-[rgba(0,174,239,0.3)] hover:-translate-y-1 transition-all"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-contain bg-[var(--color-bg3)]"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="relative z-1 py-20 px-6 md:px-16 border-t border-[var(--color-border)] bg-[var(--color-bg2)]">
        <div className="max-w-[600px] mx-auto text-center">
          <div className="text-[11px] font-bold tracking-[4px] text-[var(--color-cyan)] uppercase mb-4">
            Prezzo
          </div>
          <h2 className="font-[family-name:var(--font-display)] text-[clamp(22px,3vw,32px)] font-bold tracking-[2px] mb-10">
            App Mobile
          </h2>

          <div className="bg-[var(--color-bg)] border border-[rgba(0,174,239,0.3)] rounded-2xl p-10 shadow-[0_0_40px_rgba(0,174,239,0.08)] relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[var(--color-cyan)] text-[#080B14] text-[10px] font-bold tracking-[2px] px-3.5 py-0.5 rounded-full whitespace-nowrap uppercase">
              White Label
            </div>

            <div className="font-[family-name:var(--font-display)] text-5xl font-black text-[var(--color-cyan)] leading-none mb-2">
              <sup className="text-xl font-normal text-[var(--color-muted)] align-top mr-1">&euro;</sup>
              249
            </div>
            <div className="text-sm text-[var(--color-muted)] mb-8">setup + &euro;19,90/mese</div>

            <ul className="text-left flex flex-col gap-3 mb-8">
              {[
                "iOS + Android, branding cliente",
                "Pannello admin nativo",
                "Push notifications",
                "Calendario prenotazioni",
                "Annunci in-app",
                "OTA updates inclusi",
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
              className="block w-full text-center py-3.5 rounded-xl text-sm font-bold no-underline bg-[var(--color-cyan)] text-[#080B14] shadow-[0_4px_20px_rgba(0,174,239,0.3)] hover:shadow-[0_4px_30px_rgba(0,174,239,0.5)] transition-all"
            >
              Richiedi l&apos;App Mobile
            </Link>
          </div>

          <p className="text-sm text-[var(--color-muted)] mt-6">
            Vuoi combinarlo con altri canali?{" "}
            <Link href="/sistema/pacchetti" className="text-[var(--color-cyan)] no-underline hover:underline">
              Guarda i pacchetti &rarr;
            </Link>
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
