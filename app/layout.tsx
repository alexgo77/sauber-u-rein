import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sauber & Rein - Gebäude- und Hausmeisterservice Regensburg",
  description:
    "Professioneller Gebäudereinigungsservice und Hausmeisterservice in Regensburg. Gebäudereinigung, Treppenhausreinigung, Unterhaltsreinigung, Glasreinigung, Winterdienst und mehr.",
  keywords: [
    "Gebäudereinigung Regensburg",
    "Hausmeisterservice Regensburg",
    "Treppenhausreinigung",
    "Unterhaltsreinigung",
    "Glasreinigung",
    "Winterdienst Regensburg",
    "Reinigungsservice Regensburg",
    "Sauber und Rein",
  ],
  authors: [{ name: "Sauber & Rein" }],
  openGraph: {
    title: "Sauber & Rein - Gebäude- und Hausmeisterservice Regensburg",
    description:
      "Ihr zuverlässiger Partner für Gebäudereinigung und Hausmeisterservice in Regensburg und Umgebung.",
    url: "https://sauber-u-rein.de",
    siteName: "Sauber & Rein",
    locale: "de_DE",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL("https://sauber-u-rein.de"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body className="min-h-screen bg-white">{children}</body>
    </html>
  );
}
