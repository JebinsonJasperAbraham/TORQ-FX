import { expect } from '@playwright/test';
import fs from 'fs';
import path from 'path';
import { LicenseDataTorq } from '../config/FilePath.js';
import { ACCOUNT_DATA_FOR_QA } from '../config/TestData.js';
import { ToastMessages } from '../config/ValidationMessage.js';
export class License {

    constructor(page) {
        this.page = page;
        this.UserName = page.locator('[name="username"]');
        this.password = page.locator('[type="password"]');
        this.Signbtn = page.locator("button[type='button']");
        this.Dashboardpage = page.locator("//h6[normalize-space()='dashboard']");
        // this.LicenseMenu = page.locator("//a[@href='#/license_list']/child::li/div");
        this.AddLicense = page.locator("//button[normalize-space()='Add License']");
        this.AddLicenseName = page.locator('[placeholder="Enter Your Name"]');
        this.ProductDropDown = page.locator("//div[@id='mui-component-select-product']");
        this.ProductVersion = page.locator('[name="version"]');
        this.LicenseType = page.locator("//div[@id='mui-component-select-type']");
        this.ChooseHidFile = page.locator('[name="file"]');
        this.Continue = page.locator("//div[@class='MuiBox-root css-nn0g1v']/following-sibling::button");
        this.JobCount = page.locator('[name="JOB_COUNT"]');
        this.SelectFrequency = page.locator("//div[@id='mui-component-select-frequency']");
        this.Method = page.locator('[placeholder="Enter Job"]');
        this.SelectTimezone = page.locator("//div[@id='mui-component-select-tz']");
        this.CountorySelect = page.locator("//li[normalize-space()='India']");
        this.GenerateLicense = page.locator("//button[normalize-space()='Gentrate']");
        this.DownloadLicense = page.locator("//button[normalize-space()='Download LICENSE']");
        // Navigate to TORQ license
        this.accountMenu = page.locator("//span[normalize-space()='Account']");
        this.LicenseMenuTorq = page.locator("//span[normalize-space()='License']");
        this.DownloadKey = page.locator('//button[@type="button"]/child::i');
        //Node page
        this.SideMenuNode = page.locator('//a[span[normalize-space(text())="Node"]]');
        this.CreateNodeBtn = page.locator('button[class="btn btn-sm btn-primary"]');
        this.NodeName = page.locator('#addNodeName');
        this.CreateNode = page.locator('button[class="btn btn-primary btn-sm"]');
        this.toastMessage = page.locator("//div[@role='alert']").nth(1);
        this.Nodeonlinestatus = page.locator('[class="badge bg-success"]');
        this.AddLicBtn = page.locator('i[class="fa-light fa-plus"]');
        this.LicenseName = page.locator('[name="license_name"]');
        this.CreateLicense = page.locator('[class="btn btn-primary"]');
        this.ActivateLicense = page.locator('[title="Activate License"]');
        this.ActiveStatus = page.locator('//span[@class="badge bg-success w-25"]');





    }

    async LicenseLogin(licensedata) {
        await this.page.goto('http://10.0.90.22:9900/#/authentication/sign-in')
        await this.UserName.fill(licensedata.username)
        await this.password.fill(licensedata.password)
        await this.Signbtn.click();
        await expect(this.Dashboardpage).toBeVisible();
    }

    async navigateToLicense() {
        await this.accountMenu.click();
        await this.LicenseMenuTorq.click();
    }
    async downlaodLicensekey() {
        const [download] = await Promise.all([
            this.page.waitForEvent('download'),
            this.DownloadKey.click(),
        ]);

        await download.saveAs(LicenseDataTorq.HIDdownloadpath);
        const fileExists = fs.existsSync(filePath);
        expect(fileExists).toBeTruthy();
        const stats = fs.statSync(filePath);
        expect(stats.size).toBeGreaterThan(0);
    }

    datavalue(value) {
        return this.page.locator(`[data-value="${value}"]`);

    }

    async LicenseCredentials(licensedata) {
        await this.LicenseMenuTorq.click();
        await this.AddLicense.waitFor();
        await this.AddLicense.click();
        await this.AddLicenseName.fill(licensedata.licensename)
        await this.ProductDropDown.click();
        await this.datavalue(licensedata.product).click();
        await this.ProductVersion.fill(licensedata.productversion)
        await this.LicenseType.click();
        await this.datavalue(licensedata.producttype).click();
        await this.ChooseHidFile.setInputFiles(LicenseDataTorq.HIDdownloadpath);
        await this.Continue.click();
        await this.JobCount.waitFor();
        await this.JobCount.fill(licensedata.jobcount);
        await this.SelectFrequency.click();
        await this.datavalue(licensedata.frequencytype).click();
        await this.Method.fill(licensedata.methodvalue);
        await this.SelectTimezone.click();
        await this.datavalue(licensedata.timezonecountry).click();
        await this.GenerateLicense.waitFor(10000);
        await expect(this.GenerateLicense).toBeVisible();
        await this.GenerateLicense.click();
        await this.DownloadLicense.waitFor(10000);
        await expect(this.DownloadLicense).toBeVisible();
        const [download] = await Promise.all([
            this.page.waitForEvent('download'),
            this.DownloadLicense.click()
        ]);

        await download.saveAs(LicenseDataTorq.HIDdownloadpath);
        await this.page.waitForTimeout(10000);
        const filePath = path.resolve(LicenseDataTorq.HIDdownloadpath);
        const fileExists = fs.existsSync(filePath);
        expect(fileExists).toBeTruthy();

    }


    async GoToNode(NODENAME) {
        await this.SideMenuNode.click()
        await this.CreateNodeBtn.click()
        await this.NodeName.fill(NODENAME)

    }
    async selectNodeCheckboxByLabelText(labelText) {
        const labelLocator = this.page.locator(`label.form-check-label:has-text("${labelText}")`);
        await expect(labelLocator).toBeVisible();
        if (!(await labelLocator.isChecked())) {
            await labelLocator.check();
        }

        await expect(labelLocator).toBeChecked();

    }


    async SaveNode() {
        await this.CreateNode.click();

    }

    async expectToastToContain(expectedMessage) {
        await expect.soft(this.toastMessage).toContainText(expectedMessage);
    }

    async waitForOnline(loginpage) {
        while (true) {
            const text = await this.Nodeonlinestatus.textContent();
            if (text && text.trim() === 'Online') {
                await loginpage.logout()
                break;
            }
            await this.page.waitForTimeout(2000);
        }
    }

    async ApplyLicense() {
        await this.AddLicBtn.click();
        const fileInput = this.page.locator('input[type="file"]');
        await fileInput.setInputFiles(LicenseDataTorq.LICUploadpath);
        await this.LicenseName.fill(ACCOUNT_DATA_FOR_QA.Licname);
        await this.CreateLicense.click();
        await this.ActivateLicense.click();
        await this.expectToastToContain(ToastMessages.LICENSE_CREATE)
        await this.ActiveStatus.waitFor();
        await expect(this.ActiveStatus).toHaveText(ACCOUNT_DATA_FOR_QA.activestatus, { timeout: 15000 });
    }

}


