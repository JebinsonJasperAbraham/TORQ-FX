import { test } from '@playwright/test';
import { ACCOUNT_DATA_FOR_QA, LicensData } from '../../config/TestData.js';
import { ToastMessages } from '../../config/ValidationMessage.js';
import { AddAccount } from '../../pages/AddAccount.js';
import { License } from '../../pages/License.js';
import { LoginPage } from '../../pages/loginPage.js';
// test.setTimeout(50000);
test('Login_With_Support_Account_To_Create_Account_User_And_Node', async ({ page }) => {
    const license = new License(page);
    const loginPage = new LoginPage(page);
    const addaccount = new AddAccount(page);
    await loginPage.navigate();
    await loginPage.loginSuperAdmin();
    await addaccount.navigateToAccounts();
    await addaccount.createAccount(ACCOUNT_DATA_FOR_QA.accountName, ACCOUNT_DATA_FOR_QA.country);
    await addaccount.expectToastToContain(ToastMessages.ACCOUNT_CREATED);
    await addaccount.openAccount(ACCOUNT_DATA_FOR_QA.accountName);
    await addaccount.createUser(
        ACCOUNT_DATA_FOR_QA.username,
        ACCOUNT_DATA_FOR_QA.email,
        ACCOUNT_DATA_FOR_QA.password,
        ACCOUNT_DATA_FOR_QA.role,
        ACCOUNT_DATA_FOR_QA.cpassword,
        ACCOUNT_DATA_FOR_QA.mobilenumber,
        ACCOUNT_DATA_FOR_QA.clickButton
    );
    await addaccount.expectToastToContain(ToastMessages.USER_CREATED);
    await license.GoToNode(ACCOUNT_DATA_FOR_QA.NODENAME)
    await license.selectNodeCheckboxByLabelText(ACCOUNT_DATA_FOR_QA.labelTextPrimary);
    await license.selectNodeCheckboxByLabelText(ACCOUNT_DATA_FOR_QA.labelTextSecondary);
    await license.SaveNode();
    await license.expectToastToContain(ToastMessages.NODE_CREATE)
    await license.waitForOnline(loginPage);
    await loginPage.login();
    await license.navigateToLicense();
    await license.downlaodLicensekey();

});
test.setTimeout(50000);
test('LicenseSever_To_Create_TORQ_LIC', async ({ page }) => {
    const license = new License(page);
    await license.LicenseLogin(LicensData);
    await license.LicenseCredentials(LicensData);
});

test('Back_To_TORQ_With_Alice_Account', async ({ page }) => {
    const license = new License(page);
    const loginPage = new LoginPage(page);
    await loginPage.navigate();
    await loginPage.login();
    await license.navigateToLicense();
    await license.ApplyLicense()
    
});