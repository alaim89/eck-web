'use client';

import { motion } from "motion/react";
import { CheckCircle2, ShieldCheck, Clock, Activity, Award } from "lucide-react";

export function ResponsibilitySection() {
  const benefits = [
    {
      title: "100% Verantwortung, kein Finger-Pointing",
      description: "Wir stehen für unsere Ergebnisse ein und lösen Probleme ganzheitlich.",
      icon: ShieldCheck
    },
    {
      title: "Proaktive Stabilität statt reaktiver Feuerwehr",
      description: "Durch vorausschauende Planung verhindern wir Ausfälle, bevor sie entstehen.",
      icon: Activity
    },
    {
      title: "Beratung auf Augenhöhe",
      description: "Wir sprechen Ihre Sprache - technisch präzise und geschäftlich relevant.",
      icon: Award
    }
  ];

  const stats = [
    { label: "Verantwortung", value: "100%", icon: ShieldCheck },
    { label: "Erfahrung", value: "8+ Jahre", icon: Award },
    { label: "Monitoring", value: "24/7", icon: Activity },
    { label: "Reaktionszeit", value: "< 2h", icon: Clock }
  ];

  return (
    <section className="py-24 md:py-32 bg-white overflow-hidden" id="responsibility">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6 leading-[1.1]">
              Wir übernehmen Verantwortung für Ihre IT.
            </h2>
            <p className="text-lg text-gray-600 mb-12 leading-relaxed max-w-xl">
              Wir sichern nicht nur Systeme – wir sichern Ihren Geschäftsbetrieb. 
              Ein zentraler Ansprechpartner für stabile und sichere IT.
            </p>

            <div className="space-y-8">
              {benefits.map((benefit, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.3 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-6 h-6 mt-1">
                    <CheckCircle2 className="w-full h-full text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">{benefit.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4 md:gap-6"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="p-8 rounded-3xl bg-gray-50 border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center">
                  <stat.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
