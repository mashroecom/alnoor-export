"use client";

import { useLang } from "@/lib/LanguageContext";

export default function Hero() {
  const { t, lang } = useLang();
  const isAr = lang === "ar";

  return (
    <section id="home" className="relative min-h-screen flex items-center hero-gradient overflow-hidden">
      {/* Subtle radial glow */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true"
        style={{ background: "radial-gradient(ellipse 70% 50% at 30% 50%, rgba(255,255,255,0.05) 0%, transparent 70%)" }}
      />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 w-full py-28 lg:py-0 lg:min-h-screen lg:flex lg:items-center">
        <div className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 w-full ${isAr ? "lg:flex-row-reverse" : ""}`}>
          {/* Text — left side */}
          <div className={`flex-1 ${isAr ? "text-right font-ar" : "text-left"}`}>
            <div className="animate-fade-in-up">
              <span className="inline-block px-4 py-1.5 bg-white/10 rounded-full text-white/80 text-sm font-medium mb-8 border border-white/15">
                {t.hero.subtitle}
              </span>
            </div>
            <h1
              className={`text-4xl sm:text-5xl lg:text-6xl xl:text-[4.25rem] font-extrabold text-white leading-[1.08] mb-6 animate-fade-in-up tracking-tight ${isAr ? "" : "font-display"}`}
              style={{ animationDelay: "0.12s" }}
            >
              {t.hero.title}
              <br />
              <span className="text-secondary-light">{t.hero.titleHighlight}</span>
            </h1>
            <p
              className="text-lg sm:text-xl text-white/80 max-w-lg mb-10 leading-relaxed animate-fade-in-up"
              style={{ animationDelay: "0.24s" }}
            >
              {t.hero.description}
            </p>
            <div
              className={`flex flex-wrap gap-4 animate-fade-in-up ${isAr ? "justify-end" : ""}`}
              style={{ animationDelay: "0.36s" }}
            >
              <a
                href="#products"
                className="px-8 py-4 bg-secondary hover:bg-secondary-light text-white font-bold rounded-full transition-all duration-200 hover:shadow-[0_8px_24px_rgba(212,148,14,0.3)] text-lg"
              >
                {t.hero.cta}
              </a>
              <a
                href="#contact"
                className="px-8 py-4 border-2 border-white/30 text-white hover:bg-white/10 font-bold rounded-full transition-all duration-200 text-lg"
              >
                {t.hero.contactBtn}
              </a>
            </div>
          </div>

          {/* Right side — product images mosaic */}
          <div className="flex-shrink-0 w-full max-w-sm lg:max-w-md animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-3">
                <div className="rounded-2xl overflow-hidden aspect-square shadow-2xl">
                  <img src="/products/Artichokes-Fresh-1.jpg" alt="" className="w-full h-full object-cover" loading="eager" />
                </div>
                <div className="rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl">
                  <img src="/products/Strawberries.jpg" alt="" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="space-y-3 pt-8">
                <div className="rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl">
                  <img src="/products/Broccoli.jpg" alt="" className="w-full h-full object-cover" />
                </div>
                <div className="rounded-2xl overflow-hidden aspect-square shadow-2xl">
                  <img src="/products/Mango.jpg" alt="" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator — no bounce */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:block">
          <a href="#about" className="text-white/30 hover:text-white/60 transition-colors" aria-label="Scroll to About section">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
