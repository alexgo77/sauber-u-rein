import type { Metadata } from "next";
import ServicePage from "../components/ServicePage";

export const metadata: Metadata = {
  title: "Praxisreinigung Regensburg",
  description:
    "Praxisreinigung & professionelle Desinfektion in Regensburg nach medizinischen Standards. Für Arztpraxen, Zahnarztpraxen & Pflegeheime. Jetzt anfragen.",
};

const faqItems = [
  {
    question:
      "Welche Hygienestandards gelten für die Reinigung von Arztpraxen?",
    answer:
      "Arztpraxen müssen die Empfehlungen des Robert Koch-Instituts (RKI) für das Hygienemanagement einhalten. Das umfasst regelmäßige Flächendesinfektion mit DGHM-gelisteten Mitteln, eine klare Trennung von Reinigung und Desinfektion sowie dokumentierte Reinigungsintervalle. Sauber & Rein arbeitet nach genau diesen Vorgaben.",
  },
  {
    question: "Wie oft muss eine Arztpraxis professionell gereinigt werden?",
    answer:
      "Die Mindestanforderung ist eine tägliche Unterhaltsreinigung aller Patientenbereiche. Behandlungsräume und Sanitäranlagen sollten täglich desinfiziert werden. Eine Intensivdesinfektion empfiehlt sich wöchentlich oder nach konkretem Bedarf.",
  },
  {
    question: "Was kostet Praxisreinigung in Regensburg?",
    answer:
      "Der Preis richtet sich nach der Fläche, der Häufigkeit der Reinigung und dem Umfang der Desinfektionsleistungen. Pauschalen sind für medizinische Reinigung nicht seriös — wir erstellen Ihnen nach einem kostenlosen Beratungsgespräch ein individuelles Angebot.",
  },
  {
    question:
      "Was ist der Unterschied zwischen Reinigung und Desinfektion?",
    answer:
      "Reinigung entfernt Schmutz und Partikel mechanisch von Oberflächen. Desinfektion tötet danach gezielt Krankheitserreger (Bakterien, Viren, Pilze) ab. Beide Schritte sind nötig — Desinfektion allein auf verschmutzten Oberflächen wirkt nicht zuverlässig.",
  },
];

const relatedLinks = [
  { href: "/", label: "Gebäudereinigung" },
  { href: "/bueroreinigung-regensburg", label: "Büroreinigung" },
  { href: "/fensterreinigung-regensburg", label: "Fensterreinigung" },
];

export default function PraxisreinigungPage() {
  return (
    <ServicePage
      headline="Praxisreinigung &amp; Desinfektion Regensburg"
      intro="Praxisreinigung in Regensburg ist nicht dasselbe wie Büroreinigung. Arztpraxen, Zahnarztpraxen und Pflegeeinrichtungen unterliegen strengen Hygienepflichten. Sauber & Rein arbeitet nach den Empfehlungen des Robert Koch-Instituts (RKI) und setzt ausschließlich DGHM-gelistete Desinfektionsmittel ein."
      faqItems={faqItems}
      ctaTitle="Praxisreinigung anfragen"
      ctaText="Vertrauen Sie Ihre Praxis einem Reinigungspartner an, der medizinische Standards kennt und einhält. Nicht zufrieden? Wir bessern kostenlos nach."
      relatedLinks={relatedLinks}
    >
      <h2>Reinigung und Desinfektion für medizinische Einrichtungen</h2>
      <p>
        Reinigung und Desinfektion sind zwei verschiedene Prozessschritte. Bei
        der Reinigung werden Schmutz, Staub und Ablagerungen physisch entfernt.
        Erst danach greift die Desinfektion: Ein gezieltes Abtöten von
        Krankheitserregern auf Oberflächen und Kontaktflächen.
      </p>
      <p>Sauber &amp; Rein hält sich an die Vorgaben des RKI:</p>
      <ul>
        <li>Klare Trennung von Reinigungs- und Desinfektionsschritt</li>
        <li>
          Ausschließliche Verwendung von DGHM-gelisteten Desinfektionsmitteln
        </li>
        <li>Geschultes Reinigungspersonal für medizinische Umgebungen</li>
        <li>
          Arbeiten mit Einwegmaterial in Risikobereichen (Behandlungsräume,
          Sanitäranlagen)
        </li>
        <li>
          Hygienedokumentation und Reinigungsprotokolle auf Anfrage
        </li>
      </ul>

      <h2>Welche Einrichtungen wir reinigen</h2>
      <ul>
        <li>
          Allgemein- und Facharztpraxen (inkl. Praxen rund um das Uniklinikum
          Regensburg)
        </li>
        <li>
          Zahnarztpraxen mit besonderem Fokus auf Behandlungsstuhl und
          Desinfektionszonen
        </li>
        <li>Physiotherapie- und Ergotherapiepraxen</li>
        <li>Pflegeheime und Seniorenresidenzen</li>
        <li>Tageskliniken und ambulante OP-Einrichtungen</li>
        <li>Labore und Diagnosezentren</li>
      </ul>
      <p>
        Innerhalb jeder Einrichtung reinigen und desinfizieren wir alle
        kritischen Bereiche: Wartezimmer, Empfang, Behandlungsräume,
        Sanitäranlagen sowie alle häufig berührten Kontaktflächen wie Türgriffe,
        Lichtschalter, Haltestangen und Tresen.
      </p>

      <h2>Hygienevorschriften und Dokumentation</h2>
      <p>
        Betreiber von Arztpraxen und Pflegeeinrichtungen sind rechtlich
        verpflichtet, ein funktionierendes Hygienemanagement nachzuweisen.
        Sauber &amp; Rein unterstützt Sie bei dieser Nachweispflicht:
      </p>
      <ul>
        <li>
          Welche Flächen in welchem Intervall gereinigt und desinfiziert wurden
        </li>
        <li>Welche DGHM-gelisteten Mittel eingesetzt wurden</li>
        <li>Wer die Reinigung durchgeführt hat (geschultes Personal)</li>
      </ul>
      <p>
        Auf Wunsch stimmen wir unsere Vorgehensweise mit Ihrem bestehenden
        Hygieneplan ab. Für Einrichtungen ohne eigenen Plan können wir
        gemeinsam eine Grundstruktur entwickeln.
      </p>
    </ServicePage>
  );
}
