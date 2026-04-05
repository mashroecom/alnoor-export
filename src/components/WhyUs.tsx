"use client";

import { useLang } from "@/lib/LanguageContext";
import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";

const icons = [
  <svg key="1" className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>,
  <svg key="2" className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>,
  <svg key="3" className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
  </svg>,
  <svg key="4" className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
  </svg>,
];

export default function WhyUs() {
  const { t, lang } = useLang();
  const isAr = lang === "ar";
  const sectionRef = useRevealOnScroll();

  const cards = [
    { title: t.why.card1Title, desc: t.why.card1Desc, icon: icons[0] },
    { title: t.why.card2Title, desc: t.why.card2Desc, icon: icons[1] },
    { title: t.why.card3Title, desc: t.why.card3Desc, icon: icons[2] },
    { title: t.why.card4Title, desc: t.why.card4Desc, icon: icons[3] },
  ];

  return (
    <section
      id="why"
      ref={sectionRef}
      className={`py-24 bg-surface ${isAr ? "font-ar" : ""}`}
      dir={t.dir}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16 reveal">
          <span className="inline-block px-5 py-2 bg-primary/8 text-primary rounded-full text-sm font-semibold mb-4">
            {t.why.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text tracking-tight">
            {t.why.title}{" "}
            <span className="text-primary">{t.why.titleHighlight}</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((card, i) => (
            <div
              key={i}
              className="reveal bg-white rounded-2xl p-8 shadow-[0_2px_12px_rgba(26,45,26,0.04)] hover:shadow-[0_8px_30px_rgba(26,45,26,0.08)] transition-shadow duration-300 border border-border group"
            >
              <div className={`flex items-start gap-5 ${isAr ? "flex-row-reverse text-right" : ""}`}>
                <div className="shrink-0 w-12 h-12 bg-primary/8 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  {card.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-text mb-3">{card.title}</h3>
                  <p className="text-text-muted leading-relaxed">{card.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
