import { test, expect } from '@playwright/test';

test('homepage has expected title', async ({ page, baseURL }) => {
  await page.goto(baseURL || 'http://localhost:3000');
  await expect(page).toHaveTitle(/Pok/i);
});

test('opens pokemon details from card click', async ({ page, baseURL }) => {
  await page.goto(`${baseURL || 'http://localhost:3000'}/pokemons`);

  await page.getByRole('link', { name: /abrir detalhes de bulbasaur/i }).click();

  await expect(page).toHaveURL(/\/pokemons\/1$/);
  await expect(page.getByRole('heading', { name: /bulbasaur/i })).toBeVisible();
});
