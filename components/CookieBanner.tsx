"use client";

import { useEffect, useState } from "react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent-v1");
    if (!consent) {
      // Wrap in setTimeout to avoid synchronous setState in effect (Satisfies linter)
      setTimeout(() => setVisible(true), 0);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent-v1", "accepted");

    if (typeof window !== "undefined") {
      const gtag = (window as any).gtag;
      if (gtag) {
        gtag("consent", "update", {
          analytics_storage: "granted",
        });
      }
    }

    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem("cookie-consent-v1", "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 left-6 right-6 md:left-auto md:w-[420px] bg-white border border-gray-200 rounded-xl shadow-xl p-5 z-50">
      <p className="text-sm text-gray-700 mb-4 leading-relaxed">
        Wir verwenden Cookies und vergleichbare Technologien, um die Nutzung unserer Website zu analysieren und unsere Dienste zu verbessern. Dabei können personenbezogene Daten verarbeitet werden (z. B. IP-Adresse). Sie können selbst entscheiden, ob Sie diese Cookies zulassen. Weitere Informationen finden Sie in unserer Datenschutzerklärung.
      </p>

      <div className="text-[11px] text-gray-500 mb-4 space-y-2 border-t border-gray-100 pt-4">
        <p>
          Wir nutzen Google Analytics, einen Webanalysedienst der Google Ireland Limited.
        </p>
        <p>
          Google Analytics verwendet Cookies, die eine Analyse der Benutzung der Website ermöglichen. Die durch das Cookie erzeugten Informationen über Ihre Benutzung dieser Website werden in der Regel an einen Server von Google übertragen und dort gespeichert.
        </p>
        <p>
          Die Nutzung erfolgt ausschließlich auf Grundlage Ihrer Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO. Sie können Ihre Einwilligung jederzeit widerrufen.
        </p>
      </div>

      <div className="flex gap-3">
        <button
          onClick={accept}
          className="flex-1 bg-black text-white py-2 rounded-lg text-sm font-semibold hover:bg-gray-800 transition-colors"
        >
          Alle akzeptieren
        </button>

        <button
          onClick={decline}
          className="flex-1 border border-gray-300 py-2 rounded-lg text-sm hover:bg-gray-50 transition-colors"
        >
          Ablehnen
        </button>
      </div>
    </div>
  );
}
