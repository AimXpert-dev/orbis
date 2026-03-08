const stats = [
  { num: "4", suffix: "+", label: "Canali integrati" },
  { num: "10", suffix: "k+", label: "Righe di codice" },
  { num: "24", suffix: "/7", label: "Bot attivi" },
  { num: "0", suffix: "s", label: "Sync tra piattaforme" },
];

export default function Stats() {
  return (
    <div className="relative z-1 flex justify-center gap-12 md:gap-20 flex-wrap px-6 md:px-16 py-10 border-t border-b border-[var(--color-border)] bg-[rgba(13,17,32,0.7)]">
      {stats.map((s) => (
        <div key={s.label} className="text-center">
          <div className="font-[family-name:var(--font-display)] text-3xl font-bold text-[var(--color-white)] leading-none">
            {s.num}
            <span className="text-[var(--color-cyan)]">{s.suffix}</span>
          </div>
          <div className="text-xs text-[var(--color-muted)] tracking-wider uppercase mt-1.5">
            {s.label}
          </div>
        </div>
      ))}
    </div>
  );
}
