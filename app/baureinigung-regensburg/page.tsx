import type { Metadata } from "next";
import ServicePage from "../components/ServicePage";

export const metadata: Metadata = {
  title: "Baureinigung Regensburg",
  description:
    "Baureinigung & Industriereinigung in Regensburg: Bauendreinigung, Grobreinigung, Übergabereinigung. Termingerecht & professionell. Jetzt Angebot anfordern.",
};

const faqItems = [
  {
    question:
      "Was ist der Unterschied zwischen Baugrobreinigung und Bauendreinigung?",
    answer:
      "Die Baugrobreinigung beseitigt grobe Rückstände nach den Bauarbeiten: Schutt, Grobstaub und Verpackungen. Die Bauendreinigung ist die Feinreinigung zur Übergabe — alle Oberflächen, Fenster, Sanitär und Details werden gereinigt.",
  },
  {
    question: "Wann sollte die Baureinigung stattfinden?",
    answer:
      "Die Baureinigung beginnt idealerweise nach Abschluss aller Gewerke, vor der Übergabe an Eigentümer oder Mieter. Sauber & Rein stimmt den Termin direkt mit der Bauleitung ab.",
  },
  {
    question: "Was kostet Baureinigung in Regensburg?",
    answer:
      "Der Preis richtet sich nach Fläche, Verschmutzungsgrad und Leistungsumfang. Wir erstellen ein kostenloses Angebot — auf Basis einer Besichtigung oder der Baupläne.",
  },
];

const relatedLinks = [
  { href: "/", label: "Gebäudereinigung" },
  { href: "/fensterreinigung-regensburg", label: "Fensterreinigung" },
  { href: "/hausmeisterservice-regensburg", label: "Hausmeisterservice" },
];

export default function BaureinigungPage() {
  return (
    <ServicePage
      headline="Baureinigung Regensburg"
      intro="Nach Abschluss einer Baumaßnahme sieht es selten vorzeigbar aus. Sauber & Rein übernimmt die Baureinigung in Regensburg von der ersten Grobreinigung bis zur abnahmefertigen Endreinigung."
      faqItems={faqItems}
      ctaTitle="Baureinigung anfragen"
      ctaText="Wir liefern termingerecht und abnahmebereit. Nicht zufrieden? Wir bessern kostenlos nach."
      relatedLinks={relatedLinks}
    >
      <h2>Was bei einer Baureinigung gereinigt wird</h2>
      <p>Baureinigung läuft in zwei Stufen ab:</p>
      <h3>Baugrobreinigung</h3>
      <p>
        Unmittelbar nach den Bauarbeiten. Bauschutt, Verpackungsmaterialien,
        Grobstaub und Baurestmüll werden entfernt. Das Ergebnis: ein
        begehbares Objekt, das für die Endreinigung bereit ist.
      </p>

      <h3>Bauendreinigung (Übergabereinigung)</h3>
      <p>
        Die Feinreinigung vor der Schlüsselübergabe. Konkret reinigen wir:
      </p>
      <ul>
        <li>
          Böden (kehren, wischen, Klebe- und Farbrückstände entfernen)
        </li>
        <li>Fenster und Fensterbänke innen</li>
        <li>Heizkörper und Heizkörpernischen</li>
        <li>
          Sanitäreinrichtungen (WC, Waschbecken, Duschen, Badewannen)
        </li>
        <li>Küchenzeilen und Arbeitsplatten</li>
        <li>Türen, Türrahmen und Türdrücker</li>
        <li>Lichtschalter und Steckdosen</li>
        <li>Treppenhaus und Gemeinschaftsflächen</li>
      </ul>

      <h2>Industriereinigung für Hallen und Betriebe</h2>
      <p>
        Produktionshallen, Lagerhallen, Werkstätten und technische Räume
        stellen andere Anforderungen als ein Wohngebäude. Typische
        Einsatzorte:
      </p>
      <ul>
        <li>Produktions- und Montagehallen</li>
        <li>Lagerhallen und Hochregallager</li>
        <li>Werkstätten und Servicebereiche</li>
        <li>Tiefgaragen und Parkhäuser</li>
        <li>Technische Räume und Serverräume</li>
      </ul>
      <p>
        Für hartnäckige Verschmutzungen setzen wir Hochdruckreiniger,
        Industriesauger und geeignete Reinigungsmittel ein.
        Reinigungstermine legen wir flexibel fest — nachts, am Wochenende
        oder während laufender Schichtpausen.
      </p>
      <p>
        Regensburg wächst. In Stadtteilen wie Burgweinting-Nord, der
        Konradsiedlung und rund um die Piusgasse entstehen neue Wohn- und
        Gewerbequartiere. Ob Neubau oder Umbau im Bestand: Sauber &amp; Rein
        ist als Reinigungspartner auf dem Regensburger Markt erfahren.
      </p>
    </ServicePage>
  );
}
