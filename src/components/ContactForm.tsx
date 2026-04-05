"use client";

import { useState } from "react";
import { useLang } from "@/lib/LanguageContext";

export default function ContactForm() {
  const { t, lang } = useLang();
  const isAr = lang === "ar";
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get("name") as string;
    const email = data.get("email") as string;
    const message = data.get("message") as string;

    const whatsappText = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    );
    window.open(`https://wa.me/201005702908?text=${whatsappText}`, "_blank");
    setSent(true);
    form.reset();
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <form onSubmit={handleSubmit} className={`space-y-4 ${isAr ? "text-right" : ""}`}>
      <div>
        <label htmlFor="contact-name" className="block text-xs text-text-subtle font-medium uppercase tracking-wider mb-1">
          {t.contact.formName}
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          required
          className="w-full px-4 py-3 rounded-lg border border-border bg-white text-text focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors text-sm"
          dir={isAr ? "rtl" : "ltr"}
        />
      </div>
      <div>
        <label htmlFor="contact-email" className="block text-xs text-text-subtle font-medium uppercase tracking-wider mb-1">
          {t.contact.formEmail}
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          required
          className="w-full px-4 py-3 rounded-lg border border-border bg-white text-text focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors text-sm"
          dir="ltr"
        />
      </div>
      <div>
        <label htmlFor="contact-message" className="block text-xs text-text-subtle font-medium uppercase tracking-wider mb-1">
          {t.contact.formMessage}
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={4}
          className="w-full px-4 py-3 rounded-lg border border-border bg-white text-text focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors text-sm resize-none"
          dir={isAr ? "rtl" : "ltr"}
        />
      </div>
      <button
        type="submit"
        className="w-full px-6 py-3 bg-primary hover:bg-primary-dark text-white font-bold rounded-full transition-colors duration-200 text-sm"
      >
        {sent ? (isAr ? "تم الإرسال ✓" : "Sent ✓") : t.contact.formSend}
      </button>
    </form>
  );
}
