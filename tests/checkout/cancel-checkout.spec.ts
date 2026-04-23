// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Checkout Flow Tests', () => {
  test('Cancel Checkout at Information Page', async ({ page }) => {
    // 1. Navigate to https://www.saucedemo.com
    await page.goto('https://www.saucedemo.com');

    // 2. Verify login form elements
    await expect(page.locator('[data-test="username"]')).toBeVisible();
    await expect(page.locator('[data-test="password"]')).toBeVisible();

    // 3. Enter username 'standard_user' and password 'secret_sauce', click Login
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();

    // 4. Verify product listings
    await expect(page.locator('[data-test="title"]')).toBeVisible();

    // 5. Click Add to Cart for Sauce Labs Backpack
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await expect(page.locator('[data-test="remove-sauce-labs-backpack"]')).toBeVisible();
    await expect(page.locator('[data-test="shopping-cart-link"]')).toBeVisible();

    // 6. Click cart badge to navigate to cart page
    await page.locator('[data-test="shopping-cart-link"]').click();
    await expect(page.locator('[data-test="title"]')).toBeVisible();
    await expect(page.locator('[data-test="item-4-title-link"]')).toBeVisible();

    // 7. Navigate to checkout information
    await page.locator('[data-test="checkout"]').click();
    // expect: On checkout info page
    await expect(page.locator('[data-test="title"]')).toBeVisible();
    // 8. Click Cancel button
    await page.locator('[data-test="cancel"]').click();
    // expect: Returned to cart page
    await expect(page.locator('[data-test="title"]')).toBeVisible();
    // 9. Verify cart still has items
    await expect(page.locator('[data-test="item-4-title-link"]')).toBeVisible();
  });
});