import { getMetadata } from "@/lib/seo";
import BlogContent from "./BlogContent";

export const metadata = getMetadata({
  title: "Insights: IT-Probleme im Mittelstand lösen",
  description: "Konkrete Insights zu typischen IT-Problemen: Cloud-Migration, IT-Sicherheit, VPN-Ablösung und Betriebsmodell. Jeder Beitrag zeigt den Weg vom Problem zum IT-Check.",
  canonical: "/blog",
});

export default function BlogPage() {
  return <BlogContent />;
}
