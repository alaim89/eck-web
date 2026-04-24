import { getMetadata } from "@/lib/seo";
import DatenschutzClient from './DatenschutzClient';

export const metadata = getMetadata({
  title: 'Datenschutzerklärung',
  description: 'Informationen zum Datenschutz und zur Verarbeitung personenbezogener Daten bei Ecksolution IT.',
  canonical: '/datenschutz',
  robots: { index: false, follow: true },
});

export default function DatenschutzPage() {
  return <DatenschutzClient />;
}
