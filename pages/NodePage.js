import { expect } from "@playwright/test";
export class NodePage {
    constructor(page) {
        this.page = page;

        this.NodeMenu = page.locator('//span[normalize-space()="Node"]');
        this.SoftwareSubMenu = page.locator('//p[normalize-space()="Software"]');
        this.LogsSoftwareSetting = page.locator('//span[normalize-space()="Logs"]');
        this.LogTypeDropDown = page.locator('//select[contains(@name,"logType")]');
        this.LogTypeDropDown = page.locator('//select[contains(@name,"logType")]');
        this.streamStatus = page.locator('//div[@style="white-space: nowrap;"]');


    }


    async GotoNodeLogs(logtype) {
        await expect(this.NodeMenu).toBeEnabled()
        await this.NodeMenu.click()
        await expect(this.SoftwareSubMenu).toBeEnabled()
        await this.SoftwareSubMenu.click()
        await expect(this.LogsSoftwareSetting).toBeEnabled()
        await this.LogsSoftwareSetting.click()
        await this.LogTypeDropDown.selectOption(logtype)
        await expect(this.LogTypeDropDown).toHaveValue(logtype);
        await this.page.waitForTimeout(15000);

    }


    async verifyKeywordInFirstN(keyword, limit = 10) {
        const total = await this.streamStatus.count();
        const maxCheck = Math.min(total, limit);

        let found = false;

        for (let i = 0; i < maxCheck; i++) {
            const text = await this.streamStatus.nth(i).innerText();
            console.log(`Line ${i + 1}: ${text}`);
            if (text.includes(keyword)) {
                found = true;
                console.log(`✅ Found "${keyword}" in line ${i + 1}`);
                break; // stop at first match
            }
        }

        await expect(found).toBeTruthy(); // fail if not found in first N lines
    }
}