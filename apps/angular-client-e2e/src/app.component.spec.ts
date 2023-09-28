import { expect, test } from '@playwright/test';

test('has router-outlet', async ({ page }) => {
  await page.goto('/');

  // Expect h1 to contain a substring.
  await expect(page.locator('router-outlet')).toHaveCount(1);
});
