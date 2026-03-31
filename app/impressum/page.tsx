import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Impressum | Ecksolution IT',
  description: 'Rechtliche Informationen und Kontaktangaben von Ecksolution IT gemäß § 5 DDG.',
};

export default function ImpressumPage() {
  return (
    <main className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <header className="mb-12 border-b border-gray-100 pb-8">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-4">
            Impressum
          </h1>
          <p className="text-lg text-gray-500">
            Angaben gemäß § 5 DDG
          </p>
        </header>

        <section className="space-y-10 text-gray-800">
          {/* Anbieter */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900 border-l-4 border-primary pl-4">
              Anbieter
            </h2>
            <address className="not-italic space-y-1 text-gray-700 leading-relaxed">
              Andreas Eckert<br />
              <strong>Ecksolution IT</strong><br />
              Auf dem Esch 15<br />
              49638 Nortrup<br />
              Deutschland
            </address>
          </div>

          {/* Vertretung */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900 border-l-4 border-primary pl-4">
              Vertreten durch
            </h2>
            <p className="text-gray-700">
              Andreas Eckert
            </p>
          </div>

          {/* Kontakt */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900 border-l-4 border-primary pl-4">
              Kontakt
            </h2>
            <p className="text-gray-700">
              E-Mail: <a href="mailto:info@ecksolution-it.de" className="text-primary hover:underline">info@ecksolution-it.de</a><br />
              WhatsApp: [geschäftliche Nummer eintragen oder Zeile entfernen]
            </p>
          </div>

          {/* Umsatzsteuer-ID */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900 border-l-4 border-primary pl-4">
              Umsatzsteuer-ID
            </h2>
            <p className="text-gray-700">
              Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:<br />
              <span className="font-mono">DE368783313</span>
            </p>
          </div>

          {/* Berufshaftpflichtversicherung */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900 border-l-4 border-primary pl-4">
              Berufshaftpflichtversicherung
            </h2>
            <address className="not-italic text-gray-700 leading-relaxed">
              Markel Insurance SE<br />
              Sophienstraße 26<br />
              80333 München
            </address>
            <p className="text-gray-700">
              Räumlicher Geltungsbereich:<br />
              [bitte ergänzen, falls bekannt]
            </p>
          </div>

          {/* Verantwortlich gemäß MStV */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900 border-l-4 border-primary pl-4">
              Inhaltlich verantwortlich gemäß § 18 Abs. 2 MStV
            </h2>
            <address className="not-italic text-gray-700 leading-relaxed">
              Andreas Eckert<br />
              Auf dem Esch 15<br />
              49638 Nortrup
            </address>
          </div>

          {/* Streitbeilegung */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900 border-l-4 border-primary pl-4">
              Hinweis gemäß § 36 VSBG
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Wir sind nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </div>

          {/* Onlinepräsenzen */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900 border-l-4 border-primary pl-4">
              Dieses Impressum gilt auch für folgende Onlinepräsenzen
            </h2>
            <p className="text-gray-700">
              [dein echtes Facebook-Profil]<br />
              [dein echtes Instagram-Profil]
            </p>
          </div>

          {/* Haftungs- und Schutzrechtshinweise */}
          <div className="pt-8 border-t border-gray-100 space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">
              Haftungs- und Schutzrechtshinweise
            </h2>
            
            <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
              <p>
                Die Inhalte dieser Website wurden mit größtmöglicher Sorgfalt erstellt. Eine Gewähr für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte wird jedoch nicht übernommen.
              </p>
              <p>
                Alle auf dieser Website veröffentlichten Inhalte, insbesondere Texte, Bilder, Grafiken, Logos und Gestaltungselemente, sind urheberrechtlich oder durch sonstige Schutzrechte geschützt. Jede Verwendung außerhalb der gesetzlich zulässigen Grenzen bedarf der vorherigen Zustimmung des jeweiligen Rechteinhabers.
              </p>
              <p>
                Sollten Sie auf Rechtsverstöße aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden rechtswidriger Inhalte werden wir diese unverzüglich entfernen.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
