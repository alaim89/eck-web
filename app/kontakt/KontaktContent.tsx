import { Mail, Phone, Calendar, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";

export default function KontaktContent() {
  return (
    <div className="min-h-screen bg-white text-black font-poppins selection:bg-primary/30">
      <Header />
      
      <main className="pt-48 pb-32 px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-24">
            
            {/* Left: Info & Direct Contact */}
            <div>
              <div className="mb-16">
                <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-8 leading-[1.1]">Lassen Sie uns über Ihre IT sprechen.</h1>
                <p className="text-xl text-gray-600 leading-relaxed opacity-90 max-w-lg">
                  Egal ob akute Projekt-Rettung oder langfristige Strategie-Begleitung - wir finden den richtigen Weg für Ihre Infrastruktur.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex items-start gap-6 p-8 rounded-3xl bg-gray-50 border border-gray-100 hover:border-primary/20 transition-all group">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">E-Mail</div>
                    <a href="mailto:info@ecksolution-it.de" className="text-xl font-bold text-black hover:text-primary transition-colors">info@ecksolution-it.de</a>
                  </div>
                </div>

                <div className="flex items-start gap-6 p-8 rounded-3xl bg-gray-50 border border-gray-100 hover:border-primary/20 transition-all group">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Telefon</div>
                    <a href="tel:+4917634580607" className="text-xl font-bold text-black hover:text-primary transition-colors">+49 176 34580607</a>
                  </div>
                </div>

                <div className="p-8 rounded-3xl bg-gradient-to-br from-emerald-600 to-teal-700 text-white relative overflow-hidden group shadow-xl shadow-emerald-900/10">
                  {/* Subtle Glow Effects */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-white/30 transition-colors duration-500" />
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-emerald-400/20 rounded-full blur-2xl -ml-12 -mb-12" />
                  
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center mb-6 border border-white/20">
                      <Calendar className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">Direkte Terminbuchung</h3>
                    <p className="text-white/80 mb-8 leading-relaxed">Wählen Sie direkt einen passenden Termin für ein 15-minütiges Erstgespräch via Microsoft Bookings.</p>
                    <Link 
                      href="https://outlook.office.com/book/EcksolutionITService@ecksolution-it.de/?ismsaljsauthenabled"
                      target="_blank"
                      className="inline-flex items-center gap-2 bg-white text-emerald-700 px-6 py-3 rounded-xl font-bold hover:bg-emerald-50 transition-all shadow-lg hover:-translate-y-0.5 active:scale-[0.98]"
                    >
                      Erstgespräch sichern <ArrowRight className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Qualification Form */}
            <div className="bg-white p-10 md:p-12 rounded-[3rem] border border-gray-100 shadow-2xl shadow-gray-100/50">
              <ContactForm />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
