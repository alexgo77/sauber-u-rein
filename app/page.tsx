"use client";

import { useState } from "react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <a href="#" className="flex items-center gap-2">
              <span className="text-2xl">✦</span>
              <span className="text-xl sm:text-2xl font-bold text-gray-900">
                Sauber{" "}
                <span className="text-primary-600">&amp;</span> Rein
              </span>
            </a>
            <div className="hidden md:flex items-center gap-8">
              <a
                href="#leistungen"
                className="text-sm font-medium text-gray-600 hover:text-primary-600 transition-colors"
              >
                Leistungen
              </a>
              <a
                href="#ueber-uns"
                className="text-sm font-medium text-gray-600 hover:text-primary-600 transition-colors"
              >
                Über uns
              </a>
              <a
                href="#kontakt"
                className="text-sm font-medium text-gray-600 hover:text-primary-600 transition-colors"
              >
                Kontakt
              </a>
              <a
                href="#kontakt"
                className="inline-flex items-center px-5 py-2.5 rounded-lg bg-primary-600 text-white text-sm font-semibold hover:bg-primary-700 transition-colors"
              >
                Angebot anfordern
              </a>
            </div>
            {/* Mobile hamburger button */}
            <button
              className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Menü öffnen"
            >
              {mobileMenuOpen ? (
                <span className="text-2xl leading-none">&#x2715;</span>
              ) : (
                <span className="text-2xl leading-none">&#x2630;</span>
              )}
            </button>
          </div>
          {/* Mobile menu */}
          {mobileMenuOpen && (
            <div className="md:hidden border-t border-gray-100 py-4 space-y-2">
              <a
                href="#leistungen"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-2.5 rounded-lg text-sm font-medium text-gray-700 hover:bg-primary-50 hover:text-primary-700 transition-colors"
              >
                Leistungen
              </a>
              <a
                href="#ueber-uns"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-2.5 rounded-lg text-sm font-medium text-gray-700 hover:bg-primary-50 hover:text-primary-700 transition-colors"
              >
                Über uns
              </a>
              <a
                href="#kontakt"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-2.5 rounded-lg text-sm font-medium text-gray-700 hover:bg-primary-50 hover:text-primary-700 transition-colors"
              >
                Kontakt
              </a>
              <a
                href="#kontakt"
                onClick={() => setMobileMenuOpen(false)}
                className="block mx-4 mt-2 text-center px-5 py-2.5 rounded-lg bg-primary-600 text-white text-sm font-semibold hover:bg-primary-700 transition-colors"
              >
                Angebot anfordern
              </a>
            </div>
          )}
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="relative pt-20 sm:pt-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-accent-50" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 md:py-36">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-6">
                <span>★</span>
                Ihr Partner in Regensburg
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Professionelle{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-600">
                  Gebäudereinigung
                </span>{" "}
                &amp; Hausmeisterservice
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-8 max-w-2xl">
                Sauber &amp; Rein steht für zuverlässige und gründliche
                Reinigungsdienstleistungen in Regensburg und Umgebung. Wir
                sorgen dafür, dass Ihre Immobilie stets in bestem Zustand
                erstrahlt.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#kontakt"
                  className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg bg-primary-600 text-white font-semibold hover:bg-primary-700 transition-colors shadow-lg shadow-primary-600/25"
                >
                  Kostenloses Angebot anfordern
                </a>
                <a
                  href="#leistungen"
                  className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg border-2 border-gray-200 text-gray-700 font-semibold hover:border-primary-300 hover:text-primary-700 transition-colors"
                >
                  Unsere Leistungen →
                </a>
              </div>
            </div>
            {/* Decorative stats */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {[
                { value: "10+", label: "Jahre Erfahrung" },
                { value: "500+", label: "Zufriedene Kunden" },
                { value: "100%", label: "Zuverlässigkeit" },
                { value: "24/7", label: "Erreichbar" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-primary-600">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-500 mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Leistungen (Services) Section */}
        <section id="leistungen" className="section-padding bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="section-title">Unsere Leistungen</h2>
            <p className="section-subtitle">
              Wir bieten Ihnen ein umfassendes Spektrum an Reinigungs- und
              Hausmeisterdienstleistungen &mdash; alles aus einer Hand.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {[
                {
                  icon: "🏢",
                  title: "Gebäudereinigung",
                  description:
                    "Professionelle Reinigung von Bürogebäuden, Praxen, Gewerbeflächen und öffentlichen Einrichtungen nach höchsten Standards.",
                },
                {
                  icon: "🪜",
                  title: "Treppenhausreinigung",
                  description:
                    "Regelmäßige und gründliche Reinigung von Treppenhäusern und Gemeinschaftsflächen in Wohnanlagen.",
                },
                {
                  icon: "🧹",
                  title: "Unterhaltsreinigung",
                  description:
                    "Laufende Reinigung Ihrer Räumlichkeiten in individuell vereinbarten Intervallen für dauerhaft saubere Ergebnisse.",
                },
                {
                  icon: "🪟",
                  title: "Glasreinigung",
                  description:
                    "Streifenfreie Reinigung von Fenstern, Glasfassaden und Schaufenstern &mdash; auch in schwer zugänglichen Bereichen.",
                },
                {
                  icon: "🔧",
                  title: "Hausmeisterservice",
                  description:
                    "Zuverlässiger Hausmeisterdienst für Ihre Immobilie: Kleinreparaturen, Kontrollen, Pflege der Außenanlagen und mehr.",
                },
                {
                  icon: "❄️",
                  title: "Winterdienst",
                  description:
                    "Professioneller Räum- und Streudienst für sichere Gehwege und Zufahrten in der kalten Jahreszeit.",
                },
              ].map((service) => (
                <div
                  key={service.title}
                  className="group relative p-6 sm:p-8 rounded-2xl border border-gray-100 bg-white hover:border-primary-200 hover:shadow-lg hover:shadow-primary-100/50 transition-all duration-300"
                >
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-700 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Über uns (About) Section */}
        <section id="ueber-uns" className="section-padding bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                  Über{" "}
                  <span className="text-primary-600">Sauber &amp; Rein</span>
                </h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    Sauber &amp; Rein ist Ihr zuverlässiger Dienstleister für
                    Gebäudereinigung und Hausmeisterservice in Regensburg und der
                    gesamten Oberpfalz. Mit langjähriger Erfahrung und einem
                    engagierten Team sorgen wir dafür, dass Ihre Immobilie
                    stets gepflegt und einladend wirkt.
                  </p>
                  <p>
                    Qualität, Pünktlichkeit und Vertrauen sind die Grundpfeiler
                    unserer Arbeit. Wir setzen auf geschultes Personal,
                    umweltfreundliche Reinigungsmittel und modernste
                    Ausstattung, um Ihnen erstklassige Ergebnisse zu liefern.
                  </p>
                  <p>
                    Als lokales Unternehmen kennen wir die Bedürfnisse unserer
                    Kunden in Regensburg genau und sind stolz darauf,
                    langfristige Partnerschaften aufzubauen.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                {[
                  {
                    icon: "✓",
                    title: "Zuverlässig",
                    text: "Pünktlich und gewissenhaft bei jedem Einsatz",
                  },
                  {
                    icon: "✓",
                    title: "Qualitätsbewusst",
                    text: "Höchste Standards bei allen Dienstleistungen",
                  },
                  {
                    icon: "✓",
                    title: "Flexibel",
                    text: "Individuelle Lösungen für Ihre Anforderungen",
                  },
                  {
                    icon: "✓",
                    title: "Regional",
                    text: "Fest verwurzelt in Regensburg und Umgebung",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="p-5 sm:p-6 rounded-xl bg-white border border-gray-100 shadow-sm"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary-100 text-primary-600 flex items-center justify-center font-bold text-lg mb-3">
                      {item.icon}
                    </div>
                    <h3 className="font-bold text-gray-900 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-500">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="section-padding bg-gradient-to-r from-primary-600 to-accent-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Bereit für makellose Sauberkeit?
            </h2>
            <p className="text-lg text-primary-100 mb-8 max-w-2xl mx-auto">
              Lassen Sie sich unverbindlich beraten. Wir erstellen Ihnen gerne
              ein individuelles Angebot &mdash; kostenlos und ohne Verpflichtung.
            </p>
            <a
              href="#kontakt"
              className="inline-flex items-center px-8 py-3.5 rounded-lg bg-white text-primary-700 font-semibold hover:bg-gray-50 transition-colors shadow-lg"
            >
              Jetzt Kontakt aufnehmen →
            </a>
          </div>
        </section>

        {/* Kontakt (Contact) Section */}
        <section id="kontakt" className="section-padding bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="section-title">Kontakt</h2>
            <p className="section-subtitle">
              Haben Sie Fragen oder möchten Sie ein Angebot? Wir freuen uns auf
              Ihre Nachricht und beraten Sie gerne persönlich.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto">
              <div className="text-center p-8 rounded-2xl bg-gray-50 border border-gray-100">
                <div className="text-3xl mb-4">📞</div>
                <h3 className="font-bold text-gray-900 mb-2">Telefon</h3>
                <a
                  href="tel:+4994100000"
                  className="text-primary-600 hover:text-primary-700 font-medium transition-colors"
                >
                  0941 / 000 00 00
                </a>
                <p className="text-sm text-gray-500 mt-2">
                  Mo–Fr: 8:00–18:00 Uhr
                </p>
              </div>
              <div className="text-center p-8 rounded-2xl bg-gray-50 border border-gray-100">
                <div className="text-3xl mb-4">✉️</div>
                <h3 className="font-bold text-gray-900 mb-2">E-Mail</h3>
                <a
                  href="mailto:info@sauber-u-rein.de"
                  className="text-primary-600 hover:text-primary-700 font-medium transition-colors"
                >
                  info@sauber-u-rein.de
                </a>
                <p className="text-sm text-gray-500 mt-2">
                  Antwort innerhalb von 24 Std.
                </p>
              </div>
              <div className="text-center p-8 rounded-2xl bg-gray-50 border border-gray-100">
                <div className="text-3xl mb-4">📍</div>
                <h3 className="font-bold text-gray-900 mb-2">Adresse</h3>
                <p className="text-gray-600">
                  Sauber &amp; Rein
                  <br />
                  93047 Regensburg
                </p>
                <p className="text-sm text-gray-500 mt-2">Oberpfalz, Bayern</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="text-xl font-bold text-white mb-3">
                Sauber <span className="text-primary-500">&amp;</span> Rein
              </div>
              <p className="text-sm leading-relaxed">
                Ihr zuverlässiger Partner für Gebäudereinigung und
                Hausmeisterservice in Regensburg und Umgebung.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">Leistungen</h4>
              <ul className="space-y-2 text-sm">
                <li>Gebäudereinigung</li>
                <li>Treppenhausreinigung</li>
                <li>Unterhaltsreinigung</li>
                <li>Glasreinigung</li>
                <li>Hausmeisterservice</li>
                <li>Winterdienst</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">Kontakt</h4>
              <ul className="space-y-2 text-sm">
                <li>Tel: 0941 / 000 00 00</li>
                <li>
                  <a
                    href="mailto:info@sauber-u-rein.de"
                    className="hover:text-primary-400 transition-colors"
                  >
                    info@sauber-u-rein.de
                  </a>
                </li>
                <li>93047 Regensburg</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
            <p>
              &copy; {new Date().getFullYear()} Sauber &amp; Rein. Alle Rechte
              vorbehalten.
            </p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary-400 transition-colors">
                Impressum
              </a>
              <a href="#" className="hover:text-primary-400 transition-colors">
                Datenschutz
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
