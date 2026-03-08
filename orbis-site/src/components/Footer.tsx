export default function Footer() {
  return (
    <footer className="relative z-1 px-6 md:px-16 py-10 border-t border-[var(--color-border)] bg-[rgba(8,11,20,0.9)] flex flex-col md:flex-row justify-between items-center gap-4">
      <div className="font-[family-name:var(--font-display)] text-base tracking-[6px] text-[var(--color-white)] font-black">
        ORBIS<span className="text-[var(--color-cyan)]">.</span>
      </div>
      <div className="text-xs text-[var(--color-muted)] tracking-wider">
        &copy; {new Date().getFullYear()} ORBIS Italia. Tutti i diritti riservati.
      </div>
      <div className="text-[11px] text-[var(--color-muted)] tracking-[2px]">
        One Platform · Every Channel
      </div>
    </footer>
  );
}
