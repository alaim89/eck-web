import { Mail, Phone, MessageSquare, Calendar, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function KontaktPage() {
  return (
    <div className="min-h-screen bg-white text-black font-poppins selection:bg-primary/30">
      {/* Navigation */}
      <Header />
      
      <main className="pt-40 pb-24 px-6">
        <div className="max-w-[800px] mx-auto">
          {/* Einleitung */}
          <header className="mb-16">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Kontakt</h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Haben Sie Fragen zu unseren IT-Services oder benötigen Sie Unterstützung? 
              Wir freuen uns darauf, von Ihnen zu hören und gemeinsam die beste Lösung für Ihre IT-Infrastruktur zu finden.
            </p>
          </header>

          <div className="grid gap-8">
            {/* E-Mail Kontakt */}
            <section className="p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:border-primary/20 transition-all group">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-xl font-bold mb-2">E-Mail</h2>
                  <p className="text-gray-600 mb-4">Schreiben Sie uns Ihr Anliegen jederzeit per E-Mail. Wir antworten in der Regel innerhalb von 24 Stunden.</p>
                  <a 
                    href="mailto:info@ecksolution-it.de" 
                    className="text-lg font-semibold text-primary hover:underline"
                  >
                    info@ecksolution-it.de
                  </a>
                </div>
              </div>
            </section>

            {/* Telefon & WhatsApp */}
            <section className="p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:border-primary/20 transition-all">
              <div className="flex flex-col md:flex-row gap-12">
                <div className="flex items-start gap-6 flex-1">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold mb-2">Telefon</h2>
                    <p className="text-gray-600 mb-4">Direkter Draht für Ihre Fragen.</p>
                    <a 
                      href="tel:+4917634580607" 
                      className="text-lg font-semibold text-primary hover:underline"
                    >
                      +49 176 34580607
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-6 flex-1">
                  <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center shrink-0">
                    <MessageSquare className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold mb-2">WhatsApp</h2>
                    <p className="text-gray-600 mb-4">Schnelle Nachricht zwischendurch.</p>
                    <a 
                      href="https://wa.me/4917634580607" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg font-semibold text-green-600 hover:underline"
                    >
                      Nachricht senden
                    </a>
                  </div>
                </div>
              </div>
            </section>

            {/* Terminbuchung (Microsoft Bookings) */}
            <section className="p-8 rounded-2xl bg-black text-white border border-white/10 shadow-2xl shadow-black/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -mr-16 -mt-16" />
              
              <div className="flex items-start gap-6 relative z-10">
                <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center shrink-0">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-bold mb-2">Online-Terminbuchung</h2>
                  <p className="text-white/70 mb-8">
                    Wählen Sie direkt einen passenden Termin für ein Erstgespräch aus. 
                    Unkompliziert und effizient über Microsoft Bookings.
                  </p>
                  
                  <Link 
                    href="https://outlook.office.com/book/EcksolutionITService@ecksolution-it.de/?ismsaljsauthenabled"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-8 py-4 bg-primary hover:bg-primary/90 text-white rounded-xl font-bold transition-all active:scale-[0.98] shadow-lg shadow-primary/20"
                  >
                    Termin jetzt buchen <ArrowRight className="w-5 h-5" />
                  </Link>
                  
                  <p className="mt-8 text-xs text-white/40 italic">
                    Hinweis: Sie werden zur Terminbuchung auf einen externen Microsoft-Dienst weitergeleitet.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
