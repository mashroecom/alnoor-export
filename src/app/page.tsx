"use client";

import { LanguageProvider, useLang } from "@/lib/LanguageContext";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WhyUs from "@/components/WhyUs";
import Products from "@/components/Products";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

function AppContent() {
  const { t } = useLang();

  return (
    <div dir={t.dir} className={t.lang === "ar" ? "font-ar" : ""}>
      <Header />
      <main>
        <Hero />
        <About />
        <WhyUs />
        <Products />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

export default function Home() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}
