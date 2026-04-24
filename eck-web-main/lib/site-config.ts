export const siteConfig = {
  name: "Ecksolution IT",
  companyName: "Ecksolution IT Managed Services",
  domain: "ecksolution-it.de",
  baseUrl: "https://ecksolution-it.de",
  defaultTitle: "IT-Betreuung & Managed Services für den Mittelstand",
  titleTemplate: "%s | Ecksolution IT",
  defaultDescription: "Professionelle IT-Betreuung, Cybersecurity und Cloud-Lösungen für den Mittelstand. Wir übernehmen die volle Verantwortung für Ihre IT - proaktiv und sicher.",
  contact: {
    email: "info@ecksolution-it.de",
    phone: "+49 176 34580607",
    address: {
      street: "Auf dem Esch 15",
      zip: "49638",
      city: "Nortrup",
      country: "Deutschland"
    }
  },
  social: {
    linkedin: "https://linkedin.com/company/ecksolution-it",
    freelancermap: "https://www.freelancermap.de/profil/systems-engineer-244881",
    freelance: "https://www.freelance.de/freelancer/EcksolutionIT"
  }
};

export type SiteConfig = typeof siteConfig;
