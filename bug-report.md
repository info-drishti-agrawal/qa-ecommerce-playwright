# Sample Defect Report

## BUG-001 — Checkout validation should prevent incomplete customer data

**Module:** Checkout  
**Severity:** High  
**Priority:** High  
**Environment:** Chrome / Windows 10+  
**Status:** Demonstration report

### Steps to Reproduce
1. Open the SauceDemo application.
2. Log in with valid credentials.
3. Add any product to the cart.
4. Open the cart and select Checkout.
5. Leave First Name blank.
6. Click Continue.

### Expected Result
A clear validation message should be displayed and the user should remain on the information page.

### Actual Result
The application displays a validation error and prevents progression.

### Evidence
This project verifies the scenario automatically in `tests/cart-checkout.spec.js`.
