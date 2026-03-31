import { Metadata } from 'next';
import ImpressumClient from './ImpressumClient';

export const metadata: Metadata = {
  title: 'Impressum | Ecksolution IT',
  description: 'Rechtliche Informationen und Kontaktangaben von Ecksolution IT gemäß § 5 DDG.',
};

export default function ImpressumPage() {
  return <ImpressumClient />;
}
