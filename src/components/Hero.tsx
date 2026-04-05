"use client";

import { useLang } from "@/lib/LanguageContext";

export default function Hero() {
  const { t, lang } = useLang();
  const isAr = lang === "ar";

  return (
    <section id="home" className="relative min-h-screen flex items-center hero-gradient overflow-hidden">
      {/* Subtle light overlay */}
      <div className="absolute inset-0 hero-shine pointer-events-none" aria-hidden="true" />

      {/* Grain texture */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none" aria-hidden="true"
        style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E\")" }}
      />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 w-full pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className={`max-w-3xl ${isAr ? "mr-auto text-right font-ar" : "ml-0 text-left"}`}>
          {/* Badge */}
          <div className="animate-fade-in-up">
            <span className="inline-block px-4 py-1.5 bg-white/10 rounded-full text-white/80 text-sm font-medium mb-8 border border-white/15">
              {t.hero.subtitle}
            </span>
          </div>

          {/* Heading — display font for EN, Cairo for AR */}
          <h1
            className={`text-[clamp(2.5rem,6vw,5rem)] font-bold text-white leading-[1.08] mb-8 animate-fade-in-up ${
              isAr ? "" : "font-display"
            }`}
            style={{ animationDelay: "0.12s" }}
          >
            {t.hero.title}
            <br />
            <span className="text-secondary-light">{t.hero.titleHighlight}</span>
          </h1>

          {/* Description */}
          <p
            className="text-lg sm:text-xl text-white/80 max-w-lg mb-12 leading-relaxed animate-fade-in-up"
            style={{ animationDelay: "0.24s" }}
          >
            {t.hero.description}
          </p>

          {/* CTAs */}
          <div
            className={`flex flex-wrap gap-4 animate-fade-in-up ${isAr ? "justify-end" : ""}`}
            style={{ animationDelay: "0.36s" }}
          >
            <a
              href="#products"
              className="px-8 py-4 bg-secondary hover:bg-secondary-light text-white font-semibold rounded-full transition-all duration-200 hover:shadow-[0_8px_24px_rgba(212,148,14,0.35)] text-base"
            >
              {t.hero.cta}
            </a>
            <a
              href="#contact"
              className="px-8 py-4 border-2 border-white/30 text-white hover:bg-white/10 font-semibold rounded-full transition-all duration-200 text-base"
            >
              {t.hero.contactBtn}
            </a>
          </div>
        </div>

        {/* Product image strip on right side — desktop only */}
        <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-[340px]" aria-hidden="true">
          <div className="grid grid-cols-2 gap-3 opacity-[0.15]">
            {[
              "/products/Artichokes-Fresh-1.jpg",
              "/products/Strawberries.jpg",
              "/products/Broccoli.jpg",
              "/products/Mango.jpg",
              "/products/Okra.jpg",
              "/products/Pomegranate.jpg",
            ].map((src, i) => (
              <div key={i} className="aspect-square rounded-2xl overflow-hidden">
                <img src={src} alt="" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
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
