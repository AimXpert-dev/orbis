import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative z-1 border-t border-[var(--color-border)] bg-[rgba(8,11,20,0.95)]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-16 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="font-[family-name:var(--font-display)] text-xl tracking-[6px] text-[var(--color-white)] font-black mb-3">
              ORBIS<span className="text-[var(--color-cyan)]">.</span>
            </div>
            <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-4">
              ORBIS Italia — Soluzioni per il Business.<br />
              Strumenti digitali professionali per far crescere la tua attività.
            </p>
            <p className="text-xs text-[var(--color-muted)] opacity-60">
              AimXpert di Marco Eugenio Monaco — P.IVA: 04822030401
            </p>
          </div>

          {/* Links */}
          <div>
            <div className="text-xs font-bold tracking-[2px] text-[var(--color-cyan)] uppercase mb-4">
              Navigazione
            </div>
            <ul className="flex flex-col gap-2.5">
              {[
                { label: "Home", href: "/" },
                { label: "Orbis Hub", href: "/sistema" },
                { label: "Orbis Repair", href: "/gestionale" },
                { label: "Contatti", href: "/contatti" },
                { label: "Termini e Condizioni", href: "/termini" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-[var(--color-muted)] no-underline hover:text-[var(--color-white)] transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="text-xs font-bold tracking-[2px] text-[var(--color-cyan)] uppercase mb-4">
              Contatti
            </div>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href="https://t.me/ORBISITA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-sm text-[var(--color-muted)] no-underline hover:text-[#2AABEE] transition-colors"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0h-.056zm5.654 8.22c-.14 1.476-1.885 10.147-2.666 13.468-.33 1.403-.98 1.872-1.607 1.918-.364.027-.677-.098-.964-.3l-.058-.043-3.203-2.38c-.534.52-1.093 1.014-1.52 1.318a.946.946 0 0 1-.543.18l.227-3.195 5.83-5.267c.254-.225-.055-.35-.393-.125L7.8 17.418l-3.298-1.064s-.508-.18-.557-.57c-.05-.39.573-.602.573-.602l13.272-5.167s.728-.32 1.053-.15c.162.086.243.207.27.37.016.093.03.197.024.33-.007.137-.026.28-.04.42z"/></svg>
                  Telegram
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/393517246141"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-sm text-[var(--color-muted)] no-underline hover:text-[#25D366] transition-colors"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-[var(--color-border)] flex flex-col md:flex-row justify-between items-center gap-3">
          <div className="text-xs text-[var(--color-muted)] tracking-wider">
            &copy; 2026 ORBIS Italia. Tutti i diritti riservati.
          </div>
          <div className="flex gap-5">
            <Link
              href="/termini"
              className="text-xs text-[var(--color-muted)] no-underline hover:text-[var(--color-white)] transition-colors"
            >
              Termini e Condizioni
            </Link>
            <Link
              href="/privacy"
              className="text-xs text-[var(--color-muted)] no-underline hover:text-[var(--color-white)] transition-colors"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
