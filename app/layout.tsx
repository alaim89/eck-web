import type {Metadata} from 'next';
import { Poppins } from 'next/font/google';
import './globals.css'; // Global styles
import { LanguageProvider } from '@/context/LanguageContext';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-poppins',
});

import { getMetadata } from '@/lib/seo';

export const metadata = getMetadata();

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="de" className={`${poppins.variable}`}>
      <body className="font-poppins antialiased" suppressHydrationWarning>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
