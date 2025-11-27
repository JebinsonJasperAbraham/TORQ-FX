import { expect, test } from '@playwright/test';
import { AccountTestData } from '../../config/TestData.js';
import { ToastMessages, ValidationMessages } from '../../config/ValidationMessage.js';
import { AddAccount } from '../../pages/AddAccount.js';
import { FileManagerPage } from '../../pages/fileManagerPage.js';
import { License } from '../../pages/License.js';
import LoginPage from '../../pages/loginPage.js';

test.setTimeout(50000);
let loginPage;
let addAccount;
let filemanager;
let license;
test.describe('Login with Superadmin', () => {
    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        addAccount = new AddAccount(page);
        filemanager = new FileManagerPage(page);
        await loginPage.navigate();
        await loginPage.loginSuperAdmin();
    });

    test('TC01_Click on add account', async ({ page }) => {
        await addAccount.navigateToAccounts();
        await addAccount.verifyFormLabels();
    });

    test('TC02_Add account by giving only account name', async ({ page }) => {
        const data = AccountTestData.TC02;
        await addAccount.navigateToAccounts();
        await addAccount.createAccount(data.accountName, "");
        await addAccount.expectValidationMessage(ValidationMessages.COUNTRY_REQUIRED);
    });

    test('TC03_Add account by giving only address', async ({ page }) => {
        const data = AccountTestData.TC03;
        await addAccount.navigateToAccounts();
        await addAccount.createAccount("", data.accountName);
        await addAccount.expectValidationMessage(ValidationMessages.NAME_REQUIRED);
    });

    test('TC04_Add account with already existing account name', async ({ page }) => {
        const data = AccountTestData.TC04;
        await addAccount.navigateToAccounts();
        await addAccount.createAccount(data.accountName, data.accountName);
        await addAccount.expectToastToContain(ToastMessages.ACCOUNT_CREATED);
        await addAccount.verifyAddedAccountName(data.accountName)
        await addAccount.clickAddAccount();
        await addAccount.createAccount(data.accountName, data.accountName);
        await addAccount.expectToastToContain(ToastMessages.DUPLICATE_ACCOUNT);
    });

    test('TC05_Create Account by giving Account Name and Address', async ({ page }) => {
        const data = AccountTestData.TC05;
        await addAccount.navigateToAccounts();
        await addAccount.createAccount(data.accountName, data.accountName);
        await addAccount.expectToastToContain(ToastMessages.ACCOUNT_CREATED);
        await addAccount.verifyAddedAccountName(data.accountName)
    });

    test('TC06_View the account details', async ({ page }) => {
        const data = AccountTestData.TC06;
        await addAccount.navigateToAccounts();
        await addAccount.createAccount(data.accountName, data.accountCountry);
        await addAccount.expectToastToContain(ToastMessages.ACCOUNT_CREATED);
        await addAccount.verifyAddedAccountName(data.accountName);
        await addAccount.verifyAccountDetailsExist(data.expectedValues)
    });

    test('TC07_Edit the account name', async ({ page }) => {
        const data = AccountTestData.TC07;
        await addAccount.navigateToAccounts();
        await addAccount.createAccount(data.accountName, data.accountName);
        await addAccount.expectToastToContain(ToastMessages.ACCOUNT_CREATED);
        await addAccount.verifyAddedAccountName(data.accountName);
        await addAccount.clickButtonInRow(data.accountName, addAccount.editaccount);
        await addAccount.expectAccountNameInputNotVisible();
    });

    test('TC08_Add new account with special characters', async ({ page }) => {
        const data = AccountTestData.TC08;
        await addAccount.navigateToAccounts();
        await addAccount.createAccount(data.accountName, data.accountName);
        await addAccount.expectToastToContain(ToastMessages.ALPHANUMERICVALIDATION);
    });

    test('TC09_change address and try to update the account', async ({ page }) => {
        const data = AccountTestData.TC09;
        await addAccount.navigateToAccounts();
        await addAccount.createAccount(data.accountName, data.accountName);
        await addAccount.expectToastToContain(ToastMessages.ACCOUNT_CREATED);
        await addAccount.clickButtonInRow(data.accountName, addAccount.editaccount);
        await addAccount.editValueTwo(data.renameAccountName);
        await addAccount.saveAccount();
        await addAccount.expectToastToContain(ToastMessages.ACCOUNT_EDITED);
    });

    test('TC10_Cancel the account creation after giving the account name and address', async ({ page }) => {
        const data = AccountTestData.TC10;
        await addAccount.navigateToAccounts();
        await addAccount.createAccountNotSave(data.accountName, data.accountName);
        await addAccount.closeicon.click();
        await addAccount.expectAccountNameInputNotVisible();
    });

    test('TC11_Click on Add User', async ({ page }) => {
        const data = AccountTestData.TC11;
        await addAccount.navigateToAccounts();
        await addAccount.createAccount(data.accountName, data.accountName);
        await addAccount.expectToastToContain(ToastMessages.ACCOUNT_CREATED);
        await addAccount.verifyAddedAccountName(data.accountName);
        await addAccount.openAccount(data.accountName);
        await addAccount.userN_Placeholder();
    });

    test('TC12_Add user with already existing username', async ({ page }) => {
        const data = AccountTestData.TC12;
        await addAccount.navigateToAccounts();
        await addAccount.createAccount(data.accountName, data.accountName);
        await addAccount.expectToastToContain(ToastMessages.ACCOUNT_CREATED);
        await addAccount.verifyAddedAccountName(data.accountName);
        await addAccount.openAccount(data.accountName);
        await addAccount.createUser(data.accountName, data.email, data.password, data.role, data.confirmPassword, '');
        await addAccount.expectToastToContain(ToastMessages.USER_CREATED)
        await addAccount.backicon.click();
        await addAccount.openAccount(data.accountName);
        await addAccount.createUser(data.accountName, data.email, data.password, data.role, data.confirmPassword, '');
        await addAccount.expectToastToContain(ToastMessages.DUPLICATE_USER);
    });

    test('TC13_Click create user leaving the fields empty', async ({ page }) => {
        const data = AccountTestData.TC13;
        await addAccount.navigateToAccounts();
        await addAccount.createAccount(data.accountName, data.accountName);
        await addAccount.expectToastToContain(ToastMessages.ACCOUNT_CREATED);
        await addAccount.verifyAddedAccountName(data.accountName);
        await addAccount.openAccount(data.accountName);
        await addAccount.createUserBtn.click();
        await addAccount.NameFieldValidations({
            username: ValidationMessages.USERNAME_REQUIRED,
            email: ValidationMessages.EMAIL_REQUIRED,
            // password: ValidationMessages.PASSWORD_CHARACTERS,
            role: ValidationMessages.ROLE_REQUIRED,
            // confirmPassword: ValidationMessages.CONFIRMPASSWORD_REQUIRED,
        });
    });

    test('TC14_Add user by giving only username or email or role or password and confirm password', async ({ page }) => {
        const data = AccountTestData.TC14;
        await addAccount.navigateToAccounts();
        await addAccount.createAccount(data.accountName, data.accountName);
        await addAccount.expectToastToContain(ToastMessages.ACCOUNT_CREATED);
        await addAccount.verifyAddedAccountName(data.accountName)
        await addAccount.openAccount(data.accountName);

        await addAccount.createUser(data.accountName, '', '', '', '', '');
        await addAccount.createUserBtn.click();
        await addAccount.NameFieldValidations({
            username: undefined,
            email: ValidationMessages.EMAIL_REQUIRED,
            // password: ValidationMessages.PASSWORD_CHARACTERS,
            role: ValidationMessages.ROLE_REQUIRED,
            // confirmPassword: ValidationMessages.CONFIRMPASSWORD_REQUIRED,
        });

        await addAccount.userNamePlaceholder.clear();
        await addAccount.createUser('', data.email, '', '', '', '');
        await addAccount.NameFieldValidations({
            username: ValidationMessages.USERNAME_REQUIRED,
            email: undefined,
            // password: ValidationMessages.PASSWORD_CHARACTERS,
            role: ValidationMessages.ROLE_REQUIRED,
            // confirmPassword: ValidationMessages.CONFIRMPASSWORD_REQUIRED,
        });

        await addAccount.userEmailInput.clear();
        await addAccount.createUser('', '', '', data.role, '', '');
        await addAccount.NameFieldValidations({
            username: ValidationMessages.USERNAME_REQUIRED,
            email: ValidationMessages.EMAIL_REQUIRED,
            role: undefined,
            // password: ValidationMessages.PASSWORD_CHARACTERS,
            // confirmPassword: ValidationMessages.CONFIRMPASSWORD_REQUIRED,
        });

        await addAccount.roleDropdown.selectOption(data.emptyRole);
        await addAccount.createUser('', '', data.password, '', '', '');
        await addAccount.NameFieldValidations({
            username: ValidationMessages.USERNAME_REQUIRED,
            email: ValidationMessages.EMAIL_REQUIRED,
            role: ValidationMessages.ROLE_REQUIRED,
            password: undefined,
            // confirmPassword: ValidationMessages.CONFIRMPASSWORD_REQUIRED,
        });

        await addAccount.passwordInput.clear();
        await addAccount.createUser('', '', '', '', data.password, '');
        await addAccount.NameFieldValidations({
            username: ValidationMessages.USERNAME_REQUIRED,
            email: ValidationMessages.EMAIL_REQUIRED,
            // password: ValidationMessages.PASSWORD_CHARACTERS,
            role: ValidationMessages.ROLE_REQUIRED,
            confirmPassword: undefined,
        });
    });

    test('TC15_Give special characters for username', async ({ page }) => {
        const data = AccountTestData.TC15;
        await addAccount.navigateToAccounts();
        await addAccount.createAccount(data.accountName, data.accountName);
        await addAccount.expectToastToContain(ToastMessages.ACCOUNT_CREATED);
        await addAccount.verifyAddedAccountName(data.accountName)
        await addAccount.openAccount(data.accountName);
        await addAccount.createUser(data.userName, data.email, data.password, data.role, data.confirmPassword, '');
        await addAccount.expectToastToContain(ToastMessages.ALPHANUMERICVALIDATIONUSER);
    });

    test('TC16_Give invalid email format for email id', async ({ page }) => {
        const data = AccountTestData.TC16;
        await addAccount.navigateToAccounts();
        await addAccount.createAccount(data.accountName, data.accountName);
        await addAccount.expectToastToContain(ToastMessages.ACCOUNT_CREATED);
        await addAccount.verifyAddedAccountName(data.accountName)
        await addAccount.openAccount(data.accountName);
        await addAccount.createUser(data.accountName, data.email, data.password, data.role, data.confirmPassword, '');
        await addAccount.verifyText(addAccount.emailformatlabel, ValidationMessages.INVALID_EMAIL_FORMAT);
    });

    test('TC17_Enter alphanumeric values or above 10 digits mobile number', async ({ page }) => {
        const data = AccountTestData.TC17;
        await addAccount.navigateToAccounts();
        await addAccount.createAccount(data.accountName, data.accountName);
        await addAccount.expectToastToContain(ToastMessages.ACCOUNT_CREATED);
        await addAccount.verifyAddedAccountName(data.accountName)
        await addAccount.openAccount(data.accountName);
        await addAccount.createUser(data.accountName, data.email, data.password, data.role, data.mobileNumber, data.confirmPassword);
        await addAccount.verifyText(addAccount.mobilenumberformatlabel, ValidationMessages.INVALID_MOBILE_NUMBER);
    });

    test('TC18_Enter password and confirm password different', async ({ page }) => {
        const data = AccountTestData.TC18;
        await addAccount.navigateToAccounts();
        await addAccount.createAccount(data.accountName, data.accountName);
        await addAccount.expectToastToContain(ToastMessages.ACCOUNT_CREATED);
        await addAccount.verifyAddedAccountName(data.accountName)
        await addAccount.openAccount(data.accountName);
        await addAccount.createUser(data.accountName, data.email, data.password, data.role, data.confirmPassword, '');
        await addAccount.verifyText(addAccount.passwordmustmatch, ValidationMessages.PASSWORD_MUST_MATCH);
    });

    test('TC19_Create User by giving proper username, email ,role, password and confirm password', async ({ page }) => {
        const data = AccountTestData.TC19;
        await addAccount.navigateToAccounts();
        await addAccount.createAccount(data.accountName, data.accountName);
        await addAccount.expectToastToContain(ToastMessages.ACCOUNT_CREATED);
        await addAccount.verifyAddedAccountName(data.accountName)
        await addAccount.openAccount(data.accountName);
        await addAccount.createUser(data.accountName, data.email, data.password, data.role, data.confirmPassword, '');
        await addAccount.expectToastToContain(ToastMessages.USER_CREATED)
    });

    test('TC20_View the user details', async ({ page }) => {
        const data = AccountTestData.TC20;
        await addAccount.navigateToAccounts();
        await addAccount.createAccount(data.accountName, data.accountName);
        await addAccount.expectToastToContain(ToastMessages.ACCOUNT_CREATED);
        await addAccount.verifyAddedAccountName(data.accountName)
        await addAccount.openAccount(data.accountName);
        await addAccount.createUser(data.accountName, data.email, data.password, data.role, data.confirmPassword, '');
        await addAccount.expectToastToContain(ToastMessages.USER_CREATED);
        await expect(addAccount.accounticondynamic(data.accountName)).toBeVisible();
    });

    test('TC21_Cancel the user creation after giving the user details', async ({ page }) => {
        const data = AccountTestData.TC21;
        await addAccount.navigateToAccounts();
        await addAccount.createAccount(data.accountName, data.accountName);
        await addAccount.expectToastToContain(ToastMessages.ACCOUNT_CREATED);
        await addAccount.verifyAddedAccountName(data.accountName)
        await addAccount.openAccount(data.accountName);
        await addAccount.createUser(data.accountName, data.email, data.password, data.role, data.confirmPassword, '', false);
        await addAccount.closeiconuser.click();
        await expect(addAccount.accounticondynamic(data.accountName)).not.toBeVisible();
    });

    test('TC22_Edit the user details, should be restricted to edit', async ({ page }) => {
        const data = AccountTestData.TC22;
        await addAccount.navigateToAccounts();
        await addAccount.createAccount(data.accountName, data.accountName);
        await addAccount.expectToastToContain(ToastMessages.ACCOUNT_CREATED);
        await addAccount.verifyAddedAccountName(data.accountName)
        await addAccount.openAccount(data.accountName);
        await addAccount.createUser(data.accountName, data.email, data.password, data.role, data.confirmPassword, '');
        await addAccount.expectToastToContain(ToastMessages.USER_CREATED);
        await addAccount.edituserdetail.click();
        await expect(addAccount.userNamePlaceholder).not.toBeEditable();
    });

    test('TC23_Change the password and give wrong old password', async ({ page }) => {
        const data = AccountTestData.TC23;
        await addAccount.navigateToAccounts();
        await addAccount.createAccount(data.accountName, data.accountName);
        await addAccount.expectToastToContain(ToastMessages.ACCOUNT_CREATED);
        await addAccount.verifyAddedAccountName(data.accountName)
        await addAccount.openAccount(data.accountName);
        await addAccount.createUser(data.accountName, data.email, data.password, data.role, data.confirmPassword, '');
        await addAccount.expectToastToContain(ToastMessages.USER_CREATED);
        await addAccount.edituserdetail.click();
        await addAccount.changepasswordAndVerify(data.oldPassword)
        await addAccount.expectToastToContain(ToastMessages.INCORRECTPWD_POPUP);
    });

    test('TC24_Give correct old password and change the password', async ({ page }) => {
        const data = AccountTestData.TC24;
        await addAccount.navigateToAccounts();
        await addAccount.createAccount(data.accountName, data.accountName);
        await addAccount.expectToastToContain(ToastMessages.ACCOUNT_CREATED);
        await addAccount.verifyAddedAccountName(data.accountName)
        await addAccount.openAccount(data.accountName);
        await addAccount.createUser(data.accountName, data.email, data.password, data.role, data.confirmPassword, '');
        await addAccount.expectToastToContain(ToastMessages.USER_CREATED);
        await addAccount.edituserdetail.click();
        await addAccount.changepasswordAndVerify(data.oldPassword)
        await addAccount.expectToastToContain(ToastMessages.OLDPWDVERIFIED_POPUP);
        await addAccount.updatePassword(data.newPassword);
        await loginPage.logout();
        await loginPage.loginwithnewusers(data.username, data.newPassword, data.dashboardURL);
    });

    test('TC25_Delete the created user', async ({ page }) => {
        const data = AccountTestData.TC25;
        await addAccount.navigateToAccounts();
        await addAccount.createAccount(data.accountName, data.accountName);
        await addAccount.expectToastToContain(ToastMessages.ACCOUNT_CREATED);
        await addAccount.verifyAddedAccountName(data.accountName)
        await addAccount.openAccount(data.accountName);
        await addAccount.createUser(data.accountName, data.email, data.password, data.role, data.confirmPassword, '');
        await addAccount.expectToastToContain(ToastMessages.USER_CREATED);
        await addAccount.deleteuserBtn.waitFor();
        await addAccount.deleteuserBtn.click();
        await addAccount.confirdltBtn.click();
        await expect(addAccount.accounticondynamic(data.accountName)).not.toBeVisible();
    });

    test('TC26_Delete the account which is logged in currently', async ({ page }) => {
        const data = AccountTestData.TC26;
        await addAccount.navigateToAccounts();
        await addAccount.createAccount(data.accountName, data.accountName);
        await addAccount.expectToastToContain(ToastMessages.ACCOUNT_CREATED);
        await addAccount.verifyAddedAccountName(data.accountName)
        await addAccount.openAccount(data.accountName);
        await addAccount.createUser(data.accountName, data.email, data.password, data.role, data.confirmPassword, '');
        await addAccount.expectToastToContain(ToastMessages.USER_CREATED)
        await loginPage.logout();
        await loginPage.loginwithnewusers(data.username, data.userPassword, data.dashboardURL);
        await addAccount.accountMenu.click();
        await addAccount.Accountusermenu.waitFor();
        await addAccount.Accountusermenu.click();
        await addAccount.clickButtonInRow(data.accountName, addAccount.goinsideaccount);
        await addAccount.clickDeleteButtonInRow(data.accountName, addAccount.deleteuserBtn);
        // await addAccount.confirdltBtn.click();
        await addAccount.expectToastToContain(ToastMessages.DELETECURRENTUSER_POPUP);
        await expect(addAccount.accounticondynamic(data.accountName)).toBeVisible();
    });

    test('TC27_Try to delete the account which is not logged in currently', async ({ page }) => {
        const data = AccountTestData.TC27;
        await addAccount.navigateToAccounts();
        await addAccount.createAccount(data.accountName, data.accountName);
        await addAccount.expectToastToContain(ToastMessages.ACCOUNT_CREATED);
        await addAccount.verifyAddedAccountName(data.accountName);
        await addAccount.openAccount(data.accountName);
        await addAccount.createUser(data.accountName, data.email, data.password, data.role, data.confirmPassword, '');
        await addAccount.expectToastToContain(ToastMessages.USER_CREATED)
        await addAccount.backicon.waitFor();
        await addAccount.backicon.click();
        await addAccount.addAccountBtn.click();
        await addAccount.createAccount(data.accountNameTwo, data.accountNameTwo);
        await addAccount.expectToastToContain(ToastMessages.ACCOUNT_CREATED);
        await addAccount.verifyAddedAccountName(data.accountNameTwo);
        await loginPage.logout();
        await loginPage.loginwithnewusers(data.username, data.userPassword, data.dashboardURL);
        await addAccount.accountMenu.click();
        await addAccount.Accountusermenu.waitFor();
        await addAccount.Accountusermenu.click();
        await addAccount.clickDeleteButtonInRow(data.accountNameTwo, addAccount.deleteuserBtn);
        await addAccount.confirdltBtn.click();
        await addAccount.expectToastToContain(ToastMessages.ACCOUNT_DELETED);
        await expect(addAccount.accounticondynamic(data.accountNameTwo)).not.toBeVisible();
    });

    test('TC28_Check whether all users are listed in users list of that particular account', async ({ page }) => {
        const data = AccountTestData.TC28;
        await addAccount.navigateToAccounts();
        await addAccount.createAccount(data.accountName, data.accountName);
        await addAccount.expectToastToContain(ToastMessages.ACCOUNT_CREATED);
        await addAccount.verifyAddedAccountName(data.accountName);
        await addAccount.openAccount(data.accountName);
        await addAccount.createUser(data.accountName, data.email, data.password, data.role, data.confirmPassword, '');
        await addAccount.expectToastToContain(ToastMessages.USER_CREATED)
        await addAccount.addUser.click();
        await addAccount.createUser(data.accountNameTwo, data.email, data.password, data.role, data.confirmPassword, '');
        await addAccount.expectToastToContain(ToastMessages.USER_CREATED)
        await expect(addAccount.rowByNameAndEmail(data.accountName, data.email)).toBeVisible();
        await expect(addAccount.rowByNameAndEmail(data.accountNameTwo, data.email)).toBeVisible();
    });
    test.setTimeout(120000)
    test('TC29_Upload a file from content page', async ({ page }) => {
        const data = AccountTestData.TC29;
        await filemanager.navigateToFileManager();
        // await filemanager.navigateToStorage();
        await filemanager.uploadFiles([data.uploadFile]);
        await filemanager.waitForUploadToComplete();
        await filemanager.verifyFileExists(data.uploadFile);
    });
    // test('TC00 Adding Admin Account and user', async ({ page }) => {
    //     const data = AccountTestData.TC00;
    //     await addAccount.navigateToAccounts();
    //     await addAccount.createAccount(data.accountName, data.accountName);
    //     await addAccount.expectToastToContain(ToastMessages.ACCOUNT_CREATED);
    //     await addAccount.verifyAddedAccountName(data.accountName);
    //     await addAccount.openAccount(data.accountName);
    //     await addAccount.createUser(data.accountName, data.email, data.password, data.role, data.confirmPassword, '');
    //     await addAccount.expectToastToContain(ToastMessages.USER_CREATED)
    // });
});
test.describe('Login with Admin', () => {
    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        addAccount = new AddAccount(page);
        filemanager = new FileManagerPage(page);
        await loginPage.navigate();
        await loginPage.loginSuperAdmin();
    });

    test('TC30_Click on add account', async ({ page }) => {
        await addAccount.navigateToAccounts();
        await addAccount.verifyFormLabels();
    });

    test('TC31_Add account by giving only account name', async ({ page }) => {
        const data = AccountTestData.TC31;
        await addAccount.navigateToAccounts();
        await addAccount.createAccount(data.accountName, "");
        await addAccount.expectValidationMessage(ValidationMessages.COUNTRY_REQUIRED);
    });

    test('TC32_Add account by giving only address', async ({ page }) => {
        const data = AccountTestData.TC32;
        await addAccount.navigateToAccounts();
        await addAccount.createAccount("", data.accountName);
        await addAccount.expectValidationMessage(ValidationMessages.NAME_REQUIRED);
    });

    test('TC33_Add account with already existing account name', async ({ page }) => {
        const data = AccountTestData.TC33;
        await addAccount.navigateToAccounts();
        await addAccount.createAccount(data.accountName, data.accountName);
        await addAccount.expectToastToContain(ToastMessages.ACCOUNT_CREATED);
        await addAccount.verifyAddedAccountName(data.accountName)
        await addAccount.clickAddAccount();
        await addAccount.createAccount(data.accountName, data.accountName);
        await addAccount.expectToastToContain(ToastMessages.DUPLICATE_ACCOUNT);
    });

    test('TC34_Create Account by giving Account Name and Address', async ({ page }) => {
        const data = AccountTestData.TC34;
        await addAccount.navigateToAccounts();
        await addAccount.createAccount(data.accountName, data.accountName);
        await addAccount.expectToastToContain(ToastMessages.ACCOUNT_CREATED);
        await addAccount.verifyAddedAccountName(data.accountName)
    });

    test('TC35_View the account details', async ({ page }) => {
        const data = AccountTestData.TC35;
        await addAccount.navigateToAccounts();
        await addAccount.createAccount(data.accountName, data.accountCountry);
        await addAccount.expectToastToContain(ToastMessages.ACCOUNT_CREATED);
        await addAccount.verifyAddedAccountName(data.accountName);
        await addAccount.verifyAccountDetailsExist(data.expectedValues)
    });

    test('TC36_Edit the account name', async ({ page }) => {
        const data = AccountTestData.TC36;
        await addAccount.navigateToAccounts();
        await addAccount.createAccount(data.accountName, data.accountName);
        await addAccount.expectToastToContain(ToastMessages.ACCOUNT_CREATED);
        await addAccount.verifyAddedAccountName(data.accountName);
        await addAccount.clickButtonInRow(data.accountName, addAccount.editaccount);
        await addAccount.expectAccountNameInputNotVisible();
    });

    test('TC37_Add new account with special characters', async ({ page }) => {
        const data = AccountTestData.TC37;
        await addAccount.navigateToAccounts();
        await addAccount.createAccount(data.accountName, data.accountName);
        await addAccount.expectToastToContain(ToastMessages.ALPHANUMERICVALIDATION);
    });

    test('TC38_change address and try to update the account', async ({ page }) => {
        const data = AccountTestData.TC38;
        await addAccount.navigateToAccounts();
        await addAccount.createAccount(data.accountName, data.accountName);
        await addAccount.expectToastToContain(ToastMessages.ACCOUNT_CREATED);
        await addAccount.clickButtonInRow(data.accountName, addAccount.editaccount);
        await addAccount.editValueTwo(data.renameAccountName);
        await addAccount.saveAccount();
        await addAccount.expectToastToContain(ToastMessages.ACCOUNT_EDITED);
    });

    test('TC39_Cancel the account creation after giving the account name and address', async ({ page }) => {
        const data = AccountTestData.TC39;
        await addAccount.navigateToAccounts();
        await addAccount.createAccountNotSave(data.accountName, data.accountName);
        await addAccount.closeicon.click();
        await addAccount.expectAccountNameInputNotVisible();
    });

    test('TC40_Click on Add User', async ({ page }) => {
        const data = AccountTestData.TC40;
        await addAccount.navigateToAccounts();
        await addAccount.createAccount(data.accountName, data.accountName);
        await addAccount.expectToastToContain(ToastMessages.ACCOUNT_CREATED);
        await addAccount.verifyAddedAccountName(data.accountName);
        await addAccount.openAccount(data.accountName);
        await addAccount.userN_Placeholder();
    });

    test('TC41_Add user with already existing username', async ({ page }) => {
        const data = AccountTestData.TC41;
        await addAccount.navigateToAccounts();
        await addAccount.createAccount(data.accountName, data.accountName);
        await addAccount.expectToastToContain(ToastMessages.ACCOUNT_CREATED);
        await addAccount.verifyAddedAccountName(data.accountName);
        await addAccount.openAccount(data.accountName);
        await addAccount.createUser(data.accountName, data.email, data.password, data.role, data.confirmPassword, '');
        await addAccount.expectToastToContain(ToastMessages.USER_CREATED)
        await addAccount.backicon.click();
        await addAccount.openAccount(data.accountName);
        await addAccount.createUser(data.accountName, data.email, data.password, data.role, data.confirmPassword, '');
        await addAccount.expectToastToContain(ToastMessages.DUPLICATE_USER);
    });

    test('TC42_Click create user leaving the fields empty', async ({ page }) => {
        const data = AccountTestData.TC42;
        await addAccount.navigateToAccounts();
        await addAccount.createAccount(data.accountName, data.accountName);
        await addAccount.expectToastToContain(ToastMessages.ACCOUNT_CREATED);
        await addAccount.verifyAddedAccountName(data.accountName);
        await addAccount.openAccount(data.accountName);
        await addAccount.createUserBtn.click();
        await addAccount.NameFieldValidations({
            username: ValidationMessages.USERNAME_REQUIRED,
            email: ValidationMessages.EMAIL_REQUIRED,
            // password: ValidationMessages.PASSWORD_CHARACTERS,
            role: ValidationMessages.ROLE_REQUIRED,
            // confirmPassword: ValidationMessages.CONFIRMPASSWORD_REQUIRED,
        });
    });

    test('TC43_Add user by giving only username or email or role or password and confirm password', async ({ page }) => {
        const data = AccountTestData.TC43;
        await addAccount.navigateToAccounts();
        await addAccount.createAccount(data.accountName, data.accountName);
        await addAccount.expectToastToContain(ToastMessages.ACCOUNT_CREATED);
        await addAccount.verifyAddedAccountName(data.accountName)
        await addAccount.openAccount(data.accountName);
        await addAccount.createUser(data.accountName, '', '', '', '', '');
        await addAccount.createUserBtn.click();
        await addAccount.NameFieldValidations({
            username: undefined,
            email: ValidationMessages.EMAIL_REQUIRED,
            // password: ValidationMessages.PASSWORD_CHARACTERS,
            role: ValidationMessages.ROLE_REQUIRED,
            // confirmPassword: ValidationMessages.CONFIRMPASSWORD_REQUIRED,
        });

        await addAccount.userNamePlaceholder.clear();
        await addAccount.createUser('', data.email, '', '', '', '');
        await addAccount.NameFieldValidations({
            username: ValidationMessages.USERNAME_REQUIRED,
            email: undefined,
            // password: ValidationMessages.PASSWORD_CHARACTERS,
            role: ValidationMessages.ROLE_REQUIRED,
            // confirmPassword: ValidationMessages.CONFIRMPASSWORD_REQUIRED,
        });

        await addAccount.userEmailInput.clear();
        await addAccount.createUser('', '', '', data.role, '', '');
        await addAccount.NameFieldValidations({
            username: ValidationMessages.USERNAME_REQUIRED,
            email: ValidationMessages.EMAIL_REQUIRED,
            role: undefined,
            // password: ValidationMessages.PASSWORD_CHARACTERS,
            // confirmPassword: ValidationMessages.CONFIRMPASSWORD_REQUIRED,
        });

        await addAccount.roleDropdown.selectOption(data.emptyRole);
        await addAccount.createUser('', '', data.password, '', '', '');
        await addAccount.NameFieldValidations({
            username: ValidationMessages.USERNAME_REQUIRED,
            email: ValidationMessages.EMAIL_REQUIRED,
            role: ValidationMessages.ROLE_REQUIRED,
            password: undefined,
            // confirmPassword: ValidationMessages.CONFIRMPASSWORD_REQUIRED,
        });

        await addAccount.passwordInput.clear();
        await addAccount.createUser('', '', '', '', data.password, '');
        await addAccount.NameFieldValidations({
            username: ValidationMessages.USERNAME_REQUIRED,
            email: ValidationMessages.EMAIL_REQUIRED,
            // password: ValidationMessages.PASSWORD_CHARACTERS,
            role: ValidationMessages.ROLE_REQUIRED,
            confirmPassword: undefined,
        });
    });

    test('TC44_Give special characters for username', async ({ page }) => {
        const data = AccountTestData.TC44;
        await addAccount.navigateToAccounts();
        await addAccount.createAccount(data.accountName, data.accountName);
        await addAccount.expectToastToContain(ToastMessages.ACCOUNT_CREATED);
        await addAccount.verifyAddedAccountName(data.accountName)
        await addAccount.openAccount(data.accountName);
        await addAccount.createUser(data.userName, data.email, data.password, data.role, data.confirmPassword, '');
        await addAccount.expectToastToContain(ToastMessages.ALPHANUMERICVALIDATIONUSER);
    });

    test('TC45_Give invalid email format for email id', async ({ page }) => {
        const data = AccountTestData.TC45;
        await addAccount.navigateToAccounts();
        await addAccount.createAccount(data.accountName, data.accountName);
        await addAccount.expectToastToContain(ToastMessages.ACCOUNT_CREATED);
        await addAccount.verifyAddedAccountName(data.accountName)
        await addAccount.openAccount(data.accountName);
        await addAccount.createUser(data.accountName, data.email, data.password, data.role, data.confirmPassword, '');
        await addAccount.verifyText(addAccount.emailformatlabel, ValidationMessages.INVALID_EMAIL_FORMAT);
    });

    test('TC46_Enter alphanumeric values or above 10 digits mobile number', async ({ page }) => {
        const data = AccountTestData.TC46;
        await addAccount.navigateToAccounts();
        await addAccount.createAccount(data.accountName, data.accountName);
        await addAccount.expectToastToContain(ToastMessages.ACCOUNT_CREATED);
        await addAccount.verifyAddedAccountName(data.accountName)
        await addAccount.openAccount(data.accountName);
        await addAccount.createUser(data.accountName, data.email, data.password, data.role, data.mobileNumber, data.confirmPassword);
        await addAccount.verifyText(addAccount.emailformatlabel, ValidationMessages.INVALID_EMAIL_FORMAT);
    });

    test('TC47_Enter password and confirm password different', async ({ page }) => {
        const data = AccountTestData.TC47;
        await addAccount.navigateToAccounts();
        await addAccount.createAccount(data.accountName, data.accountName);
        await addAccount.expectToastToContain(ToastMessages.ACCOUNT_CREATED);
        await addAccount.verifyAddedAccountName(data.accountName)
        await addAccount.openAccount(data.accountName);
        await addAccount.createUser(data.accountName, data.email, data.password, data.role, data.confirmPassword, '');
        await addAccount.verifyText(addAccount.passwordmustmatch, ValidationMessages.PASSWORD_MUST_MATCH);
    });

    test('TC48_Create User by giving proper username, email ,role, password and confirm password', async ({ page }) => {
        const data = AccountTestData.TC48;
        await addAccount.navigateToAccounts();
        await addAccount.createAccount(data.accountName, data.accountName);
        await addAccount.expectToastToContain(ToastMessages.ACCOUNT_CREATED);
        await addAccount.verifyAddedAccountName(data.accountName)
        await addAccount.openAccount(data.accountName);
        await addAccount.createUser(data.accountName, data.email, data.password, data.role, data.confirmPassword, '');
        await addAccount.expectToastToContain(ToastMessages.USER_CREATED)
    });

    test('TC49_View the user details', async ({ page }) => {
        const data = AccountTestData.TC49;
        await addAccount.navigateToAccounts();
        await addAccount.createAccount(data.accountName, data.accountName);
        await addAccount.expectToastToContain(ToastMessages.ACCOUNT_CREATED);
        await addAccount.verifyAddedAccountName(data.accountName)
        await addAccount.openAccount(data.accountName);
        await addAccount.createUser(data.accountName, data.email, data.password, data.role, data.confirmPassword, '');
        await addAccount.expectToastToContain(ToastMessages.USER_CREATED);
        await expect(addAccount.accounticondynamic(data.accountName)).toBeVisible();
    });

    test('TC50_Cancel the user creation after giving the user details', async ({ page }) => {
        const data = AccountTestData.TC50;
        await addAccount.navigateToAccounts();
        await addAccount.createAccount(data.accountName, data.accountName);
        await addAccount.expectToastToContain(ToastMessages.ACCOUNT_CREATED);
        await addAccount.verifyAddedAccountName(data.accountName)
        await addAccount.openAccount(data.accountName);
        await addAccount.createUser(data.accountName, data.email, data.password, data.role, data.confirmPassword, '', false);
        await addAccount.closeiconuser.click();
        await expect(addAccount.accounticondynamic(data.accountName)).not.toBeVisible();
    });

    test('TC51_Edit the user details, should be restricted to edit', async ({ page }) => {
        const data = AccountTestData.TC51;
        await addAccount.navigateToAccounts();
        await addAccount.createAccount(data.accountName, data.accountName);
        await addAccount.expectToastToContain(ToastMessages.ACCOUNT_CREATED);
        await addAccount.verifyAddedAccountName(data.accountName)
        await addAccount.openAccount(data.accountName);
        await addAccount.createUser(data.accountName, data.email, data.password, data.role, data.confirmPassword, '');
        await addAccount.expectToastToContain(ToastMessages.USER_CREATED);
        await addAccount.edituserdetail.click();
        await expect(addAccount.userNamePlaceholder).not.toBeEditable();
    });

    test('TC52_Change the password and give wrong old password', async ({ page }) => {
        const data = AccountTestData.TC52;
        await addAccount.navigateToAccounts();
        await addAccount.createAccount(data.accountName, data.accountName);
        await addAccount.expectToastToContain(ToastMessages.ACCOUNT_CREATED);
        await addAccount.verifyAddedAccountName(data.accountName)
        await addAccount.openAccount(data.accountName);
        await addAccount.createUser(data.accountName, data.email, data.password, data.role, data.confirmPassword, '');
        await addAccount.expectToastToContain(ToastMessages.USER_CREATED);
        await addAccount.edituserdetail.click();
        await addAccount.changepasswordAndVerify(data.oldPassword)
        await addAccount.expectToastToContain(ToastMessages.INCORRECTPWD_POPUP);
    });

    test('TC53_Give correct old password and change the password', async ({ page }) => {
        const data = AccountTestData.TC53;
        await addAccount.navigateToAccounts();
        await addAccount.createAccount(data.accountName, data.accountName);
        await addAccount.expectToastToContain(ToastMessages.ACCOUNT_CREATED);
        await addAccount.verifyAddedAccountName(data.accountName)
        await addAccount.openAccount(data.accountName);
        await addAccount.createUser(data.accountName, data.email, data.password, data.role, data.confirmPassword, '');
        await addAccount.expectToastToContain(ToastMessages.USER_CREATED);
        await addAccount.edituserdetail.click();
        await addAccount.changepasswordAndVerify(data.oldPassword)
        await addAccount.expectToastToContain(ToastMessages.OLDPWDVERIFIED_POPUP);
        await addAccount.updatePassword(data.newPassword);
        await loginPage.logout();
        await loginPage.loginwithnewusers(data.username, data.newPassword, data.dashboardURL);
    });

    test('TC54_Delete the created user', async ({ page }) => {
        const data = AccountTestData.TC54;
        await addAccount.navigateToAccounts();
        await addAccount.createAccount(data.accountName, data.accountName);
        await addAccount.expectToastToContain(ToastMessages.ACCOUNT_CREATED);
        await addAccount.verifyAddedAccountName(data.accountName)
        await addAccount.openAccount(data.accountName);
        await addAccount.createUser(data.accountName, data.email, data.password, data.role, data.confirmPassword, '');
        await addAccount.expectToastToContain(ToastMessages.USER_CREATED);
        await addAccount.deleteuserBtn.waitFor();
        await addAccount.deleteuserBtn.click();
        await addAccount.confirdltBtn.click();
        await expect(addAccount.accounticondynamic(data.accountName)).not.toBeVisible();
    });

    test('TC55_Delete the account which is logged in currently', async ({ page }) => {
        const data = AccountTestData.TC55;
        await addAccount.navigateToAccounts();
        await addAccount.createAccount(data.accountName, data.accountName);
        await addAccount.expectToastToContain(ToastMessages.ACCOUNT_CREATED);
        await addAccount.verifyAddedAccountName(data.accountName)
        await addAccount.openAccount(data.accountName);
        await addAccount.createUser(data.accountName, data.email, data.password, data.role, data.confirmPassword, '');
        await addAccount.expectToastToContain(ToastMessages.USER_CREATED)
        await loginPage.logout();
        await loginPage.loginwithnewusers(data.username, data.userPassword, data.dashboardURL);
        await addAccount.accountMenu.click();
        await addAccount.auser.waitFor();
        await addAccount.auser.click();
        await addAccount.userdltBtn.click();
        await addAccount.expectToastToContain(ToastMessages.DELETECURRENTUSER_POPUP);
        await expect(addAccount.accounticondynamic(data.accountName)).toBeVisible();
    });

    test('TC56_Try to delete the account which is not logged in currently', async ({ page }) => {
        const data = AccountTestData.TC56;
        await addAccount.navigateToAccounts();
        await addAccount.createAccount(data.accountName, data.accountName);
        await addAccount.expectToastToContain(ToastMessages.ACCOUNT_CREATED);
        await addAccount.verifyAddedAccountName(data.accountName);
        await addAccount.openAccount(data.accountName);
        await addAccount.createUser(data.accountName, data.email, data.password, data.role, data.confirmPassword, '');
        await addAccount.expectToastToContain(ToastMessages.USER_CREATED)
        await addAccount.backicon.waitFor();
        await addAccount.backicon.click();
        await addAccount.addAccountBtn.click();
        await addAccount.createAccount(data.accountNameTwo, data.accountNameTwo);
        await addAccount.expectToastToContain(ToastMessages.ACCOUNT_CREATED);
        await addAccount.verifyAddedAccountName(data.accountNameTwo);
        await addAccount.openAccount(data.accountName);
        await addAccount.createUser(data.accountNameTwo, data.email, data.password, data.role, data.confirmPassword, '');
        await addAccount.expectToastToContain(ToastMessages.USER_CREATED)
        await loginPage.logout();
        await loginPage.loginwithnewusers(data.username, data.userPassword, data.dashboardURL);
        await addAccount.accountMenu.waitFor();
        await addAccount.accountMenu.click();
        await addAccount.auser.click();
        await addAccount.clickDeleteButtonInRow(data.accountNameTwo, addAccount.deleteuserBtn);
        await addAccount.confirdltBtn.click();
        await addAccount.expectToastToContain(ToastMessages.DELETE_USER);
        await expect(addAccount.accounticondynamic(data.accountNameTwo)).not.toBeVisible();
    });

    test('TC57_Check whether all users are listed in users list of that particular account', async ({ page }) => {
        const data = AccountTestData.TC57;
        await addAccount.navigateToAccounts();
        await addAccount.createAccount(data.accountName, data.accountName);
        await addAccount.expectToastToContain(ToastMessages.ACCOUNT_CREATED);
        await addAccount.verifyAddedAccountName(data.accountName);
        await addAccount.openAccount(data.accountName);
        await addAccount.createUser(data.accountName, data.email, data.password, data.role, data.confirmPassword, '');
        await addAccount.expectToastToContain(ToastMessages.USER_CREATED)
        await addAccount.addUser.click();
        await addAccount.createUser(data.accountNameTwo, data.email, data.password, data.role, data.confirmPassword, '');
        await addAccount.expectToastToContain(ToastMessages.USER_CREATED)
        await expect(addAccount.rowByNameAndEmail(data.accountName, data.email)).toBeVisible();
        await expect(addAccount.rowByNameAndEmail(data.accountNameTwo, data.email)).toBeVisible();
    });

    test('TC58_Upload a file from content page', async ({ page }) => {
        const data = AccountTestData.TC58;
        await filemanager.navigateToFileManager();
        // await filemanager.navigateToStorage();
        await filemanager.uploadFiles([data.uploadFile]);
        await filemanager.waitForUploadToComplete();
        await filemanager.verifyFileExists(data.uploadFile);
    });
    test('USER ACCOUNT CREATION', async ({ page }) => {
        const data = AccountTestData.TC00;
        await addAccount.navigateToAccounts();
        await addAccount.createAccount(data.accountName, data.accountName);
        await addAccount.expectToastToContain(ToastMessages.ACCOUNT_CREATED);
        await addAccount.verifyAddedAccountName(data.accountName);
        await addAccount.openAccount(data.accountName);
        await addAccount.createUser(data.accountName, data.email, data.password, data.role, data.confirmPassword, '');
        await addAccount.expectToastToContain(ToastMessages.USER_CREATED)
    });

});

test.describe.only('Login with user', () => {
    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        license = new License(page);
        addAccount = new AddAccount(page);
        await loginPage.navigate();
        // await loginPage.login();
    });
    test.only('TC_66_Download Lic Key', async ({ page }) => {
        const data = AccountTestData.TC66;
        // await loginPage.logout();
        await loginPage.loginSuperAdmin();
        await addAccount.navigateToAccounts();
        await addAccount.createAccount(data.accountName, data.country);
        await addAccount.expectToastToContain(ToastMessages.ACCOUNT_CREATED);
        await addAccount.openAccount(data.accountName);
        await addAccount.createUser(
            data.username,
            data.email,
            data.password,
            data.role,
            data.cpassword,
            data.mobilenumber,
            data.clickButton
        );
        await addAccount.expectToastToContain(ToastMessages.USER_CREATED);
        await license.GoToNode(data.NODENAME)
        await license.selectNodeCheckboxByLabelText(data.labelTextPrimary);
        await license.selectNodeCheckboxByLabelText(data.labelTextSecondary);
        await license.SaveNode();
        await license.expectToastToContain(ToastMessages.NODE_CREATE)
        await license.waitForOnline(loginPage);
        await loginPage.login();
        await license.navigateToLicense();
        await license.downlaodLicensekey();

        await license.LicenseLogin(data);
        await license.LicenseCredentials(data);
    });
    test('TC_67_Click on License Page', async ({ page }) => {
        license = new License(page);
        await license.accountMenu.click()
        await license.LicenseMenuTorq.click()
        await expect(license.AddLicense).toBeVisible()
    });
});
// test.describe.only('Login with Superadmin', () => {
//     test.beforeEach(async ({ page }) => {
//         loginPage = new LoginPage(page);
//         addAccount = new AddAccount(page);
//         filemanager = new FileManagerPage(page);
//         await loginPage.navigate();
//         await loginPage.loginSuperAdmin();
//     });
//     test.only('TC_01_Click on add account', async ({ page }) => {
//         await addAccount.navigateToAccounts();
//         await addAccount.verifyFormLabels();
//     });
//     test('TC_02_Add account by giving only account name', async ({ page }) => {
//         const accountName = "TC2";
//         await addAccount.navigateToAccounts();
//         await addAccount.createAccount(accountName, "");
//         await addAccount.expectValidationMessage(ValidationMessages.COUNTRY_REQUIRED);
//     });
//     test('TC_03_Add account by giving only address', async ({ page }) => {
//         const accountName = "TC2";
//         await addAccount.navigateToAccounts();
//         await addAccount.createAccount("", accountName);
//         await addAccount.expectValidationMessage(ValidationMessages.NAME_REQUIRED);
//     });
//     test('TC_04_Add account with already existing account name', async ({ page }) => {
//         const accountName = 'TC4';
//         await addAccount.navigateToAccounts();
//         await addAccount.createAccount(accountName, accountName);
//         await addAccount.expectToastToContain(ToastMessages.ACCOUNT_CREATED);
//         await addAccount.verifyAddedAccountName(accountName)
//         await addAccount.clickAddAccount();
//         await addAccount.createAccount(accountName, accountName);
//         await addAccount.expectToastToContain(ToastMessages.DUPLICATE_ACCOUNT);
//     });
//     test('TC_05_Create Account by giving Account Name and Address', async ({ page }) => {
//         const accountName = 'TC5';
//         await addAccount.navigateToAccounts();
//         await addAccount.createAccount(accountName, accountName);
//         await addAccount.expectToastToContain(ToastMessages.ACCOUNT_CREATED);
//         await addAccount.verifyAddedAccountName(accountName)
//     });
//     test('TC_06_View the account details', async ({ page }) => {
//         const accountName = 'TC6';
//         const accountCountry = 'TC6Country';
//         await addAccount.navigateToAccounts();
//         await addAccount.createAccount(accountName, accountCountry);
//         await addAccount.expectToastToContain(ToastMessages.ACCOUNT_CREATED);
//         await addAccount.verifyAddedAccountName(accountName);
//         const expectedValues = [accountName, accountCountry];
//         await addAccount.verifyAccountDetailsExist(expectedValues)
//     });
//     test('TC_07_Edit the account name', async ({ page }) => {
//         const accountName = 'TC7';
//         await addAccount.navigateToAccounts();
//         await addAccount.createAccount(accountName, accountName);
//         await addAccount.expectToastToContain(ToastMessages.ACCOUNT_CREATED);
//         await addAccount.verifyAddedAccountName(accountName);
//         await addAccount.clickButtonInRow(accountName, addAccount.editaccount);
//         await addAccount.expectAccountNameInputNotVisible();
//     });
//     test('TC_08_Add new account with special characters', async ({ page }) => {
//         const accountName = 'TC7!@#';
//         await addAccount.navigateToAccounts();
//         await addAccount.createAccount(accountName, accountName);
//         await addAccount.expectToastToContain(ToastMessages.ALPHANUMERICVALIDATION);
//     });
//     test('TC_09_change address and try to update the account', async ({ page }) => {
//         const accountName = 'TC9', renameaccountname = 'TC9Rename';
//         await addAccount.navigateToAccounts();
//         await addAccount.createAccount(accountName, accountName);
//         await addAccount.expectToastToContain(ToastMessages.ACCOUNT_CREATED);
//         await addAccount.clickButtonInRow(accountName, addAccount.editaccount);
//         await addAccount.editValueTwo(renameaccountname);
//         await addAccount.saveAccount();
//         await addAccount.expectToastToContain(ToastMessages.ACCOUNT_EDITED);
//     });
//     test('TC_10_Cancel the account creation after giving the account name and address', async ({ page }) => {
//         const accountName = 'TC10';
//         await addAccount.navigateToAccounts();
//         await addAccount.createAccountNotSave(accountName, accountName);
//         await addAccount.closeicon.click();
//         await addAccount.expectAccountNameInputNotVisible();
//     });
//     test('TC_11_Click on Add User', async ({ page }) => {
//         const accountName = 'TC11';
//         await addAccount.navigateToAccounts();
//         await addAccount.createAccount(accountName, accountName);
//         await addAccount.expectToastToContain(ToastMessages.ACCOUNT_CREATED);
//         await addAccount.verifyAddedAccountName(accountName);
//         await addAccount.openAccount(accountName);
//         await addAccount.userN_Placeholder();
//     });
//     test('TC_12_Add user with already existing username', async ({ page }) => {
//         const accountName = 'TC12', email = 'TC12@riversilica.com', password = 'Pixfix@123', cpassword = 'Pixfix@123', role = 'super-admin';
//         await addAccount.navigateToAccounts();
//         await addAccount.createAccount(accountName, accountName);
//         await addAccount.expectToastToContain(ToastMessages.ACCOUNT_CREATED);
//         await addAccount.verifyAddedAccountName(accountName);
//         await addAccount.expectToastToContain(ToastMessages.ACCOUNT_CREATED);
//         await addAccount.openAccount(accountName);
//         await addAccount.createUser(accountName, email, password, role, cpassword, '');
//         await addAccount.expectToastToContain(ToastMessages.USER_CREATED)
//         await addAccount.backicon.click();
//         await addAccount.openAccount(accountName);
//         await addAccount.createUser(accountName, email, password, role, cpassword, '');
//         await addAccount.expectToastToContain(ToastMessages.DUPLICATE_USER);
//     });
//     test('TC_13_Click create user leaving the fields empty', async ({ page }) => {
//         const accountName = 'TC13';
//         await addAccount.navigateToAccounts();
//         await addAccount.createAccount(accountName, accountName);
//         await addAccount.expectToastToContain(ToastMessages.ACCOUNT_CREATED);
//         await addAccount.verifyAddedAccountName(accountName);
//         await addAccount.openAccount(accountName);
//         await addAccount.createUserBtn.click();
//         await addAccount.NameFieldValidations({
//             username: ValidationMessages.USERNAME_REQUIRED,
//             email: ValidationMessages.EMAIL_REQUIRED,
//             password: ValidationMessages.PASSWORD_CHARACTERS,
//             role: ValidationMessages.ROLE_REQUIRED,
//             confirmPassword: ValidationMessages.CONFIRMPASSWORD_REQUIRED,
//         });
//     });
//     test('TC_14_Add user by giving only username or email or role or password and confirm password', async ({ page }) => {
//         const accountName = 'TC14', email = 'TC14@riversilica.com', password = 'Pixfix@123', role = 'super-admin', emptyrole = 'Select Role';
//         await addAccount.navigateToAccounts();
//         await addAccount.createAccount(accountName, accountName);
//         await addAccount.expectToastToContain(ToastMessages.ACCOUNT_CREATED);
//         await addAccount.verifyAddedAccountName(accountName)
//         await addAccount.openAccount(accountName);
//         //Giving username alone
//         await addAccount.createUser(accountName, '', '', '', '', '');
//         await addAccount.createUserBtn.click();
//         await addAccount.NameFieldValidations({
//             username: undefined,
//             email: ValidationMessages.EMAIL_REQUIRED,
//             password: ValidationMessages.PASSWORD_CHARACTERS,
//             role: ValidationMessages.ROLE_REQUIRED,
//             confirmPassword: ValidationMessages.CONFIRMPASSWORD_REQUIRED,
//         });
//         //Giving email alone
//         await addAccount.userNamePlaceholder.clear();
//         await addAccount.createUser('', email, '', '', '', '');
//         // await addAccount.userEmailInput.fill(email);
//         await addAccount.NameFieldValidations({
//             username: ValidationMessages.USERNAME_REQUIRED,
//             email: undefined,
//             password: ValidationMessages.PASSWORD_CHARACTERS,
//             role: ValidationMessages.ROLE_REQUIRED,
//             confirmPassword: ValidationMessages.CONFIRMPASSWORD_REQUIRED,
//         });
//         //Giving Role alone
//         await addAccount.userEmailInput.clear();
//         await addAccount.createUser('', '', '', role, '', '');
//         // await addAccount.roleDropdown.selectOption(role);
//         await addAccount.NameFieldValidations({
//             username: ValidationMessages.USERNAME_REQUIRED,
//             email: ValidationMessages.EMAIL_REQUIRED,
//             role: undefined,
//             password: ValidationMessages.PASSWORD_CHARACTERS,
//             confirmPassword: ValidationMessages.CONFIRMPASSWORD_REQUIRED,
//         });
//         // Giving password alone
//         await addAccount.roleDropdown.selectOption(emptyrole);
//         await addAccount.createUser('', '', password, '', '', '');
//         // await addAccount.passwordInput.fill(password);
//         await addAccount.NameFieldValidations({
//             username: ValidationMessages.USERNAME_REQUIRED,
//             email: ValidationMessages.EMAIL_REQUIRED,
//             role: ValidationMessages.ROLE_REQUIRED,
//             password: undefined,
//             confirmPassword: ValidationMessages.CONFIRMPASSWORD_REQUIRED,
//         });
//         //Giving confirmation password alone
//         await addAccount.passwordInput.clear();
//         await addAccount.createUser('', '', '', '', password, '');
//         // await addAccount.confirmPasswordInput.fill(password);
//         await addAccount.NameFieldValidations({
//             username: ValidationMessages.USERNAME_REQUIRED,
//             email: ValidationMessages.EMAIL_REQUIRED,
//             password: ValidationMessages.PASSWORD_CHARACTERS,
//             role: ValidationMessages.ROLE_REQUIRED,
//             confirmPassword: undefined,

//         });


//     })
//     test('TC_15_Give special characters for username', async ({ page }) => {
//         const accountName = 'TC15', userName = 'TC14!@#', email = 'TC15@riversilica.com', password = 'Pixfix@123', cpassword = 'Pixfix@123', role = 'super-admin';
//         await addAccount.navigateToAccounts();
//         await addAccount.createAccount(accountName, accountName);
//         await addAccount.expectToastToContain(ToastMessages.ACCOUNT_CREATED);
//         await addAccount.verifyAddedAccountName(accountName)
//         await addAccount.openAccount(accountName);
//         await addAccount.createUser(userName, email, password, role, cpassword, '');
//         await addAccount.expectToastToContain(ToastMessages.ALPHANUMERICVALIDATIONUSER);
//     });
//     test('TC_16_Give invalid email format for email id', async ({ page }) => {
//         const accountName = 'TC16', email = 'T!@#$%@riversilica.com', password = 'Pixfix@123', role = 'super-admin', cpassword = 'Pixfix@123';
//         await addAccount.navigateToAccounts();
//         await addAccount.createAccount(accountName, accountName);
//         await addAccount.expectToastToContain(ToastMessages.ACCOUNT_CREATED);
//         await addAccount.verifyAddedAccountName(accountName)
//         await addAccount.openAccount(accountName);
//         await addAccount.createUser(accountName, email, password, role, cpassword, '');
//         await addAccount.verifyText(addAccount.emailformatlabel, ValidationMessages.INVALID_EMAIL_FORMAT);
//     });
//     test('TC_17_Enter alphanumeric values or above 10 digits mobile number', async ({ page }) => {
//         const accountName = 'TC17', email = 'TC17riversilica.com', password = 'Pixfix@123', role = 'super-admin', mobilenumber = '!@@##$$%$%%', cpassword = 'Pixfix@123';
//         await addAccount.navigateToAccounts();
//         await addAccount.createAccount(accountName, accountName);
//         await addAccount.expectToastToContain(ToastMessages.ACCOUNT_CREATED);
//         await addAccount.verifyAddedAccountName(accountName)
//         await addAccount.openAccount(accountName);
//         await addAccount.createUser(accountName, email, password, role, mobilenumber, cpassword);
//         await addAccount.verifyText(addAccount.emailformatlabel, ValidationMessages.INVALID_EMAIL_FORMAT);
//     });
//     test('TC_18_Enter password and confirm password different', async ({ page }) => {
//         const accountName = 'TC18', email = 'TC18@riversilica.com', password = 'Pixfix@123', role = 'super-admin', cpassword = 'Pixfix';
//         const addAccount = new AddAccount(page);
//         await addAccount.createAccount(accountName, accountName);
//         await addAccount.expectToastToContain(ToastMessages.ACCOUNT_CREATED);
//         await addAccount.verifyAddedAccountName(accountName)
//         await addAccount.openAccount(accountName);
//         await addAccount.createUser(accountName, email, password, role, cpassword, '');
//         await addAccount.verifyText(addAccount.passwordmustmatch, ValidationMessages.PASSWORD_MUST_MATCH);
//     });
//     test('TC_19_Create User by giving proper username, email ,role, password and confirm password', async ({ page }) => {
//         const accountName = 'TC19', email = 'TC19@riversilica.com', password = 'Pixfix@123', role = 'super-admin', cpassword = 'Pixfix@123';
//         await addAccount.navigateToAccounts();
//         await addAccount.createAccount(accountName, accountName);
//         await addAccount.expectToastToContain(ToastMessages.ACCOUNT_CREATED);
//         await addAccount.verifyAddedAccountName(accountName)
//         await addAccount.openAccount(accountName);
//         await addAccount.createUser(accountName, email, password, role, cpassword, '');
//         await addAccount.expectToastToContain(ToastMessages.USER_CREATED)
//     });
//     test('TC_20_View the user details', async ({ page }) => {
//         const accountName = 'TC20', email = 'TC20@riversilica.com', password = 'Pixfix@123', role = 'super-admin', cpassword = 'Pixfix@123';
//         await addAccount.navigateToAccounts();
//         await addAccount.createAccount(accountName, accountName);
//         await addAccount.expectToastToContain(ToastMessages.ACCOUNT_CREATED);
//         await addAccount.verifyAddedAccountName(accountName)
//         await addAccount.openAccount(accountName);
//         await addAccount.createUser(accountName, email, password, role, cpassword, '');
//         await addAccount.expectToastToContain(ToastMessages.USER_CREATED);
//         await expect(addAccount.addedusername).toBeVisible();
//     });
//     test('TC_21_Cancel the user creation after giving the user details)', async ({ page }) => {
//         const accountName = 'TC21', email = 'TC21@riversilica.com', password = 'Pixfix@123', role = 'super-admin', cpassword = 'Pixfix@123', value = 'TC21', clickButton = false;
//         await addAccount.navigateToAccounts();
//         await addAccount.createAccount(accountName, accountName);
//         await addAccount.expectToastToContain(ToastMessages.ACCOUNT_CREATED);
//         await addAccount.verifyAddedAccountName(accountName)
//         await addAccount.openAccount(accountName);
//         await addAccount.createUser(accountName, email, password, role, cpassword, '', clickButton);
//         await addAccount.closeiconuser.click();
//         await expect(addAccount.accounticondynamic(value)).not.toBeVisible();
//     })
//     test('TC_22_Edit the user details, should be restricted to edit)', async ({ page }) => {
//         const accountName = 'TC22', email = 'TC22@riversilica.com', password = 'Pixfix@123', role = 'super-admin', cpassword = 'Pixfix@123';
//         await addAccount.navigateToAccounts();
//         await addAccount.createAccount(accountName, accountName);
//         await addAccount.expectToastToContain(ToastMessages.ACCOUNT_CREATED);
//         await addAccount.verifyAddedAccountName(accountName)
//         await addAccount.openAccount(accountName);
//         await addAccount.createUser(accountName, email, password, role, cpassword, '');
//         await addAccount.expectToastToContain(ToastMessages.USER_CREATED);
//         await addAccount.edituserdetail.click();
//         await expect(addAccount.userNamePlaceholder).not.toBeEditable();
//     });
//     test('TC_23_Change the password and give wrong old password', async ({ page }) => {
//         const accountName = 'TC23', email = 'TC23@riversilica.com', password = 'Pixfix@123', role = 'super-admin', cpassword = 'Pixfix@123', oldpassword = 'Pixfix@1234';
//         await addAccount.navigateToAccounts();
//         await addAccount.createAccount(accountName, accountName);
//         await addAccount.expectToastToContain(ToastMessages.ACCOUNT_CREATED);
//         await addAccount.verifyAddedAccountName(accountName)
//         await addAccount.openAccount(accountName);
//         await addAccount.createUser(accountName, email, password, role, cpassword, '');
//         await addAccount.expectToastToContain(ToastMessages.USER_CREATED);
//         await addAccount.edituserdetail.click();
//         await addAccount.changepasswordAndVerify(oldpassword)
//         await addAccount.expectToastToContain(ToastMessages.INCORRECTPWD_POPUP);
//     });
//     test('TC_24_Give correct old password and change the password', async ({ page }) => {
//         const accountName = 'TC24', email = 'TC24@riversilica.com', password = 'Pixfix@123', role = 'super-admin', cpassword = 'Pixfix@123', oldpassword = 'Pixfix@123', newPassword = 'Pixfix@1234', dashboardURL = 'http://10.0.90.64/#/dashboardMain', uname = 'TC24', upassword = 'Pixfix@1234';
//         await addAccount.navigateToAccounts();
//         await addAccount.createAccount(accountName, accountName);
//         await addAccount.expectToastToContain(ToastMessages.ACCOUNT_CREATED);
//         await addAccount.verifyAddedAccountName(accountName)
//         await addAccount.openAccount(accountName);
//         await addAccount.createUser(accountName, email, password, role, cpassword, '');
//         await addAccount.expectToastToContain(ToastMessages.USER_CREATED);
//         await addAccount.edituserdetail.click();
//         await addAccount.changepasswordAndVerify(oldpassword)
//         await addAccount.expectToastToContain(ToastMessages.OLDPWDVERIFIED_POPUP);
//         await addAccount.updatePassword(newPassword);
//         await loginPage.logout();
//         await loginPage.loginwithnewusers(uname, upassword, dashboardURL);
//     });
//     test('TC_25_Delete the created user', async ({ page }) => {
//         const accountName = 'TC25', email = 'TC25@riversilica.com', password = 'Pixfix@123', role = 'super-admin', cpassword = 'Pixfix@123';
//         await addAccount.navigateToAccounts();
//         await addAccount.createAccount(accountName, accountName);
//         await addAccount.expectToastToContain(ToastMessages.ACCOUNT_CREATED);
//         await addAccount.verifyAddedAccountName(accountName)
//         await addAccount.openAccount(accountName);
//         await addAccount.createUser(accountName, email, password, role, cpassword, '');
//         await addAccount.expectToastToContain(ToastMessages.USER_CREATED);
//         await addAccount.deleteuserBtn.waitFor();
//         await addAccount.deleteuserBtn.click();
//         await addAccount.confirdltBtn.click();
//         await expect(addAccount.accounticondynamic(accountName)).not.toBeVisible();
//     });

//     test('TC_26_Delete the account which is logged in currently', async ({ page }) => {
//         const accountName = 'TC26', email = 'TC26@riversilica.com', password = 'Pixfix@123', role = 'super-admin', cpassword = 'Pixfix@123', uname = 'TC26', upassword = 'Pixfix@123', dashboardURL = 'http://10.0.90.64/#/dashboardMain';
//         await addAccount.navigateToAccounts();
//         await addAccount.createAccount(accountName, accountName);
//         await addAccount.expectToastToContain(ToastMessages.ACCOUNT_CREATED);
//         await addAccount.verifyAddedAccountName(accountName)
//         await addAccount.openAccount(accountName);
//         await addAccount.createUser(accountName, email, password, role, cpassword, '');
//         await addAccount.expectToastToContain(ToastMessages.USER_CREATED)
//         await loginPage.logout();
//         await loginPage.loginwithnewusers(uname, upassword, dashboardURL);
//         await addAccount.Accountusermenu.waitFor();
//         await addAccount.Accountusermenu.click();
//         await addAccount.clickDeleteButtonInRow(accountName, addAccount.deleteuserBtn);
//         await addAccount.confirdltBtn.click();
//         await addAccount.expectToastToContain(ToastMessages.DELETECURRENTUSER_POPUP);
//         await expect(addAccount.accounticondynamic(accountName)).toBeVisible();
//     });
//     test('TC_27_Try to delete the account which is not logged in currently', async ({ page }) => {
//         const accountName = 'TC27', email = 'TC27@riversilica.com', password = 'Pixfix@123', role = 'super-admin', cpassword = 'Pixfix@123', uname = 'TC27', upassword = 'Pixfix@123', dashboardURL = 'http://10.0.90.64/#/dashboardMain', accountNameone = 'TC27D';
//         await addAccount.navigateToAccounts();
//         await addAccount.createAccount(accountName, accountName);
//         await addAccount.expectToastToContain(ToastMessages.ACCOUNT_CREATED);
//         await addAccount.verifyAddedAccountName(accountName);
//         await addAccount.openAccount(accountName);
//         await addAccount.createUser(accountName, email, password, role, cpassword, '');
//         await addAccount.expectToastToContain(ToastMessages.USER_CREATED)
//         await addAccount.backicon.waitFor();
//         await addAccount.backicon.click();
//         await addAccount.addAccountBtn.click();
//         await addAccount.createAccount(accountNameone, accountNameone);
//         await addAccount.expectToastToContain(ToastMessages.ACCOUNT_CREATED);
//         await addAccount.verifyAddedAccountName(accountNameone);
//         await loginPage.logout();
//         await loginPage.loginwithnewusers(uname, upassword, dashboardURL);
//         await addAccount.Accountusermenu.waitFor();
//         await addAccount.Accountusermenu.click();
//         await addAccount.clickDeleteButtonInRow(accountNameone, addAccount.deleteuserBtn);
//         await addAccount.confirdltBtn.click();
//         await addAccount.expectToastToContain(ToastMessages.ACCOUNT_DELETED);
//         await expect(addAccount.accounticondynamic(accountNameone)).not.toBeVisible();
//     });
//     test('TC_28_Check whether all users are listed in users list of that particular account', async ({ page }) => {
//         const accountName = 'TC28', email = 'TC28@riversilica.com', password = 'Pixfix@123', role = 'super-admin', cpassword = 'Pixfix@123', uname = 'TC28', upassword = 'Pixfix@123', dashboardURL = 'http://10.0.90.64/#/dashboardMain', accountNameone = 'TC28U2';
//         await addAccount.navigateToAccounts();
//         await addAccount.createAccount(accountName, accountName);
//         await addAccount.expectToastToContain(ToastMessages.ACCOUNT_CREATED);
//         await addAccount.verifyAddedAccountName(accountName);
//         await addAccount.openAccount(accountName);
//         await addAccount.createUser(accountName, email, password, role, cpassword, '');
//         await addAccount.expectToastToContain(ToastMessages.USER_CREATED)
//         await addAccount.addUser.click();
//         await addAccount.createUser(accountNameone, email, password, role, cpassword, '');
//         await addAccount.expectToastToContain(ToastMessages.USER_CREATED)
//         await expect(addAccount.rowByNameAndEmail(accountName, email)).toBeVisible();
//         await expect(addAccount.rowByNameAndEmail(accountNameone, email)).toBeVisible();
//     });
//     test('TC_29_Upload a file from content page', async ({ page }) => {
//         await filemanager.navigateToFileManager();
//         await filemanager.navigateToQAStorage();
//         await filemanager.uploadFiles([FmUploadDownloadPaths.AccountTC_29]);
//         await filemanager.waitForUploadToComplete();
//         await filemanager.verifyFileExists("Account_TC29.mp4");
//     });
//     test('Admin creation', async ({ page }) => {
//         const accountName = 'TORQADMIN', email = 'TORQADMIN@riversilica.com', password = 'Pixfix@123', cpassword = 'Pixfix@123', role = 'admin';
//         const loginPage = new LoginPage(page);
//         const addAccount = new AddAccount(page);
//         // await loginPage.navigate();
//         // await loginPage.loginSuperAdmin();
//         await addAccount.navigateToAccounts();
//         await addAccount.createAccount(accountName, accountName);
//         await addAccount.expectToastToContain(ToastMessages.ACCOUNT_CREATED);
//         await addAccount.verifyAddedAccountName(accountName)
//         await addAccount.openAccount(accountName);
//         await addAccount.createUser(accountName, email, password, role, cpassword, '');
//         await addAccount.expectToastToContain(ToastMessages.USER_CREATED);
//     });
// });

// test.setTimeout(40000);
// test.describe('Login with Admin', () => {
//     test.beforeEach(async ({ page }) => {
//         loginPage = new LoginPage(page);
//         addAccount = new AddAccount(page);
//         filemanager = new FileManagerPage(page);
//         await loginPage.navigate();
//         await loginPage.loginSuperAdmin();

//     });

//     test('TC_30_Click on add account', async ({ page }) => {
//         await addAccount.navigateToAccounts();
//         await addAccount.verifyFormLabels();
//     });
//     test('TC_31_Add account by giving only account name', async ({ page }) => {
//         const accountName = "TC31";
//         await addAccount.navigateToAccounts();
//         await addAccount.createAccount(accountName, "");
//         await addAccount.expectValidationMessage(ValidationMessages.COUNTRY_REQUIRED);
//     });
//     test('TC_32_Add account by giving only address', async ({ page }) => {
//         const accountName = "TC32";
//         await addAccount.navigateToAccounts();
//         await addAccount.createAccount("", accountName);
//         await addAccount.expectValidationMessage(ValidationMessages.NAME_REQUIRED);
//     });
//     test('TC_33_Add account with already existing account name', async ({ page }) => {
//         const accountName = 'TC33';
//         await addAccount.navigateToAccounts();
//         await addAccount.createAccount(accountName, accountName);
//         await addAccount.expectToastToContain(ToastMessages.ACCOUNT_CREATED);
//         await addAccount.verifyAddedAccountName(accountName)
//         await addAccount.clickAddAccount();
//         await addAccount.createAccount(accountName, accountName);
//         await addAccount.expectToastToContain(ToastMessages.DUPLICATE_ACCOUNT);
//     });
//     test('TC_34_Create Account by giving Account Name and Address', async ({ page }) => {
//         const accountName = 'TC34';
//         await addAccount.navigateToAccounts();
//         await addAccount.createAccount(accountName, accountName);
//         await addAccount.expectToastToContain(ToastMessages.ACCOUNT_CREATED);
//         await addAccount.verifyAddedAccountName(accountName)
//     });
//     test('TC_35_View the account details', async ({ page }) => {
//         const accountName = 'TC35';
//         const accountCountry = 'TC35Country';
//         await addAccount.navigateToAccounts();
//         await addAccount.createAccount(accountName, accountCountry);
//         await addAccount.expectToastToContain(ToastMessages.ACCOUNT_CREATED);
//         await addAccount.verifyAddedAccountName(accountName);
//         const expectedValues = [accountName, accountCountry];
//         await addAccount.verifyAccountDetailsExist(expectedValues)
//     });
//     test('TC_36_Edit the account name', async ({ page }) => {
//         const accountName = 'TC36';
//         await addAccount.navigateToAccounts();
//         await addAccount.createAccount(accountName, accountName);
//         await addAccount.expectToastToContain(ToastMessages.ACCOUNT_CREATED);
//         await addAccount.verifyAddedAccountName(accountName);
//         await addAccount.clickButtonInRow(accountName, addAccount.editaccount);
//         await addAccount.expectAccountNameInputNotVisible();
//     });
//     test('TC_37_Add new account with special characters', async ({ page }) => {
//         const accountName = 'TC37!@#';
//         await addAccount.navigateToAccounts();
//         await addAccount.createAccount(accountName, accountName);
//         await addAccount.expectToastToContain(ToastMessages.ALPHANUMERICVALIDATION);
//     });
//     test('TC_38_change address and try to update the account', async ({ page }) => {
//         const accountName = 'TC38', renameaccountname = 'TC38Rename';
//         await addAccount.navigateToAccounts();
//         await addAccount.createAccount(accountName, accountName);
//         await addAccount.expectToastToContain(ToastMessages.ACCOUNT_CREATED);
//         await addAccount.clickButtonInRow(accountName, addAccount.editaccount);
//         await addAccount.editValueTwo(renameaccountname);
//         await addAccount.saveAccount();
//         await addAccount.expectToastToContain(ToastMessages.ACCOUNT_EDITED);
//     });
//     test('TC_39_Cancel the account creation after giving the account name and address', async ({ page }) => {
//         const accountName = 'TC39';
//         await addAccount.navigateToAccounts();
//         await addAccount.createAccountNotSave(accountName, accountName);
//         await addAccount.closeicon.click();
//         await addAccount.expectAccountNameInputNotVisible();
//     });
//     test('TC_40_Click on Add User', async ({ page }) => {
//         const accountName = 'TC40';
//         await addAccount.navigateToAccounts();
//         await addAccount.createAccount(accountName, accountName);
//         await addAccount.expectToastToContain(ToastMessages.ACCOUNT_CREATED);
//         await addAccount.verifyAddedAccountName(accountName);
//         await addAccount.openAccount(accountName);
//         await addAccount.userN_Placeholder();
//     });
//     test('TC_41_Add user with already existing username', async ({ page }) => {
//         const accountName = 'TC41', email = 'TC41@riversilica.com', password = 'Pixfix@123', cpassword = 'Pixfix@123', role = 'admin';
//         await addAccount.navigateToAccounts();
//         await addAccount.createAccount(accountName, accountName);
//         await addAccount.expectToastToContain(ToastMessages.ACCOUNT_CREATED);
//         await addAccount.verifyAddedAccountName(accountName);
//         await addAccount.expectToastToContain(ToastMessages.ACCOUNT_CREATED);
//         await addAccount.openAccount(accountName);
//         await addAccount.createUser(accountName, email, password, role, cpassword, '');
//         await addAccount.expectToastToContain(ToastMessages.USER_CREATED)
//         await addAccount.backicon.click();
//         await addAccount.openAccount(accountName);
//         await addAccount.createUser(accountName, email, password, role, cpassword, '');
//         await addAccount.expectToastToContain(ToastMessages.DUPLICATE_USER);
//     });
//     test('TC_42_Click create user leaving the fields empty', async ({ page }) => {
//         const accountName = 'TC42';
//         await addAccount.navigateToAccounts();
//         await addAccount.createAccount(accountName, accountName);
//         await addAccount.expectToastToContain(ToastMessages.ACCOUNT_CREATED);
//         await addAccount.verifyAddedAccountName(accountName);
//         await addAccount.openAccount(accountName);
//         await addAccount.createUserBtn.click();
//         await addAccount.NameFieldValidations({
//             username: ValidationMessages.USERNAME_REQUIRED,
//             email: ValidationMessages.EMAIL_REQUIRED,
//             password: ValidationMessages.PASSWORD_CHARACTERS,
//             role: ValidationMessages.ROLE_REQUIRED,
//             confirmPassword: ValidationMessages.CONFIRMPASSWORD_REQUIRED,
//         });
//     });
//     test('TC_43_Add user by giving only username or email or role or password and confirm password', async ({ page }) => {
//         const accountName = 'TC43', email = 'TC43@riversilica.com', password = 'Pixfix@123', role = 'admin', emptyrole = 'Select Role';
//         await addAccount.navigateToAccounts();
//         await addAccount.createAccount(accountName, accountName);
//         await addAccount.expectToastToContain(ToastMessages.ACCOUNT_CREATED);
//         await addAccount.verifyAddedAccountName(accountName)
//         await addAccount.openAccount(accountName);
//         //Giving username alone
//         await addAccount.createUser(accountName, '', '', '', '', '');
//         await addAccount.createUserBtn.click();
//         await addAccount.NameFieldValidations({
//             username: undefined,
//             email: ValidationMessages.EMAIL_REQUIRED,
//             password: ValidationMessages.PASSWORD_CHARACTERS,
//             role: ValidationMessages.ROLE_REQUIRED,
//             confirmPassword: ValidationMessages.CONFIRMPASSWORD_REQUIRED,
//         });
//         //Giving email alone
//         await addAccount.userNamePlaceholder.clear();
//         await addAccount.createUser('', email, '', '', '', '');
//         // await addAccount.userEmailInput.fill(email);
//         await addAccount.NameFieldValidations({
//             username: ValidationMessages.USERNAME_REQUIRED,
//             email: undefined,
//             password: ValidationMessages.PASSWORD_CHARACTERS,
//             role: ValidationMessages.ROLE_REQUIRED,
//             confirmPassword: ValidationMessages.CONFIRMPASSWORD_REQUIRED,
//         });
//         //Giving Role alone
//         await addAccount.userEmailInput.clear();
//         await addAccount.createUser('', '', '', role, '', '');
//         // await addAccount.roleDropdown.selectOption(role);
//         await addAccount.NameFieldValidations({
//             username: ValidationMessages.USERNAME_REQUIRED,
//             email: ValidationMessages.EMAIL_REQUIRED,
//             role: undefined,
//             password: ValidationMessages.PASSWORD_CHARACTERS,
//             confirmPassword: ValidationMessages.CONFIRMPASSWORD_REQUIRED,
//         });
//         // Giving password alone
//         await addAccount.roleDropdown.selectOption(emptyrole);
//         await addAccount.createUser('', '', password, '', '', '');
//         // await addAccount.passwordInput.fill(password);
//         await addAccount.NameFieldValidations({
//             username: ValidationMessages.USERNAME_REQUIRED,
//             email: ValidationMessages.EMAIL_REQUIRED,
//             role: ValidationMessages.ROLE_REQUIRED,
//             password: undefined,
//             confirmPassword: ValidationMessages.CONFIRMPASSWORD_REQUIRED,
//         });
//         //Giving confirmation password alone
//         await addAccount.passwordInput.clear();
//         await addAccount.createUser('', '', '', '', password, '');
//         // await addAccount.confirmPasswordInput.fill(password);
//         await addAccount.NameFieldValidations({
//             username: ValidationMessages.USERNAME_REQUIRED,
//             email: ValidationMessages.EMAIL_REQUIRED,
//             password: ValidationMessages.PASSWORD_CHARACTERS,
//             role: ValidationMessages.ROLE_REQUIRED,
//             confirmPassword: undefined,

//         });


//     })
//     test('TC_44_Give special characters for username', async ({ page }) => {
//         const accountName = 'TC44', userName = 'TC44!@#', email = 'TC44@riversilica.com', password = 'Pixfix@123', cpassword = 'Pixfix@123', role = 'admin';
//         await addAccount.navigateToAccounts();
//         await addAccount.createAccount(accountName, accountName);
//         await addAccount.expectToastToContain(ToastMessages.ACCOUNT_CREATED);
//         await addAccount.verifyAddedAccountName(accountName)
//         await addAccount.openAccount(accountName);
//         await addAccount.createUser(userName, email, password, role, cpassword, '');
//         await addAccount.expectToastToContain(ToastMessages.ALPHANUMERICVALIDATIONUSER);
//     });
//     test('TC_45_Give invalid email format for email id', async ({ page }) => {
//         const accountName = 'TC45', email = 'T!@#$%@riversilica.com', password = 'Pixfix@123', role = 'admin', cpassword = 'Pixfix@123';
//         await addAccount.navigateToAccounts();
//         await addAccount.createAccount(accountName, accountName);
//         await addAccount.expectToastToContain(ToastMessages.ACCOUNT_CREATED);
//         await addAccount.verifyAddedAccountName(accountName)
//         await addAccount.openAccount(accountName);
//         await addAccount.createUser(accountName, email, password, role, cpassword, '');
//         await addAccount.verifyText(addAccount.emailformatlabel, ValidationMessages.INVALID_EMAIL_FORMAT);
//     });
//     test('TC_46_Enter alphanumeric values or above 10 digits mobile number', async ({ page }) => {
//         const accountName = 'TC46', email = 'TC46riversilica.com', password = 'Pixfix@123', role = 'admin', mobilenumber = '!@@##$$%$%%', cpassword = 'Pixfix@123';
//         await addAccount.navigateToAccounts();
//         await addAccount.createAccount(accountName, accountName);
//         await addAccount.expectToastToContain(ToastMessages.ACCOUNT_CREATED);
//         await addAccount.verifyAddedAccountName(accountName)
//         await addAccount.openAccount(accountName);
//         await addAccount.createUser(accountName, email, password, role, mobilenumber, cpassword);
//         await addAccount.verifyText(addAccount.emailformatlabel, ValidationMessages.INVALID_EMAIL_FORMAT);
//     });
//     test('TC_47_Enter password and confirm password different', async ({ page }) => {
//         const accountName = 'TC47', email = 'TC47@riversilica.com', password = 'Pixfix@123', role = 'admin', cpassword = 'Pixfix';
//         await addAccount.navigateToAccounts();
//         await addAccount.createAccount(accountName, accountName);
//         await addAccount.expectToastToContain(ToastMessages.ACCOUNT_CREATED);
//         await addAccount.verifyAddedAccountName(accountName)
//         await addAccount.openAccount(accountName);
//         await addAccount.createUser(accountName, email, password, role, cpassword, '');
//         await addAccount.verifyText(addAccount.passwordmustmatch, ValidationMessages.PASSWORD_MUST_MATCH);
//     });
//     test('TC_48_Create User by giving proper username, email ,role, password and confirm password', async ({ page }) => {
//         const accountName = 'TC48', email = 'TC48@riversilica.com', password = 'Pixfix@123', role = 'admin', cpassword = 'Pixfix@123';
//         await addAccount.navigateToAccounts();
//         await addAccount.createAccount(accountName, accountName);
//         await addAccount.expectToastToContain(ToastMessages.ACCOUNT_CREATED);
//         await addAccount.verifyAddedAccountName(accountName)
//         await addAccount.openAccount(accountName);
//         await addAccount.createUser(accountName, email, password, role, cpassword, '');
//         await addAccount.expectToastToContain(ToastMessages.USER_CREATED)
//     });
//     test('TC_49_View the user details', async ({ page }) => {
//         const accountName = 'TC49', email = 'TC49@riversilica.com', password = 'Pixfix@123', role = 'admin', cpassword = 'Pixfix@123';
//         await addAccount.navigateToAccounts();
//         await addAccount.createAccount(accountName, accountName);
//         await addAccount.expectToastToContain(ToastMessages.ACCOUNT_CREATED);
//         await addAccount.verifyAddedAccountName(accountName)
//         await addAccount.openAccount(accountName);
//         await addAccount.createUser(accountName, email, password, role, cpassword, '');
//         await addAccount.expectToastToContain(ToastMessages.USER_CREATED);
//         await expect(addAccount.addedusername).toBeVisible();
//     });
//     test('TC_50_Cancel the user creation after giving the user details)', async ({ page }) => {
//         const accountName = 'TC50', email = 'TC50@riversilica.com', password = 'Pixfix@123', role = 'admin', cpassword = 'Pixfix@123', value = 'TC50', clickButton = false;
//         await addAccount.navigateToAccounts();
//         await addAccount.createAccount(accountName, accountName);
//         await addAccount.expectToastToContain(ToastMessages.ACCOUNT_CREATED);
//         await addAccount.verifyAddedAccountName(accountName)
//         await addAccount.openAccount(accountName);
//         await addAccount.createUser(accountName, email, password, role, cpassword, '', clickButton);
//         await addAccount.closeiconuser.click();
//         await expect(addAccount.accounticondynamic(value)).not.toBeVisible();
//     })
//     test('TC_51_Edit the user details, should be restricted to edit)', async ({ page }) => {
//         const accountName = 'TC51', email = 'TC51@riversilica.com', password = 'Pixfix@123', role = 'admin', cpassword = 'Pixfix@123';
//         await addAccount.navigateToAccounts();
//         await addAccount.createAccount(accountName, accountName);
//         await addAccount.expectToastToContain(ToastMessages.ACCOUNT_CREATED);
//         await addAccount.verifyAddedAccountName(accountName)
//         await addAccount.openAccount(accountName);
//         await addAccount.createUser(accountName, email, password, role, cpassword, '');
//         await addAccount.expectToastToContain(ToastMessages.USER_CREATED);
//         await addAccount.edituserdetail.click();
//         await expect(addAccount.userNamePlaceholder).not.toBeEditable();
//     });
//     test('TC_52_Change the password and give wrong old password', async ({ page }) => {
//         const accountName = 'TC52', email = 'TC52@riversilica.com', password = 'Pixfix@123', role = 'admin', cpassword = 'Pixfix@123', oldpassword = 'Pixfix@1234';
//         await addAccount.navigateToAccounts();
//         await addAccount.createAccount(accountName, accountName);
//         await addAccount.expectToastToContain(ToastMessages.ACCOUNT_CREATED);
//         await addAccount.verifyAddedAccountName(accountName)
//         await addAccount.openAccount(accountName);
//         await addAccount.createUser(accountName, email, password, role, cpassword, '');
//         await addAccount.expectToastToContain(ToastMessages.USER_CREATED);
//         await addAccount.edituserdetail.click();
//         await addAccount.changepasswordAndVerify(oldpassword)
//         await addAccount.expectToastToContain(ToastMessages.INCORRECTPWD_POPUP);
//     });
//     test('TC_53_Give correct old password and change the password', async ({ page }) => {
//         const accountName = 'TC53', email = 'TC53@riversilica.com', password = 'Pixfix@123', role = 'admin', cpassword = 'Pixfix@123', oldpassword = 'Pixfix@123', newPassword = 'Pixfix@1234', dashboardURL = 'http://10.0.90.64/#/dashboardMain', uname = 'TC53', upassword = 'Pixfix@1234';
//         await addAccount.navigateToAccounts();
//         await addAccount.createAccount(accountName, accountName);
//         await addAccount.expectToastToContain(ToastMessages.ACCOUNT_CREATED);
//         await addAccount.verifyAddedAccountName(accountName)
//         await addAccount.openAccount(accountName);
//         await addAccount.createUser(accountName, email, password, role, cpassword, '');
//         await addAccount.expectToastToContain(ToastMessages.USER_CREATED);
//         await addAccount.edituserdetail.click();
//         await addAccount.changepasswordAndVerify(oldpassword)
//         await addAccount.expectToastToContain(ToastMessages.OLDPWDVERIFIED_POPUP);
//         await addAccount.updatePassword(newPassword);
//         await loginPage.logout();
//         await loginPage.loginwithnewusers(uname, upassword, dashboardURL);
//     });
//     test('TC_54_Delete the created user', async ({ page }) => {
//         const accountName = 'TC54', email = 'TC54@riversilica.com', password = 'Pixfix@123', role = 'admin', cpassword = 'Pixfix@123';
//         await addAccount.navigateToAccounts();
//         await addAccount.createAccount(accountName, accountName);
//         await addAccount.expectToastToContain(ToastMessages.ACCOUNT_CREATED);
//         await addAccount.verifyAddedAccountName(accountName)
//         await addAccount.openAccount(accountName);
//         await addAccount.createUser(accountName, email, password, role, cpassword, '');
//         await addAccount.expectToastToContain(ToastMessages.USER_CREATED);
//         await addAccount.deleteuserBtn.waitFor();
//         await addAccount.deleteuserBtn.click();
//         await addAccount.confirdltBtn.click();
//         await expect(addAccount.accounticondynamic(accountName)).not.toBeVisible();
//     });

//     test('TC_55_Delete the account which is logged in currently', async ({ page }) => {
//         const accountName = 'TC55', email = 'TC55@riversilica.com', password = 'Pixfix@123', role = 'admin', cpassword = 'Pixfix@123', uname = 'TC55', upassword = 'Pixfix@123', dashboardURL = 'http://10.0.90.64/#/dashboardMain';
//         await addAccount.navigateToAccounts();
//         await addAccount.createAccount(accountName, accountName);
//         await addAccount.expectToastToContain(ToastMessages.ACCOUNT_CREATED);
//         await addAccount.verifyAddedAccountName(accountName)
//         await addAccount.openAccount(accountName);
//         await addAccount.createUser(accountName, email, password, role, cpassword, '');
//         await addAccount.expectToastToContain(ToastMessages.USER_CREATED)
//         await loginPage.logout();
//         await loginPage.loginwithnewusers(uname, upassword, dashboardURL);
//         await addAccount.auser.waitFor();
//         await addAccount.auser.click();
//         await addAccount.userdltBtn.click();
//         await addAccount.expectToastToContain(ToastMessages.DELETECURRENTUSER_POPUP);
//         await expect(addAccount.accounticondynamic(accountName)).toBeVisible();
//     });
//     test('TC_56_Try to delete the account which is not logged in currently', async ({ page }) => {
//         const accountName = 'TC56', email = 'TC56@riversilica.com', password = 'Pixfix@123', role = 'admin', cpassword = 'Pixfix@123', uname = 'TC56', upassword = 'Pixfix@123', dashboardURL = 'http://10.0.90.64/#/dashboardMain', accountNameone = 'TC56D';
//         await addAccount.navigateToAccounts();
//         await addAccount.createAccount(accountName, accountName);
//         await addAccount.expectToastToContain(ToastMessages.ACCOUNT_CREATED);
//         await addAccount.verifyAddedAccountName(accountName);
//         await addAccount.openAccount(accountName);
//         await addAccount.createUser(accountName, email, password, role, cpassword, '');
//         await addAccount.expectToastToContain(ToastMessages.USER_CREATED)
//         await addAccount.backicon.waitFor();
//         await addAccount.backicon.click();
//         await addAccount.addAccountBtn.click();
//         await addAccount.createAccount(accountNameone, accountNameone);
//         await addAccount.expectToastToContain(ToastMessages.ACCOUNT_CREATED);
//         await addAccount.verifyAddedAccountName(accountNameone);
//         await loginPage.logout();
//         await loginPage.loginwithnewusers(uname, upassword, dashboardURL);
//         await addAccount.Accountusermenu.waitFor();
//         await addAccount.Accountusermenu.click();
//         await addAccount.clickDeleteButtonInRow(accountNameone, addAccount.deleteuserBtn);
//         await addAccount.confirdltBtn.click();
//         await addAccount.expectToastToContain(ToastMessages.ACCOUNT_DELETED);
//         await expect(addAccount.accounticondynamic(accountNameone)).not.toBeVisible();
//     });
//     test('TC_57_Check whether all users are listed in users list of that particular account', async ({ page }) => {
//         const accountName = 'TC57', email = 'TC57@riversilica.com', password = 'Pixfix@123', role = 'admin', cpassword = 'Pixfix@123', uname = 'TC57', upassword = 'Pixfix@123', dashboardURL = 'http://10.0.90.64/#/dashboardMain', accountNameone = 'TC57U2';
//         await addAccount.navigateToAccounts();
//         await addAccount.createAccount(accountName, accountName);
//         await addAccount.expectToastToContain(ToastMessages.ACCOUNT_CREATED);
//         await addAccount.verifyAddedAccountName(accountName);
//         await addAccount.openAccount(accountName);
//         await addAccount.createUser(accountName, email, password, role, cpassword, '');
//         await addAccount.expectToastToContain(ToastMessages.USER_CREATED)
//         await addAccount.addUser.click();
//         await addAccount.createUser(accountNameone, email, password, role, cpassword, '');
//         await addAccount.expectToastToContain(ToastMessages.USER_CREATED)
//         await expect(addAccount.rowByNameAndEmail(accountName, email)).toBeVisible();
//         await expect(addAccount.rowByNameAndEmail(accountNameone, email)).toBeVisible();
//     });
//     test('TC_58_Upload a file from content page', async ({ page }) => {
//         await filemanager.navigateToFileManager();
//         await filemanager.navigateToQAStorage();
//         await filemanager.uploadFiles([FmUploadDownloadPaths.AccountTC_29]);
//         await filemanager.waitForUploadToComplete();
//         await filemanager.verifyFileExists("Account_TC29.mp4");
//     });

// test('Creating User', async ({ page }) => {
//     const loginPage = new LoginPage(page);
//     const accountName = 'TORQUSER', userName = 'TORQUSER', email = 'TORQUSER@riversilica.com', password = 'Pixfix@123', role = 'user', cpassword = 'Pixfix@123';
//     const addAccount = new AddAccount(page);
//     await addAccount.navigateToAccounts();
//     await addAccount.createAccount(accountName, accountName);
//     await addAccount.expectToastToContain(ToastMessages.ACCOUNT_CREATED);
//     await addAccount.verifyAddedAccountName(accountName);
//     await addAccount.createUser(userName, email, password, role, cpassword, '');
//     await addAccount.expectToastToContain(ToastMessages.USER_CREATED);

// });
// });



/*test.skip('TC_59_Login to user account ', async ({ page }) => {
    const accountName = 'TC59', email = 'TC59@riversilica.com', password = 'Pixfix@123', cpassword = 'Pixfix@123', role = 'user', uname = 'TC59', upassword = 'Pixfix@123', dashboardURL = 'http://10.0.90.64/#/dashboardMain';
    const addAccount = new AddAccount(page);
    const loginPage = new LoginPage(page);
    await addAccount.navigateToAccounts();
    await addAccount.createAccount(accountName, accountName);
    await addAccount.expectToastToContain(ToastMessages.ACCOUNT_CREATED);
    await addAccount.verifyAddedAccountName(accountName);
    await addAccount.expectToastToContain(ToastMessages.ACCOUNT_CREATED);
    await addAccount.openAccount(accountName);
    await addAccount.createUser(accountName, email, password, role, cpassword, '');
    await addAccount.expectToastToContain(ToastMessages.USER_CREATED)
    await loginPage.logout();
    await loginPage.loginwithnewusers(uname, upassword, dashboardURL);
});
test.skip('TC_60_Check Edit and delete option ', async ({ page }) => {
    const accountName = 'TC60', email = 'TC60@riversilica.com', password = 'Pixfix@123', cpassword = 'Pixfix@123', role = 'user', uname = 'TC60', upassword = 'Pixfix@123', dashboardURL = 'http://10.0.90.64/#/dashboardMain';
    const addAccount = new AddAccount(page);
    const loginPage = new LoginPage(page);
    await addAccount.navigateToAccounts();
    await addAccount.createAccount(accountName, accountName);
    await addAccount.expectToastToContain(ToastMessages.ACCOUNT_CREATED);
    await addAccount.verifyAddedAccountName(accountName);
    await addAccount.expectToastToContain(ToastMessages.ACCOUNT_CREATED);
    await addAccount.openAccount(accountName);
    await addAccount.createUser(accountName, email, password, role, cpassword, '');
    await addAccount.expectToastToContain(ToastMessages.USER_CREATED)
    await loginPage.logout();
    await loginPage.loginwithnewusers(uname, upassword, dashboardURL);
    await addAccount.auser.waitFor();
    await addAccount.auser.click();
    await expect(addAccount.edituserdetail).not.toBeVisible();
    await expect(addAccount.deleteuserBtn).not.toBeVisible();
});
test.skip('TC_61_View the user details', async ({ page }) => {
    const accountName = 'TC61', email = 'TC61@riversilica.com', password = 'Pixfix@123', cpassword = 'Pixfix@123', role = 'user';
    const addAccount = new AddAccount(page);
    await addAccount.navigateToAccounts();
    await addAccount.createAccount(accountName, accountName);
    await addAccount.expectToastToContain(ToastMessages.ACCOUNT_CREATED);
    await addAccount.verifyAddedAccountName(accountName);
    await addAccount.expectToastToContain(ToastMessages.ACCOUNT_CREATED);
    await addAccount.openAccount(accountName);
    await addAccount.createUser(accountName, email, password, role, cpassword, '');
    await addAccount.expectToastToContain(ToastMessages.USER_CREATED)
    await expect(addAccount.rowByNameAndEmail(accountName, email)).toBeVisible();

});
test.skip('TC_62_Upload a file from content page', async ({ page }) => {
    const filemanager = new FileManagerPage(page);
    await filemanager.navigateToFileManager();
    await filemanager.navigateToQAStorage();
    await filemanager.uploadFiles([FmUploadDownloadPaths.AccountTC_29]);
    await filemanager.waitForUploadToComplete();
    await filemanager.verifyFileExists("Account_TC29.mp4");
});

test.skip('TC_63_Create and run the job ', async ({ page }) => {
    const accountName = 'TC60', email = 'TC60@riversilica.com', password = 'Pixfix@123', cpassword = 'Pixfix@123', role = 'user', uname = 'TC60', upassword = 'Pixfix@123', dashboardURL = 'http://10.0.90.64/#/dashboardMain';
    const addAccount = new AddAccount(page);
    const loginPage = new LoginPage(page);
    await addAccount.navigateToAccounts();
    await addAccount.createAccount(accountName, accountName);
    await addAccount.expectToastToContain(ToastMessages.ACCOUNT_CREATED);
    await addAccount.verifyAddedAccountName(accountName);
    await addAccount.expectToastToContain(ToastMessages.ACCOUNT_CREATED);
    await addAccount.openAccount(accountName);
    await addAccount.createUser(accountName, email, password, role, cpassword, '');
    await addAccount.expectToastToContain(ToastMessages.USER_CREATED)
    await loginPage.logout();
    await loginPage.loginwithnewusers(uname, upassword, dashboardURL);


});
})*/


