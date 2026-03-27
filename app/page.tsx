import Link from "next/link";
import CTABanner from "./components/CTABanner";
import FAQ from "./components/FAQ";
import ContactForm from "./components/ContactForm";

const services = [
  {
    icon: "🏢",
    title: "Büroreinigung",
    href: "/bueroreinigung-regensburg",
    description:
      "Unterhaltsreinigung, Grundreinigung, Sanitär — außerhalb Ihrer Geschäftszeiten.",
  },
  {
    icon: "🏥",
    title: "Praxisreinigung",
    href: "/praxisreinigung-regensburg",
    description:
      "Desinfektion nach RKI-Standard. Für Arztpraxen, Zahnarztpraxen, Pflegeheime.",
  },
  {
    icon: "🪟",
    title: "Fensterreinigung",
    href: "/fensterreinigung-regensburg",
    description:
      "Streifenfrei. Schaufenster, Glasfassaden, Treppenhausfenster.",
  },
  {
    icon: "🏗️",
    title: "Baureinigung",
    href: "/baureinigung-regensburg",
    description:
      "Grobreinigung bis Übergabereinigung. Termingerecht, abnahmebereit.",
  },
  {
    icon: "🔧",
    title: "Hausmeisterservice",
    href: "/hausmeisterservice-regensburg",
    description:
      "Objektbetreuung, Kleinreparaturen, technische Kontrollen — ein Ansprechpartner.",
  },
  {
    icon: "❄️",
    title: "Winterdienst",
    href: "/winterdienst-regensburg",
    description:
      "Schneeräumung, Streudienst, Dokumentation. Haftungssicher für Eigentümer.",
  },
];

const faqItems = [
  {
    question: "Was kostet eine professionelle Gebäudereinigung in Regensburg?",
    answer:
      "Die Kosten hängen von Objektgröße, Reinigungsintervall und Art der Leistung ab. Regelmäßige Unterhaltsreinigung für ein Büro mit 150 m² liegt erfahrungsgemäß zwischen 150 und 350 Euro pro Monat. Wir erstellen Ihnen ein konkretes, kostenloses Angebot ohne Pauschalen.",
  },
  {
    question: "Für welche Gebäude bietet Sauber & Rein Reinigungsleistungen an?",
    answer:
      "Wir reinigen Büros, Arztpraxen, Zahnarztpraxen, Pflegeheime, Schulen, Kitas, Einkaufszentren, Wohnanlagen, Industriehallen und private Haushalte in Regensburg.",
  },
  {
    question: "Wie unterscheidet sich Sauber & Rein von anderen Reinigungsunternehmen?",
    answer:
      "Reinigung + Desinfektion nach medizinischen Standards + vollständiger Hausmeisterservice — alles aus einer Hand. Dazu individuelle Betreuung statt Einheitspakete.",
  },
  {
    question: "Bietet Sauber & Rein auch Desinfektion an?",
    answer:
      "Ja. Wir arbeiten mit DGHM-gelisteten Desinfektionsmitteln nach RKI-Empfehlungen. Protokollierung auf Wunsch möglich. Besonders relevant für medizinische Einrichtungen.",
  },
  {
    question: "Wie oft sollte ein Büro professionell gereinigt werden?",
    answer:
      "Kleine Büros: 2–3× pro Woche. Größere Büroflächen mit Publikumsverkehr: täglich. Wir finden den Rhythmus, der zu Ihrem Bedarf passt.",
  },
  {
    question: "Übernimmt Sauber & Rein auch den Winterdienst?",
    answer:
      "Ja. Schneeräumung, Streuen bei Glatteis, lückenlose Dokumentation. In Bayern haftet der Eigentümer — mit Sauber & Rein sind Sie auf der sicheren Seite.",
  },
];

export default function Home() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-500 to-brand-700">
        {/* Decorative grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23fff' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E\")",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 md:py-36">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl md:text-[3.5rem] font-bold text-white leading-[1.1] mb-6 font-heading">
              Gebäudereinigung
              <br />
              in Regensburg.
              <br />
              <span className="text-brand-200">Sauber. Zuverlässig. Persönlich.</span>
            </h1>
            <p className="text-lg sm:text-xl text-brand-100 leading-relaxed mb-10 max-w-2xl">
              Reinigung und Desinfektion nach medizinischen Standards —
              kombiniert mit Hausmeisterservice. Alles aus einer Hand,
              ein Ansprechpartner, keine Kompromisse.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#kontakt"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-white text-brand-600 font-bold hover:bg-gray-50 transition-colors shadow-xl text-[15px]"
              >
                Kostenloses Angebot anfordern
              </a>
              <a
                href="tel:+491705749211"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border-2 border-white/20 text-white font-semibold hover:bg-white/10 transition-colors text-[15px]"
              >
                <span className="text-lg">📞</span>
                +49 170 5749211
              </a>
            </div>
          </div>
        </div>
        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" className="w-full">
            <path
              d="M0 80V30C240 60 480 0 720 30C960 60 1200 0 1440 30V80H0Z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      {/* ─── TRUST BADGES ─── */}
      <section className="relative -mt-2 pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: "Desinfektion", sub: "nach RKI-Standard" },
              { value: "1 Ansprechpartner", sub: "für alles" },
              { value: "24h", sub: "Antwortzeit" },
              { value: "100%", sub: "Zufriedenheitsgarantie" },
            ].map((item) => (
              <div
                key={item.sub}
                className="text-center p-5 sm:p-6 rounded-2xl bg-white border border-gray-100 shadow-sm"
              >
                <div className="text-lg sm:text-xl font-bold text-brand-500 font-heading">
                  {item.value}
                </div>
                <div className="text-xs sm:text-sm text-gray-500 mt-1">
                  {item.sub}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── INTRO TEXT (SEO) ─── */}
      <section className="pb-16 sm:pb-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg text-gray-600 leading-relaxed">
            <strong className="text-gray-900">Sauber &amp; Rein</strong> ist
            Ihr Reinigungsunternehmen in Regensburg für Privathaushalte,
            Gewerbebetriebe, Arztpraxen, Büros und Immobilienverwaltungen. Was
            uns von anderen Reinigungsfirmen unterscheidet: Wir verbinden
            Gebäudereinigung mit{" "}
            <strong className="text-gray-900">
              Desinfektion nach medizinischen Standards
            </strong>
            . Keine oberflächliche Sauberkeit — sondern echte Hygiene.
          </p>
        </div>
      </section>

      {/* ─── LEISTUNGEN ─── */}
      <section id="leistungen" className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-brand-500 uppercase tracking-wider mb-3">
              Leistungen
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-heading">
              Was wir für Sie tun
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group p-6 sm:p-7 rounded-2xl bg-white border border-gray-100 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-500/5 transition-all duration-300"
              >
                <div className="text-3xl mb-4">{service.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-brand-500 transition-colors font-heading">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">
                  {service.description}
                </p>
                <span className="text-sm font-semibold text-brand-500 group-hover:text-brand-600 transition-colors">
                  Mehr erfahren →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── USP: WARUM SAUBER & REIN ─── */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-brand-500 uppercase tracking-wider mb-3">
              Warum wir
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-heading">
              Was Sauber &amp; Rein anders macht
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Reinigung + Desinfektion nach RKI-Standard",
                text: "Wir reinigen nicht nur — wir desinfizieren nach den Empfehlungen des Robert Koch-Instituts mit DGHM-gelisteten Mitteln. Dokumentiert und nachweisbar.",
              },
              {
                title: "Ein Ansprechpartner für alles",
                text: "Reinigung, Hausmeisterservice, Winterdienst — ein Vertrag, eine Abrechnung, ein fester Ansprechpartner. Kein Abstimmungschaos zwischen verschiedenen Firmen.",
              },
              {
                title: "Individuelle Reinigungspläne",
                text: "Jedes Objekt ist anders. Wir erstellen einen Plan, der zu Ihrem Gebäude, Ihrem Rhythmus und Ihrem Budget passt. Keine Standardpakete.",
              },
              {
                title: "Zufriedenheitsgarantie",
                text: "Nicht zufrieden mit einer Reinigung? Wir kommen zurück und bessern nach — ohne zusätzliche Kosten. Das ist unser Versprechen.",
              },
              {
                title: "Flexible Einsatzzeiten",
                text: "Früh morgens, spät abends, am Wochenende — wir passen uns Ihrem Betrieb an, nicht umgekehrt.",
              },
              {
                title: "Lokal in Regensburg",
                text: "Von Altstadt über Kumpfmühl bis Gewerbepark — wir kennen die Gebäude, Zufahrten und Besonderheiten der Stadt.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex gap-4 p-6 rounded-xl bg-gray-50 border border-gray-100"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-brand-500 text-white flex items-center justify-center mt-0.5">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1 font-heading">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ABLAUF ─── */}
      <section id="ablauf" className="section-padding bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-brand-500 uppercase tracking-wider mb-3">
              In 4 Schritten
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-heading">
              So einfach geht&apos;s
            </h2>
          </div>
          <div className="space-y-0">
            {[
              {
                step: "01",
                title: "Sie melden sich",
                text: "Per Telefon, WhatsApp, E-Mail oder Kontaktformular. Schildern Sie uns kurz Ihr Objekt.",
              },
              {
                step: "02",
                title: "Wir kommen vorbei",
                text: "Kostenlose Besichtigung vor Ort. Wir erfassen Flächen, Materialien und Ihre Anforderungen.",
              },
              {
                step: "03",
                title: "Sie erhalten Ihr Angebot",
                text: "Schriftlich, mit konkreten Preisen und Leistungen. Transparent, ohne versteckte Kosten.",
              },
              {
                step: "04",
                title: "Wir legen los",
                text: "Regelmäßige Qualitätskontrollen und ein fester Ansprechpartner. Nicht zufrieden? Wir bessern nach.",
              },
            ].map((item, i) => (
              <div key={item.step} className="flex gap-6 sm:gap-8">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-brand-500 text-white flex items-center justify-center font-bold text-sm font-heading">
                    {item.step}
                  </div>
                  {i < 3 && (
                    <div className="w-px h-full bg-brand-200 my-2" />
                  )}
                </div>
                <div className="pb-10">
                  <h3 className="text-lg font-bold text-gray-900 font-heading">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 mt-1 leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── EINZUGSGEBIET ─── */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm font-semibold text-brand-500 uppercase tracking-wider mb-3">
            Einzugsgebiet
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 font-heading">
            In ganz Regensburg für Sie da
          </h2>
          <p className="text-gray-600 leading-relaxed mb-8">
            Innenstadt · Altstadt · Westenviertel · Kumpfmühl · Stadtamhof ·
            Galgenberg · Schwabelweis · Konradsiedlung · Königswiesen ·
            Prüfening · Gewerbepark · Burgweinting
          </p>
          <p className="text-gray-500 text-sm">
            Als Reinigungsfirma in Regensburg kennen wir die Infrastruktur:
            Zufahrtsbeschränkungen, Stellplätze, Reinigung in
            denkmalgeschütztem Altbaubestand. Diese Ortskenntnis macht den
            Unterschied.
          </p>
        </div>
      </section>

      <CTABanner
        title="Bereit für ein unverbindliches Angebot?"
        text="Wir melden uns innerhalb von 24 Stunden. Kostenfrei, transparent, ohne Verpflichtung."
      />

      <FAQ items={faqItems} />

      {/* ─── KONTAKT ─── */}
      <section id="kontakt" className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-brand-500 uppercase tracking-wider mb-3">
              Kontakt
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-heading">
              Sprechen Sie uns an
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Left: Contact info */}
            <div className="lg:col-span-2 space-y-6">
              <a
                href="tel:+491705749211"
                className="flex items-center gap-4 p-5 rounded-xl bg-gray-50 border border-gray-100 hover:border-brand-200 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-500 text-white flex items-center justify-center text-xl flex-shrink-0">
                  📞
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider">Telefon</p>
                  <p className="font-semibold text-gray-900 group-hover:text-brand-500 transition-colors">
                    +49 (0) 170 5749211
                  </p>
                </div>
              </a>
              <a
                href={`https://wa.me/491705749211?text=${encodeURIComponent("Hallo! Ich interessiere mich für Ihre Dienstleistungen.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 rounded-xl bg-gray-50 border border-gray-100 hover:border-[#25D366] transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#25D366] text-white flex items-center justify-center text-xl flex-shrink-0">
                  💬
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider">WhatsApp</p>
                  <p className="font-semibold text-gray-900 group-hover:text-[#25D366] transition-colors">
                    Direkt schreiben
                  </p>
                </div>
              </a>
              <a
                href="mailto:kontakt@sauber-u-rein.de"
                className="flex items-center gap-4 p-5 rounded-xl bg-gray-50 border border-gray-100 hover:border-brand-200 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-500 text-white flex items-center justify-center text-xl flex-shrink-0">
                  ✉️
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider">E-Mail</p>
                  <p className="font-semibold text-gray-900 group-hover:text-brand-500 transition-colors">
                    kontakt@sauber-u-rein.de
                  </p>
                </div>
              </a>
              <div className="flex items-center gap-4 p-5 rounded-xl bg-gray-50 border border-gray-100">
                <div className="w-12 h-12 rounded-xl bg-brand-500 text-white flex items-center justify-center text-xl flex-shrink-0">
                  📍
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider">Adresse</p>
                  <p className="font-semibold text-gray-900">
                    Johanna-Kinkel-Str. 1
                  </p>
                  <p className="text-sm text-gray-500">93049 Regensburg</p>
                </div>
              </div>
            </div>

            {/* Right: Contact form */}
            <div className="lg:col-span-3 p-6 sm:p-8 rounded-2xl bg-gray-50 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6 font-heading">
                Kostenloses Angebot anfordern
              </h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
