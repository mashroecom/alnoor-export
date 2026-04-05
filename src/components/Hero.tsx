"use client";

import { useLang } from "@/lib/LanguageContext";

export default function Hero() {
  const { t, lang } = useLang();
  const isAr = lang === "ar";

  return (
    <section id="home" className="relative min-h-screen flex items-center hero-gradient overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none" aria-hidden="true">
        <div className="absolute top-20 left-10 text-7xl opacity-[0.07] animate-float">🥦</div>
        <div className="absolute top-40 right-20 text-6xl opacity-[0.07] animate-float-delay">🍓</div>
        <div className="absolute bottom-40 left-1/4 text-8xl opacity-[0.07] animate-float-delay-2">🥕</div>
        <div className="absolute bottom-20 right-10 text-7xl opacity-[0.07] animate-float">🌽</div>
        <div className="absolute top-1/3 right-1/3 text-5xl opacity-[0.07] animate-float-delay">🍋</div>
        <div className="absolute inset-0 opacity-[0.03] pattern-dots" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 w-full py-32">
        <div className={`flex flex-col lg:flex-row items-center gap-12 ${isAr ? "lg:flex-row-reverse" : ""}`}>
          <div className={`flex-1 ${isAr ? "text-right font-ar" : "text-left"}`}>
            <div className="animate-fade-in-up">
              <span className="inline-block px-4 py-1.5 bg-white/15 rounded-full text-white/90 text-sm font-medium mb-6 border border-white/20">
                {t.hero.subtitle}
              </span>
            </div>
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-[1.1] mb-6 animate-fade-in-up tracking-tight"
              style={{ animationDelay: "0.1s" }}
            >
              {t.hero.title}
              <br />
              <span className="text-secondary-light">{t.hero.titleHighlight}</span>
            </h1>
            <p
              className="text-lg sm:text-xl text-white/90 max-w-xl mb-10 leading-relaxed animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              {t.hero.description}
            </p>
            <div
              className={`flex flex-wrap gap-4 animate-fade-in-up ${isAr ? "justify-end" : ""}`}
              style={{ animationDelay: "0.3s" }}
            >
              <a
                href="#products"
                className="px-8 py-4 bg-secondary hover:bg-secondary-light text-primary-dark font-bold rounded-full transition-colors duration-200 hover:shadow-lg hover:shadow-secondary/25 text-lg"
              >
                {t.hero.cta}
              </a>
              <a
                href="#contact"
                className="px-8 py-4 border-2 border-white/40 text-white hover:bg-white hover:text-primary-dark font-bold rounded-full transition-colors duration-200 text-lg"
              >
                {t.hero.contactBtn}
              </a>
            </div>
          </div>

          <div className="flex-shrink-0 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="relative">
              <div className="absolute inset-0 bg-white/8 rounded-full blur-3xl scale-110" aria-hidden="true" />
              <img
                src="/logo.png"
                alt="Al Noor Export & Food Industries"
                className="relative w-64 sm:w-80 lg:w-96 h-auto drop-shadow-2xl animate-float"
              />
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:block">
          <a href="#about" className="flex flex-col items-center gap-2 text-white/40 hover:text-white/70 transition-colors" aria-label="Scroll to About section">
            <svg className="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
