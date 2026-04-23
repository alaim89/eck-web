'use client';

import { LogoIcon } from "@/components/Logo";
import { ChevronDown, ArrowRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { useState, useRef, useEffect } from "react";

export function Header() {
  const { t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="fixed top-0 w-full bg-white z-50 border-b border-slate-100/80 font-poppins">
      <div className="page-container h-20 flex items-center justify-between">
        {/* Brand Area */}
        <div className="flex items-center gap-10">
          <Link href="/" className="flex items-center gap-2.5 hover:opacity-80 transition-opacity shrink-0 group">
            <div className="w-9 h-9 rounded-lg bg-primary/[0.05] flex items-center justify-center group-hover:scale-105 transition-transform shadow-inner">
              <LogoIcon className="w-5 h-5 text-primary shrink-0" />
            </div>
            <span className="font-bold tracking-tighter text-xl text-slate-900">Ecksolution<span className="text-primary">-IT</span></span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 text-[11px] font-bold text-slate-500 uppercase tracking-[0.2em]">
            {/* Mega Menu */}
            <div className="relative h-full flex items-center" ref={menuRef}>
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                onMouseEnter={() => setIsMenuOpen(true)}
                aria-expanded={isMenuOpen}
                aria-haspopup="true"
                aria-controls="mega-menu"
                className="flex items-center gap-1.5 hover:text-primary transition-colors py-4"
              >
                {t.nav.solutions} <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${isMenuOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Dropdown Panel */}
              <div 
                id="mega-menu"
                onMouseLeave={() => setIsMenuOpen(false)}
                className={`absolute top-full left-0 w-[760px] glass-panel p-10 transition-all duration-500 grid grid-cols-3 gap-12 ${isMenuOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-1'}`}
              >
                {/* Column 1: Core & Security */}
                <div className="space-y-12">
                  <div>
                    <h3 className="text-[9px] font-bold uppercase tracking-[0.25em] text-primary/70 mb-6 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/30"></span>
                      {t.megaMenu.core.badge}
                    </h3>
                    <div className="space-y-2">
                      {t.megaMenu.core.items.map((item, idx) => (
                        <Link key={idx} href={item.href} onClick={() => setIsMenuOpen(false)} className="block group/item -mx-3 px-3 py-2.5 rounded-xl hover:bg-slate-50 transition-all">
                          <div className="text-slate-900 font-bold text-[13px] group-hover/item:text-primary transition-colors tracking-tight">{item.title}</div>
                          <div className="text-slate-400 text-[10px] leading-snug font-light line-clamp-1 mt-0.5">{item.desc}</div>
                        </Link>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-[9px] font-bold uppercase tracking-[0.25em] text-slate-400 mb-6">{t.megaMenu.categories[0].title}</h3>
                    <div className="space-y-1">
                      {t.megaMenu.categories[0].items.map((item, idx) => (
                        <Link key={idx} href={item.href} onClick={() => setIsMenuOpen(false)} className="block group/link -mx-3 px-3 py-2 rounded-lg hover:bg-slate-50 transition-all">
                          <div className="text-slate-800 font-semibold text-[13px] group-hover/link:text-primary transition-colors tracking-tight">{item.title}</div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Column 2: Infrastructure & Migration */}
                <div className="space-y-12">
                  <div>
                    <h3 className="text-[9px] font-bold uppercase tracking-[0.25em] text-slate-400 mb-6">{t.megaMenu.categories[1].title}</h3>
                    <div className="space-y-1">
                      {t.megaMenu.categories[1].items.map((item, idx) => (
                        <Link key={idx} href={item.href} onClick={() => setIsMenuOpen(false)} className="block group/link -mx-3 px-3 py-2 rounded-lg hover:bg-slate-50 transition-all">
                          <div className="text-slate-800 font-semibold text-[13px] group-hover/link:text-primary transition-colors tracking-tight">{item.title}</div>
                        </Link>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-[9px] font-bold uppercase tracking-[0.25em] text-slate-400 mb-6">{t.megaMenu.categories[2].title}</h3>
                    <div className="space-y-1">
                      {t.megaMenu.categories[2].items.map((item, idx) => (
                        <Link key={idx} href={item.href} onClick={() => setIsMenuOpen(false)} className="block group/link -mx-3 px-3 py-2 rounded-lg hover:bg-slate-50 transition-all">
                          <div className="text-slate-800 font-semibold text-[13px] group-hover/link:text-primary transition-colors tracking-tight">{item.title}</div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Column 3: Entry & CTA */}
                <div className="space-y-12">
                  <div>
                    <h3 className="text-[9px] font-bold uppercase tracking-[0.25em] text-slate-400 mb-6">{t.megaMenu.categories[3].title}</h3>
                    <div className="space-y-1">
                      {t.megaMenu.categories[3].items.map((item, idx) => (
                        <Link key={idx} href={item.href} onClick={() => setIsMenuOpen(false)} className="block group/link -mx-3 px-3 py-2 rounded-lg hover:bg-slate-50 transition-all">
                          <div className="text-slate-800 font-semibold text-[13px] group-hover/link:text-primary transition-colors tracking-tight">{item.title}</div>
                        </Link>
                      ))}
                    </div>
                  </div>

                  <div className="pt-8 border-t border-slate-100/60">
                    <Link 
                      href="/#contact" 
                      onClick={() => setIsMenuOpen(false)} 
                      className="group/cta flex items-center justify-between p-4 rounded-xl bg-slate-50 border border-slate-100 hover:bg-primary/[0.02] hover:border-primary/10 transition-all"
                    >
                      <div className="text-[9px] font-bold uppercase tracking-widest text-slate-600 group-hover/cta:text-primary transition-colors">{t.megaMenu.core.pricing}</div>
                      <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover/cta:text-primary group-hover/cta:translate-x-1 transition-all" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <Link href="/case-studies" className="hover:text-primary transition-colors py-4">{t.nav.caseStudies}</Link>
            <Link href="/blog" className="hover:text-primary transition-colors py-4">Blog</Link>
            <a 
              href="https://marketplace.ecksolution-it.de/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-primary transition-colors py-4"
            >
              {t.nav.customerPortal}
            </a>
            <Link href="/kontakt" className="hover:text-primary transition-colors py-4">{t.nav.contact}</Link>
          </div>
        </div>

        {/* Right Area: CTA & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <Link href="/#contact" className="hidden md:inline-flex items-center justify-center px-5 py-2.5 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-all shadow-sm font-bold text-[11px] uppercase tracking-[0.15em] active:scale-[0.98]">
            {t.nav.getAudit}
          </Link>

          {/* Mobile Nav Toggle */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Menu"
              className="p-2 text-slate-700 hover:bg-slate-50 rounded-lg transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 p-8 space-y-8 animate-in slide-in-from-top-4 duration-300 overflow-y-auto max-h-[calc(100vh-64px)] shadow-2xl">
          <div className="space-y-6">
            <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">{t.nav.solutions}</div>
            <div className="pl-4 space-y-6 border-l border-slate-100">
              {t.megaMenu.core.items.map((item, idx) => (
                <Link key={idx} href={item.href} onClick={() => setIsMobileMenuOpen(false)} className="block text-slate-700 font-bold tracking-tight">{item.title}</Link>
              ))}
              {t.megaMenu.categories.map((category, idx) => (
                <div key={idx} className="space-y-4">
                  <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">{category.title}</div>
                  {category.items.map((item, itemIdx) => (
                    <Link key={itemIdx} href={item.href} onClick={() => setIsMobileMenuOpen(false)} className="block text-slate-600 text-sm font-medium">{item.title}</Link>
                  ))}
                </div>
              ))}
            </div>
          </div>
          <Link href="/blog" onClick={() => setIsMobileMenuOpen(false)} className="block text-xl font-bold text-slate-900 tracking-tight">Blog</Link>
          <Link href="/case-studies" onClick={() => setIsMobileMenuOpen(false)} className="block text-xl font-bold text-slate-900 tracking-tight">{t.nav.caseStudies}</Link>
          <a 
            href="https://marketplace.ecksolution-it.de/" 
            onClick={() => setIsMobileMenuOpen(false)} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="block text-xl font-bold text-slate-900 tracking-tight"
          >
            {t.nav.customerPortal}
          </a>
          <Link href="/kontakt" onClick={() => setIsMobileMenuOpen(false)} className="block text-xl font-bold text-slate-900 tracking-tight">{t.nav.contact}</Link>
          <Link href="/#contact" onClick={() => setIsMobileMenuOpen(false)} className="block w-full py-5 bg-primary text-white text-center rounded-2xl font-bold active:scale-[0.98] shadow-2xl shadow-primary/30">
            {t.nav.getAudit}
          </Link>
        </div>
      )}
    </nav>
  );
}
