'use client';

import { motion } from "motion/react";
import { CheckCircle2, ArrowRight, ShieldCheck, Clock, Activity, Zap, Lock, Users, TrendingUp } from "lucide-react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SystemDiagram } from "@/components/SystemDiagram";

const RETAINER_BENEFITS = [
  {
    title: "Garantierte Verfügbarkeit",
    description: "Sichern Sie sich feste Experten-Kontingente pro Monat. Keine Wartezeiten, wenn es brennt.",
    icon: Clock
  },
  {
    title: "Proaktives Monitoring",
    description: "Wir warten nicht auf Fehler. Wir optimieren Ihre Systeme kontinuierlich im Hintergrund.",
    icon: Activity
  },
  {
    title: "Fixe Kostenstruktur",
    description: "Volle Budgetkontrolle durch monatliche Pauschalen. Keine Überraschungen bei der Abrechnung.",
    icon: TrendingUp
  },
  {
    title: "Strategische Begleitung",
    description: "Wir sind Ihr externer CTO und begleiten Ihre IT-Roadmap langfristig und strukturiert.",
    icon: ShieldCheck
  }
];

export default function RetainerPage() {
  return (
    <div className="min-h-screen bg-white text-black font-poppins selection:bg-primary/30">
      <Header />

      <main className="pt-48 pb-32 px-6">
        <div className="max-w-[1200px] mx-auto">
          {/* Hero */}
          <div className="grid lg:grid-cols-2 gap-24 items-center mb-32">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="text-primary font-bold text-xs uppercase tracking-widest mb-4">Exklusive Partnerschaft</div>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.05]">
                Ihr IT-Architekt auf <span className="text-primary">Abruf.</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-12 opacity-90">
                Sichern Sie sich kontinuierliche Expertise und proaktive Stabilität. Mit unserem Retainer-Modell erhalten Sie priorisierten Zugriff auf Architektur-Know-how und operative Unterstützung.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/kontakt"
                  className="px-8 py-4 bg-primary hover:bg-primary/90 text-white rounded-xl font-bold transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2"
                >
                  Verfügbarkeit anfragen <ArrowRight className="w-5 h-5" />
                </Link>
                <Link 
                  href="#details"
                  className="px-8 py-4 bg-gray-50 hover:bg-gray-100 text-gray-700 rounded-xl font-bold transition-all flex items-center justify-center gap-2"
                >
                  Details ansehen
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <SystemDiagram />
            </motion.div>
          </div>

          {/* Benefits Grid */}
          <section id="details" className="py-32 border-t border-gray-100">
            <div className="text-center max-w-2xl mx-auto mb-20">
              <h2 className="text-4xl font-bold mb-6">Warum ein Retainer die bessere Wahl ist.</h2>
              <p className="text-gray-600 text-lg">
                Einmalige Projekte lösen Symptome. Ein Retainer sichert die langfristige Gesundheit Ihrer IT-Infrastruktur.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {RETAINER_BENEFITS.map((benefit, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-10 rounded-3xl bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-xl transition-all duration-500"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-8">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm opacity-90">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Comparison */}
          <section className="py-32 bg-black text-white rounded-[4rem] px-12 md:px-24 overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
              <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/40 rounded-full blur-[120px]" />
            </div>
            <div className="relative z-10 grid lg:grid-cols-2 gap-24 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-8">Projekt vs. Retainer</h2>
                <p className="text-white/60 text-lg mb-12 leading-relaxed">
                  Während Projektarbeit oft reaktiv erfolgt, wenn Probleme bereits bestehen, zielt der Retainer auf kontinuierliche Exzellenz ab.
                </p>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                    <div>
                      <div className="font-bold mb-1">Kontinuierliche Optimierung</div>
                      <div className="text-sm text-white/50">Wir finden Schwachstellen, bevor sie zum Problem werden.</div>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                    <div>
                      <div className="font-bold mb-1">Wissenstransfer</div>
                      <div className="text-sm text-white/50">Wir schulen Ihr Team und dokumentieren jeden Schritt.</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white/5 rounded-3xl p-10 border border-white/10">
                <div className="text-2xl font-bold mb-8">Häufige Anwendungsfälle:</div>
                <ul className="space-y-6">
                  <li className="flex justify-between items-center border-b border-white/5 pb-4">
                    <span className="text-white/70">Cloud-Architektur Review</span>
                    <span className="text-xs font-bold uppercase tracking-widest text-primary">Monatlich</span>
                  </li>
                  <li className="flex justify-between items-center border-b border-white/5 pb-4">
                    <span className="text-white/70">Security Audits & Updates</span>
                    <span className="text-xs font-bold uppercase tracking-widest text-primary">Wöchentlich</span>
                  </li>
                  <li className="flex justify-between items-center border-b border-white/5 pb-4">
                    <span className="text-white/70">Backup & Disaster Recovery Tests</span>
                    <span className="text-xs font-bold uppercase tracking-widest text-primary">Quartalsweise</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="text-white/70">Strategische CTO-Beratung</span>
                    <span className="text-xs font-bold uppercase tracking-widest text-primary">On-Demand</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <div className="mt-32 text-center">
            <h2 className="text-3xl font-bold mb-8">Bereit für echte Stabilität?</h2>
            <Link 
              href="/kontakt"
              className="inline-flex items-center gap-3 px-10 py-5 bg-primary hover:bg-primary/90 text-white rounded-2xl font-bold text-lg transition-all shadow-xl shadow-primary/20 active:scale-[0.98]"
            >
              Jetzt Erstgespräch vereinbaren <ArrowRight className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
