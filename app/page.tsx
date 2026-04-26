import { getMetadata } from "@/lib/seo";
import LandingPageContent from "./LandingPageContent";

export const metadata = getMetadata({
  title: "IT-Check für den Mittelstand | IT-Klarheit schaffen",
  description:
    "Ihre IT läuft, aber ist sie unter Kontrolle? Ecksolution-IT macht Systeme, Risiken und Verantwortlichkeiten sichtbar – mit einem klaren IT-Check für den Mittelstand.",
  canonical: "/",
  type: "website",
});

export default function LandingPage() {
  return <LandingPageContent />;
}
