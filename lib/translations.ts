export type Language = 'de';

export const translations = {
  de: {
    nav: {
      risk: "Das Risiko",
      solutions: "Lösungen",
      caseStudies: "Referenzen",
      support: "Support",
      customerPortal: "Kundenportal",
      remoteMaintenance: "Fernwartung",
      pricing: "Preise",
      contact: "IT-Einschätzung",
      getAudit: "IT-Check starten",
    },
    megaMenu: {
      core: {
        badge: "Kernleistungen",
        items: [
          {
            title: "Hybride IT-Infrastruktur",
            desc: "Linux, Microsoft 365 und Azure nahtlos integriert.",
            href: "/solutions/hybrid-it-infrastruktur"
          },
          {
            title: "Managed IT-Service",
            desc: "Professioneller IT-Betrieb mit voller Verantwortung.",
            href: "/solutions/managed-it-service"
          },
          {
            title: "Externer IT-Verantwortlicher",
            desc: "Strategische IT-Leitung für Ihr Unternehmen.",
            href: "/solutions/externer-it-verantwortlicher"
          }
        ],
        pricing: "Preise & Pakete ansehen"
      },
      categories: [
        {
          title: "Sicherheit & Backup",
          items: [
            {
              title: "IT-Sicherheit für Unternehmen",
              desc: "Ganzheitlicher Schutz vor Cyber-Bedrohungen.",
              href: "/solutions/it-sicherheit"
            },
            {
              title: "Managed Backup",
              desc: "Automatisierte Datensicherung und Überwachung.",
              href: "/solutions/managed-backup"
            },
            {
              title: "Endpoint & Firewall Security",
              desc: "Schutz für alle Geräte und Netzwerke.",
              href: "/solutions/endpoint-firewall-security"
            },
            {
              title: "Disaster Recovery",
              desc: "Schnelle Wiederherstellung im Ernstfall.",
              href: "/solutions/disaster-recovery"
            }
          ]
        },
        {
          title: "Infrastruktur",
          items: [
            {
              title: "Hybride IT-Infrastruktur",
              desc: "Optimale Verbindung von On-Premise und Cloud.",
              href: "/solutions/hybrid-it-infrastruktur"
            },
            {
              title: "Netzwerk-Management",
              desc: "Stabile und performante Unternehmensnetzwerke.",
              href: "/solutions/netzwerk-management"
            },
            {
              title: "Hardware & Client Management",
              desc: "Lifecycle-Management für Ihre Endgeräte.",
              href: "/solutions/hardware-client-management"
            },
            {
              title: "Azure Hybrid Betreuung",
              desc: "Spezialisierte Betreuung Ihrer Azure-Umgebung.",
              href: "/solutions/azure-hybrid-betreuung"
            }
          ]
        },
        {
          title: "Migration & Projekte",
          items: [
            {
              title: "Microsoft 365 Migration",
              desc: "Reibungsloser Wechsel in die M365-Welt.",
              href: "/solutions/microsoft-365-migration"
            },
            {
              title: "Azure Migration",
              desc: "Sicherer Umzug Ihrer Server in die Cloud.",
              href: "/solutions/azure-migration"
            },
            {
              title: "Hybrid Cloud Transformation",
              desc: "Strategische Transformation Ihrer IT.",
              href: "/solutions/hybrid-cloud-transformation"
            },
            {
              title: "IT-Projekte mit festen SLAs",
              desc: "Planbare Umsetzung Ihrer IT-Vorhaben.",
              href: "/solutions/it-projekte-mit-slas"
            }
          ]
        },
        {
          title: "Einstieg / Beratung",
          items: [
            {
              title: "IT-Risiko-Audit",
              desc: "Schwachstellen finden und gezielt beheben.",
              href: "/solutions/it-risiko-audit"
            },
            {
              title: "Strategische IT-Betreuung",
              desc: "Langfristige Planung Ihrer IT-Landschaft.",
              href: "/solutions/strategische-it-betreuung"
            },
            {
              title: "Microsoft 365 Compliance Betreuung",
              desc: "Rechtssichere Nutzung von M365.",
              href: "/solutions/microsoft-365-compliance-betreuung"
            },
            {
              title: "IT-Governance & Risikomanagement",
              desc: "Strukturierte IT-Prozesse und Sicherheit.",
              href: "/solutions/it-governance-risikomanagement"
            }
          ]
        }
      ]
    },
    hero: {
      badge: "IT-Partner für den deutschen Mittelstand",
      headline: "Ihre IT muss einfach funktionieren. Ohne Ausfälle. Ohne Stress.",
      subheadline: "Wir übernehmen die volle Verantwortung für Ihre IT-Infrastruktur. Proaktiv, sicher und nach vereinbartem Leistungsumfang - damit Sie und Ihr Team sich auf Ihr Kerngeschäft konzentrieren können.",
      cta: "Kostenlose IT-Einschätzung anfordern",
      secondaryCta: "Referenzprojekte ansehen",
    },
    problem: {
      badge: "Die Herausforderung",
      headline: "IT-Probleme kosten Zeit, Geld und Nerven.",
      subheadline: "Wenn die Technik streikt, steht der Betrieb still. Wir beenden das reaktive 'Feuerlöschen' und sorgen für dauerhafte Stabilität.",
      cards: [
        {
          title: "Teure Stillstandszeiten",
          description: "Jeder Systemausfall stoppt Ihre Prozesse und verursacht Kosten, während Ihre Mitarbeiter nicht produktiv arbeiten können.",
        },
        {
          title: "Versteckte Sicherheitsrisiken",
          description: "Veraltete Systeme und lückenhafte Backups sind eine Gefahr für Ihre Unternehmensdaten und die gesetzliche Compliance.",
        },
        {
          title: "Unvorhersehbare Kosten",
          description: "Notfalleinsätze und spontane Reparaturen machen Ihre IT-Ausgaben unkalkulierbar und belasten Ihr Budget.",
        },
      ],
    },
    solution: {
      badge: "Unser Ansatz",
      headline: "Echte Verantwortung statt nur Support.",
      subheadline: "Wir flicken keine Symptome, sondern schaffen ein stabiles Fundament für Ihr Unternehmen.",
      points: [
        {
          title: "Wir sind Ihre IT-Abteilung",
          description: "Wir übernehmen die volle Verantwortung für Ihren gesamten IT-Stack. Kein 'Finger-Pointing' mehr zwischen verschiedenen Dienstleistern.",
        },
        {
          title: "Probleme lösen, bevor sie entstehen",
          description: "Durch kontinuierliches Monitoring erkennen wir Engpässe frühzeitig und beheben sie im Hintergrund, ohne Ihren Arbeitsalltag zu stören.",
        },
        {
          title: "Sicherheit auf Enterprise-Niveau",
          description: "Wir implementieren bewährte Sicherheitsstandards, die exakt auf die Bedürfnisse und Budgets des Mittelstands zugeschnitten sind.",
        },
      ],
    },
    results: {
      headline: "Verlässlichkeit in Zahlen",
      subheadline: "Operative Verantwortung, schnelle Reaktion und stabile Systeme - sichtbar gemacht in klaren Kennzahlen.",
      cards: [
        { metric: "< 2h", label: "Reaktionszeit", variant: "primary" },
        { metric: "24/7", label: "Monitoring", variant: "secondary" },
        { metric: "8+", label: "Jahre Erfahrung", variant: "secondary" },
        { metric: "100%", label: "Verantwortung", variant: "status" },
      ],
    },
    services: {
      badge: "Unsere Leistungen",
      headline: "Alles aus einer Hand.",
      subheadline: "Vom täglichen Support bis zur strategischen Cloud-Migration - wir begleiten Sie bei jedem Schritt.",
      items: [
        {
          title: "Managed IT-Services",
          description: "Professioneller IT-Betrieb nach vereinbartem Scope und SLA für maximale Stabilität.",
          link: "/solutions/managed-it-service"
        },
        {
          title: "IT-Support für Unternehmen",
          description: "Schnelle und kompetente Hilfe für Ihr Team bei allen technischen Fragen.",
          link: "/solutions/managed-it-service"
        },
        {
          title: "Microsoft 365 & Modern Work",
          description: "Sichere und effizientes Arbeiten von überall - perfekt eingerichtet und verwaltet.",
          link: "/solutions/microsoft-365-compliance-betreuung"
        },
        {
          title: "Cloud-Infrastruktur (Azure)",
          description: "Skalierbare und hochverfügbare Lösungen für Ihre Server und Anwendungen.",
          link: "/solutions/azure-hybrid-betreuung"
        },
        {
          title: "IT-Sicherheit & Backup",
          description: "Schutz vor Cyber-Angriffen und garantierte Datenwiederherstellung im Ernstfall.",
          link: "/solutions/it-sicherheit"
        }
      ]
    },
    process: {
      badge: "Ihr Weg zu einer stressfreien IT",
      headline: "In drei Schritten zur digitalen Stabilität.",
      steps: [
        {
          number: "01",
          title: "IT-Check & Analyse",
          description: "Wir prüfen Ihre aktuelle IT auf Herz und Nieren und decken Schwachstellen sowie Risiken auf.",
        },
        {
          number: "02",
          title: "System-Härtung",
          description: "Wir bringen Ihre Infrastruktur auf einen modernen Sicherheitsstandard und schließen alle Lücken.",
        },
        {
          number: "03",
          title: "Sorgloser Dauerbetrieb",
          description: "Wir übernehmen die tägliche Überwachung und Wartung. Ihr Team kann endlich wieder ungestört arbeiten.",
        },
      ],
    },
    faq: {
      headline: "Häufige Fragen unserer Kunden",
      items: [
        {
          question: "Wie schnell ist der Support im Ernstfall erreichbar?",
          answer: "Unsere durchschnittliche Reaktionszeit bei kritischen Störungen liegt deutlich unter dem Marktdurchschnitt. Wir priorisieren Notfälle sofort.",
        },
        {
          question: "Können Sie mit meiner bestehenden IT-Abteilung zusammenarbeiten?",
          answer: "Ja, im Rahmen von 'Co-Managed IT' unterstützen wir Ihre internen Experten gezielt bei Spezialthemen oder Routineaufgaben.",
        },
        {
          question: "Sind die monatlichen Kosten wirklich fix?",
          answer: "Ja. In unseren Managed-Service-Paketen sind alle Leistungen innerhalb des vereinbarten Scopes enthalten. Das gibt Ihnen volle Budgetsicherheit ohne Überraschungen.",
        },
        {
          question: "Betreuen Sie auch Branchen-Software?",
          answer: "Wir übernehmen die Kommunikation mit Ihren Software-Herstellern, damit Sie sich nicht mit technischen Details aufhalten müssen.",
        },
      ],
    },
    trust: {
      headline: "Ihr Partner für IT-Verantwortung.",
      subheadline: "Wir verwalten nicht nur Computer - wir sichern Ihren Geschäftsbetrieb. Mit Ecksolution IT gewinnen Sie einen Partner, der IT als strategisches Werkzeug für Ihren Erfolg versteht.",
      points: [
        { title: "100% Verantwortung, kein Finger-Pointing", description: "Wir übernehmen die volle Verantwortung. Wir sind Ihr zentraler Ansprechpartner für alle IT-Themen." },
        { title: "Proaktive Stabilität statt reaktiver Feuerwehr", description: "Wir warten nicht auf Fehlermeldungen. Wir agieren im Hintergrund, damit Probleme gar nicht erst entstehen." },
        { title: "Beratung auf Augenhöhe", description: "Wir sprechen kein 'Fachchinesisch'. Wir beraten Sie verständlich und herstellerunabhängig." }
      ]
    },
    cta: {
      headline: "Machen Sie Schluss mit IT-Sorgen.",
      subheadline: "Lassen Sie uns in einem kurzen Gespräch klären, wie wir Ihre IT sicherer und effizienter machen können.",
      button: "Erstgespräch sichern",
    },
    caseStudies: {
      badge: "Referenzen",
      headline: "Erfolgsgeschichten.",
      subheadline: "Erfahren Sie, wie wir Unternehmen dabei unterstützt haben, ihre IT-Infrastruktur zu professionalisieren.",
      viewAll: "Alle Referenzen ansehen",
      readMore: "Vollständigen Bericht lesen",
    },
    footer: {
      description: "Professionelle IT-Services für den deutschen Mittelstand. Zuverlässig, sicher und auf Augenhöhe.",
      copyright: "© {year} Ecksolution-IT Managed Services.",
      links: {
        contact: "Kostenlose IT-Einschätzung anfordern",
        support: "Support",
        customerPortal: "Kundenportal",
        remoteMaintenance: "Fernwartung",
        imprint: "Impressum",
        privacy: "Datenschutz"
      },
      categories: {
        support: "Support",
        contact: "Kontakt",
        legal: "Rechtliches"
      },
      cta: {
        hint: "Bereit für den nächsten Schritt?",
        button: "Erstgespräch sichern"
      }
    }
  }
};
