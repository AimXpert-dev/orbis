import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChannelIcon from "@/components/ChannelIcon";

export const metadata: Metadata = {
  title: "Funzionalita — ORBIS",
  description: "Scopri tutte le funzionalita di ORBIS: Discord, Telegram, App Mobile, WhatsApp e molto altro.",
};

const channels = [
  {
    icon: "discord",
    name: "Bot Discord",
    href: "/discord",
    color: "#5865F2",
    highlights: ["Prenotazioni interattive", "Ticket automatici", "Gestione staff", "Bridge bidirezionale", "Annunci multicanale"],
  },
  {
    icon: "telegram",
    name: "Bot Telegram",
    href: "/telegram",
    color: "#2AABEE",
    highlights: ["Prenotazioni inline", "Notifiche automatiche", "Pannello staff", "Topic dedicati", "Bridge con Discord e App"],
  },
  {
    icon: "app",
    name: "App Mobile",
    href: "/app-mobile",
    color: "#00AEEF",
    highlights: ["White label completa", "Pannello admin nativo", "Push notifications", "Calendario prenotazioni", "OTA updates"],
  },
  {
    icon: "whatsapp",
    name: "WhatsApp",
    color: "#25D366",
    highlights: ["Prenotazioni via chat", "Conferme automatiche", "Cloud API ufficiale", "Bridge tutti i canali"],
    soon: true,
  },
];

const coreFeatures = [
  {
    icon: "⚡",
    title: "API Centralizzata",
    desc: "Un backend FastAPI che sincronizza tutti i canali. Slot condivisi, nessuna doppia prenotazione, dati sempre consistenti.",
    color: "var(--color-blue)",
  },
  {
    icon: "🔗",
    title: "Bridge Bidirezionale",
    desc: "Ogni messaggio viaggia tra tutti i canali attivi. Rispondi da dove vuoi, arriva ovunque.",
    color: "var(--color-cyan)",
  },
  {
    icon: "🔔",
    title: "Push Notifications",
    desc: "Notifiche in tempo reale per ogni evento. Staff e clienti sempre aggiornati.",
    color: "#FF6B35",
  },
  {
    icon: "🏷️",
    title: "White Label",
    desc: "Ogni modulo porta il brand del cliente. Logo, colori, nome — tutto personalizzabile.",
    color: "var(--color-cyan)",
  },
];

export default function FunzionalitaPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative z-1 pt-32 pb-16 px-6 md:px-16 text-center">
        <div className="text-[11px] font-bold tracking-[4px] text-[var(--color-cyan)] uppercase mb-4">
          Funzionalita
        </div>
        <h1 className="font-[family-name:var(--font-display)] text-[clamp(28px,4.5vw,48px)] font-black tracking-[4px] mb-5">
          Tutto connesso. Tutto automatico.
        </h1>
        <p className="text-[var(--color-muted)] text-[17px] max-w-[560px] mx-auto">
          Ogni canale parla con gli altri. Il tuo team gestisce tutto da un punto.
          I clienti prenotano da dove preferiscono.
        </p>
      </section>

      {/* Channel cards */}
      <section className="relative z-1 py-12 px-6 md:px-16">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {channels.map((ch) => {
            const Wrapper = ch.href ? Link : "div";
            const wrapperProps = ch.href
              ? { href: ch.href, className: "group block no-underline" }
              : { className: "group block" };

            return (
              <div
                key={ch.name}
                className="relative bg-[var(--color-bg2)] border border-[var(--color-border)] rounded-2xl p-8 overflow-hidden hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] transition-all"
              >
                {/* Top glow */}
                <div
                  className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ background: `linear-gradient(90deg, transparent, ${ch.color}, transparent)` }}
                />

                <div className="flex items-center gap-4 mb-5">
                  <span className="text-4xl"><ChannelIcon name={ch.icon} size={36} /></span>
                  <div>
                    <h3 className="text-lg font-bold" style={{ color: ch.color }}>
                      {ch.name}
                      {ch.soon && (
                        <span className="ml-2 text-xs font-normal italic text-[var(--color-cyan)]">
                          In arrivo
                        </span>
                      )}
                    </h3>
                  </div>
                </div>

                <ul className="flex flex-col gap-2 mb-6">
                  {ch.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2 text-sm text-[var(--color-muted)]">
                      <span className="font-bold mt-0.5" style={{ color: ch.color }}>&#10003;</span>
                      {h}
                    </li>
                  ))}
                </ul>

                {ch.href && (
                  <Link
                    href={ch.href}
                    className="text-sm font-semibold no-underline hover:underline"
                    style={{ color: ch.color }}
                  >
                    Scopri di piu &rarr;
                  </Link>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Core features */}
      <section className="relative z-1 py-20 px-6 md:px-16 border-t border-[var(--color-border)] bg-[var(--color-bg2)]">
        <div className="max-w-[1000px] mx-auto">
          <div className="text-center mb-14">
            <div className="text-[11px] font-bold tracking-[4px] text-[var(--color-cyan)] uppercase mb-4">
              Core
            </div>
            <h2 className="font-[family-name:var(--font-display)] text-[clamp(22px,3vw,32px)] font-bold tracking-[2px]">
              Il motore dietro ogni canale
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {coreFeatures.map((f) => (
              <div
                key={f.title}
                className="bg-[var(--color-bg)] border border-[var(--color-border)] rounded-xl p-7"
              >
                <span className="text-2xl block mb-3">{f.icon}</span>
                <h3 className="text-[15px] font-bold mb-2">{f.title}</h3>
                <p className="text-[13px] text-[var(--color-muted)] leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-1 py-20 px-6 md:px-16 text-center">
        <h2 className="font-[family-name:var(--font-display)] text-[clamp(22px,3.5vw,36px)] font-black tracking-[3px] mb-5">
          Scegli i tuoi canali
        </h2>
        <p className="text-[var(--color-muted)] text-base mb-8 max-w-[400px] mx-auto">
          Combina i moduli come vuoi o scegli un pacchetto pronto.
        </p>
        <Link
          href="/pacchetti"
          className="inline-block bg-[var(--color-blue)] text-white px-10 py-4 rounded-xl text-[15px] font-bold no-underline shadow-[0_4px_30px_rgba(0,87,255,0.35)] hover:bg-[#0045CC] hover:-translate-y-0.5 transition-all"
        >
          Vedi i pacchetti &rarr;
        </Link>
      </section>

      <Footer />
    </>
  );
}
