import { test, expect } from '@playwright/test';

test('Smoke - Home carrega corretamente', async ({ page }) => {
  await page.goto('https://automationteststore.com/');

  await expect(page).toHaveTitle('A place to practice your automation skills!');
});

