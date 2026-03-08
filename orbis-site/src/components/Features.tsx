const features = [
  {
    icon: "💬",
    title: "Bot Discord",
    desc: "Prenotazioni via menu interattivi, apertura ticket, gestione staff, bridge verso Telegram. Tutto automatizzato senza lasciare Discord.",
    color: "var(--color-discord)",
  },
  {
    icon: "✈️",
    title: "Bot Telegram",
    desc: "Prenotazioni inline, notifiche clienti, pannello staff con approvazione in un click. I messaggi del ticket arrivano anche su Discord.",
    color: "var(--color-telegram)",
  },
  {
    icon: "📱",
    title: "App Mobile",
    desc: "Pannello admin nativo per iOS e Android. Gestisci prenotazioni, conferma o annulla, vedi il calendario in tempo reale.",
    color: "var(--color-cyan)",
  },
  {
    icon: "💚",
    title: "WhatsApp Business",
    desc: "Prenotazioni e conferme via WhatsApp Cloud API. I clienti ricevono messaggi automatici sul canale che usano ogni giorno.",
    color: "var(--color-whatsapp)",
    soon: true,
  },
  {
    icon: "⚡",
    title: "API Centralizzata",
    desc: "Un backend FastAPI che sincronizza tutti i canali. Slot condivisi, nessuna doppia prenotazione, dati sempre consistenti.",
    color: "var(--color-blue)",
  },
  {
    icon: "🔔",
    title: "Push Notifications",
    desc: "Notifiche push in tempo reale per ogni evento: nuova prenotazione, conferma, annullamento. Staff sempre aggiornato.",
    color: "var(--color-orange)",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative z-1 py-24 px-6 md:px-16 max-w-[1200px] mx-auto">
      <div className="text-[11px] font-bold tracking-[4px] text-[var(--color-cyan)] uppercase mb-4">
        Funzionalita
      </div>
      <h2 className="font-[family-name:var(--font-display)] text-[clamp(26px,4vw,40px)] font-bold tracking-[3px] mb-4">
        Tutto connesso.<br />Tutto automatico.
      </h2>
      <p className="text-[var(--color-muted)] text-base max-w-[520px] mb-16">
        Ogni canale parla con gli altri. Il tuo team gestisce tutto da un punto.
        I clienti prenotano da dove preferiscono.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((f) => (
          <div
            key={f.title}
            className="group relative bg-[var(--color-bg2)] border border-[var(--color-border)] rounded-2xl p-8 overflow-hidden hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] transition-all duration-200"
            style={
              {
                "--feat-color": f.color,
              } as React.CSSProperties
            }
          >
            {/* Top line on hover */}
            <div
              className="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity"
              style={{
                background: `linear-gradient(90deg, transparent, ${f.color}, transparent)`,
              }}
            />
            <div
              className="w-[52px] h-[52px] rounded-xl flex items-center justify-center text-2xl mb-5 border"
              style={{
                background: `color-mix(in srgb, ${f.color} 12%, transparent)`,
                borderColor: `color-mix(in srgb, ${f.color} 30%, transparent)`,
              }}
            >
              {f.icon}
            </div>
            <h3 className="text-[17px] font-bold mb-2.5">
              {f.title}
              {f.soon && (
                <span className="ml-2 text-[var(--color-cyan)] text-xs italic font-normal">
                  In arrivo
                </span>
              )}
            </h3>
            <p className="text-[var(--color-muted)] text-sm leading-[1.7]">
              {f.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
