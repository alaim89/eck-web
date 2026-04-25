# Analytics Security & GDPR Test Coverage

Diese Tests decken zentrale Analytics-Risiken ab:

- `__tests__/unit/api/track-visit.route.test.ts`
  - Datensparsamkeit des Tracking-Payloads
  - Rate-Limiting / 429
  - Replay-/Stale-Event-Abwehr
- `__tests__/unit/api/admin/analytics-visitors.route.test.ts`
  - Admin-API-Schutz (401/403/200)
  - manipulierte/ungültige Session-Signatur als 401
  - Zeitraumbegrenzung auf max. 366 Tage
- `__tests__/unit/api/admin/analytics-export.route.test.ts`
  - Export nur für Admin
  - CSV enthält keine sensitiven Header-Felder
  - CSV-Injection-Schutz wird erzwungen
- `__tests__/unit/lib/analytics-visitors.test.ts`
  - Retention/Cleanup (alt raus, neu bleibt)
  - Cleanup wirkt nur auf Analytics-Datei
  - Page-size-Kappung (Performance-Schutz)
  - CSV Formula Neutralisierung
  - Event-Objekte enthalten keine offensichtlichen sensitiven Header/Cookie-Felder
- `__tests__/components/VisitorStatsSecurity.test.tsx`
  - XSS-Payloads werden in der Admin-UI als Text gerendert (nicht als ausführbares HTML)

Hinweis:
- Diese Tests sichern den vorhandenen Code ab und sind bewusst auf minimale Änderungen ausgelegt.
