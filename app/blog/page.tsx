import { getMetadata } from "@/lib/seo";
import BlogContent from "./BlogContent";

export const metadata = getMetadata({
  title: "Blog & IT-Strategie für Entscheider",
  description: "Praxisnahe Tipps, tiefgehende Analysen und aktuelle Trends aus den Bereichen Cloud-Architektur, IT-Sicherheit und digitale Transformation.",
  canonical: "/blog",
});

export default function BlogPage() {
  return <BlogContent />;
}
