# Playwright POM Framework

A TypeScript end-to-end testing starter built with Playwright Test and the Page Object Model.

## Prerequisites

- Node.js 18 or newer
- npm

## Setup

```bash
npm install
npx playwright install
copy .env.example .env
```

On macOS or Linux, use `cp .env.example .env` instead of `copy`.

## Commands

```bash
npm test                 # Run all browser projects
npm run test:smoke       # Run the sample login tests in Chromium
npm run test:headed      # Run tests with a visible browser
npm run test:ui          # Open Playwright UI mode
npm run test:debug       # Run with the Playwright inspector
npm run typecheck        # Validate TypeScript
npm run report           # Open the latest HTML report
```

The sample tests target Sauce Demo by default. Set `BASE_URL` in `.env` to point the framework at another application. The sample credentials can also be overridden with `STANDARD_USER` and `STANDARD_PASSWORD`.

## Structure

```text
pages/                 Page Object Model classes and locators
fixtures/              Typed Playwright fixtures shared by tests
tests/                 Test specifications
utils/                 Test data and reusable helpers
playwright.config.ts   Browser projects, timeouts, artifacts, and base URL
```

## Adding a page object

1. Create a class in `pages/` that receives Playwright's `Page` in its constructor.
2. Keep locators and user actions in that class.
3. Add the page object to `AppFixtures` and `test` in `fixtures/test.fixture.ts`.
4. Import `test` from the fixture file in new specs.

Example:

```ts
import { test } from '../fixtures/test.fixture';

test('user can complete a workflow', async ({ inventoryPage }) => {
  await inventoryPage.expectLoaded();
});
```

## CI behavior

When `CI=true`, retries are enabled, workers are limited to one, `test.only` is forbidden, and the HTML report is generated without opening automatically. Failure screenshots, videos, and traces are retained in `test-results/`.
