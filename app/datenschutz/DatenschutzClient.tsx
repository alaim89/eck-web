'use client'

import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export default function DatenschutzClient() {
  return (
    <div className="min-h-screen bg-white text-black font-poppins selection:bg-primary/30">
      <Header />

      <main className="pt-32 pb-24">
        <section className="px-6 mb-20">
          <div className="max-w-[1200px] mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tighter mb-6">Datenschutzerklärung</h1>
          </div>
        </section>

        <section className="px-6">
          <article className="max-w-[900px] mx-auto prose prose-slate max-w-none prose-headings:text-gray-900 prose-p:text-gray-600 prose-strong:text-gray-900">
            <h2>1. Verantwortlicher</h2>
            <p>
              Ecksolution IT
              <br />
              Auf dem Esch 15
              <br />
              49638 Nortrup
              <br />
              Deutschland
            </p>
            <p>
              E-Mail: <a href="mailto:info@ecksolution-it.de">info@ecksolution-it.de</a>
            </p>
            <hr />

            <h2>2. Allgemeine Hinweise zur Datenverarbeitung</h2>
            <p>
              Wir verarbeiten personenbezogene Daten ausschließlich im Rahmen der gesetzlichen Vorgaben,
              insbesondere der Datenschutz-Grundverordnung (DSGVO) sowie des TTDSG.
            </p>
            <p>Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.</p>
            <hr />

            <h2>3. Rechtsgrundlagen der Verarbeitung</h2>
            <p>Die Verarbeitung erfolgt auf Grundlage von:</p>
            <ul>
              <li>Art. 6 Abs. 1 lit. a DSGVO (Einwilligung)</li>
              <li>Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung)</li>
              <li>Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse)</li>
              <li>§ 25 TTDSG (Speicherung von Informationen auf Endgeräten)</li>
            </ul>
            <hr />

            <h2>4. Hosting und Server-Log-Dateien</h2>
            <p>Beim Aufruf unserer Website werden automatisch folgende Daten erhoben:</p>
            <ul>
              <li>IP-Adresse (gekürzt/anonymisiert)</li>
              <li>Datum und Uhrzeit</li>
              <li>Browsertyp und Version</li>
              <li>Betriebssystem</li>
              <li>Referrer-URL</li>
            </ul>
            <p>
              <strong>Zweck:</strong> Sicherstellung eines störungsfreien Betriebs
              <br />
              <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO
            </p>
            <p>
              <strong>Speicherdauer:</strong> max. 14 Tage
            </p>
            <hr />

            <h2>5. Cookies und Consent-Management</h2>
            <p>Unsere Website verwendet Cookies.</p>

            <h3>5.1 Technisch notwendige Cookies</h3>
            <p>Diese sind für den Betrieb erforderlich.</p>
            <p>
              <strong>Rechtsgrundlage:</strong>
            </p>
            <ul>
              <li>Art. 6 Abs. 1 lit. f DSGVO</li>
              <li>§ 25 Abs. 2 TTDSG</li>
            </ul>

            <h3>5.2 Nicht notwendige Cookies (Tracking/Marketing)</h3>
            <p>Diese werden <strong>nur nach Ihrer ausdrücklichen Einwilligung</strong> gesetzt.</p>
            <p>
              <strong>Rechtsgrundlage:</strong>
            </p>
            <ul>
              <li>Art. 6 Abs. 1 lit. a DSGVO</li>
              <li>§ 25 Abs. 1 TTDSG</li>
            </ul>
            <p>Sie können Ihre Einwilligung jederzeit über das Consent-Tool widerrufen.</p>
            <hr />

            <h2>6. Kontaktformular</h2>
            <p>Wenn Sie uns per Formular kontaktieren, werden folgende Daten verarbeitet:</p>
            <ul>
              <li>Name</li>
              <li>E-Mail-Adresse</li>
              <li>Nachricht</li>
            </ul>
            <p>
              <strong>Zweck:</strong> Bearbeitung Ihrer Anfrage
              <br />
              <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. a DSGVO
            </p>
            <p>
              <strong>Speicherdauer:</strong> bis zur abschließenden Bearbeitung
            </p>
            <hr />

            <h2>7. Registrierung / Kundenkonto</h2>
            <p>Bei Registrierung verarbeiten wir:</p>
            <ul>
              <li>Name</li>
              <li>E-Mail-Adresse</li>
              <li>ggf. weitere Angaben</li>
            </ul>
            <p>
              <strong>Zweck:</strong> Bereitstellung eines Nutzerkontos
              <br />
              <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO
            </p>
            <p>
              <strong>Speicherdauer:</strong> bis Löschung des Kontos
            </p>
            <hr />

            <h2>8. Newsletter</h2>
            <p>Für den Newsletter verwenden wir das Double-Opt-in-Verfahren.</p>
            <p>
              <strong>Verarbeitete Daten:</strong>
            </p>
            <ul>
              <li>E-Mail-Adresse</li>
            </ul>
            <p>
              <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. a DSGVO
            </p>
            <p>
              <strong>Widerruf:</strong> jederzeit über Abmeldelink möglich
            </p>
            <hr />

            <h2>9. Webanalyse (Google Analytics 4)</h2>
            <p>Wir nutzen Google Analytics 4.</p>
            <p>
              <strong>Anbieter:</strong> Google Ireland Limited
            </p>
            <p>
              <strong>Verarbeitung erfolgt nur nach Einwilligung.</strong>
            </p>
            <ul>
              <li>IP-Anonymisierung aktiv</li>
              <li>Speicherdauer: 14 Monate</li>
            </ul>
            <p>
              <strong>Rechtsgrundlage:</strong>
            </p>
            <ul>
              <li>Art. 6 Abs. 1 lit. a DSGVO</li>
              <li>§ 25 TTDSG</li>
            </ul>
            <p>
              <strong>Drittlandtransfer:</strong>
              <br />
              USA auf Basis des EU-US Data Privacy Framework
            </p>
            <hr />

            <h2>10. Werbung und Tracking</h2>
            <h3>10.1 Google Ads / Conversion Tracking</h3>
            <p>Erfolgt nur mit Einwilligung.</p>
            <h3>10.2 Google AdSense</h3>
            <p>Erfolgt nur mit Einwilligung.</p>
            <hr />

            <h2>11. Affiliate-Programme (Amazon)</h2>
            <p>Wir nehmen am Amazon EU-Partnerprogramm teil.</p>
            <p>
              <strong>Rechtsgrundlage:</strong>
            </p>
            <ul>
              <li>Einwilligung für Cookies</li>
              <li>Art. 6 Abs. 1 lit. f DSGVO für Abrechnung</li>
            </ul>
            <hr />

            <h2>12. Einbindung von Videos (YouTube, Vimeo)</h2>
            <p>Videos werden <strong>nur mit vorheriger Einwilligung geladen</strong> (2-Klick-Lösung oder Consent-Tool).</p>
            <p>
              <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. a DSGVO
            </p>
            <hr />

            <h2>13. Google Web Fonts</h2>
            <p>Wir verwenden <strong>lokal eingebundene Schriftarten</strong>.</p>
            <p>👉 Es erfolgt keine Datenübertragung an Google.</p>
            <hr />

            <h2>14. Fernwartung (pcvisit)</h2>
            <p>Bei Nutzung der Fernwartung werden technische Verbindungsdaten verarbeitet.</p>
            <p>
              <strong>Rechtsgrundlage:</strong>
            </p>
            <ul>
              <li>Art. 6 Abs. 1 lit. b DSGVO</li>
              <li>ggf. lit. f DSGVO</li>
            </ul>
            <hr />

            <h2>15. Drittlandübermittlung</h2>
            <p>Eine Übermittlung in Drittländer erfolgt nur:</p>
            <ul>
              <li>bei geeigneten Garantien</li>
              <li>oder Angemessenheitsbeschluss (z. B. EU-US Data Privacy Framework)</li>
            </ul>
            <hr />

            <h2>16. Ihre Rechte</h2>
            <p>Sie haben folgende Rechte:</p>
            <ul>
              <li>Auskunft (Art. 15 DSGVO)</li>
              <li>Berichtigung (Art. 16 DSGVO)</li>
              <li>Löschung (Art. 17 DSGVO)</li>
              <li>Einschränkung (Art. 18 DSGVO)</li>
              <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
              <li>Widerspruch (Art. 21 DSGVO)</li>
            </ul>
            <hr />

            <h2>17. Beschwerderecht</h2>
            <p>Sie können sich bei einer Datenschutzaufsichtsbehörde beschweren.</p>
            <hr />

            <h2>18. Widerruf Ihrer Einwilligung</h2>
            <p>Einwilligungen können jederzeit mit Wirkung für die Zukunft widerrufen werden.</p>
            <hr />

            <h2>19. Pflicht zur Bereitstellung von Daten</h2>
            <p>
              Die Bereitstellung personenbezogener Daten kann gesetzlich oder vertraglich erforderlich sein. Ohne diese Daten können
              bestimmte Leistungen nicht erbracht werden.
            </p>
            <hr />

            <h2>20. Automatisierte Entscheidungen</h2>
            <p>Eine automatisierte Entscheidungsfindung findet nicht statt.</p>
            <hr />

            <h2>21. Aktualität</h2>
            <p>Diese Datenschutzerklärung wird regelmäßig angepasst.</p>
            <p>
              Stand: {'<Datum>'}
            </p>
          </article>
        </section>
      </main>

      <Footer />
    </div>
  )
}
