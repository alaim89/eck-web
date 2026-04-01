'use client';

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { solutionsData } from "@/lib/solutions-data";
import { ArrowRight, ChevronRight, ShieldCheck, Zap, Activity, Lock, Cpu, Server, Database, Cloud, Settings, Headset } from "lucide-react";
import Link from "next/link";
import { motion } from "motion/react";
import { useLanguage } from "@/context/LanguageContext";

const iconMap: Record<string, any> = {
  "managed-it-operations": Activity,
  "co-managed-it": Headset,
  "cybersecurity-protection": Lock,
  "managed-backup": Database,
  "network-management": Activity,
  "hardware-lifecycle": Settings,
  "microsoft-365-migration": Zap,
  "azure-migration": Cloud,
  "it-risk-audit": ShieldCheck,
  "strategic-it-roadmap": Cpu,
  "it-support-for-businesses": Activity,
  "managed-it-services": Server,
  "microsoft-365-services": Zap,
  "azure-hybrid-infrastructure": Cloud,
  "backup-and-security": Lock
};

export default function SolutionsIndexPage() {
  const { t } = useLanguage();
  const slugs = Object.keys(solutionsData);

  return (
    <div className="min-h-screen bg-white font-sans text-black selection:bg-primary/20">
      <Header />
      
      <main className="pt-24 md:pt-32">
        {/* Hero Section */}
        <section className="py-20 md:py-32 px-6 bg-gray-50 border-b border-gray-100">
          <div className="max-w-[1000px] mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-8">
              <span className="w-2 h-2 rounded-full bg-primary"></span>
              {t.nav.solutions}
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-8 leading-[1.1]">
              Maßgeschneiderte IT-Lösungen für Ihren Erfolg
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-10 max-w-3xl mx-auto leading-relaxed">
              Wir bieten ein breites Spektrum an IT-Services, die darauf ausgelegt sind, Ihre Infrastruktur zu stabilisieren, Ihre Sicherheit zu erhöhen und Ihr Wachstum zu fördern.
            </p>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="py-24 px-6">
          <div className="max-w-[1200px] mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {slugs.map((slug, i) => {
                const solution = solutionsData[slug as keyof typeof solutionsData];
                const Icon = iconMap[slug] || Activity;
                
                return (
                  <motion.div
                    key={slug}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link 
                      href={`/solutions/${slug}`}
                      className="group block h-full p-8 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500"
                    >
                      <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">{solution.title}</h3>
                      <p className="text-gray-600 mb-8 line-clamp-3 leading-relaxed">
                        {solution.description}
                      </p>
                      <div className="mt-auto flex items-center gap-2 text-primary font-bold text-sm">
                        Details ansehen <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-32 px-6 bg-primary text-white text-center">
          <div className="max-w-[800px] mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Nicht sicher, was Sie brauchen?</h2>
            <p className="text-xl text-white/90 mb-10">Lassen Sie uns gemeinsam Ihre IT-Infrastruktur analysieren und die beste Strategie für Ihr Unternehmen entwickeln.</p>
            <Link href="/kontakt" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary rounded-lg hover:bg-gray-50 transition-all font-bold text-lg shadow-xl hover:-translate-y-0.5">
              Kostenlose Erstberatung <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
