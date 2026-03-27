import Link from "next/link";

interface CTABannerProps {
  title?: string;
  text?: string;
  linkHref?: string;
  linkText?: string;
}

export default function CTABanner({
  title = "Jetzt kostenloses Angebot anfordern",
  text = "Lassen Sie sich unverbindlich beraten. Wir melden uns innerhalb von 24 Stunden mit einem konkreten Angebot für Ihr Objekt in Regensburg.",
  linkHref = "/#kontakt",
  linkText = "Kontakt aufnehmen →",
}: CTABannerProps) {
  return (
    <section className="section-padding bg-brand-500">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          {title}
        </h2>
        <p className="text-lg text-brand-100 mb-8 max-w-2xl mx-auto">
          {text}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+491705749211"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg bg-white text-brand-500 font-semibold hover:bg-gray-50 transition-colors shadow-lg"
          >
            📞 +49 (0) 170 5749211
          </a>
          <Link
            href={linkHref}
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg border-2 border-white/30 text-white font-semibold hover:bg-white/10 transition-colors"
          >
            {linkText}
          </Link>
        </div>
      </div>
    </section>
  );
}
