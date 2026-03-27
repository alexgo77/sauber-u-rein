"use client";

import { useState } from "react";

export default function WhatsAppButton() {
  const [open, setOpen] = useState(false);
  const phoneNumber = "491705749211";
  const defaultMessage =
    "Hallo Sauber & Rein Team! Ich interessiere mich für Ihre Dienstleistungen und hätte gerne ein unverbindliches Angebot. Können Sie mich beraten?";

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 sm:w-16 sm:h-16 bg-[#25D366] rounded-full shadow-lg shadow-[#25D366]/30 flex items-center justify-center hover:scale-110 transition-transform"
        aria-label="WhatsApp Chat öffnen"
      >
        <svg viewBox="0 0 32 32" className="w-7 h-7 sm:w-8 sm:h-8 fill-white">
          <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16.004c0 3.5 1.128 6.744 3.046 9.378L1.054 31.29l6.118-1.96A15.923 15.923 0 0016.004 32C24.826 32 32 24.826 32 16.004 32 7.176 24.826 0 16.004 0zm9.302 22.602c-.388 1.094-1.932 2.002-3.158 2.266-.838.178-1.932.32-5.618-1.208-4.714-1.954-7.744-6.73-7.98-7.042-.226-.312-1.9-2.53-1.9-4.826 0-2.296 1.2-3.428 1.626-3.894.388-.424.85-.53 1.132-.53.282 0 .566.002.812.016.262.012.614-.1.96.732.356.852 1.216 2.934 1.322 3.148.108.214.178.466.036.75-.142.286-.214.464-.428.714-.214.25-.45.558-.642.748-.214.214-.436.446-.188.876.25.428 1.108 1.828 2.378 2.962 1.634 1.458 3.01 1.91 3.438 2.124.428.214.678.178.928-.108.25-.286 1.072-1.25 1.358-1.678.286-.428.572-.356.964-.214.392.142 2.478 1.168 2.904 1.382.428.214.714.322.82.5.108.178.108 1.03-.28 2.124z" />
        </svg>
      </button>

      {/* Chat Dialog */}
      {open && (
        <div className="fixed bottom-24 right-4 sm:right-6 z-50 w-[340px] sm:w-[380px] rounded-2xl shadow-2xl overflow-hidden animate-in">
          {/* Header */}
          <div className="bg-[#075E54] px-5 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white font-bold text-sm">
                S&R
              </div>
              <div>
                <p className="text-white font-semibold text-sm">
                  Sauber & Rein
                </p>
                <p className="text-[#25D366] text-xs">
                  Antwortet in der Regel innerhalb einer Stunde
                </p>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-white/70 hover:text-white"
              aria-label="Chat schließen"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Chat Body */}
          <div
            className="px-4 py-5 space-y-3"
            style={{
              backgroundColor: "#ECE5DD",
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d5cec4' fill-opacity='0.3'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
            }}
          >
            {/* Example message from Sauber & Rein */}
            <div className="max-w-[85%]">
              <div className="bg-white rounded-lg rounded-tl-none px-4 py-3 shadow-sm">
                <p className="text-[13px] text-gray-800 leading-relaxed">
                  Hallo! 👋 Schön, dass Sie sich für Sauber & Rein
                  interessieren.
                </p>
                <p className="text-[13px] text-gray-800 leading-relaxed mt-2">
                  Wie können wir Ihnen helfen? Schreiben Sie uns einfach:
                </p>
                <ul className="text-[13px] text-gray-800 mt-2 space-y-1">
                  <li>✅ Angebot für Gebäudereinigung</li>
                  <li>✅ Hausmeisterservice anfragen</li>
                  <li>✅ Fragen zu unseren Leistungen</li>
                </ul>
                <p className="text-[11px] text-gray-400 text-right mt-2">
                  Jetzt
                </p>
              </div>
            </div>
          </div>

          {/* Input / CTA */}
          <div className="bg-white px-4 py-3 border-t border-gray-100">
            <a
              href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 bg-[#25D366] text-white font-semibold rounded-lg hover:bg-[#1fb855] transition-colors text-sm"
            >
              <svg viewBox="0 0 32 32" className="w-5 h-5 fill-white">
                <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16.004c0 3.5 1.128 6.744 3.046 9.378L1.054 31.29l6.118-1.96A15.923 15.923 0 0016.004 32C24.826 32 32 24.826 32 16.004 32 7.176 24.826 0 16.004 0zm9.302 22.602c-.388 1.094-1.932 2.002-3.158 2.266-.838.178-1.932.32-5.618-1.208-4.714-1.954-7.744-6.73-7.98-7.042-.226-.312-1.9-2.53-1.9-4.826 0-2.296 1.2-3.428 1.626-3.894.388-.424.85-.53 1.132-.53.282 0 .566.002.812.016.262.012.614-.1.96.732.356.852 1.216 2.934 1.322 3.148.108.214.178.466.036.75-.142.286-.214.464-.428.714-.214.25-.45.558-.642.748-.214.214-.436.446-.188.876.25.428 1.108 1.828 2.378 2.962 1.634 1.458 3.01 1.91 3.438 2.124.428.214.678.178.928-.108.25-.286 1.072-1.25 1.358-1.678.286-.428.572-.356.964-.214.392.142 2.478 1.168 2.904 1.382.428.214.714.322.82.5.108.178.108 1.03-.28 2.124z" />
              </svg>
              Chat starten
            </a>
          </div>
        </div>
      )}
    </>
  );
}
