import { getMetadata } from "@/lib/seo";
import ImpressumClient from './ImpressumClient';

export const metadata = getMetadata({
  title: 'Impressum',
  description: 'Rechtliche Informationen und Kontaktangaben von Ecksolution IT gemäß § 5 DDG.',
  canonical: '/impressum',
  robots: { index: false, follow: true }, // Usually legal pages don't need to be indexed as primary content
});

export default function ImpressumPage() {
  return <ImpressumClient />;
}
