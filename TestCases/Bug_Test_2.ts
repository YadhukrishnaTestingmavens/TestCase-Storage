import { test, expect } from '@playwright/test';

test('Bug Test 2 ', async ({ page }) => {
  // Step 0: Open the Search option from the header
  // Step 0: Open the first product from the search results
  // Step 0: Fill the search input field with 'chain'
  // Step 0: Navigate to  https://www.davidyurman.com
  await page.goto('https://www.davidyurman.com');
await page.getByRole('button', { name: 'Accept All' }).click();
  // Step 0: Fill the search input field with 'Ring'
  await page.getByRole('textbox', { name: 'Enter Keyword or Item No.' }).fill('Ring');
  // Step 0: Click the Search button
  // Step 0: Select any size from the available size options
  // Step 0: Open the first product from the search results
  // Step 0: Add the selected ring to the shopping bag
  // Step 0: Select any size from the available size options
  // Step 0: Click the Search button
  // Step 0: Close the modal pop up
  await page.getByRole('button', { name: 'Close' }).click();
  // Step 0: Click the Search icon
  await page.getByRole('button', { name: 'Search icon Search' }).click();
});
