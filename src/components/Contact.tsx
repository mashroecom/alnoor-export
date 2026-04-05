"use client";

import { useLang } from "@/lib/LanguageContext";
import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";

export default function Contact() {
  const { t, lang } = useLang();
  const isAr = lang === "ar";
  const sectionRef = useRevealOnScroll();

  return (
    <section
      id="contact"
      ref={sectionRef}
      className={`py-24 bg-surface ${isAr ? "font-ar" : ""}`}
      dir={t.dir}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16 reveal">
          <span className="inline-block px-5 py-2 bg-primary/8 text-primary rounded-full text-sm font-semibold mb-4">
            {t.contact.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text tracking-tight">
            {t.contact.title}{" "}
            <span className="text-primary">{t.contact.titleHighlight}</span>
          </h2>
          <p className="mt-4 text-lg text-text-muted max-w-2xl mx-auto leading-relaxed">
            {t.contact.description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-4 reveal">
            <div className="flex items-center gap-4 bg-white rounded-xl p-5 shadow-[0_2px_12px_rgba(26,45,26,0.04)] border border-border">
              <div className="w-12 h-12 bg-primary/8 rounded-xl flex items-center justify-center shrink-0">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <div className="text-sm text-text-subtle font-medium">{t.contact.phone}</div>
                <a href="tel:+201005702908" className="block font-bold text-text hover:text-primary transition-colors" dir="ltr">+20 100 570 2908</a>
                <a href="tel:+201000891236" className="block font-bold text-text hover:text-primary transition-colors" dir="ltr">+20 100 089 1236</a>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-white rounded-xl p-5 shadow-[0_2px_12px_rgba(26,45,26,0.04)] border border-border">
              <div className="w-12 h-12 bg-primary/8 rounded-xl flex items-center justify-center shrink-0">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <div className="text-sm text-text-subtle font-medium">{t.contact.email}</div>
                <a href="mailto:info@alnoor-export.com" className="font-bold text-text hover:text-primary transition-colors">info@alnoor-export.com</a>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-white rounded-xl p-5 shadow-[0_2px_12px_rgba(26,45,26,0.04)] border border-border">
              <div className="w-12 h-12 bg-primary/8 rounded-xl flex items-center justify-center shrink-0">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <div className="text-sm text-text-subtle font-medium">{t.contact.address}</div>
                <div className="font-bold text-text">{t.contact.addressValue}</div>
              </div>
            </div>

            <a
              href="https://wa.me/201005702908"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-green-50 hover:bg-green-100 rounded-xl p-5 border border-green-200 transition-colors duration-200 group whatsapp-pulse"
            >
              <div className="w-12 h-12 bg-whatsapp rounded-xl flex items-center justify-center shrink-0">
                <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>
              <div>
                <div className="font-bold text-green-800 text-lg group-hover:text-green-900">
                  {t.contact.whatsapp}
                </div>
                <div className="text-green-700 text-sm" dir="ltr">+20 100 570 2908</div>
              </div>
            </a>
          </div>

          <div className="reveal">
            <div className="bg-white rounded-2xl overflow-hidden shadow-[0_2px_12px_rgba(26,45,26,0.04)] border border-border h-full min-h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3412.5!2d30.13!3d31.13!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDA3JzQ4LjAiTiAzMMKwMDgnMDAuMCJF!5e0!3m2!1sen!2seg!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "450px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Al Noor Export Location"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
