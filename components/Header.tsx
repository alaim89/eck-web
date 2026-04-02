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
          <div className="relative h-full flex items-center" ref={menuRef}>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              onMouseEnter={() => setIsMenuOpen(true)}
              aria-expanded={isMenuOpen}
              aria-haspopup="true"
              aria-controls="mega-menu"
              className="flex items-center gap-1 hover:text-black transition-colors h-full"
            >
              {t.nav.solutions} <ChevronDown className={`w-4 h-4 transition-transform ${isMenuOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {/* Dropdown Panel */}
            <div 
              id="mega-menu"
              onMouseLeave={() => setIsMenuOpen(false)}
              className={`absolute top-[calc(100%-1px)] left-1/2 -translate-x-1/2 w-[850px] bg-white border border-gray-100 shadow-[0_20px_40px_rgb(0,0,0,0.08)] rounded-2xl p-8 transition-all duration-200 grid grid-cols-12 gap-10 ${isMenuOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}
            >
              
              {/* Primary Focus: Kernleistungen */}
              <div className="col-span-5 bg-gray-50 rounded-xl p-6 border border-gray-100/50 flex flex-col justify-between">
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-primary mb-6 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    {t.megaMenu.core.badge}
                  </h3>
                  <div className="space-y-6">
                    {t.megaMenu.core.items.map((item, idx) => (
                      <Link key={idx} href={item.href} onClick={() => setIsMenuOpen(false)} className="block group/item">
                        <div className="text-black font-semibold mb-1 text-base group-hover/item:text-primary transition-colors">{item.title}</div>
                        <div className="text-gray-700 text-sm leading-relaxed">{item.desc}</div>
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="pt-6 mt-6 border-t border-gray-200/60">
                  <Link href="/#contact" onClick={() => setIsMenuOpen(false)} className="text-sm font-semibold text-black hover:text-primary flex items-center gap-1 transition-colors">
                    {t.megaMenu.core.pricing} <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Other Categories */}
              <div className="col-span-7 grid grid-cols-2 gap-x-8 gap-y-10 py-2">
                {t.megaMenu.categories.map((category, idx) => (
                  <div key={idx}>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-gray-700 mb-5">{category.title}</h3>
                    <div className="space-y-5">
                      {category.items.map((item, itemIdx) => (
                        <Link key={itemIdx} href={item.href} onClick={() => setIsMenuOpen(false)} className="block group/link">
                          <div className="text-black font-medium text-sm mb-1 group-hover/link:text-primary transition-colors">{item.title}</div>
                          <div className="text-gray-700 text-xs leading-relaxed">{item.desc}</div>
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <Link href="/case-studies" className="hover:text-black transition-colors">{t.nav.caseStudies}</Link>
          <Link href="/blog" className="hover:text-black transition-colors">Blog</Link>
          <a 
            href="https://marketplace.ecksolution-it.de/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-black transition-colors"
          >
            {t.nav.customerPortal}
          </a>
          <Link href="/kontakt" className="hover:text-black transition-colors">{t.nav.contact}</Link>
          
          <Link href="/#contact" className="px-5 py-2.5 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors shadow-sm font-semibold">
            {t.nav.getAudit}
          </Link>
        </div>

        {/* Mobile Nav Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
            className="p-2 text-gray-700"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 p-6 space-y-6 animate-in slide-in-from-top-2 duration-200 overflow-y-auto max-h-[calc(100vh-80px)]">
          <Link href="/#problem" onClick={() => setIsMobileMenuOpen(false)} className="block text-lg font-semibold text-gray-900">{t.nav.risk}</Link>
          <div className="space-y-4">
            <div className="text-xs font-bold uppercase tracking-wider text-primary">{t.nav.solutions}</div>
            <div className="pl-4 space-y-4">
              {t.megaMenu.core.items.map((item, idx) => (
                <Link key={idx} href={item.href} onClick={() => setIsMobileMenuOpen(false)} className="block text-gray-700 font-medium">{item.title}</Link>
              ))}
              {t.megaMenu.categories.map((category, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="text-[10px] font-bold uppercase tracking-widest text-gray-400">{category.title}</div>
                  {category.items.map((item, itemIdx) => (
                    <Link key={itemIdx} href={item.href} onClick={() => setIsMobileMenuOpen(false)} className="block text-gray-600 text-sm">{item.title}</Link>
                  ))}
                </div>
              ))}
            </div>
          </div>
          <Link href="/blog" onClick={() => setIsMobileMenuOpen(false)} className="block text-lg font-semibold text-gray-900">Blog</Link>
          <Link href="/case-studies" onClick={() => setIsMobileMenuOpen(false)} className="block text-lg font-semibold text-gray-900">{t.nav.caseStudies}</Link>
          <a 
            href="https://marketplace.ecksolution-it.de/" 
            onClick={() => setIsMobileMenuOpen(false)} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="block text-lg font-semibold text-gray-900"
          >
            {t.nav.customerPortal}
          </a>
          <Link href="/kontakt" onClick={() => setIsMobileMenuOpen(false)} className="block text-lg font-semibold text-gray-900">{t.nav.contact}</Link>
          <Link href="/#contact" onClick={() => setIsMobileMenuOpen(false)} className="block w-full py-4 bg-black text-white text-center rounded-xl font-bold">
            {t.nav.getAudit}
          </Link>
        </div>
      )}
    </nav>
  );
}
