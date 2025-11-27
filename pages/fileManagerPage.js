import { expect } from "@playwright/test";
import { FmUploadDownloadPaths } from "../config/FilePath";
export class FileManagerPage {
  constructor(page) {
    this.page = page;
    // Common elements
    this.fileManagerLink = page.locator("//span[normalize-space()='File Manager']");
    this.nodeBtn = page.locator('//i[@class="fa-duotone fa-folder-open"]/parent::td/following-sibling::td[1]');
    this.uploadFileButton = page.locator("//*[normalize-space() = 'Upload File']");
    this.createFolderButton = page.locator("//button[normalize-space()='Create Folder']");
    this.searchField = page.getByPlaceholder("Seach...");
    this.fileInput = page.locator('input[type="file"]').first();
    this.uploadConfirmButton = page.locator('[class="btn btn-success"]');
    this.firstDeleteIcon = page.locator('(//I[@class="fa-light fa-trash"])[1]');
    this.confirmDeleteButton = page.locator('[class="swal2-confirm btn btn-sm btn-danger"]');
    this.emptyFolderMessage = page.locator('[class="text-center text-muted"]');
    this.backButton = page.locator(".fa-solid.fa-light.fa-arrow-left");
    this.fileCellLocator = page.locator('//td[@style="cursor: pointer;"]');
    // Folder creation
    this.folderNameInput = page.getByPlaceholder("Enter Folder Name");
    this.folderCreateConfirmButton = page.locator('[class="btn btn-success btn-sm"]');
    // File operations
    this.fileRows = page.locator("tbody tr");
    this.selectAllCheckbox = page.locator("//th[@class='no-sort']//input[@type='checkbox']");
    this.downloadIcon = page.locator('[class="fa-light fa-download"]');
    // Sorting
    this.nameSortButton = page.locator("//th[normalize-space()='Name']//*[name()='svg']");
    this.sizeSortButton = page.locator('//th[normalize-space()="Size"]//*[name()="svg"]');
    this.dateSortButton = page.locator("//th[normalize-space()='Date']//*[name()='svg']");
    // Viewer
    this.audioPlayer = page.locator("//audio[normalize-space()='Your browser does not support the audio tag.']");
    this.videoPlayer = page.locator("//video[normalize-space()='Your browser does not support the video tag.']");
    this.closeViewerButton = page.locator('[class="close-button"]');
    // Pagination
    this.nextPageButton = page.locator('[role="button"][class="btn btn-primary "]');

    this.thumbnailFolder = this.page.locator("//td[normalize-space()='thumbnail']");
    this.liveFolder = this.page.locator("//td[normalize-space()='live']");
    this.deletepopup = this.page.locator('[id="swal2-html-container"]');
    this.closeduploadpopup = this.page.locator('[class="btn btn-secondary"]');
    this.uploadcancelbtn = this.page.locator("//tbody//tr//td//span//i[@class='fa-light fa-xmark']");
    this.minimizebtn = this.page.locator('[class="btn btn-outline-primary"]');
    this.minimizebtn = this.page.locator('[class="btn btn-outline-primary"]');
    this.uploadbtn = this.page.locator('//button[normalize-space()="Upload File"]');
    this.uploadpage = this.page.locator('.btn.btn-outline-primary');
    this.extractionfilevisbibilty = this.page.locator("text=Extraction.mp4");
    this.pageSizeDropdown = page.locator('select.form-select.form-select-sm');
    this.pageSizeDropdown = page.locator('select.form-select.form-select-sm');

  }
  async navigateToFileManager() {
    await this.fileManagerLink.click();
  }
  async navigateToLivefolder() {
    await expect(this.liveFolder).toBeEnabled();
    await this.liveFolder.click();
  }
  async navigateToStorage() {
    await this.nodeBtn.click();
  }
  async uploadFiles(FmUploadDownloadPaths) {
    await this.uploadFileButton.click();
    await this.fileInput.setInputFiles(FmUploadDownloadPaths);
    await this.uploadConfirmButton.click();
  }
  async waitForUploadToComplete() {
    const locator = this.page.locator(".btn.btn-outline-primary");
    while (await locator.isVisible()) {
      await this.page.waitForTimeout(500);
    }
  }
  async createFolder(folderName) {
    await this.createFolderButton.click();
    await expect(this.folderNameInput).toBeEditable();
    await this.folderNameInput.fill(folderName);
    await this.folderCreateConfirmButton.click();
  }
  async verifyFileExists(filename) {
    const fileRow = this.fileRows.filter({
      has: this.page.locator(`td:has-text("${filename}")`),
    });
    await expect(fileRow).toHaveCount(1);
    return fileRow;
  }
  async searchForFile(searchTerm) {
    await this.searchField.fill(searchTerm);
  }

  async deleteFolder(folderName) {
    await this.searchForFile(folderName);
    await this.page.locator(`(//I[@class="fa-light fa-trash"])[2]`).click();
    await expect(this.page.locator('[id="swal2-title"]')).toHaveText("Delete Folder?");
    await expect(this.page.locator('[id="swal2-html-container"]')).toHaveText("Deletion of this folder will delete all contents inside.");
    await this.confirmDeleteButton.click();
    await expect(this.emptyFolderMessage).toBeVisible();
  }
  async downloadFile(filename, downloadPath) {
    const [download] = await Promise.all([
      this.page.waitForEvent("download"),
      this.page.click(`//td[normalize-space()='${filename}']/following-sibling::td//*[@class="fa-light fa-download"]`),
    ]);
    await download.saveAs(downloadPath);
  }
  async downloadFolder(folderName, downloadPath) {
    await this.searchForFile(folderName);
    const [download] = await Promise.all([
      this.page.waitForEvent("download"),
      this.downloadIcon.click(),
    ]);
    await download.saveAs(downloadPath);
  }
  async viewFile(filename) {
    await this.page.locator(`//td[normalize-space()='${filename}']`).click();
  }
  // async takeScreenshot(name) {
  //   await this.page.screenshot({ path: `${FmUploadDownloadPaths.screenshotFolder}${name}.png` });
  // }
  async takeScreenshot(name) {
    await this.page.screenshot({
      path: `${FmUploadDownloadPaths.screenshotFolder}${name}.png`,
      fullPage: true  // optional if you want full-page screenshot
    });
  }

  async navigateToFileManager() {
    await this.fileManagerLink.click();
  }
  fileLocatorByName(fileName) {
    return this.fileCellLocator.filter({ hasText: fileName });
  }

  async waitForFileToAppear(fileName, expectedCount) {
    if (expectedCount > 0) {
      await this.fileLocatorByName(fileName).first().waitFor({ state: "visible" });
    }
    await expect(this.fileLocatorByName(fileName)).toHaveCount(expectedCount);
  }

  async clickFile(fileName) {
    const fileLocator = this.fileLocatorByName(fileName);
    await fileLocator.click();
  }
  async selectPageSize(value) {
    await this.pageSizeDropdown.selectOption(value);
  }

  // getFileNameLocatorByKey(TC) {
  //   return this.page.locator(`//td[contains(normalize-space(), '${TC}')]`);
  // }
  async verifyFileNameNotVisible(TestCase) {
    const locator = this.page.locator(`//td[contains(normalize-space(), '${TestCase}')]`);
    await expect(locator).toHaveCount(0); // ensures element does not exist in DOM
  }
  async verifyFileNameVisible(TestCase) {
    const locator = this.page.locator(`//td[contains(normalize-space(), '${TestCase.TestCase}')]`);
    await expect(locator).toHaveCount(1);
    await locator.click();
  }
  // async HLSChunkStatus(chunkname) {
  //   const chunknamecheck = `//td[@title='${chunkname}']`;
  //   await expect(chunknamecheck).toHaveCount(0);
  // }

  async HLSChunkStatus(chunkname) {
    await this.page.waitForTimeout(3000);
    const chunkLocator = this.page.locator(`//td[@title='${chunkname.chunkname}']`);
    await expect(chunkLocator).toHaveCount(0);
  }


}
