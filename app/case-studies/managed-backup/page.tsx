import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArrowLeft, Building2, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function CaseStudyManagedBackup() {
  return (
    <div className="min-h-screen bg-white text-black font-poppins selection:bg-primary/30">
      <Header />
      
      <main className="pt-40 pb-32 px-6">
        <div className="max-w-[1000px] mx-auto">
          <Link href="/case-studies" className="inline-flex items-center gap-2 text-primary font-semibold mb-12 hover:gap-3 transition-all">
            <ArrowLeft className="w-4 h-4" /> Back to Case Studies
          </Link>

          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Building2 className="w-6 h-6 text-primary" />
              </div>
              <span className="text-gray-700 font-medium">Law Firm (15–30 employees)</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter leading-[1.1] mb-8 text-black">
              Bulletproof Backup for a Law Firm
            </h1>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-12">
              <section>
                <h2 className="text-2xl font-bold mb-4 text-black">Situation</h2>
                <p className="text-gray-700 leading-relaxed text-lg">
                  The firm relied on external hard drives for backups, which were inconsistent and not off-site. This left them vulnerable to physical theft, hardware failure, and cyberattacks.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-black text-destructive">Problem</h2>
                <ul className="space-y-4">
                  <li className="flex gap-3 text-gray-700 leading-relaxed text-lg">
                    <span className="text-destructive font-bold">•</span>
                    A ransomware attack encrypted the local server.
                  </li>
                  <li className="flex gap-3 text-gray-700 leading-relaxed text-lg">
                    <span className="text-destructive font-bold">•</span>
                    The connected backup drive was also encrypted.
                  </li>
                  <li className="flex gap-3 text-gray-700 leading-relaxed text-lg">
                    <span className="text-destructive font-bold">•</span>
                    Critical client case files were inaccessible.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-black">Decision Point</h2>
                <p className="text-gray-700 leading-relaxed text-lg italic border-l-4 border-primary pl-6 py-2">
                  &quot;The firm faced permanent loss of years of client case files, making it clear that a managed backup solution was essential for survival.&quot;
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-black">Solution</h2>
                <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 space-y-4">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Ecksolution-IT implemented a Managed Backup solution with immutable cloud storage and 15-minute recovery snapshots.
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Immutable cloud backup storage",
                      "15-minute recovery snapshots",
                      "Off-site data replication",
                      "Regular disaster recovery testing"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-gray-700">
                        <CheckCircle2 className="w-5 h-5 text-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-black text-primary">Result</h2>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="p-6 rounded-2xl bg-primary/5 border border-primary/10">
                    <p className="text-3xl font-bold text-primary mb-1">2 Hours</p>
                    <p className="text-sm text-gray-700 uppercase tracking-wider font-semibold">Full Recovery Time</p>
                  </div>
                  <div className="p-6 rounded-2xl bg-primary/5 border border-primary/10">
                    <p className="text-3xl font-bold text-primary mb-1">Zero</p>
                    <p className="text-sm text-gray-700 uppercase tracking-wider font-semibold">Data Loss</p>
                  </div>
                </div>
                <p className="mt-6 text-gray-700 leading-relaxed text-lg">
                  The firm recovered all data within 2 hours, ensuring zero data loss and ongoing peace of mind for their clients.
                </p>
              </section>
            </div>

            <div className="space-y-8">
              <div className="p-8 rounded-3xl bg-black text-white">
                <h3 className="text-xl font-bold mb-4">Need similar results?</h3>
                <p className="text-gray-400 mb-6">
                  Let&apos;s discuss how our Managed Backup services can protect your business.
                </p>
                <Link href="/contact" className="block w-full py-4 bg-primary text-white text-center rounded-xl font-bold hover:bg-primary/90 transition-colors">
                  Book a Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
