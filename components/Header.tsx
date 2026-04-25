import { LogoIcon } from "@/components/Logo";
import Link from "next/link";
import { translations } from "@/lib/translations";
import { HeaderClient } from "./HeaderClient";

export function Header() {
  const t = translations.de;

  return (
    <nav aria-label="Hauptnavigation" className="fixed top-0 w-full bg-white z-50 border-b border-slate-100/80 font-poppins">
      <div className="page-container h-20 flex items-center justify-between">
        {/* Brand Area */}
        <div className="flex items-center gap-10">
          <Link href="/" className="flex items-center gap-2.5 hover:opacity-80 transition-opacity shrink-0 group">
            <div className="w-9 h-9 rounded-lg bg-primary/[0.05] flex items-center justify-center group-hover:scale-105 transition-transform shadow-inner">
              <LogoIcon className="w-5 h-5 text-primary shrink-0" />
            </div>
            <span className="font-bold tracking-tighter text-xl text-slate-900">Ecksolution<span className="text-primary">-IT</span></span>
          </Link>

          <HeaderClient t={t} />
        </div>
      </div>
    </nav>
  );
}
