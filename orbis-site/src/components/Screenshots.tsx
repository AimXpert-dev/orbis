"use client";
import { useState } from "react";
import Image from "next/image";

const tabs = [
  {
    id: "discord",
    label: "Discord",
    images: [
      { src: "/screenshots/prenota una sessione dis.jpg", alt: "Discord — Prenota una sessione" },
      { src: "/screenshots/scegli servizio ds.jpg", alt: "Discord — Scegli servizio" },
      { src: "/screenshots/scegli giorno ds.png", alt: "Discord — Scegli giorno" },
      { src: "/screenshots/scegli orario ds.jpg", alt: "Discord — Scegli orario" },
      { src: "/screenshots/note sessione ds.png", alt: "Discord — Note sessione" },
    ],
  },
  {
    id: "telegram",
    label: "Telegram",
    images: [
      { src: "/screenshots/benvenuto tg.jpg", alt: "Telegram — Benvenuto" },
      { src: "/screenshots/scegli piattaforma tg.jpg", alt: "Telegram — Scegli piattaforma" },
      { src: "/screenshots/scegli servizio tg.jpg", alt: "Telegram — Scegli servizio" },
      { src: "/screenshots/scegli giorno tg.jpg", alt: "Telegram — Scegli giorno" },
      { src: "/screenshots/scegli orario tg.jpg", alt: "Telegram — Scegli orario" },
    ],
  },
  {
    id: "app",
    label: "App Mobile",
    images: [
      { src: "/screenshots/scegli servizio da app.jpg", alt: "App — Scegli servizio" },
      { src: "/screenshots/acquisto da app.jpg", alt: "App — Acquisto" },
      { src: "/screenshots/prenota da app.jpg", alt: "App — Prenota" },
    ],
  },
];

export default function Screenshots() {
  const [active, setActive] = useState("discord");
  const [lightbox, setLightbox] = useState<{ src: string; idx: number } | null>(null);

  const currentTab = tabs.find((t) => t.id === active)!;

  return (
    <section className="relative z-1 py-24 px-6 md:px-16 bg-gradient-to-b from-transparent via-[rgba(0,87,255,0.04)] to-transparent">
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-14">
          <div className="text-[11px] font-bold tracking-[4px] text-[var(--color-cyan)] uppercase mb-4">
            Anteprima
          </div>
          <h2 className="font-[family-name:var(--font-display)] text-[clamp(26px,4vw,40px)] font-bold tracking-[3px] mb-4">
            Il sistema in azione
          </h2>
          <p className="text-[var(--color-muted)] text-base max-w-[520px]">
            Vedi come funziona su ogni piattaforma.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-10 border-b border-[var(--color-border)]">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setActive(t.id)}
              className={`px-6 py-3 rounded-t-lg text-[13px] font-semibold border border-transparent border-b-0 -mb-px transition-all ${
                active === t.id
                  ? "text-[var(--color-white)] bg-[var(--color-bg3)] border-[var(--color-border)]"
                  : "text-[var(--color-muted)] hover:text-[var(--color-white)]"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {currentTab.images.map((img, i) => (
            <div
              key={img.src}
              onClick={() => setLightbox({ src: img.src, idx: i })}
              className="bg-[var(--color-bg2)] border border-[var(--color-border)] rounded-xl overflow-hidden h-[200px] relative cursor-pointer hover:border-[var(--color-cyan)] hover:-translate-y-1 transition-all"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-contain bg-[var(--color-bg3)]"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[999] bg-[rgba(0,0,0,0.93)] flex items-center justify-center"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-5 right-7 text-3xl text-white opacity-60 hover:opacity-100 transition-opacity"
            onClick={() => setLightbox(null)}
          >
            &times;
          </button>

          {/* Prev */}
          <button
            className="absolute left-5 top-1/2 -translate-y-1/2 w-[52px] h-[52px] rounded-full bg-[rgba(255,255,255,0.08)] border border-[rgba(255,255,255,0.15)] flex items-center justify-center text-xl text-white opacity-70 hover:bg-[rgba(0,87,255,0.4)] hover:border-[var(--color-blue)] hover:opacity-100 transition-all"
            onClick={(e) => {
              e.stopPropagation();
              const prev = lightbox.idx === 0 ? currentTab.images.length - 1 : lightbox.idx - 1;
              setLightbox({ src: currentTab.images[prev].src, idx: prev });
            }}
          >
            &#8249;
          </button>

          {/* Next */}
          <button
            className="absolute right-5 top-1/2 -translate-y-1/2 w-[52px] h-[52px] rounded-full bg-[rgba(255,255,255,0.08)] border border-[rgba(255,255,255,0.15)] flex items-center justify-center text-xl text-white opacity-70 hover:bg-[rgba(0,87,255,0.4)] hover:border-[var(--color-blue)] hover:opacity-100 transition-all"
            onClick={(e) => {
              e.stopPropagation();
              const next = lightbox.idx === currentTab.images.length - 1 ? 0 : lightbox.idx + 1;
              setLightbox({ src: currentTab.images[next].src, idx: next });
            }}
          >
            &#8250;
          </button>

          <Image
            src={lightbox.src}
            alt=""
            width={1200}
            height={800}
            className="max-w-[82vw] max-h-[88vh] object-contain rounded-lg shadow-[0_0_60px_rgba(0,0,0,0.8)]"
            onClick={(e) => e.stopPropagation()}
          />

          {/* Dots */}
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
            {currentTab.images.map((_, i) => (
              <button
                key={i}
                className={`w-2 h-2 rounded-full transition-colors ${
                  i === lightbox.idx ? "bg-[var(--color-cyan)]" : "bg-[rgba(255,255,255,0.25)]"
                }`}
                onClick={(e) => {
                  e.stopPropagation();
                  setLightbox({ src: currentTab.images[i].src, idx: i });
                }}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
