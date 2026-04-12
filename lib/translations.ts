export type Language = 'de';

export const translations = {
  de: {
    nav: {
      risk: "Wenn IT feststeckt",
      solutions: "Typische Situationen",
      caseStudies: "Praxisbeispiele",
      support: "Laufender Betrieb",
      customerPortal: "Kundenportal",
      remoteMaintenance: "Fernwartung",
      pricing: "Zusammenarbeit",
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
      headline: "IT-Ausfälle stoppen Prozesse und verursachen direkte Kosten.",
      subheadline: "Jeder Stillstand mindert Ihre Produktivität. Wir beenden das reaktive 'Feuerlöschen' und sichern Ihren Geschäftsbetrieb proaktiv ab.",
      cards: [
        {
          title: "Teure Stillstandszeiten",
          description: "Systemausfälle unterbrechen wertschöpfende Prozesse und führen zu hohen Opportunitätskosten durch unproduktive Mitarbeiter.",
        },
        {
          title: "Versteckte Sicherheitsrisiken",
          description: "Sicherheitslücken und ungetestete Backups gefährden Ihre Existenzgrundlage und führen zu massiven Haftungsrisiken bei Datenverlust.",
        },
        {
          title: "Unvorhersehbare Kosten",
          description: "Reaktive IT-Reparaturen und Notfalleinsätze sprengen Budgets und machen Ihre IT-Kosten zu einem unkalkulierbaren Geschäftsrisiko.",
        },
      ],
    },
    solution: {
      badge: "Unser Ansatz",
      headline: "Ihr Unternehmen profitiert von digitaler Stabilität.",
      subheadline: "Sie erhalten eine IT-Infrastruktur, die mit Ihrem Erfolg mitwächst und Ausfälle minimiert.",
      points: [
        {
          title: "Eine vollständige IT-Abteilung an Ihrer Seite",
          description: "Sie gewinnen einen zentralen Ansprechpartner, der die volle Verantwortung für Ihre Technik übernimmt und Reibungsverluste eliminiert.",
        },
        {
          title: "Störungsfreies Arbeiten durch proaktive Wartung",
          description: "Sie profitieren von Systemen, die im Hintergrund optimiert werden, bevor Engpässe Ihren Betriebsablauf unterbrechen können.",
        },
        {
          title: "Geprüfte Sicherheit für Ihren Mittelstand",
          description: "Sie erhalten ein Schutzniveau, das Ihre Daten zuverlässig sichert und alle gesetzlichen Compliance-Vorgaben erfüllt.",
        },
      ],
    },
    results: {
      headline: "Verlässlichkeit im Betrieb",
      subheadline: "Wenn Systeme sauber laufen, merkt man es im Alltag, nicht in PowerPoint.",
      cards: [
        { metric: "< 2h", label: "Reaktion, wenn es wirklich kritisch ist", variant: "primary" },
        { metric: "24/7", label: "Überblick über kritische Systeme", variant: "secondary" },
        { metric: "strukturiert", label: "Ticketsystem mit klarer Zuständigkeit", variant: "secondary" },
        { metric: "klar", label: "Verantwortung liegt bei einer Person", variant: "status" },
      ],
    },
    services: {
      badge: "Leistungen",
      headline: "Wenn IT nicht mehr sauber läuft.",
      subheadline: "Ich unterstütze Unternehmen, wenn Migrationen feststecken, Systeme nicht sauber zusammenspielen oder die IT im Alltag mehr bremst als hilft.",
      items: [
        {
          title: "Managed IT-Services",
          description: "Nach der Stabilisierung sorge ich dafür, dass Ihre IT im Alltag zuverlässig läuft und Probleme gar nicht erst ständig wieder auftauchen.",
          link: "/solutions/managed-it-service"
        },
        {
          title: "IT-Support für Unternehmen",
          description: "Wenn im Tagesgeschäft zu viel liegen bleibt, unterstütze ich Ihr Team schnell und direkt – ohne unnötige Schleifen und ohne neues Chaos.",
          link: "/solutions/managed-it-service"
        },
        {
          title: "Microsoft 365 & Modern Work",
          description: "Ich bringe Microsoft 365 in einen Zustand, der sauber funktioniert, sicher aufgebaut ist und im Alltag wirklich entlastet.",
          link: "/solutions/microsoft-365-compliance-betreuung"
        },
        {
          title: "Cloud-Infrastruktur (Azure)",
          description: "Ich unterstütze bei Azure-Umgebungen, die wachsen sollen, ohne unübersichtlich zu werden oder später zum Risiko zu werden.",
          link: "/solutions/azure-hybrid-betreuung"
        },
        {
          title: "IT-Sicherheit & Backup",
          description: "Ich helfe dabei, Sicherheitslücken und Wiederherstellung nicht länger aufzuschieben, sondern sauber und praxistauglich umzusetzen.",
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
      headline: "Wir übernehmen Verantwortung für Ihre IT.",
      subheadline: "Wir sichern nicht nur Systeme, wir sichern Ihren Geschäftsbetrieb. Ein zentraler Ansprechpartner für stabile und sichere IT.",
      points: [
        {
          title: "Einer übernimmt. Nicht fünf.",
          description: "Wenn etwas nicht läuft, will niemand hören, wer schuld ist. Ich übernehme die Verantwortung und kümmere mich darum, dass es wieder funktioniert."
        },
        {
          title: "Probleme vorher sehen, nicht danach reagieren",
          description: "Die meisten Ausfälle kündigen sich an. Ich räume die Dinge auf, die später Probleme machen würden, bevor sie kritisch werden."
        },
        {
          title: "Klare Entscheidungen statt Abstimmungsschleifen",
          description: "Wenn keiner entscheidet, steht alles. Ich treffe Architekturentscheidungen und setze sie direkt um, damit es vorangeht."
        }
      ]
    },
    cta: {
      headline: "Läuft Ihre IT wirklich stabil oder nur irgendwie?",
      subheadline: "In 30 Minuten sehen wir, ob irgendwo ein Risiko steckt oder alles sauber läuft. Ohne Verpflichtung.",
      button: "Kurz prüfen lassen",
    },
    caseStudies: {
      badge: "Praxisbeispiele",
      headline: "Wenn IT plötzlich wieder funktioniert.",
      subheadline: "Echte Projekte, die festgesteckt haben und wie sie wieder sauber laufen.",
      viewAll: "Alle Fälle ansehen",
      readMore: "Fall ansehen",
    },
    footer: {
      description: "Professionelle IT-Services für den deutschen Mittelstand. Zuverlässig, sicher und auf Augenhöhe.",
      copyright: "© {year} Ecksolution-IT Managed Services.",
      links: {
        contact: "Kontakt",
        caseStudies: "Referenzen",
        support: "Support",
        customerPortal: "Kundenportal",
        remoteMaintenance: "Fernwartung",
        imprint: "Impressum",
        privacy: "Datenschutz"
      },
      categories: {
        company: "Unternehmen",
        support: "Support",
        legal: "Rechtliches"
      },
      cta: {
        hint: "Unsicher, ob alles sauber läuft?",
        button: "Kurz prüfen lassen"
      }
    }
  }
};
