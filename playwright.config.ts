import { defineConfig } from '@playwright/test';
import 'dotenv/config';

export default defineConfig({
  testDir: './tests', // pasta onde estão os testes
  timeout: 30000,     // timeout padrão para cada teste
  expect: {
    timeout: 5000,    // timeout para assertivas
  },
  use: {
    baseURL: 'https://automationteststore.com', // URL base
    headless: false,        // run com interface
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on-first-retry',
  },
  reporter: [['html']], // relatório em HTML
});
