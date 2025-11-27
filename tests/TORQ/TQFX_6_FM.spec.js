import { expect, test } from "@playwright/test";
import { existsSync } from "fs";
import { FileManagerTestData, FmUploadDownloadPaths } from "../../config/TestData";
import { FileManagerPage } from "../../pages/fileManagerPage";

let fileManagerPage;
test.beforeEach(async ({ page }) => {
  fileManagerPage = new FileManagerPage(page);
  await page.goto('#/dashboardMain');
  await fileManagerPage.navigateToFileManager();
});


test("TC_FM_01_Check whether, is there any default folder in storage", async ({ page }) => {
  const { expectedFolders } = FileManagerTestData.TC_FM_01;
  await fileManagerPage.navigateToStorage();
  await page.waitForTimeout(3000);
  const allTexts = await fileManagerPage.fileCellLocator.allTextContents();
  console.log("Available folders:", allTexts);
  expect(allTexts).toEqual(expect.arrayContaining(expectedFolders));
});

test.fixme("TC_FM_02_Connect any external source", async ({ page }) => {
  // Test implementation to be added
});

test("TC_FM_03_Check date and time of the file", async ({ page }) => {
  const { uploadFile, expectedSize, expectedDate } = FileManagerTestData.TC_FM_03;
  await fileManagerPage.navigateToStorage();
  await fileManagerPage.uploadFiles([FmUploadDownloadPaths.TCFM03mp4]);
  await fileManagerPage.waitForUploadToComplete();
  const filenameSizeDate = fileManagerPage.fileRows
    .filter({ has: page.locator(`td:has-text("${uploadFile}")`) })
    .filter({ has: page.locator(`td:has-text("${expectedSize}")`) })
    .filter({ has: page.locator(`td:has-text("${expectedDate}")`) });
  await expect(filenameSizeDate).toHaveCount(1);
});

test("TC_FM_04_Check the functionality of search field", async ({ page }) => {
  const { searchTerms } = FileManagerTestData.TC_FM_04;
  await fileManagerPage.navigateToStorage();
  await expect(fileManagerPage.searchField).toBeEditable();
  for (const term of searchTerms) {
    await fileManagerPage.searchField.fill(term);
    await expect(fileManagerPage.searchField).toHaveCount(1);
  }
});

test("TC_FM_05_Try to delete the default folder", async ({ page }) => {
  const { folderName } = FileManagerTestData.TC_FM_05;
  await fileManagerPage.navigateToStorage();
  await fileManagerPage.deleteFolder(folderName);
});

test("TC_FM_06_Click Upload", async ({ page }) => {
  await fileManagerPage.navigateToStorage();
  await fileManagerPage.uploadbtn.click();
  await expect(fileManagerPage.uploadpage).toBeEnabled();
});

test("TC_FM_07_Upload the image, video file and audio file", async ({ page }) => {
  const { uploadFiles } = FileManagerTestData.TC_FM_07;
  await fileManagerPage.navigateToStorage();
  await fileManagerPage.uploadFiles([
    FmUploadDownloadPaths.automationImage,
    FmUploadDownloadPaths.bigBuckBunnyMP3,
    FmUploadDownloadPaths.testFileFM7,
  ]);
  await fileManagerPage.waitForUploadToComplete();
  for (const file of uploadFiles) {
    await fileManagerPage.verifyFileExists(file);
  }
});

test("TC_FM_08_Drag and drop the file", async ({ page }) => {
  const { uploadFile } = FileManagerTestData.TC_FM_08;
  await fileManagerPage.navigateToStorage();
  await fileManagerPage.uploadFileButton.click();
  await fileManagerPage.fileInput.setInputFiles(FmUploadDownloadPaths.extractionMP4);
  await fileManagerPage.uploadConfirmButton.click();
  await fileManagerPage.waitForUploadToComplete();
  await expect(fileManagerPage.extractionfilevisbibilty).toBeVisible();
  const mp4Row = fileManagerPage.fileRows.filter({
    has: page.locator(`td:has-text("${uploadFile}")`, { timeout: 10000 }),
  });

  await expect(mp4Row).toHaveCount(1);
});

test("TC_FM_09_While the file is uploading click minimize", async ({ page }) => {
  const { uploadFile, expectedCount } = FileManagerTestData.TC_FM_09;
  await fileManagerPage.navigateToStorage();
  await fileManagerPage.uploadFileButton.click();
  await fileManagerPage.fileInput.setInputFiles(FmUploadDownloadPaths.testFileFM9);
  await fileManagerPage.uploadConfirmButton.click();
  await fileManagerPage.minimizebtn.click();
  await fileManagerPage.waitForFileToAppear(uploadFile, expectedCount);
});

test("TC_FM_10_while the file is uploading click cancel", async ({ page }) => {
  const { uploadFile, expectedCount } = FileManagerTestData.TC_FM_10;
  await fileManagerPage.navigateToStorage();
  await fileManagerPage.uploadFileButton.click();
  await fileManagerPage.fileInput.setInputFiles(FmUploadDownloadPaths.testFileFM10);
  await fileManagerPage.uploadConfirmButton.click();
  await fileManagerPage.uploadcancelbtn.click();
  await fileManagerPage.waitForFileToAppear(uploadFile, expectedCount);
});

test("TC_FM_11_After selecting file click close", async ({ page }) => {
  const { uploadFile, expectedCount } = FileManagerTestData.TC_FM_11;
  await fileManagerPage.navigateToStorage();
  await fileManagerPage.uploadFileButton.click();
  await fileManagerPage.fileInput.setInputFiles(FmUploadDownloadPaths.testFileFM11);
  await fileManagerPage.closeduploadpopup.click();
  await fileManagerPage.waitForFileToAppear(uploadFile, expectedCount);
});

test("TC_FM_12_Create the folder", async ({ page }) => {
  const { folderName, expectedCount } = FileManagerTestData.TC_FM_12;
  await fileManagerPage.navigateToStorage();
  await fileManagerPage.createFolder(folderName);
  await fileManagerPage.waitForFileToAppear(folderName, expectedCount);
});

test("TC_FM_13_Create the folder with special symbol", async ({ page }) => {
  const { folderName, expectedDialog } = FileManagerTestData.TC_FM_13;
  await fileManagerPage.navigateToStorage();
  await fileManagerPage.createFolderButton.click();
  await expect(fileManagerPage.folderNameInput).toBeEditable();
  await fileManagerPage.folderNameInput.fill(folderName);
  page.once("dialog", async (dialog) => {
    expect(dialog.message()).toBe(expectedDialog);
    await dialog.accept();
  });
  await fileManagerPage.folderCreateConfirmButton.click();
});

test("TC_FM_14_Delete the folder which is empty", async ({ page }) => {
  const { folderName, expectedCount } = FileManagerTestData.TC_FM_14;
  await fileManagerPage.navigateToStorage();
  await fileManagerPage.createFolder(folderName);
  await fileManagerPage.waitForFileToAppear(folderName, expectedCount);
  await fileManagerPage.deleteFolder(folderName);
});

test("TC_FM_15_Without selection on any files click on the delete option", async ({ page }) => {
  await fileManagerPage.navigateToStorage();
  await expect(fileManagerPage.firstDeleteIcon).not.toBeEnabled();
});

test("TC_FM_16_Select any two files and click on the delete option", async ({ page }) => {
  const { folderName, uploadFiles } = FileManagerTestData.TC_FM_16;
  await fileManagerPage.navigateToStorage();
  await fileManagerPage.createFolder(folderName);
  await fileManagerPage.clickFile(folderName);
  await fileManagerPage.uploadFiles([
    FmUploadDownloadPaths.automationImage,
    FmUploadDownloadPaths.bigBuckBunnyMP3,
    FmUploadDownloadPaths.testFileFM16,
  ]);

  for (const file of uploadFiles) {
    await fileManagerPage.verifyFileExists(file);
  }
  await fileManagerPage.selectAllCheckbox.check();
  await fileManagerPage.firstDeleteIcon.click();
  await expect(fileManagerPage.deletepopup).toHaveText("Are you sure you want to delete the selected files?");
  await fileManagerPage.confirmDeleteButton.click();
  await expect(fileManagerPage.emptyFolderMessage).toBeVisible();
});

test.only("TC_FM_18_Click on download option", async ({ page }) => {
  const { folderName, uploadFile, downloadFile, downloadFolder } = FileManagerTestData.TC_FM_18;
  await fileManagerPage.navigateToStorage();
  await fileManagerPage.createFolder(folderName);
  await fileManagerPage.clickFile(folderName);
  await fileManagerPage.uploadFiles([FmUploadDownloadPaths.extractionMP4]);
  await fileManagerPage.waitForUploadToComplete();
  await fileManagerPage.verifyFileExists(uploadFile);
  const filePath = `${FmUploadDownloadPaths.downloadFolder}${downloadFile}`;
  await fileManagerPage.downloadFile(uploadFile, filePath);
  expect(existsSync(filePath)).toBe(true);
  await fileManagerPage.backButton.click();
  await expect(fileManagerPage.searchField).toBeEditable();
  await fileManagerPage.searchField.fill(folderName);
  await expect(fileManagerPage.searchField).toHaveCount(1);
  const filePathFolder = `${FmUploadDownloadPaths.downloadFolder}${downloadFolder}`;
  await fileManagerPage.downloadFolder(folderName, filePathFolder);
  expect(existsSync(filePathFolder)).toBe(true);
});

test.setTimeout(200000);
test("TC_FM_20_Upload file greater than 12GB and check.", async ({ page }) => {
  const { folderName, uploadFile } = FileManagerTestData.TC_FM_20;
  await fileManagerPage.navigateToStorage();
  await fileManagerPage.createFolder(folderName);
  await fileManagerPage.clickFile(folderName);
  await fileManagerPage.uploadFiles([FmUploadDownloadPaths.tenHoursMP4]);
  await fileManagerPage.waitForUploadToComplete();
  await fileManagerPage.verifyFileExists(uploadFile);
});

test.only("TC_FM_21_Verify the sorting order of Name, Size, and Date.", async ({ page }) => {
  const { screenshots } = FileManagerTestData.TC_FM_21;
  await fileManagerPage.navigateToStorage();
  await fileManagerPage.selectPageSize('100')
  await fileManagerPage.nameSortButton.click();
  await fileManagerPage.takeScreenshot(screenshots[0]);
  await fileManagerPage.nameSortButton.click();
  await fileManagerPage.takeScreenshot(screenshots[1]);
  await fileManagerPage.sizeSortButton.click();
  await fileManagerPage.takeScreenshot(screenshots[2]);
  await fileManagerPage.sizeSortButton.click();
  await fileManagerPage.takeScreenshot(screenshots[3]);
  await fileManagerPage.dateSortButton.click();
  await fileManagerPage.takeScreenshot(screenshots[4]);
  await fileManagerPage.dateSortButton.click();
  await fileManagerPage.takeScreenshot(screenshots[5]);
});

test("TC_FM_22_View the uploaded Image, audio and Video file,check full screen, pause, resume, Volume up/down.", async ({ page }) => {
  const { filesToView } = FileManagerTestData.TC_FM_22;
  await fileManagerPage.navigateToStorage();
  await fileManagerPage.selectPageSize('100')
  await fileManagerPage.viewFile(filesToView[0]);
  // await expect(fileManagerPage.audioPlayer).toBeVisible();
  await expect(fileManagerPage.closeViewerButton).toBeVisible();
  await fileManagerPage.closeViewerButton.click();
  await fileManagerPage.viewFile(filesToView[1]);
  await expect(fileManagerPage.videoPlayer).toBeVisible();
  await fileManagerPage.closeViewerButton.click();

});

test("TC_FM_23_Check the pagination of the Storage page.", async ({ page }) => {
  const { foldersToCreate } = FileManagerTestData.TC_FM_23;
  await fileManagerPage.navigateToStorage();
  for (const folder of foldersToCreate) {
    await fileManagerPage.createFolder(folder);
  }
  const firstRowPage1 = await fileManagerPage.fileRows.first().textContent();
  await fileManagerPage.nextPageButton.click();
  await page.waitForTimeout(1000);

  const firstRowPage2 = await fileManagerPage.fileRows.first().textContent();
  expect(firstRowPage2.trim()).not.toBe(firstRowPage1.trim());
  console.log("Page 2 loaded successfully and shows different content.");
});

test.setTimeout(200000);
test("TC_FM_24_View the file with Image, Mp3,MP4&MKV formats", async ({ page }) => {
  const { folderName, expectedCount, uploadFiles, filesToView } = FileManagerTestData.TC_FM_24;
  await fileManagerPage.navigateToStorage();
  await fileManagerPage.createFolder(folderName);
  await fileManagerPage.selectPageSize('100')
  await fileManagerPage.waitForFileToAppear(folderName, expectedCount);
  await fileManagerPage.searchField.fill(folderName);
  await fileManagerPage.clickFile(folderName);
  // await fileManagerPage.searchField.fill("");
  await fileManagerPage.uploadFiles([
    FmUploadDownloadPaths.testFileFM24MOV,
    FmUploadDownloadPaths.bigBuckBunnyMP3,
    FmUploadDownloadPaths.testFileFM24MP4,
  ]);

  await fileManagerPage.waitForUploadToComplete();
  // await expect(fileManagerPage.audioPlayer).toBeVisible();
  await page.waitForTimeout(2000);
  await fileManagerPage.viewFile(filesToView[1])
  await page.waitForTimeout(2000);
  if (await fileManagerPage.closeViewerButton.isVisible()) {
    await fileManagerPage.closeViewerButton.click();
  }
  await page.waitForTimeout(2000);
  await fileManagerPage.viewFile(filesToView[2])
  if (await fileManagerPage.videoPlayer.toBeVisible()) {
    await page.waitForTimeout(2000);
    await fileManagerPage.closeViewerButton.click();

  }
  await page.waitForTimeout(2000);
  await fileManagerPage.viewFile(filesToView[3])
  if (await fileManagerPage.videoPlayer.toBeVisible()) {
    await page.waitForTimeout(2000);
    await fileManagerPage.closeViewerButton.click();

  }

});

test.fixme("TC_FM_25_View the file with other formats.", async ({ page }) => {
  // Test implementation to be added
});