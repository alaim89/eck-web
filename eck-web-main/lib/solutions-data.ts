import { 
  managedItFaqs, 
  hybridItFaqs, 
  microsoftFaqs, 
  securityFaqs, 
  backupFaqs,
  FaqItem
} from "./faqs";

export type Solution = {
  title: string;
  hero: string;
  description: string;
  problem: {
    title: string;
    points: string[];
  };
  solution: {
    title: string;
    points: string[];
  };
  features: string[];
  benefits: string[];
  results: {
    metric: string;
    label: string;
  }[];
  process: {
    analysis: string;
    implementation: string;
    operations: string;
  };
  caseStudy: {
    title: string;
    companyType: string;
    situation: string;
    problem: string;
    decisionPoint: string;
    solution: string;
    result: string;
    slug: string;
  };
  faq?: FaqItem[];
};

export const solutionsData: Record<string, Solution> = {
  "hybrid-it-infrastruktur": {
    title: "Hybride IT-Infrastruktur",
    hero: "Linux, Microsoft 365 und Azure nahtlos integriert.",
    description: "Wir betreuen Ihre hybride IT-Infrastruktur – stabil, sicher und planbar. Wir verbinden das Beste aus On-Premise und Cloud für maximale Effizienz.",
    problem: {
      title: "Komplexität in der hybriden Welt",
      points: [
        "Dateninkonsistenzen zwischen Cloud und Lokal führen zu Fehlentscheidungen und zeitaufwendigen manuellen Korrekturen.",
        "Undefinierte Schnittstellen schaffen gefährliche Einfallstore für Cyber-Angriffe und gefährden Ihre Datenintegrität.",
        "Getrennte Insellösungen binden wertvolle IT-Ressourcen in der Verwaltung, statt Innovation zu fördern.",
        "Langsame Synchronisationsprozesse bremsen die Zusammenarbeit im Team und verzögern geschäftskritische Abläufe."
      ]
    },
    solution: {
      title: "Nahtlose Hybrid-Integration",
      points: [
        "Sie verwalten Identitäten und Zugriffe zentral und sicher über alle Plattformen hinweg.",
        "Sie profitieren von reibungslosen Datenflüssen zwischen Cloud und lokalen Standorten.",
        "Sie erhalten ein durchgängiges Sicherheitskonzept, das alle Ihre IT-Umgebungen schützt.",
        "Sie gewinnen eine flexible Architektur, die Linux und Windows stabil vereint."
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
      situation: "Hybride IT-Umgebung mit stetig steigender Komplexität und reaktivem Support.",
      problem: "Hoher manueller Aufwand bei Routineaufgaben, fehlende Struktur und häufige Verzögerungen im Betrieb.",
      decisionPoint: "Die internen Ressourcen waren durch das Tagesgeschäft vollständig gebunden.",
      solution: "Umstellung auf Managed IT Services mit Fokus auf Automatisierung mittels Ansible & PowerShell.",
      result: "Stabile Infrastruktur mit deutlich reduziertem Supportaufwand und keine kritischen Ausfälle seit der Umstellung.",
      slug: "zunicode-automatisierung"
    },
    faq: hybridItFaqs
  },
  "managed-it-service": {
    title: "Managed IT-Service",
    hero: "Professioneller IT-Betrieb mit voller Verantwortung.",
    description: "Wir übernehmen die volle Verantwortung für Ihre IT-Infrastruktur. Proaktiv, sicher und nach vereinbartem Leistungsumfang.",
    problem: {
      title: "IT als ständiger Unruheherd",
      points: [
        "Reaktive IT-Betreuung führt zu unkalkulierbaren Kostenexplosionen bei jedem technischen Zwischenfall.",
        "Fehlendes Spezialwissen bei Cyber-Bedrohungen erhöht das Risiko für Ransomware-Angriffe massiv.",
        "Stundenlange Systemausfälle stoppen die Wertschöpfungskette und verursachen hohe finanzielle Verluste.",
        "Veraltete IT-Strukturen ohne Roadmap verhindern die Skalierung Ihres Unternehmens und bremsen das Wachstum."
      ]
    },
    solution: {
      title: "Proaktives IT-Management",
      points: [
        "Sie gewinnen volle Budgetsicherheit durch eine transparente monatliche IT-Pauschale.",
        "Sie arbeiten unterbrechungsfrei dank kontinuierlicher Überwachung und proaktiver Entstörung.",
        "Sie erhalten stets aktuelle und sichere Systeme durch automatisiertes Patch-Management.",
        "Sie sichern Ihren Unternehmenserfolg durch eine strategische IT-Beratung auf Augenhöhe."
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
      problem: "Veraltete Systeme und mangelnde Sicherheit behinderten die Expansion und gefährdeten die Datenintegrität.",
      decisionPoint: "Sie brauchten einen Partner für den gesamten IT-Lebenszyklus.",
      solution: "Umstellung auf Managed IT Services mit Fokus auf Automatisierung.",
      result: "Stabile Infrastruktur mit deutlich reduziertem Supportaufwand und keine kritischen Ausfälle seit der Umstellung.",
      slug: "zunicode-automatisierung"
    },
    faq: managedItFaqs
  },
  "externer-it-verantwortlicher": {
    title: "Externer IT-Verantwortlicher",
    hero: "Strategische IT-Leitung für Ihr Unternehmen.",
    description: "Sichern Sie sich die Expertise eines erfahrenen IT-Leiters, ohne die Kosten für eine Vollzeitstelle. Wir steuern Ihre IT-Strategie und Projekte.",
    problem: {
      title: "Fehlende strategische Führung",
      points: [
        "IT-Investitionen ohne klare Strategie führen zu Fehlinvestitionen und technologischen Sackgassen.",
        "Mangelnde Budgetkontrolle führt zu unkontrolliert steigenden IT-Ausgaben ohne messbaren Mehrwert.",
        "Fehlende Fachaufsicht über Dienstleister führt zu überteuerten Verträgen und unzureichender Servicequalität.",
        "Eine IT, die nicht die Geschäftsziele unterstützt, wird zum teuren Kostenfaktor statt zum Wachstumstreiber."
      ]
    },
    solution: {
      title: "Ihre IT-Leitung auf Abruf",
      points: [
        "Sie erhalten eine klare technologische Roadmap, die Ihre Geschäftsziele unterstützt.",
        "Sie profitieren von einer optimierten Budgetplanung und signifikant reduzierten IT-Kosten.",
        "Sie sichern den Erfolg komplexer IT-Projekte durch eine professionelle externe Leitung.",
        "Sie gewinnen volle Transparenz über Ihre IT-Lage durch regelmäßige Management-Reports."
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
      situation: "Über Jahre gewachsene IT-Infrastruktur ohne klare strategische Ausrichtung.",
      problem: "Fehlende IT-Leitung, unklare Sicherheitslage und hohes Risiko von Datenlecks bei ineffizienten Prozessen.",
      decisionPoint: "Der Vorstand erkannte die Notwendigkeit einer professionellen IT-Steuerung.",
      solution: "Übernahme der externen IT-Leitung, Implementierung erweiterter Sicherheitsfunktionen und Entwicklung einer IT-Roadmap.",
      result: "Klare IT-Roadmap für die nächsten 3 Jahre, deutlich verbessertes Sicherheitsniveau und gesteigerte Teamproduktivität.",
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
        "Ransomware-Angriffe können Ihren Betrieb wochenlang lähmen und die Existenz Ihres Unternehmens bedrohen.",
        "Ungepatchte Sicherheitslücken laden Hacker ein und führen zu massiven Reputationsschäden bei Datenlecks.",
        "Menschliche Fehler sind das größte Risiko; ohne Schulung bleibt Ihr Team das schwächste Glied der Kette.",
        "Verstöße gegen die DSGVO ziehen empfindliche Bußgelder nach sich und gefährden das Kundenvertrauen."
      ]
    },
    solution: {
      title: "Mehrschichtige Verteidigung",
      points: [
        "Sie schützen Ihre Endgeräte zuverlässig vor modernen Cyber-Angriffen und Ransomware.",
        "Sie minimieren Risiken durch regelmäßige Audits, die Schwachstellen sofort aufdecken.",
        "Sie stärken Ihre Sicherheit durch ein Team, das Bedrohungen erkennt und richtig reagiert.",
        "Sie erhalten eine moderne Sicherheitsarchitektur, die den Zugriff auf Ihre Daten streng kontrolliert."
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
      situation: "Gewachsene IT-Strukturen ohne klare Sicherheitsbewertung oder Governance.",
      problem: "Unklare Sicherheitslage, fehlende Priorisierung von Risiken und unkalkulierbare IT-Kosten.",
      decisionPoint: "Es fehlte eine belastbare Entscheidungsgrundlage für Investitionen.",
      solution: "Durchführung einer GAP-Analyse, Risikoidentifikation und Entwicklung eines priorisierten Maßnahmenkatalogs.",
      result: "Vollständige Transparenz über die Risikolage, eine belastbare Entscheidungsbasis für Investitionen und ein strukturierter Fahrplan.",
      slug: "bellaseno-security"
    },
    faq: securityFaqs
  },
  "endpoint-firewall-security": {
    title: "Endpoint & Firewall Security",
    hero: "Schutz für alle Geräte und Netzwerke.",
    description: "Sichern Sie jeden Endpunkt und jede Netzwerkverbindung ab. Wir bieten modernste Firewall-Lösungen und Endpoint-Protection für maximale Sicherheit.",
    problem: {
      title: "Offene Tore für Angreifer",
      points: [
        "Ungeschützte Endgeräte im Homeoffice sind ein leichtes Ziel für Angreifer und gefährden das gesamte Firmennetzwerk.",
        "Veraltete Firewalls erkennen moderne Angriffe nicht und bieten nur eine trügerische Sicherheit.",
        "Fehlende Netzwerksegmentierung ermöglicht es Angreifern, sich ungehindert im Unternehmen auszubreiten.",
        "Ohne zentrale Überwachung bleiben Angriffe auf Endgeräte oft wochenlang unbemerkt, bis der Schaden irreparabel ist."
      ]
    },
    solution: {
      title: "Umfassender Netzwerkschutz",
      points: [
        "Sie sichern Ihr Netzwerk durch intelligente Firewalls, die Bedrohungen in Echtzeit blockieren.",
        "Sie erhalten eine zentrale Kontrolle über die Sicherheit aller Firmen-Laptops und Mobilgeräte.",
        "Sie ermöglichen Ihrem Team sicheres und performantes Arbeiten von jedem Standort aus.",
        "Sie begrenzen potenzielle Schäden durch eine strukturierte Aufteilung Ihres Netzwerks."
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
      situation: "Keine zentrale Kontrolle über mobile Firmengeräte und veraltete E-Mail-Infrastruktur.",
      problem: "Sicherheitsrisiken durch ungeschützte Endgeräte, fehlende Kontrolle über Datenflüsse und hohes Risiko von Datenlecks.",
      decisionPoint: "Notwendigkeit einer zentralen Verwaltungslösung.",
      solution: "Migration zu Exchange Online und Einführung von Microsoft Intune zur zentralen Geräteverwaltung.",
      result: "100% Abdeckung aller mobilen Endgeräte in der zentralen Verwaltung und drastisch reduziertes Risiko von Datenverlusten.",
      slug: "incase-modernisierung"
    },
    faq: securityFaqs
  },
  "disaster-recovery": {
    title: "Disaster Recovery",
    hero: "Schnelle Wiederherstellung im Ernstfall.",
    description: "Ein Notfallplan ist gut, eine funktionierende Wiederherstellung ist besser. Wir sorgen dafür, dass Ihr Betrieb nach einem Ausfall in kürzester Zeit wieder läuft.",
    problem: {
      title: "Der Albtraum des Totalausfalls",
      points: [
        "Fehlende oder ungetestete Notfallpläne führen im Ernstfall zu Chaos und verlängern den Stillstand unnötig.",
        "Jeder Tag ohne funktionierende IT kostet massiv Umsatz und zerstört das Vertrauen Ihrer Kunden nachhaltig.",
        "Datenverlust durch unzuverlässige Backups kann die jahrelange Arbeit Ihres Unternehmens in Sekunden vernichten.",
        "Unklare Zuständigkeiten im Krisenfall verzögern die Rettungsmaßnahmen und erhöhen den Gesamtschaden."
      ]
    },
    solution: {
      title: "Garantierte Geschäftskontinuität",
      points: [
        "Sie gewinnen Sicherheit durch einen praxiserprobten Notfallplan für den Ernstfall.",
        "Sie vertrauen auf eine funktionierende Rettung durch regelmäßige Wiederherstellungstests.",
        "Sie minimieren Stillstandszeiten durch eine sofort einsatzbereite Cloud-Ersatzumgebung.",
        "Sie erhalten garantierte Zeitrahmen für die Wiederaufnahme Ihres Geschäftsbetriebs."
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
      problem: "Hohes Risiko von Datenverlust bei Hardwaredefekt bedrohte die kontinuierliche Verfügbarkeit kritischer Daten.",
      decisionPoint: "Hardware erreichte das Ende ihrer Lebensdauer.",
      solution: "Migration auf neue, leistungsfähige Serverhardware und Implementierung einer Veeam-Backup-Lösung.",
      result: "Stabile Infrastruktur mit zuverlässigem Backup-Konzept und garantierter Wiederherstellbarkeit innerhalb weniger Stunden.",
      slug: "biolytiqs-server"
    },
    faq: backupFaqs
  },
  "netzwerk-management": {
    title: "Netzwerk-Management",
    hero: "Stabile und performante Unternehmensnetzwerke.",
    description: "Wir sorgen für eine reibungslose Vernetzung Ihrer Standorte und Mitarbeiter. Sicher, schnell und jederzeit verfügbar.",
    problem: {
      title: "Instabile Verbindungen bremsen aus",
      points: [
        "Instabile WLAN-Verbindungen und langsame Netzwerke bremsen die Produktivität und sorgen für Frust im Team.",
        "Offene Netzwerksegmente ermöglichen Spionage und Datendiebstahl durch unbefugte Dritte.",
        "Komplizierte oder unsichere Homeoffice-Anbindungen behindern flexibles Arbeiten und schaffen Sicherheitslücken.",
        "Fehlende Transparenz über die Netzlast führt zu Engpässen, die geschäftskritische Anwendungen blockieren."
      ]
    },
    solution: {
      title: "Intelligente Netzwerksteuerung",
      points: [
        "Sie profitieren von einem schnellen und stabilen WLAN in allen Unternehmensbereichen.",
        "Sie vernetzen Ihre Standorte sicher und performant für eine reibungslose Zusammenarbeit.",
        "Sie vermeiden Engpässe durch eine proaktive Überwachung Ihrer Netzwerk-Performance.",
        "Sie schützen sensible Datenbereiche durch eine intelligente Trennung Ihrer Netzwerke."
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
      situation: "Heterogene IT-Infrastruktur durch zahlreiche Akquisitionen mit unterschiedlichen Netzwerkstandards.",
      problem: "Erschwerter Betrieb, häufige Verbindungsprobleme und hoher Administrationsaufwand durch fehlende Standards.",
      decisionPoint: "Notwendigkeit einheitlicher Konzernstandards.",
      solution: "Integration von On-Prem- und Cloud-Systemen sowie Etablierung einheitlicher Konzernstandards im Netzwerkbereich.",
      result: "Einheitliche Netzwerkstandards über alle Standorte, signifikant reduzierter Administrationsaufwand und stabile Standortvernetzung.",
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
        "Veraltete Hardware führt zu Frust bei Mitarbeitern und mindert die Arbeitsleistung durch lange Ladezeiten.",
        "Fehlende Lifecycle-Planung führt zu unvorhersehbaren Ausfällen und teuren Ad-hoc-Neuanschaffungen.",
        "Manuelles Einrichten von Geräten bindet wertvolle Zeit und verzögert den Start neuer Teammitglieder.",
        "Nicht verwaltete 'Schatten-IT' auf Endgeräten ist ein unkontrollierbares Sicherheitsrisiko für Ihr Unternehmen."
      ]
    },
    solution: {
      title: "Standardisierte Hardware-Prozesse",
      points: [
        "Sie beschleunigen das Onboarding durch fertig konfigurierte Geräte für neue Mitarbeiter.",
        "Sie sparen Zeit durch eine automatisierte Verteilung von Software und Sicherheits-Updates.",
        "Sie erhalten eine stets leistungsfähige Hardware-Flotte durch vorausschauenden Austausch.",
        "Sie erfüllen alle Datenschutzvorgaben durch eine zertifizierte Löschung Ihrer Altgeräte."
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
      situation: "Keine zentrale Kontrolle über mobile Firmengeräte und veraltete E-Mail-Infrastruktur.",
      problem: "Sicherheitsrisiken durch ungeschützte Endgeräte, fehlende Kontrolle über Datenflüsse und hohes Risiko von Datenlecks.",
      decisionPoint: "Wunsch nach moderner E-Mail-Infrastruktur und Sicherheit.",
      solution: "Migration zu Exchange Online und Einführung von Microsoft Intune.",
      result: "100% Abdeckung aller mobilen Endgeräte in der zentralen Verwaltung und drastisch reduziertes Risiko von Datenverlusten.",
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
        "Unkontrolliert steigende Cloud-Kosten durch fehlende Optimierung belasten Ihr IT-Budget ohne Mehrwert.",
        "Fehlerhafte Cloud-Konfigurationen schaffen Sicherheitslücken, die oft erst nach einem Datenleck entdeckt werden.",
        "Mangelhafte Integration zwischen Cloud und On-Premise führt zu ineffizienten Workflows und Datenverlustrisiken.",
        "Fehlendes Azure-Spezialwissen im Team führt zu riskanten Fehlkonfigurationen und technologischem Stillstand."
      ]
    },
    solution: {
      title: "Azure-Expertise für Ihr Unternehmen",
      points: [
        "Sie reduzieren Ihre Cloud-Ausgaben durch eine kontinuierliche Kosten-Optimierung.",
        "Sie profitieren von einer maximal abgesicherten Azure-Umgebung nach höchsten Standards.",
        "Sie erhalten einen stabilen Betrieb Ihrer Cloud-Server und virtuellen Arbeitsplätze.",
        "Sie nutzen die Vorteile der Cloud ohne Brüche in Ihrer bestehenden IT-Infrastruktur."
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
      situation: "Backend-Systeme waren schwer skalierbar, wartbar und basierten auf veralteter Hardware.",
      problem: "Die veraltete Hardware verhinderte die geplante Expansion und führte zu häufigen Systemausfällen.",
      decisionPoint: "Notwendigkeit einer skalierbaren Cloud-Infrastruktur.",
      solution: "Vollständige Migration bestehender Systeme in Microsoft Azure inklusive Integration von Azure Virtual Desktop.",
      result: "Maximale Skalierbarkeit für zukünftiges Wachstum, stabile Infrastruktur ohne Hardware-Abhängigkeit und optimierte Betriebskosten.",
      slug: "group24-azure"
    },
    faq: hybridItFaqs
  },
  "hybrid-cloud-transformation": {
    title: "Hybrid Cloud Transformation",
    hero: "Strategische Transformation Ihrer IT.",
    description: "Wir begleiten Sie auf dem Weg in die Cloud. Schritt für Schritt, sicher und perfekt auf Ihre Geschäftsziele abgestimmt.",
    problem: {
      title: "Stillstand durch veraltete Strukturen",
      points: [
        "Veraltete, unflexible IT-Strukturen bremsen die Innovationskraft und mindern Ihre Wettbewerbsfähigkeit.",
        "Die Instandhaltung veralteter Rechenzentren verschlingt Budgets, die in moderne Cloud-Lösungen gehören.",
        "Unstrukturierte Migrationsversuche bergen hohe Risiken für Datenverlust und langwierige Betriebsunterbrechungen.",
        "Ohne klare Transformations-Roadmap bleibt die Digitalisierung ein teures Experiment ohne Geschäftserfolg."
      ]
    },
    solution: {
      title: "Ihr Weg in die Cloud-Zukunft",
      points: [
        "Sie erhalten eine maßgeschneiderte Cloud-Strategie, die exakt zu Ihrem Unternehmen passt.",
        "Sie migrieren Ihre Systeme ohne Betriebsunterbrechung in eine moderne Cloud-Umgebung.",
        "Sie profitieren von der Flexibilität einer Hybrid-Cloud bei voller Kontrolle über Ihre Daten.",
        "Sie befähigen Ihr Team zur effizienten Nutzung der neuen technologischen Möglichkeiten."
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
      situation: "Backend-Systeme waren schwer skalierbar, wartbar und basierten auf veralteter Hardware.",
      problem: "Fehlende Skalierbarkeit für die geplante Expansion und hohe Wartungskosten der Altsysteme.",
      decisionPoint: "Entscheidung für eine grundlegende Cloud-Transformation.",
      solution: "Vollständige Migration bestehender Systeme in Microsoft Azure.",
      result: "Maximale Skalierbarkeit für zukünftiges Wachstum, stabile Infrastruktur ohne Hardware-Abhängigkeit und optimierte Betriebskosten.",
      slug: "group24-azure"
    },
    faq: hybridItFaqs
  },
  "it-projekte-mit-slas": {
    title: "IT-Projekte mit festen SLAs",
    hero: "Planbare Umsetzung Ihrer IT-Vorhaben.",
    description: "Wir realisieren Ihre IT-Projekte termingerecht und zum Festpreis. Mit klaren Service-Level-Agreements für höchste Qualität.",
    problem: {
      title: "Projekte ohne Ende und Budget",
      points: [
        "Endlose Projektlaufzeiten ohne greifbare Ergebnisse binden Ressourcen und verzögern Geschäftsentscheidungen.",
        "Unklare Anforderungen führen zu massiven Kostenüberschreitungen und gefährden die Wirtschaftlichkeit.",
        "Mangelhafte technische Umsetzung führt zu instabilen Systemen, die im Betrieb hohe Folgekosten verursachen.",
        "Fehlende Dokumentation macht Sie abhängig von Einzelpersonen und erschwert die spätere Wartung."
      ]
    },
    solution: {
      title: "Ergebnisorientiertes Projektmanagement",
      points: [
        "Sie erhalten Planungssicherheit durch klare Meilensteine und Termingarantien.",
        "Sie behalten die volle Kostenkontrolle durch verbindliche Festpreisangebote.",
        "Sie profitieren von einer garantierten Umsetzungsqualität durch messbare Service-Level.",
        "Sie sichern Ihr Wissen durch eine lückenlose Dokumentation aller Projektschritte."
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
      situation: "Bestehende IT-Umgebung basierte auf Google Workspace ohne klare Strukturen oder zentrale Kontrolle.",
      problem: "Sicherheitsrisiken bei der Zusammenarbeit, fehlende Kontrolle über Benutzerdaten und ineffiziente Arbeitsabläufe.",
      decisionPoint: "Notwendigkeit einer strukturierten Migration.",
      solution: "Projektbasierte Migration zu Microsoft 365 inklusive Entra ID, MFA und einer durchdachten Backup-Strategie.",
      result: "Klare und strukturierte IT-Umgebung mit zentraler Verwaltung, verbesserte Sicherheit und keine Datenverluste während der Migration.",
      slug: "schadhauser-m365"
    }
  },
  "it-risiko-audit": {
    title: "IT-Risiko-Audit",
    hero: "Schwachstellen finden und gezielt beheben.",
    description: "Wissen Sie, wie sicher Ihre IT wirklich ist? Unser Audit deckt versteckte Risiken auf und gibt Ihnen klare Handlungsempfehlungen.",
    problem: {
      title: "Das Risiko des Unbekannten",
      points: [
        "Die Unkenntnis über den eigenen Sicherheitsstatus ist ein massives Haftungsrisiko für die Geschäftsführung.",
        "Unerkannte Schwachstellen in Ihrer Infrastruktur sind eine tickende Zeitbombe für Ihren Geschäftsbetrieb.",
        "Sich auf ungetestete Backups zu verlassen, ist riskant und führt im Ernstfall zum Totalverlust Ihrer Daten.",
        "Lückenhafte IT-Dokumentation führt bei Audits zu rechtlichen Problemen und gefährdet Zertifizierungen."
      ]
    },
    solution: {
      title: "Vollständige IT-Transparenz",
      points: [
        "Sie gewinnen volle Transparenz über den aktuellen Sicherheitsstatus Ihrer IT.",
        "Sie erhalten Gewissheit über die Funktionsfähigkeit Ihrer Datensicherung.",
        "Sie decken Schwachstellen in Ihren IT-Prozessen auf, bevor diese zum Problem werden.",
        "Sie erhalten einen klaren Fahrplan zur gezielten Beseitigung Ihrer größten IT-Risiken."
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
      situation: "Gewachsene IT-Strukturen ohne klare Sicherheitsbewertung oder Governance.",
      problem: "Eine unklare Sicherheitslage und fehlende Priorisierung machten gezielte IT-Investitionen unmöglich.",
      decisionPoint: "Bedarf an einer belastbaren Entscheidungsgrundlage.",
      solution: "Durchführung einer GAP-Analyse, Risikoidentifikation und Entwicklung eines priorisierten Maßnahmenkatalogs.",
      result: "Vollständige Transparenz über die Risikolage, eine belastbare Entscheidungsbasis für Investitionen und ein strukturierter Fahrplan.",
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
        "Veraltete IT-Systeme blockieren die Entwicklung neuer Geschäftsmodelle und mindern Ihre Marktfähigkeit.",
        "Mangelnde Kapazitätsplanung führt zu plötzlichen Systemüberlastungen und teuren Hardware-Käufen.",
        "Technologie-Entscheidungen ohne strategischen Fokus führen zu einem ineffizienten Wildwuchs an Software.",
        "Eine starre IT-Infrastruktur verhindert schnelle Reaktionen auf Marktveränderungen und kostet Marktanteile."
      ]
    },
    solution: {
      title: "Zukunftssichere IT-Strategie",
      points: [
        "Sie sichern Ihren Vorsprung durch eine IT-Beratung auf Geschäftsführungsebene.",
        "Sie erhalten einen langfristigen Plan für die technologische Entwicklung Ihres Hauses.",
        "Sie profitieren frühzeitig von neuen Technologien, die Ihr Geschäft voranbringen.",
        "Sie gewinnen eine IT-Landschaft, die flexibel mit Ihren Anforderungen mitwächst."
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
      situation: "Über Jahre gewachsene IT-Infrastruktur ohne klare strategische Ausrichtung.",
      problem: "Fehlende IT-Leitung, unklare Sicherheitslage und hohes Risiko von Datenlecks bei ineffizienten Prozessen.",
      decisionPoint: "Wunsch nach professioneller IT-Steuerung.",
      solution: "Übernahme der externen IT-Leitung, Implementierung erweiterter Sicherheitsfunktionen und Entwicklung einer IT-Roadmap.",
      result: "Klare IT-Roadmap für die nächsten 3 Jahre, deutlich verbessertes Sicherheitsniveau und gesteigerte Teamproduktivität.",
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
        "Die unsichere Nutzung von Microsoft 365 birgt hohe rechtliche Risiken und kann zu massiven Bußgeldern führen.",
        "Ohne Data Loss Prevention verlassen sensible Unternehmensdaten unkontrolliert das Haus und gefährden Ihr Know-how.",
        "Lückenhafte E-Mail-Archivierung verstößt gegen gesetzliche Aufbewahrungspflichten und erschwert die Beweisführung.",
        "Unkontrollierte externe Freigaben schaffen dauerhafte Sicherheitslücken und ermöglichen unbefugten Zugriff."
      ]
    },
    solution: {
      title: "Sichere & Konforme Cloud",
      points: [
        "Sie schützen sensible Unternehmensdaten vor unkontrolliertem Abfluss nach außen.",
        "Sie erfüllen alle gesetzlichen Vorgaben zur revisionssicheren E-Mail-Archivierung.",
        "Sie behalten die volle Kontrolle darüber, wer auf Ihre Cloud-Daten zugreifen darf.",
        "Sie erhalten die notwendige Dokumentation für Datenschutz-Audits und Zertifizierungen."
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
      situation: "Über Jahre gewachsene IT-Infrastruktur ohne klare strategische Ausrichtung.",
      problem: "Hohes Risiko von Datenlecks und ineffiziente Prozesse gefährdeten die Compliance-Vorgaben.",
      decisionPoint: "Notwendigkeit eines professionellen Managements.",
      solution: "Implementierung erweiterter Sicherheits- und Compliance-Funktionen sowie Entwicklung einer IT-Roadmap.",
      result: "Klare IT-Roadmap für die nächsten 3 Jahre, deutlich verbessertes Sicherheitsniveau und gesteigerte Teamproduktivität.",
      slug: "procivitate-strategie"
    },
    faq: microsoftFaqs
  },
  "it-governance-risikomanagement": {
    title: "IT-Governance & Risikomanagement",
    hero: "Strukturierte IT-Prozesse und Sicherheit.",
    description: "Wir etablieren klare Regeln und Prozesse für Ihre IT. Damit minimieren wir Risiken und stellen die Einhaltung aller Vorgaben sicher.",
    problem: {
      title: "Wildwuchs in der IT-Landschaft",
      points: [
        "Unklare Verantwortlichkeiten bei IT-Entscheidungen führen zu Verzögerungen und riskanten Fehlentwicklungen.",
        "Fehlende IT-Standards schaffen ein unkontrollierbares Sicherheitsrisiko und erhöhen die Betriebskosten massiv.",
        "Ohne systematisches Risikomanagement bleibt Ihre IT eine 'Black Box' mit unkalkulierbaren Gefahren.",
        "Die Nichteinhaltung regulatorischer Vorgaben führt zu rechtlichen Konsequenzen und gefährdet Ihre Marktposition."
      ]
    },
    solution: {
      title: "Strukturierte IT-Steuerung",
      points: [
        "Sie erhalten klare Strukturen und Verantwortlichkeiten für Ihre gesamte IT-Steuerung.",
        "Sie minimieren Geschäftsrisiken durch ein systematisches IT-Risikomanagement.",
        "Sie sichern die Qualität Ihres IT-Betriebs durch verbindliche Standards und Richtlinien.",
        "Sie gewährleisten die Einhaltung aller regulatorischen Vorgaben durch aktives Monitoring."
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
      situation: "Gewachsene IT-Strukturen ohne klare Sicherheitsbewertung oder Governance.",
      problem: "Unklare Sicherheitslage, fehlende Priorisierung von Risiken und unkalkulierbare IT-Kosten.",
      decisionPoint: "Bedarf an einer strukturierten Entscheidungsbasis.",
      solution: "Durchführung einer GAP-Analyse, Risikoidentifikation und Entwicklung eines priorisierten Maßnahmenkatalogs.",
      result: "Vollständige Transparenz über die Risikolage, eine belastbare Entscheidungsbasis für Investitionen und ein strukturierter Fahrplan.",
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
        "Unbemerkte Backup-Fehler sind eine Katastrophe auf Raten, die erst im Ernstfall zum Totalverlust führt.",
        "Moderne Ransomware zielt gezielt auf Backups ab; ohne Schutz der Sicherung ist Ihre Existenz bedroht.",
        "Wochenlange Wiederherstellungszeiten nach einem Datenverlust bedeuten das wirtschaftliche Aus für viele Unternehmen.",
        "Lückenhafte Datenaufbewahrung führt zu massiven Problemen bei Audits und rechtlichen Auseinandersetzungen."
      ]
    },
    solution: {
      title: "Unzerstörbare Geschäftskontinuität",
      points: [
        "Sie erhalten Ransomware-sichere Backups, die vor jeder Manipulation geschützt sind.",
        "Sie minimieren Datenverluste durch engmaschige Sicherungen in stündlichen Intervallen.",
        "Sie sichern Ihre Geschäftskontinuität durch eine Wiederherstellung in wenigen Minuten.",
        "Sie vertrauen auf Ihre Datenrettung durch täglich verifizierte Wiederherstellungstests."
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
      problem: "Hohes Risiko von Datenverlust bei Hardwaredefekt bedrohte die kontinuierliche Verfügbarkeit kritischer Daten.",
      decisionPoint: "Hardware erreichte das Ende ihrer Lebensdauer.",
      solution: "Migration auf neue, leistungsfähige Serverhardware und Implementierung einer Veeam-Backup-Lösung.",
      result: "Stabile Infrastruktur mit zuverlässigem Backup-Konzept und garantierter Wiederherstellbarkeit innerhalb weniger Stunden.",
      slug: "biolytiqs-server"
    },
    faq: backupFaqs
  },
  "microsoft-365-migration": {
    title: "Microsoft 365 Migration",
    hero: "Wechseln Sie zu Microsoft 365 ohne Ausfallzeiten oder Datenverlust.",
    description: "Wir führen nahtlose Migrationen zu Microsoft 365 durch, schalten Enterprise-Zusammenarbeit frei und stellen sicher, dass Ihre Daten sicher und konform bleiben.",
    problem: {
      title: "Der Schmerz veralteter Systeme",
      points: [
        "Veraltete lokale Server verursachen hohe Wartungskosten und riskieren plötzliche Kommunikationsausfälle.",
        "Verstreute Kommunikationstools behindern den Informationsfluss und führen zu ineffizienten Doppelarbeiten.",
        "Chaos bei Dokumentenversionen führt zu Fehlern in der Bearbeitung und kostet wertvolle Zeit bei der Suche.",
        "Veraltete E-Mail-Systeme sind ein leichtes Ziel für Phishing und Datendiebstahl, was Ihre Reputation gefährdet."
      ]
    },
    solution: {
      title: "Nahtlose Cloud-Zusammenarbeit",
      points: [
        "Sie wechseln reibungslos zu Microsoft 365 ohne Unterbrechung Ihres Tagesgeschäfts.",
        "Sie profitieren sofort von einer modernen Zusammenarbeit über Teams und SharePoint.",
        "Sie erhalten eine vorkonfigurierte Cloud-Umgebung nach höchsten Sicherheitsstandards.",
        "Sie sichern die Akzeptanz im Team durch eine praxisnahe Begleitung der Einführung."
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
      situation: "Bestehende IT-Umgebung basierte auf Google Workspace ohne klare Strukturen oder zentrale Kontrolle.",
      problem: "Sicherheitsrisiken bei der Zusammenarbeit, fehlende Kontrolle über Benutzerdaten und ineffiziente Arbeitsabläufe.",
      decisionPoint: "Das System erfüllte nicht mehr die Anforderungen an Sicherheit und Skalierbarkeit.",
      solution: "Projektbasierte Migration zu Microsoft 365 inklusive Entra ID, MFA und einer durchdachten Backup-Strategie.",
      result: "Klare und strukturierte IT-Umgebung mit zentraler Verwaltung, verbesserte Sicherheit und keine Datenverluste während der Migration.",
      slug: "schadhauser-m365"
    },
    faq: microsoftFaqs
  },
  "azure-migration": {
    title: "Azure Migration",
    hero: "Verschieben Sie Ihre Infrastruktur sicher nach Azure mit voller Kontrolle.",
    description: "Wir konzipieren, migrieren und verwalten Ihre Server in Microsoft Azure, bieten unendliche Skalierbarkeit und eliminieren die Hardware-Abhängigkeit.",
    problem: {
      title: "Die Grenzen physischer Hardware",
      points: [
        "Regelmäßige, teure Hardware-Investitionen binden Kapital, das für Ihr eigentliches Kerngeschäft fehlt.",
        "Eine starre Infrastruktur verhindert schnelles Wachstum und lässt Sie bei Lastspitzen handlungsunfähig werden.",
        "Einzelne Schwachstellen in der Hardware riskieren einen Totalausfall Ihres Betriebs mit massiven Folgen.",
        "Die hohen Betriebskosten für eigene Serverräume belasten Ihre Marge ohne technologischen Mehrwert."
      ]
    },
    solution: {
      title: "Skalierbare Cloud-Architektur",
      points: [
        "Sie befreien sich von Hardware-Abhängigkeiten durch einen sicheren Umzug in die Cloud.",
        "Sie gewinnen maximale Flexibilität durch Ressourcen, die sich Ihrem Bedarf anpassen.",
        "Sie profitieren von höchster Ausfallsicherheit durch geo-redundante Datenspeicherung.",
        "Sie behalten die volle Kostenkontrolle durch eine optimierte Cloud-Abrechnung."
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
      situation: "Backend-Systeme waren schwer skalierbar, wartbar und basierten auf veralteter Hardware.",
      problem: "Die veraltete Hardware verhinderte die geplante Expansion und führte zu häufigen Systemausfällen.",
      decisionPoint: "Notwendigkeit einer skalierbaren Cloud-Infrastruktur.",
      solution: "Vollständige Migration bestehender Systeme in Microsoft Azure inklusive Integration von Azure Virtual Desktop.",
      result: "Maximale Skalierbarkeit für zukünftiges Wachstum, stabile Infrastruktur ohne Hardware-Abhängigkeit und optimierte Betriebskosten.",
      slug: "group24-azure"
    }
  }
};
