// tests/Pages/AddAccount.js
import { expect } from '@playwright/test';
export class AddAccount {
    constructor(page) {
        this.page = page;
        this.accountMenu = page.locator("//span[normalize-space()='Account']");
        this.accountsSubMenu = page.locator("//span[normalize-space()='Accounts']");
        this.addAccountBtn = page.locator("//button[normalize-space()='Add Account']");
        this.accountNameInput = page.locator('#validationCustom01');
        this.accountCountryInput = page.locator('#validationCustom02');
        this.createAccountBtn = page.locator("//button[normalize-space()='Create Account']");
        this.toastMessage = page.locator("//div[@role='alert']").nth(1);
        this.accountNameLabel = page.locator("//label[normalize-space()='Account Name']");
        this.countryLabel = page.locator("//label[normalize-space()='Country']");
        this.allaccountvalues = page.locator('//tbody/tr/td');
        this.accountNameInput = page.locator('#validationCustom01');
        this.saveaccount = page.locator("//button[normalize-space()='Save Account']");
        this.editvaluetwo = page.locator("#validationCustom02");
        this.addUser = page.locator("//button[normalize-space()='Add User']");
        this.userNamePlaceholder = page.locator("//input[@placeholder='User Name']");
        this.userEmailInput = page.locator("//input[@placeholder='User Email']");
        this.roleDropdown = page.locator("//select[@name='role']");
        this.passwordInput = page.locator("//input[@placeholder='Password']");
        this.confirmPasswordInput = page.locator("//input[@placeholder='Confirm Password']");
        this.createUserBtn = page.locator("//button[normalize-space()='Create User']");
        this.useraddinputbox = page.locator('[name="username"]');
        this.usernamerequiredfield = page.locator("//div[normalize-space()='Username is required']");
        this.emailrequiredfield = page.locator("//div[normalize-space()='Email is required']");
        this.rolerequiredfield = page.locator("//div[normalize-space()='Role is required']")
        this.passwordcharacterrequiredfield = page.locator("//div[normalize-space()='Password must be at least 8 characters, contain an uppercase letter, a lowercase letter, a number, and a special character']");
        this.confirmpasswordrequiredfield = page.locator('input[name="confirm_password"] + div.invalid-feedback')
        this.editaccount = 'xpath=//*[@class="fa-light fa-edit"]';
        this.closeicon = page.locator("//button[@aria-label='Close']")
        this.backicon = page.locator('//h5[normalize-space()="riversilica > Users"]')
        // this.backicon = page.locator("//i[@class='fa-light fa-arrow-left pe-3']")
        this.emailformatlabel = page.locator("//div[normalize-space()='Enter a valid email address']")
        this.mobilenumberformatlabel = page.locator("//div[normalize-space()='Mobile number must be 10 digits']")
        // this.emailformatlabel = page.locator("//div[normalize-space()='Invalid email format']")
        this.mobilenumber = page.locator('[placeholder="Mobile Number"]')
        this.passwordmustmatch = page.locator("//div[normalize-space()='Passwords must match']")
        this.addedusername = page.locator("//td[normalize-space()='TC20']")
        this.addedusername = page.locator("//td[normalize-space()='TC20']")
        this.closeiconuser = page.locator("//button[normalize-space()='Close']")
        this.edituserdetail = page.locator(".fa-light.fa-edit")
        this.changepassword = page.locator("//input[@name='changePassword']")
        this.oldpasswordplch = page.locator("//input[@placeholder='Old Password']")
        this.passwordverificationbtn = page.locator("//button[normalize-space()='Verify']")
        this.profileDropdown = page.locator('#profileDropdown');
        this.logoutLink = page.locator("//li//a[normalize-space()='Logout']");
        this.newPasswordInput = page.locator('[placeholder="New Password"]');
        this.confirmPasswordInput = page.locator('[placeholder="Confirm Password"]');
        this.saveUserBtn = page.locator("//button[normalize-space()='Save User']");
        this.deleteuserBtn = page.locator('.fa-light.fa-trash-can');
        this.confirdltBtn = page.locator('[class="btn btn-danger"]');
        this.userdltBtn = page.locator("//button[@class='btn btn-sm btn-icon btn-danger']");
        this.Accountusermenu = page.locator("//span[normalize-space()='Accounts']");
        this.auser = page.locator("//span[normalize-space()='Users']");
        this.goinsideaccount = page.locator('[class="text-start"]');

    }

    async navigateToAccounts() {
        await this.accountMenu.click();
        await this.accountsSubMenu.click();
        await this.accountsSubMenu.click();
        await this.addAccountBtn.click();


    }
    async openAccount(foraddingUser) {
        const openaccount = this.page.locator(`//td[@class='text-start'][normalize-space()='${foraddingUser}']`);
        await openaccount.click();
        await this.addUser.click();
    }
    accounticondynamic(value) {
        return this.page.locator(`//td[normalize-space()='${value}']`);
    }

    async createAccount(name, country) {
        await this.accountNameInput.fill(name);
        await this.accountCountryInput.fill(country);
        await this.createAccountBtn.click();
    }
    async createAccountNotSave(name, country) {
        await this.accountNameInput.fill(name);
        await this.accountCountryInput.fill(country);
    }

    async expectToastToContain(expectedMessage) {
        await expect.soft(this.toastMessage).toContainText(expectedMessage);
    }

    async verifyFormLabels() {
        await expect(this.accountNameLabel).toHaveText("Account Name");
        await expect(this.countryLabel).toHaveText("Country");
    }
    async verifyText(locator, expectedText) {
        await expect(locator).toHaveText(expectedText);
    }


    async expectValidationMessage(messageText) {
        const validationLocator = this.page.locator(`//div[normalize-space()='${messageText}']`);
        await expect(validationLocator).toBeVisible();
    }
    async verifyAddedAccountName(accountName) {
        const accName = this.page.locator(`//td[@class='text-start'][normalize-space()='${accountName}']`);

        await expect(accName).toBeVisible();
    }
    async clickAddAccount() {
        await expect(this.addAccountBtn).toBeEnabled();
        await this.addAccountBtn.click();
    }
    async saveAccount() {
        await expect(this.saveaccount).toBeEnabled();
        await this.saveaccount.click();
    }
    async editValueTwo(renameaccountname) {
        await this.editvaluetwo.fill(renameaccountname);
    }

    async verifyAccountDetailsExist(expectedValues) {
        // await this.page.waitForSelector(allaccountvalues, { timeout: 10000 });
        const tableTexts = await this.allaccountvalues.allTextContents();
        expect(tableTexts).toEqual(expect.arrayContaining(expectedValues));
        console.log(tableTexts);
    }



    async expectAccountNameInputNotVisible() {
        await expect(this.accountNameInput).not.toBeVisible();
    }

    async userN_Placeholder() {

        await expect(this.userNamePlaceholder).toBeEnabled();
    }
    async createUser(username, email, password, role = 'Admin', cpassword, mobilenumber, clickButton = true) {
        await this.useraddinputbox.fill(username);
        await this.userEmailInput.fill(email);
        await this.roleDropdown.selectOption(role);
        await expect(this.roleDropdown).toHaveValue(role.toLowerCase());
        await this.passwordInput.fill(password);
        await this.confirmPasswordInput.fill(cpassword);
        await this.mobilenumber.fill(mobilenumber);
        // await this.createUserBtn.click();
        if (clickButton) {
            await this.createUserBtn.click();
        }
    }

    async NameFieldValidations(messages) {
        if (messages.username !== undefined) {
            await expect(this.usernamerequiredfield).toHaveText(messages.username);
        }
        if (messages.email !== undefined) {
            await expect(this.emailrequiredfield).toHaveText(messages.email);
        }
        if (messages.password !== undefined) {
            await expect(this.passwordcharacterrequiredfield).toHaveText(messages.password);
        }
        if (messages.role !== undefined) {
            await expect(this.rolerequiredfield).toHaveText(messages.role);
        }
        if (messages.confirmPassword !== undefined) {
            await expect.soft(this.confirmpasswordrequiredfield).toHaveText(messages.confirmPassword);
        }
    }


    async clickaccountButton(rowText, buttonSelector) {
        const row = this.page.locator('tr', { has: this.page.locator('td', { hasText: rowText }) });
        await row.locator(buttonSelector).click();
        
    }
    async clickButtonInRow(rowText, buttonSelector) {
        const row = this.page.locator('tr', { has: this.page.locator('td', { hasText: rowText }) });
        await row.locator(buttonSelector).click();
    }
    async clickDeleteButtonInRow(rowTextdelete, buttonSelector) {
        const row = this.page.locator('tr', { has: this.page.locator('td', { hasText: rowTextdelete }) });
        await row.locator(buttonSelector).click();
    }
    async changepasswordAndVerify(oldpassword) {
        await this.changepassword.click();
        await expect(this.changepassword).toBeChecked();
        await this.oldpasswordplch.fill(oldpassword);
        await this.passwordverificationbtn.click();

    }
    async updatePassword(newPassword) {
        await this.newPasswordInput.waitFor();
        await this.newPasswordInput.fill(newPassword);
        await this.confirmPasswordInput.fill(newPassword);
        await this.saveUserBtn.click();
    }

    rowByNameAndEmail(name, email) {
        return this.page.locator(`//tr[td[1][normalize-space()='${name}'] and td[2][normalize-space()='${email}']]`);
    }


    async verifyAccountRow(accountName, country) {
        const rowLocator = this.page.locator(`//tr[td[text()='${accountName}'] and td[text()='${country}']]`);
        await expect(rowLocator).toBeVisible();
    }

    async navigateToLicense() {
        await this.accountMenu.click();
        await this.LicenseMenu.click();


    }


}
