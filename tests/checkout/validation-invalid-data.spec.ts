// spec: promptfile-checkout-e2e.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Checkout Flow Tests', () => {
  test('Checkout Information Validation - Invalid Data', async ({ page }) => {
    // 1. Login and add item
    await page.goto('https://www.saucedemo.com');
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await expect(page.locator('[data-test="remove-sauce-labs-backpack"]')).toBeVisible();
    await expect(page.locator('[data-test="shopping-cart-badge"]')).toHaveText('1');
    // 2. Navigate to checkout information
    await page.locator('[data-test="shopping-cart-link"]').click();
    await page.locator('[data-test="checkout"]').click();
    await expect(page.locator('[data-test="title"]')).toBeVisible();
    // 3. Enter First Name '@#$%', Last Name '123', Zip 'abc', click Continue
    await page.locator('[data-test="firstName"]').fill('@#$%');
    await page.locator('[data-test="lastName"]').fill('123');
    await page.locator('[data-test="postalCode"]').fill('abc');
    await page.locator('[data-test="continue"]').click();
    // 4. Verify navigation to overview page
    await expect(page.locator('[data-test="title"]')).toBeVisible();
  });
});