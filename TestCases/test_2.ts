import { test, expect } from '@playwright/test';

test('test 2', async ({ page }) => {
  // Step 0: Navigate to google.com
  await page.goto('https://www.google.com');
  // Step 0: Fill the search box with 'friends'
  await page.getByRole('combobox', { name: 'Search' }).fill('friends');
  // Step 0: Open the browser
  await page.goto('about:blank');
  // Step 0: Press the Enter key
  await page.keyboard.press('Enter');
});
