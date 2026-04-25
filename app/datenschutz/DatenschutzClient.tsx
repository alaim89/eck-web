'use client';

import { motion } from 'motion/react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import Link from 'next/link';
import {
  Shield,
  User,
  Scale,
  Server,
  Cookie,
  Mail,
  UserCog,
  Newspaper,
  BarChart3,
  Megaphone,
  Handshake,
  Video,
  Type,
  Monitor,
  Globe,
  BadgeCheck,
  AlertCircle,
  Undo2,
  Database,
  Bot,
  CalendarDays,
  ChevronRight,
} from 'lucide-react';
import { useEffect, useState } from 'react';

const navItems = [
  { id: 'verantwortlicher', title: 'Verantwortlicher', icon: User },
  { id: 'datenverarbeitung', title: 'Datenverarbeitung', icon: Shield },
  { id: 'cookies', title: 'Cookies & Consent', icon: Cookie },
  { id: 'analyse', title: 'Analyse & Tracking', icon: BarChart3 },
  { id: 'rechte', title: 'Ihre Rechte', icon: BadgeCheck },
  { id: 'aktualitaet', title: 'Aktualität', icon: CalendarDays },
];

export default function DatenschutzClient() {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.2, rootMargin: '-10% 0% -70% 0%' }
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;

    const offset = 100;
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = element.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;

    window.scrollTo({
      top: elementPosition - offset,
      behavior: 'smooth',
    });
  };

  return (
    <div className="min-h-screen bg-white text-black font-poppins selection:bg-primary/30">
      <Header />

      <main className="pt-32 pb-24">
        <section className="px-6 mb-20" aria-labelledby="datenschutz-title">
          <div className="max-w-[1200px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-50 text-gray-700 text-xs font-semibold uppercase tracking-wider mb-6 border border-gray-100">
                <Shield className="w-4 h-4 text-primary" />
                Datenschutzinformationen
              </div>
              <h1 id="datenschutz-title" className="text-5xl md:text-6xl font-bold tracking-tighter mb-6">
                Datenschutzerklärung<span className="text-gray-400">.</span>
              </h1>
              <p className="text-lg text-gray-600 max-w-3xl leading-relaxed">
                Informationen zur Verarbeitung personenbezogener Daten nach DSGVO und TTDSG für die Website von
                Ecksolution IT.
              </p>
            </motion.div>
          </div>
        </section>

        <div className="max-w-[1200px] mx-auto px-6 grid lg:grid-cols-[300px_1fr] gap-16">
          <aside className="hidden lg:block" aria-label="Inhaltsverzeichnis Datenschutzerklärung">
            <div className="sticky top-32 space-y-1">
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-6 px-4">Inhalt</p>
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${
                    activeSection === item.id
                      ? 'bg-primary text-white shadow-lg shadow-primary/20'
                      : 'text-gray-500 hover:bg-gray-50 hover:text-black'
                  }`}
                >
                  <item.icon
                    className={`w-4 h-4 ${
                      activeSection === item.id ? 'text-white' : 'text-gray-400 group-hover:text-primary'
                    }`}
                  />
                  {item.title}
                </button>
              ))}

              <div className="mt-12 p-6 rounded-2xl bg-gray-50 border border-gray-100">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Fragen zum Datenschutz</p>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  Wenn Sie Fragen zur Datenverarbeitung haben, kontaktieren Sie uns gern direkt.
                </p>
                <Link
                  href="mailto:info@ecksolution-it.de"
                  className="text-sm font-semibold text-primary flex items-center gap-2 hover:gap-3 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded"
                >
                  Datenschutz-Anfrage senden <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </aside>

          <article className="space-y-24" aria-label="Datenschutzerklärung Inhalte">
            <section id="verantwortlicher" className="scroll-mt-32" aria-labelledby="verantwortlicher-title">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center">
                  <User className="w-5 h-5 text-primary" />
                </div>
                <h2 id="verantwortlicher-title" className="text-2xl font-bold tracking-tight">
                  1. Verantwortlicher
                </h2>
              </div>
              <div className="p-8 rounded-3xl bg-gray-50 border border-gray-100">
                <p className="font-bold text-gray-900">Ecksolution IT</p>
                <p className="text-gray-600">Auf dem Esch 15</p>
                <p className="text-gray-600">49638 Nortrup</p>
                <p className="text-gray-600 mb-4">Deutschland</p>
                <p className="text-gray-700">
                  E-Mail:{' '}
                  <a
                    href="mailto:info@ecksolution-it.de"
                    className="text-primary font-semibold underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded"
                  >
                    info@ecksolution-it.de
                  </a>
                </p>
              </div>
            </section>

            <section id="datenverarbeitung" className="scroll-mt-32" aria-labelledby="datenverarbeitung-title">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center">
                  <Scale className="w-5 h-5 text-primary" />
                </div>
                <h2 id="datenverarbeitung-title" className="text-2xl font-bold tracking-tight">
                  2.–4. Allgemeine Hinweise, Rechtsgrundlagen & Hosting
                </h2>
              </div>
              <div className="space-y-8">
                <div className="p-8 rounded-3xl bg-gray-50 border border-gray-100">
                  <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">2. Allgemeine Hinweise</h3>
                  <p className="text-gray-600 leading-relaxed mb-3">
                    Wir verarbeiten personenbezogene Daten ausschließlich im Rahmen der gesetzlichen Vorgaben,
                    insbesondere der Datenschutz-Grundverordnung (DSGVO) sowie des TTDSG.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
                  </p>
                </div>

                <div className="p-8 rounded-3xl bg-gray-50 border border-gray-100">
                  <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">
                    3. Rechtsgrundlagen der Verarbeitung
                  </h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    <li>Art. 6 Abs. 1 lit. a DSGVO (Einwilligung)</li>
                    <li>Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung)</li>
                    <li>Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse)</li>
                    <li>§ 25 TTDSG (Speicherung von Informationen auf Endgeräten)</li>
                  </ul>
                </div>

                <div className="p-8 rounded-3xl bg-gray-50 border border-gray-100">
                  <div className="flex items-center gap-3 mb-4">
                    <Server className="w-5 h-5 text-primary" />
                    <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest">
                      4. Hosting und Server-Log-Dateien
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-3">Beim Aufruf unserer Website werden automatisch folgende Daten erhoben:</p>
                  <ul className="list-disc pl-6 space-y-1 text-gray-600 mb-4">
                    <li>IP-Adresse (gekürzt/anonymisiert)</li>
                    <li>Datum und Uhrzeit</li>
                    <li>Browsertyp und Version</li>
                    <li>Betriebssystem</li>
                    <li>Referrer-URL</li>
                  </ul>
                  <p className="text-gray-700"><strong>Zweck:</strong> Sicherstellung eines störungsfreien Betriebs</p>
                  <p className="text-gray-700"><strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO</p>
                  <p className="text-gray-700"><strong>Speicherdauer:</strong> max. 14 Tage</p>
                </div>
              </div>
            </section>

            <section id="cookies" className="scroll-mt-32" aria-labelledby="cookies-title">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center">
                  <Cookie className="w-5 h-5 text-primary" />
                </div>
                <h2 id="cookies-title" className="text-2xl font-bold tracking-tight">
                  5.–8. Cookies, Kontakt, Konto & Newsletter
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="p-8 rounded-3xl bg-gray-50 border border-gray-100 md:col-span-2">
                  <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">
                    5. Cookies und Consent-Management
                  </h3>
                  <p className="text-gray-600 mb-3">Unsere Website verwendet Cookies.</p>
                  <h4 className="font-semibold text-gray-900 mb-2">5.1 Technisch notwendige Cookies</h4>
                  <p className="text-gray-600 mb-2">Diese sind für den Betrieb erforderlich.</p>
                  <ul className="list-disc pl-6 space-y-1 text-gray-600 mb-4">
                    <li>Art. 6 Abs. 1 lit. f DSGVO</li>
                    <li>§ 25 Abs. 2 TTDSG</li>
                  </ul>
                  <h4 className="font-semibold text-gray-900 mb-2">5.2 Nicht notwendige Cookies (Tracking/Marketing)</h4>
                  <p className="text-gray-600 mb-2">Diese werden nur nach Ihrer ausdrücklichen Einwilligung gesetzt.</p>
                  <ul className="list-disc pl-6 space-y-1 text-gray-600 mb-2">
                    <li>Art. 6 Abs. 1 lit. a DSGVO</li>
                    <li>§ 25 Abs. 1 TTDSG</li>
                  </ul>
                  <p className="text-gray-600">Sie können Ihre Einwilligung jederzeit über das Consent-Tool widerrufen.</p>
                </div>

                <div className="p-8 rounded-3xl bg-gray-50 border border-gray-100">
                  <div className="flex items-center gap-3 mb-4">
                    <Mail className="w-5 h-5 text-primary" />
                    <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest">6. Kontaktformular</h3>
                  </div>
                  <p className="text-gray-600 mb-2">Wenn Sie uns per Formular kontaktieren, werden folgende Daten verarbeitet:</p>
                  <ul className="list-disc pl-6 space-y-1 text-gray-600 mb-3">
                    <li>Name</li>
                    <li>E-Mail-Adresse</li>
                    <li>Nachricht</li>
                  </ul>
                  <p className="text-gray-700"><strong>Zweck:</strong> Bearbeitung Ihrer Anfrage</p>
                  <p className="text-gray-700"><strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. a DSGVO</p>
                  <p className="text-gray-700"><strong>Speicherdauer:</strong> bis zur abschließenden Bearbeitung</p>
                </div>

                <div className="p-8 rounded-3xl bg-gray-50 border border-gray-100">
                  <div className="flex items-center gap-3 mb-4">
                    <UserCog className="w-5 h-5 text-primary" />
                    <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest">7. Registrierung / Kundenkonto</h3>
                  </div>
                  <p className="text-gray-600 mb-2">Bei Registrierung verarbeiten wir:</p>
                  <ul className="list-disc pl-6 space-y-1 text-gray-600 mb-3">
                    <li>Name</li>
                    <li>E-Mail-Adresse</li>
                    <li>ggf. weitere Angaben</li>
                  </ul>
                  <p className="text-gray-700"><strong>Zweck:</strong> Bereitstellung eines Nutzerkontos</p>
                  <p className="text-gray-700"><strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO</p>
                  <p className="text-gray-700"><strong>Speicherdauer:</strong> bis Löschung des Kontos</p>
                </div>

                <div className="p-8 rounded-3xl bg-gray-50 border border-gray-100 md:col-span-2">
                  <div className="flex items-center gap-3 mb-4">
                    <Newspaper className="w-5 h-5 text-primary" />
                    <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest">8. Newsletter</h3>
                  </div>
                  <p className="text-gray-600 mb-2">Für den Newsletter verwenden wir das Double-Opt-in-Verfahren.</p>
                  <p className="text-gray-700"><strong>Verarbeitete Daten:</strong></p>
                  <ul className="list-disc pl-6 space-y-1 text-gray-600 mb-3">
                    <li>E-Mail-Adresse</li>
                  </ul>
                  <p className="text-gray-700"><strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. a DSGVO</p>
                  <p className="text-gray-700"><strong>Widerruf:</strong> jederzeit über Abmeldelink möglich</p>
                </div>
              </div>
            </section>

            <section id="analyse" className="scroll-mt-32" aria-labelledby="analyse-title">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 text-primary" />
                </div>
                <h2 id="analyse-title" className="text-2xl font-bold tracking-tight">
                  9.–15. Analyse, Werbung & Drittlandtransfer
                </h2>
              </div>

              <div className="space-y-8">
                <div className="p-8 rounded-3xl bg-gray-50 border border-gray-100">
                  <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">9. Webanalyse (Google Analytics 4)</h3>
                  <p className="text-gray-600">Wir nutzen Google Analytics 4.</p>
                  <p className="text-gray-700"><strong>Anbieter:</strong> Google Ireland Limited</p>
                  <p className="text-gray-700 mb-2"><strong>Verarbeitung erfolgt nur nach Einwilligung.</strong></p>
                  <ul className="list-disc pl-6 space-y-1 text-gray-600 mb-3">
                    <li>IP-Anonymisierung aktiv</li>
                    <li>Speicherdauer: 14 Monate</li>
                  </ul>
                  <p className="text-gray-700"><strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. a DSGVO, § 25 TTDSG</p>
                  <p className="text-gray-700"><strong>Drittlandtransfer:</strong> USA auf Basis des EU-US Data Privacy Framework</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="p-8 rounded-3xl bg-gray-50 border border-gray-100">
                    <div className="flex items-center gap-3 mb-3">
                      <Megaphone className="w-5 h-5 text-primary" />
                      <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest">10. Werbung und Tracking</h3>
                    </div>
                    <h4 className="font-semibold text-gray-900">10.1 Google Ads / Conversion Tracking</h4>
                    <p className="text-gray-600 mb-3">Erfolgt nur mit Einwilligung.</p>
                    <h4 className="font-semibold text-gray-900">10.2 Google AdSense</h4>
                    <p className="text-gray-600">Erfolgt nur mit Einwilligung.</p>
                  </div>

                  <div className="p-8 rounded-3xl bg-gray-50 border border-gray-100">
                    <div className="flex items-center gap-3 mb-3">
                      <Handshake className="w-5 h-5 text-primary" />
                      <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest">11. Affiliate-Programme (Amazon)</h3>
                    </div>
                    <p className="text-gray-600 mb-2">Wir nehmen am Amazon EU-Partnerprogramm teil.</p>
                    <p className="text-gray-700"><strong>Rechtsgrundlage:</strong></p>
                    <ul className="list-disc pl-6 space-y-1 text-gray-600">
                      <li>Einwilligung für Cookies</li>
                      <li>Art. 6 Abs. 1 lit. f DSGVO für Abrechnung</li>
                    </ul>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="p-8 rounded-3xl bg-gray-50 border border-gray-100">
                    <div className="flex items-center gap-3 mb-3">
                      <Video className="w-5 h-5 text-primary" />
                      <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest">12. Einbindung von Videos</h3>
                    </div>
                    <p className="text-gray-600 mb-2">Videos werden nur mit vorheriger Einwilligung geladen (2-Klick-Lösung oder Consent-Tool).</p>
                    <p className="text-gray-700"><strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. a DSGVO</p>
                  </div>

                  <div className="p-8 rounded-3xl bg-gray-50 border border-gray-100">
                    <div className="flex items-center gap-3 mb-3">
                      <Type className="w-5 h-5 text-primary" />
                      <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest">13. Google Web Fonts</h3>
                    </div>
                    <p className="text-gray-600 mb-2">Wir verwenden lokal eingebundene Schriftarten.</p>
                    <p className="text-gray-700 font-semibold">Es erfolgt keine Datenübertragung an Google.</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="p-8 rounded-3xl bg-gray-50 border border-gray-100">
                    <div className="flex items-center gap-3 mb-3">
                      <Monitor className="w-5 h-5 text-primary" />
                      <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest">14. Fernwartung (pcvisit)</h3>
                    </div>
                    <p className="text-gray-600 mb-2">Bei Nutzung der Fernwartung werden technische Verbindungsdaten verarbeitet.</p>
                    <p className="text-gray-700"><strong>Rechtsgrundlage:</strong></p>
                    <ul className="list-disc pl-6 space-y-1 text-gray-600">
                      <li>Art. 6 Abs. 1 lit. b DSGVO</li>
                      <li>ggf. lit. f DSGVO</li>
                    </ul>
                  </div>

                  <div className="p-8 rounded-3xl bg-gray-50 border border-gray-100">
                    <div className="flex items-center gap-3 mb-3">
                      <Globe className="w-5 h-5 text-primary" />
                      <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest">15. Drittlandübermittlung</h3>
                    </div>
                    <p className="text-gray-600 mb-2">Eine Übermittlung in Drittländer erfolgt nur:</p>
                    <ul className="list-disc pl-6 space-y-1 text-gray-600">
                      <li>bei geeigneten Garantien</li>
                      <li>oder Angemessenheitsbeschluss (z. B. EU-US Data Privacy Framework)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section id="rechte" className="scroll-mt-32" aria-labelledby="rechte-title">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center">
                  <BadgeCheck className="w-5 h-5 text-primary" />
                </div>
                <h2 id="rechte-title" className="text-2xl font-bold tracking-tight">
                  16.–20. Rechte & weitere Hinweise
                </h2>
              </div>
              <div className="space-y-8">
                <div className="p-8 rounded-3xl bg-gray-50 border border-gray-100">
                  <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-3">16. Ihre Rechte</h3>
                  <p className="text-gray-600 mb-2">Sie haben folgende Rechte:</p>
                  <ul className="list-disc pl-6 space-y-1 text-gray-600">
                    <li>Auskunft (Art. 15 DSGVO)</li>
                    <li>Berichtigung (Art. 16 DSGVO)</li>
                    <li>Löschung (Art. 17 DSGVO)</li>
                    <li>Einschränkung (Art. 18 DSGVO)</li>
                    <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
                    <li>Widerspruch (Art. 21 DSGVO)</li>
                  </ul>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="p-8 rounded-3xl bg-gray-50 border border-gray-100">
                    <div className="flex items-center gap-3 mb-3">
                      <AlertCircle className="w-5 h-5 text-primary" />
                      <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest">17. Beschwerderecht</h3>
                    </div>
                    <p className="text-gray-600">Sie können sich bei einer Datenschutzaufsichtsbehörde beschweren.</p>
                  </div>

                  <div className="p-8 rounded-3xl bg-gray-50 border border-gray-100">
                    <div className="flex items-center gap-3 mb-3">
                      <Undo2 className="w-5 h-5 text-primary" />
                      <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest">18. Widerruf Ihrer Einwilligung</h3>
                    </div>
                    <p className="text-gray-600">Einwilligungen können jederzeit mit Wirkung für die Zukunft widerrufen werden.</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="p-8 rounded-3xl bg-gray-50 border border-gray-100">
                    <div className="flex items-center gap-3 mb-3">
                      <Database className="w-5 h-5 text-primary" />
                      <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest">19. Pflicht zur Bereitstellung von Daten</h3>
                    </div>
                    <p className="text-gray-600">
                      Die Bereitstellung personenbezogener Daten kann gesetzlich oder vertraglich erforderlich sein. Ohne diese
                      Daten können bestimmte Leistungen nicht erbracht werden.
                    </p>
                  </div>

                  <div className="p-8 rounded-3xl bg-gray-50 border border-gray-100">
                    <div className="flex items-center gap-3 mb-3">
                      <Bot className="w-5 h-5 text-primary" />
                      <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest">20. Automatisierte Entscheidungen</h3>
                    </div>
                    <p className="text-gray-600">Eine automatisierte Entscheidungsfindung findet nicht statt.</p>
                  </div>
                </div>
              </div>
            </section>

            <section id="aktualitaet" className="scroll-mt-32" aria-labelledby="aktualitaet-title">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center">
                  <CalendarDays className="w-5 h-5 text-primary" />
                </div>
                <h2 id="aktualitaet-title" className="text-2xl font-bold tracking-tight">
                  21. Aktualität
                </h2>
              </div>
              <div className="p-8 rounded-3xl bg-gray-50 border border-gray-100">
                <p className="text-gray-600 mb-3">Diese Datenschutzerklärung wird regelmäßig angepasst.</p>
                <p className="text-gray-900 font-semibold">Stand: 25.04.2026</p>
              </div>
            </section>
          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
}
