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
import BackToTop from "@/components/BackToTop";

function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Al Noor Export & Food Industries",
    url: "https://alnoor-export.com",
    logo: "https://alnoor-export.com/logo.jpg",
    description: "Leading Egyptian company in the production and export of frozen fruits, vegetables, and preserved products.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Industrial Zone",
      addressLocality: "Kafr El Dawar",
      addressRegion: "Beheira",
      addressCountry: "EG",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+20-100-570-2908",
      contactType: "sales",
      availableLanguage: ["English", "Arabic"],
    },
    sameAs: ["https://wa.me/201005702908"],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

function AppContent() {
  const { t } = useLang();

  return (
    <div dir={t.dir} className={t.lang === "ar" ? "font-ar" : ""}>
      <JsonLd />
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
      <BackToTop />
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
