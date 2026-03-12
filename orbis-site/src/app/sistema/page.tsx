import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChannelIcon from "@/components/ChannelIcon";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sistema Orbis — Prenotazioni e Comunicazioni Multicanale",
  description:
    "Gestisci prenotazioni, clienti e comunicazioni su Discord, Telegram, App Mobile e WhatsApp — tutto sincronizzato in tempo reale da un unico centro di controllo.",
};

const channels = [
  {
    icon: "discord",
    name: "Discord",
    href: "/sistema/discord",
    color: "#5865F2",
    desc: "Bot prenotazioni, ticket automatici, gestione staff. Il tuo server Discord diventa un centro operativo.",
  },
  {
    icon: "telegram",
    name: "Telegram",
    href: "/sistema/telegram",
    color: "#2AABEE",
    desc: "Prenotazioni inline, notifiche clienti, pannello staff. Tutto dal messenger più veloce.",
  },
  {
    icon: "app",
    name: "App Mobile",
    href: "/sistema/app-mobile",
    color: "#00AEEF",
    desc: "App nativa iOS e Android, white label con il tuo brand. Pannello admin completo.",
  },
];

const steps = [
  { num: "01", title: "Il cliente prenota", desc: "Sceglie servizio, data e orario da Discord, Telegram o App." },
  { num: "02", title: "Lo staff riceve", desc: "Notifica istantanea su tutti i canali. Ticket automatico." },
  { num: "03", title: "Conferma in un click", desc: "Approva da qualsiasi canale. Lo slot si blocca ovunque." },
  { num: "04", title: "Cliente notificato", desc: "Conferma automatica con tutte le info della sessione." },
];

export default function SistemaPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative z-1 min-h-[85vh] flex flex-col items-center justify-center text-center px-6 md:px-10 pt-28 pb-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,87,255,0.08)_0%,transparent_60%)] pointer-events-none" />

        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-[var(--color-muted)] mb-8 relative">
          <Link href="/" className="hover:text-[var(--color-white)] transition-colors no-underline">Home</Link>
          <span>/</span>
          <span className="text-[var(--color-cyan)]">Sistema</span>
        </div>

        <div className="inline-flex items-center gap-2 bg-[rgba(0,87,255,0.12)] border border-[rgba(0,87,255,0.35)] rounded-full px-5 py-1.5 text-xs font-semibold tracking-[2px] text-[var(--color-cyan)] uppercase mb-9 relative">
          <span className="text-[var(--color-green)] text-[8px]">●</span>
          Sistema attivo · Pronto al deploy
        </div>

        <h1 className="font-[family-name:var(--font-display)] text-[clamp(36px,6vw,72px)] font-black tracking-[8px] leading-[1.05] mb-3 relative">
          <span className="bg-gradient-to-br from-white via-[var(--color-cyan)] to-[var(--color-blue)] bg-clip-text text-transparent">
            ORBIS SISTEMA
          </span>
        </h1>
        <p className="font-[family-name:var(--font-display)] text-[clamp(11px,1.5vw,14px)] tracking-[5px] text-[var(--color-muted)] uppercase mb-8 relative">
          One Platform · Every Channel
        </p>

        <p className="max-w-[620px] text-[var(--color-muted)] text-[17px] leading-[1.75] mx-auto mb-13 relative">
          Un ecosistema completo per gestire prenotazioni, clienti e comunicazioni
          su Discord, Telegram, App Mobile e WhatsApp — tutto sincronizzato in
          tempo reale da un unico centro di controllo.
        </p>

        <div className="flex gap-4 justify-center flex-wrap relative">
          <Link
            href="/sistema/pacchetti"
            className="bg-[var(--color-blue)] text-white px-10 py-4 rounded-xl text-[15px] font-bold no-underline tracking-wide shadow-[0_4px_30px_rgba(0,87,255,0.35)] hover:bg-[#0045CC] hover:shadow-[0_4px_40px_rgba(0,87,255,0.55)] hover:-translate-y-0.5 transition-all"
          >
            Vedi i pacchetti
          </Link>
          <Link
            href="/sistema/funzionalita"
            className="border border-[var(--color-border)] text-[var(--color-white)] px-10 py-4 rounded-xl text-[15px] font-semibold no-underline tracking-wide bg-[rgba(255,255,255,0.03)] hover:border-[var(--color-cyan)] hover:text-[var(--color-cyan)] hover:bg-[rgba(0,174,239,0.06)] transition-all"
          >
            Tutte le funzionalità
          </Link>
        </div>
      </section>

      {/* Channel Cards */}
      <section className="relative z-1 py-24 px-6 md:px-16 max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <div className="text-[11px] font-bold tracking-[4px] text-[var(--color-cyan)] uppercase mb-4">
            Canali
          </div>
          <h2 className="font-[family-name:var(--font-display)] text-[clamp(26px,4vw,40px)] font-bold tracking-[3px] mb-4">
            Un canale. Tutti i canali.
          </h2>
          <p className="text-[var(--color-muted)] text-base max-w-[500px] mx-auto">
            Ogni piattaforma ha il suo modulo dedicato. Scegli quelli che ti servono.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {channels.map((ch) => (
            <Link
              key={ch.name}
              href={ch.href}
              className="group relative bg-[var(--color-bg2)] border border-[var(--color-border)] rounded-2xl p-10 text-center no-underline overflow-hidden hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)] transition-all duration-300"
            >
              {/* Top glow line */}
              <div
                className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `linear-gradient(90deg, transparent, ${ch.color}, transparent)` }}
              />
              {/* Background glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: `radial-gradient(circle at 50% 0%, ${ch.color}15, transparent 70%)` }}
              />

              <span className="flex justify-center mb-5 relative"><ChannelIcon name={ch.icon} size={48} /></span>
              <div
                className="font-[family-name:var(--font-display)] text-lg font-bold tracking-[4px] uppercase mb-4 relative"
                style={{ color: ch.color }}
              >
                {ch.name}
              </div>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-6 relative">
                {ch.desc}
              </p>
              <span
                className="inline-flex items-center gap-2 text-sm font-semibold relative transition-colors"
                style={{ color: ch.color }}
              >
                Scopri di più
                <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="relative z-1 py-24 px-6 md:px-16 border-t border-b border-[var(--color-border)] bg-[var(--color-bg2)]">
        <div className="max-w-[1100px] mx-auto">
          <div className="text-center mb-16">
            <div className="text-[11px] font-bold tracking-[4px] text-[var(--color-cyan)] uppercase mb-4">
              Processo
            </div>
            <h2 className="font-[family-name:var(--font-display)] text-[clamp(24px,3.5vw,36px)] font-bold tracking-[3px]">
              Come funziona
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            <div className="hidden lg:block absolute top-9 left-20 right-20 h-px bg-gradient-to-r from-transparent via-[var(--color-border)] to-transparent" />
            {steps.map((s) => (
              <div key={s.num} className="text-center">
                <div className="w-[72px] h-[72px] rounded-full bg-[var(--color-bg)] border-2 border-[var(--color-border)] flex items-center justify-center mx-auto mb-5 font-[family-name:var(--font-display)] text-xl font-bold text-[var(--color-cyan)] relative z-1 shadow-[0_0_20px_rgba(0,87,255,0.2)]">
                  {s.num}
                </div>
                <h4 className="text-[15px] font-bold mb-2">{s.title}</h4>
                <p className="text-[13px] text-[var(--color-muted)] leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-1 py-28 px-6 md:px-16 text-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(0,87,255,0.08)_0%,transparent_70%)] pointer-events-none" />
        <h2 className="font-[family-name:var(--font-display)] text-[clamp(28px,5vw,48px)] font-black tracking-[4px] mb-5 relative">
          Pronto a partire?
        </h2>
        <p className="text-[var(--color-muted)] text-[17px] mb-10 relative max-w-[460px] mx-auto">
          Scegli i tuoi canali o risparmia con un pacchetto completo.
        </p>
        <div className="flex gap-4 justify-center flex-wrap relative">
          <Link
            href="/sistema/pacchetti"
            className="bg-[var(--color-blue)] text-white px-10 py-4 rounded-xl text-[15px] font-bold no-underline shadow-[0_4px_30px_rgba(0,87,255,0.35)] hover:bg-[#0045CC] hover:-translate-y-0.5 transition-all"
          >
            Vedi i pacchetti
          </Link>
          <Link
            href="/contatti"
            className="border border-[var(--color-border)] text-[var(--color-white)] px-10 py-4 rounded-xl text-[15px] font-semibold no-underline hover:border-[var(--color-cyan)] hover:text-[var(--color-cyan)] transition-all"
          >
            Contattaci
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
