"use client";

import { useState, useEffect, useCallback } from "react";
import { useLang } from "@/lib/LanguageContext";

export default function Header() {
  const { t, toggleLang, lang } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [menuOpen, closeMenu]);

  const navItems = [
    { label: t.nav.home, href: "#home" },
    { label: t.nav.about, href: "#about" },
    { label: t.nav.why, href: "#why" },
    { label: t.nav.products, href: "#products" },
    { label: t.nav.contact, href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/97 shadow-[0_1px_3px_rgba(26,45,26,0.08)] py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3 shrink-0 rounded-lg">
          <img src="/logo.png" alt="Al Noor Export" className="h-12 sm:h-14 w-auto" />
          <div className={`hidden sm:block transition-colors duration-300 ${scrolled ? "text-primary-dark" : "text-white"}`}>
            <div className={`font-bold text-sm leading-tight tracking-wide ${lang === "ar" ? "font-ar" : ""}`}>
              {lang === "ar" ? "النور للتصدير" : "AL NOOR"}
            </div>
            <div className={`text-xs opacity-75 ${lang === "ar" ? "font-ar" : ""}`}>
              {lang === "ar" ? "والصناعات الغذائية" : "EXPORT & FOOD INDUSTRIES"}
            </div>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-0.5" aria-label="Main navigation">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                scrolled
                  ? "text-text-muted hover:text-primary hover:bg-primary/8"
                  : "text-white/85 hover:text-white hover:bg-white/10"
              } ${lang === "ar" ? "font-ar" : ""}`}
            >
              {item.label}
            </a>
          ))}
          <button
            onClick={toggleLang}
            className={`ms-3 px-4 py-2 rounded-full text-sm font-bold border-2 transition-colors duration-200 ${
              scrolled
                ? "border-primary text-primary hover:bg-primary hover:text-white"
                : "border-white/60 text-white hover:bg-white hover:text-primary-dark"
            } ${lang === "en" ? "font-ar" : ""}`}
          >
            {t.nav.langSwitch}
          </button>
        </nav>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`md:hidden p-3 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg transition-colors ${
            scrolled ? "text-text-muted" : "text-white"
          }`}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <nav id="mobile-menu" className="md:hidden bg-white shadow-xl border-t border-border mt-2" aria-label="Mobile navigation">
          <div className="flex flex-col p-4 gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className={`px-4 py-3 rounded-lg text-text-muted hover:bg-primary/5 hover:text-primary font-medium transition-colors ${
                  lang === "ar" ? "font-ar text-right" : ""
                }`}
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={() => { toggleLang(); closeMenu(); }}
              className={`mt-2 px-4 py-3 rounded-lg border-2 border-primary text-primary font-bold hover:bg-primary hover:text-white transition-colors ${
                lang === "en" ? "font-ar" : ""
              }`}
            >
              {t.nav.langSwitch}
            </button>
          </div>
        </nav>
      )}
    </header>
  );
}
