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
    caseStudies: {
      badge: "Case Studies",
      headline: "Real Results.",
      subheadline: "How we've helped companies eliminate IT chaos and scale securely.",
      viewAll: "View all stories",
      readMore: "Read full case study",
      items: [
        {
          title: "Migration to Microsoft 365 without downtime",
          company: "Mid-sized company (40–80 employees)",
          summary: "How a mid-sized company transitioned from Google Workspace to a structured, secure Microsoft 365 environment with zero downtime.",
          href: "/case-studies/microsoft-365-migration"
        },
        {
          title: "Stable and scalable IT with Microsoft Azure",
          company: "Tech company (100–150 employees)",
          summary: "Solving IT complexity and scalability issues by migrating to a structured Microsoft Azure cloud architecture.",
          href: "/case-studies/azure-cloud-infrastructure"
        },
        {
          title: "Reliable IT operations with full responsibility",
          company: "SME (30–60 employees)",
          summary: "How an SME without an internal IT department achieved stable and predictable IT operations through a managed service model.",
          href: "/case-studies/managed-it-operations"
        },
        {
          title: "Audit-ready IT through structured security",
          company: "Regulated Company (50–100 employees)",
          summary: "Achieving audit-ready IT through a structured security and governance framework for regulatory compliance.",
          href: "/case-studies/security-compliance"
        }
      ]
    },
    managedItPage: {
      hero: {
        badge: "Managed IT Services",
        headline: "We don't just fix computers. We take full responsibility for your business continuity.",
        subheadline: "Stop worrying about downtime and security breaches. We operate your entire IT infrastructure with 100% accountability and fixed monthly costs.",
        cta: "Book a Strategy Call",
      },
      problem: {
        headline: "IT is either an engine or a handbrake.",
        subheadline: "Most companies suffer from reactive IT that only responds when something breaks. This leads to three critical failures:",
        points: [
          { title: "Revenue-Killing Downtime", description: "When your systems are down, your team is idle but your payroll keeps running." },
          { title: "Security Anxiety", description: "Wondering if your backups actually work or if a single click could bankrupt the company." },
          { title: "Budget Chaos", description: "Unpredictable IT bills that fluctuate based on how many things broke this month." }
        ]
      },
      solution: {
        headline: "Total IT Accountability.",
        subheadline: "We move you from 'Break-Fix' to 'Managed Operations'. We own the outcome, not just the tickets.",
        points: [
          { title: "Zero-Downtime Focus", description: "Proactive maintenance that identifies and resolves issues before they impact your team." },
          { title: "Fixed-Cost Guarantee", description: "One predictable monthly fee that covers everything. No surprise invoices, ever." },
          { title: "Strategic Partnership", description: "We act as your CTO, ensuring your technology roadmap aligns with your business goals." }
        ]
      },
      results: {
        headline: "The Numbers That Matter.",
        subheadline: "Our performance is measured by your uptime and productivity.",
        cards: [
          { metric: "99.9%", label: "System Uptime" },
          { metric: "< 15m", label: "Response Time" },
          { metric: "30%", label: "Efficiency Gain" },
          { metric: "0", label: "Security Breaches" }
        ]
      },
      services: {
        headline: "What 'Full Responsibility' Looks Like.",
        subheadline: "Our managed service is a complete IT department in a box.",
        items: [
          { title: "24/7 Monitoring & Management", description: "Continuous oversight of servers, networks, and endpoints." },
          { title: "Unlimited Helpdesk Support", description: "Fast, professional support for your entire team whenever they need it." },
          { title: "Cybersecurity & Compliance", description: "Advanced threat protection, encryption, and regulatory compliance management." },
          { title: "Backup & Disaster Recovery", description: "Automated off-site backups with guaranteed recovery times." },
          { title: "Cloud & Infrastructure", description: "Full management of Microsoft 365, Azure, and on-premise systems." },
          { title: "IT Strategy & Consulting", description: "Regular business reviews and long-term technology planning." }
        ]
      },
      process: {
        headline: "How We Take Over.",
        subheadline: "A seamless transition to professional IT operations.",
        steps: [
          { title: "Deep Audit", description: "We document every asset, license, and vulnerability in your current setup." },
          { title: "Stabilization", description: "We fix immediate risks and standardize your systems to our high-reliability baseline." },
          { title: "Continuous Operation", description: "We take full control, providing 24/7 management and strategic guidance." }
        ]
      },
      caseStudy: {
        headline: "Real Results for Real Businesses.",
        company: "Logistics Leader GmbH",
        challenge: "Frequent server crashes were delaying shipments and costing €5k per hour in lost productivity.",
        solution: "Implemented a fully managed hybrid-cloud infrastructure with redundant failover.",
        result: "Zero critical downtime in 24 months and a 40% reduction in IT-related support tickets."
      },
      philosophy: {
        quote: "We don't sell hours. We sell uptime.",
        author: "Ecksolution-IT Philosophy"
      },
      faq: {
        headline: "Common Questions About Managed IT.",
        items: [
          { question: "What exactly is included in the fixed monthly fee?", answer: "Everything. All monitoring, maintenance, security updates, and unlimited helpdesk support are included. No hidden fees for 'out of scope' work." },
          { question: "How do you ensure our data is secure?", answer: "We use enterprise-grade encryption, multi-factor authentication, and 24/7 threat monitoring. We also perform regular backup tests to ensure recovery is always possible." },
          { question: "Can you work with our existing internal IT person?", answer: "Yes. We offer 'Co-Managed IT' where we handle the heavy lifting (servers, security, backups) while your internal person focuses on user-facing projects." }
        ]
      }
    }
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
    caseStudies: {
      badge: "Fallstudien",
      headline: "Echte Ergebnisse.",
      subheadline: "Wie wir Unternehmen geholfen haben, IT-Chaos zu beseitigen und sicher zu skalieren.",
      viewAll: "Alle Geschichten ansehen",
      readMore: "Vollständige Fallstudie lesen",
      items: [
        {
          title: "Migration zu Microsoft 365 ohne Ausfallzeiten",
          company: "Mittelständisches Unternehmen (40–80 Mitarbeiter)",
          summary: "Wie ein mittelständisches Unternehmen von Google Workspace zu einer strukturierten, sicheren Microsoft 365-Umgebung ohne Ausfallzeiten wechselte.",
          href: "/case-studies/microsoft-365-migration"
        },
        {
          title: "Stabile und skalierbare IT mit Microsoft Azure",
          company: "Tech-Unternehmen (100–150 Mitarbeiter)",
          summary: "Lösung von IT-Komplexität und Skalierbarkeitsproblemen durch Migration zu einer strukturierten Microsoft Azure Cloud-Architektur.",
          href: "/case-studies/azure-cloud-infrastructure"
        },
        {
          title: "Zuverlässiger IT-Betrieb mit voller Verantwortung",
          company: "KMU (30–60 Mitarbeiter)",
          summary: "Wie ein KMU ohne interne IT-Abteilung durch ein Managed Service Modell einen stabilen und vorhersehbaren IT-Betrieb erreichte.",
          href: "/case-studies/managed-it-operations"
        },
        {
          title: "Audit-fähige IT durch strukturierte Sicherheit",
          company: "Reguliertes Unternehmen (50–100 Mitarbeiter)",
          summary: "Erreichung einer audit-fähigen IT durch ein strukturiertes Sicherheits- und Governance-Framework für regulatorische Compliance.",
          href: "/case-studies/security-compliance"
        }
      ]
    },
    managedItPage: {
      hero: {
        badge: "Managed IT Services",
        headline: "Wir reparieren nicht nur Computer. Wir übernehmen die volle Verantwortung für Ihren Geschäftsbetrieb.",
        subheadline: "Hören Sie auf, sich Sorgen um Ausfallzeiten und Sicherheitslücken zu machen. Wir betreiben Ihre gesamte IT-Infrastruktur mit 100% Verantwortlichkeit und festen monatlichen Kosten.",
        cta: "Strategiegespräch buchen",
      },
      problem: {
        headline: "IT ist entweder ein Motor oder eine Handbremse.",
        subheadline: "Die meisten Unternehmen leiden unter reaktiver IT, die nur reagiert, wenn etwas kaputt geht. Dies führt zu drei kritischen Fehlern:",
        points: [
          { title: "Umsatzschädigende Ausfallzeiten", description: "Wenn Ihre Systeme stehen, ist Ihr Team untätig, aber Ihre Lohnkosten laufen weiter." },
          { title: "Sicherheitsangst", description: "Die Frage, ob Ihre Backups wirklich funktionieren oder ob ein einziger Klick das Unternehmen ruinieren könnte." },
          { title: "Budget-Chaos", description: "Unvorhersehbare IT-Rechnungen, die schwanken, je nachdem, wie viele Dinge diesen Monat kaputt gegangen sind." }
        ]
      },
      solution: {
        headline: "Vollständige IT-Verantwortung.",
        subheadline: "Wir führen Sie weg von 'Break-Fix' hin zu 'Managed Operations'. Wir verantworten das Ergebnis, nicht nur die Tickets.",
        points: [
          { title: "Fokus auf Null Ausfallzeit", description: "Proaktive Wartung, die Probleme identifiziert und löst, bevor sie Ihr Team beeinträchtigen." },
          { title: "Festpreis-Garantie", description: "Eine planbare monatliche Gebühr, die alles abdeckt. Keine Überraschungsrechnungen, niemals." },
          { title: "Strategische Partnerschaft", description: "Wir agieren als Ihr CTO und stellen sicher, dass Ihre Technologie-Roadmap mit Ihren Geschäftszielen übereinstimmt." }
        ]
      },
      results: {
        headline: "Die Zahlen, auf die es ankommt.",
        subheadline: "Unsere Leistung wird an Ihrer Verfügbarkeit und Produktivität gemessen.",
        cards: [
          { metric: "99,9%", label: "Systemverfügbarkeit" },
          { metric: "< 15 Min.", label: "Reaktionszeit" },
          { metric: "30%", label: "Effizienzsteigerung" },
          { metric: "0", label: "Sicherheitsvorfälle" }
        ]
      },
      services: {
        headline: "Was 'volle Verantwortung' bedeutet.",
        subheadline: "Unser Managed Service ist eine komplette IT-Abteilung aus einer Hand.",
        items: [
          { title: "24/7 Überwachung & Management", description: "Kontinuierliche Überwachung von Servern, Netzwerken und Endgeräten." },
          { title: "Unbegrenzter Helpdesk-Support", description: "Schneller, professioneller Support für Ihr gesamtes Team, wann immer er benötigt wird." },
          { title: "Cybersecurity & Compliance", description: "Fortschrittlicher Bedrohungsschutz, Verschlüsselung und Management gesetzlicher Anforderungen." },
          { title: "Backup & Disaster Recovery", description: "Automatisierte Off-Site-Backups mit garantierten Wiederherstellungszeiten." },
          { title: "Cloud & Infrastruktur", description: "Vollständiges Management von Microsoft 365, Azure und On-Premise-Systemen." },
          { title: "IT-Strategie & Beratung", description: "Regelmäßige Business-Reviews und langfristige Technologieplanung." }
        ]
      },
      process: {
        headline: "Wie wir übernehmen.",
        subheadline: "Ein nahtloser Übergang zu professionellen IT-Operationen.",
        steps: [
          { title: "Tiefen-Audit", description: "Wir dokumentieren jedes Asset, jede Lizenz und jede Schwachstelle in Ihrem aktuellen Setup." },
          { title: "Stabilisierung", description: "Wir beheben sofortige Risiken und standardisieren Ihre Systeme auf unser Hochverfügbarkeits-Niveau." },
          { title: "Kontinuierlicher Betrieb", description: "Wir übernehmen die volle Kontrolle und bieten 24/7-Management sowie strategische Beratung." }
        ]
      },
      caseStudy: {
        headline: "Echte Ergebnisse für echte Unternehmen.",
        company: "Logistik Leader GmbH",
        challenge: "Häufige Serverabstürze verzögerten Lieferungen und kosteten 5.000 € pro Stunde an verlorener Produktivität.",
        solution: "Implementierung einer vollständig verwalteten Hybrid-Cloud-Infrastruktur mit redundanter Ausfallsicherung.",
        result: "Keine kritischen Ausfallzeiten in 24 Monaten und eine Reduzierung der IT-Support-Tickets um 40%."
      },
      philosophy: {
        quote: "Wir verkaufen keine Stunden. Wir verkaufen Verfügbarkeit.",
        author: "Ecksolution-IT Philosophie"
      },
      faq: {
        headline: "Häufige Fragen zu Managed IT.",
        items: [
          { question: "Was genau ist in der festen monatlichen Gebühr enthalten?", answer: "Alles. Sämtliche Überwachung, Wartung, Sicherheitsupdates und unbegrenzter Helpdesk-Support sind enthalten. Keine versteckten Kosten." },
          { question: "Wie stellen Sie sicher, dass unsere Daten sicher sind?", answer: "Wir verwenden Verschlüsselung auf Enterprise-Niveau, Multi-Faktor-Authentifizierung und 24/7-Bedrohungsüberwachung. Wir testen Backups regelmäßig." },
          { question: "Können Sie mit unserem bestehenden internen IT-Mitarbeiter zusammenarbeiten?", answer: "Ja. Wir bieten 'Co-Managed IT' an, bei dem wir die schwere Arbeit (Server, Sicherheit, Backups) übernehmen, während sich Ihr interner Mitarbeiter auf Anwenderprojekte konzentriert." }
        ]
      }
    }
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
    caseStudies: {
      badge: "Casos de Éxito",
      headline: "Resultados Reales.",
      subheadline: "Cómo hemos ayudado a las empresas a eliminar el caos de TI y escalar de forma segura.",
      viewAll: "Ver todas las historias",
      readMore: "Leer caso de éxito completo",
      items: [
        {
          title: "Migración a Microsoft 365 sin tiempo de inactividad",
          company: "Empresa mediana (40–80 empleados)",
          summary: "Cómo una empresa mediana pasó de Google Workspace a un entorno de Microsoft 365 estructurado y seguro con cero tiempo de inactividad.",
          href: "/case-studies/microsoft-365-migration"
        },
        {
          title: "TI estable y escalable con Microsoft Azure",
          company: "Empresa tecnológica (100–150 empleados)",
          summary: "Resolviendo la complejidad de TI y los problemas de escalabilidad mediante la migración a una arquitectura de nube estructurada de Microsoft Azure.",
          href: "/case-studies/azure-cloud-infrastructure"
        },
        {
          title: "Operaciones de TI confiables con responsabilidad total",
          company: "PYME (30–60 empleados)",
          summary: "Cómo una PYME sin departamento de TI interno logró operaciones de TI estables y predecibles a través de un modelo de servicio gestionado.",
          href: "/case-studies/managed-it-operations"
        },
        {
          title: "TI lista para auditorías mediante seguridad estructurada",
          company: "Empresa regulada (50–100 empleados)",
          summary: "Lograr una TI lista para auditorías a través de un marco estructurado de seguridad y gobernanza para el cumplimiento normativo.",
          href: "/case-studies/security-compliance"
        }
      ]
    },
    managedItPage: {
      hero: {
        badge: "Servicios de TI Gestionados",
        headline: "No solo reparamos computadoras. Asumimos la responsabilidad total de su continuidad de negocio.",
        subheadline: "Deje de preocuparse por el tiempo de inactividad y las brechas de seguridad. Operamos toda su infraestructura de TI con un 100% de responsabilidad y costos mensuales fijos.",
        cta: "Reserve una Llamada Estratégica",
      },
      problem: {
        headline: "La TI es un motor o un freno de mano.",
        subheadline: "La mayoría de las empresas sufren de una TI reactiva que solo responde cuando algo se rompe. Esto conduce a tres fallos críticos:",
        points: [
          { title: "Tiempo de Inactividad que Mata los Ingresos", description: "Cuando sus sistemas están caídos, su equipo está inactivo pero su nómina sigue corriendo." },
          { title: "Ansiedad por la Seguridad", description: "Preguntarse si sus copias de seguridad realmente funcionan o si un solo clic podría quebrar la empresa." },
          { title: "Caos Presupuestario", description: "Facturas de TI impredecibles que fluctúan según cuántas cosas se rompieron este mes." }
        ]
      },
      solution: {
        headline: "Responsabilidad Total de TI.",
        subheadline: "Lo movemos del 'Break-Fix' a las 'Operaciones Gestionadas'. Somos dueños del resultado, no solo de los tickets.",
        points: [
          { title: "Enfoque en Cero Tiempo de Inactividad", description: "Mantenimiento proactivo que identifica y resuelve problemas antes de que afecten a su equipo." },
          { title: "Garantía de Costo Fijo", description: "Una tarifa mensual predecible que lo cubre todo. Sin facturas sorpresa, nunca." },
          { title: "Asociación Estratégica", description: "Actuamos como su CTO, asegurando que su hoja de ruta tecnológica se alinee con sus objetivos comerciales." }
        ]
      },
      results: {
        headline: "Los Números que Importan.",
        subheadline: "Nuestro desempeño se mide por su tiempo de actividad y productividad.",
        cards: [
          { metric: "99.9%", label: "Tiempo de Actividad" },
          { metric: "< 15m", label: "Tiempo de Respuesta" },
          { metric: "30%", label: "Ganancia de Eficiencia" },
          { metric: "0", label: "Brechas de Seguridad" }
        ]
      },
      services: {
        headline: "Cómo se ve la 'Responsabilidad Total'.",
        subheadline: "Nuestro servicio gestionado es un departamento de TI completo en una caja.",
        items: [
          { title: "Monitoreo y Gestión 24/7", description: "Supervisión continua de servidores, redes y terminales." },
          { title: "Soporte de Helpdesk Ilimitado", description: "Soporte rápido y profesional para todo su equipo cuando lo necesiten." },
          { title: "Ciberseguridad y Cumplimiento", description: "Protección avanzada contra amenazas, cifrado y gestión de cumplimiento normativo." },
          { title: "Respaldo y Recuperación ante Desastres", description: "Copias de seguridad automatizadas fuera del sitio con tiempos de recuperación garantizados." },
          { title: "Nube e Infraestructura", description: "Gestión completa de Microsoft 365, Azure y sistemas locales." },
          { title: "Estrategia y Consultoría de TI", description: "Revisiones comerciales regulares y planificación tecnológica a largo plazo." }
        ]
      },
      process: {
        headline: "Cómo tomamos el control.",
        subheadline: "Una transición fluida a operaciones de TI profesionales.",
        steps: [
          { title: "Auditoría Profunda", description: "Documentamos cada activo, licencia y vulnerabilidad en su configuración actual." },
          { title: "Estabilización", description: "Corregimos los riesgos inmediatos y estandarizamos sus sistemas a nuestra base de alta fiabilidad." },
          { title: "Operación Continua", description: "Tomamos el control total, brindando gestión 24/7 y orientación estratégica." }
        ]
      },
      caseStudy: {
        headline: "Resultados Reales para Empresas Reales.",
        company: "Logistics Leader GmbH",
        challenge: "Las caídas frecuentes del servidor retrasaban los envíos y costaban 5.000 € por hora en pérdida de productividad.",
        solution: "Se implementó una infraestructura de nube híbrida totalmente gestionada con conmutación por error redundante.",
        result: "Cero tiempo de inactividad crítico en 24 meses y una reducción del 40% en los tickets de soporte de TI."
      },
      philosophy: {
        quote: "No vendemos horas. Vendemos tiempo de actividad.",
        author: "Filosofía de Ecksolution-IT"
      },
      faq: {
        headline: "Preguntas Comunes sobre TI Gestionada.",
        items: [
          { question: "¿Qué se incluye exactamente en la tarifa mensual fija?", answer: "Todo. Se incluye todo el monitoreo, mantenimiento, actualizaciones de seguridad y soporte de helpdesk ilimitado. Sin cargos ocultos." },
          { question: "¿Cómo aseguran que nuestros datos estén seguros?", answer: "Utilizamos cifrado de nivel empresarial, autenticación multifactor y monitoreo de amenazas 24/7. Realizamos pruebas de respaldo regulares." },
          { question: "¿Pueden trabajar con nuestra persona de TI interna existente?", answer: "Sí. Ofrecemos 'TI Co-Gestionada' donde manejamos el trabajo pesado (servidores, seguridad, respaldos) mientras su persona interna se enfoca en proyectos de usuario." }
        ]
      }
    }
  },
};
