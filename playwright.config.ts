import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  use: {
    headless: false,
    viewport: { width: 1000, height: 600 },
    ignoreHTTPSErrors: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
  retries: 0,
  reporter: [['list'], ['html', { outputFolder: 'playwright-report' }]],
}); 