"use client";
import Image from "next/image";
import { useState } from "react";
import ChannelIcon from "./ChannelIcon";

/* ── Moduli singoli ── */
const modules = [
  {
    icon: "app",
    name: "App Mobile",
    price: "249",
    monthly: "setup + €19,90/mese",
    color: "var(--color-cyan)",
    wl: true,
    perks: [
      "iOS + Android, branding cliente",
      "Pannello admin nativo",
      "Push notifications",
      "Calendario prenotazioni",
      "Annunci in-app",
      "OTA updates inclusi",
      "Server condiviso incluso",
    ],
  },
  {
    icon: "discord",
    name: "Bot Discord",
    price: "149",
    monthly: "setup + €14,90/mese",
    color: "var(--color-discord)",
    perks: [
      "Prenotazioni via menu interattivi",
      "Apertura ticket automatica",
      "Gestione slot staff",
      "Benvenuto nuovi membri",
      "Comandi custom",
      "Server condiviso incluso",
    ],
  },
  {
    icon: "telegram",
    name: "Bot Telegram",
    price: "149",
    monthly: "setup + €14,90/mese",
    color: "var(--color-telegram)",
    perks: [
      "Prenotazioni inline",
      "Notifiche clienti automatiche",
      "Pannello staff con approvazione",
      "Topic per ogni prenotazione",
      "Comandi custom",
      "Server condiviso incluso",
    ],
  },
  {
    icon: "whatsapp",
    name: "WhatsApp Business",
    price: "249",
    monthly: "setup + €24,90/mese",
    color: "var(--color-whatsapp)",
    perks: [
      "Prenotazioni via chat",
      "Conferme e promemoria automatici",
      "Cloud API ufficiale Meta",
      "Bridge con tutti i canali attivi",
      "Server condiviso incluso",
    ],
    note: "Numero dedicato a carico del cliente. Richiede una SIM non registrata su WhatsApp personale.",
  },
];

/* ── Bundle ── */
const bundles = [
  {
    channels: ["app"],
    name: "Solo App",
    price: "249",
    monthly: "+ €19,90/mese",
    save: "— prezzo modulo singolo",
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
    monthly: "+ €27,90/mese",
    save: "Risparmio €69 sul setup",
    features: [
      "App Mobile white label",
      "Bot Discord prenotazioni",
      "Bridge App ↔ Discord",
      "Push notifications",
      "Server dedicato incluso",
      "Dispositivi illimitati",
    ],
  },
  {
    channels: ["app", "telegram"],
    name: "App + Telegram",
    price: "329",
    monthly: "+ €27,90/mese",
    save: "Risparmio €69 sul setup",
    features: [
      "App Mobile white label",
      "Bot Telegram prenotazioni",
      "Bridge App ↔ Telegram",
      "Push notifications",
      "Server dedicato incluso",
      "Dispositivi illimitati",
    ],
  },
  {
    channels: ["app", "discord", "telegram"],
    name: "Full Social",
    price: "449",
    monthly: "+ €37,90/mese",
    save: "Risparmio €148 sul setup",
    featured: true,
    features: [
      "App Mobile white label",
      "Bot Discord prenotazioni",
      "Bot Telegram prenotazioni",
      "Bridge Discord ↔ Telegram ↔ App",
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
    monthly: "+ €54,90/mese",
    save: "Risparmio €196 sul setup",
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

/* ── Add-on ── */
const included = [
  "Bug fix e aggiornamenti di sicurezza",
  "Modifiche minori: testi, prezzi, orari, colori",
  "Supporto via ticket — risposta entro 48h",
];
const addons = [
  { label: "Nuova schermata app", price: "€59 cad." },
  { label: "Nuovo comando bot", price: "€39 cad." },
  { label: "Integrazione calendario esterno", price: "€99" },
  { label: "Supporto prioritario (risposta 4h)", price: "+€9,90/mese" },
  { label: "Sviluppo custom", price: "€60/h (min. 2h)" },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="relative z-1 py-24 px-6 md:px-16 bg-[var(--color-bg2)] border-t border-b border-[var(--color-border)]"
    >
      <div className="max-w-[1340px] mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="text-[11px] font-bold tracking-[4px] text-[var(--color-cyan)] uppercase mb-4">
            Prezzi
          </div>
          <h2 className="font-[family-name:var(--font-display)] text-[clamp(26px,4vw,40px)] font-bold tracking-[3px] mb-4">
            Moduli a la carte
          </h2>
          <p className="text-sm text-[var(--color-muted)]">
            Ogni componente e venduto singolarmente o in bundle. Tutto e{" "}
            <strong className="text-[var(--color-cyan)]">white label</strong> di
            default — branding, colori e nome del cliente.
          </p>
        </div>

        {/* ── Moduli singoli ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          {modules.map((m) => (
            <div
              key={m.name}
              className="bg-[var(--color-bg)] border border-[var(--color-border)] rounded-2xl p-7 flex flex-col hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] transition-all"
              style={{ "--mc": m.color } as React.CSSProperties}
            >
              {m.wl && (
                <div className="inline-block self-start bg-[rgba(0,174,239,0.12)] border border-[rgba(0,174,239,0.3)] rounded-full text-[10px] font-bold tracking-[1.5px] text-[var(--color-cyan)] px-2.5 py-0.5 uppercase mb-3">
                  White Label
                </div>
              )}
              <span className="flex justify-center mb-3"><ChannelIcon name={m.icon} size={40} /></span>
              <div className="font-[family-name:var(--font-display)] text-xs tracking-[3px] text-[var(--color-white)] text-center uppercase mb-4">
                {m.name}
              </div>
              <div
                className="font-[family-name:var(--font-display)] text-4xl font-black text-center leading-none"
                style={{ color: m.color }}
              >
                <sup className="text-lg font-normal text-[var(--color-muted)] align-top mr-0.5">
                  €
                </sup>
                {m.price}
              </div>
              <div className="text-xs text-[var(--color-muted)] text-center mt-1.5 mb-5">
                {m.monthly}
              </div>
              <ul className="flex flex-col gap-2 text-xs text-[var(--color-muted)] mb-5 flex-1">
                {m.perks.map((p) => (
                  <li key={p} className="flex items-start gap-2">
                    <span className="text-[var(--color-green)] font-bold">
                      ✓
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
              {m.note && (
                <div className="bg-[rgba(37,211,102,0.08)] border border-[rgba(37,211,102,0.2)] rounded-lg p-2.5 text-[11px] text-[#aaa] leading-relaxed mb-4">
                  ⚠️{" "}
                  <strong className="text-[var(--color-whatsapp)]">
                    {m.note}
                  </strong>
                </div>
              )}
              <a
                href="/contatti"
                className="block text-center py-3 rounded-xl text-sm font-bold no-underline border border-[var(--color-border)] text-[var(--color-white)] hover:border-[var(--color-cyan)] hover:text-[var(--color-cyan)] transition-all"
              >
                Richiedi
              </a>
            </div>
          ))}
        </div>

        {/* ── Bundle ── */}
        <div className="text-[11px] font-bold tracking-[4px] text-[var(--color-cyan)] uppercase mb-3">
          Bundle
        </div>
        <h3 className="font-[family-name:var(--font-display)] text-[clamp(20px,3vw,30px)] font-bold tracking-[2px] mb-2">
          Combinazioni pronte — risparmio garantito
        </h3>
        <p className="text-sm text-[var(--color-muted)] mb-10">
          Piu moduli combini, piu risparmi sul setup. Il canone mensile scala
          proporzionalmente.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
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
                  Piu scelto
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
                  €
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
                    <span className="text-[var(--color-green)] font-bold">
                      ✓
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              {b.note && (
                <div className="bg-[rgba(37,211,102,0.08)] border border-[rgba(37,211,102,0.2)] rounded-lg p-2 text-[11px] text-[#aaa] leading-relaxed mb-3.5">
                  ⚠️{" "}
                  <strong className="text-[var(--color-whatsapp)]">
                    {b.note}
                  </strong>
                </div>
              )}
              <a
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
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-[13px] text-[var(--color-muted)] mb-16">
          Vuoi combinare moduli in modo diverso?{" "}
          <a
            href="/contatti"
            className="text-[var(--color-cyan)] no-underline hover:underline"
          >
            Scrivici per un preventivo su misura &rarr;
          </a>
        </p>

        {/* ── Assistenza & Add-on ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[860px] mx-auto">
          <div className="bg-[#111] border border-[#222] rounded-2xl p-7">
            <div className="text-xs font-bold tracking-[2px] text-[var(--color-cyan)] uppercase mb-3">
              Incluso nel canone
            </div>
            <ul className="flex flex-col gap-3">
              {included.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-sm text-[#ccc]"
                >
                  <span className="text-[var(--color-cyan)] mt-0.5">✓</span>
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
                <li
                  key={a.label}
                  className="flex justify-between items-center text-sm text-[#ccc]"
                >
                  <span>{a.label}</span>
                  <span className="text-white font-bold whitespace-nowrap ml-3">
                    {a.price}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
