# Ecksolution-IT Website

Professionelle Unternehmenswebsite von Ecksolution-IT auf Basis von **Next.js App Router** und **Tailwind CSS**.

Die Seite fokussiert auf den **IT-Check** als primären Einstieg für Geschäftsführer, IT-Leitung und Projektverantwortliche. Zusätzlich enthält das Projekt einen geschützten Admin-Bereich für Operations- und Analytics-Übersichten.

## Tech Stack

- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS
- Vitest + Testing Library
- Playwright (E2E)

## Projektbereiche

- `app/` – Seiten, Layouts, API-Routen (App Router)
- `components/` – wiederverwendbare UI- und Inhaltskomponenten
- `lib/` – Geschäftslogik, Datenmodelle, SEO/JSON-LD Utilities
- `__tests__/` – Unit- und Komponenten-Tests
- `e2e/` – End-to-End-Tests

## Kernfunktionen

- IT-Check Landing Page mit klarer Entscheidungsführung
- Solutions-, Blog- und Case-Study-Seiten
- Kontaktformular + API-Endpunkte
- Admin-Bereich für Dashboard, Integrationen, Reconciliation und Besucherstatistik
- SEO-Bausteine (Metadata, Sitemap, Robots, JSON-LD)

## Lokale Entwicklung

### Voraussetzungen

- Node.js 20+
- npm

### Setup

```bash
npm install
```

### Development-Server starten

```bash
npm run dev
```

Anschließend öffnen: `http://localhost:3000`

## Wichtige Befehle

### TypeScript prüfen

```bash
npm run typecheck
```

### Linting

```bash
npm run lint
```

### Unit-/Komponententests

```bash
npm run test
```

### E2E-Tests

```bash
npm run test:e2e
```

### Produktionsbuild

```bash
npm run build
npm run start
```

## Hinweis zu Analytics/Admin

Der Admin-Bereich (`/admin/*`) ist geschützt. Analytics- und Operations-Funktionen werden über API-Routen im Projekt bereitgestellt und sind für den internen Betrieb gedacht.
