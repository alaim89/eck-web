import { LogoIcon } from "@/components/Logo";
import { ChevronDown, ArrowRight } from "lucide-react";
import Link from "next/link";

export function Header() {
  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-[1200px] mx-auto px-6 h-20 md:h-24 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 md:gap-3 hover:opacity-80 transition-opacity shrink-0">
          <LogoIcon className="w-7 h-7 md:w-8 md:h-8 text-primary shrink-0" />
          <span className="font-bold tracking-tight text-xl md:text-2xl text-black">Ecksolution<span className="text-primary">-IT</span></span>
        </Link>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center h-full gap-8 lg:gap-10 text-sm font-medium text-gray-700">
          <Link href="/#problem" className="hover:text-black transition-colors">The Risk</Link>
          
          {/* Mega Menu */}
          <div className="relative group h-full flex items-center">
            <button className="flex items-center gap-1 hover:text-black transition-colors h-full">
              Solutions <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform" />
            </button>
            
            {/* Dropdown Panel */}
            <div className="absolute top-[calc(100%-1px)] left-1/2 -translate-x-1/2 w-[850px] bg-white border border-gray-100 shadow-[0_20px_40px_rgb(0,0,0,0.08)] rounded-2xl p-8 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 grid grid-cols-12 gap-10">
              
              {/* Primary Focus: Managed Services */}
              <div className="col-span-5 bg-gray-50 rounded-xl p-6 border border-gray-100/50 flex flex-col justify-between">
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-primary mb-6 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    Core Offering
                  </h3>
                  <div className="space-y-6">
                    <Link href="/solutions/managed-it-operations" className="block group/item">
                      <div className="text-black font-semibold mb-1 text-base group-hover/item:text-primary transition-colors">Managed IT Operations</div>
                      <div className="text-gray-700 text-sm leading-relaxed">We operate your IT reliably so your business runs without interruption.</div>
                    </Link>
                    <Link href="/solutions/co-managed-it" className="block group/item">
                      <div className="text-black font-semibold mb-1 text-base group-hover/item:text-primary transition-colors">Co-Managed IT</div>
                      <div className="text-gray-700 text-sm leading-relaxed">Empower your internal team with expert support and enterprise tools.</div>
                    </Link>
                  </div>
                </div>
                <div className="pt-6 mt-6 border-t border-gray-200/60">
                  <Link href="/#pricing" className="text-sm font-semibold text-black hover:text-primary flex items-center gap-1 transition-colors">
                    View predictable pricing <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Other Categories */}
              <div className="col-span-7 grid grid-cols-2 gap-x-8 gap-y-10 py-2">
                {/* Security & Backup */}
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-gray-700 mb-5">Security & Backup</h3>
                  <div className="space-y-5">
                    <Link href="/solutions/cybersecurity-protection" className="block group/link">
                      <div className="text-black font-medium text-sm mb-1 group-hover/link:text-primary transition-colors">Cybersecurity Protection</div>
                      <div className="text-gray-700 text-xs leading-relaxed">Protect your business from threats before they cause damage.</div>
                    </Link>
                    <Link href="/solutions/managed-backup" className="block group/link">
                      <div className="text-black font-medium text-sm mb-1 group-hover/link:text-primary transition-colors">Managed Backup</div>
                      <div className="text-gray-700 text-xs leading-relaxed">Automatic backups that ensure no data is ever lost.</div>
                    </Link>
                  </div>
                </div>

                {/* Infrastructure */}
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-gray-700 mb-5">Infrastructure</h3>
                  <div className="space-y-5">
                    <Link href="/solutions/network-management" className="block group/link">
                      <div className="text-black font-medium text-sm mb-1 group-hover/link:text-primary transition-colors">Network Management</div>
                      <div className="text-gray-700 text-xs leading-relaxed">Ensure fast, reliable internet so your team never stops working.</div>
                    </Link>
                    <Link href="/solutions/hardware-lifecycle" className="block group/link">
                      <div className="text-black font-medium text-sm mb-1 group-hover/link:text-primary transition-colors">Hardware Lifecycle</div>
                      <div className="text-gray-700 text-xs leading-relaxed">Keep your team productive with up-to-date, reliable equipment.</div>
                    </Link>
                  </div>
                </div>

                {/* Migration & Projects */}
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-gray-700 mb-5">Migration & Projects</h3>
                  <div className="space-y-5">
                    <Link href="/solutions/microsoft-365-migration" className="block group/link">
                      <div className="text-black font-medium text-sm mb-1 group-hover/link:text-primary transition-colors">Microsoft 365 Migration</div>
                      <div className="text-gray-700 text-xs leading-relaxed">Move to Microsoft 365 without downtime or data loss.</div>
                    </Link>
                    <Link href="/solutions/azure-migration" className="block group/link">
                      <div className="text-black font-medium text-sm mb-1 group-hover/link:text-primary transition-colors">Azure Migration</div>
                      <div className="text-gray-700 text-xs leading-relaxed">Securely move your infrastructure to Azure with full control.</div>
                    </Link>
                  </div>
                </div>

                {/* Entry Points */}
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-gray-700 mb-5">Entry Points</h3>
                  <div className="space-y-5">
                    <Link href="/solutions/it-risk-audit" className="block group/link">
                      <div className="text-black font-medium text-sm mb-1 group-hover/link:text-primary transition-colors">IT Risk Audit</div>
                      <div className="text-gray-700 text-xs leading-relaxed">Identify and fix hidden vulnerabilities before they become costly.</div>
                    </Link>
                    <Link href="/solutions/strategic-it-roadmap" className="block group/link">
                      <div className="text-black font-medium text-sm mb-1 group-hover/link:text-primary transition-colors">Strategic IT Roadmap</div>
                      <div className="text-gray-700 text-xs leading-relaxed">Align your technology investments with your business growth goals.</div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Link href="/case-studies" className="hover:text-black transition-colors">Case Studies</Link>
          <Link href="/#pricing" className="hover:text-black transition-colors">Pricing</Link>
          <Link href="/#contact" className="px-5 py-2.5 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors shadow-sm font-semibold">
            Get an Audit
          </Link>
        </div>

        {/* Mobile CTA */}
        <div className="md:hidden flex items-center">
          <Link href="/#contact" className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors shadow-sm text-sm font-semibold">
            Get an Audit
          </Link>
        </div>
      </div>
    </nav>
  );
}
