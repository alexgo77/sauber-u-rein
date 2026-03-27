import type { Metadata } from "next";
import ServicePage from "../components/ServicePage";

export const metadata: Metadata = {
  title: "Hausmeisterservice Regensburg",
  description:
    "Zuverlässiger Hausmeisterservice in Regensburg: Objektbetreuung, Winterdienst & Grünanlagen. Reinigung inklusive möglich. Jetzt anfragen.",
};

const faqItems = [
  {
    question: "Was ist im Hausmeisterservice von Sauber & Rein enthalten?",
    answer:
      "Unser Hausmeisterservice umfasst Objektbetreuung, Kontrolle technischer Anlagen wie Heizung und Aufzug, Grünanlagenpflege, Winterdienst, Kleinreparaturen sowie Kehr- und Reinigungsdienst. Auf Wunsch auch Treppenhausreinigung und Flächenreinigung. Die Leistungspakete werden individuell auf Ihr Objekt abgestimmt.",
  },
  {
    question:
      "Kann ich Hausmeisterservice und Gebäudereinigung gemeinsam beauftragen?",
    answer:
      "Ja, das ist unser Angebot. Sauber & Rein kombiniert Hausmeisterdienste und Gebäudereinigung in einem Vertrag. Sie haben einen einzigen Ansprechpartner, eine Abrechnung und keinen Koordinationsaufwand zwischen verschiedenen Firmen.",
  },
  {
    question: "Was kostet ein Hausmeisterservice in Regensburg monatlich?",
    answer:
      "Die Kosten hängen von der Objektgröße und dem gewünschten Leistungsumfang ab. Wir erstellen Ihnen nach einer kostenlosen Begehung ein konkretes Angebot, das genau zu Ihrem Objekt passt. Kontaktieren Sie uns für ein unverbindliches Gespräch.",
  },
  {
    question:
      "Wie schnell können Sie einen Hausmeisterservice in Regensburg starten?",
    answer:
      "Nach Ihrer Anfrage vereinbaren wir zeitnah einen Begehungstermin. Danach erhalten Sie ein Angebot, und wir stimmen den Starttermin gemeinsam ab. Wir arbeiten ohne lange Vorlaufzeiten.",
  },
];

const relatedLinks = [
  { href: "/", label: "Gebäudereinigung" },
  { href: "/winterdienst-regensburg", label: "Winterdienst" },
  { href: "/bueroreinigung-regensburg", label: "Büroreinigung" },
];

export default function HausmeisterservicePage() {
  return (
    <ServicePage
      headline="Hausmeisterservice Regensburg"
      intro="Sauber & Rein bietet Ihnen einen zuverlässigen Hausmeisterservice in Regensburg — direkt vor Ort, persönlich betreut. Wir kümmern uns um Ihr Objekt, damit Sie es nicht müssen."
      faqItems={faqItems}
      ctaTitle="Hausmeisterservice anfragen"
      ctaText="Überzeugen Sie sich selbst. Wir besichtigen Ihr Objekt in Regensburg und erstellen Ihnen ein individuelles Leistungspaket."
      relatedLinks={relatedLinks}
    >
      <h2>Unsere Hausmeisterleistungen</h2>
      <p>
        Unser Hausmeisterservice deckt alle Aufgaben rund um Ihr Objekt ab:
      </p>
      <ul>
        <li>Objektbetreuung und regelmäßige Kontrollrunden</li>
        <li>
          Überwachung technischer Anlagen (Heizung, Aufzug, Brandschutz)
        </li>
        <li>Grau- und Grünanlagenpflege</li>
        <li>
          Winterdienst &amp; Gartenpflege: Schneeräumung, Streudienst,
          Saisonpflege
        </li>
        <li>Kleinreparaturen und Handwerksarbeiten</li>
        <li>Kehr- und Reinigungsdienst auf dem Gelände</li>
        <li>Treppenhausreinigung und Pflege von Gemeinschaftsflächen</li>
      </ul>
      <p>
        Die Leistungen werden individuell nach Objekt und Bedarf
        zusammengestellt. Ein Wohnhaus in Kumpfmühl hat andere Anforderungen
        als ein Gewerbeobjekt im Gewerbepark Regensburg. Beides bekommen Sie
        bei uns.
      </p>

      <h2>Für wen ist der Hausmeisterservice gedacht?</h2>
      <ul>
        <li>
          Wohnungseigentümergemeinschaften (WEGs) in der Innenstadt, im
          Westenviertel oder in Stadtamhof
        </li>
        <li>
          Hausverwaltungen und Immobiliengesellschaften mit mehreren Objekten
          in Regensburg
        </li>
        <li>
          Gewerbliche Vermieter in Galgenberg, Kumpfmühl und Königswiesen
        </li>
        <li>
          Eigentümer von Mehrfamilienhäusern, die einen zuverlässigen
          Ansprechpartner vor Ort wollen
        </li>
      </ul>
      <p>
        Wenn Sie in Regensburg einen Hausmeister beauftragen möchten, sprechen
        Sie uns an. Wir sind lokal ansässig und kennen die Objekte der Stadt.
        Anders als Anbieter aus dem Umland sind wir direkt vor Ort.
      </p>

      <h2>Reinigung und Hausmeisterservice: alles aus einer Hand</h2>
      <p>
        Das ist unser Kernvorteil im Bereich Facility Management Regensburg.
        Viele Objekte beauftragen getrennte Firmen für Reinigung und
        Hausmeisterdienste. Das bedeutet zwei Ansprechpartner, zwei Rechnungen
        und Abstimmungsaufwand, wenn etwas nicht klappt.
      </p>
      <p>
        Bei Sauber &amp; Rein bekommen Sie beides aus einer Hand.
        Treppenhausreinigung, Kleinreparaturen und Winterdienst laufen über
        einen einzigen Vertrag. Das spart Zeit und verhindert, dass Aufgaben
        zwischen den Dienstleistern verloren gehen.
      </p>
      <p>
        Für Hausverwaltungen und Immobilienunternehmen ist das besonders
        praktisch: ein Dienstleister, eine Abrechnung, persönlicher
        Ansprechpartner. Die Gebäudereinigung ist dabei vollständig in den
        Hausmeisterservice integrierbar.
      </p>
    </ServicePage>
  );
}
