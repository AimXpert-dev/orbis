const steps = [
  {
    num: "01",
    title: "Il cliente prenota",
    desc: "Sceglie servizio, data e orario direttamente su Discord, Telegram, App o WhatsApp.",
  },
  {
    num: "02",
    title: "Lo staff riceve",
    desc: "Notifica istantanea su tutti i canali del team. Il ticket si apre automaticamente.",
  },
  {
    num: "03",
    title: "Conferma in un click",
    desc: "Lo staff approva dalla app, da Telegram o da Discord. Lo slot si blocca su tutti i canali.",
  },
  {
    num: "04",
    title: "Cliente notificato",
    desc: "Messaggio automatico di conferma con tutte le istruzioni per prepararsi alla sessione.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="relative z-1 py-24 px-6 md:px-16 max-w-[1200px] mx-auto">
      <div className="text-[11px] font-bold tracking-[4px] text-[var(--color-cyan)] uppercase mb-4">
        Processo
      </div>
      <h2 className="font-[family-name:var(--font-display)] text-[clamp(26px,4vw,40px)] font-bold tracking-[3px] mb-4">
        Come funziona
      </h2>
      <p className="text-[var(--color-muted)] text-base max-w-[520px] mb-16">
        Dal primo contatto alla sessione confermata, tutto automatico.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
        {/* Connecting line */}
        <div className="hidden lg:block absolute top-9 left-20 right-20 h-px bg-gradient-to-r from-transparent via-[var(--color-border)] to-transparent" />

        {steps.map((s) => (
          <div key={s.num} className="text-center">
            <div className="w-[72px] h-[72px] rounded-full bg-[var(--color-bg2)] border-2 border-[var(--color-border)] flex items-center justify-center mx-auto mb-5 font-[family-name:var(--font-display)] text-xl font-bold text-[var(--color-cyan)] relative z-1 shadow-[0_0_20px_rgba(0,87,255,0.2)]">
              {s.num}
            </div>
            <h4 className="text-[15px] font-bold mb-2">{s.title}</h4>
            <p className="text-[13px] text-[var(--color-muted)] leading-relaxed">
              {s.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
