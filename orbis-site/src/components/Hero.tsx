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
      <div className="relative w-[340px] h-[340px] mt-[70px] md:w-[400px] md:h-[400px]">

        {/* Outer orbit ring — thick, solid, glowing */}
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

        {/* Core — pulsing blue center */}
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

        {/* Outer orbit — rotating container (Discord + App) */}
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{ animation: 'orbit-spin 20s linear infinite' }}
        >
          {/* Discord — top */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50px] h-[50px] md:w-[54px] md:h-[54px] rounded-full flex items-center justify-center text-xl bg-[var(--color-bg2)]"
            style={{
              border: '2px solid rgba(88,101,242,0.7)',
              boxShadow: '0 0 20px rgba(88,101,242,0.5)',
              animation: 'orbit-spin-reverse 20s linear infinite',
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="#5865F2"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.095 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.095 2.157 2.42 0 1.333-.947 2.418-2.157 2.418z"/></svg>
            <span
              className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-semibold tracking-wide text-[var(--color-muted)] whitespace-nowrap"
              style={{ animation: 'orbit-spin-reverse 20s linear infinite' }}
            >
              Discord
            </span>
          </div>

          {/* App — bottom */}
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[50px] h-[50px] md:w-[54px] md:h-[54px] rounded-full flex items-center justify-center text-xl bg-[var(--color-bg2)]"
            style={{
              border: '2px solid rgba(0,174,239,0.7)',
              boxShadow: '0 0 20px rgba(0,174,239,0.5)',
              animation: 'orbit-spin-reverse 20s linear infinite',
            }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="#00AEEF"><path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14zm-4.2-5.78v1.75l3.2-2.99L12.8 9v1.7c-3.11.43-4.35 2.56-4.8 4.7 1.11-1.55 2.69-2.2 4.8-2.18z"/></svg>
            <span
              className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] font-semibold tracking-wide text-[var(--color-muted)] whitespace-nowrap"
              style={{ animation: 'orbit-spin-reverse 20s linear infinite' }}
            >
              App
            </span>
          </div>
        </div>

        {/* Inner orbit — rotating container, opposite direction (Telegram + WhatsApp) */}
        <div
          className="absolute top-[20%] left-[20%] w-[60%] h-[60%]"
          style={{ animation: 'orbit-spin-reverse 15s linear infinite' }}
        >
          {/* Telegram — right */}
          <div
            className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-[46px] h-[46px] md:w-[50px] md:h-[50px] rounded-full flex items-center justify-center text-lg bg-[var(--color-bg2)]"
            style={{
              border: '2px solid rgba(42,171,238,0.7)',
              boxShadow: '0 0 20px rgba(42,171,238,0.5)',
              animation: 'orbit-spin 15s linear infinite',
            }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="#2AABEE"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0h-.056zm5.654 8.22c-.14 1.476-1.885 10.147-2.666 13.468-.33 1.403-.98 1.872-1.607 1.918-.364.027-.677-.098-.964-.3l-.058-.043-3.203-2.38c-.534.52-1.093 1.014-1.52 1.318a.946.946 0 0 1-.543.18l.227-3.195 5.83-5.267c.254-.225-.055-.35-.393-.125L7.8 17.418l-3.298-1.064s-.508-.18-.557-.57c-.05-.39.573-.602.573-.602l13.272-5.167s.728-.32 1.053-.15c.162.086.243.207.27.37.016.093.03.197.024.33-.007.137-.026.28-.04.42z"/></svg>
            <span
              className="absolute top-1/2 -right-16 -translate-y-1/2 text-[10px] font-semibold tracking-wide text-[var(--color-muted)] whitespace-nowrap"
              style={{ animation: 'orbit-spin 15s linear infinite' }}
            >
              Telegram
            </span>
          </div>

          {/* WhatsApp — left */}
          <div
            className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-[46px] h-[46px] md:w-[50px] md:h-[50px] rounded-full flex items-center justify-center text-lg bg-[var(--color-bg2)]"
            style={{
              border: '2px solid rgba(37,211,102,0.7)',
              boxShadow: '0 0 20px rgba(37,211,102,0.5)',
              animation: 'orbit-spin 15s linear infinite',
            }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="#25D366"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>
            <span
              className="absolute top-1/2 -left-17 -translate-y-1/2 text-[10px] font-semibold tracking-wide text-[var(--color-muted)] whitespace-nowrap"
              style={{ animation: 'orbit-spin 15s linear infinite' }}
            >
              WhatsApp
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
