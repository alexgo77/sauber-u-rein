import type { Metadata } from "next";
import ServicePage from "../components/ServicePage";

export const metadata: Metadata = {
  title: "Winterdienst Regensburg",
  description:
    "Winterdienst & Gartenpflege in Regensburg: Schneeräumung, Streudienst und Grünanlagenpflege. Sauber & Rein — zuverlässig und dokumentiert.",
};

const faqItems = [
  {
    question:
      "Wer ist in Bayern für den Winterdienst verantwortlich — Mieter oder Vermieter?",
    answer:
      "Grundsätzlich trägt der Grundstückseigentümer die Verkehrssicherungspflicht. Die Räumpflicht kann per Mietvertrag auf Mieter übertragen werden — aber nur bei ausdrücklicher Vereinbarung. Sauber & Rein dokumentiert alle Einsätze lückenlos.",
  },
  {
    question: "Wann müssen Gehwege in Regensburg geräumt sein?",
    answer:
      "Als Richtwert: werktags bis 7:00 Uhr, sonn- und feiertags bis 8:00 Uhr. Bei anhaltendem Schneefall ist sofortiges Nachräumen erforderlich. Sauber & Rein rückt frühzeitig aus — auch mehrfach täglich bei Bedarf.",
  },
  {
    question: "Was kostet Winterdienst in Regensburg pro Saison?",
    answer:
      "Die Kosten hängen von der Fläche und dem Leistungsumfang ab. Ein Saisonvertrag ist günstiger als Einzelabrufe. Wir erstellen ein kostenloses, unverbindliches Angebot.",
  },
  {
    question: "Bietet Sauber & Rein auch ganzjährige Außenanlagenpflege an?",
    answer:
      "Ja. Winterdienst lässt sich mit Gartenpflege, Kehrservice und Grünanlagenpflege zum Ganzjahresvertrag kombinieren. Ein fester Ansprechpartner, keine Saison-Lücken.",
  },
];

const relatedLinks = [
  { href: "/", label: "Gebäudereinigung" },
  { href: "/hausmeisterservice-regensburg", label: "Hausmeisterservice" },
  { href: "/baureinigung-regensburg", label: "Baureinigung" },
];

export default function WinterdienstPage() {
  return (
    <ServicePage
      headline="Winterdienst Regensburg"
      intro="Wer in Regensburg eine Immobilie besitzt oder verwaltet, kennt das Problem: Schnee und Glatteis erscheinen über Nacht — und bis 7:00 Uhr morgens muss der Gehweg frei sein. Sauber & Rein übernimmt den Winterdienst zuverlässig und dokumentiert."
      faqItems={faqItems}
      ctaTitle="Winterdienstvertrag anfragen"
      ctaText="Schließen Sie Ihren Winterdienstvertrag frühzeitig ab. Wer im Oktober anruft, hat die Wahl — wer im Dezember anruft, oft nicht mehr."
      relatedLinks={relatedLinks}
    >
      <h2>Winterdienst für Gewerbe und Wohnanlagen</h2>
      <p>
        Schnee und Eis auf Zugangswegen sind kein Ärgernis — sie sind ein
        Haftungsrisiko. Sauber &amp; Rein rückt frühzeitig aus, bevor Ihre
        Mieter oder Mitarbeiter das Objekt betreten.
      </p>
      <ul>
        <li>
          Schneeräumung: Gehwege, Einfahrten, Parkflächen, Zugänge und
          Treppenbereiche
        </li>
        <li>
          Streuservice: Abstumpfende Streumittel, auf Wunsch umweltschonende
          Alternativen (Splitt statt Salz)
        </li>
        <li>
          Früheinsatz: Einsatz vor Betriebsbeginn, bei Dauerschneefall auch
          mehrfach täglich
        </li>
        <li>
          Einsatzdokumentation: Jeder Einsatz wird protokolliert — Datum,
          Uhrzeit, Maßnahmen
        </li>
        <li>Notfallerreichbarkeit: Auch bei Starkschneefall verlässlich</li>
      </ul>
      <p>
        Die lückenlose Dokumentation ist kein Beiwerk. Sie ist der Unterschied
        zwischen einem klaren Nachweis und einem teuren Rechtsstreit.
      </p>

      <h2>Räumpflicht in Bayern</h2>
      <p>
        Das Bayerische Straßen- und Wegegesetz (BayStrWG) macht
        Grundstückseigentümer für die Sicherung angrenzender Gehwege
        verantwortlich. In Regensburg gelten folgende Räumzeiten:
      </p>
      <ul>
        <li>Werktags: Gehwege bis 7:00 Uhr geräumt und gestreut</li>
        <li>Sonn- und Feiertags: bis 8:00 Uhr</li>
        <li>
          Bei Dauerschneefall: sofortiges Nachräumen, sobald es die Witterung
          erlaubt
        </li>
      </ul>
      <p>
        Eigentümer können die Räumpflicht per Mietvertrag auf Mieter
        übertragen. Ohne ausdrückliche Regelung bleibt der Eigentümer
        verantwortlich. Wer einen professionellen Räum- und Streudienst
        beauftragt, verlagert die operative Durchführung — und erhält eine
        Dokumentation, die im Streitfall zählt.
      </p>

      <h2>Gartenpflege und Außenanlagen das ganze Jahr</h2>
      <p>
        Ein Winterdienstvertrag endet nicht im März. Sauber &amp; Rein betreut
        Außenanlagen in Wohngebieten wie Westenviertel, Galgenberg,
        Konradsiedlung und Burgweinting.
      </p>
      <ul>
        <li>Rasenpflege und Heckenschnitt</li>
        <li>Beetpflege und Laubentfernung</li>
        <li>
          Reinigung von Pflasterflächen, Naturstein und Eingangsbereichen
        </li>
        <li>Kehrservice für Außenanlagen</li>
      </ul>
      <p>
        Ein Ganzjahresvertrag bedeutet: ein Ansprechpartner, eine Abrechnung,
        keine Saison-Lücken.
      </p>
    </ServicePage>
  );
}
