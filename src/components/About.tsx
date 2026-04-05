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
      className={`py-20 lg:py-28 bg-white ${isAr ? "font-ar" : ""}`}
      dir={t.dir}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Left-aligned heading — breaks the centered pattern */}
        <div className={`max-w-2xl mb-14 reveal ${isAr ? "mr-0 ml-auto text-right" : ""}`}>
          <span className="inline-block text-primary text-sm font-semibold tracking-widest uppercase mb-3">
            {t.about.badge}
          </span>
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text leading-tight ${isAr ? "" : "font-display"}`}>
            {t.about.title}{" "}
            <span className="text-primary">{t.about.titleHighlight}</span>
          </h2>
        </div>

        <div className={`flex flex-col lg:flex-row gap-16 ${isAr ? "lg:flex-row-reverse" : ""}`}>
          {/* Text content */}
          <div className="flex-1 space-y-5">
            <p className="text-lg text-text-muted leading-relaxed reveal">{t.about.p1}</p>
            <p className="text-text-muted leading-relaxed reveal">{t.about.p2}</p>
            <p className="text-text-muted leading-relaxed reveal">{t.about.p3}</p>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-3 pt-4 reveal">
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

          {/* Stats — with visual hierarchy */}
          <div className="flex-1 reveal">
            <dl className="grid grid-cols-2 gap-5">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="bg-surface rounded-2xl p-6 text-center hover:shadow-[0_4px_20px_rgba(26,45,26,0.08)] transition-shadow duration-300"
                >
                  <dd className={`font-extrabold text-primary mb-1 ${isAr ? "" : "font-display"} ${
                    i === 3 ? "text-3xl sm:text-5xl" : "text-3xl sm:text-4xl"
                  }`}>
                    {stat.value}
                  </dd>
                  <dt className="text-sm text-text-subtle font-medium">{stat.label}</dt>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
