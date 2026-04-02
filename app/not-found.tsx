import { getMetadata } from "@/lib/seo";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArrowRight, Home, Terminal, Search, ShieldCheck } from "lucide-react";

export const metadata = getMetadata({
  title: "404 – Seite nicht gefunden",
  description: "Die angeforderte Seite konnte nicht gefunden werden. Wir bringen Sie zurück auf den richtigen Pfad.",
  robots: { index: false },
});

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white font-poppins text-black selection:bg-primary/20">
      <Header />
      
      <main className="flex flex-col items-center justify-center pt-40 pb-24 px-6 text-center">
        <div className="max-w-[800px] mx-auto w-full">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-50 border border-gray-100 text-gray-500 text-xs font-bold uppercase tracking-widest mb-8">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
            HTTP Status: 404
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6 leading-[1.1] text-black">
            404 – Diese Route existiert nicht
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 mb-12 leading-relaxed max-w-2xl mx-auto">
            Der Request war valide. Das Ziel leider nicht.<br className="hidden md:block" />
            Wir bringen Sie zurück auf einen funktionierenden Pfad.
          </p>

          {/* Terminal Box */}
          <div className="mb-16 max-w-md mx-auto text-left">
            <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-2xl border border-gray-800 font-mono text-sm">
              <div className="bg-gray-800/50 px-4 py-2 flex items-center gap-2 border-b border-gray-800">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/40" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/40" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/40" />
                </div>
                <span className="text-gray-500 text-[10px] uppercase tracking-widest font-bold ml-2">System Console</span>
              </div>
              <div className="p-6 space-y-3">
                <div className="flex gap-3">
                  <span className="text-primary font-bold">{">"}</span>
                  <span className="text-gray-300">resolve /requested-page</span>
                </div>
                <div className="flex gap-3">
                  <span className="text-red-500 font-bold">✗</span>
                  <span className="text-gray-500 italic">no matching route found</span>
                </div>
                <div className="flex gap-3 pt-2">
                  <span className="text-primary font-bold">{">"}</span>
                  <span className="text-gray-300">suggest --fallback</span>
                </div>
                <div className="space-y-1.5 pl-7">
                  <div className="flex items-center gap-3 text-gray-400">
                    <span className="text-green-500">✓</span>
                    <Link href="/solutions" className="hover:text-primary transition-colors">/solutions</Link>
                  </div>
                  <div className="flex items-center gap-3 text-gray-400">
                    <span className="text-green-500">✓</span>
                    <Link href="/kontakt" className="hover:text-primary transition-colors">/kontakt</Link>
                  </div>
                  <div className="flex items-center gap-3 text-gray-400">
                    <span className="text-green-500">✓</span>
                    <Link href="/" className="hover:text-primary transition-colors">/</Link>
                  </div>
                </div>
                <div className="pt-4 flex items-center gap-2 text-primary/50 animate-pulse">
                  <span className="w-2 h-4 bg-primary/50" />
                  <span className="text-[10px] uppercase tracking-widest font-bold">Waiting for input...</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-xl hover:bg-primary/90 transition-all font-semibold text-base shadow-lg shadow-primary/20 active:scale-[0.98] w-full sm:w-auto"
            >
              <Home className="w-5 h-5" /> Zur Startseite
            </Link>
            
            <Link 
              href="/solutions" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-gray-50 border border-gray-100 text-gray-900 rounded-xl hover:bg-gray-100 transition-all font-semibold text-base active:scale-[0.98] w-full sm:w-auto"
            >
              <Search className="w-5 h-5" /> Zu den Lösungen
            </Link>

            <Link 
              href="/kontakt" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-white border border-gray-200 text-primary rounded-xl hover:border-primary/30 hover:bg-primary/5 transition-all font-semibold text-base active:scale-[0.98] w-full sm:w-auto"
            >
              <ShieldCheck className="w-5 h-5" /> IT-Check anfordern
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
