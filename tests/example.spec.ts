import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.metsagroup.com/');
  await page.getByRole('button', { name: 'Accept All Cookies' }).click();
  await page.getByRole('button', { name: 'Business areas' }).click();
  await page.getByRole('link', { name: 'Metsä Forest Metsä Forest' }).click();
  await expect(page.locator('section').filter({ hasText: 'Become an owner-member Learn' }).locator('img')).toBeVisible();
});