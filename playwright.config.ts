import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';
import path from 'node:path';

dotenv.config({ path: path.resolve(__dirname, '.env') });

export default defineConfig({
  testDir: './tests',
  outputDir: './test-results',
  fullyParallel: true,
  forbidOnly: false,
  retries: 0,
  reporter: [['list'], ['html']],
  timeout: 30_000,
  expect: {
    timeout: 5_000,
  },
  use: {
    headless: false, 
    viewport: null, // Global viewport override
    actionTimeout: 10_000,
    navigationTimeout: 30_000,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'retain-on-failure',
    testIdAttribute: 'data-test',
    launchOptions: {
      args: ['--start-maximized'], // Tells Chromium to open maximized
    },
  },

  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        viewport: null,            // 1. Removes the default 1280x720 window constraint
        deviceScaleFactor: undefined, // 2. Fixes your error by removing device scale emulation
        hasTouch: undefined,       // 3. Clean fallback to native desktop interactions
      },
    },
  ],
});
