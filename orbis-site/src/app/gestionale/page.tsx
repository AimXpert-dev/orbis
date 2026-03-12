import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Orbis Gestionale — Gestionale Riparazioni",
  description:
    "Gestisci riparazioni, clienti, magazzino e documenti con tracking pubblico, notifiche automatiche e dashboard in tempo reale.",
};

const features = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
      </svg>
    ),
    title: "Workflow Riparazioni",
    desc: "Gestisci l'intero ciclo: Accettato, In lavorazione, Attesa ricambi, Pronto, Consegnato. Storico completo di ogni cambio stato con timestamp.",
    color: "#A78BFA",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    title: "Anagrafica Clienti",
    desc: "Gestione completa dei clienti con nome, telefono, email, codice fiscale e note. Ricerca rapida, filtri e import/export CSV.",
    color: "#34D399",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
        <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
        <line x1="12" y1="22.08" x2="12" y2="12"/>
      </svg>
    ),
    title: "Magazzino Articoli",
    desc: "Inventario con categorie, prezzi acquisto/vendita, scorte minime con allerta automatica, posizione scaffale e collegamento diretto alle riparazioni.",
    color: "#F59E0B",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/>
        <polyline points="10 17 15 12 10 7"/>
        <line x1="15" y1="12" x2="3" y2="12"/>
      </svg>
    ),
    title: "Tracking Pubblico",
    desc: "I tuoi clienti possono seguire lo stato della riparazione inserendo il codice univoco, senza bisogno di account. Trasparenza totale.",
    color: "#00AEEF",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
    title: "Notifiche Automatiche",
    desc: "Email automatiche ad ogni cambio stato con template personalizzabili. Integrazione WhatsApp per comunicare con i clienti in un tap.",
    color: "#34D399",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10"/>
        <line x1="12" y1="20" x2="12" y2="4"/>
        <line x1="6" y1="20" x2="6" y2="14"/>
      </svg>
    ),
    title: "Dashboard e Statistiche",
    desc: "Riparazioni mensili, ricavi, tempo medio di lavorazione, analisi per tipo dispositivo. Promemoria automatici per riparazioni ferme da troppo tempo.",
    color: "#60A5FA",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="16" y1="13" x2="8" y2="13"/>
        <line x1="16" y1="17" x2="8" y2="17"/>
      </svg>
    ),
    title: "Documenti e DDT",
    desc: "Genera ricevute professionali con barcode, etichette per stampanti termiche 58/80mm e documenti di trasporto con numerazione automatica.",
    color: "#F472B6",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        <path d="M9 12l2 2 4-4"/>
      </svg>
    ),
    title: "Multi-Negozio e Ruoli",
    desc: "Supporto per più sedi con separazione dati. Ruoli Admin e Tecnico con permessi differenziati. Ogni collaboratore vede solo ciò che gli compete.",
    color: "#A78BFA",
  },
];

const benefits = [
  { num: "5", label: "Stati workflow riparazione" },
  { num: "PDF", label: "Ricevute, etichette e DDT" },
  { num: "24/7", label: "Accesso da qualsiasi dispositivo" },
  { num: "0", label: "Installazioni richieste" },
];

export default function GestionalePage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative z-1 min-h-[85vh] flex items-center px-6 md:px-16 pt-28 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(124,58,237,0.1)_0%,transparent_60%)] pointer-events-none" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(124,58,237,0.06)_0%,transparent_70%)] pointer-events-none hidden lg:block" />

        <div className="max-w-[1200px] mx-auto w-full relative grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs text-[var(--color-muted)] mb-8">
              <Link href="/" className="hover:text-[var(--color-white)] transition-colors no-underline">Home</Link>
              <span>/</span>
              <span className="text-[#A78BFA]">Gestionale</span>
            </div>

            <div className="inline-flex items-center gap-2.5 bg-[rgba(124,58,237,0.1)] border border-[rgba(124,58,237,0.25)] rounded-full px-4 py-1.5 text-[11px] font-bold tracking-[2px] text-[#A78BFA] uppercase mb-8">
              <span className="w-2 h-2 rounded-full bg-[#A78BFA] animate-pulse" />
              Orbis Gestionale
            </div>

            <h1 className="font-[family-name:var(--font-display)] text-[clamp(32px,5vw,60px)] font-black tracking-[4px] leading-[1.1] mb-6">
              Riparazioni.<br />
              <span className="text-[#A78BFA]">Sotto controllo.</span>
            </h1>

            <p className="text-[var(--color-muted)] text-lg leading-relaxed mb-10 max-w-[520px]">
              Il gestionale completo per centri riparazione.
              Workflow, clienti, magazzino, documenti e tracking pubblico —
              tutto in un&apos;unica piattaforma accessibile da qualsiasi dispositivo.
            </p>

            <div className="flex gap-4 flex-wrap">
              <Link
                href="/contatti"
                className="bg-[#7C3AED] text-white px-8 py-3.5 rounded-xl text-[15px] font-bold no-underline shadow-[0_4px_30px_rgba(124,58,237,0.35)] hover:bg-[#6D28D9] hover:-translate-y-0.5 transition-all"
              >
                Richiedi una demo
              </Link>
              <Link
                href="/contatti"
                className="border border-[rgba(124,58,237,0.3)] text-[#A78BFA] px-8 py-3.5 rounded-xl text-[15px] font-semibold no-underline hover:bg-[rgba(124,58,237,0.06)] transition-all"
              >
                Contattaci
              </Link>
            </div>
          </div>

          {/* Dashboard mockup */}
          <div className="hidden lg:flex justify-center">
            <div className="w-[460px] h-[320px] bg-[var(--color-bg2)] border border-[rgba(124,58,237,0.2)] rounded-2xl overflow-hidden shadow-[0_0_80px_rgba(124,58,237,0.12)] p-5">
              {/* Mockup header */}
              <div className="flex items-center gap-2 mb-5">
                <div className="w-2.5 h-2.5 rounded-full bg-[rgba(124,58,237,0.4)]" />
                <div className="flex-1 h-2 bg-[rgba(124,58,237,0.1)] rounded-full" />
                <div className="text-[10px] text-[var(--color-muted)] font-[family-name:var(--font-display)] tracking-[2px]">ORBIS GESTIONALE</div>
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-3 gap-3 mb-4">
                {[
                  { label: "In lavorazione", value: "12", color: "#A78BFA" },
                  { label: "Pronte", value: "8", color: "#34D399" },
                  { label: "Oggi", value: "5", color: "#60A5FA" },
                ].map((s) => (
                  <div key={s.label} className="bg-[var(--color-bg)] rounded-lg p-3 border border-[var(--color-border)]">
                    <div className="text-[10px] text-[var(--color-muted)] mb-1">{s.label}</div>
                    <div className="font-[family-name:var(--font-display)] text-sm font-bold" style={{ color: s.color }}>{s.value}</div>
                  </div>
                ))}
              </div>

              {/* Chart placeholder */}
              <div className="bg-[var(--color-bg)] rounded-lg p-4 border border-[var(--color-border)] mb-3 h-[90px] relative overflow-hidden">
                <div className="text-[10px] text-[var(--color-muted)] mb-2">Riparazioni mensili</div>
                <div className="flex items-end gap-1.5 h-[52px]">
                  {[35, 55, 45, 70, 60, 85, 75, 90, 65, 80, 95, 88].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-t-sm"
                      style={{
                        height: `${h}%`,
                        background: i === 11 ? '#A78BFA' : 'rgba(124,58,237,0.25)',
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* List row */}
              <div className="flex flex-col gap-1.5">
                {[
                  { text: "REP-20260312-0047 — iPhone 15 Pro", status: "In lavorazione", color: "#A78BFA" },
                  { text: "REP-20260312-0048 — MacBook Air M3", status: "Pronto", color: "#34D399" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between bg-[var(--color-bg)] rounded-lg px-3 py-2 border border-[var(--color-border)]">
                    <span className="text-[10px] text-[var(--color-muted)]">{item.text}</span>
                    <span className="text-[10px] font-bold" style={{ color: item.color }}>{item.status}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <div className="relative z-1 flex justify-center gap-12 md:gap-20 flex-wrap px-6 md:px-16 py-10 border-t border-b border-[var(--color-border)] bg-[rgba(13,17,32,0.7)]">
        {benefits.map((b) => (
          <div key={b.label} className="text-center">
            <div className="font-[family-name:var(--font-display)] text-3xl font-bold text-[var(--color-white)] leading-none">
              <span className="text-[#A78BFA]">{b.num}</span>
            </div>
            <div className="text-xs text-[var(--color-muted)] tracking-wider uppercase mt-1.5 max-w-[140px]">{b.label}</div>
          </div>
        ))}
      </div>

      {/* Features */}
      <section className="relative z-1 py-24 px-6 md:px-16">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <div className="text-[11px] font-bold tracking-[4px] text-[#A78BFA] uppercase mb-4">
              Funzionalità
            </div>
            <h2 className="font-[family-name:var(--font-display)] text-[clamp(26px,4vw,40px)] font-bold tracking-[3px] mb-4">
              Tutto quello che ti serve
            </h2>
            <p className="text-[var(--color-muted)] text-base max-w-[500px] mx-auto">
              Ogni funzionalità è pensata per semplificare il lavoro quotidiano del tuo centro riparazioni.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f) => (
              <div
                key={f.title}
                className="group bg-[var(--color-bg2)] border border-[var(--color-border)] rounded-2xl p-7 hover:border-[rgba(124,58,237,0.3)] hover:-translate-y-1 hover:shadow-[0_16px_50px_rgba(0,0,0,0.4)] transition-all"
              >
                <div
                  className="w-[50px] h-[50px] rounded-xl flex items-center justify-center mb-5"
                  style={{ color: f.color, background: `${f.color}15`, border: `1px solid ${f.color}25` }}
                >
                  {f.icon}
                </div>
                <h3 className="text-[15px] font-bold mb-3">{f.title}</h3>
                <p className="text-[13px] text-[var(--color-muted)] leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration section */}
      <section className="relative z-1 py-20 px-6 md:px-16 border-t border-[var(--color-border)] bg-[var(--color-bg2)]">
        <div className="max-w-[900px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="text-[11px] font-bold tracking-[4px] text-[#A78BFA] uppercase mb-4">
                Integrazione
              </div>
              <h2 className="font-[family-name:var(--font-display)] text-[clamp(22px,3.5vw,36px)] font-bold tracking-[3px] mb-5">
                Connesso con Orbis Sistema
              </h2>
              <p className="text-[var(--color-muted)] text-base leading-relaxed mb-6">
                Il Gestionale si integra con Orbis Sistema. I clienti si sincronizzano,
                le notifiche partono su tutti i canali e hai una visione completa
                del tuo business.
              </p>
              <ul className="flex flex-col gap-3">
                {[
                  "Anagrafica clienti condivisa",
                  "Notifiche multi-canale (Email, WhatsApp, Telegram)",
                  "Dashboard unificata",
                  "Un unico login per tutto",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-[var(--color-muted)]">
                    <span className="text-[#A78BFA] font-bold">&#10003;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex justify-center">
              <div className="relative">
                {/* Sistema box */}
                <div className="bg-[var(--color-bg)] border border-[rgba(0,87,255,0.3)] rounded-2xl p-5 w-[200px] shadow-[0_0_30px_rgba(0,87,255,0.1)]">
                  <div className="text-[11px] font-bold tracking-[2px] text-[var(--color-cyan)] uppercase mb-2">Sistema</div>
                  <div className="text-[13px] text-[var(--color-muted)]">Prenotazioni, canali, comunicazioni</div>
                </div>

                {/* Arrow */}
                <div className="flex justify-center my-3">
                  <div className="flex flex-col items-center gap-1">
                    <div className="w-px h-5 bg-[rgba(124,58,237,0.4)]" />
                    <svg width="12" height="8" viewBox="0 0 12 8" fill="#A78BFA"><path d="M6 8L0 0h12L6 8z"/></svg>
                    <svg width="12" height="8" viewBox="0 0 12 8" fill="#A78BFA" className="rotate-180"><path d="M6 8L0 0h12L6 8z"/></svg>
                    <div className="w-px h-5 bg-[rgba(124,58,237,0.4)]" />
                  </div>
                </div>

                {/* Gestionale box */}
                <div className="bg-[var(--color-bg)] border border-[rgba(124,58,237,0.3)] rounded-2xl p-5 w-[200px] shadow-[0_0_30px_rgba(124,58,237,0.1)]">
                  <div className="text-[11px] font-bold tracking-[2px] text-[#A78BFA] uppercase mb-2">Gestionale</div>
                  <div className="text-[13px] text-[var(--color-muted)]">Riparazioni, clienti, magazzino</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-1 py-28 px-6 md:px-16 text-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(124,58,237,0.07)_0%,transparent_70%)] pointer-events-none" />
        <div className="relative max-w-[600px] mx-auto">
          <h2 className="font-[family-name:var(--font-display)] text-[clamp(28px,5vw,48px)] font-black tracking-[4px] mb-5">
            Prova Orbis Gestionale
          </h2>
          <p className="text-[var(--color-muted)] text-[17px] mb-10 max-w-[460px] mx-auto">
            Richiedi una demo gratuita. Ti mostriamo come funziona
            applicato al tuo centro riparazioni.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/contatti"
              className="bg-[#7C3AED] text-white px-10 py-4 rounded-xl text-[15px] font-bold no-underline shadow-[0_4px_30px_rgba(124,58,237,0.35)] hover:bg-[#6D28D9] hover:-translate-y-0.5 transition-all"
            >
              Richiedi una demo gratuita
            </Link>
            <Link
              href="/"
              className="border border-[var(--color-border)] text-[var(--color-white)] px-10 py-4 rounded-xl text-[15px] font-semibold no-underline hover:border-[#A78BFA] hover:text-[#A78BFA] transition-all"
            >
              Scopri tutte le soluzioni
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
