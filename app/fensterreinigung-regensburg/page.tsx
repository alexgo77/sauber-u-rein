import type { Metadata } from "next";
import ServicePage from "../components/ServicePage";

export const metadata: Metadata = {
  title: "Fensterreinigung Regensburg",
  description:
    "Professionelle Fenster- und Glasreinigung in Regensburg: für Büros, Praxen, Wohnanlagen und Geschäfte. Sauber & Rein — jetzt kostenloses Angebot einholen.",
};

const faqItems = [
  {
    question: "Wie oft sollten Fenster professionell gereinigt werden?",
    answer:
      "Gewerbekunden lassen Fenster je nach Lage 4- bis 12-mal pro Jahr reinigen. Für Privathaushalte sind zwei bis vier Reinigungen sinnvoll. Schaufenster werden häufig monatlich oder wöchentlich gereinigt.",
  },
  {
    question:
      "Reinigen Sie auch schwer zugängliche Fenster und Glasfassaden?",
    answer:
      "Ja. Sauber & Rein reinigt auch schwer zugängliche Fenster mit Teleskopstangen und Leitern. Glasfassaden und Oberlichter werden auf Anfrage eingeschlossen.",
  },
  {
    question: "Was kostet professionelle Fensterreinigung in Regensburg?",
    answer:
      "Der Preis richtet sich nach Anzahl der Fenster, Zugänglichkeit und gewünschtem Reinigungsintervall. Wir erstellen Ihnen ein kostenloses und unverbindliches Angebot.",
  },
];

const relatedLinks = [
  { href: "/", label: "Gebäudereinigung" },
  { href: "/bueroreinigung-regensburg", label: "Büroreinigung" },
  { href: "/baureinigung-regensburg", label: "Baureinigung" },
];

export default function FensterreinigungPage() {
  return (
    <ServicePage
      headline="Fensterreinigung Regensburg"
      intro="Trübe Scheiben kosten Vertrauen — besonders bei Gewerbebetrieben, Arztpraxen und Ladengeschäften. Sauber & Rein übernimmt die Fensterreinigung in Regensburg: sauber, streifenfrei und termingerecht."
      faqItems={faqItems}
      ctaTitle="Fensterreinigung anfragen"
      ctaText="Sauber & Rein ist Ihr Ansprechpartner für streifenfreie Scheiben in Büros, Praxen, Wohnanlagen und Geschäften. Nicht zufrieden? Wir kommen nochmal — ohne Aufpreis."
      relatedLinks={relatedLinks}
    >
      <h2>Was wir bei der Fenster- und Glasreinigung reinigen</h2>
      <ul>
        <li>
          Fenster innen und außen: Scheiben, Rahmen, Fensterbänke, Dichtungen
        </li>
        <li>
          Schaufenster und Ladenfront-Verglasungen: streifenfrei, auch in der
          Innenstadt
        </li>
        <li>Glasfassaden und Wintergärten: großflächige Verglasung</li>
        <li>Glasdächer und Oberlichter: auch schwer zugängliche Bereiche</li>
        <li>Treppenhausfenster in Wohnanlagen: Gemeinschaftsbereiche</li>
      </ul>
      <p>
        Für Gewerbekunden bieten wir Intervall-Verträge an: monatlich,
        quartalsweise oder nach individuellem Bedarf. So bleibt die
        Glasreinigung planbar.
      </p>

      <h2>Für welche Gebäude wir Fenster reinigen</h2>
      <h3>Büros und Geschäftsstellen</h3>
      <p>
        Saubere Fenster gehören zum gepflegten Erscheinungsbild eines
        Unternehmens. Wir reinigen vor Arbeitsbeginn oder nach Feierabend.
        Regelmäßige Intervalle sind buchbar.
      </p>

      <h3>Ladengeschäfte und Einkaufsflächen</h3>
      <p>
        Das Schaufenster ist Ihre Visitenkarte. Streifenfreie Verglasungen
        sorgen dafür, dass Ihre Produkte optimal zur Geltung kommen. Besonders
        in der Regensburger Innenstadt und im Westenviertel reinigen wir mit
        kurzen Vorlaufzeiten.
      </p>

      <h3>Wohnanlagen und Mehrfamilienhäuser</h3>
      <p>
        Treppenhausfenster, Gemeinschaftsbereiche und auf Wunsch auch
        Wohnungsfenster. Termine werden mit der Verwaltung abgestimmt.
      </p>

      <h3>Arztpraxen und medizinische Einrichtungen</h3>
      <p>
        Hygiene hat Vorrang. Wir reinigen Praxisfenster mit Rücksicht auf
        laufenden Betrieb und Patienten — diskret, pünktlich, sauber.
      </p>
    </ServicePage>
  );
}
