# Analytics Operations Runbook

## Scope
Dieses Dokument beschreibt Betrieb, Sicherheit, Datenschutz und Recovery für das Besucherstatistik-Modul.

## Datenmodell
Persistierte Felder pro Event:
- `id`
- `session_id`
- `page_url`
- `referrer`
- `utm_source`
- `utm_medium`
- `utm_campaign`
- `device_type`
- `browser`
- `ip_hash` (optional, gehasht)
- `created_at`
- `last_seen_at`

Storage-Backend:
- JSON-Datei über `lib/ops/persistence.ts`
- Datei: `visitor-events.json` im `OPS_DATA_DIR` (bei `OPS_PERSISTENCE_MODE=file`)

## API-Endpunkte
- `POST /api/track/visit`
  - öffentlich, rate-limitiert (IP-hash + Session-basiert)
  - Eingabevalidierung per Zod
  - Logging für Accepted/Invalid/Rate-Limited/Error
- `GET /api/admin/analytics/visitors`
  - benötigt Permission `analytics.view`
  - liefert Live-Snapshot + Historie + Top-Seiten
- `GET /api/admin/analytics/visitors/export`
  - benötigt Permission `analytics.view`
  - CSV-Export mit Formula-Injection-Schutz
- `POST /api/internal/analytics/cleanup`
  - für Scheduler/Cron
  - `Authorization: Bearer $ANALYTICS_CRON_TOKEN`

## Datenschutz
Gespeichert wird:
- technische Nutzungsanalysefelder (siehe Datenmodell)

Nicht gespeichert wird:
- vollständige IP-Adresse
- Name, E-Mail, Telefonnummer oder andere direkte personenbezogene Felder

Consent:
- Tracking wird clientseitig nur bei Analytics-Consent gesendet.

## Daten-Lifecycle
Retention:
- `ANALYTICS_RETENTION_DAYS` (Default 90, min 1)
- Cleanup läuft bei Analytics-Lese/Schreibvorgängen automatisch.
- Zusätzlich sollte ein Scheduler regelmäßig `POST /api/internal/analytics/cleanup` aufrufen.

Beispiel (stündlich):
- Vercel Cron oder externer Scheduler
- Header: `Authorization: Bearer $ANALYTICS_CRON_TOKEN`

## Monitoring & Alerts
### Logs
Tracking-Endpoint produziert strukturierte Logs:
- `analytics.track.accepted`
- `analytics.track.invalid_payload`
- `analytics.track.rate_limited`
- `analytics.track.high_request_rate`
- `analytics.track.traffic_spike`
- `analytics.track.unhandled_error`

Analytics-Persistenz:
- `analytics.persistence.write_failed`

Cleanup:
- `analytics.cleanup.completed`

### Alert-Empfehlungen
1. Traffic Spike:
   - Trigger auf `analytics.track.traffic_spike` oder >X accepted/min.
2. Error Rate:
   - Anteil `invalid_payload + unhandled_error` > 5% in 5 Minuten.
3. Write Errors:
   - `analytics.persistence.write_failed` > 0 in 5 Minuten.

## Performance
- Aggregationen laufen in-memory auf gefilterten Events.
- Kurzzeit-Cache (30s) für Historie-Abfragen zur Entlastung.
- Pagination serverseitig (`page`, `page_size`, max 200).
- Ziel: <500ms für typische Admin-Abfragen bei moderatem Datenvolumen.

## Backup & Recovery
### Backup
- Backup von `OPS_DATA_DIR` (insb. `visitor-events.json`) regelmäßig sichern.
- Empfohlen: tägliches Snapshot + 14/30 Tage Aufbewahrung.

### Restore
1. Service in Wartungsmodus (optional).
2. `visitor-events.json` aus Backup zurückspielen.
3. Anwendung neu starten (oder Cold Start erzwingen).
4. `/api/admin/analytics/visitors` prüfen.

### Rollback
- Bei Problemen Feature deaktivieren (z. B. Tracker-Rendering temporär entfernen) und letzten Commit revertieren.
