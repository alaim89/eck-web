'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import {
  ArrowRight,
  SearchCheck,
  TriangleAlert,
  ClipboardList,
  Wrench,
  Shield,
  TrendingUp,
  Cloud,
  UserCheck,
  Workflow,
  ChevronRight,
} from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const symptoms = [
  'Leads gehen im CRM verloren',
  'Microsoft 365 / Azure ist unübersichtlich gewachsen',
  'IT-Projekte dauern zu lange',
  'Sicherheits- und Backup-Fragen sind ungeklärt',
  'Vertrieb, IT und Geschäftsführung arbeiten nicht auf derselben Datenbasis',
];

const outcomes = [
  {
    title: 'Systemanalyse',
    text: 'Infrastruktur, Microsoft 365, CRM, Sicherheit, Backup, Prozesse',
    icon: SearchCheck,
  },
  {
    title: 'Risiko- und Engpassbewertung',
    text: 'Was gefährdet Betrieb, Vertrieb oder Wachstum?',
    icon: TriangleAlert,
  },
  {
    title: 'Priorisierter Maßnahmenplan',
    text: 'Was zuerst tun? Was später? Was vermeiden?',
    icon: ClipboardList,
  },
  {
    title: 'Umsetzungsoptionen',
    text: 'Projekt, Managed Service oder externe IT-Verantwortung',
    icon: Wrench,
  },
];

const paths = [
  {
    title: 'Pfad 1: IT stabilisieren',
    text: 'Managed IT-Service, Backup, Security',
    icon: Shield,
  },
  {
    title: 'Pfad 2: Vertrieb & CRM verbessern',
    text: 'CRM-Prozesse, Automatisierung, Datenqualität',
    icon: TrendingUp,
  },
  {
    title: 'Pfad 3: Microsoft 365 / Azure ordnen',
    text: 'Governance, Migration, Cloud-Struktur',
    icon: Cloud,
  },
  {
    title: 'Pfad 4: Verantwortung klären',
    text: 'Externer IT-Verantwortlicher, strategische IT-Betreuung',
    icon: UserCheck,
  },
];

const processSteps = [
  {
    title: '1. Anfrage',
    text: 'Sie schildern Problem, Ziel und aktuelle Situation.',
  },
  {
    title: '2. Analyse',
    text: 'Wir prüfen Systeme, Prozesse, Risiken und Engpässe.',
  },
  {
    title: '3. Maßnahmenplan',
    text: 'Sie erhalten klare Prioritäten statt Technik-Chaos.',
  },
  {
    title: '4. Umsetzung',
    text: 'Wir setzen um oder begleiten Ihr internes Team.',
  },
  {
    title: '5. Betrieb',
    text: 'Auf Wunsch übernehmen wir laufende Betreuung, Monitoring und Optimierung.',
  },
];

export default function LandingPageContent() {
  return (
    <div className="min-h-screen bg-white text-black font-poppins selection:bg-primary/30">
      <Header />

      <main className="pt-32 pb-24">
        <section className="px-6 mb-20" aria-labelledby="hero-heading">
          <div className="max-w-[1200px] mx-auto">
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-50 text-gray-700 text-xs font-semibold uppercase tracking-wider mb-6 border border-gray-100">
                <Workflow className="w-4 h-4 text-primary" />
                Hauptangebot: IT-Check
              </div>
              <h1 id="hero-heading" className="text-5xl md:text-6xl font-bold tracking-tighter mb-6">
                Ihre IT bremst Vertrieb, Projekte und Wachstum?
              </h1>
              <p className="text-lg text-gray-600 max-w-3xl leading-relaxed mb-8">
                Mit dem IT-Check analysieren wir Systeme, Prozesse, Risiken und Verantwortlichkeiten und zeigen Ihnen
                konkret, welche Maßnahmen zuerst Wirkung bringen.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  href="/kontakt"
                  className="px-8 py-4 bg-primary hover:bg-primary/90 text-white rounded-xl font-medium inline-flex items-center justify-center gap-2 transition-all shadow-lg shadow-primary/20 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                >
                  IT-Check anfragen <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/case-studies"
                  className="px-8 py-4 rounded-xl text-sm font-medium text-gray-700 bg-gray-50 hover:bg-gray-100 transition-colors border border-gray-100 inline-flex items-center justify-center gap-2 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                >
                  Beispiele ansehen
                </Link>
              </div>

              <p className="text-sm font-medium text-gray-600 border-t border-gray-100 pt-6">
                Für Mittelstand, Geschäftsführung, Vertrieb und IT-Verantwortliche.
              </p>
            </motion.div>
          </div>
        </section>

        <div className="max-w-[1200px] mx-auto px-6 space-y-24">
          <section aria-labelledby="symptome-heading" className="scroll-mt-32">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center">
                <TriangleAlert className="w-5 h-5 text-primary" />
              </div>
              <h2 id="symptome-heading" className="text-2xl font-bold tracking-tight">
                Problem sichtbar machen
              </h2>
            </div>
            <div className="p-8 rounded-3xl bg-gray-50 border border-gray-100">
              <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">Typische Symptome</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                {symptoms.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </section>

          <section aria-labelledby="produkt-heading" className="scroll-mt-32">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center">
                <SearchCheck className="w-5 h-5 text-primary" />
              </div>
              <h2 id="produkt-heading" className="text-2xl font-bold tracking-tight">
                Der IT-Check als Produkt: Was Sie bekommen
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {outcomes.map((item) => (
                <article key={item.title} className="p-8 rounded-3xl bg-gray-50 border border-gray-100">
                  <div className="flex items-center gap-3 mb-3">
                    <item.icon className="w-5 h-5 text-primary" />
                    <h3 className="text-lg font-bold tracking-tight text-gray-900">{item.title}</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{item.text}</p>
                </article>
              ))}
            </div>
          </section>

          <section aria-labelledby="pfade-heading" className="scroll-mt-32">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center">
                <ChevronRight className="w-5 h-5 text-primary" />
              </div>
              <h2 id="pfade-heading" className="text-2xl font-bold tracking-tight">
                Nach dem IT-Check wird klar, welcher Pfad passt
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8 mb-6">
              {paths.map((item) => (
                <article key={item.title} className="p-8 rounded-3xl bg-gray-50 border border-gray-100">
                  <div className="flex items-center gap-3 mb-3">
                    <item.icon className="w-5 h-5 text-primary" />
                    <h3 className="text-lg font-bold tracking-tight text-gray-900">{item.title}</h3>
                  </div>
                  <p className="text-gray-600">→ {item.text}</p>
                </article>
              ))}
            </div>
            <Link
              href="/solutions"
              className="text-sm font-semibold text-primary inline-flex items-center gap-2 hover:gap-3 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded"
            >
              Passende Solutions ansehen <ArrowRight className="w-4 h-4" />
            </Link>
          </section>

          <section aria-labelledby="prozess-heading" className="scroll-mt-32">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center">
                <Workflow className="w-5 h-5 text-primary" />
              </div>
              <h2 id="prozess-heading" className="text-2xl font-bold tracking-tight">
                CRM-/Lead-System sichtbar machen
              </h2>
            </div>

            <div className="p-8 rounded-3xl bg-gray-50 border border-gray-100 mb-8">
              <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">Prozessgrafik</p>
              <p className="text-gray-700 font-medium">
                Anfrage → Analyse → Maßnahmenplan → Umsetzung → Betrieb
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {processSteps.map((step) => (
                <article key={step.title} className="p-8 rounded-3xl bg-gray-50 border border-gray-100">
                  <h3 className="text-lg font-bold tracking-tight text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.text}</p>
                </article>
              ))}
            </div>
          </section>

          <section aria-labelledby="angebot-heading" className="scroll-mt-32">
            <div className="p-8 md:p-10 rounded-3xl bg-primary text-white">
              <h2 id="angebot-heading" className="text-2xl md:text-3xl font-bold tracking-tight text-white mb-4">
                IT-Check für den Mittelstand
              </h2>
              <p className="text-white/90 mb-6">Ideal, wenn:</p>
              <ul className="list-disc pl-6 space-y-2 text-white/95 mb-8">
                <li>Ihre IT gewachsen, aber nicht sauber geführt ist</li>
                <li>Vertrieb oder Projekte durch Systeme gebremst werden</li>
                <li>Verantwortlichkeiten unklar sind</li>
                <li>Sie vor einer Microsoft-365-, Azure- oder CRM-Entscheidung stehen</li>
                <li>Sie wissen wollen, was wirklich zuerst getan werden muss</li>
              </ul>
              <Link
                href="/kontakt"
                className="px-8 py-4 bg-white text-primary rounded-xl font-semibold inline-flex items-center gap-2 hover:bg-gray-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
              >
                IT-Check anfragen <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </section>

          <section aria-labelledby="positionierung-heading" className="scroll-mt-32">
            <div className="p-8 rounded-3xl bg-gray-50 border border-gray-100">
              <h2 id="positionierung-heading" className="text-2xl font-bold tracking-tight mb-4">
                Kurzfassung als Positionierung
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Ecksolution-IT stabilisiert und ordnet IT-Systeme für mittelständische Unternehmen, vom ersten
                IT-Check bis zur Umsetzung und laufenden Betreuung.
              </p>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
