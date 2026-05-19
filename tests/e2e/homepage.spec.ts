import { test, expect } from '@playwright/test';

test('homepage has expected title', async ({ page, baseURL }) => {
  await page.goto(baseURL || 'http://localhost:3000');
  await expect(page).toHaveTitle(/Pok/i);
});
