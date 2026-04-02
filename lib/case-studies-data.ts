export type CaseStudyIcon =
  | "shield"
  | "activity"
  | "database"
  | "users"
  | "building"
  | "mail";

export type CaseStudyItem = {
  slug: string;
  company: string;
  category: string;
  title: string;
  summary: string;
  icon: CaseStudyIcon;
  featured?: boolean;
};

export const caseStudies: CaseStudyItem[] = [
  {
    slug: "bellaseno-security",
    company: "Bellaseno GmbH",
    category: "Security / Compliance",
    title: "Analyse und Aufbau einer strukturierten IT-Sicherheitsstrategie",
    summary:
      "Durchführung einer GAP-Analyse, Identifikation kritischer Schwachstellen und Aufbau einer nachhaltigen Sicherheitsorganisation.",
    icon: "shield",
    featured: true,
  },
  {
    slug: "group24-azure",
    company: "group24 AG",
    category: "Azure / Cloud",
    title: "Migration in Microsoft Azure und Aufbau einer skalierbaren Cloud-Infrastruktur",
    summary:
      "Migration bestehender Backend-Systeme in Microsoft Azure, Automatisierung und Integration von Azure Virtual Desktop.",
    icon: "activity",
    featured: true,
  },
  {
    slug: "zunicode-automatisierung",
    company: "zunicode GmbH",
    category: "Betrieb / Automatisierung",
    title: "Stabilisierung und Automatisierung hybrider IT-Infrastrukturen",
    summary:
      "Unterstützung im Support, Automatisierung mit Ansible & PowerShell sowie Strukturierung von Supportprozessen.",
    icon: "users",
    featured: true,
  },
  {
    slug: "schadhauser-m365",
    company: "Schilderdienst Schadhauser",
    category: "Migration / M365",
    title: "Migration von Google Workspace zu Microsoft 365 mit strukturierter Absicherung",
    summary:
      "Zentrale Kontrolle und Sicherheitsoptimierung durch Migration zu Microsoft 365 inklusive Backup-Strategie.",
    icon: "building",
    featured: true,
  },
  {
    slug: "procivitate-strategie",
    company: "Procivitate gGmbH",
    category: "IT-Leitung / Strategie",
    title: "Aufbau und Absicherung einer Microsoft-365-Umgebung mit klarer IT-Strategie",
    summary:
      "Steuerung von M365-Projekten, kontinuierliche Sicherheitsbewertungen und strategische Beratung der Geschäftsleitung.",
    icon: "activity",
    featured: true,
  },
  {
    slug: "biolytiqs-server",
    company: "BiolytiQs GmbH",
    category: "Server + M365",
    title: "Modernisierung einer Serverumgebung und Integration in Microsoft 365",
    summary:
      "Migration auf Windows Server 2019, Aufbau von Entra ID und Implementierung einer zuverlässigen Backup-Lösung.",
    icon: "database",
    featured: true,
  },
  {
    slug: "incase-modernisierung",
    company: "InCase Handelsgesellschaft mbH",
    category: "M365 + Geräte",
    title: "Modernisierung der E-Mail-Infrastruktur und Einführung mobiler Geräteverwaltung",
    summary:
      "Migration zu Exchange Online und Einführung von Microsoft Intune zur zentralen Verwaltung mobiler Endgeräte.",
    icon: "mail",
    featured: true,
  },
  {
    slug: "mait-enterprise",
    company: "MAIT Germany GmbH",
    category: "Enterprise Projekte",
    title: "Integration hybrider IT-Infrastrukturen und Optimierung von Betriebsprozessen",
    summary:
      "Planung und Umsetzung komplexer M365-Migrationen sowie Integration von On-Prem- und Cloud-Systemen.",
    icon: "database",
    featured: true,
  },
  {
    slug: "digitalfunk-infrastruktur",
    company: "Öffentlicher Auftraggeber",
    category: "Linux / Automatisierung / Proxmox",
    title: "Modernisierung und Automatisierung einer gewachsenen Linux-Infrastruktur",
    summary:
      "Konsolidierung bestehender Plattformen, Ausbau einer Proxmox-Umgebung und Automatisierung zentraler Infrastrukturprozesse mit Ansible.",
    icon: "database",
    featured: true,
  },
  {
    slug: "greenpocket-infrastruktur-backup",
    company: "Greenpocket GmbH",
    category: "Backup / Recovery / Infrastruktur",
    title: "Backup- und Recovery-Konzepte für hybride Infrastruktur im Startup-Umfeld",
    summary:
      "Aufbau hybrider Linux- und Windows-Systemlandschaften mit Fokus auf Automatisierung, Backup und Wiederherstellbarkeit.",
    icon: "shield",
    featured: true,
  },
  {
    slug: "itzbund-applikationsbetrieb",
    company: "ITZBund",
    category: "Linux / Middleware / Betrieb",
    title: "Betrieb und Weiterentwicklung einer Linux-Applikationsplattform",
    summary:
      "Betrieb, Härtung und Migration produktiver Linux-Systemlandschaften mit Middleware, Datenbanken und strukturierten Sicherheitsmaßnahmen.",
    icon: "activity",
    featured: true,
  },
  {
    slug: "sva-hybrid-it-migration",
    company: "System Vertrieb Alexander GmbH",
    category: "Hybrid IT / Migration / Security",
    title: "Hybrid-IT-Betrieb, Migration und Systemhärtung in komplexen Umgebungen",
    summary:
      "Betrieb und Weiterentwicklung hybrider IT-Umgebungen mit Migration, Backup, Virtualisierung und strukturierten Sicherheitsmaßnahmen.",
    icon: "building",
    featured: true,
  },
];