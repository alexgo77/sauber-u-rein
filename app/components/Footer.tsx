import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="text-xl font-bold text-white mb-3 font-heading uppercase tracking-wide">
              Sauber <span className="text-brand-300">&amp;</span> Rein
            </div>
            <p className="text-sm leading-relaxed mb-4">
              Ihr zuverlässiger Partner für Gebäudereinigung und
              Hausmeisterservice in Regensburg und Umgebung.
            </p>
            <p className="text-sm leading-relaxed italic">
              Sauberkeit zum reinsten Vergnügen.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Reinigung</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/bueroreinigung-regensburg" className="hover:text-brand-300 transition-colors">
                  Büroreinigung
                </Link>
              </li>
              <li>
                <Link href="/praxisreinigung-regensburg" className="hover:text-brand-300 transition-colors">
                  Praxisreinigung
                </Link>
              </li>
              <li>
                <Link href="/fensterreinigung-regensburg" className="hover:text-brand-300 transition-colors">
                  Fensterreinigung
                </Link>
              </li>
              <li>
                <Link href="/baureinigung-regensburg" className="hover:text-brand-300 transition-colors">
                  Baureinigung
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/hausmeisterservice-regensburg" className="hover:text-brand-300 transition-colors">
                  Hausmeisterservice
                </Link>
              </li>
              <li>
                <Link href="/winterdienst-regensburg" className="hover:text-brand-300 transition-colors">
                  Winterdienst
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-brand-300 transition-colors">
                  Alle Leistungen
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Kontakt</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="tel:+491705749211" className="hover:text-brand-300 transition-colors">
                  +49 (0) 170 5749211
                </a>
              </li>
              <li>
                <a href="mailto:kontakt@sauber-u-rein.de" className="hover:text-brand-300 transition-colors">
                  kontakt@sauber-u-rein.de
                </a>
              </li>
              <li>Johanna-Kinkel-Str. 1</li>
              <li>93049 Regensburg</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Sauber &amp; Rein. Alle Rechte
            vorbehalten.
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-brand-300 transition-colors">
              Impressum
            </a>
            <a href="#" className="hover:text-brand-300 transition-colors">
              Datenschutz
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
