import type {Metadata} from 'next';
import { Poppins } from 'next/font/google';
import './globals.css'; // Global styles
import { LanguageProvider } from '@/context/LanguageContext';
import Script from 'next/script';
import CookieBanner from '@/components/CookieBanner';

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
        
        <CookieBanner />
        
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-5630ZYY4GR"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            
            gtag('consent', 'default', {
              'analytics_storage': 'denied'
            });

            gtag('js', new Date());
            gtag('config', 'G-5630ZYY4GR');
          `}
        </Script>
      </body>
    </html>
  );
}
