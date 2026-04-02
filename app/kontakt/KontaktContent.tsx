'use client';

import { motion } from "motion/react";
import { Mail, Phone, MessageSquare, Calendar, ArrowRight, CheckCircle2, Building2, Users, MessageCircle } from "lucide-react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useState } from "react";

export default function KontaktContent() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    
    // Conversion Tracking (Mock)
    console.log("Conversion Event: Contact Form Submitted");
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'conversion', {
        'send_to': 'AW-CONVERSION_ID/LABEL',
        'value': 1.0,
        'currency': 'EUR'
      });
      
      (window as any).gtag("event", "generate_lead", {
        event_category: "Kontakt",
        event_label: "Formular abgeschickt"
      });
    }

    // Simulate API call
    setTimeout(() => setFormState('success'), 1500);
  };

  return (
    <div className="min-h-screen bg-white text-black font-poppins selection:bg-primary/30">
      <Header />
      
      <main className="pt-48 pb-32 px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-24">
            
            {/* Left: Info & Direct Contact */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-16"
              >
                <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-8 leading-[1.1]">Lassen Sie uns über Ihre IT sprechen.</h1>
                <p className="text-xl text-gray-600 leading-relaxed opacity-90 max-w-lg">
                  Egal ob akute Projekt-Rettung oder langfristige Strategie-Begleitung - wir finden den richtigen Weg für Ihre Infrastruktur.
                </p>
              </motion.div>

              <div className="space-y-8">
                <motion.div 
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                  className="flex items-start gap-6 p-8 rounded-3xl bg-gray-50 border border-gray-100 hover:border-primary/20 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">E-Mail</div>
                    <a href="mailto:info@ecksolution-it.de" className="text-xl font-bold text-black hover:text-primary transition-colors">info@ecksolution-it.de</a>
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="flex items-start gap-6 p-8 rounded-3xl bg-gray-50 border border-gray-100 hover:border-primary/20 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Telefon</div>
                    <a href="tel:+4917634580607" className="text-xl font-bold text-black hover:text-primary transition-colors">+49 176 34580607</a>
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="p-8 rounded-3xl bg-black text-white relative overflow-hidden group"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl -mr-16 -mt-16" />
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center mb-6">
                      <Calendar className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">Direkte Terminbuchung</h3>
                    <p className="text-white/60 mb-8 leading-relaxed">Wählen Sie direkt einen passenden Termin für ein 15-minütiges Erstgespräch via Microsoft Bookings.</p>
                    <Link 
                      href="https://outlook.office.com/book/EcksolutionITService@ecksolution-it.de/?ismsaljsauthenabled"
                      target="_blank"
                      className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all"
                    >
                      Erstgespräch sichern <ArrowRight className="w-5 h-5" />
                    </Link>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Right: Qualification Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white p-10 md:p-12 rounded-[3rem] border border-gray-100 shadow-2xl shadow-gray-100/50"
            >
              {formState === 'success' ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-20">
                  <div className="w-20 h-20 rounded-full bg-green-50 flex items-center justify-center mb-8">
                    <CheckCircle2 className="w-10 h-10 text-green-500" />
                  </div>
                  <h2 className="text-3xl font-bold mb-4">Anfrage gesendet!</h2>
                  <p className="text-gray-600 mb-8">Vielen Dank für Ihr Vertrauen. Wir melden uns innerhalb der nächsten 24 Stunden bei Ihnen.</p>
                  <button 
                    onClick={() => setFormState('idle')}
                    className="text-primary font-bold hover:underline"
                  >
                    Weitere Nachricht senden
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Name</label>
                      <input 
                        type="text" 
                        required
                        placeholder="Max Mustermann"
                        className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all outline-none"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">E-Mail</label>
                      <input 
                        type="email" 
                        required
                        placeholder="max@unternehmen.de"
                        className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all outline-none"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Unternehmen</label>
                    <div className="relative">
                      <Building2 className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input 
                        type="text" 
                        placeholder="Muster GmbH"
                        className="w-full pl-14 pr-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all outline-none"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Mitarbeiteranzahl</label>
                    <div className="relative">
                      <Users className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <select className="w-full pl-14 pr-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all outline-none appearance-none">
                        <option>1-10 Mitarbeiter</option>
                        <option>11-50 Mitarbeiter</option>
                        <option>51-250 Mitarbeiter</option>
                        <option>250+ Mitarbeiter</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Ihr Anliegen</label>
                    <div className="relative">
                      <MessageCircle className="absolute left-6 top-6 w-5 h-5 text-gray-400" />
                      <textarea 
                        rows={4}
                        placeholder="Beschreiben Sie kurz Ihre aktuelle IT-Herausforderung (z. B. Ausfälle, Migration, Sicherheit)..."
                        className="w-full pl-14 pr-6 py-6 rounded-2xl bg-gray-50 border border-gray-100 focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all outline-none resize-none"
                      />
                    </div>
                  </div>

                  <button 
                    type="submit"
                    disabled={formState === 'submitting'}
                    onClick={() => {
                      if (typeof window !== "undefined" && (window as any).gtag) {
                        (window as any).gtag("event", "click", {
                          event_category: "CTA",
                          event_label: "Kontaktformular Button"
                        });
                      }
                    }}
                    className="w-full py-5 bg-primary hover:bg-primary/90 text-white rounded-2xl font-bold text-lg transition-all shadow-xl shadow-primary/20 active:scale-[0.99] disabled:opacity-70 flex items-center justify-center gap-3"
                  >
                    {formState === 'submitting' ? (
                      <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>Kostenlose IT-Einschätzung anfordern <ArrowRight className="w-5 h-5" /></>
                    )}
                  </button>
                  
                  <div className="text-center text-xs text-gray-400 space-y-1">
                    <p>• Antwort innerhalb von 24h</p>
                    <p>• 100% unverbindlich</p>
                    <p>• Keine Weitergabe Ihrer Daten</p>
                    <p>
                      Mit dem Absenden akzeptieren Sie unsere{" "}
                      <Link href="/datenschutz" className="underline hover:text-primary">
                        Datenschutzerklärung
                      </Link>
                    </p>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
