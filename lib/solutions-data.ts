export type FaqItem = {
  question: string;
  answer: string;
};

const commonFaqs: FaqItem[] = [
  {
    question: "Was sind Managed IT Dienstleistungen für kleine und mittlere Unternehmen?",
    answer: "Managed IT Dienstleistungen bedeuten, dass Ihre IT dauerhaft betreut wird – nicht erst im Problemfall. Systeme werden überwacht, aktualisiert und abgesichert. Gerade für kleine und mittlere Unternehmen sorgt das für weniger Ausfälle und einen stabilen Arbeitsalltag."
  },
  {
    question: "Für welche Unternehmen lohnt sich ein externer IT-Verantwortlicher?",
    answer: "Vor allem für Unternehmen ohne eigene IT-Abteilung oder mit wachsender IT. Wenn Systeme komplexer werden und Probleme Zeit kosten, sorgt ein externer IT-Verantwortlicher für Struktur und übernimmt die Verantwortung für den Betrieb."
  },
  {
    question: "Was bedeutet strategische IT-Betreuung für Unternehmen?",
    answer: "Strategische IT-Betreuung bedeutet, dass Ihre IT nicht nur funktioniert, sondern mit dem Unternehmen mitwächst. Systeme werden so aufgebaut, dass sie stabil laufen, Risiken reduziert werden und neue Anforderungen sauber integriert werden können."
  },
  {
    question: "Was ist eine hybride IT-Infrastruktur aus Linux und Microsoft?",
    answer: "Eine hybride IT-Infrastruktur verbindet lokale Systeme wie Linux-Server mit Cloud-Diensten wie Microsoft 365 oder Azure. Viele Unternehmen haben genau diese Mischung – oft ohne klare Struktur. Ziel ist, dass alles sauber zusammenspielt und im Alltag zuverlässig funktioniert."
  },
  {
    question: "Wie funktioniert die Betreuung einer hybriden IT-Infrastruktur?",
    answer: "Die Systeme werden zentral überwacht, abgestimmt und kontinuierlich optimiert. Wichtig ist, dass Cloud- und On-Prem-Systeme nicht parallel nebeneinander laufen, sondern als eine saubere Infrastruktur funktionieren."
  },
  {
    question: "Was umfasst ein Hybrid Cloud Managed Service?",
    answer: "Ein Hybrid Cloud Managed Service beinhaltet die Betreuung von Cloud- und lokalen Systemen inklusive Monitoring, Updates, Sicherheit und Betrieb. Ziel ist eine stabile Umgebung, in der alles zuverlässig zusammenarbeitet."
  },
  {
    question: "Was beinhaltet eine Hybrid Cloud Transformation und Migration?",
    answer: "Bestehende Systeme werden schrittweise modernisiert und in eine hybride Umgebung überführt. Wichtig ist dabei eine klare Struktur, damit Migrationen nicht zu Chaos, Ausfällen oder Datenverlust führen."
  },
  {
    question: "Wie funktioniert die kontinuierliche Betreuung von Microsoft 365?",
    answer: "Microsoft 365 wird nicht nur eingerichtet, sondern laufend betreut. Benutzer, Berechtigungen und Sicherheitsrichtlinien werden gepflegt und an neue Anforderungen angepasst, damit die Umgebung stabil und sicher bleibt."
  },
  {
    question: "Was umfasst Microsoft 365 Compliance und Security?",
    answer: "Dazu gehören Zugriffskontrollen, Multi-Faktor-Authentifizierung, Richtlinien und Sicherheitsmechanismen. Ohne saubere Konfiguration entstehen schnell Sicherheitslücken – oft unbemerkt im Alltag."
  },
  {
    question: "Warum ist IT-Sicherheitsbetreuung für Unternehmen wichtig?",
    answer: "IT-Sicherheit ist kein einmaliges Projekt. Systeme müssen kontinuierlich überwacht und angepasst werden. Ohne laufende Betreuung entstehen Risiken, die oft erst sichtbar werden, wenn bereits Schaden entstanden ist."
  },
  {
    question: "Was gehört zu Endpoint- und Firewall-Schutz?",
    answer: "Endpoint- und Firewall-Schutz sichert Endgeräte und Netzwerke ab. Dazu gehören Zugriffskontrollen, Geräteschutz und klare Firewall-Regeln, die unbefugte Zugriffe verhindern."
  },
  {
    question: "Was bedeutet IT-Sicherheit für kritische Umgebungen (KRITIS)?",
    answer: "In kritischen Infrastrukturen gelten besonders hohe Anforderungen. Systeme müssen stabil, überwacht und nach klaren Sicherheitsrichtlinien betrieben werden, um Ausfälle und Sicherheitsvorfälle zu vermeiden."
  },
  {
    question: "Wie funktioniert Backup und Disaster Recovery in Unternehmen?",
    answer: "Backup und Disaster Recovery sorgen dafür, dass Daten im Notfall schnell wiederhergestellt werden können. Ohne klare Strategie kann ein Ausfall den gesamten Betrieb stilllegen – genau das wird damit verhindert."
  },
  {
    question: "Wie unterstützt IT-Governance und Risikomanagement Geschäftsführer?",
    answer: "IT-Governance schafft klare Strukturen und Verantwortlichkeiten. Risikomanagement hilft, Probleme früh zu erkennen und zu vermeiden, bevor sie den Geschäftsbetrieb beeinflussen."
  },
  {
    question: "Wie funktionieren IT Professional Services mit festen SLAs?",
    answer: "IT Professional Services mit SLAs definieren klare Reaktionszeiten und Leistungen. Unternehmen wissen genau, wann Unterstützung erfolgt und vermeiden unnötige Verzögerungen im Betrieb."
  }
];

export const solutionsData = {
  "hybrid-it-infrastruktur": {
    title: "Hybride IT-Infrastruktur",
    hero: "Linux, Microsoft 365 und Azure nahtlos integriert.",
    description: "Wir betreuen Ihre hybride IT-Infrastruktur – stabil, sicher und planbar. Wir verbinden das Beste aus On-Premise und Cloud für maximale Effizienz.",
    problem: {
      title: "Komplexität in der hybriden Welt",
      points: [
        "Inkonsistente Datenbestände zwischen Cloud und On-Premise",
        "Sicherheitsrisiken durch unklare Schnittstellen",
        "Hoher Administrationsaufwand für verschiedene Systeme",
        "Mangelnde Performance bei der Daten-Synchronisation"
      ]
    },
    solution: {
      title: "Nahtlose Hybrid-Integration",
      points: [
        "Zentrale Verwaltung von Identitäten und Zugriffen",
        "Optimierte Datenflüsse zwischen allen Standorten",
        "Einheitliches Sicherheitskonzept für alle Umgebungen",
        "Zukunftssichere Architektur für Linux & Windows"
      ]
    },
    features: [
      "Integration von Linux & Windows",
      "Azure Hybrid Cloud Setup",
      "Active Directory Synchronisierung",
      "Sichere Standortvernetzung"
    ],
    benefits: [
      "Maximale Flexibilität",
      "Hohe Ausfallsicherheit",
      "Zukunftssichere IT-Architektur"
    ],
    results: [
      { metric: "100%", label: "Datenkonsistenz" },
      { metric: "40%", label: "Weniger Admin-Aufwand" },
      { metric: "99,9%", label: "Verfügbarkeit" }
    ],
    process: {
      analysis: "Wir analysieren Ihre bestehende Infrastruktur und identifizieren Optimierungspotenziale für die Hybrid-Cloud.",
      implementation: "Wir implementieren die notwendigen Schnittstellen und migrieren Ihre Workloads kontrolliert.",
      operations: "Wir übernehmen den laufenden Betrieb und sorgen für kontinuierliche Optimierung und Sicherheit."
    },
    caseStudy: {
      title: "Stabilisierung und Automatisierung hybrider IT-Infrastrukturen",
      companyType: "zunicode GmbH",
      situation: "Das Unternehmen betrieb eine hybride IT-Umgebung mit stetig steigender Komplexität.",
      problem: "Hoher manueller Aufwand bei Routineaufgaben und fehlende Struktur.",
      decisionPoint: "Die internen Ressourcen waren durch das Tagesgeschäft vollständig gebunden.",
      solution: "Automatisierung mit Ansible & PowerShell sowie Strukturierung der Prozesse.",
      result: "Reduzierte manuelle Eingriffe und stabilerer IT-Betrieb.",
      slug: "zunicode-automatisierung"
    },
    faq: commonFaqs
  },
  "managed-it-service": {
    title: "Managed IT-Service",
    hero: "Professioneller IT-Betrieb mit voller Verantwortung.",
    description: "Wir übernehmen die volle Verantwortung für Ihre IT-Infrastruktur. Proaktiv, sicher und nach vereinbartem Leistungsumfang.",
    problem: {
      title: "IT als ständiger Unruheherd",
      points: [
        "Unvorhersehbare IT-Kosten durch reaktives Handeln",
        "Mangelnde Expertise für komplexe Sicherheitsfragen",
        "Lange Ausfallzeiten bei technischen Problemen",
        "Keine strategische Weiterentwicklung der IT"
      ]
    },
    solution: {
      title: "Proaktives IT-Management",
      points: [
        "Feste monatliche Pauschale für volle Kostentransparenz",
        "24/7 Monitoring und proaktive Fehlerbehebung",
        "Regelmäßige Sicherheits-Updates und Patch-Management",
        "Strategische Beratung durch Ihren persönlichen vCIO"
      ]
    },
    features: [
      "24/7 Monitoring & Alerting",
      "Proaktives Patch-Management",
      "Helpdesk für Mitarbeiter",
      "Regelmäßige IT-Health-Checks"
    ],
    benefits: [
      "Planbare IT-Kosten",
      "Höchste Systemverfügbarkeit",
      "Entlastung interner Ressourcen"
    ],
    results: [
      { metric: "30%", label: "Kostenersparnis" },
      { metric: "99,9%", label: "System-Uptime" },
      { metric: "100%", label: "Fokus aufs Kerngeschäft" }
    ],
    process: {
      analysis: "Wir führen ein umfassendes Audit Ihrer IT durch und definieren gemeinsam die Service-Level.",
      implementation: "Wir standardisieren Ihre Systeme und führen unsere Management-Tools ein.",
      operations: "Wir betreiben Ihre IT proaktiv und berichten regelmäßig über den Status."
    },
    caseStudy: {
      title: "Stabilisierung und Automatisierung hybrider IT-Infrastrukturen",
      companyType: "zunicode GmbH",
      situation: "Das Unternehmen nutzte reaktiven IT-Support, was zu häufigen Verzögerungen führte.",
      problem: "Veraltete Systeme und mangelnde Sicherheit behinderten die Expansion.",
      decisionPoint: "Sie brauchten einen Partner für den gesamten IT-Lebenszyklus.",
      solution: "Umstellung auf Managed IT Services mit Fokus auf Automatisierung.",
      result: "Stabilisierte IT-Umgebung und klare Technologie-Roadmap.",
      slug: "zunicode-automatisierung"
    },
    faq: commonFaqs
  },
  "externer-it-verantwortlicher": {
    title: "Externer IT-Verantwortlicher",
    hero: "Strategische IT-Leitung für Ihr Unternehmen.",
    description: "Sichern Sie sich die Expertise eines erfahrenen IT-Leiters, ohne die Kosten für eine Vollzeitstelle. Wir steuern Ihre IT-Strategie und Projekte.",
    problem: {
      title: "Fehlende strategische Führung",
      points: [
        "IT-Entscheidungen ohne langfristige Strategie",
        "Keine Kontrolle über IT-Budgets und Investitionen",
        "Schwierigkeiten bei der Steuerung externer Dienstleister",
        "Mangelnde Ausrichtung der IT an den Geschäftszielen"
      ]
    },
    solution: {
      title: "Ihre IT-Leitung auf Abruf",
      points: [
        "Entwicklung und Umsetzung einer IT-Roadmap",
        "Budgetplanung und Optimierung der IT-Kosten",
        "Projektleitung für komplexe IT-Vorhaben",
        "Regelmäßige Berichterstattung an die Geschäftsführung"
      ]
    },
    features: [
      "Strategische IT-Beratung",
      "Budgetplanung & Controlling",
      "Projektleitung & Steuerung",
      "Dienstleister-Management"
    ],
    benefits: [
      "Professionelle IT-Leitung",
      "Optimierte IT-Investitionen",
      "Klare Technologie-Roadmap"
    ],
    results: [
      { metric: "100%", label: "Strategische Klarheit" },
      { metric: "20%", label: "Budget-Optimierung" },
      { metric: "Top", label: "Projekt-Erfolgsquote" }
    ],
    process: {
      analysis: "Wir analysieren Ihre Geschäftsziele und den aktuellen Stand Ihrer IT.",
      implementation: "Wir erstellen eine detaillierte IT-Roadmap und definieren Verantwortlichkeiten.",
      operations: "Wir steuern Ihre IT-Projekte und beraten Sie regelmäßig in allen IT-Fragen."
    },
    caseStudy: {
      title: "Aufbau und Absicherung einer Microsoft-365-Umgebung",
      companyType: "Procivitate gGmbH",
      situation: "Die IT-Infrastruktur war über Jahre gewachsen, ohne klare strategische Ausrichtung.",
      problem: "Fehlende IT-Leitung und unklare Sicherheitslage.",
      decisionPoint: "Der Vorstand erkannte die Notwendigkeit einer professionellen IT-Steuerung.",
      solution: "Übernahme der externen IT-Leitung und strategische Beratung.",
      result: "Klare IT-Roadmap und deutlich verbessertes Sicherheitsniveau.",
      slug: "procivitate-strategie"
    }
  },
  "it-sicherheit": {
    title: "IT-Sicherheit für Unternehmen",
    hero: "Ganzheitlicher Schutz vor Cyber-Bedrohungen.",
    description: "Wir schützen Ihre Unternehmensdaten mit einem mehrschichtigen Sicherheitskonzept. Von der Prävention bis zur schnellen Reaktion im Ernstfall.",
    problem: {
      title: "Die Gefahr ist real",
      points: [
        "Tägliche Angriffe durch Ransomware und Phishing",
        "Schwachstellen in veralteter Software und Hardware",
        "Mangelndes Sicherheitsbewusstsein der Mitarbeiter",
        "Fehlende Compliance mit gesetzlichen Vorgaben (DSGVO)"
      ]
    },
    solution: {
      title: "Mehrschichtige Verteidigung",
      points: [
        "Endpoint Detection and Response (EDR) der nächsten Generation",
        "Regelmäßige Sicherheits-Audits und Schwachstellen-Scans",
        "Security-Awareness-Schulungen für Ihr Team",
        "Implementierung von Zero-Trust-Architekturen"
      ]
    },
    features: [
      "Managed Firewall & EDR",
      "Vulnerability Scanning",
      "Security Awareness Training",
      "Incident Response Planung"
    ],
    benefits: [
      "Schutz vor Ransomware",
      "DSGVO-Compliance",
      "Minimiertes Haftungsrisiko"
    ],
    results: [
      { metric: "0", label: "Erfolgreiche Angriffe" },
      { metric: "100%", label: "Compliance-Erfüllung" },
      { metric: "24/7", label: "Aktive Überwachung" }
    ],
    process: {
      analysis: "Wir führen eine umfassende Risikoanalyse durch und identifizieren Schwachstellen.",
      implementation: "Wir implementieren die notwendigen Sicherheitslösungen und härten Ihre Systeme.",
      operations: "Wir überwachen Ihre IT kontinuierlich und reagieren sofort auf Anomalien."
    },
    caseStudy: {
      title: "Analyse und Aufbau einer strukturierten IT-Sicherheitsstrategie",
      companyType: "Bellaseno GmbH",
      situation: "Das Unternehmen verfügte über gewachsene IT-Strukturen ohne klare Sicherheitsbewertung.",
      problem: "Unklare Sicherheitslage und fehlende Priorisierung von Risiken.",
      decisionPoint: "Es fehlte eine belastbare Entscheidungsgrundlage für Investitionen.",
      solution: "Durchführung einer GAP-Analyse und Entwicklung eines Maßnahmenkatalogs.",
      result: "Klare Übersicht über Risiken und strukturierte Entscheidungsbasis.",
      slug: "bellaseno-security"
    },
    faq: commonFaqs
  },
  "endpoint-firewall-security": {
    title: "Endpoint & Firewall Security",
    hero: "Schutz für alle Geräte und Netzwerke.",
    description: "Sichern Sie jeden Endpunkt und jede Netzwerkverbindung ab. Wir bieten modernste Firewall-Lösungen und Endpoint-Protection für maximale Sicherheit.",
    problem: {
      title: "Offene Tore für Angreifer",
      points: [
        "Ungeschützte Laptops und Mobilgeräte im Homeoffice",
        "Veraltete Firewalls ohne moderne Bedrohungserkennung",
        "Unkontrollierter Datenabfluss durch fehlende Segmentierung",
        "Mangelnde Sichtbarkeit von Angriffen auf Endgeräte"
      ]
    },
    solution: {
      title: "Umfassender Netzwerkschutz",
      points: [
        "Next-Generation Firewalls mit Deep Packet Inspection",
        "Zentral verwaltete Endpoint-Security (Antivirus & EDR)",
        "Sichere VPN-Verbindungen für mobiles Arbeiten",
        "Netzwerk-Segmentierung zur Schadensbegrenzung"
      ]
    },
    features: [
      "Next-Gen Firewall Setup",
      "Endpoint Protection (EDR)",
      "Sicheres VPN & Remote Access",
      "Web-Content-Filtering"
    ],
    benefits: [
      "Sicheres Homeoffice",
      "Schutz aller Endgeräte",
      "Transparenz im Netzwerkverkehr"
    ],
    results: [
      { metric: "100%", label: "Endpunkt-Abdeckung" },
      { metric: "Realtime", label: "Bedrohungserkennung" },
      { metric: "Sicher", label: "Remote-Arbeit" }
    ],
    process: {
      analysis: "Wir prüfen Ihre aktuelle Netzwerkarchitektur und den Schutzstatus Ihrer Endgeräte.",
      implementation: "Wir installieren moderne Firewalls und rollen Endpoint-Protection auf allen Geräten aus.",
      operations: "Wir verwalten Ihre Sicherheitsrichtlinien und reagieren auf Sicherheitsereignisse."
    },
    caseStudy: {
      title: "Modernisierung der E-Mail-Infrastruktur und Geräteverwaltung",
      companyType: "InCase Handelsgesellschaft mbH",
      situation: "Keine zentrale Kontrolle über mobile Firmengeräte.",
      problem: "Die IT-Sicherheit war durch ungeschützte Endgeräte gefährdet.",
      decisionPoint: "Notwendigkeit einer zentralen Verwaltungslösung.",
      solution: "Einführung von Microsoft Intune zur Geräteverwaltung.",
      result: "Zentral verwaltete und abgesicherte mobile Endgeräte.",
      slug: "incase-modernisierung"
    }
  },
  "disaster-recovery": {
    title: "Disaster Recovery",
    hero: "Schnelle Wiederherstellung im Ernstfall.",
    description: "Ein Notfallplan ist gut, eine funktionierende Wiederherstellung ist besser. Wir sorgen dafür, dass Ihr Betrieb nach einem Ausfall in kürzester Zeit wieder läuft.",
    problem: {
      title: "Der Albtraum des Totalausfalls",
      points: [
        "Keine getesteten Wiederherstellungspläne vorhanden",
        "Lange Ausfallzeiten kosten massiv Geld und Vertrauen",
        "Datenverlust durch fehlerhafte oder veraltete Backups",
        "Unklarheit über Verantwortlichkeiten im Krisenfall"
      ]
    },
    solution: {
      title: "Garantierte Geschäftskontinuität",
      points: [
        "Detaillierte Disaster-Recovery-Pläne (DRP)",
        "Regelmäßige Wiederherstellungstests und Simulationen",
        "Cloud-basierte Recovery-Umgebungen für schnellen Start",
        "Definierte RTOs und RPOs für alle kritischen Systeme"
      ]
    },
    features: [
      "Backup-Integritätsprüfung",
      "Disaster Recovery Planung",
      "Wiederherstellungs-Simulationen",
      "Offsite-Replikation"
    ],
    benefits: [
      "Minimale Ausfallzeiten",
      "Garantierte Datenrettung",
      "Geschäftskontinuität"
    ],
    results: [
      { metric: "< 4 Std", label: "Wiederherstellungszeit" },
      { metric: "100%", label: "Datenintegrität" },
      { metric: "Sicher", label: "Krisenfestigkeit" }
    ],
    process: {
      analysis: "Wir identifizieren Ihre geschäftskritischen Prozesse und definieren Wiederherstellungsziele.",
      implementation: "Wir bauen die notwendige Infrastruktur auf und erstellen den Notfallplan.",
      operations: "Wir führen regelmäßige Tests durch und halten den Plan aktuell."
    },
    caseStudy: {
      title: "Modernisierung einer Serverumgebung und Backup-Strategie",
      companyType: "BiolytiQs GmbH",
      situation: "Veraltete Serverumgebung ohne moderne Backup-Lösung.",
      problem: "Hohes Risiko von Datenverlust bei Hardwaredefekt.",
      decisionPoint: "Hardware erreichte das Ende ihrer Lebensdauer.",
      solution: "Migration auf neue Server und Veeam-Backup-Lösung.",
      result: "Zuverlässiges Backup und schnelle Wiederherstellungsmöglichkeit.",
      slug: "biolytiqs-server"
    },
    faq: commonFaqs
  },
  "netzwerk-management": {
    title: "Netzwerk-Management",
    hero: "Stabile und performante Unternehmensnetzwerke.",
    description: "Wir sorgen für eine reibungslose Vernetzung Ihrer Standorte und Mitarbeiter. Sicher, schnell und jederzeit verfügbar.",
    problem: {
      title: "Instabile Verbindungen bremsen aus",
      points: [
        "Häufige WLAN-Abbrüche und langsame Internetverbindungen",
        "Sicherheitsrisiken durch unverschlüsselte Netzwerksegmente",
        "Schwierigkeiten bei der Anbindung von Homeoffice-Mitarbeitern",
        "Mangelnde Übersicht über die Netzwerkauslastung"
      ]
    },
    solution: {
      title: "Intelligente Netzwerksteuerung",
      points: [
        "Planung und Aufbau von High-Performance WLAN-Netzwerken",
        "Sichere Standortvernetzung via SD-WAN oder VPN",
        "Kontinuierliches Monitoring der Netzwerkperformance",
        "Segmentierung des Netzwerks für erhöhte Sicherheit"
      ]
    },
    features: [
      "WLAN-Ausleuchtung & Planung",
      "Switch- & Router-Management",
      "Netzwerk-Segmentierung",
      "Performance-Monitoring"
    ],
    benefits: [
      "Stabile Verbindungen",
      "Optimale Performance",
      "Sichere Netzwerkstruktur"
    ],
    results: [
      { metric: "99,9%", label: "Netzwerk-Uptime" },
      { metric: "Top", label: "WLAN-Abdeckung" },
      { metric: "Sicher", label: "Standortvernetzung" }
    ],
    process: {
      analysis: "Wir führen eine WLAN-Ausleuchtung und Netzwerkanalyse durch.",
      implementation: "Wir installieren moderne Netzwerkkomponenten und konfigurieren die Segmente.",
      operations: "Wir überwachen Ihr Netzwerk rund um die Uhr und optimieren die Performance."
    },
    caseStudy: {
      title: "Integration hybrider IT-Infrastrukturen",
      companyType: "MAIT Germany GmbH",
      situation: "Heterogene IT-Infrastruktur durch zahlreiche Akquisitionen.",
      problem: "Unterschiedliche Netzwerkstandards erschwerten den Betrieb.",
      decisionPoint: "Notwendigkeit einheitlicher Konzernstandards.",
      solution: "Integration von On-Prem- und Cloud-Systemen sowie Standardisierung.",
      result: "Einheitliche Standards und reduzierter Administrationsaufwand.",
      slug: "mait-enterprise"
    }
  },
  "hardware-client-management": {
    title: "Hardware & Client Management",
    hero: "Lifecycle-Management für Ihre Endgeräte.",
    description: "Wir kümmern uns um Ihre Hardware von der Beschaffung bis zur Entsorgung. Damit Ihre Mitarbeiter immer mit optimalen Geräten arbeiten können.",
    problem: {
      title: "Chaos bei der Geräteverwaltung",
      points: [
        "Veraltete Laptops bremsen die Mitarbeiterproduktivität",
        "Keine Übersicht über Garantiezeiten und Hardware-Alter",
        "Hoher Aufwand beim Onboarding neuer Mitarbeiter",
        "Sicherheitsrisiken durch nicht verwaltete Endgeräte"
      ]
    },
    solution: {
      title: "Standardisierte Hardware-Prozesse",
      points: [
        "Zentrale Beschaffung und Konfiguration (Zero-Touch)",
        "Automatisierte Softwareverteilung und Patch-Management",
        "Proaktiver Austausch veralteter Hardware",
        "Sichere Datenlöschung bei Geräterückgabe"
      ]
    },
    features: [
      "Automatisierte Bereitstellung",
      "Software-Verteilung",
      "Hardware-Lifecycle-Management",
      "Inventarisierung & Asset-Tracking"
    ],
    benefits: [
      "Schnelles Onboarding",
      "Aktuelle & sichere Software",
      "Geringer Supportaufwand"
    ],
    results: [
      { metric: "100%", label: "Geräte-Inventur" },
      { metric: "Schnell", label: "Mitarbeiter-Onboarding" },
      { metric: "0", label: "Hardware-Ausfälle" }
    ],
    process: {
      analysis: "Wir erfassen Ihren aktuellen Hardwarebestand und definieren Standards.",
      implementation: "Wir führen eine Client-Management-Lösung ein und automatisieren das Setup.",
      operations: "Wir verwalten den gesamten Lebenszyklus Ihrer Geräte proaktiv."
    },
    caseStudy: {
      title: "Einführung mobiler Geräteverwaltung",
      companyType: "InCase Handelsgesellschaft mbH",
      situation: "Keine zentrale Kontrolle über mobile Firmengeräte.",
      problem: "Sicherheitsrisiken durch ungeschützte Endgeräte.",
      decisionPoint: "Wunsch nach moderner E-Mail-Infrastruktur und Sicherheit.",
      solution: "Migration zu Exchange Online und Einführung von Microsoft Intune.",
      result: "Zentral verwaltete und abgesicherte mobile Endgeräte.",
      slug: "incase-modernisierung"
    }
  },
  "azure-hybrid-betreuung": {
    title: "Azure Hybrid Betreuung",
    hero: "Spezialisierte Betreuung Ihrer Azure-Umgebung.",
    description: "Nutzen Sie die volle Power der Microsoft Cloud. Wir betreuen Ihre Azure-Infrastruktur und sorgen für optimale Performance und Kostenkontrolle.",
    problem: {
      title: "Komplexität der Cloud-Verwaltung",
      points: [
        "Explodierende Cloud-Kosten durch fehlende Optimierung",
        "Sicherheitslücken in der Cloud-Konfiguration",
        "Schwierigkeiten bei der Integration mit lokalen Systemen",
        "Mangel an internem Azure-Fachwissen"
      ]
    },
    solution: {
      title: "Azure-Expertise für Ihr Unternehmen",
      points: [
        "Kontinuierliche Kostenoptimierung (FinOps)",
        "Sicherheits-Härtung nach Azure-Best-Practices",
        "Betreuung von Azure Virtual Desktop und Cloud-Servern",
        "Nahtlose Anbindung an Ihre lokale Infrastruktur"
      ]
    },
    features: [
      "Azure Resource Management",
      "Identity & Access Management",
      "Cloud-Kosten-Optimierung",
      "Azure Virtual Desktop Support"
    ],
    benefits: [
      "Skalierbare Infrastruktur",
      "Optimale Cloud-Kosten",
      "Maximale Performance"
    ],
    results: [
      { metric: "25%", label: "Kostenersparnis" },
      { metric: "Top", label: "Cloud-Performance" },
      { metric: "Sicher", label: "Azure-Konfiguration" }
    ],
    process: {
      analysis: "Wir prüfen Ihre aktuelle Azure-Umgebung auf Kosten und Sicherheit.",
      implementation: "Wir optimieren die Konfiguration und implementieren Monitoring-Tools.",
      operations: "Wir betreuen Ihre Azure-Ressourcen laufend und beraten Sie bei Erweiterungen."
    },
    caseStudy: {
      title: "Migration in Microsoft Azure",
      companyType: "group24 AG",
      situation: "Backend-Systeme waren schwer skalierbar und wartbar.",
      problem: "Hardware war veraltet, Expansion geplant.",
      decisionPoint: "Notwendigkeit einer skalierbaren Cloud-Infrastruktur.",
      solution: "Migration in Azure und Integration von Azure Virtual Desktop.",
      result: "Maximale Skalierbarkeit und stabile Infrastruktur.",
      slug: "group24-azure"
    }
  },
  "hybrid-cloud-transformation": {
    title: "Hybrid Cloud Transformation",
    hero: "Strategische Transformation Ihrer IT.",
    description: "Wir begleiten Sie auf dem Weg in die Cloud. Schritt für Schritt, sicher und perfekt auf Ihre Geschäftsziele abgestimmt.",
    problem: {
      title: "Stillstand durch veraltete Strukturen",
      points: [
        "Inflexible IT-Systeme verhindern Innovation",
        "Hohe Wartungskosten für veraltete Rechenzentren",
        "Angst vor Datenverlust bei der Cloud-Migration",
        "Unklare Roadmap für die digitale Transformation"
      ]
    },
    solution: {
      title: "Ihr Weg in die Cloud-Zukunft",
      points: [
        "Entwicklung einer individuellen Cloud-Strategie",
        "Schrittweise Migration kritischer Workloads",
        "Aufbau einer hybriden Cloud-Architektur",
        "Schulung Ihrer Mitarbeiter für die neue Umgebung"
      ]
    },
    features: [
      "Cloud-Readiness-Analyse",
      "Migrations-Strategie",
      "Hybrid-Cloud-Architektur",
      "Post-Migration Support"
    ],
    benefits: [
      "Sichere Cloud-Migration",
      "Moderne IT-Infrastruktur",
      "Steigerung der Agilität"
    ],
    results: [
      { metric: "100%", label: "Transformations-Erfolg" },
      { metric: "Hoch", label: "Innovationskraft" },
      { metric: "Flexibel", label: "IT-Infrastruktur" }
    ],
    process: {
      analysis: "Wir bewerten Ihre IT-Landschaft und definieren die Cloud-Ziele.",
      implementation: "Wir führen die Transformation in kontrollierten Phasen durch.",
      operations: "Wir unterstützen Sie beim Betrieb der neuen Hybrid-Cloud-Umgebung."
    },
    caseStudy: {
      title: "Migration in Microsoft Azure",
      companyType: "group24 AG",
      situation: "Veraltete Hardware und komplexe Betriebsprozesse.",
      problem: "Fehlende Skalierbarkeit für geplante Expansion.",
      decisionPoint: "Entscheidung für eine grundlegende Cloud-Transformation.",
      solution: "Migration bestehender Systeme in Microsoft Azure.",
      result: "Stabile, hochverfügbare und skalierbare Systeme.",
      slug: "group24-azure"
    }
  },
  "it-projekte-mit-slas": {
    title: "IT-Projekte mit festen SLAs",
    hero: "Planbare Umsetzung Ihrer IT-Vorhaben.",
    description: "Wir realisieren Ihre IT-Projekte termingerecht und zum Festpreis. Mit klaren Service-Level-Agreements für höchste Qualität.",
    problem: {
      title: "Projekte ohne Ende und Budget",
      points: [
        "Uferlose Projektlaufzeiten ohne klare Ergebnisse",
        "Explodierende Kosten durch unklare Anforderungen",
        "Mangelnde Qualität bei der Umsetzung",
        "Fehlende Dokumentation nach Projektabschluss"
      ]
    },
    solution: {
      title: "Ergebnisorientiertes Projektmanagement",
      points: [
        "Detaillierte Planung mit festen Meilensteinen",
        "Verbindliche Festpreisangebote für volle Kontrolle",
        "Garantierte Service-Level während und nach dem Projekt",
        "Vollständige Dokumentation und Übergabe"
      ]
    },
    features: [
      "Festpreis-Garantie",
      "Meilenstein-Planung",
      "Qualitätssicherung",
      "Projektdokumentation"
    ],
    benefits: [
      "Volle Kostenkontrolle",
      "Termingerechte Lieferung",
      "Höchste Umsetzungsqualität"
    ],
    results: [
      { metric: "100%", label: "Termintreue" },
      { metric: "Fix", label: "Budget-Garantie" },
      { metric: "Top", label: "Umsetzungsqualität" }
    ],
    process: {
      analysis: "Wir definieren gemeinsam die Projektziele und Anforderungen.",
      implementation: "Wir setzen das Projekt nach dem vereinbarten Zeitplan um.",
      operations: "Wir übergeben das Projekt and sichern den Betrieb durch SLAs ab."
    },
    caseStudy: {
      title: "Migration von Google Workspace zu Microsoft 365",
      companyType: "Schilderdienst Schadhauser",
      situation: "Veraltete IT-Umgebung ohne klare Strukturen.",
      problem: "Fehlende zentrale Kontrolle und Sicherheitsrisiken.",
      decisionPoint: "Notwendigkeit einer strukturierten Migration.",
      solution: "Projektbasierte Migration zu Microsoft 365 mit festem Zeitplan.",
      result: "Klare und strukturierte IT-Umgebung innerhalb des Zeitrahmens.",
      slug: "schadhauser-m365"
    },
    faq: commonFaqs
  },
  "it-risiko-audit": {
    title: "IT-Risiko-Audit",
    hero: "Schwachstellen finden und gezielt beheben.",
    description: "Wissen Sie, wie sicher Ihre IT wirklich ist? Unser Audit deckt versteckte Risiken auf und gibt Ihnen klare Handlungsempfehlungen.",
    problem: {
      title: "Das Risiko des Unbekannten",
      points: [
        "Unsicherheit über den tatsächlichen Sicherheitsstatus",
        "Versteckte Schwachstellen in Netzwerk und Servern",
        "Ungetestete Backups, die im Ernstfall versagen könnten",
        "Compliance-Risiken durch fehlende Dokumentation"
      ]
    },
    solution: {
      title: "Vollständige IT-Transparenz",
      points: [
        "Umfassender Check von Infrastruktur und Sicherheit",
        "Prüfung der Backup-Integrität und Wiederherstellbarkeit",
        "Analyse der IT-Prozesse und Dokumentation",
        "Priorisierter Maßnahmenplan zur Risikominimierung"
      ]
    },
    features: [
      "Infrastruktur-Check",
      "Sicherheits-Audit",
      "Backup-Validierung",
      "Maßnahmenkatalog"
    ],
    benefits: [
      "Transparente Risikolage",
      "Klare Priorisierung",
      "Sichere Entscheidungsbasis"
    ],
    results: [
      { metric: "100%", label: "Risiko-Transparenz" },
      { metric: "Klar", label: "Handlungsempfehlungen" },
      { metric: "Sicher", label: "Entscheidungsbasis" }
    ],
    process: {
      analysis: "Wir führen eine detaillierte Bestandsaufnahme Ihrer IT durch.",
      implementation: "Wir analysieren die Daten und bewerten die Risiken.",
      operations: "Wir präsentieren die Ergebnisse und unterstützen bei der Behebung."
    },
    caseStudy: {
      title: "Analyse und Aufbau einer IT-Sicherheitsstrategie",
      companyType: "Bellaseno GmbH",
      situation: "Gewachsene IT-Strukturen ohne klare Sicherheitsbewertung.",
      problem: "Unklare Sicherheitslage und fehlende Priorisierung.",
      decisionPoint: "Bedarf an einer belastbaren Entscheidungsgrundlage.",
      solution: "Durchführung einer GAP-Analyse und Risikoidentifikation.",
      result: "Klare Übersicht über Risiken und strukturierte Entscheidungsbasis.",
      slug: "bellaseno-security"
    }
  },
  "strategische-it-betreuung": {
    title: "Strategische IT-Betreuung",
    hero: "Langfristige Planung Ihrer IT-Landschaft.",
    description: "Wir denken heute schon an morgen. Mit unserer strategischen Betreuung richten wir Ihre IT optimal auf Ihre zukünftigen Geschäftsziele aus.",
    problem: {
      title: "IT als Wachstumsbremse",
      points: [
        "Veraltete Systeme verhindern neue Geschäftsmodelle",
        "Keine Planung für zukünftige Kapazitätsbedarfe",
        "Technologie-Entscheidungen ohne strategischen Fokus",
        "Mangelnde Flexibilität bei Marktveränderungen"
      ]
    },
    solution: {
      title: "Zukunftssichere IT-Strategie",
      points: [
        "Regelmäßige Strategie-Gespräche auf Management-Ebene",
        "Entwicklung einer langfristigen IT-Roadmap",
        "Beratung zu neuen Technologien und Trends",
        "Kontinuierliche Anpassung der IT an das Wachstum"
      ]
    },
    features: [
      "IT-Roadmap Erstellung",
      "Technologie-Scouting",
      "Business-IT Alignment",
      "Digitalisierungs-Beratung"
    ],
    benefits: [
      "Zukunftssichere IT",
      "Unterstützung der Geschäftsziele",
      "Wettbewerbsvorteile"
    ],
    results: [
      { metric: "3 J.", label: "Planungshorizont" },
      { metric: "Top", label: "Zukunftsfähigkeit" },
      { metric: "100%", label: "Business-Alignment" }
    ],
    process: {
      analysis: "Wir verstehen Ihre Geschäftsstrategie und die Anforderungen der Fachbereiche.",
      implementation: "Wir entwickeln eine darauf abgestimmte IT-Strategie.",
      operations: "Wir begleiten die Umsetzung und passen die Strategie laufend an."
    },
    caseStudy: {
      title: "Aufbau einer Microsoft-365-Umgebung mit klarer IT-Strategie",
      companyType: "Procivitate gGmbH",
      situation: "IT-Infrastruktur ohne klare strategische Ausrichtung.",
      problem: "Fehlende IT-Leitung und unklare Sicherheitslage.",
      decisionPoint: "Wunsch nach professioneller IT-Steuerung.",
      solution: "Übernahme der externen IT-Leitung und strategische Beratung.",
      result: "Klare IT-Roadmap und verbessertes Sicherheitsniveau.",
      slug: "procivitate-strategie"
    }
  },
  "microsoft-365-compliance-betreuung": {
    title: "Microsoft 365 Compliance Betreuung",
    hero: "Rechtssichere Nutzung von M365.",
    description: "Wir sorgen dafür, dass Sie Microsoft 365 datenschutzkonform und sicher nutzen. Wir konfigurieren Ihre Compliance-Einstellungen nach höchsten Standards.",
    problem: {
      title: "Compliance-Falle Cloud",
      points: [
        "Unsicherheit über die DSGVO-konforme Nutzung von M365",
        "Fehlende Kontrolle über den Datenabfluss (DLP)",
        "Unzureichende Archivierung geschäftskritischer E-Mails",
        "Mangelnde Übersicht über externe Freigaben"
      ]
    },
    solution: {
      title: "Sichere & Konforme Cloud",
      points: [
        "Konfiguration von Data Loss Prevention (DLP) Richtlinien",
        "Einrichtung rechtssicherer E-Mail-Archivierung",
        "Überwachung und Steuerung externer Zugriffe",
        "Regelmäßige Compliance-Reports und Audits"
      ]
    },
    features: [
      "DLP-Konfiguration",
      "E-Mail-Archivierung",
      "Conditional Access Setup",
      "Compliance-Reporting"
    ],
    benefits: [
      "Rechtssichere Cloud-Nutzung",
      "Schutz sensibler Daten",
      "Audit-Sicherheit"
    ],
    results: [
      { metric: "100%", label: "DSGVO-Compliance" },
      { metric: "Sicher", label: "Datenarchivierung" },
      { metric: "Klar", label: "Zugriffskontrolle" }
    ],
    process: {
      analysis: "Wir prüfen Ihre aktuellen M365-Einstellungen auf Compliance-Lücken.",
      implementation: "Wir setzen die notwendigen Richtlinien und Archivierungslösungen um.",
      operations: "Wir überwachen die Einhaltung der Richtlinien und passen sie bei Bedarf an."
    },
    caseStudy: {
      title: "Aufbau und Absicherung einer Microsoft-365-Umgebung",
      companyType: "Procivitate gGmbH",
      situation: "Keine zentralen Compliance- oder Sicherheitsrichtlinien.",
      problem: "Hohes Risiko von Datenlecks und ineffiziente Prozesse.",
      decisionPoint: "Notwendigkeit eines professionellen Managements.",
      solution: "Implementierung erweiterter Sicherheits- und Compliance-Funktionen.",
      result: "Verbesserte Sicherheitslage und gesteigerte Teamproduktivität.",
      slug: "procivitate-strategie"
    },
    faq: commonFaqs
  },
  "it-governance-risikomanagement": {
    title: "IT-Governance & Risikomanagement",
    hero: "Strukturierte IT-Prozesse und Sicherheit.",
    description: "Wir etablieren klare Regeln und Prozesse für Ihre IT. Damit minimieren wir Risiken und stellen die Einhaltung aller Vorgaben sicher.",
    problem: {
      title: "Wildwuchs in der IT-Landschaft",
      points: [
        "Unklare Verantwortlichkeiten bei IT-Entscheidungen",
        "Fehlende Standards für IT-Sicherheit und Betrieb",
        "Kein systematisches Management von IT-Risiken",
        "Schwierigkeiten bei der Erfüllung regulatorischer Anforderungen"
      ]
    },
    solution: {
      title: "Strukturierte IT-Steuerung",
      points: [
        "Aufbau eines IT-Governance-Frameworks",
        "Etablierung eines kontinuierlichen Risikomanagements",
        "Definition von IT-Richtlinien und Standards",
        "Überwachung der Einhaltung (Compliance-Monitoring)"
      ]
    },
    features: [
      "IT-Governance-Framework",
      "Risikomanagement-Prozesse",
      "IT-Richtlinien & Standards",
      "Compliance-Monitoring"
    ],
    benefits: [
      "Strukturierte IT-Prozesse",
      "Minimierte IT-Risiken",
      "Governance-Konformität"
    ],
    results: [
      { metric: "Top", label: "Prozessqualität" },
      { metric: "Min.", label: "IT-Risiken" },
      { metric: "100%", label: "Governance-Konformität" }
    ],
    process: {
      analysis: "Wir analysieren Ihre bestehenden IT-Prozesse und regulatorischen Anforderungen.",
      implementation: "Wir definieren das Governance-Modell und führen Risikomanagement-Prozesse ein.",
      operations: "Wir unterstützen Sie bei der laufenden Steuerung und Überwachung der IT."
    },
    caseStudy: {
      title: "Analyse und Aufbau einer IT-Sicherheitsstrategie",
      companyType: "Bellaseno GmbH",
      situation: "Gewachsene IT-Strukturen ohne klare Governance.",
      problem: "Unklare Sicherheitslage und fehlende Priorisierung.",
      decisionPoint: "Bedarf an einer strukturierten Entscheidungsbasis.",
      solution: "Durchführung einer GAP-Analyse und Entwicklung eines Maßnahmenkatalogs.",
      result: "Klare Übersicht über Risiken und strukturierte Entscheidungsbasis.",
      slug: "bellaseno-security"
    }
  },
  "managed-backup": {
    title: "Managed Backup & Disaster Recovery",
    hero: "Automatische Backups, die sicherstellen, dass keine Daten verloren gehen.",
    description: "Wir garantieren Ihre Geschäftskontinuität mit unveränderlichen Backups, schnellen Wiederherstellungszeiten und regelmäßigen Katastrophensimulations-Tests.",
    problem: {
      title: "Das Risiko von Datenverlust",
      points: [
        "Manuelle Backups schlagen fehl, ohne dass es jemand merkt",
        "Ransomware verschlüsselt sowohl Primärdaten als auch lokale Backups",
        "Tage oder Wochen Ausfallzeit für die Systemwiederherstellung erforderlich",
        "Compliance-Fehler aufgrund unzureichender Datenaufbewahrung"
      ]
    },
    solution: {
      title: "Unzerstörbare Geschäftskontinuität",
      points: [
        "Automatisierte, unveränderliche Cloud-Backups, die nicht verschlüsselt werden können",
        "Stündliche Snapshots für minimalen Datenverlust (RPO)",
        "Schnelle Virtualisierung, um Sie in Minuten wieder einsatzbereit zu machen (RTO)",
        "Tägliche automatisierte Test-Wiederherstellungen zur Überprüfung der Integrität"
      ]
    },
    features: [
      "Unveränderliche Backups",
      "Stündliche Snapshots",
      "Automatisierte Tests",
      "Cloud-Replikation"
    ],
    benefits: [
      "Schutz vor Ransomware",
      "Schnelle Wiederherstellung",
      "100% Datenintegrität"
    ],
    results: [
      { metric: "15 Min", label: "Recovery Time Objective" },
      { metric: "1 Std", label: "Recovery Point Objective" },
      { metric: "100%", label: "Verifizierte Wiederherstellungen" }
    ],
    process: {
      analysis: "Wir identifizieren alle kritischen Datensilos und bestimmen Ihre erforderlichen Wiederherstellungszeiten und -punkte.",
      implementation: "Wir setzen lokale Backup-Appliances ein und konfigurieren eine sichere, unveränderliche Cloud-Replikation.",
      operations: "Wir überwachen Backups täglich, führen automatisierte Test-Wiederherstellungen durch und verwalten alle Aufbewahrungsrichtlinien."
    },
    caseStudy: {
      title: "Modernisierung einer Serverumgebung und Backup-Strategie",
      companyType: "BiolytiQs GmbH",
      situation: "Veraltete Serverumgebung ohne moderne Backup-Lösung.",
      problem: "Hohes Risiko von Datenverlust bei Hardwaredefekt.",
      decisionPoint: "Hardware erreichte das Ende ihrer Lebensdauer.",
      solution: "Migration auf neue Server und Veeam-Backup-Lösung.",
      result: "Zuverlässiges Backup und schnelle Wiederherstellungsmöglichkeit.",
      slug: "biolytiqs-server"
    },
    faq: commonFaqs
  },
  "microsoft-365-migration": {
    title: "Microsoft 365 Migration",
    hero: "Wechseln Sie zu Microsoft 365 ohne Ausfallzeiten oder Datenverlust.",
    description: "Wir führen nahtlose Migrationen zu Microsoft 365 durch, schalten Enterprise-Zusammenarbeit frei und stellen sicher, dass Ihre Daten sicher und konform bleiben.",
    problem: {
      title: "Der Schmerz veralteter Systeme",
      points: [
        "Alternde On-Premise Exchange-Server, die ständige Wartung erfordern",
        "Fragmentierte Kommunikation über unzusammenhängende Apps",
        "Versionskontroll-Albtraum bei gemeinsam genutzten Dokumenten",
        "Sicherheitslücken in veralteten E-Mail-Protokollen"
      ]
    },
    solution: {
      title: "Nahtlose Cloud-Zusammenarbeit",
      points: [
        "E-Mail- und Datenmigration ohne Ausfallzeiten",
        "Standardisierte Bereitstellung von Teams, SharePoint und OneDrive",
        "Implementierung strenger Sicherheits- und Compliance-Richtlinien",
        "Umfassende Benutzerschulung und Unterstützung bei der Einführung"
      ]
    },
    features: [
      "Exchange Online Migration",
      "Teams & SharePoint Setup",
      "Sicherheits-Härtung",
      "Benutzerschulung"
    ],
    benefits: [
      "Kein Datenverlust",
      "Moderne Zusammenarbeit",
      "Geringere IT-Komplexität"
    ],
    results: [
      { metric: "0", label: "Datenverlust" },
      { metric: "100%", label: "Cloud-Adoption" },
      { metric: "40%", label: "Weniger E-Mail-Chaos" }
    ],
    process: {
      analysis: "Wir auditieren Ihre aktuelle Umgebung, bilden Datenstrukturen ab und planen die Migrationsstrategie.",
      implementation: "Wir führen die Migration im Hintergrund aus und synchronisieren Daten, ohne die Benutzer zu stören.",
      operations: "Wir stellen die MX-Records am Wochenende um und bieten am Montagmorgen intensive Unterstützung."
    },
    caseStudy: {
      title: "Migration von Google Workspace zu Microsoft 365 mit strukturierter Absicherung",
      companyType: "Schilderdienst Schadhauser",
      situation: "Die bestehende IT-Umgebung basierte auf Google Workspace ohne klare Strukturen.",
      problem: "Fehlende zentrale Kontrolle über Benutzer und Daten sowie Sicherheitsrisiken.",
      decisionPoint: "Das System erfüllte nicht mehr die Anforderungen an Sicherheit und Skalierbarkeit.",
      solution: "Migration zu Microsoft 365 inklusive Entra ID, MFA und Backup-Strategie.",
      result: "Klare und strukturierte IT-Umgebung mit zentraler Verwaltung und verbesserter Sicherheit.",
      slug: "schadhauser-m365"
    },
    faq: commonFaqs
  },
  "azure-migration": {
    title: "Azure Migration",
    hero: "Verschieben Sie Ihre Infrastruktur sicher nach Azure mit voller Kontrolle.",
    description: "Wir konzipieren, migrieren und verwalten Ihre Server in Microsoft Azure, bieten unendliche Skalierbarkeit und eliminieren die Hardware-Abhängigkeit.",
    problem: {
      title: "Die Grenzen physischer Hardware",
      points: [
        "Teure Hardware-Erneuerungszyklen alle 3-5 Jahre",
        "Unfähigkeit, Ressourcen bei Spitzenbedarf schnell zu skalieren",
        "Single Points of Failure riskieren katastrophale Ausfallzeiten",
        "Hohe Kosten für Strom, Kühlung und physische Sicherheit"
      ]
    },
    solution: {
      title: "Skalierbare Cloud-Architektur",
      points: [
        "Lift-and-Shift oder komplettes Refactoring von Legacy-Apps",
        "Automatische Skalierung der Ressourcen passend zum Geschäftsbedarf",
        "Geo-redundante Backups und Disaster Recovery",
        "Optimierte Cloud-Ausgaben zur Vermeidung von Abrechnungsüberraschungen"
      ]
    },
    features: [
      "Server-Migration (Lift & Shift)",
      "Azure Landing Zone Setup",
      "Kosten-Analyse",
      "Performance-Tuning"
    ],
    benefits: [
      "Hardware-Unabhängigkeit",
      "Globale Skalierbarkeit",
      "Hohe Verfügbarkeit"
    ],
    results: [
      { metric: "99,99%", label: "Infrastruktur-Uptime" },
      { metric: "Unendlich", label: "Skalierbarkeit" },
      { metric: "0", label: "Hardware-Wartung" }
    ],
    process: {
      analysis: "Wir bewerten Ihre Workloads, berechnen die Gesamtbetriebskosten und entwerfen die Azure-Architektur.",
      implementation: "Wir bauen die Azure-Umgebung auf, richten sichere VPN-Tunnel ein und migrieren die Server.",
      operations: "Wir überwachen die Leistung, optimieren monatlich die Kosten und verwalten die Azure-Sicherheitsrichtlinien."
    },
    caseStudy: {
      title: "Migration in Microsoft Azure",
      companyType: "group24 AG",
      situation: "Backend-Systeme waren schwer skalierbar und wartbar.",
      problem: "Hardware war veraltet, Expansion geplant.",
      decisionPoint: "Notwendigkeit einer skalierbaren Cloud-Infrastruktur.",
      solution: "Migration in Azure und Integration von Azure Virtual Desktop.",
      result: "Maximale Skalierbarkeit und stabile Infrastruktur.",
      slug: "group24-azure"
    }
  }
};
