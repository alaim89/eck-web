'use client';

import { motion } from "motion/react";
import { 
  ArrowRight, ShieldAlert, Clock, 
  CheckCircle2, Zap, Lock, TrendingDown, 
  Building2, Activity, Cpu, ShieldCheck 
} from "lucide-react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CaseStudyCarousel } from "@/components/CaseStudyCarousel";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-black font-poppins selection:bg-primary/30">
      {/* Navigation */}
      <Header />

      {/* Hero Section */}
      <section className="pt-48 pb-32 px-6">
        <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-50 text-gray-700 text-xs font-semibold uppercase tracking-wider mb-8">
              <Building2 className="w-4 h-4 text-primary" />
              For Teams of 10–500
            </div>
            <h1 className="text-6xl md:text-7xl font-bold tracking-tighter leading-[1.05] mb-8 text-black">
              Stop managing <br />
              <span className="text-gray-500">IT chaos.</span>
            </h1>
            <p className="text-lg text-gray-700 mb-12 max-w-md leading-relaxed">
              We are your entire IT department. Full accountability for your infrastructure, security, and support. 
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-primary hover:bg-primary/90 text-white rounded-xl font-medium flex items-center justify-center gap-2 transition-all shadow-sm">
                Schedule Audit <ArrowRight className="w-5 h-5" />
              </button>
              <div className="flex items-center justify-center gap-3 px-6 py-4 rounded-xl text-sm text-gray-700 bg-gray-50">
                <Clock className="w-5 h-5 text-primary" />
                15-Min Response
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="aspect-square rounded-2xl bg-white shadow-[0_8px_30px_rgb(0,0,0,0.06)] p-10 flex flex-col justify-between border border-gray-100/50">
              <div className="flex items-center justify-between pb-8 border-b border-gray-100">
                <div>
                  <div className="text-sm text-gray-600 mb-2 font-medium uppercase tracking-wider">System Status</div>
                  <div className="text-3xl font-mono text-black flex items-center gap-3 font-semibold">
                    <div className="w-3 h-3 rounded-full bg-primary" />
                    99.999%
                  </div>
                </div>
                <ShieldCheck className="w-10 h-10 text-primary" />
              </div>
              
              <div className="space-y-4">
                {[
                  { label: "Threats Blocked", value: "2,405", icon: Lock },
                  { label: "Avg Response", value: "4m 12s", icon: Zap },
                  { label: "Health Score", value: "Optimal", icon: Activity },
                ].map((stat, i) => (
                  <div key={i} className="flex items-center justify-between p-5 rounded-xl bg-gray-50/80">
                    <div className="flex items-center gap-4">
                      <stat.icon className="w-5 h-5 text-primary" />
                      <span className="text-gray-700 font-medium">{stat.label}</span>
                    </div>
                    <span className="font-mono font-semibold text-black">{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tension & Risk Section */}
      <section id="problem" className="py-32 bg-gray-50/50">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="max-w-2xl mb-20">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-black">Bad IT bleeds margins.</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              When technology fails, business stops. The hidden costs of reactive support destroy growth.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: TrendingDown,
                title: "Downtime Costs",
                desc: "Every hour your team can't work costs thousands in lost productivity."
              },
              {
                icon: ShieldAlert,
                title: "Security Risks",
                desc: "Ransomware targets mid-market companies lacking enterprise protection."
              },
              {
                icon: Cpu,
                title: "Stunted Growth",
                desc: "Patchwork systems and constant firefighting prevent efficient scaling."
              }
            ].map((risk, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-10 rounded-2xl bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
              >
                <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center mb-8">
                  <risk.icon className="w-6 h-6 text-black" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-black">{risk.title}</h3>
                <p className="text-gray-700 leading-relaxed">{risk.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Authority & Differentiation */}
      <section id="solution" className="py-32 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8 text-black">
                8+ Years of Excellence.
              </h2>
              <p className="text-gray-700 text-lg mb-12 leading-relaxed max-w-md">
                We&apos;ve executed hundreds of migrations. We don&apos;t just reset passwords; we architect reliability.
              </p>
              
              <div className="space-y-8">
                {[
                  { title: "Full Accountability", desc: "No vendor finger-pointing. We own the entire stack." },
                  { title: "Proactive Architecture", desc: "We fix problems before they cause downtime." },
                  { title: "Enterprise Security", desc: "Bank-grade security scaled for mid-market companies." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-5">
                    <div className="mt-1">
                      <CheckCircle2 className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2 text-black">{item.title}</h4>
                      <p className="text-gray-700">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6 mt-12">
                <div className="p-10 rounded-2xl bg-gray-50">
                  <div className="text-5xl font-bold text-black mb-3">100%</div>
                  <div className="text-sm text-gray-700 font-medium uppercase tracking-wider">Accountability</div>
                </div>
                <div className="p-10 rounded-2xl bg-primary shadow-lg shadow-primary/20">
                  <div className="text-5xl font-bold text-white mb-3">15m</div>
                  <div className="text-sm text-white/90 font-medium uppercase tracking-wider">Response</div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="p-10 rounded-2xl bg-gray-50">
                  <div className="text-5xl font-bold text-black mb-3">8+</div>
                  <div className="text-sm text-gray-700 font-medium uppercase tracking-wider">Years Exp.</div>
                </div>
                <div className="p-10 rounded-2xl bg-gray-50">
                  <div className="text-5xl font-bold text-black mb-3">24/7</div>
                  <div className="text-sm text-gray-700 font-medium uppercase tracking-wider">Monitoring</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Carousel */}
      <section className="py-32 px-6 bg-white border-t border-gray-50 overflow-hidden">
        <div className="max-w-[1200px] mx-auto">
          <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-black">Real Results.</h2>
              <p className="text-gray-600 text-lg">
                How we&apos;ve helped companies eliminate IT chaos and scale securely.
              </p>
            </div>
            <Link href="/case-studies" className="text-black font-bold flex items-center gap-2 hover:text-primary transition-colors group">
              View all 10 stories <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <CaseStudyCarousel />
        </div>
      </section>

      {/* Pricing Clarity */}
      <section id="pricing" className="py-32 bg-gray-50/50">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="max-w-2xl mb-20 text-center mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-black">Predictable Pricing.</h2>
            <p className="text-gray-600 text-lg">
              Flat, predictable fees based on headcount. No hidden overages.
            </p>
          </div>

          <div className="max-w-4xl mx-auto p-10 md:p-16 rounded-3xl bg-white shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100/50">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-black">Comprehensive IT</h3>
                <p className="text-gray-700 mb-10 leading-relaxed">Everything you need to run securely, bundled into one invoice.</p>
                
                <ul className="space-y-5">
                  {[
                    "Unlimited Helpdesk",
                    "24/7 Network Monitoring",
                    "Advanced Endpoint Security",
                    "Cloud Management",
                    "Strategic IT Consulting"
                  ].map((feature, i) => (
                    <li key={i} className="flex items-center gap-4 text-gray-700 font-medium">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex flex-col justify-center p-10 bg-gray-50 rounded-2xl">
                <div className="text-sm text-gray-600 uppercase tracking-wider font-semibold mb-4">Starting At</div>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-6xl font-bold text-black">$150</span>
                  <span className="text-gray-700 font-medium">/user</span>
                </div>
                <p className="text-sm text-gray-600 mb-10">Billed monthly. Custom quotes available for complex infrastructure.</p>
                <button className="w-full py-4 bg-black text-white hover:bg-gray-800 rounded-xl font-medium transition-colors shadow-sm">
                  Get a Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA / Lead Qualification */}
      <section id="contact" className="py-40 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-8 text-black">Ready to scale?</h2>
          <p className="text-xl text-gray-700 mb-12 max-w-xl mx-auto leading-relaxed">
            If you have 10–500 employees and are tired of reactive support, let&apos;s talk.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-10 py-5 bg-primary hover:bg-primary/90 text-white rounded-xl font-medium text-lg transition-all shadow-sm">
              Book IT Audit
            </button>
            <Link href="/case-studies" className="inline-flex items-center justify-center px-10 py-5 bg-gray-50 hover:bg-gray-100 text-black rounded-xl font-medium text-lg transition-all">
              View Case Studies
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
