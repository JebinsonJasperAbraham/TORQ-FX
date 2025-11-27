
export class Createnode {

    constructor(page) {
        this.page = page;

        this.NodeSideMenu = page.locator('//a[contains(@href,"#/settings")]/child::span');
        this.CreateNode = page.locator('//div[contains(@class,"btn-box d")]/child::button/i');
        this.NodeNameInputBox = page.locator('#addNodeName');
        this.AssignedToValues = page.locator('[class="form-check-label"]');
        this.CreateNodeBtn = page.locator('[class="btn btn-primary btn-sm"]');
        this.NodeStatus = page.locator('//span[contains(@class,"badge bg-success")]');

        // [class="form-check-input"]

    }
}