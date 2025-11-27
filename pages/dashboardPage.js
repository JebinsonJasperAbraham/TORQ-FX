export class DashboardPage {
    constructor(page) {
        this.page = page;
        this.fileManagerLink = page.locator("//span[normalize-space()='File Manager']");
    }

    async navigateToFileManager() {
        await this.fileManagerLink.click();
    }
}



