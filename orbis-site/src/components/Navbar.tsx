"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const soluzioni = [
  { label: "Orbis Hub", href: "/sistema", desc: "Prenotazioni e comunicazioni multicanale" },
  { label: "Orbis Repair", href: "/gestionale", desc: "Gestionale per centri riparazione" },
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Contatti", href: "/contatti" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 border-b ${
          scrolled
            ? "bg-[#080B14]/95 backdrop-blur-xl border-[var(--color-border)]"
            : "bg-transparent border-transparent"
        }`}
      >
        <div className="flex items-center justify-between w-full px-4 md:px-16 py-4">
          {/* Logo */}
          <Link
            href="/"
            className="font-[family-name:var(--font-display)] text-lg md:text-[22px] font-black tracking-[3px] md:tracking-[6px] text-[var(--color-white)] no-underline"
          >
            ORBIS<span className="text-[var(--color-cyan)]">.</span>
          </Link>

          {/* Desktop links */}
          <ul className="hidden md:flex gap-7 list-none items-center">
            <li>
              <Link
                href="/"
                className="text-[var(--color-muted)] text-sm font-medium tracking-wide hover:text-[var(--color-white)] transition-colors no-underline"
              >
                Home
              </Link>
            </li>

            {/* Soluzioni dropdown */}
            <li ref={dropdownRef} className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-1.5 text-[var(--color-muted)] text-sm font-medium tracking-wide hover:text-[var(--color-white)] transition-colors cursor-pointer bg-transparent border-0 p-0"
              >
                Soluzioni
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="currentColor"
                  className={`transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
                >
                  <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              {dropdownOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[280px] bg-[#0D1120]/98 backdrop-blur-xl border border-[var(--color-border)] rounded-2xl p-2 shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
                  <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#0D1120] border-l border-t border-[var(--color-border)] rotate-45" />
                  {soluzioni.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      onClick={() => setDropdownOpen(false)}
                      className="flex flex-col gap-0.5 px-4 py-3 rounded-xl no-underline hover:bg-[rgba(0,87,255,0.08)] group transition-colors"
                    >
                      <span className="text-[var(--color-white)] text-sm font-semibold group-hover:text-[var(--color-cyan)] transition-colors">
                        {s.label}
                      </span>
                      <span className="text-[var(--color-muted)] text-xs leading-relaxed">{s.desc}</span>
                    </Link>
                  ))}
                </div>
              )}
            </li>

            <li>
              <Link
                href="/contatti"
                className="text-[var(--color-muted)] text-sm font-medium tracking-wide hover:text-[var(--color-white)] transition-colors no-underline"
              >
                Contatti
              </Link>
            </li>
          </ul>

          {/* Desktop CTA */}
          <Link
            href="/contatti"
            className="hidden md:inline-block bg-[var(--color-blue)] text-white px-6 py-2.5 rounded-lg text-sm font-semibold no-underline hover:bg-[#0045CC] hover:shadow-[0_0_20px_rgba(0,87,255,0.4)] transition-all"
          >
            Contattaci &rarr;
          </Link>

          {/* Mobile burger */}
          <button
            className="md:hidden text-[var(--color-white)] text-2xl p-2 -mr-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            {menuOpen ? "\u2715" : "\u2630"}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="fixed inset-x-0 top-[65px] z-50 bg-[#080B14]/98 backdrop-blur-xl border-b border-[var(--color-border)] p-6 flex flex-col gap-1 md:hidden">
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="text-[var(--color-muted)] text-base font-medium hover:text-[var(--color-white)] transition-colors no-underline px-2 py-2.5"
          >
            Home
          </Link>

          <div className="px-2 py-2.5">
            <div className="text-[var(--color-muted)] text-xs font-bold tracking-[2px] uppercase mb-2">
              Soluzioni
            </div>
            {soluzioni.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                onClick={() => setMenuOpen(false)}
                className="flex flex-col gap-0.5 py-2 pl-3 no-underline"
              >
                <span className="text-[var(--color-white)] text-sm font-semibold">{s.label}</span>
                <span className="text-[var(--color-muted)] text-xs">{s.desc}</span>
              </Link>
            ))}
          </div>

          <Link
            href="/contatti"
            onClick={() => setMenuOpen(false)}
            className="text-[var(--color-muted)] text-base font-medium hover:text-[var(--color-white)] transition-colors no-underline px-2 py-2.5"
          >
            Contatti
          </Link>

          <div className="mt-2 pt-4 border-t border-[var(--color-border)]">
            <Link
              href="/contatti"
              onClick={() => setMenuOpen(false)}
              className="block bg-[var(--color-blue)] text-white px-6 py-3 rounded-lg text-sm font-semibold text-center no-underline"
            >
              Contattaci &rarr;
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
