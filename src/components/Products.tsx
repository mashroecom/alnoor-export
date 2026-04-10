"use client";

import { useState } from "react";
import Image from "next/image";
import { useLang } from "@/lib/LanguageContext";
import { products } from "@/lib/translations";
import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";

export default function Products() {
  const { t, lang } = useLang();
  const isAr = lang === "ar";
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);
  const [filterKey, setFilterKey] = useState(0);
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
      className={`py-20 lg:py-28 bg-white ${isAr ? "font-ar" : ""}`}
      dir={t.dir}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12 reveal-scale">
          <div className={`max-w-xl ${isAr ? "text-right" : ""}`}>
            <span className="inline-block text-primary text-sm font-semibold tracking-widest uppercase mb-3">
              {t.products.badge}
            </span>
            <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text leading-tight ${isAr ? "" : "font-display"}`}>
              {t.products.title}{" "}
              <span className="text-primary">{t.products.titleHighlight}</span>
            </h2>
            <p className="mt-3 text-text-muted leading-relaxed">{t.products.description}</p>
          </div>

          <div className="flex flex-wrap gap-2 shrink-0" role="tablist" aria-label="Product categories">
            {categories.map((cat) => (
              <button
                key={cat.key}
                role="tab"
                aria-selected={activeCategory === cat.key}
                onClick={() => { setActiveCategory(cat.key); setFilterKey((k) => k + 1); }}
                className={`px-5 py-2 min-h-[44px] flex items-center rounded-full text-sm font-semibold transition-all duration-200 ${
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

        <div key={filterKey} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-5" role="tabpanel">
          {filtered.map((product, i) => (
            <button
              key={product.id}
              onClick={() => setSelectedProduct(product)}
              className="product-card product-enter bg-white rounded-2xl border border-border overflow-hidden group text-left cursor-pointer"
              style={{ animationDelay: `${Math.min(i * 0.04, 0.4)}s` }}
            >
              <div className="aspect-square bg-surface-alt relative overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name[lang]}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 20vw"
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
            </button>
          ))}
        </div>
      </div>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 modal-backdrop"
          onClick={() => setSelectedProduct(null)}
          role="dialog"
          aria-modal="true"
          aria-label={selectedProduct.name[lang]}
        >
          <div
            className={`bg-white rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl modal-content ${isAr ? "font-ar" : ""}`}
            onClick={(e) => e.stopPropagation()}
            dir={t.dir}
          >
            <div className="relative aspect-video">
              <Image
                src={selectedProduct.image}
                alt={selectedProduct.name[lang]}
                fill
                className="object-cover"
                sizes="(max-width: 512px) 90vw, 512px"
              />
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-3 right-3 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center text-text hover:bg-white transition-colors"
                aria-label="Close"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className={`p-6 ${isAr ? "text-right" : ""}`}>
              <h3 className="text-2xl font-bold text-text mb-2">{selectedProduct.name[lang]}</h3>
              <span className={`text-sm font-medium px-3 py-1 rounded-full ${
                selectedProduct.category === "fruits"
                  ? "bg-red-50 text-red-700"
                  : selectedProduct.category === "preserved"
                  ? "bg-amber-50 text-amber-700"
                  : "bg-green-50 text-green-700"
              }`}>
                {selectedProduct.category === "fruits"
                  ? isAr ? "فاكهة مجمدة" : "Frozen Fruit"
                  : selectedProduct.category === "preserved"
                  ? isAr ? "منتج محفوظ" : "Preserved Product"
                  : (selectedProduct.id === 1 || selectedProduct.id === 26)
                  ? isAr ? "خضار فريش" : "Fresh Vegetable"
                  : isAr ? "خضار مجمد" : "Frozen Vegetable"}
              </span>
              {(() => {
                const isFresh = selectedProduct.id === 1 || selectedProduct.id === 26;
                const isRoomTemp = selectedProduct.category === "preserved" || isFresh;
                const isPreserved = selectedProduct.category === "preserved";
                const isPumpkin = selectedProduct.id === 26;
                const isArtichokesFresh = selectedProduct.id === 1;
                return (
                  <div className="mt-4 space-y-2 text-text-muted text-sm">
                    <div className="flex justify-between border-b border-border pb-2">
                      <span className="font-medium">{isAr ? "التعبئة" : "Packaging"}</span>
                      <span>{isPumpkin ? (isAr ? "حسب الطلب" : "As requested") : isArtichokesFresh ? (isAr ? "30 قطعة" : "30 pieces") : isPreserved ? (isAr ? "160 كجم / برميل" : "160 kg / barrel") : (isAr ? "10 كجم / كرتون" : "10 kg / carton")}</span>
                    </div>
                    <div className="flex justify-between border-b border-border pb-2">
                      <span className="font-medium">{isAr ? "درجة الحرارة" : "Storage"}</span>
                      <span>{isRoomTemp ? (isAr ? "درجة حرارة الغرفة" : "Room Temperature") : "-18°C"}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">{isAr ? "المنشأ" : "Origin"}</span>
                      <span>{isAr ? "مصر" : "Egypt"}</span>
                    </div>
                  </div>
                );
              })()}
              <a
                href="https://wa.me/201030210408"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 w-full flex items-center justify-center gap-2 px-6 py-3 bg-whatsapp hover:brightness-110 text-white font-bold rounded-full transition-all text-sm"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                {isAr ? "اطلب عبر واتساب" : "Order via WhatsApp"}
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
