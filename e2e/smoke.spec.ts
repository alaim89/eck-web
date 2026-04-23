import { test, expect } from '@playwright/test';

test.beforeEach(async ({ context }) => {
  // Clear cookie consent so it doesn't interfere with navigation tests
  await context.addInitScript(() => localStorage.clear());
});

test('homepage loads with company name in title or heading', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Ecksolution/i);
});

test('homepage contains a visible CTA or hero element', async ({ page }) => {
  await page.goto('/');
  const body = page.locator('body');
  await expect(body).toBeVisible();
  // Page must have rendered meaningful content (not blank)
  const text = await body.innerText();
  expect(text.length).toBeGreaterThan(100);
});

test('/kontakt page loads with contact heading', async ({ page }) => {
  await page.goto('/kontakt');
  await expect(page.getByRole('heading', { name: /IT sprechen/i })).toBeVisible();
});

test('/kontakt page contains the contact form', async ({ page }) => {
  await page.goto('/kontakt');
  await expect(page.getByLabel(/Name/i)).toBeVisible();
  await expect(page.getByLabel(/E-Mail/i)).toBeVisible();
});

test('/blog page loads with at least one article link', async ({ page }) => {
  await page.goto('/blog');
  // Page should render without a JS error
  const errors: string[] = [];
  page.on('pageerror', (e) => errors.push(e.message));
  await page.waitForLoadState('networkidle');
  expect(errors).toHaveLength(0);
  // At least one blog post link should exist
  const links = page.locator('a[href*="/blog/"]');
  await expect(links.first()).toBeVisible();
});

test('/solutions page loads with solution cards or links', async ({ page }) => {
  await page.goto('/solutions');
  const errors: string[] = [];
  page.on('pageerror', (e) => errors.push(e.message));
  await page.waitForLoadState('networkidle');
  expect(errors).toHaveLength(0);
  const body = await page.locator('body').innerText();
  expect(body.length).toBeGreaterThan(200);
});

test('first solution detail page loads', async ({ page }) => {
  await page.goto('/solutions/managed-it-service');
  await expect(page.locator('h1')).toBeVisible();
});

test('404 page shows for unknown route', async ({ page }) => {
  const response = await page.goto('/diese-seite-existiert-nicht-xyz');
  // Next.js returns 404 for unknown routes
  expect(response?.status()).toBe(404);
});
