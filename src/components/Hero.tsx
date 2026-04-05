"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useLang } from "@/lib/LanguageContext";

/* ── Staggered character reveal ───────────────────────── */
function SplitText({
  text,
  className = "",
  baseDelay = 0,
  charDelay = 0.025,
  splitBy = "char",
}: {
  text: string;
  className?: string;
  baseDelay?: number;
  charDelay?: number;
  splitBy?: "char" | "word";
}) {
  const parts = splitBy === "word" ? text.split(" ") : text.split("");

  return (
    <span className={className} aria-label={text}>
      {parts.map((part, i) => (
        <span
          key={i}
          className="inline-block animate-fade-in-up"
          style={{
            animationDelay: `${baseDelay + i * charDelay}s`,
            whiteSpace: splitBy === "char" && part === " " ? "pre" : undefined,
          }}
          aria-hidden="true"
        >
          {splitBy === "word" ? (i < parts.length - 1 ? part + "\u00A0" : part) : (part === " " ? "\u00A0" : part)}
        </span>
      ))}
    </span>
  );
}

export default function Hero() {
  const { t, lang } = useLang();
  const isAr = lang === "ar";
  const heroRef = useRef<HTMLElement>(null);
  const [scrollY, setScrollY] = useState(0);

  /* Parallax: track scroll position for image depth layers */
  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Parallax multipliers for each image layer */
  const p = (factor: number) => ({
    transform: `translateY(${scrollY * factor}px)`,
  });

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center hero-gradient overflow-hidden"
    >
      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 w-full py-28 lg:py-0 lg:min-h-screen lg:flex lg:items-center">
        <div className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 w-full ${isAr ? "lg:flex-row-reverse" : ""}`}>
          <div className={`flex-1 ${isAr ? "text-right font-ar" : "text-left"}`}>
            {/* Badge */}
            <div className="animate-fade-in-up">
              <span className="inline-block px-4 py-1.5 bg-white/12 rounded-full text-white text-sm font-medium mb-8 border border-white/20">
                {t.hero.subtitle}
              </span>
            </div>

            {/* Heading — character stagger for EN, word stagger for AR */}
            <h1
              className={`text-4xl sm:text-5xl lg:text-6xl xl:text-[4.25rem] font-extrabold text-white leading-[1.08] mb-6 tracking-tight ${isAr ? "" : "font-display"}`}
            >
              {isAr ? (
                <>
                  <SplitText text={t.hero.title} baseDelay={0.12} charDelay={0.06} splitBy="word" />
                  <br />
                  <SplitText
                    text={t.hero.titleHighlight}
                    className="text-secondary-light"
                    baseDelay={0.12 + t.hero.title.split(" ").length * 0.06 + 0.1}
                    charDelay={0.08}
                    splitBy="word"
                  />
                </>
              ) : (
                <>
                  <SplitText text={t.hero.title} baseDelay={0.12} charDelay={0.02} />
                  <br />
                  <SplitText
                    text={t.hero.titleHighlight}
                    className="text-secondary-light"
                    baseDelay={0.12 + t.hero.title.length * 0.02 + 0.1}
                    charDelay={0.025}
                  />
                </>
              )}
            </h1>

            <p
              className="text-lg sm:text-xl text-white/90 max-w-lg mb-10 leading-relaxed animate-fade-in-up"
              style={{ animationDelay: "0.8s" }}
            >
              {t.hero.description}
            </p>

            <div
              className={`flex flex-wrap gap-4 animate-fade-in-up ${isAr ? "justify-end" : ""}`}
              style={{ animationDelay: "0.95s" }}
            >
              <a href="#products" className="btn-press btn-glow px-8 py-4 bg-secondary hover:bg-secondary-light text-white font-bold rounded-full transition-all duration-200 text-lg relative overflow-hidden">
                {t.hero.cta}
              </a>
              <a href="#contact" className="btn-press px-8 py-4 border-2 border-white/40 text-white hover:bg-white/10 font-bold rounded-full transition-all duration-200 text-lg">
                {t.hero.contactBtn}
              </a>
            </div>
          </div>

          {/* ── Parallax image grid ──────────────────── */}
          <div className="flex-shrink-0 w-full max-w-sm lg:max-w-md">
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-3">
                <div
                  className="rounded-2xl overflow-hidden aspect-square shadow-[0_8px_30px_rgba(26,45,26,0.3)] relative animate-fade-in-up hero-img-float"
                  style={{ animationDelay: "0.15s", ...p(-0.04) }}
                >
                  <Image src="/products/Artichokes-Fresh-1.jpg" alt="Fresh Egyptian artichokes" fill className="object-cover" priority sizes="(max-width: 768px) 45vw, 200px" />
                </div>
                <div
                  className="rounded-2xl overflow-hidden aspect-[4/3] shadow-[0_8px_30px_rgba(26,45,26,0.3)] relative animate-fade-in-up hero-img-float-slow"
                  style={{ animationDelay: "0.35s", ...p(-0.07) }}
                >
                  <Image src="/products/Strawberries.jpg" alt="Frozen strawberries" fill className="object-cover" sizes="(max-width: 768px) 45vw, 200px" />
                </div>
              </div>
              <div className="space-y-3 pt-8">
                <div
                  className="rounded-2xl overflow-hidden aspect-[4/3] shadow-[0_8px_30px_rgba(26,45,26,0.3)] relative animate-fade-in-up hero-img-float-delay"
                  style={{ animationDelay: "0.25s", ...p(-0.05) }}
                >
                  <Image src="/products/Broccoli.jpg" alt="Frozen broccoli" fill className="object-cover" sizes="(max-width: 768px) 45vw, 200px" />
                </div>
                <div
                  className="rounded-2xl overflow-hidden aspect-square shadow-[0_8px_30px_rgba(26,45,26,0.3)] relative animate-fade-in-up hero-img-float"
                  style={{ animationDelay: "0.45s", ...p(-0.08) }}
                >
                  <Image src="/products/Mango.jpg" alt="Frozen mango slices" fill className="object-cover" sizes="(max-width: 768px) 45vw, 200px" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 hidden sm:block animate-float-y">
          <a href="#about" className="text-white/50 hover:text-white/80 transition-colors" aria-label="Scroll to About section">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
