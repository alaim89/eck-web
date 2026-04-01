'use client';

import { motion } from "motion/react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { 
  Building2, User, Mail, MapPin, ChevronRight,
  Scale, ShieldCheck, Info, MessageSquare,
  Globe, AlertCircle, FileText
} from "lucide-react";
import { useState, useEffect } from "react";

export default function ImpressumClient() {
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
    { id: "anbieter", title: "Anbieter & Vertretung", icon: Building2 },
    { id: "kontakt", title: "Kontakt", icon: Mail },
    { id: "rechtliches", title: "Rechtliche Angaben", icon: Scale },
    { id: "verantwortlichkeit", title: "Verantwortlichkeit", icon: User },
    { id: "haftung", title: "Haftungshinweise", icon: AlertCircle },
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
                <Scale className="w-4 h-4 text-primary" />
                Rechtliche Informationen
              </div>
              <h1 className="text-5xl md:text-6xl font-bold tracking-tighter mb-6">
                Impressum<span className="text-gray-400">.</span>
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
                Angaben gemäß § 5 DDG. Hier finden Sie alle gesetzlich erforderlichen Informationen über den Betreiber dieser Website.
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
                  Support
                </p>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  Haben Sie technische Fragen oder benötigen Sie Unterstützung?
                </p>
                <Link 
                  href="/#contact"
                  className="text-sm font-semibold text-primary flex items-center gap-2 hover:gap-3 transition-all"
                >
                  Zum Kontakt <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </aside>

          {/* Content */}
          <div className="space-y-24">
            {/* Provider Section */}
            <section id="anbieter" className="scroll-mt-32">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-2xl font-bold tracking-tight">Anbieter & Vertretung</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="p-8 rounded-3xl bg-gray-50 border border-gray-100">
                  <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-6">Anschrift</p>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <MapPin className="w-5 h-5 text-primary mt-1" />
                      <div>
                        <p className="font-bold text-gray-900">Ecksolution IT</p>
                        <p className="text-gray-600">Andreas Eckert</p>
                        <p className="text-gray-600">Auf dem Esch 15</p>
                        <p className="text-gray-600">49638 Nortrup</p>
                        <p className="text-gray-600">Deutschland</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-8 rounded-3xl bg-gray-50 border border-gray-100">
                  <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-6">Vertretung</p>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-white border border-gray-100 flex items-center justify-center">
                        <User className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 uppercase tracking-widest font-bold">Inhaber</p>
                        <p className="font-bold text-gray-900">Andreas Eckert</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Contact Section */}
            <section id="kontakt" className="scroll-mt-32">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-2xl font-bold tracking-tight">Kontaktmöglichkeiten</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <a href="mailto:info@ecksolution-it.de" className="p-8 rounded-3xl bg-gray-50 border border-gray-100 hover:border-primary transition-all group">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white border border-gray-100 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all">
                      <Mail className="w-6 h-6 text-primary group-hover:text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-widest font-bold">E-Mail</p>
                      <p className="font-bold text-gray-900">info@ecksolution-it.de</p>
                    </div>
                  </div>
                </a>

                <div className="p-8 rounded-3xl bg-gray-50 border border-gray-100">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white border border-gray-100 flex items-center justify-center">
                      <MessageSquare className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-widest font-bold">WhatsApp</p>
                      <p className="text-gray-500 italic">+49176 34580607</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Legal Info Section */}
            <section id="rechtliches" className="scroll-mt-32">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-2xl font-bold tracking-tight">Rechtliche Angaben</h2>
              </div>

              <div className="space-y-8">
                <div className="p-8 rounded-3xl bg-gray-50 border border-gray-100">
                  <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">Umsatzsteuer-ID</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:
                  </p>
                  <p className="text-2xl font-mono font-bold text-primary mt-2">DE368783313</p>
                </div>

                <div className="p-8 rounded-3xl bg-gray-50 border border-gray-100">
                  <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">Berufshaftpflichtversicherung</h3>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <p className="font-bold text-gray-900">Markel Insurance SE</p>
                      <p className="text-gray-600">Sophienstraße 26</p>
                      <p className="text-gray-600">80333 München</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-widest font-bold mb-2">Geltungsbereich</p>
                      <p className="text-gray-600 italic">Weltweit (außer USA/Kanada)</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Responsibility Section */}
            <section id="verantwortlichkeit" className="scroll-mt-32">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center">
                  <User className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-2xl font-bold tracking-tight">Verantwortlichkeit</h2>
              </div>

              <div className="space-y-8">
                <div className="p-8 rounded-3xl bg-gray-50 border border-gray-100">
                  <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">Inhaltlich verantwortlich gemäß § 18 Abs. 2 MStV</h3>
                  <p className="font-bold text-gray-900">Andreas Eckert</p>
                  <p className="text-gray-600">Auf dem Esch 15</p>
                  <p className="text-gray-600">49638 Nortrup</p>
                </div>

                <div className="p-8 rounded-3xl bg-gray-50 border border-gray-100">
                  <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">Streitbeilegung</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Wir sind nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
                  </p>
                </div>

                <div className="p-8 rounded-3xl bg-gray-50 border border-gray-100">
                  <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">Onlinepräsenzen</h3>
                  <p className="text-gray-600 mb-4">Dieses Impressum gilt auch für folgende Onlinepräsenzen:</p>
                  <div className="flex flex-wrap gap-4">
                    <span className="px-4 py-2 rounded-lg bg-white border border-gray-100 text-sm font-medium text-gray-700">https://www.freelancermap.de/profil/systems-engineer-244881</span>
                    <span className="px-4 py-2 rounded-lg bg-white border border-gray-100 text-sm font-medium text-gray-700">https://www.freelance.de/freelancer/EcksolutionIT</span>
                    <span className="px-4 py-2 rounded-lg bg-white border border-gray-100 text-sm font-medium text-gray-700">https://www.linkedin.com/company/ecksolution-it</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Liability Section */}
            <section id="haftung" className="scroll-mt-32">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center">
                  <AlertCircle className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-2xl font-bold tracking-tight">Haftungs- & Schutzrechtshinweise</h2>
              </div>

              <div className="prose prose-slate max-w-none prose-p:text-gray-600 prose-p:leading-relaxed">
                <p>
                  Die Inhalte dieser Website wurden mit größtmöglicher Sorgfalt erstellt. Eine Gewähr für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte wird jedoch nicht übernommen.
                </p>
                <p>
                  Alle auf dieser Website veröffentlichten Inhalte, insbesondere Texte, Bilder, Grafiken, Logos und Gestaltungselemente, sind urheberrechtlich oder durch sonstige Schutzrechte geschützt. Jede Verwendung außerhalb der gesetzlich zulässigen Grenzen bedarf der vorherigen Zustimmung des jeweiligen Rechteinhabers.
                </p>
                <p>
                  Sollten Sie auf Rechtsverstöße aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden rechtswidriger Inhalte werden wir diese unverzüglich entfernen.
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
