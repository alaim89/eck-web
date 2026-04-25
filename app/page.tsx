import { getMetadata } from "@/lib/seo";
import LandingPageContent from "./LandingPageContent";

export const metadata = getMetadata({
  title: "IT-Check für den Mittelstand | Ecksolution IT",
  description:
    "IT-Check in 10 Werktagen: Wir analysieren Systeme, Prozesse und Risiken und liefern einen priorisierten Maßnahmenplan für Stabilität, Sicherheit und bessere Vertriebsprozesse.",
  canonical: "/",
});

export default function LandingPage() {
  return <LandingPageContent />;
}
