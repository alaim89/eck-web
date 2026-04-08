import { getMetadata } from "@/lib/seo";
import SolutionsIndexContent from "./SolutionsIndexContent";

export const metadata = getMetadata({
  title: "IT-Lösungen & Managed Services für Unternehmen",
  description: "Entdecken Sie unsere individuellen IT-Lösungen: Von Managed IT-Services und Cybersecurity bis hin zu Cloud-Infrastruktur und strategischer Beratung.",
  canonical: "/solutions",
});

export default function SolutionsIndexPage() {
  return <SolutionsIndexContent />;
}
