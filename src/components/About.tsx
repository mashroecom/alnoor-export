"use client";

import { useLang } from "@/lib/LanguageContext";
import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";

export default function About() {
  const { t, lang } = useLang();
  const isAr = lang === "ar";
  const sectionRef = useRevealOnScroll();

  const stats = [
    { value: t.about.stat1Value, label: t.about.stat1Label },
    { value: t.about.stat2Value, label: t.about.stat2Label },
    { value: t.about.stat3Value, label: t.about.stat3Label },
    { value: t.about.stat4Value, label: t.about.stat4Label },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className={`py-20 lg:py-32 bg-white ${isAr ? "font-ar" : ""}`}
      dir={t.dir}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Asymmetric layout: narrow intro left, wide content right */}
        <div className={`flex flex-col lg:flex-row gap-16 lg:gap-24 ${isAr ? "lg:flex-row-reverse" : ""}`}>
          {/* Left column — tight intro */}
          <div className="lg:w-2/5 reveal">
            <span className="inline-block text-primary text-sm font-semibold tracking-widest uppercase mb-4">
              {t.about.badge}
            </span>
            <h2 className={`text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-text leading-tight mb-6 ${isAr ? "" : "font-display"}`}>
              {t.about.title}{" "}
              <span className="text-primary">{t.about.titleHighlight}</span>
            </h2>
            <div className="w-16 h-1 bg-secondary rounded-full mb-8" aria-hidden="true" />
            <p className="text-text-muted leading-relaxed mb-6">{t.about.p1}</p>
            <p className="text-text-muted leading-relaxed">{t.about.p2}</p>
          </div>

          {/* Right column — stats + extra text */}
          <div className="lg:w-3/5 space-y-10">
            {/* Stats row */}
            <div className="reveal">
              <dl className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
                {stats.map((stat, i) => (
                  <div
                    key={i}
                    className={`text-center py-6 ${i < stats.length - 1 ? "sm:border-r sm:border-border" : ""}`}
                  >
                    <dd className={`text-3xl sm:text-4xl font-bold text-primary mb-1 ${isAr ? "" : "font-display"}`}>
                      {stat.value}
                    </dd>
                    <dt className="text-sm text-text-subtle font-medium">{stat.label}</dt>
                  </div>
                ))}
              </dl>
            </div>

            {/* Quote-style third paragraph */}
            <blockquote className="reveal border-l-4 border-primary/20 pl-6 py-2">
              <p className="text-lg text-text-muted italic leading-relaxed">{t.about.p3}</p>
            </blockquote>

            {/* Trust badges */}
            <div className="reveal flex flex-wrap gap-4">
              {["HACCP", "ISO 22000", "GMP", "HALAL"].map((cert) => (
                <span
                  key={cert}
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-surface rounded-lg text-sm font-semibold text-primary border border-border"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  {cert}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
