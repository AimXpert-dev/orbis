import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Footer from "@/components/Footer";
import Link from "next/link";

const channels = [
  {
    icon: "💬",
    name: "Discord",
    href: "/discord",
    color: "#5865F2",
    desc: "Bot prenotazioni, ticket automatici, gestione staff. Il tuo server Discord diventa un centro operativo.",
  },
  {
    icon: "✈️",
    name: "Telegram",
    href: "/telegram",
    color: "#2AABEE",
    desc: "Prenotazioni inline, notifiche clienti, pannello staff. Tutto dal messenger piu veloce.",
  },
  {
    icon: "📱",
    name: "App Mobile",
    href: "/app-mobile",
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

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />

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

              <span className="text-5xl block mb-5 relative">{ch.icon}</span>
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
                Scopri di piu
                <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* How it works - compact */}
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
            href="/pacchetti"
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
