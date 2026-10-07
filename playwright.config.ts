import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  outputDir: './test-results',

  fullyParallel: true,

  forbidOnly: true,

  retries: process.env.CI ? 2 : 0,

  reporter: [
    ['list'],
    ['html', {
      outputFolder: 'playwright-report',
      open: 'never'
    }]
  ],

  timeout: 30_000,

  expect: {
    timeout: 5_000
  },

  use: {
    headless: false,

    viewport: null,

    actionTimeout: 10_000,

    navigationTimeout: 30_000,

    screenshot: 'only-on-failure',

    video: 'retain-on-failure',

    trace: 'retain-on-failure',

    testIdAttribute: 'data-test',

    launchOptions: {
      args: ['--start-maximized']
    }
  },

  projects: [
    {
      name: 'chromium',

      use: {
        ...devices['Desktop Chrome'],
        viewport: null,
        deviceScaleFactor: undefined,
        hasTouch: undefined
      }
    }
  ]
});