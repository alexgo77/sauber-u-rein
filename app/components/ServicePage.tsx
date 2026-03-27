import Link from "next/link";
import CTABanner from "./CTABanner";
import FAQ from "./FAQ";

interface FAQItem {
  question: string;
  answer: string;
}

interface ServicePageProps {
  headline: string;
  intro: string;
  children: React.ReactNode;
  faqItems: FAQItem[];
  ctaTitle?: string;
  ctaText?: string;
  relatedLinks?: { href: string; label: string }[];
}

export default function ServicePage({
  headline,
  intro,
  children,
  faqItems,
  ctaTitle,
  ctaText,
  relatedLinks,
}: ServicePageProps) {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-50 via-white to-gray-50" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <Link
            href="/"
            className="inline-flex items-center gap-1 text-sm text-brand-500 hover:text-brand-600 mb-8 transition-colors"
          >
            ← Zurück zur Übersicht
          </Link>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-6">
            {headline}
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-3xl">
            {intro}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <a
              href="tel:+491705749211"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg bg-brand-500 text-white font-semibold hover:bg-brand-600 transition-colors shadow-lg shadow-brand-500/25"
            >
              📞 +49 (0) 170 5749211
            </a>
            <a
              href="mailto:kontakt@sauber-u-rein.de"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg border-2 border-gray-200 text-gray-700 font-semibold hover:border-brand-300 hover:text-brand-500 transition-colors"
            >
              kontakt@sauber-u-rein.de
            </a>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose-custom">{children}</div>
      </section>

      {/* Related Links */}
      {relatedLinks && relatedLinks.length > 0 && (
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="border-t border-gray-100 pt-8">
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
              Weitere Leistungen
            </h3>
            <div className="flex flex-wrap gap-3">
              {relatedLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 rounded-lg bg-gray-50 text-sm font-medium text-gray-700 hover:bg-brand-50 hover:text-brand-500 transition-colors border border-gray-100"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTABanner title={ctaTitle} text={ctaText} />

      <FAQ items={faqItems} />

      {/* NAP */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center text-sm text-gray-500">
          <p className="font-semibold text-gray-900">Sauber &amp; Rein</p>
          <p>Johanna-Kinkel-Str. 1, 93049 Regensburg</p>
          <p>
            Tel.:{" "}
            <a href="tel:+491705749211" className="text-brand-500">
              +49 (0) 170 5749211
            </a>{" "}
            · E-Mail:{" "}
            <a href="mailto:kontakt@sauber-u-rein.de" className="text-brand-500">
              kontakt@sauber-u-rein.de
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
