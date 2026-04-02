import { getMetadata } from "@/lib/seo";
import LandingPageContent from "./LandingPageContent";

export const metadata = getMetadata({
  title: "IT-Betreuung & Managed Services für den Mittelstand",
  description: "Professionelle IT-Betreuung, Cybersecurity und Cloud-Lösungen für den Mittelstand. Wir übernehmen die volle Verantwortung für Ihre IT – proaktiv und sicher.",
  canonical: "/",
});

export default function LandingPage() {
  return <LandingPageContent />;
}
