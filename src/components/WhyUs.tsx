"use client";

import { useLang } from "@/lib/LanguageContext";
import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";

export default function WhyUs() {
  const { t, lang } = useLang();
  const isAr = lang === "ar";
  const sectionRef = useRevealOnScroll();

  const cards = [
    { title: t.why.card1Title, desc: t.why.card1Desc, accent: "bg-primary" },
    { title: t.why.card2Title, desc: t.why.card2Desc, accent: "bg-emerald-600" },
    { title: t.why.card3Title, desc: t.why.card3Desc, accent: "bg-secondary" },
    { title: t.why.card4Title, desc: t.why.card4Desc, accent: "bg-primary-dark" },
  ];

  return (
    <section
      id="why"
      ref={sectionRef}
      className={`py-20 lg:py-32 bg-surface ${isAr ? "font-ar" : ""}`}
      dir={t.dir}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="max-w-2xl mb-16 reveal">
          <span className="inline-block text-primary text-sm font-semibold tracking-widest uppercase mb-4">
            {t.why.badge}
          </span>
          <h2 className={`text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-text leading-tight ${isAr ? "" : "font-display"}`}>
            {t.why.title}{" "}
            <span className="text-primary">{t.why.titleHighlight}</span>
          </h2>
        </div>

        {/* Varied grid: first card spans 2 cols on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {cards.map((card, i) => (
            <div
              key={i}
              className={`reveal bg-white rounded-2xl p-8 lg:p-10 border border-border hover:shadow-[0_8px_30px_rgba(26,45,26,0.08)] transition-shadow duration-300 relative overflow-hidden ${
                i === 0 ? "md:col-span-2" : ""
              }`}
            >
              {/* Accent bar */}
              <div className={`absolute top-0 ${isAr ? "right-0" : "left-0"} w-1 h-full ${card.accent}`} aria-hidden="true" />
              <div className={`${isAr ? "pr-6" : "pl-6"}`}>
                <span className="text-xs font-semibold text-text-subtle uppercase tracking-wider">0{i + 1}</span>
                <h3 className="text-xl lg:text-2xl font-bold text-text mt-2 mb-3">{card.title}</h3>
                <p className={`text-text-muted leading-relaxed ${i === 0 ? "max-w-2xl" : ""}`}>{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
