"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const links = [
  ["Home", "/"],
  ["Discord", "/discord"],
  ["Telegram", "/telegram"],
  ["App Mobile", "/app-mobile"],
  ["Pacchetti", "/pacchetti"],
  ["Contatti", "/contatti"],
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full max-w-[100vw] overflow-x-hidden z-50 flex items-center justify-between px-4 md:px-16 py-4 transition-all duration-300 border-b ${
        scrolled
          ? "bg-[#080B14]/95 backdrop-blur-xl border-[var(--color-border)]"
          : "bg-transparent border-transparent"
      }`}
    >
      <Link
        href="/"
        className="font-[family-name:var(--font-display)] text-base md:text-[22px] font-black tracking-[2px] md:tracking-[6px] text-[var(--color-white)] no-underline shrink-0"
      >
        ORBIS<span className="text-[var(--color-cyan)]">.</span>
      </Link>

      {/* Desktop links */}
      <ul className="hidden md:flex gap-7 list-none">
        {links.map(([label, href]) => (
          <li key={href}>
            <Link
              href={href}
              className="text-[var(--color-muted)] text-sm font-medium tracking-wide hover:text-[var(--color-white)] transition-colors no-underline"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <Link
        href="/contatti"
        className="hidden md:inline-block bg-[var(--color-blue)] text-white px-6 py-2.5 rounded-lg text-sm font-semibold no-underline hover:bg-[#0045CC] hover:shadow-[0_0_20px_rgba(0,87,255,0.4)] transition-all"
      >
        Contattaci &rarr;
      </Link>

      {/* Mobile burger */}
      <button
        className="md:hidden text-[var(--color-white)] text-2xl shrink-0 p-2"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Menu"
      >
        {menuOpen ? "\u2715" : "\u2630"}
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="fixed top-[57px] left-0 right-0 bg-[#080B14]/98 backdrop-blur-xl border-b border-[var(--color-border)] p-6 flex flex-col gap-4 md:hidden">
          {links.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="text-[var(--color-muted)] text-base font-medium hover:text-[var(--color-white)] transition-colors no-underline"
            >
              {label}
            </Link>
          ))}
          <Link
            href="/contatti"
            onClick={() => setMenuOpen(false)}
            className="bg-[var(--color-blue)] text-white px-6 py-3 rounded-lg text-sm font-semibold text-center no-underline"
          >
            Contattaci &rarr;
          </Link>
        </div>
      )}
    </nav>
  );
}
