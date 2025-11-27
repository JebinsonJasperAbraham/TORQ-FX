// @ts-check
import { defineConfig } from '@playwright/test'

export default defineConfig({
  // globalSetup: './global-setup.js', // ES6 syntax

  testDir: './tests/TORQ',
  fullyParallel: false,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  // retries: 1,
  workers: process.env.CI ? 1 : undefined,
  // workers: 1, // Run all tests serially

  reporter: 'html',
  // reporter: [
  //   ['list'],
  //   ['allure-playwright']
  // ],

  use: {

    baseURL: 'http://10.0.90.64/',
    headless: true,
    storageState: 'storageState.json', // use logged-in session for all tests
    trace: "on",
    screenshot: "only-on-failure",
    video: 'on',
  },

  globalSetup: './global-setup.js',   // ✅ tell Playwright to use your setup


  projects: [
    {
      name: 'chromium',
      use: {
        browserName: 'chromium',
        headless: false,
        viewport: null, // disables default viewport
        launchOptions: {
          args: ['--start-maximized'], // maximizes the window
        },
      },
    },


    // {
    //   name: 'firefox',
    //   use: {
    //     browserName: 'firefox',
    //     headless: false,
    //     viewport: { width: 1920, height: 1080 }, // manually maximize
    //   },
    // },
    // {
    //   name: 'webkit',
    //   use: {
    //     browserName: 'webkit',
    //     headless: false,
    //     viewport: { width: 1920, height: 1080 }, // manually maximize
    //   },
    // },
  ],
})



