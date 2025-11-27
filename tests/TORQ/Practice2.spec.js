import { test } from '@playwright/test';


async function login(page, username, password) {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.getByPlaceholder('Username').fill(username);
    await page.getByPlaceholder('Password').fill(password);
    await page.locator('[type="submit"]').click();
}

test('qwertyu', async ({ page }) => {
    const USERNAME = 'Admin', PASSWORD = 'admin123';
    await login(page, USERNAME, PASSWORD);

    await test.step('Going to PIM', async () => {
        await page.locator('//span[normalize-space()="PIM"]').click();
    });
    await test.step('ClickAddButton', async () => {
        await page.locator('//button[normalize-space()="Add"]').click();
    });

    test('', async ({ page }) => {
      
    });

    test('', async ({ page }) => {
      
    });



    // await page.getByPlaceholder('Username').fill('Admin');
    // await page.getByPlaceholder('Password').fill('admin123');
    // await page.locator('[type="submit"]').click();
    // await page.waitForTimeout(3000);
    // await page.locator('//span[normalize-space()="PIM"]').click();
    // await page.waitForTimeout(3000);

    // await page.goto('https://www.redbus.in/');
    // await page.locator('//div[contains(text(),"From")]').click();
    // await page.locator('//div[contains(@class, "srcDest")]//input').fill('tu', { delay: 100 });
    // await page.waitForTimeout(5000);
    // await page.waitForSelector('[class*="listHeader"]', { timeout: 5000 });

    // const optionHandles = await page.locator('[class*="listHeader"]').elementHandles();

    // for (const option of optionHandles) {
    //     const text = await option.innerText();
    //     console.log(`The city name is: + ${text}`);
    //     if (text === 'Tuni') {
    //         await option.click();
    //         break;
    //     }
    // }

    // await page.waitForTimeout(5000);
})




