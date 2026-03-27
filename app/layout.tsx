import type { Metadata } from "next";
import "./globals.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

export const metadata: Metadata = {
  title: {
    default: "Gebäudereinigung Regensburg | Sauber & Rein",
    template: "%s | Sauber & Rein",
  },
  description:
    "Professionelle Gebäudereinigung in Regensburg: Büro, Praxis, Gewerbe. Sauber & Rein steht für Zuverlässigkeit. Jetzt kostenloses Angebot anfordern.",
  keywords: [
    "Gebäudereinigung Regensburg",
    "Reinigungsunternehmen Regensburg",
    "Reinigung Regensburg",
    "Reinigungsfirma Regensburg",
    "Hausmeisterservice Regensburg",
    "Büroreinigung Regensburg",
    "Praxisreinigung Regensburg",
    "Fensterreinigung Regensburg",
    "Winterdienst Regensburg",
    "Baureinigung Regensburg",
    "Unterhaltsreinigung Regensburg",
    "Reinigungsservice Regensburg",
  ],
  authors: [{ name: "Sauber & Rein" }],
  openGraph: {
    title: "Gebäudereinigung Regensburg | Sauber & Rein",
    description:
      "Professionelle Gebäudereinigung in Regensburg: Büro, Praxis, Gewerbe. Sauber & Rein steht für Zuverlässigkeit.",
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
      <body className="min-h-screen bg-white">
        <Navigation />
        <main className="pt-16 sm:pt-20">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
