'use client';

import { Download } from "lucide-react";

export function SupportDownloadButton() {
  return (
    <a 
      href="https://gw52.pcvisit.de/v1/hosted/jumplink?productid=18&func=download&productrole=guestSetup&host=gw52.pcvisit.de&companyid=3978521533&gateway=lb3.pcvisit.de"
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => {
        if (typeof window !== "undefined" && (window as any).gtag) {
          (window as any).gtag("event", "download", {
            event_category: "Support",
            event_label: "Fernwartung Download"
          });
        }
      }}
      className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-white rounded-xl font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/10 active:scale-[0.98] w-full justify-center md:w-auto"
    >
      Fernwartung herunterladen
      <Download className="w-5 h-5" />
    </a>
  );
}
