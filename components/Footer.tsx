import { LogoIcon } from "@/components/Logo";
import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-gray-100 bg-white text-gray-700 text-sm" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      <div className="max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start gap-4">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity shrink-0">
            <LogoIcon className="w-5 h-5 md:w-6 md:h-6 text-primary shrink-0" />
            <span className="font-semibold text-gray-700 text-base">Ecksolution-IT</span>
          </Link>
          <p className="text-center md:text-left text-gray-500">
            © {currentYear} Ecksolution-IT Managed Services.
          </p>
        </div>

        <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4" aria-label="Rechtliche Links">
          <Link href="/kontakt" className="hover:text-primary transition-colors font-medium">Kontakt</Link>
          <Link href="/impressum" className="hover:text-primary transition-colors font-medium">Impressum</Link>
          <Link href="/datenschutz" className="hover:text-primary transition-colors font-medium">Datenschutz</Link>
        </nav>

        <div className="shrink-0">
          <Link 
            href="https://outlook.office.com/book/EcksolutionITService@ecksolution-it.de/?ismsaljsauthenabled" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-primary text-white font-semibold hover:opacity-90 transition-all shadow-sm"
          >
            Termin buchen
          </Link>
        </div>
      </div>
    </footer>
  );
}
