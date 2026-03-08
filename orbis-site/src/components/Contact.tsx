export default function Contact() {
  return (
    <section id="contact" className="relative z-1 py-28 px-6 md:px-16 text-center">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(0,87,255,0.08)_0%,transparent_70%)] pointer-events-none" />

      <h2 className="font-[family-name:var(--font-display)] text-[clamp(28px,5vw,52px)] font-black tracking-[4px] mb-5 relative">
        Pronto a partire?
      </h2>
      <p className="text-[var(--color-muted)] text-[17px] mb-12 relative max-w-[500px] mx-auto">
        Contattaci per una consulenza gratuita. Ti aiutiamo a scegliere il piano
        giusto e configuriamo tutto noi.
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
  );
}
