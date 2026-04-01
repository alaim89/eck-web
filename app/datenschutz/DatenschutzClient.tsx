'use client';

import { motion } from "motion/react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import {
  Shield,
  Lock,
  Info,
  Mail,
  MapPin,
  ChevronRight,
  Activity,
  Database,
  Globe,
  UserCheck,
  FileText,
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
        behavior: "smooth",
      });
    }
  };

  const navItems = [
    { id: "verantwortlich", title: "Verantwortliche Stelle", icon: Shield },
    { id: "allgemein", title: "Allgemeine Hinweise", icon: Info },
    { id: "datenerfassung", title: "Datenerfassung", icon: Database },
    { id: "registrierung-kontakt", title: "Registrierung & Kontakt", icon: FileText },
    { id: "kommentare-newsletter", title: "Kommentare & Newsletter", icon: Mail },
    { id: "analyse", title: "Analyse-Tools", icon: Activity },
    { id: "plugins", title: "Plugins & Tools", icon: Globe },
  ];

  return (
    <div className="min-h-screen bg-white text-black font-poppins selection:bg-primary/30">
      <Header />

      <main className="pt-32 pb-24">
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
                  <item.icon
                    className={`w-4 h-4 ${
                      activeSection === item.id
                        ? "text-white"
                        : "text-gray-400 group-hover:text-primary"
                    }`}
                  />
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

          <div className="space-y-24">
            <section id="verantwortlich" className="scroll-mt-32">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-2xl font-bold tracking-tight">
                  Benennung der verantwortlichen Stelle
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="p-8 rounded-3xl bg-gray-50 border border-gray-100">
                  <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-6">
                    Anschrift
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <MapPin className="w-5 h-5 text-primary mt-1" />
                      <div>
                        <p className="font-bold text-gray-900">Ecksolution IT</p>
                        <p className="text-gray-600">Auf dem Esch 15</p>
                        <p className="text-gray-600">49638 Nortrup</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-8 rounded-3xl bg-gray-50 border border-gray-100">
                  <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-6">
                    Kontakt
                  </p>
                  <div className="space-y-4">
                    <a
                      href="mailto:info@ecksolution-it.de"
                      className="flex items-center gap-4 group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-white border border-gray-100 flex items-center justify-center group-hover:border-primary transition-colors">
                        <Mail className="w-5 h-5 text-primary" />
                      </div>
                      <span className="text-gray-600 group-hover:text-black transition-colors">
                        info@ecksolution-it.de
                      </span>
                    </a>
                  </div>
                </div>
              </div>

              <p className="mt-8 text-gray-600 leading-relaxed">
                Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
              </p>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Die verantwortliche Stelle entscheidet allein oder gemeinsam mit anderen
                über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten
                (z.B. Namen, Kontaktdaten o. Ä.).
              </p>
            </section>

            <section id="allgemein" className="scroll-mt-32">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center">
                  <Info className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-2xl font-bold tracking-tight">
                  Allgemeine Hinweise & Pflichtinformationen
                </h2>
              </div>

              <div className="prose prose-slate max-w-none prose-headings:text-gray-900 prose-p:text-gray-600 prose-strong:text-gray-900">
                <h3>Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
                <p>
                  Nur mit Ihrer ausdrücklichen Einwilligung sind einige Vorgänge der
                  Datenverarbeitung möglich. Ein Widerruf Ihrer bereits erteilten
                  Einwilligung ist jederzeit möglich. Für den Widerruf genügt eine
                  formlose Mitteilung per E-Mail. Die Rechtmäßigkeit der bis zum Widerruf
                  erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
                </p>

                <h3>Recht auf Beschwerde bei der zuständigen Aufsichtsbehörde</h3>
                <p>
                  Als Betroffener steht Ihnen im Falle eines datenschutzrechtlichen
                  Verstoßes ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
                  Zuständige Aufsichtsbehörde bezüglich datenschutzrechtlicher Fragen ist
                  der Landesdatenschutzbeauftragte des Bundeslandes, in dem sich der Sitz
                  unseres Unternehmens befindet.
                </p>
                <p>
                  Der folgende Link stellt eine Liste der Datenschutzbeauftragten sowie
                  deren Kontaktdaten bereit:{" "}
                  <a
                    href="https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary no-underline hover:underline"
                  >
                    Liste der Datenschutzbeauftragten
                  </a>
                  .
                </p>

                <h3>Recht auf Datenübertragbarkeit</h3>
                <p>
                  Ihnen steht das Recht zu, Daten, die wir auf Grundlage Ihrer
                  Einwilligung oder in Erfüllung eines Vertrags automatisiert verarbeiten,
                  an sich oder an Dritte aushändigen zu lassen. Die Bereitstellung erfolgt
                  in einem maschinenlesbaren Format. Sofern Sie die direkte Übertragung
                  der Daten an einen anderen Verantwortlichen verlangen, erfolgt dies nur,
                  soweit es technisch machbar ist.
                </p>

                <h3>Recht auf Auskunft, Berichtigung, Sperrung, Löschung</h3>
                <p>
                  Sie haben jederzeit im Rahmen der geltenden gesetzlichen Bestimmungen
                  das Recht auf unentgeltliche Auskunft über Ihre gespeicherten
                  personenbezogenen Daten, Herkunft der Daten, deren Empfänger und den
                  Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung,
                  Sperrung oder Löschung dieser Daten. Diesbezüglich und auch zu weiteren
                  Fragen zum Thema personenbezogene Daten können Sie sich jederzeit über
                  die im Impressum aufgeführten Kontaktmöglichkeiten an uns wenden.
                </p>
              </div>
            </section>

            <section id="datenerfassung" className="scroll-mt-32">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center">
                  <Database className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-2xl font-bold tracking-tight">
                  Datenerfassung auf unserer Website
                </h2>
              </div>

              <div className="prose prose-slate max-w-none prose-headings:text-gray-900 prose-p:text-gray-600">
                <h3>SSL- bzw. TLS-Verschlüsselung</h3>
                <p>
                  Aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher
                  Inhalte, die Sie an uns als Seitenbetreiber senden, nutzt unsere
                  Website eine SSL-bzw. TLS-Verschlüsselung. Damit sind Daten, die Sie
                  über diese Website übermitteln, für Dritte nicht mitlesbar. Sie erkennen
                  eine verschlüsselte Verbindung an der „https://“ Adresszeile Ihres
                  Browsers und am Schloss-Symbol in der Browserzeile.
                </p>

                <h3>Server-Log-Dateien</h3>
                <p>
                  In Server-Log-Dateien erhebt und speichert der Provider der Website
                  automatisch Informationen, die Ihr Browser automatisch an uns
                  übermittelt. Dies sind:
                </p>
                <ul className="grid md:grid-cols-2 gap-2 list-none p-0">
                  {[
                    "Besuchte Seite auf unserer Domain",
                    "Datum und Uhrzeit der Serveranfrage",
                    "Browsertyp und Browserversion",
                    "Verwendetes Betriebssystem",
                    "Referrer URL",
                    "Hostname des zugreifenden Rechners",
                    "IP-Adresse",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-sm text-gray-600 bg-gray-50 px-4 py-2 rounded-lg border border-gray-100"
                    >
                      <ChevronRight className="w-3 h-3 text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-4">
                  Es findet keine Zusammenführung dieser Daten mit anderen Datenquellen
                  statt. Grundlage der Datenverarbeitung bildet Art. 6 Abs. 1 lit. b
                  DSGVO, der die Verarbeitung von Daten zur Erfüllung eines Vertrags oder
                  vorvertraglicher Maßnahmen gestattet.
                </p>

                <h3>Datenübermittlung bei Vertragsschluss für Warenkauf und Warenversand</h3>
                <p>
                  Personenbezogene Daten werden nur an Dritte nur übermittelt, sofern
                  eine Notwendigkeit im Rahmen der Vertragsabwicklung besteht. Dritte
                  können beispielsweise Bezahldienstleister oder Logistikunternehmen
                  sein. Eine weitergehende Übermittlung der Daten findet nicht statt bzw.
                  nur dann, wenn Sie dieser ausdrücklich zugestimmt haben. Grundlage für
                  die Datenverarbeitung ist Art. 6 Abs. 1 lit. b DSGVO, der die
                  Verarbeitung von Daten zur Erfüllung eines Vertrags oder vorvertraglicher
                  Maßnahmen gestattet.
                </p>

                <h3>Cookies</h3>
                <p>
                  Unsere Website verwendet Cookies. Das sind kleine Textdateien, die Ihr
                  Webbrowser auf Ihrem Endgerät speichert. Cookies helfen uns dabei,
                  unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen.
                </p>
                <p>
                  Einige Cookies sind &quot;Session-Cookies.&quot; Solche Cookies werden
                  nach Ende Ihrer Browser-Sitzung von selbst gelöscht. Hingegen bleiben
                  andere Cookies auf Ihrem Endgerät bestehen, bis Sie diese selbst löschen.
                  Solche Cookies helfen uns, Sie bei Rückkehr auf unserer Website
                  wiederzuerkennen.
                </p>
                <p>
                  Mit einem modernen Webbrowser können Sie das Setzen von Cookies
                  überwachen, einschränken oder unterbinden. Viele Webbrowser lassen sich
                  so konfigurieren, dass Cookies mit dem Schließen des Programms von selbst
                  gelöscht werden. Die Deaktivierung von Cookies kann eine eingeschränkte
                  Funktionalität unserer Website zur Folge haben.
                </p>
                <p>
                  Das Setzen von Cookies, die zur Ausübung elektronischer
                  Kommunikationsvorgänge oder der Bereitstellung bestimmter, von Ihnen
                  erwünschter Funktionen (z.B. Warenkorb) notwendig sind, erfolgt auf
                  Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Als Betreiber dieser Website
                  haben wir ein berechtigtes Interesse an der Speicherung von Cookies zur
                  technisch fehlerfreien und reibungslosen Bereitstellung unserer Dienste.
                  Sofern die Setzung anderer Cookies (z.B. für Analyse-Funktionen) erfolgt,
                  werden diese in dieser Datenschutzerklärung separat behandelt.
                </p>
              </div>
            </section>

            <section id="registrierung-kontakt" className="scroll-mt-32">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center">
                  <FileText className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-2xl font-bold tracking-tight">
                  Registrierung und Kontaktformular
                </h2>
              </div>

              <div className="prose prose-slate max-w-none prose-headings:text-gray-900 prose-p:text-gray-600">
                <h3>Registrierung auf dieser Website</h3>
                <p>
                  Zur Nutzung bestimmter Funktionen können Sie sich auf unserer Website
                  registrieren. Die übermittelten Daten dienen ausschließlich zum Zwecke
                  der Nutzung des jeweiligen Angebotes oder Dienstes. Bei der
                  Registrierung abgefragte Pflichtangaben sind vollständig anzugeben.
                  Andernfalls werden wir die Registrierung ablehnen.
                </p>
                <p>
                  Im Falle wichtiger Änderungen, etwa aus technischen Gründen,
                  informieren wir Sie per E-Mail. Die E-Mail wird an die Adresse
                  versendet, die bei der Registrierung angegeben wurde.
                </p>
                <p>
                  Die Verarbeitung der bei der Registrierung eingegebenen Daten erfolgt
                  auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Ein
                  Widerruf Ihrer bereits erteilten Einwilligung ist jederzeit möglich.
                  Für den Widerruf genügt eine formlose Mitteilung per E-Mail. Die
                  Rechtmäßigkeit der bereits erfolgten Datenverarbeitung bleibt vom
                  Widerruf unberührt.
                </p>
                <p>
                  Wir speichern die bei der Registrierung erfassten Daten während des
                  Zeitraums, den Sie auf unserer Website registriert sind. Ihre Daten
                  werden gelöscht, sollten Sie Ihre Registrierung aufheben. Gesetzliche
                  Aufbewahrungsfristen bleiben unberührt.
                </p>

                <h3>Kontaktformular</h3>
                <p>
                  Per Kontaktformular übermittelte Daten werden einschließlich Ihrer
                  Kontaktdaten gespeichert, um Ihre Anfrage bearbeiten zu können oder um
                  für Anschlussfragen bereitzustehen. Eine Weitergabe dieser Daten findet
                  ohne Ihre Einwilligung nicht statt.
                </p>
                <p>
                  Die Verarbeitung der in das Kontaktformular eingegebenen Daten erfolgt
                  ausschließlich auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a
                  DSGVO). Ein Widerruf Ihrer bereits erteilten Einwilligung ist jederzeit
                  möglich. Für den Widerruf genügt eine formlose Mitteilung per E-Mail.
                  Die Rechtmäßigkeit der bis zum Widerruf erfolgten
                  Datenverarbeitungsvorgänge bleibt vom Widerruf unberührt.
                </p>
                <p>
                  Über das Kontaktformular übermittelte Daten verbleiben bei uns, bis Sie
                  uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung
                  widerrufen oder keine Notwendigkeit der Datenspeicherung mehr besteht.
                  Zwingende gesetzliche Bestimmungen - insbesondere Aufbewahrungsfristen -
                  bleiben unberührt.
                </p>
              </div>
            </section>

            <section id="kommentare-newsletter" className="scroll-mt-32">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-2xl font-bold tracking-tight">
                  Kommentare und Newsletter
                </h2>
              </div>

              <div className="prose prose-slate max-w-none prose-headings:text-gray-900 prose-p:text-gray-600">
                <h3>Speicherdauer von Beiträgen und Kommentaren</h3>
                <p>
                  Beiträge und Kommentare sowie damit in Verbindung stehende Daten, wie
                  beispielsweise IP-Adressen, werden gespeichert. Der Inhalt verbleibt auf
                  unserer Website, bis er vollständig gelöscht wurde oder aus rechtlichen
                  Gründen gelöscht werden musste.
                </p>
                <p>
                  Die Speicherung der Beiträge und Kommentare erfolgt auf Grundlage Ihrer
                  Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Ein Widerruf Ihrer bereits
                  erteilten Einwilligung ist jederzeit möglich. Für den Widerruf genügt
                  eine formlose Mitteilung per E-Mail. Die Rechtmäßigkeit bereits
                  erfolgter Datenverarbeitungsvorgänge bleibt vom Widerruf unberührt.
                </p>

                <h3>Abonnieren von Kommentaren</h3>
                <p>
                  Sie können als Nutzer unserer Website nach erfolgter Anmeldung
                  Kommentare abonnieren. Mit einer Bestätigungs-E-Mail prüfen wir, ob Sie
                  der Inhaber der angegebenen E-Mail-Adresse sind. Sie können die
                  Abo-Funktion für Kommentare jederzeit über einen Link, der sich in einer
                  Abo-Mail befindet, abbestellen.
                </p>
                <p>
                  Zur Einrichtung des Abonnements eingegebene Daten werden im Falle der
                  Abmeldung gelöscht. Sollten diese Daten für andere Zwecke und an anderer
                  Stelle an uns übermittelt worden sein, verbleiben diese weiterhin bei
                  uns.
                </p>

                <h3>Newsletter-Daten</h3>
                <p>
                  Zum Versenden unseres Newsletters benötigen wir von Ihnen eine
                  E-Mail-Adresse. Eine Verifizierung der angegebenen E-Mail-Adresse ist
                  notwendig und der Empfang des Newsletters ist einzuwilligen. Ergänzende
                  Daten werden nicht erhoben oder sind freiwillig. Die Verwendung der
                  Daten erfolgt ausschließlich für den Versand des Newsletters.
                </p>
                <p>
                  Die bei der Newsletteranmeldung gemachten Daten werden ausschließlich auf
                  Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) verarbeitet.
                  Ein Widerruf Ihrer bereits erteilten Einwilligung ist jederzeit möglich.
                  Für den Widerruf genügt eine formlose Mitteilung per E-Mail oder Sie
                  melden sich über den &quot;Austragen&quot;-Link im Newsletter ab. Die
                  Rechtmäßigkeit der bereits erfolgten Datenverarbeitungsvorgänge bleibt
                  vom Widerruf unberührt.
                </p>
                <p>
                  Zur Einrichtung des Abonnements eingegebene Daten werden im Falle der
                  Abmeldung gelöscht. Sollten diese Daten für andere Zwecke und an anderer
                  Stelle an uns übermittelt worden sein, verbleiben diese weiterhin bei
                  uns.
                </p>
              </div>
            </section>

            <section id="analyse" className="scroll-mt-32">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center">
                  <Activity className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-2xl font-bold tracking-tight">
                  Analyse-Tools und Werbung
                </h2>
              </div>

              <div className="prose prose-slate max-w-none prose-headings:text-gray-900 prose-p:text-gray-600 prose-strong:text-gray-900">
                <h3>Google Analytics 4</h3>
                <p>
                  Soweit Sie Ihre Einwilligung erklärt haben, wird auf dieser Website
                  Google Analytics 4 eingesetzt, ein Webanalysedienst der Google LLC.
                  Verantwortliche Stelle für Nutzer in der EU/ dem EWR und der Schweiz ist
                  Google Ireland Limited, Google Building Gordon House, 4 Barrow St,
                  Dublin, D04 E5W5, Irland („Google“).
                </p>

                <h3>Art und Zweck der Verarbeitung</h3>
                <p>
                  Google Analytics verwendet Cookies, die eine Analyse der Benutzung
                  unserer Webseiten durch Sie ermöglichen. Die mittels der Cookies
                  erhobenen Informationen über Ihre Benutzung dieser Website werden in der
                  Regel an einen Server von Google in den USA übertragen und dort
                  gespeichert.
                </p>

                <p>
                  [OPTIONAL: Wir nutzen die Funktion User-ID. Mithilfe der User ID können
                  wir einer oder mehreren Sitzungen (und den Aktivitäten innerhalb dieser
                  Sitzungen) eine eindeutige, dauerhafte ID zuweisen und Nutzerverhalten
                  geräteübergreifend analysieren.]
                </p>

                <p>
                  [OPTIONAL: Wir nutzen Google Signale. Damit werden in Google Analytics
                  zusätzliche Informationen zu Nutzern erfasst, die personalisierte
                  Anzeigen aktiviert haben (Interessen und demographische Daten) und
                  Anzeigen können in geräteübergreifenden Remarketing-Kampagnen an diese
                  Nutzer ausgeliefert werden.]
                </p>

                <p>
                  Bei Google Analytics 4 ist die Anonymisierung von IP-Adressen
                  standardmäßig aktiviert. Aufgrund der IP-Anonymisierung wird Ihre
                  IP-Adresse von Google innerhalb von Mitgliedstaaten der Europäischen
                  Union oder in anderen Vertragsstaaten des Abkommens über den Europäischen
                  Wirtschaftsraum gekürzt. Nur in Ausnahmefällen wird die volle IP-Adresse
                  an einen Server von Google in den USA übertragen und dort gekürzt. Die
                  im Rahmen von Google Analytics von Ihrem Browser übermittelte IP-Adresse
                  wird laut Google nicht mit anderen Daten von Google zusammengeführt.
                </p>

                <div className="bg-blue-50 border border-blue-100 p-6 rounded-2xl my-8">
                  <div className="flex items-center gap-2 text-blue-800 font-bold text-sm uppercase tracking-wider mb-4">
                    <UserCheck className="w-4 h-4" />
                    Erfasste Ereignisse
                  </div>
                  <div className="text-blue-900/80 text-sm leading-relaxed space-y-3">
                    <p className="m-0">
                      Während Ihres Website-Besuchs wird Ihr Nutzerverhalten in Form von
                      „Ereignissen“ erfasst. Ereignisse können sein:
                    </p>
                    <ul className="list-disc pl-5 m-0">
                      <li>Seitenaufrufe</li>
                      <li>Erstmaliger Besuch der Website</li>
                      <li>Start der Sitzung</li>
                      <li>Besuchte Webseiten</li>
                      <li>Ihr „Klickpfad“, Interaktion mit der Website</li>
                      <li>Scrolls (immer wenn ein Nutzer bis zum Seitenende (90%) scrollt)</li>
                      <li>Klicks auf externe Links</li>
                      <li>interne Suchanfragen</li>
                      <li>Interaktion mit Videos</li>
                      <li>Dateidownloads</li>
                      <li>gesehene / angeklickte Anzeigen</li>
                      <li>Spracheinstellung</li>
                    </ul>
                  </div>
                </div>

                <h3>Außerdem wird erfasst</h3>
                <ul>
                  <li>Ihr ungefährer Standort (Region)</li>
                  <li>Datum und Uhrzeit des Besuchs</li>
                  <li>Ihre IP-Adresse (in gekürzter Form)</li>
                  <li>
                    technische Informationen zu Ihrem Browser und den von Ihnen genutzten
                    Endgeräten (z.B. Spracheinstellung, Bildschirmauflösung)
                  </li>
                  <li>Ihr Internetanbieter</li>
                  <li>
                    die Referrer-URL (über welche Website/ über welches Werbemittel Sie auf
                    diese Website gekommen sind)
                  </li>
                </ul>

                <h3>Zwecke der Verarbeitung</h3>
                <p>
                  Im Auftrag des Betreibers dieser Website wird Google diese
                  Informationen benutzen, um Ihre [pseudonyme [NICHT BEI NUTZUNG VON
                  USER-ID]] Nutzung der Website auszuwerten und um Reports über die
                  Website-Aktivitäten zusammenzustellen. Die durch Google Analytics
                  bereitgestellten Reports dienen der Analyse der Leistung unserer Website
                  [OPTIONAL: und des Erfolgs unserer Marketing-Kampagnen].
                </p>

                <h3>Empfänger</h3>
                <p>Empfänger der Daten sind/können sein:</p>
                <ul>
                  <li>
                    Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland
                    (als Auftragsverarbeiter nach Art. 28 DSGVO)
                  </li>
                  <li>
                    Google LLC, 1600 Amphitheatre Parkway Mountain View, CA 94043, USA
                  </li>
                  <li>
                    Alphabet Inc., 1600 Amphitheatre Parkway Mountain View, CA 94043, USA
                  </li>
                </ul>

                <h3>Drittlandtransfer</h3>
                <p>
                  Für die USA hat die Europäische Kommission am 10.Juli 2023 ihren
                  Angemessenheitsbeschluss angenommen. Google LLC ist nach dem EU-US
                  Privacy Framework zertifiziert. Da Google-Server weltweit verteilt sind
                  und eine Übertragung in Drittländer (beispielsweise nach Singapur) nicht
                  völlig ausgeschlossen werden kann, haben wir mit dem Anbieter zudem die
                  EU-Standardvertragsklauseln abgeschlossen.
                </p>

                <h3>Speicherdauer</h3>
                <p>
                  Die von uns gesendeten und mit Cookies verknüpften Daten werden nach 2
                  [ODER: 14 Monaten] automatisch gelöscht. Die maximale Lebensdauer der
                  Google Analytics Cookies beträgt 2 Jahre. Die Löschung von Daten, deren
                  Aufbewahrungsdauer erreicht ist, erfolgt automatisch einmal im Monat.
                </p>

                <h3>Rechtsgrundlage</h3>
                <p>
                  Rechtsgrundlage für diese Datenverarbeitung ist Ihre Einwilligung gem.
                  Art.6 Abs.1 S.1 lit.a DSGVO und § 25 Abs. 1 S.1 TTDSG.
                </p>

                <h3>Widerruf</h3>
                <p>
                  Sie können Ihre Einwilligung jederzeit mit Wirkung für die Zukunft
                  widerrufen, indem Sie die Cookie-Einstellungen [HIER DEN LINK ZU DEN
                  EINSTELLUNGSMÖGLICHKEITEN DES CONSENT-TOOLS SETZEN] aufrufen und dort
                  Ihre Auswahl ändern. Die Rechtmäßigkeit der aufgrund der Einwilligung
                  bis zum Widerruf erfolgten Verarbeitung bleibt davon unberührt.
                </p>
                <p>
                  Sie können die Speicherung von Cookies auch von vornherein durch eine
                  entsprechende Einstellung Ihrer Browser-Software verhindern. Wenn Sie
                  Ihren Browser so konfigurieren, dass alle Cookies abgelehnt werden, kann
                  es jedoch zu Einschränkung von Funktionalitäten auf dieser und anderen
                  Websites kommen. Sie können darüber hinaus die Erfassung der durch das
                  Cookie erzeugten und auf Ihre Nutzung der Website bezogenen Daten
                  (inkl. Ihrer IP-Adresse) an Google sowie die Verarbeitung dieser Daten
                  durch Google verhindern, indem Sie
                </p>
                <p>
                  a. Ihre Einwilligung in das Setzen des Cookies nicht erteilen oder
                  <br />
                  b. das Browser-Add-on zur Deaktivierung von Google Analytics HIER
                  herunterladen und installieren.
                </p>
                <p>
                  Nähere Informationen zu Nutzungsbedingungen von Google Analytics und zum
                  Datenschutz bei Google finden Sie unter{" "}
                  <a
                    href="https://marketingplatform.google.com/about/analytics/terms/de/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary no-underline hover:underline"
                  >
                    Google Analytics Nutzungsbedingungen
                  </a>{" "}
                  und unter{" "}
                  <a
                    href="https://policies.google.com/?hl=de"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary no-underline hover:underline"
                  >
                    Google Datenschutz
                  </a>
                  .
                </p>

                <h3>IP-Anonymisierung</h3>
                <p>
                  Wir setzen Google Analytics in Verbindung mit der Funktion
                  IP-Anonymisierung ein. Sie gewährleistet, dass Google Ihre IP-Adresse
                  innerhalb von Mitgliedstaaten der Europäischen Union oder in anderen
                  Vertragsstaaten des Abkommens über den Europäischen Wirtschaftsraum vor
                  der Übermittlung in die USA kürzt. Es kann Ausnahmefälle geben, in
                  denen Google die volle IP-Adresse an einen Server in den USA überträgt
                  und dort kürzt. In unserem Auftrag wird Google diese Informationen
                  benutzen, um Ihre Nutzung der Website auszuwerten, um Reports über
                  Websiteaktivitäten zu erstellen und um weitere mit der Websitenutzung
                  und der Internetnutzung verbundene Dienstleistungen gegenüber uns zu
                  erbringen. Es findet keine Zusammenführung der von Google Analytics
                  übermittelten IP-Adresse mit anderen Daten von Google statt.
                </p>

                <h3>Browser Plugin</h3>
                <p>
                  Das Setzen von Cookies durch Ihren Webbrowser ist verhinderbar. Einige
                  Funktionen unserer Website könnten dadurch jedoch eingeschränkt werden.
                  Ebenso können Sie die Erfassung von Daten bezüglich Ihrer
                  Website-Nutzung einschließlich Ihrer IP-Adresse mitsamt anschließender
                  Verarbeitung durch Google unterbinden.
                </p>
                <p>
                  Dies ist möglich, indem Sie das über folgenden Link erreichbare
                  Browser-Plugin herunterladen und installieren:{" "}
                  <a
                    href="https://tools.google.com/dlpage/gaoptout?hl=de"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary no-underline hover:underline"
                  >
                    Browser-Plugin zur Deaktivierung von Google Analytics
                  </a>
                  .
                </p>

                <h3>Widerspruch gegen die Datenerfassung</h3>
                <p>
                  Sie können die Erfassung Ihrer Daten durch Google Analytics verhindern,
                  indem Sie auf folgenden Link klicken. Es wird ein Opt-Out-Cookie
                  gesetzt, der die Erfassung Ihrer Daten bei zukünftigen Besuchen unserer
                  Website verhindert: Google Analytics deaktivieren.
                </p>
                <p>
                  Einzelheiten zum Umgang mit Nutzerdaten bei Google Analytics finden Sie
                  in der Datenschutzerklärung von Google:{" "}
                  <a
                    href="https://support.google.com/analytics/answer/6004245?hl=de"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary no-underline hover:underline"
                  >
                    Google Analytics Datenschutzerklärung
                  </a>
                  .
                </p>

                <h3>Auftragsverarbeitung</h3>
                <p>
                  Zur vollständigen Erfüllung der gesetzlichen Datenschutzvorgaben haben
                  wir mit Google einen Vertrag über die Auftragsverarbeitung abgeschlossen.
                </p>

                <h3>Demografische Merkmale bei Google Analytics</h3>
                <p>
                  Unsere Website verwendet die Funktion “demografische Merkmale” von
                  Google Analytics. Mit ihr lassen sich Berichte erstellen, die Aussagen
                  zu Alter, Geschlecht und Interessen der Seitenbesucher enthalten. Diese
                  Daten stammen aus interessenbezogener Werbung von Google sowie aus
                  Besucherdaten von Drittanbietern. Eine Zuordnung der Daten zu einer
                  bestimmten Person ist nicht möglich. Sie können diese Funktion jederzeit
                  deaktivieren. Dies ist über die Anzeigeneinstellungen in Ihrem
                  Google-Konto möglich oder indem Sie die Erfassung Ihrer Daten durch
                  Google Analytics, wie im Punkt “Widerspruch gegen die Datenerfassung”
                  erläutert, generell untersagen.
                </p>

                <h3>Amazon Partnerprogramm</h3>
                <p>
                  Als Betreiber dieser Website nehmen wir am Amazon EU-Partnerprogramm
                  teil. Auf unseren Seiten sind Werbeanzeigen von Amazon sowie Links zu
                  Amazon eingebunden, um damit Geld über Werbekostenerstattungen zu
                  verdienen. Es gelangen Amazon-Cookies zum Einsatz, wodurch Amazon
                  erkennt, dass Sie einen Partnerlink auf unserer Website geklickt haben.
                  Die Speicherung von “Amazon-Cookies” erfolgt auf Grundlage von Art. 6
                  lit. f DSGVO. Als Websitebetreiber haben wir hieran ein berechtigtes
                  Interesse, da nur durch die Cookies die Höhe der Werbekostenerstattung
                  feststellbar ist. Einzelheiten zur Datennutzung durch Amazon finden Sie
                  in der Amazon Datenschutzerklärung:{" "}
                  <a
                    href="https://www.amazon.de/gp/help/customer/display.html/ref=footer_privacy?ie=UTF8&nodeId=3312401"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary no-underline hover:underline"
                  >
                    Amazon Datenschutzerklärung
                  </a>
                  .
                </p>

                <h3>Google AdSense</h3>
                <p>
                  Unsere Website verwendet Google AdSense. Anbieter ist die Google Inc.,
                  1600 Amphitheatre Parkway, Mountain View, CA 94043, USA. Google
                  AdSense dient der Einbindung von Werbeanzeigen und setzt Cookies.
                  Cookies sind kleine Textdateien, die Ihr Webbrowser auf Ihrem Endgerät
                  speichert, um die Nutzung der Website analysieren. Google AdSense setzt
                  außerdem Web Beacons ein. Web Beacons sind unsichtbare Grafiken, die
                  eine Analyse des Besucherverkehrs auf unserer Wesite ermöglichen.
                </p>
                <p>
                  Durch Cookies und Web Beacons erzeugten Informationen werden an Server
                  von Google übertragen und dort gespeichert. Serverstandort sind die USA.
                  Google kann diese Informationen an Vertragspartner weiterreichen. Ihre
                  IP-Adresse wird Google jedoch nicht mit anderen von Ihnen gespeicherten
                  Daten zusammenführen.
                </p>
                <p>
                  Die Speicherung von AdSense-Cookies erfolgt auf Grundlage von Art. 6
                  Abs. 1 lit. f DSGVO. Wir als Websitebetreiber haben ein berechtigtes
                  Interesse an der Analyse des Nutzerverhaltens, um unser Webangebot und
                  unsere Werbung zu optimieren. Mit einem modernen Webbrowser können Sie
                  das Setzen von Cookies überwachen, einschränken und unterbinden. Die
                  Deaktivierung von Cookies kann eine eingeschränkte Funktionalität
                  unserer Website zur Folge haben. Durch die Nutzung unserer Website
                  erklären Sie sich mit der Bearbeitung der über Sie erhobenen Daten durch
                  Google in der zuvor beschriebenen Art und Weise sowie dem zuvor
                  benannten Zweck einverstanden.
                </p>

                <h3>Google AdWords und Google Conversion-Tracking</h3>
                <p>
                  Unsere Website verwendet Google AdWords. Anbieter ist die Google Inc.,
                  1600 Amphitheatre Parkway, Mountain View, CA 94043, United States.
                  AdWords ist ein Online-Werbeprogramm. Im Rahmen des
                  Online-Werbeprogramms arbeiten wir mit Conversion-Tracking. Nach einem
                  Klick auf eine von Google geschaltete Anzeige wird ein Cookie für das
                  Conversion-Tracking gesetzt. Cookies sind kleine Textdateien, die Ihr
                  Webbrowser auf Ihrem Endgerät speichert.
                </p>
                <p>
                  Google AdWords Cookies verlieren nach 30 Tagen ihre Gültigkeit und
                  dienen nicht der persönlichen Identifizierung der Nutzer. Am Cookie
                  können Google und wir erkennen, dass Sie auf eine Anzeige geklickt haben
                  und zu unserer Website weitergeleitet wurden. Jeder Google
                  AdWords-Kunde erhält ein anderes Cookie. Die Cookies sind nicht über
                  Websites von AdWords-Kunden nachverfolgbar.
                </p>
                <p>
                  Mit Conversion-Cookies werden Conversion-Statistiken für AdWords-Kunden,
                  die Conversion-Tracking einsetzen, erstellt. Adwords-Kunden erfahren wie
                  viele Nutzer auf ihre Anzeige geklickt haben und auf Seiten mit
                  Conversion-Tracking-Tag weitergeleitet wurden. AdWords-Kunden erhalten
                  jedoch keine Informationen, die eine persönliche Identifikation der
                  Nutzer ermöglichen.
                </p>
                <p>
                  Wenn Sie nicht am Tracking teilnehmen möchten, können Sie einer Nutzung
                  widersprechen. Hier ist das Conversion-Cookie in den Nutzereinstellungen
                  des Browsers zu deaktivieren. So findet auch keine Aufnahme in die
                  Conversion-Tracking Statistiken statt.
                </p>
                <p>
                  Die Speicherung von “Conversion-Cookies” erfolgt auf Grundlage von Art.
                  6 Abs. 1 lit. f DSGVO. Wir als Websitebetreiber haben ein berechtigtes
                  Interesse an der Analyse des Nutzerverhaltens, um unser Webangebot und
                  unsere Werbung zu optimieren. Einzelheiten zu Google AdWords und Google
                  Conversion-Tracking finden Sie in den Datenschutzbestimmungen von
                  Google:{" "}
                  <a
                    href="https://www.google.de/policies/privacy/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary no-underline hover:underline"
                  >
                    Google Datenschutzbestimmungen
                  </a>
                  .
                </p>
                <p>
                  Mit einem modernen Webbrowser können Sie das Setzen von Cookies
                  überwachen, einschränken oder unterbinden. Die Deaktivierung von Cookies
                  kann eine eingeschränkte Funktionalität unserer Website zur Folge haben.
                </p>
              </div>
            </section>

            <section id="plugins" className="scroll-mt-32">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center">
                  <Globe className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-2xl font-bold tracking-tight">
                  Plugins und Tools
                </h2>
              </div>

              <div className="prose prose-slate max-w-none prose-headings:text-gray-900 prose-p:text-gray-600">
                <h3>YouTube</h3>
                <p>
                  Für Integration und Darstellung von Videoinhalten nutzt unsere Website
                  Plugins von YouTube. Anbieter des Videoportals ist die YouTube, LLC, 901
                  Cherry Ave., San Bruno, CA 94066, USA. Bei Aufruf einer Seite mit
                  integriertem YouTube-Plugin wird eine Verbindung zu den Servern von
                  YouTube hergestellt.
                </p>
                <p>
                  YouTube erfährt hierdurch, welche unserer Seiten Sie aufgerufen haben.
                  YouTube kann Ihr Surfverhalten direkt Ihrem persönlichen Profil
                  zuzuordnen, sollten Sie in Ihrem YouTube Konto eingeloggt sein. Durch
                  vorheriges Ausloggen haben Sie die Möglichkeit, dies zu unterbinden.
                </p>
                <p>
                  Die Nutzung von YouTube erfolgt im Interesse einer ansprechenden
                  Darstellung unserer Online-Angebote. Dies stellt ein berechtigtes
                  Interesse im Sinne von Art. 6 Abs. 1 lit. f DSGVO dar. Einzelheiten zum
                  Umgang mit Nutzerdaten finden Sie in der Datenschutzerklärung von
                  YouTube unter:{" "}
                  <a
                    href="https://www.google.de/intl/de/policies/privacy/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary no-underline hover:underline"
                  >
                    YouTube Datenschutzerklärung
                  </a>
                  .
                </p>

                <h3>Vimeo</h3>
                <p>
                  Für Integration und Darstellung von Videoinhalten nutzt unsere Website
                  Plugins von Vimeo. Anbieter des Videoportals ist die Vimeo Inc., 555
                  West 18th Street, New York, New York 10011, USA. Bei Aufruf einer Seite
                  mit integriertem Vimeo-Plugin wird eine Verbindung zu den Servern von
                  Vimeo hergestellt.
                </p>
                <p>
                  Vimeo erfährt hierdurch, welche unserer Seiten Sie aufgerufen haben.
                  Vimeo erfährt Ihre IP-Adresse, selbst wenn Sie nicht beim Videoportal
                  eingeloggt sind oder dort kein Konto besitzen. Es erfolgt eine
                  Übermittlung der von Vimeo erfassten Informationen an Server des
                  Videoportals in den USA.
                </p>
                <p>
                  Vimeo kann Ihr Surfverhalten direkt Ihrem persönlichen Profil zuordnen.
                  Durch vorheriges Ausloggen haben Sie die Möglichkeit, dies zu
                  unterbinden. Einzelheiten zum Umgang mit Nutzerdaten finden Sie in der
                  Datenschutzerklärung von Vimeo unter:{" "}
                  <a
                    href="https://vimeo.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary no-underline hover:underline"
                  >
                    Vimeo Datenschutzerklärung
                  </a>
                  .
                </p>

                <h3>Google Web Fonts</h3>
                <p>
                  Unsere Website verwendet Web Fonts von Google. Anbieter ist die Google
                  Inc., 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA. Durch
                  den Einsatz dieser Web Fonts wird es möglich Ihnen die von uns gewünschte
                  Darstellung unserer Website zu präsentieren, unabhängig davon welche
                  Schriften Ihnen lokal zur Verfügung stehen.
                </p>
                <p>
                  Dies erfolgt über den Abruf der Google Web Fonts von einem Server von
                  Google in den USA und der damit verbundenen Weitergabe Ihre Daten an
                  Google. Dabei handelt es sich um Ihre IP-Adresse und welche Seite Sie bei
                  uns besucht haben. Der Einsatz von Google Web Fonts erfolgt auf Grundlage
                  von Art. 6 Abs. 1 lit. f DSGVO. Als Betreiber dieser Website haben wir
                  ein berechtigtes Interesse an der optimalen Darstellung und Übertragung
                  unseres Webauftritts.
                </p>
                <p>
                  Das Unternehmen Google ist für das us-europäische
                  Datenschutzübereinkommen &quot;Privacy Shield&quot; zertifiziert. Dieses
                  Datenschutzübereinkommen soll die Einhaltung des in der EU geltenden
                  Datenschutzniveaus gewährleisten.
                </p>
                <p>
                  Einzelheiten über Google Web Fonts finden Sie unter:{" "}
                  <a
                    href="https://www.google.com/fonts#AboutPlace:about"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary no-underline hover:underline"
                  >
                    Google Fonts Informationen
                  </a>{" "}
                  und weitere Informationen in den Datenschutzbestimmungen von Google:{" "}
                  <a
                    href="https://policies.google.com/privacy/partners?hl=de"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary no-underline hover:underline"
                  >
                    Google Datenschutzbestimmungen
                  </a>
                  .
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