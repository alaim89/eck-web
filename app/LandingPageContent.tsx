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
import { ITCheckWorkflowVisual } from '@/components/ITCheckWorkflowVisual';

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
];

const workflowSteps = [
  {
    title: 'Trigger',
    text: 'Ihre IT bremst Vertrieb, Projekte oder Betrieb.',
  },
  {
    title: 'Analyse',
    text: 'Wir prüfen Systeme, Prozesse, Risiken und Verantwortlichkeiten.',
  },
  {
    title: 'Routing',
    text: 'Wir ordnen das Problem dem passenden Solution-Pfad zu.',
  },
  {
    title: 'Action',
    text: 'Sie erhalten einen priorisierten Maßnahmenplan.',
  },
  {
    title: 'Execution',
    text: 'Wir setzen um oder begleiten Ihr Team.',
  },
  {
    title: 'Monitoring',
    text: 'Auf Wunsch übernehmen wir Betrieb, Review und Optimierung.',
  },
];

const integrationChips = ['Microsoft 365', 'Azure', 'CRM', 'Backup', 'Security', 'Monitoring', 'Automatisierung'];

export default function LandingPageContent() {
  return (
    <div className="min-h-screen bg-white text-black font-poppins selection:bg-primary/30">
      <Header />

      <main className="pt-28 pb-24">
        <section className="px-6 pt-10 pb-12 mb-14" aria-labelledby="hero-heading">
          <div className="max-w-[1200px] mx-auto">
            <div className="grid lg:grid-cols-[1.05fr_1fr] gap-12 xl:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="pr-2"
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-gray-700 text-xs font-semibold uppercase tracking-wider mb-8 border border-gray-200 shadow-sm">
                  <Workflow className="w-4 h-4 text-primary" />
                  IT-Check für Mittelstand & Projektverantwortliche
                </div>
                <h1 id="hero-heading" className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tighter mb-7 leading-[1.04]">
                  IT-Probleme sichtbar machen. Prozesse verbinden. Lösungen automatisieren.
                </h1>
                <p className="text-lg text-gray-600 max-w-2xl leading-relaxed mb-10">
                  Mit dem IT-Check analysieren wir IT, Microsoft 365, Azure, CRM und Vertriebsprozesse — und bauen
                  daraus einen klaren Workflow für Stabilität, Sicherheit und Wachstum.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-10">
                  <Link
                    href="/kontakt"
                    className="px-8 py-4 bg-primary hover:bg-primary/90 text-white rounded-xl font-medium inline-flex items-center justify-center gap-2 transition-all shadow-lg shadow-primary/20 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                  >
                    IT-Check starten <ArrowRight className="w-5 h-5" />
                  </Link>
                  <Link
                    href="#workflow-ablauf"
                    className="px-8 py-4 rounded-xl text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors border border-gray-200 inline-flex items-center justify-center gap-2 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                  >
                    So funktioniert der Ablauf
                  </Link>
                </div>

                <div className="flex flex-wrap gap-3">
                  {integrationChips.map((chip) => (
                    <span
                      key={chip}
                      className="inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-[0_8px_16px_-14px_rgba(15,23,42,0.38)]"
                    >
                      {chip}
                    </span>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="relative"
              >
                <div className="absolute -inset-6 bg-gradient-to-br from-primary/10 via-transparent to-sky-100/40 blur-3xl pointer-events-none" />
                <ITCheckWorkflowVisual />
              </motion.div>
            </div>
          </div>
        </section>

        <div className="max-w-[1200px] mx-auto px-6 space-y-24">
          <section id="workflow-ablauf" aria-labelledby="workflow-heading" className="scroll-mt-32">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-center">
                <Workflow className="w-5 h-5 text-primary" />
              </div>
              <h2 id="workflow-heading" className="text-2xl font-bold tracking-tight">
                So wird aus IT-Chaos ein klarer Workflow
              </h2>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-6 md:p-8 mb-8 shadow-[0_20px_40px_-30px_rgba(15,23,42,0.4)]">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {workflowSteps.map((step, index) => (
                  <article key={step.title} className="relative p-6 rounded-2xl bg-white border border-slate-200 shadow-[0_12px_24px_-20px_rgba(15,23,42,0.45)]">
                    <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-primary/50 via-primary/20 to-transparent" />
                    <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary text-xs font-bold mb-4">
                      {index + 1}
                    </div>
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-[0.16em] mb-3">{step.title}</p>
                    <p className="text-slate-700 leading-relaxed">{step.text}</p>
                  </article>
                ))}
              </div>
            </div>

            <Link
              href="/kontakt"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-primary/90 text-white rounded-xl font-medium transition-all shadow-lg shadow-primary/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              IT-Check anfragen <ArrowRight className="w-5 h-5" />
            </Link>
          </section>

          <section aria-labelledby="symptome-heading" className="scroll-mt-32">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-center">
                <TriangleAlert className="w-5 h-5 text-primary" />
              </div>
              <h2 id="symptome-heading" className="text-2xl font-bold tracking-tight">
                Problem sichtbar machen
              </h2>
            </div>
            <div className="p-8 rounded-[2rem] bg-white border border-slate-200 shadow-[0_18px_34px_-28px_rgba(15,23,42,0.45)]">
              <p className="text-sm font-bold text-slate-500 uppercase tracking-[0.2em] mb-4">Typische Symptome</p>
              <ul className="list-disc pl-6 space-y-2 text-slate-700">
                {symptoms.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </section>

          <section aria-labelledby="produkt-heading" className="scroll-mt-32">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-center">
                <SearchCheck className="w-5 h-5 text-primary" />
              </div>
              <h2 id="produkt-heading" className="text-2xl font-bold tracking-tight">
                Der IT-Check als Produkt: Was Sie bekommen
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {outcomes.map((item) => (
                <article key={item.title} className="p-8 rounded-[2rem] bg-white border border-slate-200 shadow-[0_18px_34px_-28px_rgba(15,23,42,0.45)] relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-16 h-1 bg-primary/70" />
                  <div className="flex items-center gap-3 mb-3 mt-1">
                    <div className="w-9 h-9 rounded-lg border border-primary/20 bg-primary/5 flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold tracking-tight text-gray-900">{item.title}</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{item.text}</p>
                </article>
              ))}
            </div>
          </section>

          <section aria-labelledby="recruiter-heading" className="scroll-mt-32">
            <div className="p-7 md:p-8 rounded-3xl bg-slate-50/70 border border-slate-200">
              <h2 id="recruiter-heading" className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
                Sie suchen externe IT-Unterstützung für ein Projekt?
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6 max-w-3xl">
                Auch bei Projektanfragen starte ich nicht mit Verfügbarkeit, sondern mit Ziel, Problem und
                Verantwortung.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-8">
                <li>IT-Projekte stabilisieren</li>
                <li>Microsoft 365 / Azure strukturieren</li>
                <li>CRM- und Vertriebsprozesse verbessern</li>
                <li>Technische Verantwortung temporär übernehmen</li>
              </ul>
              <Link
                href="/recruiter"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white hover:bg-slate-100 text-primary rounded-xl border border-slate-200 font-medium transition-all shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                Projektanfrage stellen <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </section>

          <section aria-labelledby="pfade-heading" className="scroll-mt-32">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-center">
                <ChevronRight className="w-5 h-5 text-primary" />
              </div>
              <h2 id="pfade-heading" className="text-2xl font-bold tracking-tight">
                Nach dem IT-Check wird klar, welcher Pfad passt
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8 mb-6">
              {paths.map((item) => (
                <article key={item.title} className="p-8 rounded-[2rem] bg-white border border-slate-200 shadow-[0_18px_34px_-28px_rgba(15,23,42,0.45)] relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-16 h-1 bg-primary/70" />
                  <div className="flex items-center gap-3 mb-3 mt-1">
                    <div className="w-9 h-9 rounded-lg border border-primary/20 bg-primary/5 flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
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
              <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-center">
                <Workflow className="w-5 h-5 text-primary" />
              </div>
              <h2 id="prozess-heading" className="text-2xl font-bold tracking-tight">
                Beispiel: CRM-/Lead-Prozess stabilisieren
              </h2>
            </div>

            <div className="p-8 rounded-[2rem] bg-white border border-slate-200 shadow-[0_18px_34px_-28px_rgba(15,23,42,0.45)]">
              <p className="text-sm font-bold text-slate-500 uppercase tracking-[0.18em] mb-4">Konkreter Use Case</p>
              <p className="text-slate-800 font-medium mb-5">
                Ein Vertriebsteam verliert Leads zwischen Formular, CRM und Follow-up.
              </p>
              <ol className="space-y-4">
                {processSteps.map((step) => (
                  <li key={step.title} className="flex items-start gap-3">
                    <span className="mt-0.5 w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-bold inline-flex items-center justify-center">
                      {step.title.split('.')[0]}
                    </span>
                    <div>
                      <p className="font-semibold text-slate-900">{step.title.replace(/^[0-9]+\.\s*/, '')}</p>
                      <p className="text-slate-600">{step.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <p className="text-slate-600 mt-5">
                Ergebnis: ein priorisierter Maßnahmenplan mit klarer Verantwortung statt ungeordneter Einzelmaßnahmen.
              </p>
            </div>
          </section>

          <section aria-labelledby="angebot-heading" className="scroll-mt-32">
            <div className="p-8 md:p-10 rounded-3xl bg-primary text-white shadow-[0_28px_48px_-28px_rgba(0,95,107,0.65)]">
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
            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-[0_18px_34px_-28px_rgba(15,23,42,0.45)]">
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
