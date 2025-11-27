import { expect, test } from '@playwright/test';

test('Check Title', async ({ page }) => {
    console.log("PIXFIX site")
    await page.goto('http://10.0.90.61/');

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle("Bhim Boy");
});
test('Login', async ({ page }) => {
    await page.goto('http://10.0.90.64/');
    await page.locator('[name="username"]').fill("support@riversilica.com");
    await page.locator('[name="password"]').fill("PixFlex@9999");
    await page.locator('[type="submit"]').click();
    const dash = await page.locator('//*[@id="root"]/div[1]/div[4]/div/div/div[2]/a[1]/span');
    await expect(dash).toBeVisible();
    // await page.locator("//span[normalize-space()='Node']").click();
    // const nodestatus =await page.locator("//span[normalize-space()='Online']").textContent()
    // await expect(page.locator("//span[normalize-space()='Online']")).toHaveText('Online');
    // expect(nodestatus).toBe('Online');

});

