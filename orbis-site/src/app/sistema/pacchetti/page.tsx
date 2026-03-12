import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChannelIcon from "@/components/ChannelIcon";

export const metadata: Metadata = {
  title: "Pacchetti — Sistema Orbis",
  description: "Bundle multicanale con risparmio garantito. App + Discord + Telegram + WhatsApp.",
};

const bundles = [
  {
    channels: ["app"],
    name: "Solo App",
    price: "249",
    monthly: "+ \u20AC19,90/mese",
    save: "Prezzo modulo singolo",
    features: [
      "App Mobile white label",
      "Push notifications",
      "Pannello admin",
      "Server condiviso incluso",
    ],
  },
  {
    channels: ["app", "discord"],
    name: "App + Discord",
    price: "329",
    monthly: "+ \u20AC27,90/mese",
    save: "Risparmio \u20AC69 sul setup",
    features: [
      "App Mobile white label",
      "Bot Discord prenotazioni",
      "Bridge App \u2194 Discord",
      "Push notifications",
      "Server dedicato incluso",
      "Dispositivi illimitati",
    ],
  },
  {
    channels: ["app", "telegram"],
    name: "App + Telegram",
    price: "329",
    monthly: "+ \u20AC27,90/mese",
    save: "Risparmio \u20AC69 sul setup",
    features: [
      "App Mobile white label",
      "Bot Telegram prenotazioni",
      "Bridge App \u2194 Telegram",
      "Push notifications",
      "Server dedicato incluso",
      "Dispositivi illimitati",
    ],
  },
  {
    channels: ["app", "discord", "telegram"],
    name: "Full Social",
    price: "449",
    monthly: "+ \u20AC37,90/mese",
    save: "Risparmio \u20AC148 sul setup",
    featured: true,
    features: [
      "App Mobile white label",
      "Bot Discord prenotazioni",
      "Bot Telegram prenotazioni",
      "Bridge Discord \u2194 Telegram \u2194 App",
      "Annunci multicanale sincronizzati",
      "Ticket bidirezionale",
      "Push notifications",
      "Server dedicato incluso",
      "Dispositivi illimitati",
    ],
  },
  {
    channels: ["app", "discord", "telegram", "whatsapp"],
    name: "Tutto Incluso",
    price: "699",
    monthly: "+ \u20AC54,90/mese",
    save: "Risparmio \u20AC196 sul setup",
    gold: true,
    features: [
      "App Mobile white label",
      "Bot Discord + Telegram",
      "WhatsApp Business",
      "Bridge tutti i canali",
      "Annunci multicanale",
      "Ticket bidirezionale",
      "Push notifications",
      "Dominio custom",
      "Supporto prioritario 7/7",
      "Server dedicato incluso",
      "Dispositivi illimitati",
    ],
    note: "WhatsApp: numero dedicato a carico del cliente.",
  },
];

const included = [
  "Bug fix e aggiornamenti di sicurezza",
  "Modifiche minori: testi, prezzi, orari, colori",
  "Supporto via ticket — risposta entro 48h",
];

const addons = [
  { label: "Nuova schermata app", price: "\u20AC59 cad." },
  { label: "Nuovo comando bot", price: "\u20AC39 cad." },
  { label: "Integrazione calendario esterno", price: "\u20AC99" },
  { label: "Supporto prioritario (risposta 4h)", price: "+\u20AC9,90/mese" },
  { label: "Sviluppo custom", price: "\u20AC60/h (min. 2h)" },
];

export default function PacchettiPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative z-1 pt-32 pb-16 px-6 md:px-16 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,87,255,0.08)_0%,transparent_60%)] pointer-events-none" />
        <div className="relative">
          {/* Breadcrumb */}
          <div className="flex items-center justify-center gap-2 text-xs text-[var(--color-muted)] mb-8">
            <Link href="/" className="hover:text-[var(--color-white)] transition-colors no-underline">Home</Link>
            <span>/</span>
            <Link href="/sistema" className="hover:text-[var(--color-white)] transition-colors no-underline">Sistema</Link>
            <span>/</span>
            <span className="text-[var(--color-cyan)]">Pacchetti</span>
          </div>

          <div className="text-[11px] font-bold tracking-[4px] text-[var(--color-cyan)] uppercase mb-4">
            Pacchetti
          </div>
          <h1 className="font-[family-name:var(--font-display)] text-[clamp(28px,4.5vw,48px)] font-black tracking-[4px] mb-5">
            Più canali. Meno costi.
          </h1>
          <p className="text-[var(--color-muted)] text-[17px] max-w-[540px] mx-auto mb-4">
            Combina i moduli e risparmia sul setup. Ogni pacchetto include
            bridge bidirezionale e sincronizzazione in tempo reale.
          </p>
          <p className="text-sm text-[var(--color-muted)]">
            Cerchi un singolo modulo?{" "}
            <Link href="/sistema/discord" className="text-[var(--color-discord)] no-underline hover:underline">Discord</Link>
            {" · "}
            <Link href="/sistema/telegram" className="text-[var(--color-telegram)] no-underline hover:underline">Telegram</Link>
            {" · "}
            <Link href="/sistema/app-mobile" className="text-[var(--color-cyan)] no-underline hover:underline">App Mobile</Link>
          </p>
        </div>
      </section>

      {/* Bundles */}
      <section className="relative z-1 py-12 px-6 md:px-16">
        <div className="max-w-[1340px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {bundles.map((b) => (
              <div
                key={b.name}
                className={`relative rounded-2xl p-6 flex flex-col hover:-translate-y-1.5 hover:shadow-[0_16px_50px_rgba(0,0,0,0.5)] transition-all ${
                  b.featured
                    ? "bg-gradient-to-br from-[rgba(0,87,255,0.08)] to-[var(--color-bg)] border border-[var(--color-blue)] shadow-[0_0_40px_rgba(0,87,255,0.15)]"
                    : b.gold
                      ? "bg-gradient-to-br from-[rgba(255,215,0,0.05)] to-[var(--color-bg)] border border-[rgba(255,215,0,0.3)]"
                      : "bg-[var(--color-bg)] border border-[var(--color-border)]"
                }`}
              >
                {b.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[var(--color-blue)] text-white text-[10px] font-bold tracking-[2px] px-3.5 py-0.5 rounded-full whitespace-nowrap uppercase">
                    Più scelto
                  </div>
                )}
                {b.gold && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#b8860b] to-[#ffd700] text-white text-[10px] font-bold tracking-[2px] px-3.5 py-0.5 rounded-full whitespace-nowrap uppercase">
                    Full Stack
                  </div>
                )}

                <div className="flex gap-2 justify-center mb-4">
                  {b.channels.map((c, i) => (
                    <span key={i}><ChannelIcon name={c} size={24} /></span>
                  ))}
                </div>
                <div
                  className={`font-[family-name:var(--font-display)] text-[11px] tracking-[3px] text-center mb-2.5 uppercase ${
                    b.gold ? "text-[#ffd700]" : "text-[var(--color-muted)]"
                  }`}
                >
                  {b.name}
                </div>
                <div className="font-[family-name:var(--font-display)] text-[34px] font-black text-[var(--color-white)] text-center leading-none mb-1">
                  <sup className="text-base font-normal text-[var(--color-muted)] align-top mr-0.5">
                    &euro;
                  </sup>
                  {b.price}
                </div>
                <div className="text-xs text-[var(--color-muted)] text-center mb-1.5">
                  {b.monthly}
                </div>
                <div className="text-[11px] font-bold text-[var(--color-green)] text-center mb-4 tracking-wide">
                  {b.save}
                </div>
                <hr className="border-[var(--color-border)] mb-4" />
                <ul className="flex flex-col gap-2 text-xs text-[var(--color-muted)] mb-5 flex-1">
                  {b.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <span className="text-[var(--color-green)] font-bold">&#10003;</span>
                      {f}
                    </li>
                  ))}
                </ul>
                {b.note && (
                  <div className="bg-[rgba(37,211,102,0.08)] border border-[rgba(37,211,102,0.2)] rounded-lg p-2 text-[11px] text-[#aaa] leading-relaxed mb-3.5">
                    &#9888;&#65039;{" "}
                    <strong className="text-[var(--color-whatsapp)]">{b.note}</strong>
                  </div>
                )}
                <Link
                  href="/contatti"
                  className={`block text-center py-3 rounded-xl text-sm font-bold no-underline transition-all ${
                    b.featured
                      ? "bg-[var(--color-blue)] text-white shadow-[0_4px_20px_rgba(0,87,255,0.3)] hover:bg-[#0045CC]"
                      : b.gold
                        ? "border border-[rgba(255,215,0,0.4)] text-[#ffd700] hover:bg-[rgba(255,215,0,0.06)]"
                        : "border border-[var(--color-border)] text-[var(--color-white)] hover:border-[var(--color-cyan)] hover:text-[var(--color-cyan)]"
                  }`}
                >
                  {b.gold ? "Contattaci" : "Inizia"}
                </Link>
              </div>
            ))}
          </div>

          <p className="text-center text-[13px] text-[var(--color-muted)] mt-8">
            Vuoi combinare moduli in modo diverso?{" "}
            <Link href="/contatti" className="text-[var(--color-cyan)] no-underline hover:underline">
              Scrivici per un preventivo su misura &rarr;
            </Link>
          </p>
        </div>
      </section>

      {/* Assistenza & Add-on */}
      <section className="relative z-1 py-20 px-6 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[860px] mx-auto">
          <div className="bg-[#111] border border-[#222] rounded-2xl p-7">
            <div className="text-xs font-bold tracking-[2px] text-[var(--color-cyan)] uppercase mb-3">
              Incluso nel canone
            </div>
            <ul className="flex flex-col gap-3">
              {included.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-[#ccc]">
                  <span className="text-[var(--color-cyan)] mt-0.5">&#10003;</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-[#111] border border-[#222] rounded-2xl p-7">
            <div className="text-xs font-bold tracking-[2px] text-[#f4a261] uppercase mb-3">
              Add-on disponibili
            </div>
            <ul className="flex flex-col gap-3">
              {addons.map((a) => (
                <li key={a.label} className="flex justify-between items-center text-sm text-[#ccc]">
                  <span>{a.label}</span>
                  <span className="text-white font-bold whitespace-nowrap ml-3">{a.price}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-1 py-24 px-6 md:px-16 text-center border-t border-[var(--color-border)] bg-[var(--color-bg2)]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(0,87,255,0.06)_0%,transparent_70%)] pointer-events-none" />
        <h2 className="font-[family-name:var(--font-display)] text-[clamp(24px,4vw,40px)] font-black tracking-[4px] mb-5 relative">
          Pronto a partire?
        </h2>
        <p className="text-[var(--color-muted)] text-base mb-10 relative max-w-[440px] mx-auto">
          Contattaci per una consulenza gratuita. Ti aiutiamo a scegliere il piano giusto.
        </p>
        <div className="flex gap-4 justify-center flex-wrap relative">
          <a
            href="https://t.me/ORBISITA"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[var(--color-telegram)] text-white px-8 py-4 rounded-xl text-[15px] font-bold no-underline hover:-translate-y-0.5 hover:shadow-[0_4px_30px_rgba(42,171,238,0.4)] transition-all"
          >
            Telegram
          </a>
          <a
            href="https://wa.me/393517246141"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[var(--color-whatsapp)] text-white px-8 py-4 rounded-xl text-[15px] font-bold no-underline hover:-translate-y-0.5 hover:shadow-[0_4px_30px_rgba(37,211,102,0.4)] transition-all"
          >
            WhatsApp
          </a>
          <a
            href="https://discord.gg/aimxpert"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[var(--color-discord)] text-white px-8 py-4 rounded-xl text-[15px] font-bold no-underline hover:-translate-y-0.5 hover:shadow-[0_4px_30px_rgba(88,101,242,0.4)] transition-all"
          >
            Discord
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}
