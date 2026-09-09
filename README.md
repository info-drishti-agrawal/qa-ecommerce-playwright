# E-Commerce QA Automation — Playwright + JavaScript

A beginner-friendly QA portfolio project demonstrating manual test design and UI automation for the public SauceDemo demo application.

## What this project covers

- Functional testing
- Positive and negative test scenarios
- Login validation
- Product sorting
- Cart add/remove
- Checkout workflow
- Form validation
- Automated regression checks
- HTML test reporting
- Screenshots, video and trace on failures

## Tech Stack

- Playwright
- JavaScript
- Node.js
- Git / GitHub

## Demo Application

https://www.saucedemo.com/

This project uses the application's standard demo credentials:
- Username: `standard_user`
- Password: `secret_sauce`

## Run locally

```bash
npm install
npx playwright install
npm test
```

For a visible browser:

```bash
npm run test:headed
```

To open the HTML report:

```bash
npm run test:report
```

## Project Structure

```text
qa-ecommerce-playwright/
├── tests/
│   ├── login.spec.js
│   ├── cart-checkout.spec.js
│   └── product-filter.spec.js
├── test-cases.md
├── bug-report.md
├── playwright.config.js
├── package.json
└── README.md
```

## Resume Description

**E-Commerce QA Automation | Playwright, JavaScript**
- Designed and automated functional test cases for login, product, cart and checkout workflows.
- Implemented positive and negative test scenarios using Playwright.
- Added regression coverage with automated assertions and failure evidence.
