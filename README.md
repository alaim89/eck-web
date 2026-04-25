<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/ead20006-3ab8-4c1b-a103-5db5678970af

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Analytics (Admin Besucherstatistik)

Das Analytics-Modul ist DSGVO-bewusst und funktioniert ohne eigene Tracking-Cookies:

- Client-Tracking erfolgt über `components/VisitorTracker.tsx` und sendet Events an `POST /api/track/visit`.
- Tracking wird nur ausgeführt, wenn `analytics`-Consent vorliegt.
- Gespeichert werden nur technische Felder (Session-ID, URL, Referrer, UTM, Gerät, Browser, Zeitstempel).
- Es werden keine vollständigen IP-Adressen gespeichert; nur ein gehashter Wert (`ip_hash`) sofern verfügbar.
- Aufbewahrung ist konfigurierbar über `ANALYTICS_RETENTION_DAYS` (Default: 90 Tage).

Admin-Endpunkte:
- `GET /api/admin/analytics/visitors` (Live + Historie, nur mit `analytics.view`)
- `GET /api/admin/analytics/visitors/export` (CSV-Export, nur mit `analytics.view`)

Interner Cleanup-Endpunkt (für Scheduler/Cron):
- `POST /api/internal/analytics/cleanup`
- Authentifizierung: `Authorization: Bearer $ANALYTICS_CRON_TOKEN`

Empfohlene Betriebs-Variablen:
- `OPS_PERSISTENCE_MODE=file`
- `OPS_DATA_DIR=.ops-data` (oder persistentes Volume)
- `ANALYTICS_RETENTION_DAYS=90`
- `ANALYTICS_TRACK_RATE_LIMIT_PER_MINUTE=120`
- `ANALYTICS_CRON_TOKEN=<starkes-geheimnis>`
