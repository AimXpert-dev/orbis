import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

const products = [
  {
    id: "sistema",
    name: "Orbis Hub",
    tagline: "Prenotazioni & Comunicazioni",
    desc: "Gestisci prenotazioni, clienti e comunicazioni su Discord, Telegram, App Mobile e WhatsApp — tutto sincronizzato in tempo reale da un unico centro di controllo.",
    href: "/sistema",
    color: "#0057FF",
    colorSecondary: "#00AEEF",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#00AEEF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2"/>
        <line x1="12" y1="18" x2="12.01" y2="18"/>
      </svg>
    ),
    features: [
      "Bot Discord & Telegram",
      "App Mobile white label",
      "Bridge multicanale in tempo reale",
      "Pannello staff integrato",
    ],
  },
  {
    id: "gestionale",
    name: "Orbis Repair",
    tagline: "Gestionale Riparazioni",
    desc: "Gestisci riparazioni, clienti, magazzino e documenti — con tracking pubblico, notifiche automatiche e dashboard in tempo reale. Tutto in un'unica piattaforma.",
    href: "/gestionale",
    color: "#7C3AED",
    colorSecondary: "#A78BFA",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#A78BFA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2"/>
        <path d="M8 21h8M12 17v4"/>
        <path d="M6 8h4M6 11h8"/>
      </svg>
    ),
    features: [
      "Workflow riparazioni completo",
      "Anagrafica clienti e magazzino",
      "Tracking pubblico per clienti",
      "Notifiche email e WhatsApp",
    ],
  },
];

const whyOrbis = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
      </svg>
    ),
    title: "Scalabile e flessibile",
    desc: "Le nostre soluzioni crescono con il tuo business. Inizia con quello che ti serve e aggiungi moduli quando vuoi.",
    color: "var(--color-cyan)",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"/>
        <path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"/>
        <path d="M15.54 8.46a5 5 0 0 1 0 7.07M8.46 8.46a5 5 0 0 0 0 7.07"/>
      </svg>
    ),
    title: "Tutto integrato",
    desc: "Sistema e Gestionale comunicano tra loro. Un ecosistema coerente invece di strumenti disconnessi.",
    color: "var(--color-blue)",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: "Personalizzabile",
    desc: "Ogni soluzione porta il tuo brand. Logo, colori, nome — nessun compromesso sull'identità della tua azienda.",
    color: "#A78BFA",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    title: "Supporto italiano",
    desc: "Team italiano, risposte rapide, assistenza umana. Siamo qui per far funzionare le cose, non per vendere ticket.",
    color: "var(--color-green)",
  },
];

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative z-1 min-h-screen flex flex-col items-center justify-center text-center px-6 md:px-10 pt-28 pb-20">
        {/* Background glow */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[radial-gradient(circle,rgba(0,87,255,0.07)_0%,transparent_70%)]" />
        </div>

        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-[rgba(0,87,255,0.12)] border border-[rgba(0,87,255,0.35)] rounded-full px-5 py-1.5 text-xs font-semibold tracking-[2px] text-[var(--color-cyan)] uppercase mb-9">
          <span className="text-[var(--color-green)] text-[8px]">●</span>
          Soluzioni digitali per il business
        </div>

        {/* Title */}
        <h1 className="font-[family-name:var(--font-display)] text-[clamp(42px,7vw,86px)] font-black tracking-[12px] leading-[1.05] mb-3">
          <span className="bg-gradient-to-br from-white via-[var(--color-cyan)] to-[var(--color-blue)] bg-clip-text text-transparent">
            ORBIS
          </span>
        </h1>
        <p className="font-[family-name:var(--font-display)] text-[clamp(11px,1.5vw,14px)] tracking-[5px] text-[var(--color-muted)] uppercase mb-8">
          Soluzioni digitali per il tuo business
        </p>

        {/* Description */}
        <p className="max-w-[600px] text-[var(--color-muted)] text-[17px] leading-[1.75] mx-auto mb-13">
          Strumenti professionali per gestire ogni aspetto della tua attività —
          dalla comunicazione con i clienti alla gestione operativa quotidiana.
        </p>

        {/* CTAs */}
        <div className="flex gap-4 justify-center flex-wrap">
          <Link
            href="/sistema"
            className="bg-[var(--color-blue)] text-white px-10 py-4 rounded-xl text-[15px] font-bold no-underline tracking-wide shadow-[0_4px_30px_rgba(0,87,255,0.35)] hover:bg-[#0045CC] hover:shadow-[0_4px_40px_rgba(0,87,255,0.55)] hover:-translate-y-0.5 transition-all"
          >
            Scopri le soluzioni
          </Link>
          <Link
            href="/contatti"
            className="border border-[var(--color-border)] text-[var(--color-white)] px-10 py-4 rounded-xl text-[15px] font-semibold no-underline tracking-wide bg-[rgba(255,255,255,0.03)] hover:border-[var(--color-cyan)] hover:text-[var(--color-cyan)] hover:bg-[rgba(0,174,239,0.06)] transition-all"
          >
            Contattaci
          </Link>
        </div>

        {/* Orbit diagram with products */}
        <div className="relative w-[340px] h-[340px] mt-[70px] md:w-[400px] md:h-[400px]">
          {/* Outer orbit ring */}
          <div
            className="absolute rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full"
            style={{
              border: '2.5px solid rgba(0,87,255,0.35)',
              boxShadow: '0 0 20px rgba(0,87,255,0.15), inset 0 0 20px rgba(0,87,255,0.08)',
            }}
          />

          {/* Inner orbit ring */}
          <div
            className="absolute rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%]"
            style={{
              border: '2px solid rgba(0,174,239,0.25)',
              boxShadow: '0 0 15px rgba(0,174,239,0.1), inset 0 0 15px rgba(0,174,239,0.05)',
            }}
          />

          {/* Core */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70px] h-[70px] md:w-[80px] md:h-[80px] rounded-full flex items-center justify-center font-[family-name:var(--font-display)] text-[10px] md:text-[11px] tracking-[3px] text-[var(--color-cyan)]"
            style={{
              background: 'radial-gradient(circle, rgba(0,87,255,0.7) 0%, rgba(0,87,255,0.15) 60%, transparent 100%)',
              border: '2.5px solid var(--color-blue)',
              animation: 'core-pulse 3s ease-in-out infinite',
            }}
          >
            ORBIS
          </div>

          {/* Outer orbit — Sistema (top) + Gestionale (bottom) */}
          <div
            className="absolute top-0 left-0 w-full h-full"
            style={{ animation: 'orbit-spin 20s linear infinite' }}
          >
            {/* Sistema — top */}
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[56px] h-[56px] rounded-full flex items-center justify-center bg-[var(--color-bg2)]"
              style={{
                border: '2px solid rgba(0,87,255,0.7)',
                boxShadow: '0 0 20px rgba(0,87,255,0.5)',
                animation: 'orbit-spin-reverse 20s linear infinite',
              }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0057FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="5" y="2" width="14" height="20" rx="2"/>
                <line x1="12" y1="18" x2="12.01" y2="18"/>
              </svg>
              <span
                className="absolute -top-6 left-1/2 -translate-x-1/2 text-[9px] font-bold tracking-wide text-[var(--color-muted)] whitespace-nowrap"
                style={{ animation: 'orbit-spin-reverse 20s linear infinite' }}
              >
                Sistema
              </span>
            </div>

            {/* Gestionale — bottom */}
            <div
              className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[56px] h-[56px] rounded-full flex items-center justify-center bg-[var(--color-bg2)]"
              style={{
                border: '2px solid rgba(124,58,237,0.7)',
                boxShadow: '0 0 20px rgba(124,58,237,0.5)',
                animation: 'orbit-spin-reverse 20s linear infinite',
              }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#A78BFA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="3" width="20" height="14" rx="2"/>
                <path d="M8 21h8M12 17v4"/>
              </svg>
              <span
                className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[9px] font-bold tracking-wide text-[var(--color-muted)] whitespace-nowrap"
                style={{ animation: 'orbit-spin-reverse 20s linear infinite' }}
              >
                Gestionale
              </span>
            </div>
          </div>

          {/* Inner orbit — channels */}
          <div
            className="absolute top-[20%] left-[20%] w-[60%] h-[60%]"
            style={{ animation: 'orbit-spin-reverse 15s linear infinite' }}
          >
            {/* Discord — right */}
            <div
              className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-[42px] h-[42px] rounded-full flex items-center justify-center bg-[var(--color-bg2)]"
              style={{
                border: '2px solid rgba(88,101,242,0.6)',
                boxShadow: '0 0 14px rgba(88,101,242,0.4)',
                animation: 'orbit-spin 15s linear infinite',
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#5865F2"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.095 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.095 2.157 2.42 0 1.333-.947 2.418-2.157 2.418z"/></svg>
            </div>

            {/* Telegram — left */}
            <div
              className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-[42px] h-[42px] rounded-full flex items-center justify-center bg-[var(--color-bg2)]"
              style={{
                border: '2px solid rgba(42,171,238,0.6)',
                boxShadow: '0 0 14px rgba(42,171,238,0.4)',
                animation: 'orbit-spin 15s linear infinite',
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#2AABEE"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0h-.056zm5.654 8.22c-.14 1.476-1.885 10.147-2.666 13.468-.33 1.403-.98 1.872-1.607 1.918-.364.027-.677-.098-.964-.3l-.058-.043-3.203-2.38c-.534.52-1.093 1.014-1.52 1.318a.946.946 0 0 1-.543.18l.227-3.195 5.83-5.267c.254-.225-.055-.35-.393-.125L7.8 17.418l-3.298-1.064s-.508-.18-.557-.57c-.05-.39.573-.602.573-.602l13.272-5.167s.728-.32 1.053-.15c.162.086.243.207.27.37.016.093.03.197.024.33-.007.137-.026.28-.04.42z"/></svg>
            </div>
          </div>
        </div>
      </section>

      {/* Products section */}
      <section className="relative z-1 py-24 px-6 md:px-16 border-t border-[var(--color-border)] bg-[var(--color-bg2)]">
        <div className="max-w-[1100px] mx-auto">
          <div className="text-center mb-16">
            <div className="text-[11px] font-bold tracking-[4px] text-[var(--color-cyan)] uppercase mb-4">
              Soluzioni
            </div>
            <h2 className="font-[family-name:var(--font-display)] text-[clamp(26px,4vw,40px)] font-bold tracking-[3px] mb-4">
              Due prodotti. Un ecosistema.
            </h2>
            <p className="text-[var(--color-muted)] text-base max-w-[500px] mx-auto">
              Scegli la soluzione più adatta al tuo business, o combinale per una gestione completa a 360°.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {products.map((p) => (
              <Link
                key={p.id}
                href={p.href}
                className="group relative bg-[var(--color-bg)] border border-[var(--color-border)] rounded-2xl p-10 no-underline overflow-hidden hover:-translate-y-2 hover:shadow-[0_24px_70px_rgba(0,0,0,0.5)] transition-all duration-300"
              >
                {/* Top glow line */}
                <div
                  className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `linear-gradient(90deg, transparent, ${p.color}, transparent)` }}
                />
                {/* Background glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: `radial-gradient(circle at 50% 0%, ${p.color}12, transparent 70%)` }}
                />

                <div className="relative">
                  <div className="flex items-start justify-between mb-6">
                    <div
                      className="w-[60px] h-[60px] rounded-2xl flex items-center justify-center"
                      style={{ background: `${p.color}15`, border: `1.5px solid ${p.color}30` }}
                    >
                      {p.icon}
                    </div>
                    <span
                      className="text-xs font-bold tracking-[2px] uppercase px-3 py-1 rounded-full"
                      style={{ color: p.colorSecondary, background: `${p.color}12`, border: `1px solid ${p.color}25` }}
                    >
                      {p.tagline}
                    </span>
                  </div>

                  <h3
                    className="font-[family-name:var(--font-display)] text-xl font-bold tracking-[3px] mb-3"
                    style={{ color: p.colorSecondary }}
                  >
                    {p.name}
                  </h3>

                  <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-7">
                    {p.desc}
                  </p>

                  <ul className="flex flex-col gap-2 mb-8">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-center gap-2.5 text-sm text-[var(--color-muted)]">
                        <span className="text-[var(--color-green)] font-bold text-xs">&#10003;</span>
                        {f}
                      </li>
                    ))}
                  </ul>

                  <span
                    className="inline-flex items-center gap-2 text-sm font-semibold transition-colors"
                    style={{ color: p.colorSecondary }}
                  >
                    Scopri {p.name}
                    <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Orbis */}
      <section className="relative z-1 py-24 px-6 md:px-16">
        <div className="max-w-[1100px] mx-auto">
          <div className="text-center mb-16">
            <div className="text-[11px] font-bold tracking-[4px] text-[var(--color-cyan)] uppercase mb-4">
              Perché sceglierci
            </div>
            <h2 className="font-[family-name:var(--font-display)] text-[clamp(26px,4vw,40px)] font-bold tracking-[3px] mb-4">
              Il vantaggio ORBIS
            </h2>
            <p className="text-[var(--color-muted)] text-base max-w-[460px] mx-auto">
              Non siamo solo fornitori di software. Siamo partner tecnologici del tuo business.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyOrbis.map((w) => (
              <div
                key={w.title}
                className="bg-[var(--color-bg2)] border border-[var(--color-border)] rounded-2xl p-7 hover:border-[rgba(0,174,239,0.25)] transition-colors"
              >
                <div
                  className="w-[46px] h-[46px] rounded-xl flex items-center justify-center mb-5"
                  style={{ color: w.color, background: `${w.color}15`, border: `1px solid ${w.color}25` }}
                >
                  {w.icon}
                </div>
                <h3 className="text-[15px] font-bold mb-2.5">{w.title}</h3>
                <p className="text-[13px] text-[var(--color-muted)] leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-1 py-28 px-6 md:px-16 text-center border-t border-[var(--color-border)] bg-[var(--color-bg2)]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(0,87,255,0.07)_0%,transparent_70%)] pointer-events-none" />
        <div className="relative max-w-[600px] mx-auto">
          <h2 className="font-[family-name:var(--font-display)] text-[clamp(28px,5vw,48px)] font-black tracking-[4px] mb-5">
            Pronto a iniziare?
          </h2>
          <p className="text-[var(--color-muted)] text-[17px] mb-10 max-w-[460px] mx-auto">
            Consulenza gratuita. Ti aiutiamo a identificare la soluzione più adatta alla tua realtà aziendale.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/contatti"
              className="bg-[var(--color-blue)] text-white px-10 py-4 rounded-xl text-[15px] font-bold no-underline shadow-[0_4px_30px_rgba(0,87,255,0.35)] hover:bg-[#0045CC] hover:-translate-y-0.5 transition-all"
            >
              Contattaci gratuitamente
            </Link>
            <Link
              href="/sistema"
              className="border border-[var(--color-border)] text-[var(--color-white)] px-10 py-4 rounded-xl text-[15px] font-semibold no-underline hover:border-[var(--color-cyan)] hover:text-[var(--color-cyan)] transition-all"
            >
              Esplora le soluzioni
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
