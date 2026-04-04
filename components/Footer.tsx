'use client';

import { LogoIcon } from "@/components/Logo";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 border-t border-gray-100 bg-white text-gray-700 text-sm" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-12">
          {/* Logo and Description */}
          <div className="max-w-xs space-y-6">
            <Link href="/" className="flex items-center gap-2.5 hover:opacity-80 transition-opacity shrink-0">
              <LogoIcon className="w-6 h-6 text-primary shrink-0" />
              <span className="font-bold text-black text-lg tracking-tight">Ecksolution<span className="text-primary">-IT</span></span>
            </Link>
            <p className="text-gray-500 leading-relaxed">
              {t.footer.description}
            </p>
          </div>

          {/* Company Links */}
          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-black uppercase tracking-widest text-[10px]">{t.footer.categories.company}</h3>
            <nav className="flex flex-col gap-3" aria-label="Unternehmens Links">
              <Link href="/kontakt" className="hover:text-primary transition-colors font-medium">{t.footer.links.contact}</Link>
              <Link href="/referenzen" className="hover:text-primary transition-colors font-medium">{t.footer.links.caseStudies}</Link>
            </nav>
          </div>

          {/* Support Links */}
          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-black uppercase tracking-widest text-[10px]">{t.footer.categories.support}</h3>
            <nav className="flex flex-col gap-3" aria-label="Support Links">
              <Link href="/support" className="hover:text-primary transition-colors font-medium">{t.footer.links.remoteMaintenance}</Link>
              <a 
                href="https://marketplace.ecksolution-it.de/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-primary transition-colors font-medium"
              >
                {t.footer.links.customerPortal}
              </a>
            </nav>
          </div>

          {/* Legal Links */}
          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-black uppercase tracking-widest text-[10px]">{t.footer.categories.legal}</h3>
            <nav className="flex flex-col gap-3" aria-label="Rechtliche Links">
              <Link href="/impressum" className="hover:text-primary transition-colors font-medium">{t.footer.links.imprint}</Link>
              <Link href="/datenschutz" className="hover:text-primary transition-colors font-medium">{t.footer.links.privacy}</Link>
            </nav>
          </div>

          {/* Appointment CTA */}
          <div className="flex flex-col gap-6">
            <div className="space-y-2">
              <h3 className="font-bold text-black uppercase tracking-widest text-[10px]">Beratung</h3>
              <p className="text-gray-500 text-xs">{t.footer.cta.hint}</p>
            </div>
            <Link 
              href="https://outlook.office.com/book/EcksolutionITService@ecksolution-it.de/?ismsaljsauthenabled" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-primary text-white font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/10 active:scale-[0.98]"
            >
              {t.footer.cta.button}
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-xs">
          <p>
            {t.footer.copyright.replace('{year}', currentYear.toString())}
          </p>
          <div className="flex gap-6">
            <span className="hover:text-gray-600 transition-colors cursor-default">Qualität aus Deutschland</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
