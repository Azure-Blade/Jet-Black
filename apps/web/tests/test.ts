import { expect, test } from '@playwright/test'

test('Home page expected welcome h1', async ({ page }) => {
  await page.goto('/')
  expect(await page.textContent('h1')).toBe('Welcome to SvelteKit')
})
