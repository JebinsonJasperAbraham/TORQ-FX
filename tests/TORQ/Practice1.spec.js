import { test } from '@playwright/test';

test.setTimeout(120000);
test('TC_01_Click on add account', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/');
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');
    await page.locator('[type="submit"]').click();
    await page.waitForTimeout(3000);
    await page.locator('//span[normalize-space()="PIM"]').click();
    await page.waitForTimeout(3000);

    await page.locator('(//*[@class="oxd-select-text-input"])[3]').click();
    const dropdown = page.locator('[role="listbox"]');
    const expectedValue = 'Automaton Tester'; 

    const optionLocator = dropdown.locator('[role="option"]');

    const optionHandles = await optionLocator.elementHandles();

    for (const option of optionHandles) {
        const text = await option.innerText();
        if (text === expectedValue) {
            await option.click();
            break; 
        }
    }

    await page.waitForTimeout(10000);
});

