"use client";

import { useLang } from "@/lib/LanguageContext";
import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";

export default function WhyUs() {
  const { t, lang } = useLang();
  const isAr = lang === "ar";
  const sectionRef = useRevealOnScroll();

  const items = [
    { num: "01", title: t.why.card1Title, desc: t.why.card1Desc, accent: "border-l-primary" },
    { num: "02", title: t.why.card2Title, desc: t.why.card2Desc, accent: "border-l-emerald-600" },
    { num: "03", title: t.why.card3Title, desc: t.why.card3Desc, accent: "border-l-secondary" },
    { num: "04", title: t.why.card4Title, desc: t.why.card4Desc, accent: "border-l-primary-dark" },
  ];

  return (
    <section
      id="why"
      ref={sectionRef}
      className={`py-20 lg:py-28 bg-surface ${isAr ? "font-ar" : ""}`}
      dir={t.dir}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Right-aligned heading — varies from About's left alignment */}
        <div className={`max-w-2xl mb-14 reveal ${isAr ? "" : "ml-auto text-right"}`}>
          <span className="inline-block text-primary text-sm font-semibold tracking-widest uppercase mb-3">
            {t.why.badge}
          </span>
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text leading-tight ${isAr ? "" : "font-display"}`}>
            {t.why.title}{" "}
            <span className="text-primary">{t.why.titleHighlight}</span>
          </h2>
        </div>

        {/* Numbered list with left accent bars — NOT identical cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {items.map((item, i) => (
            <div
              key={i}
              className={`reveal bg-white rounded-xl p-7 border border-border ${isAr ? "border-r-4 border-l-0" : "border-l-4"} ${isAr ? item.accent.replace("border-l-", "border-r-") : item.accent} hover:shadow-[0_6px_24px_rgba(26,45,26,0.07)] transition-shadow duration-300 ${
                i === 0 ? "md:col-span-2" : ""
              }`}
            >
              <div className={`${isAr ? "text-right" : ""}`}>
                <span className="text-xs font-bold text-text-subtle tracking-widest">{item.num}</span>
                <h3 className="text-xl font-bold text-text mt-1 mb-2">{item.title}</h3>
                <p className={`text-text-muted leading-relaxed ${i === 0 ? "max-w-2xl" : ""}`}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
