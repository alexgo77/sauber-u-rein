"use client";

import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="text-center py-12">
        <div className="text-5xl mb-4">✅</div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2 font-heading">
          Vielen Dank für Ihre Anfrage!
        </h3>
        <p className="text-gray-600">
          Wir melden uns innerhalb von 24 Stunden bei Ihnen.
        </p>
      </div>
    );
  }

  return (
    <form
      action="https://formspree.io/f/xpwdqjkl"
      method="POST"
      onSubmit={(e) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        fetch(form.action, {
          method: "POST",
          body: new FormData(form),
          headers: { Accept: "application/json" },
        }).then((res) => {
          if (res.ok) setSubmitted(true);
        });
      }}
      className="space-y-5"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-200 text-gray-900 placeholder-gray-400 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all text-sm"
            placeholder="Ihr Name"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1.5">
            Telefon
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="w-full px-4 py-3 rounded-lg border border-gray-200 text-gray-900 placeholder-gray-400 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all text-sm"
            placeholder="Ihre Telefonnummer"
          />
        </div>
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
          E-Mail *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full px-4 py-3 rounded-lg border border-gray-200 text-gray-900 placeholder-gray-400 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all text-sm"
          placeholder="ihre@email.de"
        />
      </div>
      <div>
        <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1.5">
          Gewünschte Leistung
        </label>
        <select
          id="service"
          name="service"
          className="w-full px-4 py-3 rounded-lg border border-gray-200 text-gray-900 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all text-sm bg-white"
        >
          <option value="">Bitte wählen...</option>
          <option value="gebaeudereinigung">Gebäudereinigung</option>
          <option value="bueroreinigung">Büroreinigung</option>
          <option value="praxisreinigung">Praxisreinigung & Desinfektion</option>
          <option value="fensterreinigung">Fensterreinigung</option>
          <option value="baureinigung">Baureinigung</option>
          <option value="hausmeisterservice">Hausmeisterservice</option>
          <option value="winterdienst">Winterdienst & Gartenpflege</option>
          <option value="sonstiges">Sonstiges</option>
        </select>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">
          Ihre Nachricht *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          className="w-full px-4 py-3 rounded-lg border border-gray-200 text-gray-900 placeholder-gray-400 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all text-sm resize-none"
          placeholder="Beschreiben Sie kurz Ihr Objekt und Ihre Anforderungen..."
        />
      </div>
      <button
        type="submit"
        className="w-full py-3.5 bg-brand-500 text-white font-semibold rounded-lg hover:bg-brand-600 transition-colors shadow-lg shadow-brand-500/25 text-sm"
      >
        Kostenloses Angebot anfordern
      </button>
      <p className="text-xs text-gray-400 text-center">
        Ihre Daten werden vertraulich behandelt. Wir melden uns innerhalb von 24 Stunden.
      </p>
    </form>
  );
}
