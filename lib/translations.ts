export type Language = 'de';

export const translations = {
  de: {
    nav: {
      risk: "Das Risiko",
      solutions: "Lösungen",
      caseStudies: "Referenzen",
      pricing: "Preise",
      contact: "Kontakt",
      getAudit: "IT-Check anfordern",
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
      cta: "Jetzt IT-Check vereinbaren",
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
      button: "Jetzt Erstgespräch vereinbaren",
    },
    caseStudies: {
      badge: "Referenzen",
      headline: "Erfolgsgeschichten.",
      subheadline: "Erfahren Sie, wie wir Unternehmen dabei unterstützt haben, ihre IT-Infrastruktur zu professionalisieren.",
      viewAll: "Alle Referenzen ansehen",
      readMore: "Vollständigen Bericht lesen",
      items: [
        {
          title: "Migration von Google Workspace zu Microsoft 365 mit strukturierter Absicherung",
          company: "Mittelständisches Unternehmen",
          summary: "Migration aller Benutzer, Mails und Daten nach Microsoft 365 inklusive Entra ID, MFA und Backup-Strategie.",
          href: "/case-studies/microsoft-365-migration"
        },
        {
          title: "Aufbau einer skalierbaren Azure-Infrastruktur und Betrieb moderner Cloud-Systeme",
          company: "group24 AG",
          summary: "Migration von Backend-Systemen in Microsoft Azure, Automatisierung und Integration von Azure Virtual Desktop.",
          href: "/case-studies/azure-cloud-platform"
        },
        {
          title: "IT-Sicherheitsanalyse und Aufbau einer strukturierten Sicherheitsorganisation",
          company: "Bellaseno GmbH",
          summary: "Durchführung einer GAP-Analyse, Identifikation kritischer Schwachstellen und Entwicklung eines Maßnahmenkatalogs.",
          href: "/case-studies/it-compliance-security"
        },
        {
          title: "Modernisierung einer Serverumgebung und Einführung einer zuverlässigen Backup-Strategie",
          company: "BiolytiQs + MAIT",
          summary: "Migration auf Windows Server 2019, Integration mit Microsoft 365 und Aufbau einer Veeam-Backup-Lösung.",
          href: "/case-studies/backup-infrastruktur-modernisierung"
        },
        {
          title: "Co-Managed IT: Gemeinsamer Betrieb der IT-Infrastruktur",
          company: "zunicode + Procivitate",
          summary: "Entlastung interner IT-Teams durch 24/7 Monitoring, Patch-Management und Second-Level Support für maximale Sicherheit.",
          href: "/case-studies/co-managed-betrieb"
        }
      ]
    },
    managedItPage: {
      hero: {
        badge: "Managed IT-Services",
        headline: "Wir reparieren nicht nur - wir garantieren Betriebssicherheit.",
        subheadline: "Verabschieden Sie sich von unvorhersehbaren IT-Problemen. Wir betreiben Ihre Infrastruktur mit voller Verantwortung - exakt abgestimmt auf Ihren Bedarf und den vereinbarten Leistungsumfang.",
        cta: "Jetzt Beratungstermin buchen",
      },
      problem: {
        headline: "IT darf kein Bremsklotz sein.",
        subheadline: "Reaktive IT-Betreuung führt oft zu vermeidbaren Problemen:",
        points: [
          { title: "Umsatzeinbußen durch Stillstand", description: "Wenn die IT steht, arbeiten Ihre Mitarbeiter nicht - die Fixkosten laufen jedoch weiter." },
          { title: "Sicherheitsbedenken", description: "Die ständige Sorge, ob Backups im Ernstfall wirklich funktionieren oder Daten sicher sind." },
          { title: "Unkalkulierbare Kosten", description: "Schwankende IT-Ausgaben durch unvorhersehbare Reparaturen und Notfalleinsätze außerhalb fester Budgets." }
        ]
      },
      solution: {
        headline: "Ganzheitliche IT-Verantwortung.",
        subheadline: "Wir wechseln von der Fehlerbehebung hin zum proaktiven Management. Wir verantworten das Ergebnis nach vereinbartem Scope.",
        points: [
          { title: "Maximale Verfügbarkeit", description: "Durch proaktive Wartung minimieren wir Störungen, bevor sie den Arbeitsfluss stören - definiert nach Ihren SLAs." },
          { title: "Kalkulierbare Budgets", description: "Sie zahlen für den gebuchten Leistungsumfang. Das gibt Ihnen volle Planungssicherheit ohne versteckte Kosten." },
          { title: "Strategische Beratung", description: "Wir begleiten Sie bei der Digitalisierung und stellen sicher, dass Ihre IT mit Ihren Zielen mitwächst." }
        ]
      },
      results: {
        headline: "Zahlen, die für sich sprechen.",
        subheadline: "Unser Erfolg misst sich an Ihrer Stabilität und Produktivität.",
        cards: [
          { metric: "SLA-basiert", label: "Verfügbarkeit" },
          { metric: "Schnell", label: "Reaktionszeit" },
          { metric: "Effizient", label: "IT-Betrieb" },
          { metric: "Geprüft", label: "Sicherheit" }
        ]
      },
      services: {
        headline: "Leistungsumfang nach Bedarf.",
        subheadline: "Unser Managed Service ist Ihre externe IT-Abteilung - flexibel und professionell.",
        items: [
          { title: "Monitoring & Management", description: "Lückenlose Überwachung Ihrer Server, Netzwerke und Endgeräte nach Vereinbarung." },
          { title: "Support & Helpdesk", description: "Kompetente Hilfe für Ihr Team im Rahmen des gebuchten Leistungsumfangs." },
          { title: "Cybersecurity & Compliance", description: "Moderner Schutz vor Bedrohungen und Einhaltung gesetzlicher Vorgaben nach Scope." },
          { title: "Backup & Disaster Recovery", description: "Automatisierte Datensicherung mit regelmäßigen Wiederherstellungstests." },
          { title: "Cloud & Infrastruktur", description: "Verwaltung von Microsoft 365, Azure und lokalen Systemen nach SLA." },
          { title: "IT-Strategie & Consulting", description: "Regelmäßige Planungstermine zur Optimierung Ihrer IT-Landschaft." }
        ]
      },
      process: {
        headline: "Der Weg zur Partnerschaft.",
        subheadline: "Ein strukturierter Übergang zu professionellen IT-Operations.",
        steps: [
          { title: "Tiefen-Audit", description: "Wir dokumentieren den Ist-Zustand und identifizieren kritische Schwachstellen." },
          { title: "Stabilisierung", description: "Wir beheben akute Risiken und bringen Ihre IT auf den vereinbarten Standard." },
          { title: "Regelbetrieb", description: "Wir übernehmen die vereinbarte Verantwortung und sorgen für einen reibungslosen Alltag." }
        ]
      },
      caseStudy: {
        headline: "Erfolge aus der Praxis.",
        company: "Logistik-Unternehmen Region Nord",
        challenge: "Häufige Serverausfälle blockierten die Abwicklung und verursachten hohe Produktivitätsverluste.",
        solution: "Umstellung auf eine Managed Hybrid-Cloud mit redundanter Anbindung nach SLA.",
        result: "Keine kritischen Ausfälle seit 24 Monaten und signifikant weniger Support-Anfragen."
      },
      philosophy: {
        quote: "Wir verkaufen keine Stunden. Wir verkaufen Betriebssicherheit nach Maß.",
        author: "Andreas Eckert, Ecksolution-IT"
      },
      faq: {
        headline: "Fragen zu unseren Managed Services.",
        items: [
          { question: "Welche Leistungen sind abgedeckt?", answer: "Der Leistungsumfang wird individuell nach Scope und SLA vereinbart. Typischerweise sind Monitoring, Wartung und Support für die definierten Systeme enthalten." },
          { question: "Wie sicher sind unsere Daten bei Ihnen?", answer: "Wir setzen auf modernste Verschlüsselung, MFA und regelmäßige Audits. Ihre Daten bleiben in Ihrem Hoheitsbereich." },
          { question: "Gibt es eine Mindestlaufzeit?", answer: "Wir setzen auf langfristige Partnerschaften. Die Vertragslaufzeiten werden individuell nach Vereinbarung festgelegt." }
        ]
      }
    },
    hybridItPage: {
      hero: {
        badge: "Hybride IT-Infrastruktur",
        headline: "Hybride IT-Infrastruktur, die einfach funktioniert",
        subheadline: "Wir betreuen Ihre IT aus Linux, Microsoft 365 und Azure – stabil, sicher und planbar. Ohne Ausfälle, ohne Chaos.",
        cta: "Kostenloses Erstgespräch",
        secondaryCta: "IT-Analyse anfordern"
      },
      problem: {
        badge: "Die Herausforderung",
        headline: "Ihre IT ist über Jahre gewachsen – aber nicht strukturiert?",
        subheadline: "Das Ergebnis: Unsicherheit, Ausfälle und unnötige Kosten.",
        points: [
          { title: "Systeme passen nicht sauber zusammen", description: "Inkompatibilitäten zwischen verschiedenen Plattformen führen zu Reibungsverlusten." },
          { title: "Sicherheitslücken entstehen unbemerkt", description: "Gewachsene Strukturen sind oft schwer zu überblicken und abzusichern." },
          { title: "Probleme kosten Zeit und Nerven", description: "Ständige Fehlersuche bindet wertvolle Ressourcen in Ihrem Unternehmen." },
          { title: "Niemand übernimmt Verantwortung", description: "Bei Problemen schieben sich verschiedene Dienstleister oft gegenseitig die Schuld zu." }
        ]
      },
      solution: {
        badge: "Die Lösung",
        headline: "Wir übernehmen Ihre hybride IT-Infrastruktur – komplett",
        subheadline: "Wir sorgen dafür, dass alles zusammen funktioniert:",
        points: [
          { title: "Linux- & Microsoft-Integration", description: "Saubere Verbindung beider Welten für maximale Flexibilität." },
          { title: "Microsoft 365 Betreuung", description: "Sichere Einrichtung und laufende Verwaltung Ihrer Cloud-Arbeitsplätze." },
          { title: "Azure Cloud-Erweiterung", description: "Flexible Skalierung Ihrer Infrastruktur durch gezielten Cloud-Einsatz." },
          { title: "Zentrale Steuerung", description: "Klare Prozesse und ein fester Ansprechpartner für alle IT-Belange." }
        ],
        footer: "Sie haben einen Ansprechpartner – wir kümmern uns um den Rest."
      },
      services: {
        badge: "Leistungen",
        headline: "Das übernehmen wir für Sie:",
        subheadline: "Ganzheitliche Betreuung Ihrer hybriden Infrastruktur.",
        items: [
          { title: "Aufbau & Optimierung", description: "Strukturierung und Modernisierung Ihrer hybriden IT-Landschaft." },
          { title: "Migration in Hybrid Cloud", description: "Sicherer Umzug Ihrer Systeme in die Azure Cloud." },
          { title: "Betrieb & Monitoring", description: "24/7 Überwachung für maximale Verfügbarkeit Ihrer Systeme." },
          { title: "M365 Betreuung", description: "Absicherung und Verwaltung Ihrer Microsoft 365 Umgebung." },
          { title: "Backup & Recovery", description: "Garantierte Datensicherheit durch moderne Disaster-Recovery-Konzepte." },
          { title: "Endpoint & Firewall", description: "Umfassender Schutz für alle Geräte und Netzwerkzugänge." }
        ]
      },
      benefits: {
        badge: "Ihr Nutzen",
        headline: "Was sich für Sie konkret verbessert:",
        items: [
          { title: "Weniger Ausfälle", description: "Höhere Produktivität durch stabilere Systeme." },
          { title: "Mehr Sicherheit", description: "Schutz Ihrer Unternehmensdaten auf Enterprise-Niveau." },
          { title: "Klare IT-Struktur", description: "Transparenz und Ordnung in Ihrer gewachsenen IT." },
          { title: "Planbare Kosten", description: "Keine bösen Überraschungen durch fixe Service-Pakete." },
          { title: "Weniger Stress", description: "Entlastung für Sie und Ihr Team im Arbeitsalltag." }
        ]
      },
      positioning: {
        headline: "Kein klassischer IT-Dienstleister",
        text: "Wir arbeiten wie ein externer IT-Verantwortlicher. Wir denken Ihre IT nicht nur technisch – sondern so, dass sie Ihr Unternehmen unterstützt."
      },
      trust: {
        badge: "Vertrauen",
        headline: "Warum Unternehmen mit uns arbeiten:",
        points: [
          { title: "Spezialisierung auf hybride IT", description: "Tiefes Expertenwissen in Linux und Microsoft Umgebungen." },
          { title: "Feste Ansprechpartner", description: "Keine wechselnden Techniker, sondern jemand, der Ihre IT kennt." },
          { title: "Klare SLAs", description: "Verbindliche Reaktionszeiten und definierte Service-Level." },
          { title: "Proaktive Betreuung", description: "Wir agieren, bevor Probleme Ihren Betrieb stören." }
        ]
      },
      process: {
        badge: "Prozess",
        headline: "So arbeiten wir:",
        steps: [
          { title: "Analyse", description: "Wir prüfen Ihre aktuelle IT auf Herz und Nieren." },
          { title: "Planung", description: "Entwicklung einer stabilen und zukunftssicheren Struktur." },
          { title: "Umsetzung", description: "Fachgerechte Migration und Implementierung der neuen Lösung." },
          { title: "Betreuung", description: "Laufende Überwachung und Optimierung Ihres IT-Betriebs." }
        ]
      },
      cta: {
        headline: "Lassen Sie uns Ihre IT analysieren",
        subheadline: "In einem kostenlosen Erstgespräch zeigen wir Ihnen, wo Ihre IT Risiken hat und wie wir sie stabiler machen.",
        button: "Termin vereinbaren"
      }
    },
    footer: {
      description: "Professionelle IT-Services für den deutschen Mittelstand. Zuverlässig, sicher und auf Augenhöhe.",
      copyright: "© {year} Ecksolution-IT Managed Services.",
      links: {
        contact: "Kontakt",
        imprint: "Impressum",
        privacy: "Datenschutz"
      },
      cta: {
        hint: "Bereit für den nächsten Schritt?",
        button: "Termin buchen"
      }
    }
  }
};
