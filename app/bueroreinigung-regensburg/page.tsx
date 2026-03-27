import type { Metadata } from "next";
import ServicePage from "../components/ServicePage";

export const metadata: Metadata = {
  title: "Büroreinigung Regensburg",
  description:
    "Professionelle Büroreinigung in Regensburg: Unterhaltsreinigung, Grundreinigung, flexible Reinigungszeiten. Sauber & Rein — jetzt kostenloses Angebot holen.",
};

const faqItems = [
  {
    question: "Wie oft sollte ein Büro professionell gereinigt werden?",
    answer:
      "Das kommt auf Größe und Nutzung an. Für ein kleines Büro mit zwei bis drei Personen reicht wöchentliche oder 14-tägige Reinigung. Bei größeren Einheiten mit regelmäßigem Kundenverkehr empfehlen wir tägliche Unterhaltsreinigung. Wir beraten Sie kostenlos vor Ort.",
  },
  {
    question:
      "Was ist der Unterschied zwischen Unterhaltsreinigung und Grundreinigung?",
    answer:
      "Die Unterhaltsreinigung findet regelmäßig statt und hält den laufenden Betrieb sauber. Die Grundreinigung ist eine intensive Tiefenreinigung für Flächen und Bereiche, die im Alltag nicht erreicht werden — saisonal, nach Umbauten oder vor Einzug.",
  },
  {
    question: "Kann die Büroreinigung außerhalb der Geschäftszeiten erfolgen?",
    answer:
      "Ja. Wir reinigen morgens vor Arbeitsbeginn, abends nach Feierabend oder am Wochenende. Schlüsselübergabe ist kein Problem. Der Reinigungseinsatz wird so geplant, dass er Ihren Betrieb nicht unterbricht.",
  },
];

const relatedLinks = [
  { href: "/", label: "Gebäudereinigung" },
  { href: "/praxisreinigung-regensburg", label: "Praxisreinigung" },
  { href: "/fensterreinigung-regensburg", label: "Fensterreinigung" },
];

export default function BueroreinigungPage() {
  return (
    <ServicePage
      headline="Büroreinigung Regensburg"
      intro="Saubere Büros steigern das Wohlbefinden Ihrer Mitarbeiter und hinterlassen bei Kunden einen guten ersten Eindruck. Sauber & Rein übernimmt die Büroreinigung in Regensburg zuverlässig und diskret."
      faqItems={faqItems}
      ctaTitle="Büroreinigung anfragen"
      ctaText="Wir schauen uns Ihr Objekt an und erstellen Ihnen ein individuell abgestimmtes Angebot — unverbindlich und ohne versteckte Kosten."
      relatedLinks={relatedLinks}
    >
      <h2>Was unsere Büroreinigung umfasst</h2>
      <p>
        Büroreinigung bedeutet mehr als Staubwischen. Bei Sauber &amp; Rein
        erhalten Sie eine strukturierte Unterhaltsreinigung, die alle
        relevanten Bereiche abdeckt.
      </p>
      <ul>
        <li>Böden: Saugen, feuchtes Wischen, bei Bedarf Versiegeln</li>
        <li>
          Sanitärbereiche: Reinigung und Desinfektion von Toiletten,
          Waschbecken und Armaturen
        </li>
        <li>
          Teeküche und Pausenräume: Arbeitsflächen, Kühlschrank außen,
          Mikrowelle, Spüle
        </li>
        <li>
          Schreibtische und Ablageflächen: nach Absprache, mit Rücksicht auf
          liegende Unterlagen
        </li>
        <li>Monitore und Bildschirme: schonende Reinigung auf Wunsch</li>
        <li>Mülleimer: leeren, neue Beutel einlegen</li>
        <li>
          Gemeinschaftsflächen und Treppenhäuser: Wischen, Absaugen, Handläufe
          reinigen
        </li>
      </ul>

      <h2>Unterhaltsreinigung oder Grundreinigung?</h2>
      <p>
        Die <strong>Unterhaltsreinigung</strong> läuft in einem vereinbarten
        Rhythmus: täglich, wöchentlich oder 14-tägig. Sie hält den laufenden
        Betrieb sauber und hygienisch.
      </p>
      <p>
        Die <strong>Grundreinigung</strong> ist eine intensive
        Tiefenreinigung — saisonal, nach einem Umbau oder vor einem Einzug.
        Böden werden gründlich behandelt, Schränke gerückt, Stellen gereinigt,
        die im Alltag nicht erreichbar sind.
      </p>
      <p>
        Die Kombination aus beidem ist die beste Lösung: regelmäßige
        Unterhaltsreinigung als Fundament, Grundreinigung für die Tiefe.
      </p>

      <h2>Reinigung außerhalb Ihrer Geschäftszeiten</h2>
      <p>
        Viele unserer Kunden möchten, dass die Reinigung abläuft, ohne den
        Betrieb zu unterbrechen. Das ist bei Sauber &amp; Rein die Regel.
      </p>
      <p>
        Wir reinigen morgens vor Ihrem Arbeitsbeginn, abends nach Feierabend
        oder am Wochenende — ganz nach Ihrem Zeitplan. Schlüsselübergabe und
        individuelle Zugangslösungen sind für uns kein Problem. Diskretion und
        Verlässlichkeit sind selbstverständlich.
      </p>
      <p>
        Das Leistungspaket wird individuell für Ihr Objekt definiert —
        abgestimmt auf Fläche, Nutzung und gewünschten Turnus. Das gilt für
        kleine Kanzleien im Stadtamhof genauso wie für größere Büroflächen im
        Gewerbepark.
      </p>
    </ServicePage>
  );
}
