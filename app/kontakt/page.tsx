import { getMetadata } from "@/lib/seo";
import KontaktContent from "./KontaktContent";

export const metadata = getMetadata({
  title: "Kontakt & IT-Erstberatung",
  description: "Haben Sie Fragen zu Ihrer IT-Infrastruktur oder benötigen Sie Unterstützung bei einem Projekt? Kontaktieren Sie uns für eine kostenlose Erstberatung.",
  canonical: "/kontakt",
});

export default function KontaktPage() {
  return <KontaktContent />;
}

