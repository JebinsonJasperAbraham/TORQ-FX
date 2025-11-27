// // global-setup.js
import { chromium } from '@playwright/test';

export default async function globalSetup(config) {
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    const IP = 'http://10.0.90.64/';

    await page.goto(IP);
    await page.fill('[name="username"]', 'alice1');
    await page.fill('[name="password"]', 'Pixfix@123');
    await page.click('[type="submit"]');
    // await expect(page).toHaveURL('http://10.0.90.64/#/dashboardMain');
    await page.waitForURL(`${IP}#/dashboardMain`);



    // Save the logged-in state
    await context.storageState({ path: 'storageState.json' });

    await browser.close();
}


