import { Metadata } from 'next';
import DatenschutzClient from './DatenschutzClient';

export const metadata: Metadata = {
  title: 'Datenschutzerklärung | Ecksolution IT',
  description: 'Informationen zum Datenschutz und zur Verarbeitung personenbezogener Daten bei Ecksolution IT.',
};

export default function DatenschutzPage() {
  return <DatenschutzClient />;
}
