"use client";

import { useState } from "react";
import Link from "next/link";

const services = [
  { href: "/bueroreinigung-regensburg", label: "Büroreinigung" },
  { href: "/praxisreinigung-regensburg", label: "Praxisreinigung" },
  { href: "/fensterreinigung-regensburg", label: "Fensterreinigung" },
  { href: "/baureinigung-regensburg", label: "Baureinigung" },
  { href: "/hausmeisterservice-regensburg", label: "Hausmeisterservice" },
  { href: "/winterdienst-regensburg", label: "Winterdienst" },
];

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl sm:text-2xl font-bold font-heading text-brand-500 uppercase tracking-wide">
              Sauber <span className="text-brand-500">&amp;</span> Rein
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            <div className="relative group">
              <button className="text-sm font-medium text-gray-600 hover:text-brand-500 transition-colors flex items-center gap-1">
                Leistungen
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="bg-white rounded-xl shadow-lg border border-gray-100 py-2 min-w-[220px]">
                  {services.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className="block px-4 py-2.5 text-sm text-gray-600 hover:text-brand-500 hover:bg-brand-50 transition-colors"
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <Link
              href="/#ablauf"
              className="text-sm font-medium text-gray-600 hover:text-brand-500 transition-colors"
            >
              Ablauf
            </Link>
            <Link
              href="/#faq"
              className="text-sm font-medium text-gray-600 hover:text-brand-500 transition-colors"
            >
              FAQ
            </Link>
            <a
              href="tel:+491705749211"
              className="text-sm font-medium text-gray-600 hover:text-brand-500 transition-colors"
            >
              +49 170 5749211
            </a>
            <Link
              href="/#kontakt"
              className="inline-flex items-center px-5 py-2.5 rounded-lg bg-brand-500 text-white text-sm font-semibold hover:bg-brand-600 transition-colors"
            >
              Angebot anfordern
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Menü öffnen"
          >
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-4 py-4 space-y-1">
            <p className="px-3 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
              Leistungen
            </p>
            {services.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                onClick={() => setMenuOpen(false)}
                className="block px-3 py-2.5 text-sm font-medium text-gray-600 hover:text-brand-500 hover:bg-brand-50 rounded-lg transition-colors"
              >
                {s.label}
              </Link>
            ))}
            <div className="border-t border-gray-100 pt-3 mt-3 space-y-1">
              <Link
                href="/#ablauf"
                onClick={() => setMenuOpen(false)}
                className="block px-3 py-2.5 text-sm font-medium text-gray-600 hover:text-brand-500 rounded-lg"
              >
                Ablauf
              </Link>
              <a
                href="tel:+491705749211"
                className="block px-3 py-2.5 text-sm font-medium text-brand-500"
              >
                📞 +49 170 5749211
              </a>
              <Link
                href="/#kontakt"
                onClick={() => setMenuOpen(false)}
                className="block px-3 py-2.5 text-sm font-semibold text-white bg-brand-500 rounded-lg text-center hover:bg-brand-600 transition-colors"
              >
                Kostenloses Angebot anfordern
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
