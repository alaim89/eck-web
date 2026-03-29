import type {Metadata} from 'next';
import { Poppins } from 'next/font/google';
import './globals.css'; // Global styles

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'Apex IT - Managed Services',
  description: 'High-conversion landing page for an IT Managed Services Provider',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${poppins.variable}`}>
      <body className="font-poppins antialiased" suppressHydrationWarning>{children}</body>
    </html>
  );
}
