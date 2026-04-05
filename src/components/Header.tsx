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
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") closeMenu(); };
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
          ? "bg-white/97 shadow-[0_1px_2px_rgba(26,45,26,0.06)] py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3 shrink-0 rounded-lg">
          <img src="/logo.png" alt="Al Noor Export" className="h-10 sm:h-12 w-auto" />
          <div className={`hidden sm:block transition-colors duration-300 ${scrolled ? "text-primary-dark" : "text-white"}`}>
            <div className={`font-bold text-sm leading-tight ${lang === "ar" ? "font-ar" : "tracking-wide"}`}>
              {lang === "ar" ? "النور للتصدير" : "AL NOOR"}
            </div>
            <div className={`text-xs opacity-60 ${lang === "ar" ? "font-ar" : ""}`}>
              {lang === "ar" ? "والصناعات الغذائية" : "EXPORT & FOOD"}
            </div>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`px-3.5 py-1.5 rounded-md text-sm font-medium transition-colors duration-200 ${
                scrolled
                  ? "text-text-muted hover:text-primary"
                  : "text-white/75 hover:text-white"
              } ${lang === "ar" ? "font-ar" : ""}`}
            >
              {item.label}
            </a>
          ))}
          <button
            onClick={toggleLang}
            className={`ms-2 px-3.5 py-1.5 rounded-md text-sm font-bold border transition-colors duration-200 ${
              scrolled
                ? "border-border text-text hover:border-primary hover:text-primary"
                : "border-white/30 text-white/90 hover:bg-white/10"
            } ${lang === "en" ? "font-ar" : ""}`}
          >
            {t.nav.langSwitch}
          </button>
        </nav>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`md:hidden p-3 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg transition-colors ${
            scrolled ? "text-text" : "text-white"
          }`}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <nav id="mobile-menu" className="md:hidden bg-white shadow-lg border-t border-border mt-1" aria-label="Mobile navigation">
          <div className="flex flex-col p-3 gap-0.5">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className={`px-4 py-3 rounded-lg text-text hover:bg-surface font-medium transition-colors text-sm ${
                  lang === "ar" ? "font-ar text-right" : ""
                }`}
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={() => { toggleLang(); closeMenu(); }}
              className={`mt-1 px-4 py-3 rounded-lg border border-border text-text font-bold hover:bg-surface transition-colors text-sm ${
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
