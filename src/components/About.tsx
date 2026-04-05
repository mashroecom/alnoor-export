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
      className={`py-24 bg-white ${isAr ? "font-ar" : ""}`}
      dir={t.dir}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16 reveal">
          <span className="inline-block px-5 py-2 bg-primary/8 text-primary rounded-full text-sm font-semibold mb-4">
            {t.about.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text tracking-tight">
            {t.about.title}{" "}
            <span className="text-primary">{t.about.titleHighlight}</span>
          </h2>
        </div>

        <div className={`flex flex-col lg:flex-row gap-16 items-center ${isAr ? "lg:flex-row-reverse" : ""}`}>
          <div className="flex-1 space-y-6">
            <p className="text-lg text-text-muted leading-relaxed reveal">{t.about.p1}</p>
            <p className="text-lg text-text-muted leading-relaxed reveal">{t.about.p2}</p>
            <p className="text-lg text-text-muted leading-relaxed reveal">{t.about.p3}</p>
          </div>

          <div className="flex-1 reveal">
            <dl className="grid grid-cols-2 gap-6">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="bg-surface rounded-2xl p-6 shadow-[0_2px_12px_rgba(26,45,26,0.06)] hover:shadow-[0_4px_20px_rgba(26,45,26,0.1)] transition-shadow duration-300 text-center"
                >
                  <dd className="text-3xl sm:text-4xl font-extrabold text-primary">
                    {stat.value}
                  </dd>
                  <dt className="text-sm text-text-subtle mt-1 font-medium">{stat.label}</dt>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
