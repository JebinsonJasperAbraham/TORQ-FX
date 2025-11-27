import { test } from '@playwright/test';
import { HLSTORQ } from '../../config/TestData.js';
import { FileManagerPage } from '../../pages/fileManagerPage.js';
import HLSPage from '../../pages/HLSPlayback.js';
import { JobPage } from '../../pages/JobPage.js';
import { NodePage } from '../../pages/NodePage.js';
import { validateJobStatus, validateJobStatusNoStoppingJob } from '../../UtilityTorq/utility.js';

test.describe.skip('TEST SUITE TORQ FX -> LOGIN CREATE NEW JOB', () => {
    let jobpage;
    let filemanager;
    test.beforeEach(async ({ page }) => {
        jobpage = new JobPage(page);
        nodepage = new NodePage(page);
        filemanager = new FileManagerPage(page);
        await page.goto('#/dashboardMain');
        await jobpage.TORQJobListPage();
        await jobpage.NewJobAddSource();
    });

    test.afterEach(async ({ page }) => {
        await jobpage.TORQSUBMENUFromJob();
        await page.reload()
        await page.waitForTimeout(2000);
        if (await jobpage.Stopvalidation.count() > 0) {
            await jobpage.clickAllStops();
        }
    });

    test.setTimeout(140000);
    test.skip('HLS-TORQ-FX| TC-> SOURCE', async ({ page }) => {
        const TestCase = 'sourceSRTL';
        await jobpage.JobNameDecoderScalingType(HLSTORQ[TestCase]);
        await jobpage.FileStreamInput(HLSTORQ[TestCase]);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(HLSTORQ[TestCase]);
        await jobpage.OutputButton();
        await jobpage.SRToutputListener(HLSTORQ[TestCase]);
        await jobpage.AddedOutputValidation(HLSTORQ[TestCase]);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
    });

    test('HLS-TORQ-FX| TC-> 1 | FILE STREAM | CREATE A JOB WITH HLS STREAMER AND CHECK THE OUTPUT', async ({ page }) => {
        const TestCase = 'TC1';
        await jobpage.JobNameDecoderScalingType(HLSTORQ[TestCase]);
        await jobpage.FileStreamInput(HLSTORQ[TestCase]);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(HLSTORQ[TestCase]);
        await jobpage.OutputButton();
        await jobpage.HLSoutput(HLSTORQ[TestCase]);
        await jobpage.AddedOutputValidation(HLSTORQ[TestCase]);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        await validateJobStatus(jobpage, test, page);
    });
    test('HLS-TORQ-FX| TC-> 2 | FILE STREAM | CREATE A JOB WITH HLS STREAMER WITH MULTI PROFILE AND ADD VARIANT FOR DIFFERENT PROFILES', async ({ page }) => {
        const TestCase = 'TC2';
        await jobpage.JobNameDecoderScalingType(HLSTORQ[TestCase]);
        await jobpage.FileStreamInput(HLSTORQ[TestCase]);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(HLSTORQ[TestCase]);
        await jobpage.OutputButton();
        await jobpage.HLSoutput(HLSTORQ[TestCase]);
        await jobpage.AddedOutputValidation(HLSTORQ[TestCase]);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        await validateJobStatus(jobpage, test, page);
    });
    test('HLS-TORQ-FX| TC-> 3 | FILE STREAM | CREATE HLS JOB AND CHANGE THE CHUNK DURATION AND CHECK THE PLAYBACK', async ({ page, request }) => {
        const TestCase = 'TC3';
        await jobpage.JobNameDecoderScalingType(HLSTORQ[TestCase]);
        await jobpage.FileStreamInput(HLSTORQ[TestCase]);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(HLSTORQ[TestCase]);
        await jobpage.OutputButton();
        await jobpage.HLSoutput(HLSTORQ[TestCase]);
        await jobpage.AddedOutputValidation(HLSTORQ[TestCase]);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        await page.waitForTimeout(10000);
        // await jobpage.StartStatusJob();
        await validateJobStatusNoStoppingJob(jobpage, test, page);
        // Step 2: Validate HLS Chunk Durations & Playback
        const hlsPage = new HLSPage(page, request);
        // Ideally, build masterUrl dynamically based on job name, 
        // but for now we keep it static for TC3
        const masterUrl = 'http://10.0.90.64:80/storage/device/QA/Node9064/live/12_HLS_TC3HLS/master.m3u8';
        // Pass expected min duration from test (no hardcoding in POM)
        const expectedMinDuration = 6;
        await hlsPage.validateHLSDurationsAndPlayback(masterUrl, expectedMinDuration);

    });
    test('HLS-TORQ-FX| TC-> 4 | FILE STREAM | CREATE A HLS JOB AND CHANGE THE CHUNK COUNT IN GUI AND CHECK THE OUTPUT.', async ({ page, request }) => {
        const TestCase = 'TC4';
        await jobpage.JobNameDecoderScalingType(HLSTORQ[TestCase]);
        await jobpage.FileStreamInput(HLSTORQ[TestCase]);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(HLSTORQ[TestCase]);
        await jobpage.OutputButton();
        await jobpage.HLSoutput(HLSTORQ[TestCase]);
        await jobpage.AddedOutputValidation(HLSTORQ[TestCase]);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        await validateJobStatusNoStoppingJob(jobpage, test, page);
        await page.waitForTimeout(10000);
        // 🔹 Step 2: Validate chunk count
        const hlsPage = new HLSPage(page, request);
        const masterUrl = "http://10.0.90.64:80/storage/device/QA/Node9064/live/12_HLS_TC4HLS/master.m3u8";

        const expectedChunkCount = 4; // pass dynamically if GUI sets it differently
        await hlsPage.validateHLSChunkCount(masterUrl, expectedChunkCount);
    });

    test.fixme('HLS-TORQ-FX| TC-> 5 | FILE STREAM | CREATE A HLS JOB AND CHANGE THE PLAYLIST IN UI AND CHECK THE OUTPUT', async ({ page, request }) => {


    });
    test.setTimeout(180000);
    test('HLS-TORQ-FX| TC-> 6 | FILE STREAM | CREATE HLS JOB WITH OVERWRITE OLD FILE FLAG ENABLED AND CHECK THE PLAYBACK', async ({ page, request }) => {
        const TestCase = 'TC6';
        await jobpage.JobNameDecoderScalingType(HLSTORQ[TestCase]);
        await jobpage.UDPInput(HLSTORQ[TestCase]);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(HLSTORQ[TestCase]);
        await jobpage.OutputButton();
        await jobpage.HLSoutput(HLSTORQ[TestCase]);
        await jobpage.AddedOutputValidation(HLSTORQ[TestCase]);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        await validateJobStatusNoStoppingJob(jobpage, test, page);
        await page.waitForTimeout(70000);
        await jobpage.StoppingJob();
        await jobpage.GoToconfigPage();
        await page.waitForTimeout(5000);
        await validateJobStatusNoStoppingJob(jobpage, test, page);
        await filemanager.navigateToFileManager()
        await filemanager.navigateToStorage();
        await filemanager.navigateToLivefolder();
        await filemanager.verifyFileNameVisible(HLSTORQ[TestCase]);
        await filemanager.HLSChunkStatus(HLSTORQ[TestCase]);
    });

    test.fixme('HLS-TORQ-FX| TC-> 7 | FILE STREAM | CREATE HLS STREAMER AND CHECK THE PLAYBACK IN VLC PLAYER', async ({ page, request }) => {


    });
    test.fixme('HLS-TORQ-FX| TC-> 8 |  FILE STREAM | CREATE HLS STREAMER AND CHECK THE PLAYBACK IN POT PLAYER', async ({ page, request }) => {


    });
    test.fixme('HLS-TORQ-FX| TC-> 9 |  FILE STREAM | CREATE HLS STREAMER AND CHECK THE PLAYBACK IN NATIVE HLS PLAYER', async ({ page, request }) => {


    });
    test('HLS-TORQ-FX| TC-> 10 |  FILE STREAM | STOP THE JOB AND CHECK CHUNK FILE IN THE STORAGE', async ({ page, request }) => {
        const TestCase = 'TC10';
        await jobpage.JobNameDecoderScalingType(HLSTORQ[TestCase]);
        await jobpage.FileStreamInput(HLSTORQ[TestCase]);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(HLSTORQ[TestCase]);
        await jobpage.OutputButton();
        await jobpage.HLSoutput(HLSTORQ[TestCase]);
        await jobpage.AddedOutputValidation(HLSTORQ[TestCase]);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        await validateJobStatus(jobpage, test, page);
        await filemanager.navigateToFileManager()
        await filemanager.navigateToStorage();
        await filemanager.navigateToLivefolder();
        await filemanager.verifyFileNameNotVisible(TestCase);
    });
});
test.describe('TEST SUITE TORQ FX -> LOGIN CREATE NEW JOB', () => {
    let jobpage;
    let filemanager;
    test.beforeEach(async ({ page }) => {
        jobpage = new JobPage(page);
        // nodepage = new NodePage(page);
        filemanager = new FileManagerPage(page);
        const TestCase = 'TC00';
        await page.goto('#/dashboardMain');
        await jobpage.TORQJobListPage();
        await jobpage.clickEditButton(HLSTORQ[TestCase].jobName)
        await validateJobStatusNoStoppingJob(jobpage, test, page)
        await jobpage.TORQSUBMENUFromJob();
        await jobpage.NewJobAddSource();
    });

    test.afterEach(async ({ page }) => {
        await jobpage.TORQSUBMENUFromJob();
        await page.reload()
        await page.waitForTimeout(2000);
        if (await jobpage.Stopvalidation.count() > 0) {
            await jobpage.clickAllStops();
        }
    });

    test.setTimeout(140000);
    test('HLS-TORQ-FX| TC-> 11 | UDP | CREATE A JOB WITH HLS STREAMER AND CHECK THE OUTPUT', async ({ page }) => {
        const TestCase = 'TC11';
        await jobpage.JobNameDecoderScalingType(HLSTORQ[TestCase]);
        await jobpage.UDPInput(HLSTORQ[TestCase]);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(HLSTORQ[TestCase]);
        await jobpage.OutputButton();
        await jobpage.HLSoutput(HLSTORQ[TestCase]);
        await jobpage.AddedOutputValidation(HLSTORQ[TestCase]);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        await validateJobStatus(jobpage, test, page);
    });

    test('HLS-TORQ-FX| TC-> 12 | UDP | CREATE A JOB WITH HLS STREAMER WITH MULTI PROFILE AND ADD VARIANT FOR DIFFERENT PROFILES', async ({ page }) => {
        const TestCase = 'TC12';
        await jobpage.JobNameDecoderScalingType(HLSTORQ[TestCase]);
        await jobpage.UDPInput(HLSTORQ[TestCase]);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(HLSTORQ[TestCase]);
        await jobpage.OutputButton();
        await jobpage.HLSoutput(HLSTORQ[TestCase]);
        await jobpage.AddedOutputValidation(HLSTORQ[TestCase]);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        await validateJobStatus(jobpage, test, page);
    });
    test('HLS-TORQ-FX| TC-> 13 | UDP | CREATE HLS JOB AND CHANGE THE CHUNK DURATION AND CHECK THE PLAYBACK', async ({ page, request }) => {
        const TestCase = 'TC13';
        await jobpage.JobNameDecoderScalingType(HLSTORQ[TestCase]);
        await jobpage.UDPInput(HLSTORQ[TestCase]);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(HLSTORQ[TestCase]);
        await jobpage.OutputButton();
        await jobpage.HLSoutput(HLSTORQ[TestCase]);
        await jobpage.AddedOutputValidation(HLSTORQ[TestCase]);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        await page.waitForTimeout(10000);
        // await jobpage.StartStatusJob();
        await validateJobStatusNoStoppingJob(jobpage, test, page);
        // Step 2: Validate HLS Chunk Durations & Playback
        const hlsPage = new HLSPage(page, request);
        // Ideally, build masterUrl dynamically based on job name, 
        // but for now we keep it static for TC3
        const masterUrl = 'http://10.0.90.64:80/storage/device/QA/Node9064/live/12_HLS_TC13HLS/master.m3u8';
        // Pass expected min duration from test (no hardcoding in POM)
        const expectedMinDuration = 6;
        await hlsPage.validateHLSDurationsAndPlayback(masterUrl, expectedMinDuration);

    });

    test('HLS-TORQ-FX| TC-> 14 | UDP | CREATE A HLS JOB AND CHANGE THE CHUNK COUNT IN GUI AND CHECK THE OUTPUT.', async ({ page, request }) => {
        const TestCase = 'TC14';
        await jobpage.JobNameDecoderScalingType(HLSTORQ[TestCase]);
        await jobpage.UDPInput(HLSTORQ[TestCase]);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(HLSTORQ[TestCase]);
        await jobpage.OutputButton();
        await jobpage.HLSoutput(HLSTORQ[TestCase]);
        await jobpage.AddedOutputValidation(HLSTORQ[TestCase]);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        await validateJobStatusNoStoppingJob(jobpage, test, page);
        await page.waitForTimeout(10000);
        // 🔹 Step 2: Validate chunk count
        const hlsPage = new HLSPage(page, request);
        const masterUrl = "http://10.0.90.64:80/storage/device/QA/Node9064/live/12_HLS_TC14HLS/master.m3u8";

        const expectedChunkCount = 4; // pass dynamically if GUI sets it differently
        await hlsPage.validateHLSChunkCount(masterUrl, expectedChunkCount);
    });

    test.fixme('HLS-TORQ-FX| TC-> 15 | UDP | CREATE A HLS JOB AND CHANGE THE PLAYLIST IN UI AND CHECK THE OUTPUT', async ({ page, request }) => {


    });
    test.setTimeout(180000);
    test('HLS-TORQ-FX| TC-> 16 | UDP | CREATE HLS JOB WITH OVERWRITE OLD FILE FLAG ENABLED AND CHECK THE PLAYBACK', async ({ page, request }) => {
        const TestCase = 'TC16';
        await jobpage.JobNameDecoderScalingType(HLSTORQ[TestCase]);
        await jobpage.UDPInput(HLSTORQ[TestCase]);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(HLSTORQ[TestCase]);
        await jobpage.OutputButton();
        await jobpage.HLSoutput(HLSTORQ[TestCase]);
        await jobpage.AddedOutputValidation(HLSTORQ[TestCase]);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        await validateJobStatusNoStoppingJob(jobpage, test, page);
        await page.waitForTimeout(70000);
        await jobpage.StoppingJob();
        await jobpage.GoToconfigPage();
        await page.waitForTimeout(5000);
        await validateJobStatusNoStoppingJob(jobpage, test, page);
        await filemanager.navigateToFileManager()
        await filemanager.navigateToStorage();
        await filemanager.navigateToLivefolder();
        await filemanager.verifyFileNameVisible(HLSTORQ[TestCase]);
        await filemanager.HLSChunkStatus(HLSTORQ[TestCase]);
    });
    test.fixme('HLS-TORQ-FX| TC-> 17 | UDP | CREATE HLS STREAMER AND CHECK THE PLAYBACK IN VLC PLAYER', async ({ page, request }) => {


    });
    test.fixme('HLS-TORQ-FX| TC-> 18 |  UDP | CREATE HLS STREAMER AND CHECK THE PLAYBACK IN POT PLAYER', async ({ page, request }) => {


    });
    test.fixme('HLS-TORQ-FX| TC-> 19 |  UDP | CREATE HLS STREAMER AND CHECK THE PLAYBACK IN NATIVE HLS PLAYER', async ({ page, request }) => {


    });
    test('HLS-TORQ-FX| TC-> 20 |  UDP | STOP THE JOB AND CHECK CHUNK FILE IN THE STORAGE', async ({ page, request }) => {
        const TestCase = 'TC20';
        await jobpage.JobNameDecoderScalingType(HLSTORQ[TestCase]);
        await jobpage.UDPInput(HLSTORQ[TestCase]);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(HLSTORQ[TestCase]);
        await jobpage.OutputButton();
        await jobpage.HLSoutput(HLSTORQ[TestCase]);
        await jobpage.AddedOutputValidation(HLSTORQ[TestCase]);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        await validateJobStatus(jobpage, test, page);
        await filemanager.navigateToFileManager()
        await filemanager.navigateToStorage();
        await filemanager.navigateToLivefolder();
        await filemanager.verifyFileNameNotVisible(TestCase);
    });
    test('HLS-TORQ-FX| TC-> 21 | SRT | CREATE A JOB WITH HLS STREAMER AND CHECK THE OUTPUT', async ({ page }) => {
        const TestCase = 'TC21';
        await jobpage.JobNameDecoderScalingType(HLSTORQ[TestCase]);
        await jobpage.SRTCallerInput(HLSTORQ[TestCase]);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(HLSTORQ[TestCase]);
        await jobpage.OutputButton();
        await jobpage.HLSoutput(HLSTORQ[TestCase]);
        await jobpage.AddedOutputValidation(HLSTORQ[TestCase]);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        await validateJobStatus(jobpage, test, page);
    });

    test('HLS-TORQ-FX| TC-> 22 | SRT | CREATE A JOB WITH HLS STREAMER WITH MULTI PROFILE AND ADD VARIANT FOR DIFFERENT PROFILES', async ({ page }) => {
        const TestCase = 'TC22';
        await jobpage.JobNameDecoderScalingType(HLSTORQ[TestCase]);
        await jobpage.SRTCallerInput(HLSTORQ[TestCase]);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(HLSTORQ[TestCase]);
        await jobpage.OutputButton();
        await jobpage.HLSoutput(HLSTORQ[TestCase]);
        await jobpage.AddedOutputValidation(HLSTORQ[TestCase]);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        await validateJobStatus(jobpage, test, page);
    });
    test('HLS-TORQ-FX| TC-> 23 | SRT | CREATE HLS JOB AND CHANGE THE CHUNK DURATION AND CHECK THE PLAYBACK', async ({ page, request }) => {
        const TestCase = 'TC23';
        await jobpage.JobNameDecoderScalingType(HLSTORQ[TestCase]);
        await jobpage.SRTCallerInput(HLSTORQ[TestCase]);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(HLSTORQ[TestCase]);
        await jobpage.OutputButton();
        await jobpage.HLSoutput(HLSTORQ[TestCase]);
        await jobpage.AddedOutputValidation(HLSTORQ[TestCase]);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        await page.waitForTimeout(10000);
        // await jobpage.StartStatusJob();
        await validateJobStatusNoStoppingJob(jobpage, test, page);
        // Step 2: Validate HLS Chunk Durations & Playback
        const hlsPage = new HLSPage(page, request);
        // Ideally, build masterUrl dynamically based on job name, 
        // but for now we keep it static for TC3
        const masterUrl = 'http://10.0.90.64:80/storage/device/QA/Node9064/live/12_HLS_TC23HLS/master.m3u8';
        // Pass expected min duration from test (no hardcoding in POM)
        const expectedMinDuration = 6;
        await hlsPage.validateHLSDurationsAndPlayback(masterUrl, expectedMinDuration);

    });

    test('HLS-TORQ-FX| TC-> 24 | SRT | CREATE A HLS JOB AND CHANGE THE CHUNK COUNT IN GUI AND CHECK THE OUTPUT.', async ({ page, request }) => {
        const TestCase = 'TC24';
        await jobpage.JobNameDecoderScalingType(HLSTORQ[TestCase]);
        await jobpage.SRTCallerInput(HLSTORQ[TestCase]);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(HLSTORQ[TestCase]);
        await jobpage.OutputButton();
        await jobpage.HLSoutput(HLSTORQ[TestCase]);
        await jobpage.AddedOutputValidation(HLSTORQ[TestCase]);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        await validateJobStatusNoStoppingJob(jobpage, test, page);
        await page.waitForTimeout(10000);
        // 🔹 Step 2: Validate chunk count
        const hlsPage = new HLSPage(page, request);
        const masterUrl = "http://10.0.90.64:80/storage/device/QA/Node9064/live/12_HLS_TC24HLS/master.m3u8";

        const expectedChunkCount = 4; // pass dynamically if GUI sets it differently
        await hlsPage.validateHLSChunkCount(masterUrl, expectedChunkCount);
    });

    test.fixme('HLS-TORQ-FX| TC-> 25 | SRT | CREATE A HLS JOB AND CHANGE THE PLAYLIST IN UI AND CHECK THE OUTPUT', async ({ page }) => {


    });
    test.setTimeout(180000);
    test('HLS-TORQ-FX| TC-> 26 | SRT | CREATE HLS JOB WITH OVERWRITE OLD FILE FLAG ENABLED AND CHECK THE PLAYBACK', async ({ page }) => {
        const TestCase = 'TC26';
        await jobpage.JobNameDecoderScalingType(HLSTORQ[TestCase]);
        await jobpage.SRTCallerInput(HLSTORQ[TestCase]);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(HLSTORQ[TestCase]);
        await jobpage.OutputButton();
        await jobpage.HLSoutput(HLSTORQ[TestCase]);
        await jobpage.AddedOutputValidation(HLSTORQ[TestCase]);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        await validateJobStatusNoStoppingJob(jobpage, test, page);
        await page.waitForTimeout(70000);
        await jobpage.StoppingJob();
        await jobpage.GoToconfigPage();
        await page.waitForTimeout(5000);
        await validateJobStatusNoStoppingJob(jobpage, test, page);
        await filemanager.navigateToFileManager()
        await filemanager.navigateToStorage();
        await filemanager.navigateToLivefolder();
        await filemanager.verifyFileNameVisible(HLSTORQ[TestCase]);
        await filemanager.HLSChunkStatus(HLSTORQ[TestCase]);
    });
    test.fixme('HLS-TORQ-FX| TC-> 27 | SRT | CREATE HLS STREAMER AND CHECK THE PLAYBACK IN VLC PLAYER', async ({ page }) => {


    });
    test.fixme('HLS-TORQ-FX| TC-> 28 |  SRT | CREATE HLS STREAMER AND CHECK THE PLAYBACK IN POT PLAYER', async ({ page }) => {


    });
    test.fixme('HLS-TORQ-FX| TC-> 29 |  SRT | CREATE HLS STREAMER AND CHECK THE PLAYBACK IN NATIVE HLS PLAYER', async ({ page }) => {


    });
    test('HLS-TORQ-FX| TC-> 30 |  SRT | STOP THE JOB AND CHECK CHUNK FILE IN THE STORAGE', async ({ page }) => {
        const TestCase = 'TC30';
        await jobpage.JobNameDecoderScalingType(HLSTORQ[TestCase]);
        await jobpage.SRTCallerInput(HLSTORQ[TestCase]);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(HLSTORQ[TestCase]);
        await jobpage.OutputButton();
        await jobpage.HLSoutput(HLSTORQ[TestCase]);
        await jobpage.AddedOutputValidation(HLSTORQ[TestCase]);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        await validateJobStatus(jobpage, test, page);
        await filemanager.navigateToFileManager()
        await filemanager.navigateToStorage();
        await filemanager.navigateToLivefolder();
        await filemanager.verifyFileNameNotVisible(TestCase);
    });

    test('HLS-TORQ-FX| TC-> 31 | SRT | CREATE A JOB WITH HLS STREAMER AND CHECK THE OUTPUT', async ({ page }) => {
        const TestCase = 'TC31';
        await jobpage.JobNameDecoderScalingType(HLSTORQ[TestCase]);
        await jobpage.RTMPInput(HLSTORQ[TestCase]);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(HLSTORQ[TestCase]);
        await jobpage.OutputButton();
        await jobpage.HLSoutput(HLSTORQ[TestCase]);
        await jobpage.AddedOutputValidation(HLSTORQ[TestCase]);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        await validateJobStatus(jobpage, test, page);
    });

    test('HLS-TORQ-FX| TC-> 32 | SRT | CREATE A JOB WITH HLS STREAMER WITH MULTI PROFILE AND ADD VARIANT FOR DIFFERENT PROFILES', async ({ page }) => {
        const TestCase = 'TC32';
        await jobpage.JobNameDecoderScalingType(HLSTORQ[TestCase]);
        await jobpage.RTMPInput(HLSTORQ[TestCase]);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(HLSTORQ[TestCase]);
        await jobpage.OutputButton();
        await jobpage.HLSoutput(HLSTORQ[TestCase]);
        await jobpage.AddedOutputValidation(HLSTORQ[TestCase]);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        await validateJobStatus(jobpage, test, page);
    });
    test('HLS-TORQ-FX| TC-> 33 | SRT | CREATE HLS JOB AND CHANGE THE CHUNK DURATION AND CHECK THE PLAYBACK', async ({ page, request }) => {
        const TestCase = 'TC33';
        await jobpage.JobNameDecoderScalingType(HLSTORQ[TestCase]);
        await jobpage.RTMPInput(HLSTORQ[TestCase]);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(HLSTORQ[TestCase]);
        await jobpage.OutputButton();
        await jobpage.HLSoutput(HLSTORQ[TestCase]);
        await jobpage.AddedOutputValidation(HLSTORQ[TestCase]);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        await page.waitForTimeout(10000);
        // await jobpage.StartStatusJob();
        await validateJobStatusNoStoppingJob(jobpage, test, page);
        // Step 2: Validate HLS Chunk Durations & Playback
        const hlsPage = new HLSPage(page, request);
        // Ideally, build masterUrl dynamically based on job name, 
        // but for now we keep it static for TC3
        const masterUrl = 'http://10.0.90.64:80/storage/device/QA/Node9064/live/12_HLS_TC33HLS/master.m3u8';
        // Pass expected min duration from test (no hardcoding in POM)
        const expectedMinDuration = 6;
        await hlsPage.validateHLSDurationsAndPlayback(masterUrl, expectedMinDuration);

    });

    test('HLS-TORQ-FX| TC-> 34 | SRT | CREATE A HLS JOB AND CHANGE THE CHUNK COUNT IN GUI AND CHECK THE OUTPUT.', async ({ page, request }) => {
        const TestCase = 'TC34';
        await jobpage.JobNameDecoderScalingType(HLSTORQ[TestCase]);
        await jobpage.RTMPInput(HLSTORQ[TestCase]);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(HLSTORQ[TestCase]);
        await jobpage.OutputButton();
        await jobpage.HLSoutput(HLSTORQ[TestCase]);
        await jobpage.AddedOutputValidation(HLSTORQ[TestCase]);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        await validateJobStatusNoStoppingJob(jobpage, test, page);
        await page.waitForTimeout(10000);
        // 🔹 Step 2: Validate chunk count
        const hlsPage = new HLSPage(page, request);
        const masterUrl = "http://10.0.90.64:80/storage/device/QA/Node9064/live/12_HLS_TC34HLS/master.m3u8";

        const expectedChunkCount = 4; // pass dynamically if GUI sets it differently
        await hlsPage.validateHLSChunkCount(masterUrl, expectedChunkCount);
    });

    test.fixme('HLS-TORQ-FX| TC-> 35 | SRT | CREATE A HLS JOB AND CHANGE THE PLAYLIST IN UI AND CHECK THE OUTPUT', async ({ page }) => {


    });
    test.setTimeout(180000);
    test('HLS-TORQ-FX| TC-> 36 | SRT | CREATE HLS JOB WITH OVERWRITE OLD FILE FLAG ENABLED AND CHECK THE PLAYBACK', async ({ page }) => {
        const TestCase = 'TC36';
        await jobpage.JobNameDecoderScalingType(HLSTORQ[TestCase]);
        await jobpage.RTMPInput(HLSTORQ[TestCase]);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(HLSTORQ[TestCase]);
        await jobpage.OutputButton();
        await jobpage.HLSoutput(HLSTORQ[TestCase]);
        await jobpage.AddedOutputValidation(HLSTORQ[TestCase]);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        await validateJobStatusNoStoppingJob(jobpage, test, page);
        await page.waitForTimeout(70000);
        await jobpage.StoppingJob();
        await jobpage.GoToconfigPage();
        await page.waitForTimeout(5000);
        await validateJobStatusNoStoppingJob(jobpage, test, page);
        await filemanager.navigateToFileManager()
        await filemanager.navigateToStorage();
        await filemanager.navigateToLivefolder();
        await filemanager.verifyFileNameVisible(HLSTORQ[TestCase]);
        await filemanager.HLSChunkStatus(HLSTORQ[TestCase]);
    });
    test.fixme('HLS-TORQ-FX| TC-> 37 | SRT | CREATE HLS STREAMER AND CHECK THE PLAYBACK IN VLC PLAYER', async ({ page }) => {


    });
    test.fixme('HLS-TORQ-FX| TC-> 38 |  SRT | CREATE HLS STREAMER AND CHECK THE PLAYBACK IN POT PLAYER', async ({ page }) => {


    });
    test.fixme('HLS-TORQ-FX| TC-> 39 |  SRT | CREATE HLS STREAMER AND CHECK THE PLAYBACK IN NATIVE HLS PLAYER', async ({ page }) => {


    });
    test('HLS-TORQ-FX| TC-> 40 |  SRT | STOP THE JOB AND CHECK CHUNK FILE IN THE STORAGE', async ({ page }) => {
        const TestCase = 'TC40';
        await jobpage.JobNameDecoderScalingType(HLSTORQ[TestCase]);
        await jobpage.RTMPInput(HLSTORQ[TestCase]);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(HLSTORQ[TestCase]);
        await jobpage.OutputButton();
        await jobpage.HLSoutput(HLSTORQ[TestCase]);
        await jobpage.AddedOutputValidation(HLSTORQ[TestCase]);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        await validateJobStatus(jobpage, test, page);
        await filemanager.navigateToFileManager()
        await filemanager.navigateToStorage();
        await filemanager.navigateToLivefolder();
        await filemanager.verifyFileNameNotVisible(TestCase);
    });
});