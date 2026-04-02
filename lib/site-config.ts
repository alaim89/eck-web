export const siteConfig = {
  name: "Ecksolution IT",
  companyName: "Ecksolution IT Managed Services",
  domain: "ecksolution-it.de",
  baseUrl: "https://ecksolution-it.de",
  defaultTitle: "IT-Betreuung & Managed Services für den Mittelstand",
  titleTemplate: "%s | Ecksolution IT",
  defaultDescription: "Professionelle IT-Betreuung, Cybersecurity und Cloud-Lösungen für den Mittelstand. Wir übernehmen die volle Verantwortung für Ihre IT – proaktiv und sicher.",
  contact: {
    email: "info@ecksolution-it.de",
    phone: "+49 (0) 176 34580607",
    address: {
      street: "Musterstraße 1",
      zip: "12345",
      city: "Musterstadt",
      country: "Deutschland"
    }
  },
  social: {
    linkedin: "https://linkedin.com/company/ecksolution-it",
    twitter: "https://twitter.com/ecksolution_it"
  }
};

export type SiteConfig = typeof siteConfig;
