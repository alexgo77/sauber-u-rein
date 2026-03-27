import Link from "next/link";
import CTABanner from "./components/CTABanner";
import FAQ from "./components/FAQ";

const services = [
  {
    icon: "🏢",
    title: "Büroreinigung Regensburg",
    href: "/bueroreinigung-regensburg",
    description:
      "Saubere Büros steigern die Arbeitsqualität und reduzieren Krankheitstage. Wir reinigen Büroflächen, Gemeinschaftsräume, Teeküchen und Sanitäranlagen nach einem festen Reinigungsplan.",
  },
  {
    icon: "🏥",
    title: "Praxisreinigung & Desinfektion",
    href: "/praxisreinigung-regensburg",
    description:
      "Arztpraxen, Zahnarztpraxen und Pflegeeinrichtungen stellen besondere Anforderungen an Hygiene. Wir arbeiten nach den Empfehlungen des Robert Koch-Instituts (RKI).",
  },
  {
    icon: "🪟",
    title: "Fenster- und Glasreinigung",
    href: "/fensterreinigung-regensburg",
    description:
      "Klare Scheiben ohne Schlieren verbessern den Eindruck Ihres Gebäudes sofort. Wir reinigen Fensterfronten, Glastüren, Schaufenster und Fassadenverglasung.",
  },
  {
    icon: "🏗️",
    title: "Bau- und Industriereinigung",
    href: "/baureinigung-regensburg",
    description:
      "Nach Umbau, Neubau oder Renovierung hinterlassen Handwerker Staub, Farbreste und Bauschutt. Unsere Baureinigung schafft saubere Verhältnisse.",
  },
  {
    icon: "🔧",
    title: "Hausmeisterservice",
    href: "/hausmeisterservice-regensburg",
    description:
      "Gebäudereinigung und Hausmeisterservice aus einer Hand: Das spart Ihnen einen Ansprechpartner und vereinfacht die Koordination.",
  },
  {
    icon: "❄️",
    title: "Winterdienst & Gartenpflege",
    href: "/winterdienst-regensburg",
    description:
      "Die Räum- und Streupflicht in Bayern ist klar geregelt. Wir übernehmen den Winterdienst zuverlässig: Schneeräumung, Streuen und Dokumentation.",
  },
];

const faqItems = [
  {
    question: "Was kostet eine professionelle Gebäudereinigung in Regensburg?",
    answer:
      "Die Kosten hängen von Objektgröße, Reinigungsintervall und Art der Leistung ab. Regelmäßige Unterhaltsreinigung für ein Büro mit 150 m² liegt erfahrungsgemäß zwischen 150 und 350 Euro pro Monat. Grundreinigungen und Spezialleistungen wie Desinfektion werden separat kalkuliert. Wir erstellen Ihnen ein konkretes, kostenloses Angebot ohne Pauschalen.",
  },
  {
    question: "Für welche Gebäude bietet Sauber & Rein Reinigungsleistungen an?",
    answer:
      "Wir reinigen Büros, Arztpraxen, Zahnarztpraxen, Pflegeheime, Schulen, Kitas, Einkaufszentren, Wohnanlagen, Industriehallen und private Haushalte in Regensburg. Kurz: Wenn ein Gebäude gereinigt werden muss, sind wir der richtige Ansprechpartner.",
  },
  {
    question: "Wie unterscheidet sich Sauber & Rein von anderen Reinigungsunternehmen in Regensburg?",
    answer:
      "Der wichtigste Unterschied ist die Kombination aus Reinigung, Desinfektion nach medizinischen Standards und vollständigem Hausmeisterservice — alles aus einer Hand. Dazu kommt die individuelle Betreuung: Kein Einheitspaket, sondern ein Reinigungsplan, der zu Ihrem Objekt passt.",
  },
  {
    question: "Bietet Sauber & Rein auch Desinfektion an?",
    answer:
      "Ja. Desinfektion ist ein zentraler Bestandteil unseres Leistungsangebots. Wir arbeiten mit geprüften Desinfektionsmitteln nach DGHM-Liste und richten uns nach den RKI-Empfehlungen. Besonders für medizinische Einrichtungen in Regensburg ist das ein entscheidender Vorteil.",
  },
  {
    question: "Wie oft sollte ein Büro professionell gereinigt werden?",
    answer:
      "Das hängt von der Bürogröße und der Anzahl der Mitarbeiter ab. Kleine Büros mit bis zu 10 Arbeitsplätzen kommen oft mit zwei bis drei Reinigungen pro Woche aus. Größere Büroflächen mit Publikumsverkehr brauchen tägliche Reinigung.",
  },
  {
    question: "Übernimmt Sauber & Rein auch den Winterdienst?",
    answer:
      "Ja. Wir übernehmen die Räum- und Streupflicht für Gewerbeobjekte und Wohnanlagen in Regensburg. Das schließt Schneeräumung, Streuen bei Glatteis und die Dokumentation ein. In Bayern haftet der Eigentümer — mit Sauber & Rein sind Sie auf der sicheren Seite.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-50 via-white to-gray-50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 md:py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-100 text-brand-500 text-sm font-medium mb-6">
              Reinigungsunternehmen in Regensburg
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Professionelle{" "}
              <span className="text-brand-500">Gebäudereinigung</span>{" "}
              in Regensburg
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-4 max-w-2xl">
              Sauber &amp; Rein ist Ihr Reinigungsunternehmen in Regensburg für
              Privathaushalte, Gewerbebetriebe, Arztpraxen, Büros und
              Immobilienverwaltungen.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-2xl">
              Was uns von anderen Reinigungsfirmen unterscheidet: Wir verbinden
              Gebäudereinigung mit Desinfektion nach medizinischen Standards.
              Für Ihre Räume bedeutet das keine oberflächliche Sauberkeit &mdash;
              sondern <strong>echte Hygiene</strong>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+491705749211"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg bg-brand-500 text-white font-semibold hover:bg-brand-600 transition-colors shadow-lg shadow-brand-500/25"
              >
                📞 +49 (0) 170 5749211
              </a>
              <a
                href="#kontakt"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg border-2 border-gray-200 text-gray-700 font-semibold hover:border-brand-300 hover:text-brand-500 transition-colors"
              >
                Kostenloses Angebot anfordern →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Leistungen */}
      <section id="leistungen" className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title">Unsere Leistungen im Überblick</h2>
          <p className="section-subtitle">
            Als Reinigungsunternehmen in Regensburg decken wir alle relevanten
            Bereiche ab &mdash; von der regelmäßigen Unterhaltsreinigung bis zur
            einmaligen Grundreinigung. Jede Leistung wird individuell auf Ihr
            Objekt abgestimmt.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group relative p-6 sm:p-8 rounded-2xl border border-gray-100 bg-white hover:border-brand-200 hover:shadow-lg hover:shadow-brand-100/50 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-brand-500 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {service.description}
                </p>
                <span className="inline-flex items-center mt-4 text-sm font-semibold text-brand-500 group-hover:text-brand-600">
                  Mehr erfahren →
                </span>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <p className="text-gray-600">
              Sie wissen bereits, welche Leistung Sie brauchen?{" "}
              <a href="tel:+491705749211" className="text-brand-500 font-semibold hover:text-brand-600">
                +49 (0) 170 5749211
              </a>{" "}
              oder{" "}
              <a href="mailto:kontakt@sauber-u-rein.de" className="text-brand-500 font-semibold hover:text-brand-600">
                kontakt@sauber-u-rein.de
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* USP: Desinfektion */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Reinigung und Desinfektion nach{" "}
                <span className="text-brand-500">medizinischen Standards</span>
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Die meisten Reinigungsfirmen in Regensburg reinigen. Wir
                  desinfizieren &mdash; und das nach definierten medizinischen
                  Standards, nicht nach Gefühl.
                </p>
                <p>
                  Unsere Reinigungskräfte arbeiten mit Desinfektionsmitteln, die
                  den Anforderungen der Deutschen Gesellschaft für Hygiene und
                  Mikrobiologie (DGHM) entsprechen. Wir orientieren uns an den
                  Empfehlungen des Robert Koch-Instituts (RKI) für
                  Flächendesinfektion in medizinischen Einrichtungen.
                </p>
                <p>
                  Das macht Sauber &amp; Rein zur ersten Wahl für Arztpraxen,
                  Zahnarztpraxen, Pflegeheime, Tageskliniken und Laborräume in
                  Regensburg.
                </p>
              </div>
              <Link
                href="/praxisreinigung-regensburg"
                className="inline-flex items-center mt-6 text-brand-500 font-semibold hover:text-brand-600"
              >
                Mehr zur Praxisreinigung →
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {[
                { title: "RKI-konform", text: "Desinfektion nach Robert Koch-Institut Empfehlungen" },
                { title: "Dokumentiert", text: "Reinigungsprotokolle und Nachweise auf Wunsch" },
                { title: "Alles aus einer Hand", text: "Reinigung + Hausmeisterservice kombiniert" },
                { title: "Lokal in Regensburg", text: "Ortskenntnis von Altstadt bis Gewerbepark" },
              ].map((item) => (
                <div
                  key={item.title}
                  className="p-5 sm:p-6 rounded-xl bg-white border border-gray-100 shadow-sm"
                >
                  <div className="w-10 h-10 rounded-lg bg-brand-100 text-brand-500 flex items-center justify-center font-bold text-lg mb-3">
                    ✓
                  </div>
                  <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-500">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Ablauf */}
      <section id="ablauf" className="section-padding bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title">So läuft die Zusammenarbeit ab</h2>
          <p className="section-subtitle">
            Sie fragen an &mdash; wir kümmern uns um den Rest.
          </p>
          <div className="space-y-6">
            {[
              {
                step: "1",
                title: "Kostenloses Erstgespräch",
                text: "Sie schildern uns Ihr Objekt und Ihre Anforderungen. Per Telefon unter +49 (0) 170 5749211, per E-Mail an kontakt@sauber-u-rein.de oder über unser Kontaktformular.",
              },
              {
                step: "2",
                title: "Besichtigung vor Ort",
                text: "Für eine seriöse Kalkulation besichtigen wir Ihr Objekt persönlich. Dabei erfassen wir Flächen, Materialien, Verschmutzungsgrad und besondere Anforderungen.",
              },
              {
                step: "3",
                title: "Individuelles Angebot",
                text: "Sie erhalten ein schriftliches Angebot mit konkreten Preisen, Leistungsumfang und Reinigungsintervallen. Keine versteckten Kosten.",
              },
              {
                step: "4",
                title: "Regelmäßige Qualitätskontrolle",
                text: "Nach Auftragsstart überprüfen wir die Reinigungsqualität in festgelegten Abständen. Ihr Feedback fließt direkt in die Anpassung der Reinigungspläne ein.",
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-4 sm:gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-500 text-white flex items-center justify-center font-bold text-lg">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-8 text-gray-600 text-center">
            Bei Sauber &amp; Rein haben Sie immer einen festen Ansprechpartner.
            Kurze Wege und schnelle Lösungen.
          </p>
        </div>
      </section>

      {/* Vertrauen */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title">Warum Kunden Sauber &amp; Rein vertrauen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {[
              { title: "Individuelle Reinigungspläne", text: "Jedes Objekt ist anders. Wir entwickeln individuell angepasste Pläne mit festgelegten Zeiten und Kontrollpunkten." },
              { title: "Alles aus einer Hand", text: "Gebäudereinigung und vollständiger Hausmeisterservice kombiniert. Eine Abrechnung, ein Ansprechpartner." },
              { title: "Verlässlichkeit", text: "Termintreue und Erreichbarkeit sind bei uns keine Extras. Wir erscheinen pünktlich und melden Probleme proaktiv." },
              { title: "Hygiene dokumentiert", text: "Reinigungsprotokolle und Nachweise über Desinfektionsmittel. Wichtig für Arztpraxen und Pflegeeinrichtungen." },
              { title: "Flexible Zeiten", text: "Früh morgens, spät abends oder am Wochenende. Ihr Tagesgeschäft bleibt ungestört." },
              { title: "Zufriedenheitsgarantie", text: "Nicht zufrieden? Wir kommen zurück und bessern nach. Ohne zusätzliche Kosten." },
            ].map((item) => (
              <div key={item.title} className="p-6 rounded-xl bg-white border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Einzugsgebiet */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title">Gebäudereinigung in Regensburg und Umgebung</h2>
          <div className="text-gray-600 leading-relaxed space-y-4 mt-8">
            <p>
              Sauber &amp; Rein ist in ganz Regensburg aktiv. Unser Einzugsgebiet
              umfasst die <strong>Innenstadt und Altstadt</strong> (UNESCO-Welterbe),{" "}
              <strong>Westenviertel</strong>, <strong>Kumpfmühl</strong>,{" "}
              <strong>Stadtamhof</strong>, <strong>Galgenberg</strong>,{" "}
              <strong>Schwabelweis</strong>, <strong>Konradsiedlung</strong>,{" "}
              <strong>Königswiesen</strong> und <strong>Prüfening</strong>.
            </p>
            <p>
              Wir betreuen Büro- und Geschäftsobjekte im Gewerbepark Regensburg
              ebenso wie Wohnanlagen in Kumpfmühl oder Praxen in der Innenstadt.
              Als Reinigungsfirma in Regensburg kennen wir die lokale
              Infrastruktur: Zufahrtsbeschränkungen, Stellplätze und Reinigung
              in denkmalgeschütztem Altbaubestand.
            </p>
            <p className="font-medium text-gray-900">
              Gewerbliche Reinigung in Regensburg, die sich nach Ihrem Betrieb
              richtet &mdash; nicht umgekehrt.
            </p>
          </div>
        </div>
      </section>

      <CTABanner
        title="Lassen Sie sich noch heute kostenlos beraten"
        text="Sauber & Rein steht für Hygiene, die man sieht — und für Verlässlichkeit, die man spürt. Wir melden uns innerhalb von 24 Stunden."
      />

      <FAQ items={faqItems} />

      {/* Kontakt */}
      <section id="kontakt" className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title">Kontakt</h2>
          <p className="section-subtitle">
            Rufen Sie uns an oder schreiben Sie uns. Wir beraten Sie persönlich
            zu Ihrem Objekt in Regensburg.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto">
            <a
              href="tel:+491705749211"
              className="text-center p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:border-brand-200 hover:shadow-md transition-all"
            >
              <div className="text-3xl mb-4">📞</div>
              <h3 className="font-bold text-gray-900 mb-2">Telefon</h3>
              <span className="text-brand-500 font-medium">+49 (0) 170 5749211</span>
              <p className="text-sm text-gray-500 mt-2">Persönliche Beratung</p>
            </a>
            <a
              href="mailto:kontakt@sauber-u-rein.de"
              className="text-center p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:border-brand-200 hover:shadow-md transition-all"
            >
              <div className="text-3xl mb-4">✉️</div>
              <h3 className="font-bold text-gray-900 mb-2">E-Mail</h3>
              <span className="text-brand-500 font-medium">kontakt@sauber-u-rein.de</span>
              <p className="text-sm text-gray-500 mt-2">Antwort innerhalb von 24 Std.</p>
            </a>
            <div className="text-center p-8 rounded-2xl bg-gray-50 border border-gray-100">
              <div className="text-3xl mb-4">📍</div>
              <h3 className="font-bold text-gray-900 mb-2">Adresse</h3>
              <p className="text-gray-600">
                Sauber &amp; Rein<br />
                Johanna-Kinkel-Str. 1<br />
                93049 Regensburg
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
