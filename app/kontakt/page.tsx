import { getMetadata } from "@/lib/seo";
import KontaktContent from "./KontaktContent";

export const metadata = getMetadata({
  title: "IT-Check für Unternehmen: Analyse, Prioritäten, Klarheit",
  description: "IT-Probleme analysieren statt raten: Der IT-Check schafft Klarheit zu Risiken, Verantwortlichkeiten und nächsten Schritten – für Unternehmen in Niedersachsen und im Raum Hannover.",
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
