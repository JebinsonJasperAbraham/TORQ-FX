import { expect } from '@playwright/test';
import { TestDataAlice, TestDataloginAdmin, TestDataloginUser, TestDatalogoutURL, TestDataSuperAdmin } from '../config/TestData';

export default class LoginPage {
    constructor(page) {
        this.page = page;
        this.usernameField = page.locator('[name="username"]');
        this.passwordField = page.locator('[name="password"]');
        this.submitButton = page.locator('[type="submit"]');
        this.profileDropdown = page.locator('#profileDropdown');
        this.logoutLink = page.locator("//li//a[normalize-space()='Logout']");
    }
    async navigate() {
        await this.page.goto(TestDataloginAdmin.AbaseURL);
    }
    async login() {
        await this.usernameField.fill(TestDataAlice.username);
        await this.passwordField.fill(TestDataAlice.password);
        await this.submitButton.click();
        await expect(this.page).toHaveURL(TestDataAlice.dashboardURL);
    }
    async loginSuperAdmin() {
        await this.usernameField.fill(TestDataSuperAdmin.Susername);
        await this.passwordField.fill(TestDataSuperAdmin.Spassword);
        await this.submitButton.click();
        await expect(this.page).toHaveURL(TestDataSuperAdmin.SdashboardURL);
    }
    async loginAdmin() {
        await this.usernameField.fill(TestDataloginAdmin.Ausername);
        await this.passwordField.fill(TestDataloginAdmin.Apassword);
        await this.submitButton.click();
        await expect(this.page).toHaveURL(TestDataloginAdmin.AdashboardURL);
    }
    async TestDataloginUser() {
        await this.usernameField.fill(TestDataloginUser.Uusername);
        await this.passwordField.fill(TestDataloginUser.Upassword);
        await this.submitButton.click();
        await expect(this.page).toHaveURL(TestDataloginUser.UdashboardURL);
    }

    async logout() {
        await this.profileDropdown.waitFor();
        await this.profileDropdown.click();
        await this.logoutLink.waitFor();
        await this.logoutLink.click();
        await expect(this.page).toHaveURL(TestDatalogoutURL.logoutdashboardURL);
    }

    async loginwithnewusers(uname, upassword, dashboardURL) {
        await this.usernameField.fill(uname);
        await this.passwordField.fill(upassword);
        await this.submitButton.click();
        await expect(this.page).toHaveURL(dashboardURL);
    }
}