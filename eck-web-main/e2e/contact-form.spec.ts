import { test, expect } from '@playwright/test';

const VALID_CONSENT = JSON.stringify({
  necessary: true,
  analytics: false,
  marketing: false,
  externalMedia: false,
  version: '2',
  timestamp: new Date().toISOString(),
});

// Pre-store consent so the banner never blocks form interactions
test.beforeEach(async ({ context }) => {
  await context.addInitScript((consent) => {
    localStorage.setItem('eeksolution_cookie_consent', consent);
  }, VALID_CONSENT);
});

test('contact form fields are all present', async ({ page }) => {
  await page.goto('/kontakt');
  await expect(page.getByLabel('Name', { exact: true })).toBeVisible();
  await expect(page.getByLabel('E-Mail', { exact: true })).toBeVisible();
  await expect(page.getByLabel('Unternehmen', { exact: true })).toBeVisible();
  await expect(page.getByLabel('Mitarbeiteranzahl', { exact: true })).toBeVisible();
  await expect(page.getByLabel('Ihr Anliegen', { exact: true })).toBeVisible();
  await expect(
    page.getByRole('button', { name: /Kostenlose IT-Einschätzung/i }),
  ).toBeVisible();
});

test('honeypot field is not visible to the user', async ({ page }) => {
  await page.goto('/kontakt');
  const honeypot = page.locator('input[name="_gotcha"]');
  await expect(honeypot).toHaveCount(1);
  await expect(honeypot).toBeHidden();
});

test('submit shows success screen when API returns ok', async ({ page }) => {
  await page.route('/api/contact', (route) =>
    route.fulfill({ status: 200, contentType: 'application/json', body: '{"ok":true}' }),
  );

  await page.goto('/kontakt');
  await page.getByLabel('Name', { exact: true }).fill('Max Mustermann');
  await page.getByLabel('E-Mail', { exact: true }).fill('max@beispiel.de');
  await page.getByLabel('Ihr Anliegen', { exact: true }).fill('Eine ausführliche Beschreibung des Anliegens.');
  await page.getByRole('button', { name: /Kostenlose IT-Einschätzung/i }).click();

  await expect(page.getByText(/Anfrage gesendet/i)).toBeVisible({ timeout: 8_000 });
});

test('submit shows error message when API returns an error', async ({ page }) => {
  await page.route('/api/contact', (route) =>
    route.fulfill({
      status: 500,
      contentType: 'application/json',
      body: '{"error":"Versandfehler. Bitte versuchen Sie es erneut."}',
    }),
  );

  await page.goto('/kontakt');
  await page.getByLabel('Name', { exact: true }).fill('Max Mustermann');
  await page.getByLabel('E-Mail', { exact: true }).fill('max@beispiel.de');
  await page.getByLabel('Ihr Anliegen', { exact: true }).fill('Eine ausführliche Beschreibung des Anliegens.');
  await page.getByRole('button', { name: /Kostenlose IT-Einschätzung/i }).click();

  await expect(page.getByText(/Versandfehler/i)).toBeVisible({ timeout: 8_000 });
});

test('submit is blocked by HTML5 validation when required fields are empty', async ({ page }) => {
  await page.goto('/kontakt');
  await page.getByRole('button', { name: /Kostenlose IT-Einschätzung/i }).click();
  // Success/error state must not appear — the browser blocks submission via required validation
  await expect(page.getByText(/Anfrage gesendet/i)).not.toBeVisible();
  await expect(page.getByLabel('Name', { exact: true })).toBeVisible();
});

test('"Weitere Nachricht senden" resets the form', async ({ page }) => {
  await page.route('/api/contact', (route) =>
    route.fulfill({ status: 200, contentType: 'application/json', body: '{"ok":true}' }),
  );

  await page.goto('/kontakt');
  await page.getByLabel('Name', { exact: true }).fill('Max Mustermann');
  await page.getByLabel('E-Mail', { exact: true }).fill('max@beispiel.de');
  await page.getByLabel('Ihr Anliegen', { exact: true }).fill('Detaillierte Beschreibung des IT-Problems.');
  await page.getByRole('button', { name: /Kostenlose IT-Einschätzung/i }).click();

  await page.getByText(/Weitere Nachricht senden/i).click();
  await expect(page.getByLabel('Name', { exact: true })).toBeVisible();
});
