export default function Hero() {
  return (
    <section className="relative z-1 min-h-screen flex flex-col items-center justify-center text-center px-6 md:px-10 pt-28 pb-20">
      {/* Badge */}
      <div className="inline-flex items-center gap-2 bg-[rgba(0,87,255,0.12)] border border-[rgba(0,87,255,0.35)] rounded-full px-5 py-1.5 text-xs font-semibold tracking-[2px] text-[var(--color-cyan)] uppercase mb-9">
        <span className="text-[var(--color-green)] text-[8px]">●</span>
        Sistema attivo · Pronto al deploy
      </div>

      {/* Title */}
      <h1 className="font-[family-name:var(--font-display)] text-[clamp(42px,7vw,86px)] font-black tracking-[12px] leading-[1.05] mb-3">
        <span className="bg-gradient-to-br from-white via-[var(--color-cyan)] to-[var(--color-blue)] bg-clip-text text-transparent">
          ORBIS
        </span>
      </h1>
      <p className="font-[family-name:var(--font-display)] text-[clamp(11px,1.5vw,14px)] tracking-[5px] text-[var(--color-muted)] uppercase mb-8">
        One Platform · Every Channel
      </p>

      {/* Description */}
      <p className="max-w-[600px] text-[var(--color-muted)] text-[17px] leading-[1.75] mx-auto mb-13">
        Un ecosistema completo per gestire prenotazioni, clienti e comunicazioni
        su Discord, Telegram, App Mobile e WhatsApp — tutto sincronizzato in
        tempo reale da un unico centro di controllo.
      </p>

      {/* CTAs */}
      <div className="flex gap-4 justify-center flex-wrap">
        <a
          href="/prezzi"
          className="bg-[var(--color-blue)] text-white px-10 py-4 rounded-xl text-[15px] font-bold no-underline tracking-wide shadow-[0_4px_30px_rgba(0,87,255,0.35)] hover:bg-[#0045CC] hover:shadow-[0_4px_40px_rgba(0,87,255,0.55)] hover:-translate-y-0.5 transition-all"
        >
          Scopri i piani
        </a>
        <a
          href="/come-funziona"
          className="border border-[var(--color-border)] text-[var(--color-white)] px-10 py-4 rounded-xl text-[15px] font-semibold no-underline tracking-wide bg-[rgba(255,255,255,0.03)] hover:border-[var(--color-cyan)] hover:text-[var(--color-cyan)] hover:bg-[rgba(0,174,239,0.06)] transition-all"
        >
          Come funziona
        </a>
      </div>

      {/* Orbit diagram */}
      <div className="relative w-[280px] h-[280px] mt-[70px]">
        {/* Rings */}
        <div className="absolute border border-dashed border-[rgba(0,87,255,0.3)] rounded-full w-[260px] h-[260px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute border border-dashed border-[rgba(0,174,239,0.2)] rounded-full w-[180px] h-[180px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

        {/* Core */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60px] h-[60px] rounded-full bg-[radial-gradient(circle,rgba(0,87,255,0.6)_0%,rgba(0,87,255,0.1)_70%,transparent_100%)] border-2 border-[var(--color-blue)] flex items-center justify-center font-[family-name:var(--font-display)] text-[9px] tracking-wider text-[var(--color-cyan)] shadow-[0_0_30px_rgba(0,87,255,0.5),inset_0_0_20px_rgba(0,87,255,0.2)]">
          CORE
        </div>

        {/* Nodes */}
        {[
          { emoji: "💬", label: "Discord", pos: "top-[2px] left-1/2 -translate-x-1/2", labelPos: "-top-5 left-1/2 -translate-x-1/2", color: "rgba(88,101,242,0.7)" },
          { emoji: "✈️", label: "Telegram", pos: "top-1/2 right-[2px] -translate-y-1/2", labelPos: "top-1/2 -right-14 -translate-y-1/2", color: "rgba(42,171,238,0.7)" },
          { emoji: "📱", label: "App", pos: "bottom-[2px] left-1/2 -translate-x-1/2", labelPos: "-bottom-5 left-1/2 -translate-x-1/2", color: "rgba(0,174,239,0.7)" },
          { emoji: "💚", label: "WhatsApp", pos: "top-1/2 left-[2px] -translate-y-1/2", labelPos: "top-1/2 -left-16 -translate-y-1/2", color: "rgba(37,211,102,0.7)" },
        ].map((n) => (
          <div
            key={n.label}
            className={`absolute w-12 h-12 rounded-full flex items-center justify-center text-xl bg-[var(--color-bg2)] ${n.pos}`}
            style={{
              border: `2px solid ${n.color}`,
              boxShadow: `0 0 20px ${n.color}`,
            }}
          >
            {n.emoji}
            <span
              className={`absolute text-[10px] font-semibold tracking-wide text-[var(--color-muted)] whitespace-nowrap ${n.labelPos}`}
            >
              {n.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
