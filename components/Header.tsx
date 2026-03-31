'use client';

import { LogoIcon } from "@/components/Logo";
import { ChevronDown, ArrowRight, Languages } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { Language } from "@/lib/translations";

export function Header() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-[1200px] mx-auto px-6 h-20 md:h-24 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 md:gap-3 hover:opacity-80 transition-opacity shrink-0">
          <LogoIcon className="w-7 h-7 md:w-8 md:h-8 text-primary shrink-0" />
          <span className="font-bold tracking-tight text-xl md:text-2xl text-black">Ecksolution<span className="text-primary">-IT</span></span>
        </Link>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center h-full gap-8 lg:gap-10 text-sm font-medium text-gray-700">
          <Link href="/#problem" className="hover:text-black transition-colors">{t.nav.risk}</Link>
          
          {/* Mega Menu */}
          <div className="relative group h-full flex items-center">
            <button className="flex items-center gap-1 hover:text-black transition-colors h-full">
              {t.nav.solutions} <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform" />
            </button>
            
            {/* Dropdown Panel */}
            <div className="absolute top-[calc(100%-1px)] left-1/2 -translate-x-1/2 w-[850px] bg-white border border-gray-100 shadow-[0_20px_40px_rgb(0,0,0,0.08)] rounded-2xl p-8 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 grid grid-cols-12 gap-10">
              
              {/* Primary Focus: Managed Services */}
              <div className="col-span-5 bg-gray-50 rounded-xl p-6 border border-gray-100/50 flex flex-col justify-between">
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-primary mb-6 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    {t.nav.megaMenu.core}
                  </h3>
                  <div className="space-y-6">
                    <Link href="/solutions/managed-it-services" className="block group/item">
                      <div className="text-black font-semibold mb-1 text-base group-hover/item:text-primary transition-colors">{t.nav.megaMenu.managedOps}</div>
                      <div className="text-gray-700 text-sm leading-relaxed">{t.nav.megaMenu.managedOpsDesc}</div>
                    </Link>
                    <Link href="/solutions/co-managed-it" className="block group/item">
                      <div className="text-black font-semibold mb-1 text-base group-hover/item:text-primary transition-colors">{t.nav.megaMenu.coManaged}</div>
                      <div className="text-gray-700 text-sm leading-relaxed">{t.nav.megaMenu.coManagedDesc}</div>
                    </Link>
                  </div>
                </div>
                <div className="pt-6 mt-6 border-t border-gray-200/60">
                  <Link href="/#pricing" className="text-sm font-semibold text-black hover:text-primary flex items-center gap-1 transition-colors">
                    {t.nav.megaMenu.pricingLink} <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Other Categories */}
              <div className="col-span-7 grid grid-cols-2 gap-x-8 gap-y-10 py-2">
                {/* Security & Backup */}
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-gray-700 mb-5">{t.nav.megaMenu.securityBackup}</h3>
                  <div className="space-y-5">
                    <Link href="/solutions/cybersecurity-protection" className="block group/link">
                      <div className="text-black font-medium text-sm mb-1 group-hover/link:text-primary transition-colors">{t.nav.megaMenu.cybersecurity}</div>
                      <div className="text-gray-700 text-xs leading-relaxed">{t.nav.megaMenu.cybersecurityDesc}</div>
                    </Link>
                    <Link href="/solutions/managed-backup" className="block group/link">
                      <div className="text-black font-medium text-sm mb-1 group-hover/link:text-primary transition-colors">{t.nav.megaMenu.backup}</div>
                      <div className="text-gray-700 text-xs leading-relaxed">{t.nav.megaMenu.backupDesc}</div>
                    </Link>
                  </div>
                </div>

                {/* Infrastructure */}
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-gray-700 mb-5">{t.nav.megaMenu.infrastructure}</h3>
                  <div className="space-y-5">
                    <Link href="/solutions/network-management" className="block group/link">
                      <div className="text-black font-medium text-sm mb-1 group-hover/link:text-primary transition-colors">{t.nav.megaMenu.network}</div>
                      <div className="text-gray-700 text-xs leading-relaxed">{t.nav.megaMenu.networkDesc}</div>
                    </Link>
                    <Link href="/solutions/hardware-lifecycle" className="block group/link">
                      <div className="text-black font-medium text-sm mb-1 group-hover/link:text-primary transition-colors">{t.nav.megaMenu.hardware}</div>
                      <div className="text-gray-700 text-xs leading-relaxed">{t.nav.megaMenu.hardwareDesc}</div>
                    </Link>
                  </div>
                </div>

                {/* Migration & Projects */}
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-gray-700 mb-5">{t.nav.megaMenu.migration}</h3>
                  <div className="space-y-5">
                    <Link href="/solutions/microsoft-365-migration" className="block group/link">
                      <div className="text-black font-medium text-sm mb-1 group-hover/link:text-primary transition-colors">{t.nav.megaMenu.m365Migration}</div>
                      <div className="text-gray-700 text-xs leading-relaxed">{t.nav.megaMenu.m365MigrationDesc}</div>
                    </Link>
                    <Link href="/solutions/azure-migration" className="block group/link">
                      <div className="text-black font-medium text-sm mb-1 group-hover/link:text-primary transition-colors">{t.nav.megaMenu.azureMigration}</div>
                      <div className="text-gray-700 text-xs leading-relaxed">{t.nav.megaMenu.azureMigrationDesc}</div>
                    </Link>
                  </div>
                </div>

                {/* Entry Points */}
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-gray-700 mb-5">{t.nav.megaMenu.entryPoints}</h3>
                  <div className="space-y-5">
                    <Link href="/solutions/it-risk-audit" className="block group/link">
                      <div className="text-black font-medium text-sm mb-1 group-hover/link:text-primary transition-colors">{t.nav.megaMenu.riskAudit}</div>
                      <div className="text-gray-700 text-xs leading-relaxed">{t.nav.megaMenu.riskAuditDesc}</div>
                    </Link>
                    <Link href="/solutions/strategic-it-roadmap" className="block group/link">
                      <div className="text-black font-medium text-sm mb-1 group-hover/link:text-primary transition-colors">{t.nav.megaMenu.roadmap}</div>
                      <div className="text-gray-700 text-xs leading-relaxed">{t.nav.megaMenu.roadmapDesc}</div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Link href="/case-studies" className="hover:text-black transition-colors">{t.nav.caseStudies}</Link>
          <Link href="/#pricing" className="hover:text-black transition-colors">{t.nav.pricing}</Link>
          
          {/* Language Switcher */}
          <div className="relative group flex items-center h-full">
            <button className="flex items-center gap-1.5 hover:text-black transition-colors">
              <Languages className="w-4 h-4" />
              <span className="uppercase">{language}</span>
              <ChevronDown className="w-3 h-3 group-hover:rotate-180 transition-transform" />
            </button>
            <div className="absolute top-[calc(100%-1px)] right-0 w-32 bg-white border border-gray-100 shadow-lg rounded-xl p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              {(['en', 'de', 'es'] as Language[]).map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${language === lang ? 'bg-primary/10 text-primary font-semibold' : 'hover:bg-gray-50 text-gray-700'}`}
                >
                  {lang === 'en' ? 'English' : lang === 'de' ? 'Deutsch' : 'Español'}
                </button>
              ))}
            </div>
          </div>

          <Link href="/#contact" className="px-5 py-2.5 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors shadow-sm font-semibold">
            {t.nav.getAudit}
          </Link>
        </div>

        {/* Mobile CTA */}
        <div className="md:hidden flex items-center gap-4">
          <button 
            onClick={() => setLanguage(language === 'en' ? 'de' : language === 'de' ? 'es' : 'en')}
            className="p-2 text-gray-700"
          >
            <Languages className="w-5 h-5" />
          </button>
          <Link href="/#contact" className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors shadow-sm text-sm font-semibold">
            {t.nav.getAudit}
          </Link>
        </div>
      </div>
    </nav>
  );
}
