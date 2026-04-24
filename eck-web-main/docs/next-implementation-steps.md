# Next Implementation Steps (Gap-to-Production)

This document lists what is still required to move the current in-memory admin/ops prototype to a production-grade enterprise platform.

## 1) Persistence & Data Integrity (Highest Priority)

Status: Started (file-based persistence foundation added for audit log)

- Replace in-memory stores with database-backed models for:
  - audit logs
  - CRM sync jobs
  - sevdesk commercial jobs
  - customer review queue decisions
- Add schema migrations and unique constraints for idempotency keys.
- Add reconciliation snapshots and historical state transitions.

## 2) Identity & Access Hardening

- Replace temporary/dummy/bootstrap login with production identity provider (OIDC/SAML).
- Enforce MFA for privileged roles.
- Add session expiration/refresh + device/session revocation.
- Remove temporary `ADMIN_AUTH_DISABLED` bypass in production.

## 3) Real Dynamics 365 Integration

- Implement actual Dataverse API connector (currently queue logic is simulated).
- Add retry/backoff + DLQ + replay tooling.
- Persist external IDs and sync correlation IDs.
- Add webhook/polling reconciliation loop for changed CRM entities.

## 4) Real sevdesk Integration

- Implement sevdesk API connector for contact/quote creation.
- Persist sevdesk identifiers and document states.
- Add guardrails so only commercially relevant records trigger sevdesk.

## 5) Workflow & Approval Model

- Implement explicit approval workflow states in DB:
  - content/campaign publish flow
  - commercial approval flow for sevdesk triggers
- Add actor-based action history and rollback/reopen flow for review items.

## 6) Security & Compliance

- Add request-level rate limiting and abuse protection to admin + forms.
- Implement secure secret management per environment.
- Add PII masking in logs and restricted field visibility by permission.
- Implement retention/deletion policy for personal data (DSGVO).

## 7) Observability & SRE

- Move from in-memory metrics/logs to centralized telemetry stack.
- Add SLOs + alerts for queue backlog, error rates, failed syncs.
- Add runbook links and operational dashboards for support team.

## 8) Testing Expansion

- Add integration tests for API route handlers with auth guards.
- Add end-to-end tests for admin workflows.
- Add contract tests for external connector mappings.

## 9) UX/Productization

- Replace JSON debug panels with task-oriented tables, filters and status badges.
- Add bulk actions for queue processing and review resolution.
- Add onboarding screens and setup wizard for environments.

## 10) Deployment Readiness

- Add environment-specific config validation at startup.
- Add backup/restore strategy for new persistence layer.
- Add rollout strategy (feature flags/canary) for integration connectors.
