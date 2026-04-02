import { getMetadata } from "@/lib/seo";
import KontaktContent from "./KontaktContent";

export const metadata = getMetadata({
  title: "Kostenlose IT-Einschätzung anfordern",
  description: "Haben Sie Fragen zu Ihrer IT-Infrastruktur oder benötigen Sie Unterstützung bei einem Projekt? Fordern Sie jetzt Ihre kostenlose IT-Einschätzung an.",
  canonical: "/kontakt",
});

export default function KontaktPage() {
  return <KontaktContent />;
}

