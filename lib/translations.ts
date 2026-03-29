export type Language = 'en' | 'de' | 'es';

export const translations = {
  en: {
    nav: {
      risk: "The Risk",
      solutions: "Solutions",
      caseStudies: "Case Studies",
      pricing: "Pricing",
      getAudit: "Get an Audit",
    },
    hero: {
      badge: "Managed IT Operations",
      headline: "Stop managing IT chaos. We are your entire IT department.",
      subheadline: "Total IT accountability. We operate your infrastructure reliably so your business runs without interruption. No finger-pointing, just results.",
      cta: "Discuss Your Needs",
      secondaryCta: "View Case Studies",
    },
    problem: {
      badge: "The Problem",
      headline: "Bad IT bleeds margins.",
      subheadline: "When technology fails, business stops. Most IT providers focus on tickets; we focus on preventing them.",
      cards: [
        {
          title: "Unpredictable Downtime",
          description: "Every minute of system failure is lost revenue and frustrated employees.",
        },
        {
          title: "Security Vulnerabilities",
          description: "Outdated systems are an open door for ransomware and data breaches.",
        },
        {
          title: "Hidden IT Costs",
          description: "Variable invoices and surprise hardware failures destroy budget planning.",
        },
      ],
    },
    solution: {
      badge: "The Solution",
      headline: "Architecting Reliability.",
      subheadline: "We don't just 'fix' things. We build and operate a stable foundation for your growth.",
      points: [
        {
          title: "Uncompromising Accountability",
          description: "We take full responsibility for your entire technology stack. No excuses.",
        },
        {
          title: "Predictive Infrastructure",
          description: "We monitor and maintain systems proactively to stop issues before they happen.",
        },
        {
          title: "Fortified Security Posture",
          description: "Enterprise-grade protection scaled for your business needs.",
        },
      ],
    },
    results: {
      headline: "Clear Business Outcomes",
      subheadline: "What you can expect when you partner with us.",
      cards: [
        { metric: "15min", label: "Response Time" },
        { metric: "100%", label: "Accountability" },
        { metric: "8+", label: "Years Experience" },
        { metric: "24/7", label: "Monitoring" },
      ],
    },
    services: {
      badge: "Our Services",
      headline: "Comprehensive IT Responsibility.",
      subheadline: "We provide the full stack of IT services required for modern business operations.",
      items: [
        {
          title: "Managed IT Services",
          description: "Full-scale IT management, from helpdesk to strategic planning.",
          link: "/solutions/managed-it-services"
        },
        {
          title: "IT Support for Businesses",
          description: "Fast, reliable support for your team's daily technology needs.",
          link: "/solutions/it-support-for-businesses"
        },
        {
          title: "Microsoft 365 Services",
          description: "Expert management and security for your modern workplace.",
          link: "/solutions/microsoft-365-services"
        },
        {
          title: "Azure & Hybrid Infrastructure",
          description: "Scalable cloud and hybrid solutions for growing companies.",
          link: "/solutions/azure-hybrid-infrastructure"
        },
        {
          title: "Backup & Security",
          description: "Bulletproof data protection and enterprise-grade security.",
          link: "/solutions/backup-security"
        }
      ]
    },
    process: {
      badge: "Our Process",
      headline: "A Proven Path to Stability.",
      steps: [
        {
          number: "01",
          title: "Analysis",
          description: "We audit your current infrastructure, identify single points of failure, and document every system.",
        },
        {
          number: "02",
          title: "Implementation",
          description: "We deploy our management agents, standardize your security, and take over vendor relationships.",
        },
        {
          number: "03",
          title: "Operations",
          description: "We provide 24/7 monitoring, unlimited helpdesk support, and proactive maintenance.",
        },
      ],
    },
    faq: {
      headline: "Frequently Asked Questions",
      items: [
        {
          question: "How fast do you respond to critical issues?",
          answer: "Our average response time for critical issues is under 15 minutes. We prioritize business-halting problems to ensure minimal disruption.",
        },
        {
          question: "Do you replace my internal IT team?",
          answer: "We can either act as your complete IT department or work alongside your existing team (Co-Managed IT) to provide extra capacity and specialized tools.",
        },
        {
          question: "Is there a long-term contract?",
          answer: "We believe in earning your business every month. While we offer annual agreements for better rates, we also have flexible monthly options.",
        },
        {
          question: "What industries do you specialize in?",
          answer: "We work with professional services, manufacturing, logistics, and tech companies that require high-reliability IT infrastructure.",
        },
      ],
    },
    trust: {
      headline: "The Authority in Managed IT.",
      subheadline: "We don't just manage systems—we engineer resilience. We take full ownership of your technology so you can focus on scaling your vision.",
      points: [
        { title: "Uncompromising Accountability", description: "We eliminate vendor finger-pointing by owning the entire technology stack." },
        { title: "Predictive Infrastructure", description: "Our systems identify and resolve bottlenecks before they impact your operations." },
        { title: "Fortified Security Posture", description: "Deploy bank-grade security protocols tailored for the mid-market." }
      ]
    },
    cta: {
      headline: "Ready to eliminate IT risk?",
      subheadline: "Get a comprehensive audit of your current setup. No commitment, just clarity.",
      button: "Request Your IT Audit",
    },
  },
  de: {
    nav: {
      risk: "Das Risiko",
      solutions: "Lösungen",
      caseStudies: "Fallstudien",
      pricing: "Preise",
      getAudit: "Audit anfordern",
    },
    hero: {
      badge: "Managed IT Operations",
      headline: "Schluss mit dem IT-Chaos. Wir sind Ihre komplette IT-Abteilung.",
      subheadline: "Vollständige IT-Verantwortung. Wir betreiben Ihre Infrastruktur zuverlässig, damit Ihr Geschäft ohne Unterbrechung läuft. Keine Ausreden, nur Ergebnisse.",
      cta: "Bedarf besprechen",
      secondaryCta: "Fallstudien ansehen",
    },
    problem: {
      badge: "Das Problem",
      headline: "Schlechte IT frisst Margen.",
      subheadline: "Wenn die Technik versagt, steht das Geschäft still. Die meisten IT-Anbieter konzentrieren sich auf Tickets; wir konzentrieren uns darauf, sie zu verhindern.",
      cards: [
        {
          title: "Unvorhersehbare Ausfallzeiten",
          description: "Jede Minute Systemausfall bedeutet Umsatzverlust und frustrierte Mitarbeiter.",
        },
        {
          title: "Sicherheitslücken",
          description: "Veraltete Systeme sind ein offenes Tor für Ransomware und Datenpannen.",
        },
        {
          title: "Versteckte IT-Kosten",
          description: "Variable Rechnungen und überraschende Hardwareausfälle zerstören die Budgetplanung.",
        },
      ],
    },
    solution: {
      badge: "Die Lösung",
      headline: "Wir bauen Zuverlässigkeit.",
      subheadline: "Wir 'reparieren' nicht nur Dinge. Wir bauen und betreiben ein stabiles Fundament für Ihr Wachstum.",
      points: [
        {
          title: "Kompromisslose Verantwortlichkeit",
          description: "Wir übernehmen die volle Verantwortung für Ihren gesamten Technologie-Stack. Ohne Wenn und Aber.",
        },
        {
          title: "Prädiktive Infrastruktur",
          description: "Wir überwachen und warten Systeme proaktiv, um Probleme zu stoppen, bevor sie entstehen.",
        },
        {
          title: "Gestärkte Sicherheit",
          description: "Sicherheit auf Enterprise-Niveau, skaliert für Ihre geschäftlichen Anforderungen.",
        },
      ],
    },
    results: {
      headline: "Klare Geschäftsergebnisse",
      subheadline: "Was Sie von einer Partnerschaft mit uns erwarten können.",
      cards: [
        { metric: "15 Min.", label: "Reaktionszeit" },
        { metric: "100%", label: "Verantwortung" },
        { metric: "8+", label: "Jahre Erfahrung" },
        { metric: "24/7", label: "Überwachung" },
      ],
    },
    services: {
      badge: "Unsere Leistungen",
      headline: "Umfassende IT-Verantwortung.",
      subheadline: "Wir bieten das gesamte Spektrum an IT-Services, die für moderne Geschäftsabläufe erforderlich sind.",
      items: [
        {
          title: "Managed IT Services",
          description: "Umfassendes IT-Management, vom Helpdesk bis zur strategischen Planung.",
          link: "/solutions/managed-it-services"
        },
        {
          title: "IT-Support für Unternehmen",
          description: "Schneller, zuverlässiger Support für die täglichen Technologieanforderungen Ihres Teams.",
          link: "/solutions/it-support-for-businesses"
        },
        {
          title: "Microsoft 365 Services",
          description: "Expertenmanagement und Sicherheit für Ihren modernen Arbeitsplatz.",
          link: "/solutions/microsoft-365-services"
        },
        {
          title: "Azure & Hybrid-Infrastruktur",
          description: "Skalierbare Cloud- und Hybridlösungen für wachsende Unternehmen.",
          link: "/solutions/azure-hybrid-infrastructure"
        },
        {
          title: "Backup & Sicherheit",
          description: "Absolut sicherer Datenschutz und Sicherheit auf Enterprise-Niveau.",
          link: "/solutions/backup-security"
        }
      ]
    },
    process: {
      badge: "Unser Prozess",
      headline: "Ein bewährter Weg zur Stabilität.",
      steps: [
        {
          number: "01",
          title: "Analyse",
          description: "Wir auditieren Ihre aktuelle Infrastruktur, identifizieren Schwachstellen und dokumentieren jedes System.",
        },
        {
          number: "02",
          title: "Implementierung",
          description: "Wir implementieren unsere Management-Tools, standardisieren Ihre Sicherheit und übernehmen die Lieferantenbeziehungen.",
        },
        {
          number: "03",
          title: "Betrieb",
          description: "Wir bieten 24/7-Überwachung, unbegrenzten Helpdesk-Support und proaktive Wartung.",
        },
      ],
    },
    faq: {
      headline: "Häufig gestellte Fragen",
      items: [
        {
          question: "Wie schnell reagieren Sie bei kritischen Problemen?",
          answer: "Unsere durchschnittliche Reaktionszeit bei kritischen Problemen liegt unter 15 Minuten. Wir priorisieren geschäftskritische Probleme.",
        },
        {
          question: "Ersetzen Sie mein internes IT-Team?",
          answer: "Wir können entweder als Ihre komplette IT-Abteilung fungieren oder mit Ihrem bestehenden Team zusammenarbeiten (Co-Managed IT).",
        },
        {
          question: "Gibt es langfristige Verträge?",
          answer: "Wir möchten Sie jeden Monat neu überzeugen. Wir bieten Jahresverträge für bessere Konditionen, aber auch flexible monatliche Optionen.",
        },
        {
          question: "Auf welche Branchen sind Sie spezialisiert?",
          answer: "Wir arbeiten mit Dienstleistern, Fertigungs-, Logistik- und Technologieunternehmen zusammen, die eine hochzuverlässige IT benötigen.",
        },
      ],
    },
    trust: {
      headline: "Die Autorität in Managed IT.",
      subheadline: "Wir verwalten nicht nur Systeme – wir entwickeln Resilienz. Wir übernehmen die volle Verantwortung für Ihre Technologie, damit Sie sich auf Ihre Vision konzentrieren können.",
      points: [
        { title: "Kompromisslose Verantwortlichkeit", description: "Wir eliminieren gegenseitige Schuldzuweisungen, indem wir den gesamten Technologie-Stack übernehmen." },
        { title: "Prädiktive Infrastruktur", description: "Unsere Systeme identifizieren und beheben Engpässe, bevor sie Ihren Betrieb beeinträchtigen." },
        { title: "Gestärkte Sicherheit", description: "Implementieren Sie Sicherheitsprotokolle auf Bankenniveau, die auf den Mittelstand zugeschnitten sind." }
      ]
    },
    cta: {
      headline: "Bereit, IT-Risiken zu eliminieren?",
      subheadline: "Erhalten Sie ein umfassendes Audit Ihres aktuellen Setups. Unverbindlich und klar.",
      button: "IT-Audit anfordern",
    },
  },
  es: {
    nav: {
      risk: "El Riesgo",
      solutions: "Soluciones",
      caseStudies: "Casos de Éxito",
      pricing: "Precios",
      getAudit: "Obtener Auditoría",
    },
    hero: {
      badge: "Operaciones de TI Gestionadas",
      headline: "Deje de gestionar el caos de TI. Somos su departamento de TI completo.",
      subheadline: "Responsabilidad total de TI. Operamos su infraestructura de manera confiable para que su negocio funcione sin interrupciones. Sin excusas, solo resultados.",
      cta: "Hablemos de sus necesidades",
      secondaryCta: "Ver Casos de Éxito",
    },
    problem: {
      badge: "El Problema",
      headline: "La mala TI agota los márgenes.",
      subheadline: "Cuando la tecnología falla, el negocio se detiene. La mayoría de los proveedores de TI se centran en los tickets; nosotros nos centramos en prevenirlos.",
      cards: [
        {
          title: "Tiempo de Inactividad Impredecible",
          description: "Cada minuto de fallo del sistema es pérdida de ingresos y empleados frustrados.",
        },
        {
          title: "Vulnerabilidades de Seguridad",
          description: "Los sistemas obsoletos son una puerta abierta para el ransomware y las brechas de datos.",
        },
        {
          title: "Costos de TI Ocultos",
          description: "Facturas variables y fallos sorpresa de hardware destruyen la planificación presupuestaria.",
        },
      ],
    },
    solution: {
      badge: "La Solución",
      headline: "Arquitectando Fiabilidad.",
      subheadline: "No solo 'arreglamos' cosas. Construimos y operamos una base estable para su crecimiento.",
      points: [
        {
          title: "Responsabilidad Sin Concesiones",
          description: "Asumimos la responsabilidad total de toda su infraestructura tecnológica. Sin excusas.",
        },
        {
          title: "Infraestructura Predictiva",
          description: "Monitoreamos y mantenemos los sistemas de manera proactiva para detener los problemas antes de que ocurran.",
        },
        {
          title: "Postura de Seguridad Fortalecida",
          description: "Protección de nivel empresarial escalada para las necesidades de su negocio.",
        },
      ],
    },
    results: {
      headline: "Resultados Comerciales Claros",
      subheadline: "Lo que puede esperar al asociarse con nosotros.",
      cards: [
        { metric: "15 min", label: "Tiempo de Respuesta" },
        { metric: "100%", label: "Responsabilidad" },
        { metric: "8+", label: "Años de Experiencia" },
        { metric: "24/7", label: "Monitoreo" },
      ],
    },
    services: {
      badge: "Nuestros Servicios",
      headline: "Responsabilidad Integral de TI.",
      subheadline: "Brindamos el stack completo de servicios de TI necesarios para las operaciones comerciales modernas.",
      items: [
        {
          title: "Servicios de TI Gestionados",
          description: "Gestión de TI a gran escala, desde el helpdesk hasta la planificación estratégica.",
          link: "/solutions/managed-it-services"
        },
        {
          title: "Soporte de TI para Empresas",
          description: "Soporte rápido y confiable para las necesidades tecnológicas diarias de su equipo.",
          link: "/solutions/it-support-for-businesses"
        },
        {
          title: "Servicios de Microsoft 365",
          description: "Gestión experta y seguridad para su lugar de trabajo moderno.",
          link: "/solutions/microsoft-365-services"
        },
        {
          title: "Infraestructura de Azure e Híbrida",
          description: "Soluciones escalables en la nube e híbridas para empresas en crecimiento.",
          link: "/solutions/azure-hybrid-infrastructure"
        },
        {
          title: "Respaldo y Seguridad",
          description: "Protección de datos a prueba de balas y seguridad de nivel empresarial.",
          link: "/solutions/backup-security"
        }
      ]
    },
    process: {
      badge: "Nuestro Proceso",
      headline: "Un Camino Probado hacia la Estabilidad.",
      steps: [
        {
          number: "01",
          title: "Análisis",
          description: "Auditamos su infraestructura actual, identificamos puntos únicos de fallo y documentamos cada sistema.",
        },
        {
          number: "02",
          title: "Implementación",
          description: "Desplegamos nuestros agentes de gestión, estandarizamos su seguridad y nos hacemos cargo de las relaciones con los proveedores.",
        },
        {
          number: "03",
          title: "Operaciones",
          description: "Brindamos monitoreo 24/7, soporte ilimitado de helpdesk y mantenimiento proactivo.",
        },
      ],
    },
    faq: {
      headline: "Preguntas Frecuentes",
      items: [
        {
          question: "¿Qué tan rápido responden a problemas críticos?",
          answer: "Nuestro tiempo promedio de respuesta para problemas críticos es de menos de 15 minutos. Priorizamos los problemas que detienen el negocio.",
        },
        {
          question: "¿Reemplazan a mi equipo de TI interno?",
          answer: "Podemos actuar como su departamento de TI completo o trabajar junto a su equipo existente (TI Co-Gestionada) para brindar capacidad adicional.",
        },
        {
          question: "¿Existe un contrato a largo plazo?",
          answer: "Creemos en ganarnos su negocio cada mes. Aunque ofrecemos acuerdos anuales para mejores tarifas, también tenemos opciones mensuales flexibles.",
        },
        {
          question: "¿En qué industrias se especializan?",
          answer: "Trabajamos con servicios profesionales, manufactura, logística y empresas tecnológicas que requieren una infraestructura de TI de alta fiabilidad.",
        },
      ],
    },
    trust: {
      headline: "La Autoridad en TI Gestionada.",
      subheadline: "No solo gestionamos sistemas: diseñamos resiliencia. Asumimos la responsabilidad total de su tecnología para que pueda concentrarse en escalar su visión.",
      points: [
        { title: "Responsabilidad Sin Concesiones", description: "Eliminamos el cruce de culpas entre proveedores al ser dueños de todo el stack tecnológico." },
        { title: "Infraestructura Predictiva", description: "Nuestros sistemas identifican y resuelven cuellos de botella antes de que afecten sus operaciones." },
        { title: "Postura de Seguridad Fortalecida", description: "Implemente protocolos de seguridad de nivel bancario adaptados al mercado medio." }
      ]
    },
    cta: {
      headline: "¿Listo para eliminar el riesgo de TI?",
      subheadline: "Obtenga una auditoría completa de su configuración actual. Sin compromiso, solo claridad.",
      button: "Solicite su Auditoría de TI",
    },
  },
};
