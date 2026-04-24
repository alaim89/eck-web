# Enterprise-Zielarchitektur: Website + Campaign Operating System + CRM/Quote Integration Layer

## 1. Executive Summary

Die bestehende Next.js-App wird **nicht** ersetzt, sondern zu einer modularen Plattform erweitert: öffentliches Website-Frontend + internes Operations-Backend + Integrationsschicht zu Dynamics 365 Sales (CRM-führend) und sevdesk (kaufmännisch führend).

Kernentscheidung: **Custom Admin + Domain-orientierte Applikationsschicht + Integrations-Orchestrierung in der bestehenden Next.js-Codebasis**, ergänzt um Queue/Worker und saubere Domaingrenzen. Kein "CMS-Monolith" und kein "Buchhaltungs-Shadow-System".

Ziel ist eine produktive Plattform mit:
- strukturiertem Landingpage-/Kampagnenbetrieb
- serverseitig erzwungenem RBAC
- auditierbaren CRM-/sevdesk-Sync-Prozessen
- dedizierter Match/Merge-Logik für Kundendaten
- sauberer Trennung von Live/Staging/Sandbox/Testdaten

---

## 2. Zielarchitektur (High-Level)

**Textuelle Systemarchitektur (Komponenten):**

1. **Experience Layer (Next.js App Router)**
   - Public Website Rendering (SEO, dynamische Slugs, OG, Schema)
   - Internal Backoffice UI (`/admin`) für Content, Kampagnen, Leads, Sync-Monitoring

2. **Application Layer (Next.js Route Handlers + Domain Services)**
   - Use Cases: Page Lifecycle, Campaign Ops, Lead Intake, Review Workflows
   - Serverseitige Permission-Gates
   - Domain-Services pro Kontext (Content, Campaign, Lead, CustomerSync, Integration)

3. **Integration Layer (Orchestration + Connectoren)**
   - Dynamics 365 Connector (Dataverse API)
   - sevdesk Connector (Offer/Invoice/Contact Flows)
   - Idempotency, Retry, Dead Letter Queue (DLQ), Reconciliation

4. **Data Layer**
   - Primäre Plattform-DB (PostgreSQL)
   - Outbox/Inbox-Tabellen für Integrationsereignisse
   - Objekt-Storage für Medienassets

5. **Async Processing Layer**
   - Queue + Worker (z. B. BullMQ/Redis oder SQS-Worker)
   - Jobs für CRM Push/Pull, Match/Merge, sevdesk Trigger, Reconciliation

6. **Security & Ops Layer**
   - Identity Provider + MFA
   - Audit Logging (append-only)
   - Observability (Logs, Metrics, Traces, Alerting)

---

## 3. Systemgrenzen und Verantwortlichkeiten

### A) Website/Admin (führend für operative Web-/Kampagnensteuerung)
Verantwortung:
- Landingpages, Kampagnen, Templates, SEO-Metadaten
- Formulardefinitionen, CTA-Config, Asset-Zuordnung
- interne Freigabeworkflows
- technische Orchestrierung von Übergaben

Nicht-Verantwortung:
- keine fachliche CRM-Führungsrolle
- keine Buchhaltungslogik wie Rechnungswesen-Engine

### B) Dynamics 365 Sales (CRM-Führungsinstanz)
Verantwortung:
- Leads, Kontakte, Accounts, Opportunities, Sales-Status
- CRM-seitige Kampagnen-/Vertriebssemantik

### C) sevdesk (kaufmännisch führend)
Verantwortung:
- Artikel/Leistungen, Angebote, Rechnungen, Belege

**Boundary-Prinzip:** Plattform hält nur **notwendige Projektsicht/Arbeitskopien** plus Referenz-IDs (`crm_*`, `sevdesk_*`), nicht die vollständige Domänenhoheit externer Systeme.

---

## 4. Empfohlener Tech-Stack

**Empfehlung (klar): Hybrid-Custom, kein reines Headless-CMS als Kern.**

- **Frontend/Backend:** Next.js (App Router) + TypeScript (beibehalten)
- **DB:** PostgreSQL (starke Relationen, Transaktionen, JSONB für flexible Blöcke)
- **ORM:** Prisma oder Drizzle (Prisma bevorzugt für Team-Speed + Migrationsökosystem)
- **Auth:** OIDC/SAML-fähiger Provider (z. B. Auth0, Azure AD B2C, Keycloak) + MFA für privilegierte Rollen
- **Session:** serverseitige, signierte, kurze Sessions + Rotationsstrategie
- **Queue/Worker:** BullMQ+Redis (einfach) oder SQS+Worker (cloud-native, robuster)
- **Storage:** S3-kompatibel für Medien
- **Observability:** OpenTelemetry + zentrale Logs (Datadog/ELK/Grafana)
- **Feature Flags:** Unleash/LaunchDarkly für progressive Rollouts

**Alternativen und Entscheidung:**
- Reines Headless CMS (Strapi/Contentful) für Kampagnen ist möglich, aber RBAC+Integrationslogik+Sync-Audits würden doppelt gebaut. **Daher verworfen als Kernsystem**.
- Vollständige Microservices sofort: zu hoher Initial-Overhead. **Daher modularer Monolith mit klaren Domaingrenzen + async worker**.

---

## 5. Ziel-Domänenmodell

Domänen (Bounded Contexts):
1. **Content Domain** – Seiten, Blöcke, Templates, SEO
2. **Campaign Domain** – Kampagnenobjekte, Kanäle, Zuordnungen
3. **Form & Lead Intake Domain** – Formversionen, Submissions, Consent
4. **CRM Sync Domain** – Lead Push, Customer Mirror, Match/Merge
5. **Commercial Sync Domain** – sevdesk-Relevanz, Angebotsvorbereitung
6. **Identity & Access Domain** – User, Roles, Permissions, Sessions
7. **Operations Domain** – AuditLog, SyncJob, IntegrationEvent, Reconciliation

Designprinzip: Jede Domäne besitzt eigene Services + Repositories, gemeinsame Nutzung nur über explizite Use Cases/Events.

---

## 6. Rollen- und Berechtigungsmodell (RBAC + Permissions)

**Serverseitiges RBAC + Permission-Checks pro Action.**

### Rollenmatrix (Auszug)

| Rolle | Zweck | Kritische Rechte |
|---|---|---|
| Super Admin | Plattform-Gesamtverantwortung | `settings.manage`, `user.manage`, `role.manage`, `integration.manage` |
| Admin | Operativer Systembetrieb | fast alle außer Rollendefinition auf Root-Level |
| Content Manager | Seiten/Templates/Kampagnen | `page.*`, `template.manage`, `seo.edit`, `campaign.*` |
| Editor | Inhalte pflegen | `page.edit`, `page.submit_review`, eingeschränkt `media.upload` |
| Sales/Campaign Manager | Kampagnen + Leads + CRM Übergabe | `campaign.*`, `lead.view`, `crm.sync`, `customer.match.resolve` |
| SEO/Analyst (optional) | SEO/Analyse | `seo.edit`, `analytics.view`, kein Publish ohne Freigabe |
| Partner/Hersteller (optional extern) | begrenzte Kampagnenbeiträge | scoped `campaign.edit.own`, `asset.upload.own` |

### Permission-Katalog (Mindestset)
- `page.create`, `page.edit`, `page.publish`, `page.delete`
- `campaign.create`, `campaign.edit`, `campaign.publish`, `campaign.archive`
- `template.manage`, `media.upload`, `media.delete`
- `form.manage`, `lead.view`, `lead.export`
- `crm.sync`, `customer.match.resolve`
- `seo.edit`
- `user.manage`, `settings.manage`, `audit.view`

**Durchsetzung:**
- UI blendet aus (Usability), aber **API erzwingt** Rechte.
- Permission-Guard auf Route-Handler- und Service-Layer.
- Default Deny + Least Privilege.

---

## 7. Datenmodell / Entitäten / Beziehungen

**ERD-artiges Textmodell (vereinfacht):**

- `User (id, email, status)`
- `Role (id, name)`
- `Permission (id, key)`
- `UserRole (user_id, role_id)`
- `RolePermission (role_id, permission_id)`

- `Page (id, slug, status, template_id, campaign_id?, seo_id, published_at)`
- `PageVersion (id, page_id, version, blocks_json, created_by)`
- `Template (id, name, block_schema_json, status)`
- `Campaign (id, name, type, status, start_at, end_at, owner_id)`
- `Asset (id, uri, mime, checksum, uploaded_by)`

- `Form (id, name, schema_json, version, campaign_id?)`
- `FormSubmission (id, form_id, page_id?, payload_json, consent_json, is_test, submitted_at)`
- `Lead (id, source_submission_id, status, crm_lead_id?, campaign_id, dedupe_hash)`

- `CustomerLocal (id, crm_contact_id?, crm_account_id?, sevdesk_contact_id?, email_norm, company_norm, phone_norm, tax_id_norm?, is_test, confidence_score, match_state)`
- `CustomerMatchDecision (id, customer_local_id, action, reason, decided_by, decided_at)`

- `IntegrationEvent (id, system, direction, entity_type, entity_id, idempotency_key, payload_json, status)`
- `SyncJob (id, job_type, status, retries, last_error, next_retry_at)`
- `SyncLog (id, correlation_id, level, message, context_json, created_at)`
- `AuditLog (id, actor_id, action, object_type, object_id, diff_json, created_at)`

Beziehungsregeln:
- `Page` kann 0..1 `Campaign` zugeordnet sein (oder M:N via Join falls nötig).
- `FormSubmission` führt zu `Lead` (1:0..1) nach Validierung.
- `Lead` referenziert CRM-ID, bleibt lokal nur als operatives Tracking.
- `CustomerLocal` ist Projektsicht/Mirror, CRM bleibt Master.

---

## 8. Sync- und Integrationslogik

### Architekturentscheidung
**Hybrid Push/Pull + Event-getriebene Verarbeitung.**

- **Push:** Form/Lead-Ereignisse aus Website -> Dynamics (nahe Echtzeit)
- **Pull/Webhook:** CRM-Änderungen via Webhook, fallback periodischer Pull
- **sevdesk:** triggerbasiert nur bei kaufmännischer Relevanz

### Integrationsmuster
1. API-Request erzeugt Domänenevent in Outbox (`IntegrationEvent`)
2. Worker konsumiert Event, ruft externes API auf
3. Antwort mit externer ID persistieren (`crm_*`, `sevdesk_*`)
4. Fehler -> Retry mit Exponential Backoff
5. Max Retries -> DLQ + sichtbarer Alert + Review Queue

### Idempotenz
- Pro externem Request `idempotency_key = hash(system+entity+intent+version)`
- Doppelte Requests werden als no-op behandelt.

### Auditierbarkeit
- Korrelation-ID durchgängig von UI-Aktion bis externem API-Call
- Jeder Synczustand im `SyncLog` + UI-Statuspanel

---

## 9. Create-Update-Match-Merge-Strategie für Kundendaten

### Zustandsmaschine
`CREATE | UPDATE | MATCH | MERGE | IGNORE | FLAG_FOR_REVIEW`

### Matching-Logik (Gewichtung/Confidence)
1. Exakte IDs: `crm_contact_id`, `crm_account_id` (höchste Priorität)
2. E-Mail normalisiert (stark)
3. Firmenname normalisiert + Land/PLZ (mittel)
4. Telefon normalisiert (mittel)
5. Steuer-ID/UID (stark, falls vorhanden)

**Score-Beispiel:**
- >= 0.90: Auto-MATCH
- 0.70–0.89: FLAG_FOR_REVIEW
- < 0.70: CREATE-Kandidat

### Merge-Regeln
- CRM-Felder sind bevorzugte Quelle bei Konflikten (Master-Wins).
- Lokale Felder dürfen nur für betriebliche Annotationen überschreiben (z. B. interne Tags).
- Jede Merge-Entscheidung in `CustomerMatchDecision` mit Benutzer/Grund.

### Pflichtfall (von dir gefordert)
Neuer CRM-Kontakt mit anderer Schreibweise, lokaler Kunde bereits vorhanden:
- Normalisierung (Case, Umlaute, Rechtsformen wie GmbH/AG, Whitespace)
- Fuzzy Name + E-Mail/Telefon-Kombi
- Score 0.70–0.89 -> Review Queue statt Auto-Create
- Reviewer entscheidet MATCH/MERGE/IGNORE
- Kein ungeprüftes Duplikat entsteht

### Testdatenlogik
- `is_test` Flag auf Submission/Lead/CustomerLocal/SyncEvent
- Testdaten dürfen produktive sevdesk-Flows nicht triggern (hard guard)
- Reporting filtert per Default `is_test=false`

---

## 10. sevdesk-Triggerlogik

**Klarer Grundsatz:** Nicht jeder CRM-Kontakt wird sevdesk-Kontakt.

Trigger nur bei **kaufmännischer Relevanz**, z. B.:
- Opportunity Status in CRM = "Angebot angefordert"
- interner Freigabestatus = `commercial_approved`
- Pflichtdaten vollständig (Rechnungsadresse, Ansprechpartner, Consent)

Ablauf:
1. Prüfen ob `sevdesk_contact_id` existiert
2. Falls nein: Kontakt in sevdesk anlegen (serverseitig)
3. Artikel/Leistungen referenzieren (keine freie Texteingabe ohne Katalogregel)
4. Angebot erzeugen oder Entwurf anlegen
5. Status zurückschreiben (`sevdesk_quote_id`, `sync_status`)

Fehlerfall:
- Fehlgeschlagene Anlage => Retry/DLQ
- UI zeigt "Commercial Sync Blocked" mit Fehlerdetail
- manuelle Wiederholung mit Permission `crm.sync`

---

## 11. Landingpage- und Kampagnenarchitektur

### Modell
- **Template-basiert** (kein unkontrollierter Full-Builder)
- Vordefinierte Blocktypen (Hero, Trust, Features, CTA, FAQ, Legal)
- Block-Schemas versioniert

### Page Lifecycle
`Draft -> Review -> Approved -> Published -> Archived`

### Kernfunktionen
- Template-Auswahl + Variantenklon
- Kampagnen-Zuordnung (UTM defaults, Channel, Zielgruppe)
- Formular-Zuordnung (versioniert)
- SEO-Set je Seite: Title, Meta, Canonical, Robots, OG, Schema
- Preview mit signed preview tokens

### Time-to-Launch Hebel
- Kampagnen-Blueprints (Hersteller, Partner, Seasonal)
- One-click Duplication mit kontrollierten Pflichtfeldern
- Auto-QA Checks vor Publish (SEO-Lints, Broken Link Check, Tracking-ID Pflicht)

---

## 12. API- und Event-Design

### Zentrale API-Endpunkte (Beispiel)
- `POST /api/admin/pages`
- `PATCH /api/admin/pages/:id`
- `POST /api/admin/pages/:id/submit-review`
- `POST /api/admin/pages/:id/publish`
- `POST /api/admin/campaigns`
- `POST /api/forms/:formId/submit`
- `GET /api/admin/leads`
- `POST /api/admin/leads/:id/push-crm`
- `POST /api/admin/customers/:id/match-decision`
- `POST /api/admin/integrations/dynamics/reconcile`
- `POST /api/admin/integrations/sevdesk/sync`
- `GET /api/admin/sync-jobs/:id`

### Event-Typen
- `lead.submitted`
- `lead.crm_push.requested|succeeded|failed`
- `customer.match.flagged|resolved`
- `commercial.sync.requested|succeeded|failed`
- `page.published`

API-Prinzipien:
- versioniert (`/api/v1/...` empfehlenswert)
- idempotente POSTs für Sync-Aktionen via Header-Key
- standardisierte Fehlercodes + machine-readable reason

---

## 13. Sicherheitskonzept

- MFA Pflicht für `Super Admin`, `Admin`, `Sales/Campaign Manager`
- Serverseitige AuthN/AuthZ in jedem sensitiven Route Handler
- CSRF-Schutz für Session-basierte Admin-Flows
- Rate Limiting für Form-Endpunkte + Admin APIs
- WAF/CDN Schutz vor Bot Abuse
- Upload Security: MIME + Magic-Byte Prüfung + Malware-Scan + Quarantäne
- Secrets nur in Secret Manager, nie im Repo
- Vollständige Audit Logs für kritische Aktionen (Publish, Role Change, Sync Override)
- IP Allowlisting optional für Adminbereich (je nach Betriebsmodell)
- regelmäßige Permission Reviews (quarterly)

---

## 14. DSGVO-/Compliance-relevante Architekturprinzipien

- Datenminimierung: nur notwendige Kopien lokal
- Zweckbindung: klare Felder pro Prozesszweck
- Löschkonzept: soft-delete + hard-delete Workflows mit Aufbewahrungsregeln
- Betroffenenrechte: Export/Deletion-Orchestrierung über Datenquellen
- Consent-Nachweis in `FormSubmission.consent_json`
- Zugriff strikt rollenbasiert, PII standardmäßig maskiert
- Testdatenkennzeichnung (`is_test`) verpflichtend
- Datenflüsse dokumentiert (RoPA-fähig)

---

## 15. Observability / Logging / Monitoring

- Structured Logs mit `correlation_id`, `tenant/context`, `entity_id`
- Metrics:
  - Lead->CRM Success Rate
  - Duplicate Match Queue Size
  - sevdesk Sync Failure Rate
  - Publish Lead Time
- Distributed Tracing für Integrationspfade
- Alerting (SLO-basiert):
  - CRM Push Error > x% in 15min
  - Queue Lag > Schwellwert
  - DLQ > 0 für kritische Events
- Ops Dashboard im Admin: "Integration Health"

---

## 16. Deployment- und Umgebungsstrategie

Umgebungen:
- `local` (developer)
- `dev` (shared)
- `staging` (prod-like mit Sandbox-Integrationen)
- `prod`

Prinzipien:
- getrennte Secrets/Keys je Umgebung
- Dynamics Sandbox vs. Production strikt trennen
- sevdesk Test-/Produktivmandant strikt trennen
- CI/CD mit mandatory migrations + smoke tests
- Blue/Green oder Canary für risikoreiche Releases

Backup/Recovery:
- tägliche DB-Backups + PITR
- regelmäßige Restore-Tests

---

## 17. Migrationspfad vom bestehenden Next.js-Projekt

1. **Phase 0 (Foundation):** Ordnerstruktur refactor ohne Funktionsbruch
2. **Phase 1:** RBAC/Auth + Admin Shell + AuditLog
3. **Phase 2:** Template/Page Lifecycle + Campaign Module
4. **Phase 3:** Lead Intake hardening + Dynamics Push (idempotent)
5. **Phase 4:** Customer Match/Merge Engine + Review Queue
6. **Phase 5:** sevdesk Trigger-Flows + Commercial Dashboard
7. **Phase 6:** Reconciliation/Observability Vollausbau

Keine Big-Bang-Migration; inkrementelle Evolution mit Feature Flags.

---

## 18. Delivery-Roadmap in Phasen (priorisiert)

1. Sicherheitsfundament (Auth, MFA, RBAC, Audit)
2. Datenmodell + Migrationen + Outbox/SyncJob Tabellen
3. Admin Module: Pages/Templates/Campaigns (MVP)
4. Form/Lead Pipeline + Dynamics Integration
5. Match/Merge & Konflikt-Review
6. sevdesk kommerzielle Trigger
7. Monitoring/SLO/Alerting + Reconciliation
8. Skalierung/Optimierung + zusätzliche Integrationen

---

## 19. Risiken / Failure Modes / Trade-offs

| Issue | Risiko | Auswirkung | Gegenmaßnahme |
|---|---|---|---|
| Zu breite lokale CRM-Kopie | Dateninkonsistenz | Konflikte, DSGVO-Risiko | Nur operative Mirror-Felder + CRM Master-Regeln |
| Fehlende Idempotenz | Doppelte Leads/Quotes | Vertriebschaos | idempotency_key + unique constraints |
| UI-only RBAC | Privilege Escalation | Sicherheitsvorfall | Server-side permission enforcement |
| Unklare sevdesk Trigger | zu viele Kontakte/Belege | kaufmännischer Datenmüll | harte Triggerbedingungen + Freigabestatus |
| Kein Match-Review | Dubletten | Reporting/Vertrieb fehlerhaft | Confidence + Review Queue |
| Keine Sandbox-Trennung | Testdaten in Prod | Compliance/Finanzfehler | environment guards + is_test hard rules |
| Keine DLQ | stille Integrationsfehler | Datenverlust | DLQ + Alerting + manual replay |
| Template-Freestyle | Qualitätsabfall | SEO/UX inkonsistent | strikt versionierte Blockschemas |
| Fehlende Audit Logs | keine Nachvollziehbarkeit | Governance-Risiko | append-only AuditLog |
| Monolith ohne Domänengrenzen | Wartungsprobleme | Delivery verlangsamt | modularer Monolith + klare contexts |

---

## 20. Klare Architekturentscheidung mit Begründung

**Empfohlene Zielarchitektur:**

> **Modularer Monolith auf bestehendem Next.js-App-Router, ergänzt um dedizierte Domain-Services, serverseitig erzwungenes RBAC, Queue-basierte Integrationsorchestrierung, PostgreSQL als zentrale Betriebsdatenbank und klare Führungsinstanzen (Dynamics CRM-master, sevdesk Finance-master).**

**Begründung:**
- minimiert Migrationsrisiko (Bestand bleibt nutzbar)
- liefert schnell Business Value (Landingpages/Kampagnen zuerst)
- erfüllt Enterprise-Anforderungen (Security, Audit, Integrität)
- ist skalierbar in Richtung späterer Service-Extraktion

---

# Zusatzartefakte

## A) Textuelle Systemarchitektur mit Komponenten (kompakt)
Public User -> Next.js Public App -> Form API -> Lead Domain -> Outbox -> Worker -> Dynamics API

Internal User -> Admin UI -> Admin API -> Campaign/Page Domain -> DB + AuditLog

Commercial Trigger -> Commercial Domain -> sevdesk Connector -> sevdesk API -> SyncStatus zurück

Webhook/Pull CRM -> CRM Connector -> Match/Merge Domain -> Review Queue -> CustomerLocal Update

## B) ERD-artiges Datenmodell (kompakt)
`User` M:N `Role` M:N `Permission`

`Template` 1:N `Page`

`Page` 1:N `PageVersion`

`Campaign` 1:N `Page`, 1:N `Form`, 1:N `Lead`

`Form` 1:N `FormSubmission` 1:0..1 `Lead`

`Lead` N:1 `CustomerLocal` (optional nach Match)

`CustomerLocal` 1:N `CustomerMatchDecision`

`IntegrationEvent` 1:N `SyncLog`; `SyncJob` verarbeitet `IntegrationEvent`

## C) Rollenmatrix (detaillierter Kern)
- Super Admin: alle Rechte inkl. Rollenmodell/Settings
- Admin: operative Vollrechte, keine Root-Rollenänderung
- Content Manager: `page.*`, `campaign.*`, `template.manage`, `seo.edit`
- Editor: `page.edit`, `page.submit_review`, kein `page.publish`
- Sales/Campaign Manager: `lead.view`, `crm.sync`, `customer.match.resolve`, `campaign.*`
- SEO/Analyst: `seo.edit`, `analytics.view`, kein User-/Settings-Zugriff
- Partner: stark gescopter Zugriff auf eigene Kampagnenassets

## D) Beispiel-Ordnerstruktur (Next.js-Evolution)

```txt
src/
  app/
    (public)/
      [...slug]/page.tsx
    admin/
      dashboard/page.tsx
      pages/
      campaigns/
      leads/
      customers/
      integrations/
    api/
      v1/
        admin/
          pages/
          campaigns/
          leads/
          customers/
          integrations/
        forms/
  modules/
    content/
      domain/
      application/
      infrastructure/
    campaign/
    lead/
    customer-sync/
    commercial-sync/
    iam/
    ops/
  lib/
    auth/
    rbac/
    db/
    queue/
    observability/
  workers/
    crm-sync.worker.ts
    sevdesk-sync.worker.ts
    reconciliation.worker.ts
```

## E) Liste zentraler API-Endpunkte
- `POST /api/v1/forms/:id/submit`
- `GET /api/v1/admin/dashboard`
- `POST /api/v1/admin/pages`
- `POST /api/v1/admin/pages/:id/publish`
- `POST /api/v1/admin/campaigns`
- `GET /api/v1/admin/leads?status=`
- `POST /api/v1/admin/leads/:id/crm-sync`
- `POST /api/v1/admin/customers/:id/match-decision`
- `POST /api/v1/admin/integrations/dynamics/reconcile`
- `POST /api/v1/admin/integrations/sevdesk/quote`
- `GET /api/v1/admin/sync-jobs/:id`

## F) Risiko-Tabelle
(siehe Abschnitt 19, bereits vollständig enthalten)

## G) Priorisierte Delivery-Roadmap
1. IAM/RBAC/Audit
2. Content+Campaign Foundations
3. Lead->Dynamics robust
4. Match/Merge & Review
5. sevdesk Commercial Flows
6. Observability/Reconciliation
7. Optimierung/Skalierung

---

# Abschluss

## 10 wichtigste Architekturentscheidungen
1. Bestehendes Next.js weiterverwenden (kein Relaunch)
2. Modularer Monolith statt sofortiger Microservice-Zersplitterung
3. Custom Admin + Template Engine statt Full-Freestyle Builder
4. CRM Master = Dynamics, Finance Master = sevdesk strikt erzwingen
5. PostgreSQL als zentrale Betriebsdatenbank
6. Serverseitiges RBAC mit granularen Permissions
7. Queue-basierte Integrationsorchestrierung mit DLQ
8. Idempotenzpflicht für alle externen Sync-Aktionen
9. Confidence-basiertes Match/Merge mit manueller Review Queue
10. Environment-/Testdaten-Trennung als harte technische Regel

## 10 größte Risiken
1. Dubletten durch schwaches Matching
2. Unkontrollierte Datenreplikation aus CRM
3. Fehlende Idempotenz bei Retries
4. Unklare Trigger für sevdesk
5. Überprivilegierte Rollen
6. Fehlende Auditierbarkeit
7. Vermischung von Test- und Produktivdaten
8. Deployment ohne Reconciliation
9. Technische Schuld durch ungeordnete Modulgrenzen
10. Zu spätes Monitoring/Alerting

## 10 wichtigste nächste Umsetzungsschritte
1. Ziel-Datenmodell + Migrationsplan finalisieren
2. IAM-Stack auswählen und MFA verpflichtend aktivieren
3. Permission-Katalog in Code als Source of Truth etablieren
4. Admin Shell + AuditLog technisch implementieren
5. Template/Page Lifecycle MVP bauen
6. Lead Submission Pipeline mit Idempotenz einführen
7. Dynamics Connector + Retry/DLQ umsetzen
8. Match/Merge Engine + Review Queue implementieren
9. sevdesk Triggerbedingungen und Commercial Flow implementieren
10. SLOs, Dashboards, Alerts + Reconciliation Jobs produktiv setzen
