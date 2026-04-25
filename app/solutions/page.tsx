import { getMetadata } from "@/lib/seo";
import SolutionsIndexContent from "./SolutionsIndexContent";

export const metadata = getMetadata({
  title: "IT-Probleme lösen: Lösungen für Betrieb, Sicherheit & Cloud",
  description: "Typische IT-Probleme im Mittelstand: instabiler Betrieb, Sicherheitsdruck, Cloud-Migration oder fehlende Verantwortung. Finden Sie den passenden Lösungsweg und starten Sie mit dem IT-Check.",
  canonical: "/solutions",
});

export default function SolutionsIndexPage() {
  return <SolutionsIndexContent />;
}
