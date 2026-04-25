import { getMetadata } from "@/lib/seo";
import KontaktContent from "./KontaktContent";

export const metadata = getMetadata({
  title: "Kostenlose IT-Einschätzung anfordern",
  description: "Haben Sie Fragen zu Ihrer IT-Infrastruktur oder benötigen Sie Unterstützung bei einem Projekt? Fordern Sie jetzt Ihre kostenlose IT-Einschätzung an.",
  canonical: "/kontakt",
});

type KontaktPageProps = {
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
};

export default async function KontaktPage({ searchParams }: KontaktPageProps) {
  const params = (await searchParams) ?? {};
  const typeValue = Array.isArray(params.type) ? params.type[0] : params.type;
  const initialRequestType = typeValue === 'recruiter' ? 'recruiter' : 'it-check';

  return <KontaktContent initialRequestType={initialRequestType} />;
}
