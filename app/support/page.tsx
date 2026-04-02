import { getMetadata } from "@/lib/seo";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Monitor, Layout, ArrowRight, Download, ExternalLink } from "lucide-react";

export const metadata = getMetadata({
  title: "Support & Kundenportal",
  description: "Hier finden Sie unsere Fernwartungs-Tools und den Zugang zum Kundenportal für schnellen IT-Support und Service-Anfragen.",
  canonical: "/support",
});

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-white text-black font-poppins selection:bg-primary/30">
      <Header />
      
      <main className="pt-32 md:pt-40 pb-24 px-6">
        <div className="max-w-[1000px] mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-[1.1]">
              Support & Services
            </h1>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
              Schnelle Hilfe und direkter Zugang zu Ihren IT-Services. Wählen Sie den gewünschten Bereich aus.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Fernwartung Section */}
            <section className="bg-gray-50 border border-gray-100 rounded-3xl p-10 flex flex-col items-start hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-8">
                <Monitor className="w-7 h-7 text-primary" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Fernwartung</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-10 flex-grow">
                Wenn wir Sie zur Fernwartung auffordern, können Sie hier das Support-Tool herunterladen und die Verbindung starten.
              </p>
              <a 
                href="https://gw52.pcvisit.de/v1/hosted/jumplink?productid=18&func=download&productrole=guestSetup&host=gw52.pcvisit.de&companyid=3978521533&gateway=lb3.pcvisit.de"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-white rounded-xl font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/10 active:scale-[0.98] w-full justify-center md:w-auto"
              >
                Fernwartung herunterladen
                <Download className="w-5 h-5" />
              </a>
            </section>

            {/* Kundenportal Section */}
            <section className="bg-gray-50 border border-gray-100 rounded-3xl p-10 flex flex-col items-start hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-8">
                <Layout className="w-7 h-7 text-primary" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Kundenportal</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-10 flex-grow">
                Bestehende Kunden erreichen hier ihr Portal für Anfragen, Services und weitere Informationen.
              </p>
              <a 
                href="https://marketplace.ecksolution-it.de/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-black text-white rounded-xl font-bold hover:bg-gray-900 transition-all shadow-lg shadow-black/10 active:scale-[0.98] w-full justify-center md:w-auto"
              >
                Zum Kundenportal
                <ExternalLink className="w-5 h-5" />
              </a>
            </section>
          </div>

          <div className="mt-24 p-10 rounded-3xl border border-gray-100 bg-white text-center shadow-sm">
            <h3 className="text-2xl font-bold mb-4">Benötigen Sie anderweitig Hilfe?</h3>
            <p className="text-gray-700 mb-8 max-w-xl mx-auto">
              Unser Team steht Ihnen auch telefonisch oder per E-Mail zur Verfügung, um Ihre Fragen schnellstmöglich zu klären.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+4917634580607" className="text-primary font-bold hover:underline">Telefonischer Support</a>
              <span className="hidden sm:inline text-gray-300">|</span>
              <a href="mailto:info@ecksolution-it.de" className="text-primary font-bold hover:underline">E-Mail schreiben</a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
