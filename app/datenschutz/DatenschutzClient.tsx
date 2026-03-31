'use client';

import { motion } from "motion/react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { 
  Shield, Lock, Eye, FileText, Scale, 
  Info, Mail, MapPin, ChevronRight,
  Activity, Database, Globe, UserCheck
} from "lucide-react";
import { useState, useEffect } from "react";

export default function DatenschutzClient() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.2, rootMargin: "-10% 0% -70% 0%" }
    );

    document.querySelectorAll("section[id]").forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const navItems = [
    { id: "verantwortlich", title: "Verantwortliche Stelle", icon: Shield },
    { id: "allgemein", title: "Allgemeine Hinweise", icon: Info },
    { id: "datenerfassung", title: "Datenerfassung", icon: Database },
    { id: "analyse", title: "Analyse-Tools", icon: Activity },
    { id: "plugins", title: "Plugins & Tools", icon: Globe },
  ];

  return (
    <div className="min-h-screen bg-white text-black font-poppins selection:bg-primary/30">
      <Header />

      <main className="pt-32 pb-24">
        {/* Hero Header */}
        <section className="px-6 mb-20">
          <div className="max-w-[1200px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-50 text-gray-700 text-xs font-semibold uppercase tracking-wider mb-6 border border-gray-100">
                <Lock className="w-4 h-4 text-primary" />
                Sicherheit & Vertrauen
              </div>
              <h1 className="text-5xl md:text-6xl font-bold tracking-tighter mb-6">
                Datenschutz<span className="text-gray-400">erklärung.</span>
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
                Ihre Privatsphäre ist uns wichtig. Hier erfahren Sie transparent, wie wir mit Ihren Daten umgehen und welche Rechte Sie haben.
              </p>
            </motion.div>
          </div>
        </section>

        <div className="max-w-[1200px] mx-auto px-6 grid lg:grid-cols-[300px_1fr] gap-16">
          {/* Sidebar Navigation */}
          <aside className="hidden lg:block">
            <div className="sticky top-32 space-y-1">
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-6 px-4">
                Inhalt
              </p>
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all group ${
                    activeSection === item.id 
                      ? "bg-primary text-white shadow-lg shadow-primary/20" 
                      : "text-gray-500 hover:bg-gray-50 hover:text-black"
                  }`}
                >
                  <item.icon className={`w-4 h-4 ${activeSection === item.id ? "text-white" : "text-gray-400 group-hover:text-primary"}`} />
                  {item.title}
                </button>
              ))}
              
              <div className="mt-12 p-6 rounded-2xl bg-gray-50 border border-gray-100">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
                  Fragen?
                </p>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  Haben Sie Fragen zu Ihren Daten? Kontaktieren Sie uns direkt.
                </p>
                <a 
                  href="mailto:info@ecksolution-it.de"
                  className="text-sm font-semibold text-primary flex items-center gap-2 hover:gap-3 transition-all"
                >
                  E-Mail schreiben <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </aside>

          {/* Content */}
          <div className="space-y-24">
            {/* Responsbile Section */}
            <section id="verantwortlich" className="scroll-mt-32">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-2xl font-bold tracking-tight">Verantwortliche Stelle</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="p-8 rounded-3xl bg-gray-50 border border-gray-100">
                  <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-6">Anschrift</p>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <MapPin className="w-5 h-5 text-primary mt-1" />
                      <div>
                        <p className="font-bold text-gray-900">Ecksolution IT</p>
                        <p className="text-gray-600">Inh. Andreas Eckert</p>
                        <p className="text-gray-600">Auf dem Esch 15</p>
                        <p className="text-gray-600">49638 Nortrup</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-8 rounded-3xl bg-gray-50 border border-gray-100">
                  <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-6">Kontakt</p>
                  <div className="space-y-4">
                    <a href="mailto:info@ecksolution-it.de" className="flex items-center gap-4 group">
                      <div className="w-10 h-10 rounded-lg bg-white border border-gray-100 flex items-center justify-center group-hover:border-primary transition-colors">
                        <Mail className="w-5 h-5 text-primary" />
                      </div>
                      <span className="text-gray-600 group-hover:text-black transition-colors">info@ecksolution-it.de</span>
                    </a>
                  </div>
                </div>
              </div>
              
              <p className="mt-8 text-gray-600 leading-relaxed">
                Die verantwortliche Stelle entscheidet allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z.B. Namen, Kontaktdaten o. Ä.).
              </p>
            </section>

            {/* General Info Section */}
            <section id="allgemein" className="scroll-mt-32">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center">
                  <Info className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-2xl font-bold tracking-tight">Allgemeine Hinweise & Pflichtinformationen</h2>
              </div>

              <div className="prose prose-slate max-w-none prose-headings:text-gray-900 prose-p:text-gray-600 prose-strong:text-gray-900">
                <h3>Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
                <p>
                  Nur mit Ihrer ausdrücklichen Einwilligung sind einige Vorgänge der Datenverarbeitung möglich. Ein Widerruf Ihrer bereits erteilten Einwilligung ist jederzeit möglich. Für den Widerruf genügt eine formlose Mitteilung per E-Mail. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
                </p>

                <h3>Recht auf Beschwerde bei der zuständigen Aufsichtsbehörde</h3>
                <p>
                  Als Betroffener steht Ihnen im Falle eines datenschutzrechtlichen Verstoßes ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu. Zuständige Aufsichtsbehörde bezüglich datenschutzrechtlicher Fragen ist der Landesdatenschutzbeauftragte des Bundeslandes, in dem sich der Sitz unseres Unternehmens befindet.
                </p>
                <p>
                  Der folgende Link stellt eine Liste der Datenschutzbeauftragten sowie deren Kontaktdaten bereit:{' '}
                  <a href="https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html" target="_blank" rel="noopener noreferrer" className="text-primary no-underline hover:underline">
                    Liste der Datenschutzbeauftragten
                  </a>.
                </p>

                <h3>Recht auf Datenübertragbarkeit</h3>
                <p>
                  Ihnen steht das Recht zu, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags automatisiert verarbeiten, an sich oder an Dritte aushändigen zu lassen. Die Bereitstellung erfolgt in einem maschinenlesbaren Format. Sofern Sie die direkte Übertragung der Daten an einen anderen Verantwortlichen verlangen, erfolgt dies nur, soweit es technisch machbar ist.
                </p>

                <h3>Recht auf Auskunft, Berichtigung, Sperrung, Löschung</h3>
                <p>
                  Sie haben jederzeit im Rahmen der geltenden gesetzlichen Bestimmungen das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, Herkunft der Daten, deren Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung, Sperrung oder Löschung dieser Daten.
                </p>
              </div>
            </section>

            {/* Data Collection Section */}
            <section id="datenerfassung" className="scroll-mt-32">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center">
                  <Database className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-2xl font-bold tracking-tight">Datenerfassung auf unserer Website</h2>
              </div>

              <div className="prose prose-slate max-w-none prose-headings:text-gray-900 prose-p:text-gray-600">
                <h3>SSL- bzw. TLS-Verschlüsselung</h3>
                <p>
                  Aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, die Sie an uns als Seitenbetreiber senden, nutzt unsere Website eine SSL-bzw. TLS-Verschlüsselung. Damit sind Daten, die Sie über diese Website übermitteln, für Dritte nicht mitlesbar.
                </p>

                <h3>Server-Log-Dateien</h3>
                <p>
                  In Server-Log-Dateien erhebt und speichert der Provider der Website automatisch Informationen, die Ihr Browser automatisch an uns übermittelt. Dies sind:
                </p>
                <ul className="grid md:grid-cols-2 gap-2 list-none p-0">
                  {[
                    "Besuchte Seite auf unserer Domain",
                    "Datum und Uhrzeit der Serveranfrage",
                    "Browsertyp und Browserversion",
                    "Verwendetes Betriebssystem",
                    "Referrer URL",
                    "Hostname des zugreifenden Rechners",
                    "IP-Adresse"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-600 bg-gray-50 px-4 py-2 rounded-lg border border-gray-100">
                      <ChevronRight className="w-3 h-3 text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-4">
                  Es findet keine Zusammenführung dieser Daten mit anderen Datenquellen statt. Grundlage der Datenverarbeitung bildet Art. 6 Abs. 1 lit. b DSGVO.
                </p>

                <h3>Cookies</h3>
                <p>
                  Unsere Website verwendet Cookies. Das sind kleine Textdateien, die Ihr Webbrowser auf Ihrem Endgerät speichert. Cookies helfen uns dabei, unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen.
                </p>
                <p>
                  Einige Cookies sind &quot;Session-Cookies.&quot; Solche Cookies werden nach Ende Ihrer Browser-Sitzung von selbst gelöscht. Hingegen bleiben andere Cookies auf Ihrem Endgerät bestehen, bis Sie diese selbst löschen. Solche Cookies helfen uns, Sie bei Rückkehr auf unserer Website wiederzuerkennen.
                </p>
              </div>
            </section>

            {/* Analysis Section */}
            <section id="analyse" className="scroll-mt-32">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center">
                  <Activity className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-2xl font-bold tracking-tight">Analyse-Tools und Werbung</h2>
              </div>

              <div className="prose prose-slate max-w-none prose-headings:text-gray-900 prose-p:text-gray-600">
                <h3>Google Analytics 4</h3>
                <p>
                  Soweit Sie Ihre Einwilligung erklärt haben, wird auf dieser Website Google Analytics 4 eingesetzt, ein Webanalysedienst der Google LLC. Verantwortliche Stelle für Nutzer in der EU/ dem EWR und der Schweiz ist Google Ireland Limited.
                </p>
                <p>
                  Google Analytics verwendet Cookies, die eine Analyse der Benutzung unserer Webseiten durch Sie ermöglichen. Die mittels der Cookies erhobenen Informationen über Ihre Benutzung dieser Website werden in der Regel an einen Server von Google in den USA übertragen und dort gespeichert.
                </p>
                
                <div className="bg-blue-50 border border-blue-100 p-6 rounded-2xl my-8">
                  <div className="flex items-center gap-2 text-blue-800 font-bold text-sm uppercase tracking-wider mb-4">
                    <UserCheck className="w-4 h-4" />
                    IP-Anonymisierung
                  </div>
                  <p className="text-blue-900/80 text-sm leading-relaxed m-0">
                    Bei Google Analytics 4 ist die Anonymisierung von IP-Adressen standardmäßig aktiviert. Aufgrund der IP-Anonymisierung wird Ihre IP-Adresse von Google innerhalb von Mitgliedstaaten der Europäischen Union oder in anderen Vertragsstaaten des Abkommens über den Europäischen Wirtschaftsraum gekürzt.
                  </p>
                </div>

                <h3>Speicherdauer</h3>
                <p>
                  Die von uns gesendeten und mit Cookies verknüpften Daten werden nach 14 Monaten automatisch gelöscht. Die maximale Lebensdauer der Google Analytics Cookies beträgt 2 Jahre. Die Löschung von Daten, deren Aufbewahrungsdauer erreicht ist, erfolgt automatisch einmal im Monat.
                </p>
              </div>
            </section>

            {/* Plugins Section */}
            <section id="plugins" className="scroll-mt-32">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center">
                  <Globe className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-2xl font-bold tracking-tight">Plugins und Tools</h2>
              </div>

              <div className="prose prose-slate max-w-none prose-headings:text-gray-900 prose-p:text-gray-600">
                <h3>YouTube mit erweitertem Datenschutz</h3>
                <p>
                  Wir nutzen YouTube zur Einbindung von Videos. Anbieter ist die Google Ireland Limited. Wir nutzen YouTube im erweiterten Datenschutzmodus. Dieser Modus bewirkt laut YouTube, dass YouTube keine Informationen über die Besucher auf dieser Website speichert, bevor diese sich das Video ansehen.
                </p>

                <h3>Google Web Fonts</h3>
                <p>
                  Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten so genannte Web Fonts, die von Google bereitgestellt werden. Beim Aufruf einer Seite lädt Ihr Browser die benötigten Web Fonts in ihren Browsercache, um Texte und Schriftarten korrekt anzuzeigen.
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
