import { test, expect } from '@playwright/test';

test('consent banner appears on first visit (no localStorage)', async ({ context, page }) => {
  await context.addInitScript(() => localStorage.clear());
  await page.goto('/');
  await expect(page.getByText(/Datenschutz & Cookies/i)).toBeVisible({ timeout: 8_000 });
});

test('consent banner is hidden when valid consent is already stored', async ({ context, page }) => {
  await context.addInitScript(() => {
    localStorage.setItem(
      'eeksolution_cookie_consent',
      JSON.stringify({
        necessary: true,
        analytics: false,
        marketing: false,
        externalMedia: false,
        version: '2',
        timestamp: new Date().toISOString(),
      }),
    );
  });
  await page.goto('/');
  await page.waitForTimeout(500);
  await expect(page.getByText(/Datenschutz & Cookies/i)).not.toBeVisible();
});

test('all four category labels are rendered in the banner', async ({ context, page }) => {
  await context.addInitScript(() => localStorage.clear());
  await page.goto('/');
  // Scope queries to the banner element to avoid matching homepage content
  const banner = page.locator('div').filter({ has: page.getByText('Datenschutz & Cookies') }).first();
  await banner.waitFor();
  await expect(banner.getByText('Notwendig')).toBeVisible();
  await expect(banner.getByText('Analyse', { exact: true })).toBeVisible();
  await expect(banner.getByText('Marketing', { exact: true })).toBeVisible();
  await expect(banner.getByText('Externe Medien')).toBeVisible();
});

test('"Alle akzeptieren" dismisses the banner and stores consent', async ({ context, page }) => {
  await context.addInitScript(() => localStorage.clear());
  await page.goto('/');
  await page.getByRole('button', { name: /Alle akzeptieren/i }).click();
  await expect(page.getByText(/Datenschutz & Cookies/i)).not.toBeVisible();

  const stored = await page.evaluate(() =>
    JSON.parse(localStorage.getItem('eeksolution_cookie_consent') ?? 'null'),
  );
  expect(stored.analytics).toBe(true);
  expect(stored.marketing).toBe(true);
  expect(stored.externalMedia).toBe(true);
  expect(stored.version).toBe('2');
});

test('"Auswahl speichern" with default choices saves analytics=false', async ({ context, page }) => {
  await context.addInitScript(() => localStorage.clear());
  await page.goto('/');
  await page.getByRole('button', { name: /Auswahl speichern/i }).click();
  await expect(page.getByText(/Datenschutz & Cookies/i)).not.toBeVisible();

  const stored = await page.evaluate(() =>
    JSON.parse(localStorage.getItem('eeksolution_cookie_consent') ?? 'null'),
  );
  expect(stored.analytics).toBe(false);
  expect(stored.necessary).toBe(true);
});

test('consent is logged to localStorage on save', async ({ context, page }) => {
  await context.addInitScript(() => localStorage.clear());
  await page.goto('/');
  await page.getByRole('button', { name: /Alle akzeptieren/i }).click();

  const log = await page.evaluate(() =>
    JSON.parse(localStorage.getItem('eeksolution_consent_log') ?? '[]'),
  );
  expect(log).toHaveLength(1);
  expect(log[0].action).toBe('accept-all');
});

test('consent re-prompts when stored consent has an old version', async ({ context, page }) => {
  await context.addInitScript(() => {
    localStorage.setItem(
      'eeksolution_cookie_consent',
      JSON.stringify({
        necessary: true,
        analytics: true,
        marketing: false,
        externalMedia: false,
        version: '1',
        timestamp: new Date().toISOString(),
      }),
    );
  });
  await page.goto('/');
  await expect(page.getByText(/Datenschutz & Cookies/i)).toBeVisible({ timeout: 8_000 });
});

test('"Cookie-Einstellungen" button in footer re-opens the banner', async ({ context, page }) => {
  await context.addInitScript(() => {
    localStorage.setItem(
      'eeksolution_cookie_consent',
      JSON.stringify({
        necessary: true,
        analytics: false,
        marketing: false,
        externalMedia: false,
        version: '2',
        timestamp: new Date().toISOString(),
      }),
    );
  });
  await page.goto('/');
  await expect(page.getByText(/Datenschutz & Cookies/i)).not.toBeVisible();

  await page.getByRole('button', { name: /Cookie-Einstellungen/i }).click();
  await expect(page.getByText(/Datenschutz & Cookies/i)).toBeVisible({ timeout: 5_000 });
});
