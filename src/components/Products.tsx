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
      className={`py-24 bg-white ${isAr ? "font-ar" : ""}`}
      dir={t.dir}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 reveal">
          <span className="inline-block px-5 py-2 bg-primary/8 text-primary rounded-full text-sm font-semibold mb-4">
            {t.products.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text tracking-tight">
            {t.products.title}{" "}
            <span className="text-primary">{t.products.titleHighlight}</span>
          </h2>
          <p className="mt-4 text-lg text-text-muted max-w-2xl mx-auto leading-relaxed">
            {t.products.description}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12 reveal" role="tablist" aria-label="Product categories">
          {categories.map((cat) => (
            <button
              key={cat.key}
              role="tab"
              aria-selected={activeCategory === cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                activeCategory === cat.key
                  ? "bg-primary text-white shadow-md shadow-primary/20"
                  : "bg-surface-alt text-text-muted hover:bg-primary/10 hover:text-primary"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-5" role="tabpanel">
          {filtered.map((product) => (
            <div
              key={product.id}
              className="product-card bg-white rounded-2xl border border-border overflow-hidden group"
            >
              <div className="aspect-square bg-surface-alt relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name[lang]}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-2 right-2 z-10">
                  <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                    product.category === "fruits"
                      ? "bg-red-50/95 text-red-700"
                      : product.category === "preserved"
                      ? "bg-amber-50/95 text-amber-700"
                      : "bg-green-50/95 text-green-700"
                  }`}>
                    {product.category === "fruits"
                      ? isAr ? "فاكهة" : "Fruit"
                      : product.category === "preserved"
                      ? isAr ? "محفوظ" : "Preserved"
                      : isAr ? "خضار" : "Veggie"}
                  </span>
                </div>
              </div>
              <div className={`p-4 ${isAr ? "text-right" : "text-left"}`}>
                <h3 className="font-bold text-text text-sm leading-tight">
                  {product.name[lang]}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
