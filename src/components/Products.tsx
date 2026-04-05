"use client";

import { useState } from "react";
import { useLang } from "@/lib/LanguageContext";
import { products } from "@/lib/translations";
import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";

export default function Products() {
  const { t, lang } = useLang();
  const isAr = lang === "ar";
  const [activeCategory, setActiveCategory] = useState("all");
  const sectionRef = useRevealOnScroll();

  const filtered =
    activeCategory === "all"
      ? products
      : products.filter((p) => p.category === activeCategory);

  const categories = [
    { key: "all", label: t.products.categories.all },
    { key: "vegetables", label: t.products.categories.vegetables },
    { key: "fruits", label: t.products.categories.fruits },
    { key: "preserved", label: t.products.categories.preserved },
  ];

  return (
    <section
      id="products"
      ref={sectionRef}
      className={`py-20 lg:py-32 bg-white ${isAr ? "font-ar" : ""}`}
      dir={t.dir}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header — left aligned */}
        <div className={`flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12 reveal ${isAr ? "sm:flex-row-reverse" : ""}`}>
          <div className={`max-w-xl ${isAr ? "text-right" : ""}`}>
            <span className="inline-block text-primary text-sm font-semibold tracking-widest uppercase mb-4">
              {t.products.badge}
            </span>
            <h2 className={`text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-text leading-tight ${isAr ? "" : "font-display"}`}>
              {t.products.title}{" "}
              <span className="text-primary">{t.products.titleHighlight}</span>
            </h2>
            <p className="mt-3 text-text-muted leading-relaxed">{t.products.description}</p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-2 shrink-0" role="tablist" aria-label="Product categories">
            {categories.map((cat) => (
              <button
                key={cat.key}
                role="tab"
                aria-selected={activeCategory === cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                  activeCategory === cat.key
                    ? "bg-primary text-white"
                    : "bg-surface-alt text-text-muted hover:bg-primary/10 hover:text-primary"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4" role="tabpanel">
          {filtered.map((product) => (
            <div
              key={product.id}
              className="product-card bg-white rounded-xl border border-border overflow-hidden group"
            >
              <div className="aspect-[4/3] bg-surface-alt relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name[lang]}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className={`px-3 py-3 ${isAr ? "text-right" : "text-left"}`}>
                <h3 className="font-semibold text-text text-sm leading-snug">
                  {product.name[lang]}
                </h3>
                <span className={`text-xs mt-1 inline-block font-medium ${
                  product.category === "fruits"
                    ? "text-red-600"
                    : product.category === "preserved"
                    ? "text-amber-600"
                    : "text-primary"
                }`}>
                  {product.category === "fruits"
                    ? isAr ? "فاكهة" : "Fruit"
                    : product.category === "preserved"
                    ? isAr ? "محفوظ" : "Preserved"
                    : isAr ? "خضار" : "Vegetable"}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
