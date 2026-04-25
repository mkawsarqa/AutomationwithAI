# SauceDemo Checkout Test Plan

## Application Overview

Comprehensive test plan for the SauceDemo e-commerce checkout process, covering all acceptance criteria from user story 101. Tests include happy path, validation, error handling, and navigation flows.

## Test Scenarios

### 1. Checkout Flow Tests

**Seed:** `tests/seed.spec.ts`

#### 1.1. Complete Checkout Happy Path

**File:** `tests/checkout/happy-path.spec.ts`

**Steps:**
  1. Navigate to https://www.saucedemo.com
    - expect: Login page loads successfully
  2. Verify login form elements
    - expect: Username and password fields are present
  3. Enter username 'standard_user' and password 'secret_sauce', click Login
    - expect: Login successful, redirected to inventory page
  4. Verify product listings
    - expect: Inventory page displays products with Add to Cart buttons
  5. Click Add to Cart for Sauce Labs Backpack
    - expect: Item added to cart, button changes to Remove, cart badge shows 1
  6. Click cart badge to navigate to cart page
    - expect: Cart page displays item details, quantity, price, and total
  7. Click Checkout button
    - expect: Redirected to checkout information page with First Name, Last Name, Zip fields
  8. Click Continue without filling fields
    - expect: Error message 'First Name is required' appears
  9. Fill First Name 'John', Last Name 'Doe', Zip '12345', click Continue
    - expect: No error, redirected to checkout overview page
  10. Verify checkout overview details
    - expect: Overview shows item summary, payment info 'SauceCard #31337', shipping 'Free Pony Express Delivery!', item total $29.99, tax $2.40, total $32.39
  11. Click Finish button
    - expect: Redirected to order confirmation page with success message
  12. Verify order completion message
    - expect: Confirmation page shows 'Thank you for your order!' and 'Back Home' button

#### 1.2. Cart Review Functionality

**File:** `tests/checkout/cart-review.spec.ts`

**Steps:**
  1. Login with standard_user
    - expect: Login successful
  2. Add Sauce Labs Backpack to cart
    - expect: Item added to cart
  3. Navigate to cart page
    - expect: Cart shows item name, description, price $29.99, quantity 1
  4. Click Continue Shopping and verify navigation
    - expect: Continue Shopping button returns to inventory
  5. Return to cart, click Remove, verify cart empty
    - expect: Item removed from cart, cart empty

#### 1.3. Checkout Information Validation - Empty Fields

**File:** `tests/checkout/validation-empty-fields.spec.ts`

**Steps:**
  1. Login and add item
    - expect: Login and add item to cart
  2. Navigate to checkout information
    - expect: On checkout info page
  3. Leave all fields empty, click Continue
    - expect: Error 'First Name is required' appears
  4. Verify error message and fields highlighted
    - expect: Error persists
  5. Fill First Name, leave others empty, click Continue
    - expect: Error 'Last Name is required' appears
  6. Fill First and Last Name, leave Zip empty, click Continue
    - expect: Error 'Zip/Postal Code is required' appears

#### 1.4. Checkout Information Validation - Invalid Data

**File:** `tests/checkout/validation-invalid-data.spec.ts`

**Steps:**
  1. Navigate to checkout information
    - expect: On checkout info page
  2. Enter First Name '@#$%', Last Name '123', Zip 'abc', click Continue
    - expect: Fields accept special characters
  3. Verify navigation to overview page
    - expect: Proceeds to overview (no validation for special chars)

#### 1.5. Cancel Checkout at Information Page

**File:** `tests/checkout/cancel-checkout.spec.ts`

**Steps:**
  1. Navigate to checkout information
    - expect: On checkout info page
  2. Click Cancel button
    - expect: Returned to cart page
  3. Verify cart still has items
    - expect: Cart retains items

#### 1.6. Cancel Checkout at Overview Page

**File:** `tests/checkout/cancel-overview.spec.ts`

**Steps:**
  1. Fill valid info and proceed to overview
    - expect: On checkout overview page
  2. Click Cancel button
    - expect: Returned to inventory page
  3. Navigate to cart, verify items still there
    - expect: Cart retains items

#### 1.7. Navigation - Back Home After Order

**File:** `tests/checkout/navigation-back-home.spec.ts`

**Steps:**
  1. Complete full checkout process
    - expect: Complete order
  2. Click Back Home button
    - expect: Redirected to inventory page
  3. Check cart badge, should be empty
    - expect: Cart is cleared

#### 1.8. Attempt Checkout with Empty Cart

**File:** `tests/checkout/empty-cart-checkout.spec.ts`

**Steps:**
  1. Login with standard_user
    - expect: Login successful
  2. Ensure no items in cart
    - expect: Cart is empty
  3. Attempt to access checkout (may need to check if button is disabled)
    - expect: Checkout button not available or redirects appropriately

#### 1.9. Checkout with Multiple Items

**File:** `tests/checkout/multiple-items.spec.ts`

**Steps:**
  1. Add Sauce Labs Backpack and Sauce Labs Bike Light to cart
    - expect: Multiple items added
  2. Navigate to cart, verify details
    - expect: Cart shows both items with correct quantities and totals
  3. Proceed through checkout, verify overview
    - expect: Overview shows both items, correct subtotal, tax, total
  4. Finish order and verify confirmation
    - expect: Order completes successfully

#### 1.10. Edge Cases and Boundary Conditions

**File:** `tests/checkout/edge-case-boundary.spec.ts`

**Steps:**
  1. Enter very long first/last names (e.g. 100 characters), proceed
    - expect: Long names accepted
  2. Enter minimal zip '1', proceed
    - expect: Short zip codes accepted
  3. Enter numeric values in name fields, proceed
    - expect: Numeric names accepted
  4. Enter zip with letters and symbols, proceed
    - expect: Special chars in zip accepted
