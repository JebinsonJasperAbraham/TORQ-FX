import { test } from '@playwright/test';

test('YouTube Sign In', async ({ page }) => {
    // await page.goto('https://youtube.com');
    // await page.getByRole('link', { name: 'Sign in' }).first().click();
    // await page.getByRole('textbox', { name: 'Email or phone' }).click();
    // await page.locator('[type="email"]').fill('jebinsonjasperabrahamj@gmail.com')
    // await page.locator('//span[normalize-space()="Next"]').click();
    // await page.locator('[type="password"]').fill('NewEraJebin@14')
    // await page.locator('//span[normalize-space()="Next"]').click();
    // await page.pause();

    test.use({ storageState: 'auth.json' });

    test('Logged in YouTube test', async ({ page }) => {
        await page.goto('https://youtube.com');
        // You should be logged in
          
    });

});
