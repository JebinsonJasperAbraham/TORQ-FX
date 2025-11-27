import { test } from '@playwright/test';
import { SRTTORQ } from '../../config/TestData.js';
import { JobPage } from '../../pages/JobPage.js';
import { NodePage } from '../../pages/NodePage.js';
import { NoStartingButStopping, ShouldBeStremLossAndNoThumbnail, validateJobStatus, validateJobStatusNoStartingStoppingJob, validateJobStatusNoStoppingJob } from '../../UtilityTorq/utility.js';
// import { validateJobStatus } from '../../UtilityTorq/utility.js';
test.describe('TEST SUITE TORQ FX -> LOGIN CREATE NEW JOB', () => {
    let jobpage;
    let nodepage;
    test.beforeEach(async ({ page }) => {
        jobpage = new JobPage(page);
        nodepage = new NodePage(page);
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

    // test.setTimeout(140000);
    test.setTimeout(140000);
    test('SRT-TORQ-FX| TC-> SOURCE SRTL', async ({ page }) => {
        const TestCase = 'sourceSRTL';
        await jobpage.JobNameDecoderScalingType(SRTTORQ[TestCase]);
        await jobpage.FileStreamInput(SRTTORQ[TestCase]);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(SRTTORQ[TestCase]);
        await jobpage.OutputButton();
        await jobpage.SRToutputListener(SRTTORQ[TestCase]);
        await jobpage.AddedOutputValidation(SRTTORQ[TestCase]);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
    });

    test('SRT-TORQ-FX| TC-> 01 | VERIFY THAT AN SRT LISTENER (SOURCE JOB) CAN SEND DATA TO AN SRT CALLER, WITH UDP OUTPUT', async ({ page }) => {
        const TestCase = 'TC1';
        await jobpage.JobNameDecoderScalingType(SRTTORQ[TestCase]);
        await jobpage.SRTCallerInput(SRTTORQ[TestCase]);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(SRTTORQ[TestCase]);
        await jobpage.OutputButton();
        await jobpage.udpoutput(SRTTORQ[TestCase]);
        await jobpage.AddedOutputValidation(SRTTORQ[TestCase]);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        await jobpage.TORQSUBMENUFromJob();
        await jobpage.clickEditButton(SRTTORQ[TestCase].jobName);
        await validateJobStatusNoStoppingJob(jobpage, test, page);
        await jobpage.TORQSUBMENUFromJob();
        await jobpage.clickEditButton(SRTTORQ[TestCase].jobNameSecondary);
        await validateJobStatus(jobpage, test, page);
        await jobpage.TORQSUBMENUFromJob();
        await jobpage.clickStopButton(SRTTORQ[TestCase].jobName);
    });
    test('SRT-TORQ-FX| TC-> 02 | START SRT CALLER JOB WITHOUT STARTING THE SOURCE JOB', async ({ page }) => {
        const TestCase = 'TC2';
        await jobpage.JobNameDecoderScalingType(SRTTORQ[TestCase]);
        await jobpage.SRTCallerInput(SRTTORQ[TestCase]);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(SRTTORQ[TestCase]);
        await jobpage.OutputButton();
        await jobpage.udpoutput(SRTTORQ[TestCase]);
        await jobpage.AddedOutputValidation(SRTTORQ[TestCase]);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        await jobpage.StatPage.click();
        await jobpage.StartStatusJob();
        await ShouldBeStremLossAndNoThumbnail(jobpage, test, page);
        await jobpage.TORQSUBMENUFromJob();
        await jobpage.clickStartButton(SRTTORQ[TestCase].jobName);
        await jobpage.clickEditButton(SRTTORQ[TestCase].jobNameSecondary);
        await NoStartingButStopping(jobpage, test, page);
        await jobpage.TORQSUBMENUFromJob();
        await jobpage.clickStopButton(SRTTORQ[TestCase].jobName);
    });
    test('SRT-TORQ-FX| TC-> 03 | START BOTH SRT CALLER AND SOURCE JOB / STOP BOTH SRT CALLER AND SOURCE JOB', async ({ page }) => {
        const TestCase = 'TC3';
        await jobpage.JobNameDecoderScalingType(SRTTORQ[TestCase]);
        await jobpage.SRTCallerInput(SRTTORQ[TestCase]);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(SRTTORQ[TestCase]);
        await jobpage.OutputButton();
        await jobpage.udpoutput(SRTTORQ[TestCase]);
        await jobpage.AddedOutputValidation(SRTTORQ[TestCase]);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        await jobpage.TORQJobListPage();
        await jobpage.checkBoxJob(SRTTORQ[TestCase].jobName);
        await jobpage.checkBoxJob(SRTTORQ[TestCase].jobNameSecondary);
        await jobpage.BulkStartJob()
        await jobpage.clickEditButtonAndStatPage(SRTTORQ[TestCase].jobName);
        await validateJobStatusNoStartingStoppingJob(jobpage, test, page)
        await jobpage.TORQSUBMENUFromJob();
        await jobpage.clickEditButtonAndStatPage(SRTTORQ[TestCase].jobNameSecondary);
        await validateJobStatusNoStartingStoppingJob(jobpage, test, page)
        await jobpage.TORQSUBMENUFromJob();
        await jobpage.checkBoxJob(SRTTORQ[TestCase].jobName);
        await jobpage.checkBoxJob(SRTTORQ[TestCase].jobNameSecondary);
        await jobpage.BulkStopJob()

    });
    test('SRT-TORQ-FX| TC-> 04 | SOURCE JOB WITH HIGH MUXER RATE', async ({ page }) => {
        const TestCase = 'TC4';
        await jobpage.JobNameDecoderScalingType(SRTTORQ[TestCase]);
        await jobpage.SRTCallerInput(SRTTORQ[TestCase]);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(SRTTORQ[TestCase]);
        await jobpage.OutputButton();
        await jobpage.udpoutput(SRTTORQ[TestCase]);
        await jobpage.AddedOutputValidation(SRTTORQ[TestCase]);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        await jobpage.TORQSUBMENUFromJob();
        await jobpage.clickEditButton(SRTTORQ[TestCase].jobName);
        await jobpage.OutputButton();
        await jobpage.ModifyBitrate(SRTTORQ[TestCase]);
        await jobpage.JobUpdationPopUp();
        await validateJobStatusNoStoppingJob(jobpage, test, page)
        await jobpage.TORQSUBMENUFromJob();
        await jobpage.clickStartButton(SRTTORQ[TestCase].jobNameSecondary);
        await jobpage.clickEditButton(SRTTORQ[TestCase].jobNameSecondary)
        await validateJobStatusNoStartingStoppingJob(jobpage, test, page)
        await jobpage.TORQSUBMENUFromJob();
        await nodepage.GotoNodeLogs('torq_engine')
        await nodepage.verifyKeywordInFirstN('UNDERFLOW', 20);
        await jobpage.TORQSUBMENUFromJob();
        await jobpage.clickStopButton(SRTTORQ[TestCase].jobNameSecondary);
        await jobpage.clickStopButton(SRTTORQ[TestCase].jobName);

    });
    test('SRT-TORQ-FX| TC-> 05 | CREATE SOURCE JOB WITH OUT PASSWORD AND SECONDARY JOB WITH PASSWORD', async ({ page }) => {
        const TestCase = 'TC5';
        await jobpage.JobNameDecoderScalingType(SRTTORQ[TestCase]);
        await jobpage.SRTCallerInput(SRTTORQ[TestCase]);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(SRTTORQ[TestCase]);
        await jobpage.OutputButton();
        await jobpage.udpoutput(SRTTORQ[TestCase]);
        await jobpage.AddedOutputValidation(SRTTORQ[TestCase]);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        await jobpage.TORQSUBMENUFromJob();
        await jobpage.clickEditButton(SRTTORQ[TestCase].jobName);
        await jobpage.OutputButton();
        await jobpage.ModifyBitrate(SRTTORQ[TestCase]);
        await jobpage.JobUpdationPopUp();
        await validateJobStatusNoStoppingJob(jobpage, test, page);
        await jobpage.TORQSUBMENUFromJob();
        await jobpage.clickStartButton(SRTTORQ[TestCase].jobNameSecondary);
        await jobpage.clickEditButtonAndStatPage(SRTTORQ[TestCase].jobNameSecondary)
        await ShouldBeStremLossAndNoThumbnail(jobpage, test, page)
        await jobpage.TORQSUBMENUFromJob();
        await jobpage.clickStopButton(SRTTORQ[TestCase].jobNameSecondary);
        await jobpage.clickStopButton(SRTTORQ[TestCase].jobName)

    });
    test('SRT-TORQ-FX| TC-> 06 | CREATE SOURCE JOB AND SECONDARY JOB WITH PASSWORD', async ({ page }) => {
        const TestCase = 'TC6';
        await jobpage.JobNameDecoderScalingType(SRTTORQ[TestCase]);
        await jobpage.SRTCallerInput(SRTTORQ[TestCase]);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(SRTTORQ[TestCase]);
        await jobpage.OutputButton();
        await jobpage.udpoutput(SRTTORQ[TestCase]);
        await jobpage.AddedOutputValidation(SRTTORQ[TestCase]);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        await jobpage.TORQSUBMENUFromJob();
        await jobpage.clickEditButton(SRTTORQ[TestCase].jobName);
        await jobpage.OutputButton();
        await jobpage.ModifyPassword(SRTTORQ[TestCase]);
        await jobpage.JobUpdationPopUp();
        await validateJobStatusNoStoppingJob(jobpage, test, page);
        await jobpage.TORQSUBMENUFromJob();
        await jobpage.clickEditButton(SRTTORQ[TestCase].jobNameSecondary);
        await validateJobStatus(jobpage, test, page)
        await jobpage.TORQSUBMENUFromJob();
        await jobpage.clickStopButton(SRTTORQ[TestCase].jobName)
    });
    test('SRT-TORQ-FX| TC-> 07 | CREATE SOURCE JOB AND SECONDARY JOB WITH PASSWORD', async ({ page }) => {
        const TestCase = 'TC7';
        await jobpage.JobNameDecoderScalingType(SRTTORQ[TestCase]);
        await jobpage.SRTCallerInput(SRTTORQ[TestCase]);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(SRTTORQ[TestCase]);
        await jobpage.OutputButton();
        await jobpage.udpoutput(SRTTORQ[TestCase]);
        await jobpage.AddedOutputValidation(SRTTORQ[TestCase]);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        await jobpage.TORQSUBMENUFromJob();
        await jobpage.clickEditButton(SRTTORQ[TestCase].jobName);
        await jobpage.OutputButton();
        await jobpage.ModifyPassword(SRTTORQ[TestCase]);
        await jobpage.JobUpdationPopUp();
        await validateJobStatusNoStoppingJob(jobpage, test, page);
        await jobpage.TORQSUBMENUFromJob();
        await jobpage.clickStartButton(SRTTORQ[TestCase].jobNameSecondary);
        await jobpage.clickEditButtonAndStatPage(SRTTORQ[TestCase].jobNameSecondary);
        await ShouldBeStremLossAndNoThumbnail(jobpage, test, page)
        await jobpage.TORQSUBMENUFromJob();
        await jobpage.clickStopButton(SRTTORQ[TestCase].jobNameSecondary)
        await jobpage.clickStopButton(SRTTORQ[TestCase].jobName)
    });
    test.fixme('SRT-TORQ-FX| TC-> 08 | CHECK THE PLAYBACK OF UDP OUTPUT', async ({ page }) => {

    });

    test('SRT-TORQ-FX| TC-> 09 | VERIFY THAT AN SRT LISTENER (SOURCE JOB) CAN SEND DATA TO AN SRT CALLER, WITH SRT LISTENER OUTPUT', async ({ page }) => {
        const TestCase = 'TC9';
        await jobpage.JobNameDecoderScalingType(SRTTORQ[TestCase]);
        await jobpage.SRTCallerInput(SRTTORQ[TestCase]);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(SRTTORQ[TestCase]);
        await jobpage.OutputButton();
        await jobpage.SRToutputListener(SRTTORQ[TestCase]);
        await jobpage.AddedOutputValidation(SRTTORQ[TestCase]);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        await jobpage.TORQSUBMENUFromJob();
        await jobpage.clickEditButton(SRTTORQ[TestCase].jobName);
        await jobpage.OutputButton();
        await jobpage.ModifyPassword(SRTTORQ[TestCase]);
        await jobpage.JobUpdationPopUp();
        await validateJobStatusNoStoppingJob(jobpage, test, page);
        await jobpage.TORQSUBMENUFromJob();
        await jobpage.clickEditButton(SRTTORQ[TestCase].jobNameSecondary);
        await validateJobStatus(jobpage, test, page);
        await jobpage.TORQSUBMENUFromJob();
        await jobpage.clickStopButton(SRTTORQ[TestCase].jobName);
    });
    test('SRT-TORQ-FX| TC-> 10 | START SRT CALLER JOB WITHOUT STARTING THE SOURCE JOB', async ({ page }) => {
        const TestCase = 'TC10';
        await jobpage.JobNameDecoderScalingType(SRTTORQ[TestCase]);
        await jobpage.SRTCallerInput(SRTTORQ[TestCase]);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(SRTTORQ[TestCase]);
        await jobpage.OutputButton();
        await jobpage.SRToutputListener(SRTTORQ[TestCase]);
        await jobpage.AddedOutputValidation(SRTTORQ[TestCase]);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        await jobpage.StatPage.click();
        await jobpage.StartStatusJob();
        await ShouldBeStremLossAndNoThumbnail(jobpage, test, page);
        await jobpage.TORQSUBMENUFromJob();
        await jobpage.clickStartButton(SRTTORQ[TestCase].jobName);
        await jobpage.clickEditButton(SRTTORQ[TestCase].jobNameSecondary);
        await NoStartingButStopping(jobpage, test, page);
        await jobpage.TORQSUBMENUFromJob();
        await jobpage.clickStopButton(SRTTORQ[TestCase].jobName);
    });
    test('SRT-TORQ-FX| TC-> 11 | START BOTH SRT CALLER AND SOURCE JOB / STOP BOTH SRT CALLER AND SOURCE JOB', async ({ page }) => {
        const TestCase = 'TC11';
        await jobpage.JobNameDecoderScalingType(SRTTORQ[TestCase]);
        await jobpage.SRTCallerInput(SRTTORQ[TestCase]);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(SRTTORQ[TestCase]);
        await jobpage.OutputButton();
        await jobpage.SRToutputListener(SRTTORQ[TestCase]);
        await jobpage.AddedOutputValidation(SRTTORQ[TestCase]);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        await jobpage.TORQJobListPage();
        await jobpage.checkBoxJob(SRTTORQ[TestCase].jobName);
        await jobpage.checkBoxJob(SRTTORQ[TestCase].jobNameSecondary);
        await jobpage.BulkStartJob()
        await jobpage.clickEditButtonAndStatPage(SRTTORQ[TestCase].jobName);
        await validateJobStatusNoStartingStoppingJob(jobpage, test, page)
        await jobpage.TORQSUBMENUFromJob();
        await jobpage.clickEditButtonAndStatPage(SRTTORQ[TestCase].jobNameSecondary);
        await validateJobStatusNoStartingStoppingJob(jobpage, test, page)
        await jobpage.TORQSUBMENUFromJob();
        await jobpage.checkBoxJob(SRTTORQ[TestCase].jobName);
        await jobpage.checkBoxJob(SRTTORQ[TestCase].jobNameSecondary);
        await jobpage.BulkStopJob()

    });
    test('SRT-TORQ-FX| TC-> 12 | SOURCE JOB WITH HIGH MUXER RATE', async ({ page }) => {
        const TestCase = 'TC12';
        await jobpage.JobNameDecoderScalingType(SRTTORQ[TestCase]);
        await jobpage.SRTCallerInput(SRTTORQ[TestCase]);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(SRTTORQ[TestCase]);
        await jobpage.OutputButton();
        await jobpage.SRToutputListener(SRTTORQ[TestCase]);
        await jobpage.AddedOutputValidation(SRTTORQ[TestCase]);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        await jobpage.TORQSUBMENUFromJob();
        await jobpage.clickEditButton(SRTTORQ[TestCase].jobName);
        await jobpage.OutputButton();
        await jobpage.ModifyBitrate(SRTTORQ[TestCase]);
        await jobpage.JobUpdationPopUp();
        await validateJobStatusNoStoppingJob(jobpage, test, page)
        await jobpage.TORQSUBMENUFromJob();
        await jobpage.clickStartButton(SRTTORQ[TestCase].jobNameSecondary);
        await jobpage.clickEditButton(SRTTORQ[TestCase].jobNameSecondary)
        await validateJobStatusNoStartingStoppingJob(jobpage, test, page)
        await jobpage.TORQSUBMENUFromJob();
        await nodepage.GotoNodeLogs('torq_engine')
        await nodepage.verifyKeywordInFirstN('UNDERFLOW', 20);
        await jobpage.TORQSUBMENUFromJob();
        await jobpage.clickStopButton(SRTTORQ[TestCase].jobNameSecondary);
        await jobpage.clickStopButton(SRTTORQ[TestCase].jobName);

    });
    test('SRT-TORQ-FX| TC-> 13 | CREATE SOURCE JOB WITH OUT PASSWORD AND SECONDARY JOB WITH PASSWORD', async ({ page }) => {
        const TestCase = 'TC13';
        await jobpage.JobNameDecoderScalingType(SRTTORQ[TestCase]);
        await jobpage.SRTCallerInput(SRTTORQ[TestCase]);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(SRTTORQ[TestCase]);
        await jobpage.OutputButton();
        await jobpage.SRToutputListener(SRTTORQ[TestCase]);
        await jobpage.AddedOutputValidation(SRTTORQ[TestCase]);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        await jobpage.TORQSUBMENUFromJob();
        await jobpage.clickEditButton(SRTTORQ[TestCase].jobName);
        await jobpage.OutputButton();
        await jobpage.ModifyBitrate(SRTTORQ[TestCase]);
        await jobpage.JobUpdationPopUp();
        await validateJobStatusNoStoppingJob(jobpage, test, page);
        await jobpage.TORQSUBMENUFromJob();
        await jobpage.clickStartButton(SRTTORQ[TestCase].jobNameSecondary);
        await jobpage.clickEditButtonAndStatPage(SRTTORQ[TestCase].jobNameSecondary)
        await ShouldBeStremLossAndNoThumbnail(jobpage, test, page)
        await jobpage.TORQSUBMENUFromJob();
        await jobpage.clickStopButton(SRTTORQ[TestCase].jobNameSecondary);
        await jobpage.clickStopButton(SRTTORQ[TestCase].jobName)

    });
    test('SRT-TORQ-FX| TC-> 14 | CREATE SOURCE JOB AND SECONDARY JOB WITH PASSWORD', async ({ page }) => {
        const TestCase = 'TC14';
        await jobpage.JobNameDecoderScalingType(SRTTORQ[TestCase]);
        await jobpage.SRTCallerInput(SRTTORQ[TestCase]);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(SRTTORQ[TestCase]);
        await jobpage.OutputButton();
        await jobpage.SRToutputListener(SRTTORQ[TestCase]);
        await jobpage.AddedOutputValidation(SRTTORQ[TestCase]);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        await jobpage.TORQSUBMENUFromJob();
        await jobpage.clickEditButton(SRTTORQ[TestCase].jobName);
        await jobpage.OutputButton();
        await jobpage.ModifyPassword(SRTTORQ[TestCase]);
        await jobpage.JobUpdationPopUp();
        await validateJobStatusNoStoppingJob(jobpage, test, page);
        await jobpage.TORQSUBMENUFromJob();
        await jobpage.clickEditButton(SRTTORQ[TestCase].jobNameSecondary);
        await validateJobStatus(jobpage, test, page)
        await jobpage.TORQSUBMENUFromJob();
        await jobpage.clickStopButton(SRTTORQ[TestCase].jobName)
    });
    test('SRT-TORQ-FX| TC-> 15 | CREATE SOURCE JOB AND SECONDARY JOB WITH PASSWORD', async ({ page }) => {
        const TestCase = 'TC15';
        await jobpage.JobNameDecoderScalingType(SRTTORQ[TestCase]);
        await jobpage.SRTCallerInput(SRTTORQ[TestCase]);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(SRTTORQ[TestCase]);
        await jobpage.OutputButton();
        await jobpage.SRToutputListener(SRTTORQ[TestCase]);
        await jobpage.AddedOutputValidation(SRTTORQ[TestCase]);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        await jobpage.TORQSUBMENUFromJob();
        await jobpage.clickEditButton(SRTTORQ[TestCase].jobName);
        await jobpage.OutputButton();
        await jobpage.ModifyPassword(SRTTORQ[TestCase]);
        await jobpage.JobUpdationPopUp();
        await validateJobStatusNoStoppingJob(jobpage, test, page);
        await jobpage.TORQSUBMENUFromJob();
        await jobpage.clickStartButton(SRTTORQ[TestCase].jobNameSecondary);
        await jobpage.clickEditButtonAndStatPage(SRTTORQ[TestCase].jobNameSecondary);
        await ShouldBeStremLossAndNoThumbnail(jobpage, test, page)
        await jobpage.TORQSUBMENUFromJob();
        await jobpage.clickStopButton(SRTTORQ[TestCase].jobNameSecondary)
        await jobpage.clickStopButton(SRTTORQ[TestCase].jobName)
    });
    test.fixme('SRT-TORQ-FX| TC-> 16 | CHECK THE PLAYBACK OF SRT LISTENER OUTPUT', async ({ page }) => {

    });

    test('SRT-TORQ-FX| TC-> 17 | VERIFY THAT AN SRT LISTENER (SOURCE JOB) CAN SEND DATA TO AN SRT CALLER, WITH RTMP OUTPUT', async ({ page }) => {
        const TestCase = 'TC17';
        await jobpage.JobNameDecoderScalingType(SRTTORQ[TestCase]);
        await jobpage.SRTCallerInput(SRTTORQ[TestCase]);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(SRTTORQ[TestCase]);
        await jobpage.OutputButton();
        await jobpage.RTMPOutput(SRTTORQ[TestCase]);
        await jobpage.AddedOutputValidation(SRTTORQ[TestCase]);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        await jobpage.TORQSUBMENUFromJob();
        await jobpage.clickEditButton(SRTTORQ[TestCase].jobName);
        await jobpage.OutputButton();
        await jobpage.ModifyPassword(SRTTORQ[TestCase]);
        await jobpage.JobUpdationPopUp();
        await validateJobStatusNoStoppingJob(jobpage, test, page);
        await jobpage.TORQSUBMENUFromJob();
        await jobpage.clickEditButton(SRTTORQ[TestCase].jobNameSecondary);
        await validateJobStatus(jobpage, test, page);
        await jobpage.TORQSUBMENUFromJob();
        await jobpage.clickStopButton(SRTTORQ[TestCase].jobName);
    });
    test('SRT-TORQ-FX| TC-> 18 | START SRT CALLER JOB WITHOUT STARTING THE SOURCE JOB', async ({ page }) => {
        const TestCase = 'TC18';
        await jobpage.JobNameDecoderScalingType(SRTTORQ[TestCase]);
        await jobpage.SRTCallerInput(SRTTORQ[TestCase]);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(SRTTORQ[TestCase]);
        await jobpage.OutputButton();
        await jobpage.RTMPOutput(SRTTORQ[TestCase]);
        await jobpage.AddedOutputValidation(SRTTORQ[TestCase]);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        await jobpage.StatPage.click();
        await jobpage.StartStatusJob();
        await ShouldBeStremLossAndNoThumbnail(jobpage, test, page);
        await jobpage.TORQSUBMENUFromJob();
        await jobpage.clickStartButton(SRTTORQ[TestCase].jobName);
        await jobpage.clickEditButton(SRTTORQ[TestCase].jobNameSecondary);
        await NoStartingButStopping(jobpage, test, page);
        await jobpage.TORQSUBMENUFromJob();
        await jobpage.clickStopButton(SRTTORQ[TestCase].jobName);
    });
    test('SRT-TORQ-FX| TC-> 19 | START BOTH SRT CALLER AND SOURCE JOB / STOP BOTH SRT CALLER AND SOURCE JOB', async ({ page }) => {
        const TestCase = 'TC19';
        await jobpage.JobNameDecoderScalingType(SRTTORQ[TestCase]);
        await jobpage.SRTCallerInput(SRTTORQ[TestCase]);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(SRTTORQ[TestCase]);
        await jobpage.OutputButton();
        await jobpage.RTMPOutput(SRTTORQ[TestCase]);
        await jobpage.AddedOutputValidation(SRTTORQ[TestCase]);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        await jobpage.TORQJobListPage();
        await jobpage.checkBoxJob(SRTTORQ[TestCase].jobName);
        await jobpage.checkBoxJob(SRTTORQ[TestCase].jobNameSecondary);
        await jobpage.BulkStartJob()
        await jobpage.clickEditButtonAndStatPage(SRTTORQ[TestCase].jobName);
        await validateJobStatusNoStartingStoppingJob(jobpage, test, page)
        await jobpage.TORQSUBMENUFromJob();
        await jobpage.clickEditButtonAndStatPage(SRTTORQ[TestCase].jobNameSecondary);
        await validateJobStatusNoStartingStoppingJob(jobpage, test, page)
        await jobpage.TORQSUBMENUFromJob();
        await jobpage.checkBoxJob(SRTTORQ[TestCase].jobName);
        await jobpage.checkBoxJob(SRTTORQ[TestCase].jobNameSecondary);
        await jobpage.BulkStopJob()

    });
    test('SRT-TORQ-FX| TC-> 20 | SOURCE JOB WITH HIGH MUXER RATE', async ({ page }) => {
        const TestCase = 'TC20';
        await jobpage.JobNameDecoderScalingType(SRTTORQ[TestCase]);
        await jobpage.SRTCallerInput(SRTTORQ[TestCase]);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(SRTTORQ[TestCase]);
        await jobpage.OutputButton();
        await jobpage.RTMPOutput(SRTTORQ[TestCase]);
        await jobpage.AddedOutputValidation(SRTTORQ[TestCase]);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        await jobpage.TORQSUBMENUFromJob();
        await jobpage.clickEditButton(SRTTORQ[TestCase].jobName);
        await jobpage.OutputButton();
        await jobpage.ModifyBitrate(SRTTORQ[TestCase]);
        await jobpage.JobUpdationPopUp();
        await validateJobStatusNoStoppingJob(jobpage, test, page)
        await jobpage.TORQSUBMENUFromJob();
        await jobpage.clickStartButton(SRTTORQ[TestCase].jobNameSecondary);
        await jobpage.clickEditButton(SRTTORQ[TestCase].jobNameSecondary)
        await validateJobStatusNoStartingStoppingJob(jobpage, test, page)
        await jobpage.TORQSUBMENUFromJob();
        await nodepage.GotoNodeLogs('torq_engine')
        await nodepage.verifyKeywordInFirstN('UNDERFLOW', 20);
        await jobpage.TORQSUBMENUFromJob();
        await jobpage.clickStopButton(SRTTORQ[TestCase].jobNameSecondary);
        await jobpage.clickStopButton(SRTTORQ[TestCase].jobName);

    });
    test('SRT-TORQ-FX| TC-> 21 | CREATE SOURCE JOB WITH OUT PASSWORD AND SECONDARY JOB WITH PASSWORD', async ({ page }) => {
        const TestCase = 'TC21';
        await jobpage.JobNameDecoderScalingType(SRTTORQ[TestCase]);
        await jobpage.SRTCallerInput(SRTTORQ[TestCase]);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(SRTTORQ[TestCase]);
        await jobpage.OutputButton();
        await jobpage.RTMPOutput(SRTTORQ[TestCase]);
        await jobpage.AddedOutputValidation(SRTTORQ[TestCase]);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        await jobpage.TORQSUBMENUFromJob();
        await jobpage.clickEditButton(SRTTORQ[TestCase].jobName);
        await jobpage.OutputButton();
        await jobpage.ModifyBitrate(SRTTORQ[TestCase]);
        await jobpage.JobUpdationPopUp();
        await validateJobStatusNoStoppingJob(jobpage, test, page);
        await jobpage.TORQSUBMENUFromJob();
        await jobpage.clickStartButton(SRTTORQ[TestCase].jobNameSecondary);
        await jobpage.clickEditButtonAndStatPage(SRTTORQ[TestCase].jobNameSecondary)
        await ShouldBeStremLossAndNoThumbnail(jobpage, test, page)
        await jobpage.TORQSUBMENUFromJob();
        await jobpage.clickStopButton(SRTTORQ[TestCase].jobNameSecondary);
        await jobpage.clickStopButton(SRTTORQ[TestCase].jobName)

    });
    test('SRT-TORQ-FX| TC-> 22 | CREATE SOURCE JOB AND SECONDARY JOB WITH PASSWORD', async ({ page }) => {
        const TestCase = 'TC22';
        await jobpage.JobNameDecoderScalingType(SRTTORQ[TestCase]);
        await jobpage.SRTCallerInput(SRTTORQ[TestCase]);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(SRTTORQ[TestCase]);
        await jobpage.OutputButton();
        await jobpage.RTMPOutput(SRTTORQ[TestCase]);
        await jobpage.AddedOutputValidation(SRTTORQ[TestCase]);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        await jobpage.TORQSUBMENUFromJob();
        await jobpage.clickEditButton(SRTTORQ[TestCase].jobName);
        await jobpage.OutputButton();
        await jobpage.ModifyPassword(SRTTORQ[TestCase]);
        await jobpage.JobUpdationPopUp();
        await validateJobStatusNoStoppingJob(jobpage, test, page);
        await jobpage.TORQSUBMENUFromJob();
        await jobpage.clickEditButton(SRTTORQ[TestCase].jobNameSecondary);
        await validateJobStatus(jobpage, test, page)
        await jobpage.TORQSUBMENUFromJob();
        await jobpage.clickStopButton(SRTTORQ[TestCase].jobName)
    });
    test('SRT-TORQ-FX| TC-> 23 | CREATE SOURCE JOB AND SECONDARY JOB WITH PASSWORD', async ({ page }) => {
        const TestCase = 'TC23';
        await jobpage.JobNameDecoderScalingType(SRTTORQ[TestCase]);
        await jobpage.SRTCallerInput(SRTTORQ[TestCase]);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(SRTTORQ[TestCase]);
        await jobpage.OutputButton();
        await jobpage.RTMPOutput(SRTTORQ[TestCase]);
        await jobpage.AddedOutputValidation(SRTTORQ[TestCase]);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        await jobpage.TORQSUBMENUFromJob();
        await jobpage.clickEditButton(SRTTORQ[TestCase].jobName);
        await jobpage.OutputButton();
        await jobpage.ModifyPassword(SRTTORQ[TestCase]);
        await jobpage.JobUpdationPopUp();
        await validateJobStatusNoStoppingJob(jobpage, test, page);
        await jobpage.TORQSUBMENUFromJob();
        await jobpage.clickStartButton(SRTTORQ[TestCase].jobNameSecondary);
        await jobpage.clickEditButtonAndStatPage(SRTTORQ[TestCase].jobNameSecondary);
        await ShouldBeStremLossAndNoThumbnail(jobpage, test, page)
        await jobpage.TORQSUBMENUFromJob();
        await jobpage.clickStopButton(SRTTORQ[TestCase].jobNameSecondary)
        await jobpage.clickStopButton(SRTTORQ[TestCase].jobName)
    });
    test.fixme('SRT-TORQ-FX| TC-> 24 | CHECK THE PLAYBACK OF RTMP OUTPUT', async ({ page }) => {

    });
    test('SRT-TORQ-FX| TC-> 25 | VERIFY THAT AN SRT LISTENER (SOURCE JOB) CAN SEND DATA TO AN SRT CALLER, WITH HLS OUTPUT', async ({ page }) => {
        const TestCase = 'TC25';
        await jobpage.JobNameDecoderScalingType(SRTTORQ[TestCase]);
        await jobpage.SRTCallerInput(SRTTORQ[TestCase]);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(SRTTORQ[TestCase]);
        await jobpage.OutputButton();
        await jobpage.HLSoutput(SRTTORQ[TestCase]);
        await jobpage.AddedOutputValidation(SRTTORQ[TestCase]);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        await jobpage.TORQSUBMENUFromJob();
        await jobpage.clickEditButton(SRTTORQ[TestCase].jobName);
        await jobpage.OutputButton();
        await jobpage.ModifyPassword(SRTTORQ[TestCase]);
        await jobpage.JobUpdationPopUp();
        await validateJobStatusNoStoppingJob(jobpage, test, page);
        await jobpage.TORQSUBMENUFromJob();
        await jobpage.clickEditButton(SRTTORQ[TestCase].jobNameSecondary);
        await validateJobStatus(jobpage, test, page);
        await jobpage.TORQSUBMENUFromJob();
        await jobpage.clickStopButton(SRTTORQ[TestCase].jobName);
    });
    test('SRT-TORQ-FX| TC-> 26 | START SRT CALLER JOB WITHOUT STARTING THE SOURCE JOB', async ({ page }) => {
        const TestCase = 'TC26';
        await jobpage.JobNameDecoderScalingType(SRTTORQ[TestCase]);
        await jobpage.SRTCallerInput(SRTTORQ[TestCase]);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(SRTTORQ[TestCase]);
        await jobpage.OutputButton();
        await jobpage.HLSoutput(SRTTORQ[TestCase]);
        await jobpage.AddedOutputValidation(SRTTORQ[TestCase]);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        await jobpage.StatPage.click();
        await jobpage.StartStatusJob();
        await ShouldBeStremLossAndNoThumbnail(jobpage, test, page);
        await jobpage.TORQSUBMENUFromJob();
        await jobpage.clickStartButton(SRTTORQ[TestCase].jobName);
        await jobpage.clickEditButton(SRTTORQ[TestCase].jobNameSecondary);
        await NoStartingButStopping(jobpage, test, page);
        await jobpage.TORQSUBMENUFromJob();
        await jobpage.clickStopButton(SRTTORQ[TestCase].jobName);
    });
    test('SRT-TORQ-FX| TC-> 27 | START BOTH SRT CALLER AND SOURCE JOB / STOP BOTH SRT CALLER AND SOURCE JOB', async ({ page }) => {
        const TestCase = 'TC27';
        await jobpage.JobNameDecoderScalingType(SRTTORQ[TestCase]);
        await jobpage.SRTCallerInput(SRTTORQ[TestCase]);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(SRTTORQ[TestCase]);
        await jobpage.OutputButton();
        await jobpage.HLSoutput(SRTTORQ[TestCase]);
        await jobpage.AddedOutputValidation(SRTTORQ[TestCase]);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        await jobpage.TORQJobListPage();
        await jobpage.checkBoxJob(SRTTORQ[TestCase].jobName);
        await jobpage.checkBoxJob(SRTTORQ[TestCase].jobNameSecondary);
        await jobpage.BulkStartJob()
        await jobpage.clickEditButtonAndStatPage(SRTTORQ[TestCase].jobName);
        await validateJobStatusNoStartingStoppingJob(jobpage, test, page)
        await jobpage.TORQSUBMENUFromJob();
        await jobpage.clickEditButtonAndStatPage(SRTTORQ[TestCase].jobNameSecondary);
        await validateJobStatusNoStartingStoppingJob(jobpage, test, page)
        await jobpage.TORQSUBMENUFromJob();
        await jobpage.checkBoxJob(SRTTORQ[TestCase].jobName);
        await jobpage.checkBoxJob(SRTTORQ[TestCase].jobNameSecondary);
        await jobpage.BulkStopJob()

    });
    test('SRT-TORQ-FX| TC-> 28 | SOURCE JOB WITH HIGH MUXER RATE', async ({ page }) => {
        const TestCase = 'TC28';
        await jobpage.JobNameDecoderScalingType(SRTTORQ[TestCase]);
        await jobpage.SRTCallerInput(SRTTORQ[TestCase]);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(SRTTORQ[TestCase]);
        await jobpage.OutputButton();
        await jobpage.HLSoutput(SRTTORQ[TestCase]);
        await jobpage.AddedOutputValidation(SRTTORQ[TestCase]);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        await jobpage.TORQSUBMENUFromJob();
        await jobpage.clickEditButton(SRTTORQ[TestCase].jobName);
        await jobpage.OutputButton();
        await jobpage.ModifyBitrate(SRTTORQ[TestCase]);
        await jobpage.JobUpdationPopUp();
        await validateJobStatusNoStoppingJob(jobpage, test, page)
        await jobpage.TORQSUBMENUFromJob();
        await jobpage.clickStartButton(SRTTORQ[TestCase].jobNameSecondary);
        await jobpage.clickEditButton(SRTTORQ[TestCase].jobNameSecondary)
        await validateJobStatusNoStartingStoppingJob(jobpage, test, page)
        await jobpage.TORQSUBMENUFromJob();
        await nodepage.GotoNodeLogs('torq_engine')
        await nodepage.verifyKeywordInFirstN('UNDERFLOW', 20);
        await jobpage.TORQSUBMENUFromJob();
        await jobpage.clickStopButton(SRTTORQ[TestCase].jobNameSecondary);
        await jobpage.clickStopButton(SRTTORQ[TestCase].jobName);

    });
    test('SRT-TORQ-FX| TC-> 29 | CREATE SOURCE JOB WITH OUT PASSWORD AND SECONDARY JOB WITH PASSWORD', async ({ page }) => {
        const TestCase = 'TC29';
        await jobpage.JobNameDecoderScalingType(SRTTORQ[TestCase]);
        await jobpage.SRTCallerInput(SRTTORQ[TestCase]);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(SRTTORQ[TestCase]);
        await jobpage.OutputButton();
        await jobpage.HLSoutput(SRTTORQ[TestCase]);
        await jobpage.AddedOutputValidation(SRTTORQ[TestCase]);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        await jobpage.TORQSUBMENUFromJob();
        await jobpage.clickEditButton(SRTTORQ[TestCase].jobName);
        await jobpage.OutputButton();
        await jobpage.ModifyBitrate(SRTTORQ[TestCase]);
        await jobpage.JobUpdationPopUp();
        await validateJobStatusNoStoppingJob(jobpage, test, page);
        await jobpage.TORQSUBMENUFromJob();
        await jobpage.clickStartButton(SRTTORQ[TestCase].jobNameSecondary);
        await jobpage.clickEditButtonAndStatPage(SRTTORQ[TestCase].jobNameSecondary)
        await ShouldBeStremLossAndNoThumbnail(jobpage, test, page)
        await jobpage.TORQSUBMENUFromJob();
        await jobpage.clickStopButton(SRTTORQ[TestCase].jobNameSecondary);
        await jobpage.clickStopButton(SRTTORQ[TestCase].jobName)

    });
    test('SRT-TORQ-FX| TC-> 30 | CREATE SOURCE JOB AND SECONDARY JOB WITH PASSWORD', async ({ page }) => {
        const TestCase = 'TC30';
        await jobpage.JobNameDecoderScalingType(SRTTORQ[TestCase]);
        await jobpage.SRTCallerInput(SRTTORQ[TestCase]);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(SRTTORQ[TestCase]);
        await jobpage.OutputButton();
        await jobpage.HLSoutput(SRTTORQ[TestCase]);
        await jobpage.AddedOutputValidation(SRTTORQ[TestCase]);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        await jobpage.TORQSUBMENUFromJob();
        await jobpage.clickEditButton(SRTTORQ[TestCase].jobName);
        await jobpage.OutputButton();
        await jobpage.ModifyPassword(SRTTORQ[TestCase]);
        await jobpage.JobUpdationPopUp();
        await validateJobStatusNoStoppingJob(jobpage, test, page);
        await jobpage.TORQSUBMENUFromJob();
        await jobpage.clickEditButton(SRTTORQ[TestCase].jobNameSecondary);
        await validateJobStatus(jobpage, test, page)
        await jobpage.TORQSUBMENUFromJob();
        await jobpage.clickStopButton(SRTTORQ[TestCase].jobName)
    });
    test('SRT-TORQ-FX| TC-> 31 | CREATE SOURCE JOB AND SECONDARY JOB WITH PASSWORD', async ({ page }) => {
        const TestCase = 'TC31';
        await jobpage.JobNameDecoderScalingType(SRTTORQ[TestCase]);
        await jobpage.SRTCallerInput(SRTTORQ[TestCase]);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(SRTTORQ[TestCase]);
        await jobpage.OutputButton();
        await jobpage.HLSoutput(SRTTORQ[TestCase]);
        await jobpage.AddedOutputValidation(SRTTORQ[TestCase]);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        await jobpage.TORQSUBMENUFromJob();
        await jobpage.clickEditButton(SRTTORQ[TestCase].jobName);
        await jobpage.OutputButton();
        await jobpage.ModifyPassword(SRTTORQ[TestCase]);
        await jobpage.JobUpdationPopUp();
        await validateJobStatusNoStoppingJob(jobpage, test, page);
        await jobpage.TORQSUBMENUFromJob();
        await jobpage.clickStartButton(SRTTORQ[TestCase].jobNameSecondary);
        await jobpage.clickEditButtonAndStatPage(SRTTORQ[TestCase].jobNameSecondary);
        await ShouldBeStremLossAndNoThumbnail(jobpage, test, page)
        await jobpage.TORQSUBMENUFromJob();
        await jobpage.clickStopButton(SRTTORQ[TestCase].jobNameSecondary)
        await jobpage.clickStopButton(SRTTORQ[TestCase].jobName)
    });
    test.fixme('SRT-TORQ-FX| TC-> 32 | CHECK THE PLAYBACK OF HLS OUTPUT', async ({ page }) => {

    });
    test('SRT-TORQ-FX| TC-> 33 | VERIFY THAT AN SRT LISTENER (SOURCE JOB) CAN SEND DATA TO AN SRT SRT CALLER, WITH HLS OUTPUT', async ({ page }) => {
        const TestCase = 'TC33';
        await jobpage.JobNameDecoderScalingType(SRTTORQ[TestCase]);
        await jobpage.SRTCallerInput(SRTTORQ[TestCase]);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(SRTTORQ[TestCase]);
        await jobpage.OutputButton();
        await jobpage.SRToutputCaller(SRTTORQ[TestCase]);
        await jobpage.AddedOutputValidation(SRTTORQ[TestCase]);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        await jobpage.TORQSUBMENUFromJob();
        await jobpage.clickEditButton(SRTTORQ[TestCase].jobName);
        await jobpage.OutputButton();
        await jobpage.ModifyPassword(SRTTORQ[TestCase]);
        await jobpage.JobUpdationPopUp();
        await validateJobStatusNoStoppingJob(jobpage, test, page);
        await jobpage.TORQSUBMENUFromJob();
        await jobpage.clickEditButton(SRTTORQ[TestCase].jobNameSecondary);
        await validateJobStatus(jobpage, test, page);
        await jobpage.TORQSUBMENUFromJob();
        await jobpage.clickStopButton(SRTTORQ[TestCase].jobName);
    });
    test('SRT-TORQ-FX| TC-> 34 | START SRT CALLER JOB WITHOUT STARTING THE SOURCE JOB', async ({ page }) => {
        const TestCase = 'TC34';
        await jobpage.JobNameDecoderScalingType(SRTTORQ[TestCase]);
        await jobpage.SRTCallerInput(SRTTORQ[TestCase]);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(SRTTORQ[TestCase]);
        await jobpage.OutputButton();
        await jobpage.SRToutputCaller(SRTTORQ[TestCase]);
        await jobpage.AddedOutputValidation(SRTTORQ[TestCase]);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        await jobpage.StatPage.click();
        await jobpage.StartStatusJob();
        await ShouldBeStremLossAndNoThumbnail(jobpage, test, page);
        await jobpage.TORQSUBMENUFromJob();
        await jobpage.clickStartButton(SRTTORQ[TestCase].jobName);
        await jobpage.clickEditButton(SRTTORQ[TestCase].jobNameSecondary);
        await NoStartingButStopping(jobpage, test, page);
        await jobpage.TORQSUBMENUFromJob();
        await jobpage.clickStopButton(SRTTORQ[TestCase].jobName);
    });
    test('SRT-TORQ-FX| TC-> 35 | START BOTH SRT CALLER AND SOURCE JOB / STOP BOTH SRT CALLER AND SOURCE JOB', async ({ page }) => {
        const TestCase = 'TC35';
        await jobpage.JobNameDecoderScalingType(SRTTORQ[TestCase]);
        await jobpage.SRTCallerInput(SRTTORQ[TestCase]);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(SRTTORQ[TestCase]);
        await jobpage.OutputButton();
        await jobpage.SRToutputCaller(SRTTORQ[TestCase]);
        await jobpage.AddedOutputValidation(SRTTORQ[TestCase]);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        await jobpage.TORQJobListPage();
        await jobpage.checkBoxJob(SRTTORQ[TestCase].jobName);
        await jobpage.checkBoxJob(SRTTORQ[TestCase].jobNameSecondary);
        await jobpage.BulkStartJob()
        await jobpage.clickEditButtonAndStatPage(SRTTORQ[TestCase].jobName);
        await validateJobStatusNoStartingStoppingJob(jobpage, test, page)
        await jobpage.TORQSUBMENUFromJob();
        await jobpage.clickEditButtonAndStatPage(SRTTORQ[TestCase].jobNameSecondary);
        await validateJobStatusNoStartingStoppingJob(jobpage, test, page)
        await jobpage.TORQSUBMENUFromJob();
        await jobpage.checkBoxJob(SRTTORQ[TestCase].jobName);
        await jobpage.checkBoxJob(SRTTORQ[TestCase].jobNameSecondary);
        await jobpage.BulkStopJob()

    });
    test('SRT-TORQ-FX| TC-> 36 | SOURCE JOB WITH HIGH MUXER RATE', async ({ page }) => {
        const TestCase = 'TC36';
        await jobpage.JobNameDecoderScalingType(SRTTORQ[TestCase]);
        await jobpage.SRTCallerInput(SRTTORQ[TestCase]);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(SRTTORQ[TestCase]);
        await jobpage.OutputButton();
        await jobpage.SRToutputCaller(SRTTORQ[TestCase]);
        await jobpage.AddedOutputValidation(SRTTORQ[TestCase]);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        await jobpage.TORQSUBMENUFromJob();
        await jobpage.clickEditButton(SRTTORQ[TestCase].jobName);
        await jobpage.OutputButton();
        await jobpage.ModifyBitrate(SRTTORQ[TestCase]);
        await jobpage.JobUpdationPopUp();
        await validateJobStatusNoStoppingJob(jobpage, test, page)
        await jobpage.TORQSUBMENUFromJob();
        await jobpage.clickStartButton(SRTTORQ[TestCase].jobNameSecondary);
        await jobpage.clickEditButton(SRTTORQ[TestCase].jobNameSecondary)
        await validateJobStatusNoStartingStoppingJob(jobpage, test, page)
        await jobpage.TORQSUBMENUFromJob();
        await nodepage.GotoNodeLogs('torq_engine')
        await nodepage.verifyKeywordInFirstN('UNDERFLOW', 20);
        await jobpage.TORQSUBMENUFromJob();
        await jobpage.clickStopButton(SRTTORQ[TestCase].jobNameSecondary);
        await jobpage.clickStopButton(SRTTORQ[TestCase].jobName);

    });
    test('SRT-TORQ-FX| TC-> 37 | CREATE SOURCE JOB WITH OUT PASSWORD AND SECONDARY JOB WITH PASSWORD', async ({ page }) => {
        const TestCase = 'TC37';
        await jobpage.JobNameDecoderScalingType(SRTTORQ[TestCase]);
        await jobpage.SRTCallerInput(SRTTORQ[TestCase]);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(SRTTORQ[TestCase]);
        await jobpage.OutputButton();
        await jobpage.SRToutputCaller(SRTTORQ[TestCase]);
        await jobpage.AddedOutputValidation(SRTTORQ[TestCase]);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        await jobpage.TORQSUBMENUFromJob();
        await jobpage.clickEditButton(SRTTORQ[TestCase].jobName);
        await jobpage.OutputButton();
        await jobpage.ModifyBitrate(SRTTORQ[TestCase]);
        await jobpage.JobUpdationPopUp();
        await validateJobStatusNoStoppingJob(jobpage, test, page);
        await jobpage.TORQSUBMENUFromJob();
        await jobpage.clickStartButton(SRTTORQ[TestCase].jobNameSecondary);
        await jobpage.clickEditButtonAndStatPage(SRTTORQ[TestCase].jobNameSecondary)
        await ShouldBeStremLossAndNoThumbnail(jobpage, test, page)
        await jobpage.TORQSUBMENUFromJob();
        await jobpage.clickStopButton(SRTTORQ[TestCase].jobNameSecondary);
        await jobpage.clickStopButton(SRTTORQ[TestCase].jobName)

    });
    test('SRT-TORQ-FX| TC-> 38 | CREATE SOURCE JOB AND SECONDARY JOB WITH PASSWORD', async ({ page }) => {
        const TestCase = 'TC38';
        await jobpage.JobNameDecoderScalingType(SRTTORQ[TestCase]);
        await jobpage.SRTCallerInput(SRTTORQ[TestCase]);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(SRTTORQ[TestCase]);
        await jobpage.OutputButton();
        await jobpage.SRToutputCaller(SRTTORQ[TestCase]);
        await jobpage.AddedOutputValidation(SRTTORQ[TestCase]);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        await jobpage.TORQSUBMENUFromJob();
        await jobpage.clickEditButton(SRTTORQ[TestCase].jobName);
        await jobpage.OutputButton();
        await jobpage.ModifyPassword(SRTTORQ[TestCase]);
        await jobpage.JobUpdationPopUp();
        await validateJobStatusNoStoppingJob(jobpage, test, page);
        await jobpage.TORQSUBMENUFromJob();
        await jobpage.clickEditButton(SRTTORQ[TestCase].jobNameSecondary);
        await validateJobStatus(jobpage, test, page)
        await jobpage.TORQSUBMENUFromJob();
        await jobpage.clickStopButton(SRTTORQ[TestCase].jobName)
    });
    test('SRT-TORQ-FX| TC-> 39 | CREATE SOURCE JOB AND SECONDARY JOB WITH PASSWORD', async ({ page }) => {
        const TestCase = 'TC39';
        await jobpage.JobNameDecoderScalingType(SRTTORQ[TestCase]);
        await jobpage.SRTCallerInput(SRTTORQ[TestCase]);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(SRTTORQ[TestCase]);
        await jobpage.OutputButton();
        await jobpage.SRToutputCaller(SRTTORQ[TestCase]);
        await jobpage.AddedOutputValidation(SRTTORQ[TestCase]);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        await jobpage.TORQSUBMENUFromJob();
        await jobpage.clickEditButton(SRTTORQ[TestCase].jobName);
        await jobpage.OutputButton();
        await jobpage.ModifyPassword(SRTTORQ[TestCase]);
        await jobpage.JobUpdationPopUp();
        await validateJobStatusNoStoppingJob(jobpage, test, page);
        await jobpage.TORQSUBMENUFromJob();
        await jobpage.clickStartButton(SRTTORQ[TestCase].jobNameSecondary);
        await jobpage.clickEditButtonAndStatPage(SRTTORQ[TestCase].jobNameSecondary);
        await ShouldBeStremLossAndNoThumbnail(jobpage, test, page)
        await jobpage.TORQSUBMENUFromJob();
        await jobpage.clickStopButton(SRTTORQ[TestCase].jobNameSecondary)
        await jobpage.clickStopButton(SRTTORQ[TestCase].jobName)
    });
    test.fixme('SRT-TORQ-FX| TC-> 40 | CHECK THE PLAYBACK OF SRT CALLER OUTPUT', async ({ page }) => {

    });
    test('SRT-TORQ-FX| TC-> 41 | VERIFY THAT AN SRT CALLER (SOURCE JOB) CAN SEND DATA TO AN SRT CALLER, WITH UDP OUTPUT', async ({ page }) => {
        const TestCase = 'TC41';
        await jobpage.JobNameDecoderScalingType(SRTTORQ[TestCase]);
        await jobpage.SRTListenerInput(SRTTORQ[TestCase]);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(SRTTORQ[TestCase]);
        await jobpage.OutputButton();
        await jobpage.udpoutput(SRTTORQ[TestCase]);
        await jobpage.AddedOutputValidation(SRTTORQ[TestCase]);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        await jobpage.TORQSUBMENUFromJob();
        await jobpage.clickEditButton(SRTTORQ[TestCase].jobName);
        await jobpage.OutputButton();
        await jobpage.ModifyPassword(SRTTORQ[TestCase]);
        await jobpage.JobUpdationPopUp();
        await jobpage.OutputButton();
        await jobpage.SRTModedropdown(SRTTORQ[TestCase]);
        await jobpage.JobUpdationPopUp();
        await validateJobStatusNoStoppingJob(jobpage, test, page);
        await jobpage.TORQSUBMENUFromJob();
        await jobpage.clickEditButton(SRTTORQ[TestCase].jobNameSecondary);
        await validateJobStatus(jobpage, test, page);
        await jobpage.TORQSUBMENUFromJob();
        await jobpage.clickStopButton(SRTTORQ[TestCase].jobName);
    });
    test('SRT-TORQ-FX| TC-> 42 | START SRT CALLER JOB WITHOUT STARTING THE SOURCE JOB', async ({ page }) => {
        const TestCase = 'TC42';
        await jobpage.JobNameDecoderScalingType(SRTTORQ[TestCase]);
        await jobpage.SRTListenerInput(SRTTORQ[TestCase]);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(SRTTORQ[TestCase]);
        await jobpage.OutputButton();
        await jobpage.udpoutput(SRTTORQ[TestCase]);
        await jobpage.AddedOutputValidation(SRTTORQ[TestCase]);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        await jobpage.StatPage.click();
        await jobpage.StartStatusJob();
        await ShouldBeStremLossAndNoThumbnail(jobpage, test, page);
        await jobpage.TORQSUBMENUFromJob();
        await jobpage.clickStartButton(SRTTORQ[TestCase].jobName);
        await jobpage.clickEditButton(SRTTORQ[TestCase].jobNameSecondary);
        await NoStartingButStopping(jobpage, test, page);
        await jobpage.TORQSUBMENUFromJob();
        await jobpage.clickStopButton(SRTTORQ[TestCase].jobName);
    });
    test('SRT-TORQ-FX| TC-> 43 | START BOTH SRT CALLER AND SOURCE JOB / STOP BOTH SRT CALLER AND SOURCE JOB', async ({ page }) => {
        const TestCase = 'TC43';
        await jobpage.JobNameDecoderScalingType(SRTTORQ[TestCase]);
        await jobpage.SRTListenerInput(SRTTORQ[TestCase]);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(SRTTORQ[TestCase]);
        await jobpage.OutputButton();
        await jobpage.udpoutput(SRTTORQ[TestCase]);
        await jobpage.AddedOutputValidation(SRTTORQ[TestCase]);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        await jobpage.TORQJobListPage();
        await jobpage.checkBoxJob(SRTTORQ[TestCase].jobName);
        await jobpage.checkBoxJob(SRTTORQ[TestCase].jobNameSecondary);
        await jobpage.BulkStartJob()
        await jobpage.clickEditButtonAndStatPage(SRTTORQ[TestCase].jobName);
        await validateJobStatusNoStartingStoppingJob(jobpage, test, page)
        await jobpage.TORQSUBMENUFromJob();
        await jobpage.clickEditButtonAndStatPage(SRTTORQ[TestCase].jobNameSecondary);
        await validateJobStatusNoStartingStoppingJob(jobpage, test, page)
        await jobpage.TORQSUBMENUFromJob();
        await jobpage.checkBoxJob(SRTTORQ[TestCase].jobName);
        await jobpage.checkBoxJob(SRTTORQ[TestCase].jobNameSecondary);
        await jobpage.BulkStopJob()

    });
    test('SRT-TORQ-FX| TC-> 44 | SOURCE JOB WITH HIGH MUXER RATE', async ({ page }) => {
        const TestCase = 'TC44';
        await jobpage.JobNameDecoderScalingType(SRTTORQ[TestCase]);
        await jobpage.SRTListenerInput(SRTTORQ[TestCase]);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(SRTTORQ[TestCase]);
        await jobpage.OutputButton();
        await jobpage.udpoutput(SRTTORQ[TestCase]);
        await jobpage.AddedOutputValidation(SRTTORQ[TestCase]);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        await jobpage.TORQSUBMENUFromJob();
        await jobpage.clickEditButton(SRTTORQ[TestCase].jobName);
        await jobpage.OutputButton();
        await jobpage.ModifyBitrate(SRTTORQ[TestCase]);
        await jobpage.JobUpdationPopUp();
        await validateJobStatusNoStoppingJob(jobpage, test, page)
        await jobpage.TORQSUBMENUFromJob();
        await jobpage.clickStartButton(SRTTORQ[TestCase].jobNameSecondary);
        await jobpage.clickEditButton(SRTTORQ[TestCase].jobNameSecondary)
        await validateJobStatusNoStartingStoppingJob(jobpage, test, page)
        await jobpage.TORQSUBMENUFromJob();
        await nodepage.GotoNodeLogs('torq_engine')
        await nodepage.verifyKeywordInFirstN('UNDERFLOW', 20);
        await jobpage.TORQSUBMENUFromJob();
        await jobpage.clickStopButton(SRTTORQ[TestCase].jobNameSecondary);
        await jobpage.clickStopButton(SRTTORQ[TestCase].jobName);

    });
    test('SRT-TORQ-FX| TC-> 45 | CREATE SOURCE JOB WITH OUT PASSWORD AND SECONDARY JOB WITH PASSWORD', async ({ page }) => {
        const TestCase = 'TC45';
        await jobpage.JobNameDecoderScalingType(SRTTORQ[TestCase]);
        await jobpage.SRTListenerInput(SRTTORQ[TestCase]);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(SRTTORQ[TestCase]);
        await jobpage.OutputButton();
        await jobpage.udpoutput(SRTTORQ[TestCase]);
        await jobpage.AddedOutputValidation(SRTTORQ[TestCase]);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        await jobpage.TORQSUBMENUFromJob();
        await jobpage.clickEditButton(SRTTORQ[TestCase].jobName);
        await jobpage.OutputButton();
        await jobpage.ModifyBitrate(SRTTORQ[TestCase]);
        await jobpage.JobUpdationPopUp();
        await validateJobStatusNoStoppingJob(jobpage, test, page);
        await jobpage.TORQSUBMENUFromJob();
        await jobpage.clickStartButton(SRTTORQ[TestCase].jobNameSecondary);
        await jobpage.clickEditButtonAndStatPage(SRTTORQ[TestCase].jobNameSecondary)
        await ShouldBeStremLossAndNoThumbnail(jobpage, test, page)
        await jobpage.TORQSUBMENUFromJob();
        await jobpage.clickStopButton(SRTTORQ[TestCase].jobNameSecondary);
        await jobpage.clickStopButton(SRTTORQ[TestCase].jobName)

    });
    test('SRT-TORQ-FX| TC-> 46 | CREATE SOURCE JOB AND SECONDARY JOB WITH PASSWORD', async ({ page }) => {
        const TestCase = 'TC46';
        await jobpage.JobNameDecoderScalingType(SRTTORQ[TestCase]);
        await jobpage.SRTListenerInput(SRTTORQ[TestCase]);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(SRTTORQ[TestCase]);
        await jobpage.OutputButton();
        await jobpage.udpoutput(SRTTORQ[TestCase]);
        await jobpage.AddedOutputValidation(SRTTORQ[TestCase]);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        await jobpage.TORQSUBMENUFromJob();
        await jobpage.clickEditButton(SRTTORQ[TestCase].jobName);
        await jobpage.OutputButton();
        await jobpage.ModifyPassword(SRTTORQ[TestCase]);
        await jobpage.JobUpdationPopUp();
        await validateJobStatusNoStoppingJob(jobpage, test, page);
        await jobpage.TORQSUBMENUFromJob();
        await jobpage.clickEditButton(SRTTORQ[TestCase].jobNameSecondary);
        await validateJobStatus(jobpage, test, page)
        await jobpage.TORQSUBMENUFromJob();
        await jobpage.clickStopButton(SRTTORQ[TestCase].jobName)
    });
    test('SRT-TORQ-FX| TC-> 47 | CREATE SOURCE JOB AND SECONDARY JOB WITH PASSWORD', async ({ page }) => {
        const TestCase = 'TC47';
        await jobpage.JobNameDecoderScalingType(SRTTORQ[TestCase]);
        await jobpage.SRTListenerInput(SRTTORQ[TestCase]);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(SRTTORQ[TestCase]);
        await jobpage.OutputButton();
        await jobpage.udpoutput(SRTTORQ[TestCase]);
        await jobpage.AddedOutputValidation(SRTTORQ[TestCase]);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        await jobpage.TORQSUBMENUFromJob();
        await jobpage.clickEditButton(SRTTORQ[TestCase].jobName);
        await jobpage.OutputButton();
        await jobpage.ModifyPassword(SRTTORQ[TestCase]);
        await jobpage.JobUpdationPopUp();
        await validateJobStatusNoStoppingJob(jobpage, test, page);
        await jobpage.TORQSUBMENUFromJob();
        await jobpage.clickStartButton(SRTTORQ[TestCase].jobNameSecondary);
        await jobpage.clickEditButtonAndStatPage(SRTTORQ[TestCase].jobNameSecondary);
        await ShouldBeStremLossAndNoThumbnail(jobpage, test, page)
        await jobpage.TORQSUBMENUFromJob();
        await jobpage.clickStopButton(SRTTORQ[TestCase].jobNameSecondary)
        await jobpage.clickStopButton(SRTTORQ[TestCase].jobName)
    });
    test.fixme('SRT-TORQ-FX| TC-> 48 | CHECK THE PLAYBACK OF UDP OUTPUT', async ({ page }) => {

    });

    test('SRT-TORQ-FX| TC-> 49 | VERIFY THAT AN SRT LISTENER (SOURCE JOB) CAN SEND DATA TO AN SRT CALLER, WITH SRT LISTENER OUTPUT', async ({ page }) => {
        const TestCase = 'TC49';
        await jobpage.JobNameDecoderScalingType(SRTTORQ[TestCase]);
        await jobpage.SRTListenerInput(SRTTORQ[TestCase]);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(SRTTORQ[TestCase]);
        await jobpage.OutputButton();
        await jobpage.SRToutputListener(SRTTORQ[TestCase]);
        await jobpage.AddedOutputValidation(SRTTORQ[TestCase]);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        await jobpage.TORQSUBMENUFromJob();
        await jobpage.clickEditButton(SRTTORQ[TestCase].jobName);
        await jobpage.OutputButton();
        await jobpage.ModifyPassword(SRTTORQ[TestCase]);
        await jobpage.JobUpdationPopUp();
        await validateJobStatusNoStoppingJob(jobpage, test, page);
        await jobpage.TORQSUBMENUFromJob();
        await jobpage.clickEditButton(SRTTORQ[TestCase].jobNameSecondary);
        await validateJobStatus(jobpage, test, page);
        await jobpage.TORQSUBMENUFromJob();
        await jobpage.clickStopButton(SRTTORQ[TestCase].jobName);
    });
    test('SRT-TORQ-FX| TC-> 50 | START SRT CALLER JOB WITHOUT STARTING THE SOURCE JOB', async ({ page }) => {
        const TestCase = 'TC50';
        await jobpage.JobNameDecoderScalingType(SRTTORQ[TestCase]);
        await jobpage.SRTListenerInput(SRTTORQ[TestCase]);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(SRTTORQ[TestCase]);
        await jobpage.OutputButton();
        await jobpage.SRToutputListener(SRTTORQ[TestCase]);
        await jobpage.AddedOutputValidation(SRTTORQ[TestCase]);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        await jobpage.StatPage.click();
        await jobpage.StartStatusJob();
        await ShouldBeStremLossAndNoThumbnail(jobpage, test, page);
        await jobpage.TORQSUBMENUFromJob();
        await jobpage.clickStartButton(SRTTORQ[TestCase].jobName);
        await jobpage.clickEditButton(SRTTORQ[TestCase].jobNameSecondary);
        await NoStartingButStopping(jobpage, test, page);
        await jobpage.TORQSUBMENUFromJob();
        await jobpage.clickStopButton(SRTTORQ[TestCase].jobName);
    });
    test('SRT-TORQ-FX| TC-> 51 | START BOTH SRT CALLER AND SOURCE JOB / STOP BOTH SRT CALLER AND SOURCE JOB', async ({ page }) => {
        const TestCase = 'TC51';
        await jobpage.JobNameDecoderScalingType(SRTTORQ[TestCase]);
        await jobpage.SRTListenerInput(SRTTORQ[TestCase]);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(SRTTORQ[TestCase]);
        await jobpage.OutputButton();
        await jobpage.SRToutputListener(SRTTORQ[TestCase]);
        await jobpage.AddedOutputValidation(SRTTORQ[TestCase]);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        await jobpage.TORQJobListPage();
        await jobpage.checkBoxJob(SRTTORQ[TestCase].jobName);
        await jobpage.checkBoxJob(SRTTORQ[TestCase].jobNameSecondary);
        await jobpage.BulkStartJob()
        await jobpage.clickEditButtonAndStatPage(SRTTORQ[TestCase].jobName);
        await validateJobStatusNoStartingStoppingJob(jobpage, test, page)
        await jobpage.TORQSUBMENUFromJob();
        await jobpage.clickEditButtonAndStatPage(SRTTORQ[TestCase].jobNameSecondary);
        await validateJobStatusNoStartingStoppingJob(jobpage, test, page)
        await jobpage.TORQSUBMENUFromJob();
        await jobpage.checkBoxJob(SRTTORQ[TestCase].jobName);
        await jobpage.checkBoxJob(SRTTORQ[TestCase].jobNameSecondary);
        await jobpage.BulkStopJob()

    });
    test('SRT-TORQ-FX| TC-> 52 | SOURCE JOB WITH HIGH MUXER RATE', async ({ page }) => {
        const TestCase = 'TC52';
        await jobpage.JobNameDecoderScalingType(SRTTORQ[TestCase]);
        await jobpage.SRTListenerInput(SRTTORQ[TestCase]);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(SRTTORQ[TestCase]);
        await jobpage.OutputButton();
        await jobpage.SRToutputListener(SRTTORQ[TestCase]);
        await jobpage.AddedOutputValidation(SRTTORQ[TestCase]);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        await jobpage.TORQSUBMENUFromJob();
        await jobpage.clickEditButton(SRTTORQ[TestCase].jobName);
        await jobpage.OutputButton();
        await jobpage.ModifyBitrate(SRTTORQ[TestCase]);
        await jobpage.JobUpdationPopUp();
        await validateJobStatusNoStoppingJob(jobpage, test, page)
        await jobpage.TORQSUBMENUFromJob();
        await jobpage.clickStartButton(SRTTORQ[TestCase].jobNameSecondary);
        await jobpage.clickEditButton(SRTTORQ[TestCase].jobNameSecondary)
        await validateJobStatusNoStartingStoppingJob(jobpage, test, page)
        await jobpage.TORQSUBMENUFromJob();
        await nodepage.GotoNodeLogs('torq_engine')
        await nodepage.verifyKeywordInFirstN('UNDERFLOW', 20);
        await jobpage.TORQSUBMENUFromJob();
        await jobpage.clickStopButton(SRTTORQ[TestCase].jobNameSecondary);
        await jobpage.clickStopButton(SRTTORQ[TestCase].jobName);

    });
    test('SRT-TORQ-FX| TC-> 53 | CREATE SOURCE JOB WITH OUT PASSWORD AND SECONDARY JOB WITH PASSWORD', async ({ page }) => {
        const TestCase = 'TC53';
        await jobpage.JobNameDecoderScalingType(SRTTORQ[TestCase]);
        await jobpage.SRTListenerInput(SRTTORQ[TestCase]);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(SRTTORQ[TestCase]);
        await jobpage.OutputButton();
        await jobpage.SRToutputListener(SRTTORQ[TestCase]);
        await jobpage.AddedOutputValidation(SRTTORQ[TestCase]);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        await jobpage.TORQSUBMENUFromJob();
        await jobpage.clickEditButton(SRTTORQ[TestCase].jobName);
        await jobpage.OutputButton();
        await jobpage.ModifyBitrate(SRTTORQ[TestCase]);
        await jobpage.JobUpdationPopUp();
        await validateJobStatusNoStoppingJob(jobpage, test, page);
        await jobpage.TORQSUBMENUFromJob();
        await jobpage.clickStartButton(SRTTORQ[TestCase].jobNameSecondary);
        await jobpage.clickEditButtonAndStatPage(SRTTORQ[TestCase].jobNameSecondary)
        await ShouldBeStremLossAndNoThumbnail(jobpage, test, page)
        await jobpage.TORQSUBMENUFromJob();
        await jobpage.clickStopButton(SRTTORQ[TestCase].jobNameSecondary);
        await jobpage.clickStopButton(SRTTORQ[TestCase].jobName)

    });
    test('SRT-TORQ-FX| TC-> 54 | CREATE SOURCE JOB AND SECONDARY JOB WITH PASSWORD', async ({ page }) => {
        const TestCase = 'TC54';
        await jobpage.JobNameDecoderScalingType(SRTTORQ[TestCase]);
        await jobpage.SRTListenerInput(SRTTORQ[TestCase]);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(SRTTORQ[TestCase]);
        await jobpage.OutputButton();
        await jobpage.SRToutputListener(SRTTORQ[TestCase]);
        await jobpage.AddedOutputValidation(SRTTORQ[TestCase]);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        await jobpage.TORQSUBMENUFromJob();
        await jobpage.clickEditButton(SRTTORQ[TestCase].jobName);
        await jobpage.OutputButton();
        await jobpage.ModifyPassword(SRTTORQ[TestCase]);
        await jobpage.JobUpdationPopUp();
        await validateJobStatusNoStoppingJob(jobpage, test, page);
        await jobpage.TORQSUBMENUFromJob();
        await jobpage.clickEditButton(SRTTORQ[TestCase].jobNameSecondary);
        await validateJobStatus(jobpage, test, page)
        await jobpage.TORQSUBMENUFromJob();
        await jobpage.clickStopButton(SRTTORQ[TestCase].jobName)
    });
    test('SRT-TORQ-FX| TC-> 55 | CREATE SOURCE JOB AND SECONDARY JOB WITH PASSWORD', async ({ page }) => {
        const TestCase = 'TC55';
        await jobpage.JobNameDecoderScalingType(SRTTORQ[TestCase]);
        await jobpage.SRTListenerInput(SRTTORQ[TestCase]);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(SRTTORQ[TestCase]);
        await jobpage.OutputButton();
        await jobpage.SRToutputListener(SRTTORQ[TestCase]);
        await jobpage.AddedOutputValidation(SRTTORQ[TestCase]);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        await jobpage.TORQSUBMENUFromJob();
        await jobpage.clickEditButton(SRTTORQ[TestCase].jobName);
        await jobpage.OutputButton();
        await jobpage.ModifyPassword(SRTTORQ[TestCase]);
        await jobpage.JobUpdationPopUp();
        await validateJobStatusNoStoppingJob(jobpage, test, page);
        await jobpage.TORQSUBMENUFromJob();
        await jobpage.clickStartButton(SRTTORQ[TestCase].jobNameSecondary);
        await jobpage.clickEditButtonAndStatPage(SRTTORQ[TestCase].jobNameSecondary);
        await ShouldBeStremLossAndNoThumbnail(jobpage, test, page)
        await jobpage.TORQSUBMENUFromJob();
        await jobpage.clickStopButton(SRTTORQ[TestCase].jobNameSecondary)
        await jobpage.clickStopButton(SRTTORQ[TestCase].jobName)
    });
    test.fixme('SRT-TORQ-FX| TC-> 56 | CHECK THE PLAYBACK OF SRT LISTENER OUTPUT', async ({ page }) => {

    });

    test('SRT-TORQ-FX| TC-> 57 | VERIFY THAT AN SRT LISTENER (SOURCE JOB) CAN SEND DATA TO AN SRT CALLER, WITH RTMP OUTPUT', async ({ page }) => {
        const TestCase = 'TC57';
        await jobpage.JobNameDecoderScalingType(SRTTORQ[TestCase]);
        await jobpage.SRTListenerInput(SRTTORQ[TestCase]);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(SRTTORQ[TestCase]);
        await jobpage.OutputButton();
        await jobpage.RTMPOutput(SRTTORQ[TestCase]);
        await jobpage.AddedOutputValidation(SRTTORQ[TestCase]);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        await jobpage.TORQSUBMENUFromJob();
        await jobpage.clickEditButton(SRTTORQ[TestCase].jobName);
        await jobpage.OutputButton();
        await jobpage.ModifyPassword(SRTTORQ[TestCase]);
        await jobpage.JobUpdationPopUp();
        await validateJobStatusNoStoppingJob(jobpage, test, page);
        await jobpage.TORQSUBMENUFromJob();
        await jobpage.clickEditButton(SRTTORQ[TestCase].jobNameSecondary);
        await validateJobStatus(jobpage, test, page);
        await jobpage.TORQSUBMENUFromJob();
        await jobpage.clickStopButton(SRTTORQ[TestCase].jobName);
    });
    test('SRT-TORQ-FX| TC-> 58 | START SRT CALLER JOB WITHOUT STARTING THE SOURCE JOB', async ({ page }) => {
        const TestCase = 'TC58';
        await jobpage.JobNameDecoderScalingType(SRTTORQ[TestCase]);
        await jobpage.SRTListenerInput(SRTTORQ[TestCase]);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(SRTTORQ[TestCase]);
        await jobpage.OutputButton();
        await jobpage.RTMPOutput(SRTTORQ[TestCase]);
        await jobpage.AddedOutputValidation(SRTTORQ[TestCase]);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        await jobpage.StatPage.click();
        await jobpage.StartStatusJob();
        await ShouldBeStremLossAndNoThumbnail(jobpage, test, page);
        await jobpage.TORQSUBMENUFromJob();
        await jobpage.clickStartButton(SRTTORQ[TestCase].jobName);
        await jobpage.clickEditButton(SRTTORQ[TestCase].jobNameSecondary);
        await NoStartingButStopping(jobpage, test, page);
        await jobpage.TORQSUBMENUFromJob();
        await jobpage.clickStopButton(SRTTORQ[TestCase].jobName);
    });
    test('SRT-TORQ-FX| TC-> 59 | START BOTH SRT CALLER AND SOURCE JOB / STOP BOTH SRT CALLER AND SOURCE JOB', async ({ page }) => {
        const TestCase = 'TC59';
        await jobpage.JobNameDecoderScalingType(SRTTORQ[TestCase]);
        await jobpage.SRTListenerInput(SRTTORQ[TestCase]);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(SRTTORQ[TestCase]);
        await jobpage.OutputButton();
        await jobpage.RTMPOutput(SRTTORQ[TestCase]);
        await jobpage.AddedOutputValidation(SRTTORQ[TestCase]);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        await jobpage.TORQJobListPage();
        await jobpage.checkBoxJob(SRTTORQ[TestCase].jobName);
        await jobpage.checkBoxJob(SRTTORQ[TestCase].jobNameSecondary);
        await jobpage.BulkStartJob()
        await jobpage.clickEditButtonAndStatPage(SRTTORQ[TestCase].jobName);
        await validateJobStatusNoStartingStoppingJob(jobpage, test, page)
        await jobpage.TORQSUBMENUFromJob();
        await jobpage.clickEditButtonAndStatPage(SRTTORQ[TestCase].jobNameSecondary);
        await validateJobStatusNoStartingStoppingJob(jobpage, test, page)
        await jobpage.TORQSUBMENUFromJob();
        await jobpage.checkBoxJob(SRTTORQ[TestCase].jobName);
        await jobpage.checkBoxJob(SRTTORQ[TestCase].jobNameSecondary);
        await jobpage.BulkStopJob()

    });
    test('SRT-TORQ-FX| TC-> 60 | SOURCE JOB WITH HIGH MUXER RATE', async ({ page }) => {
        const TestCase = 'TC60';
        await jobpage.JobNameDecoderScalingType(SRTTORQ[TestCase]);
        await jobpage.SRTListenerInput(SRTTORQ[TestCase]);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(SRTTORQ[TestCase]);
        await jobpage.OutputButton();
        await jobpage.RTMPOutput(SRTTORQ[TestCase]);
        await jobpage.AddedOutputValidation(SRTTORQ[TestCase]);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        await jobpage.TORQSUBMENUFromJob();
        await jobpage.clickEditButton(SRTTORQ[TestCase].jobName);
        await jobpage.OutputButton();
        await jobpage.ModifyBitrate(SRTTORQ[TestCase]);
        await jobpage.JobUpdationPopUp();
        await validateJobStatusNoStoppingJob(jobpage, test, page)
        await jobpage.TORQSUBMENUFromJob();
        await jobpage.clickStartButton(SRTTORQ[TestCase].jobNameSecondary);
        await jobpage.clickEditButton(SRTTORQ[TestCase].jobNameSecondary)
        await validateJobStatusNoStartingStoppingJob(jobpage, test, page)
        await jobpage.TORQSUBMENUFromJob();
        await nodepage.GotoNodeLogs('torq_engine')
        await nodepage.verifyKeywordInFirstN('UNDERFLOW', 20);
        await jobpage.TORQSUBMENUFromJob();
        await jobpage.clickStopButton(SRTTORQ[TestCase].jobNameSecondary);
        await jobpage.clickStopButton(SRTTORQ[TestCase].jobName);

    });
    test('SRT-TORQ-FX| TC-> 61 | CREATE SOURCE JOB WITH OUT PASSWORD AND SECONDARY JOB WITH PASSWORD', async ({ page }) => {
        const TestCase = 'TC61';
        await jobpage.JobNameDecoderScalingType(SRTTORQ[TestCase]);
        await jobpage.SRTListenerInput(SRTTORQ[TestCase]);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(SRTTORQ[TestCase]);
        await jobpage.OutputButton();
        await jobpage.RTMPOutput(SRTTORQ[TestCase]);
        await jobpage.AddedOutputValidation(SRTTORQ[TestCase]);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        await jobpage.TORQSUBMENUFromJob();
        await jobpage.clickEditButton(SRTTORQ[TestCase].jobName);
        await jobpage.OutputButton();
        await jobpage.ModifyBitrate(SRTTORQ[TestCase]);
        await jobpage.JobUpdationPopUp();
        await validateJobStatusNoStoppingJob(jobpage, test, page);
        await jobpage.TORQSUBMENUFromJob();
        await jobpage.clickStartButton(SRTTORQ[TestCase].jobNameSecondary);
        await jobpage.clickEditButtonAndStatPage(SRTTORQ[TestCase].jobNameSecondary)
        await ShouldBeStremLossAndNoThumbnail(jobpage, test, page)
        await jobpage.TORQSUBMENUFromJob();
        await jobpage.clickStopButton(SRTTORQ[TestCase].jobNameSecondary);
        await jobpage.clickStopButton(SRTTORQ[TestCase].jobName)

    });
    test('SRT-TORQ-FX| TC-> 62 | CREATE SOURCE JOB AND SECONDARY JOB WITH PASSWORD', async ({ page }) => {
        const TestCase = 'TC62';
        await jobpage.JobNameDecoderScalingType(SRTTORQ[TestCase]);
        await jobpage.SRTListenerInput(SRTTORQ[TestCase]);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(SRTTORQ[TestCase]);
        await jobpage.OutputButton();
        await jobpage.RTMPOutput(SRTTORQ[TestCase]);
        await jobpage.AddedOutputValidation(SRTTORQ[TestCase]);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        await jobpage.TORQSUBMENUFromJob();
        await jobpage.clickEditButton(SRTTORQ[TestCase].jobName);
        await jobpage.OutputButton();
        await jobpage.ModifyPassword(SRTTORQ[TestCase]);
        await jobpage.JobUpdationPopUp();
        await validateJobStatusNoStoppingJob(jobpage, test, page);
        await jobpage.TORQSUBMENUFromJob();
        await jobpage.clickEditButton(SRTTORQ[TestCase].jobNameSecondary);
        await validateJobStatus(jobpage, test, page)
        await jobpage.TORQSUBMENUFromJob();
        await jobpage.clickStopButton(SRTTORQ[TestCase].jobName)
    });
    test('SRT-TORQ-FX| TC-> 63 | CREATE SOURCE JOB AND SECONDARY JOB WITH PASSWORD', async ({ page }) => {
        const TestCase = 'TC63';
        await jobpage.JobNameDecoderScalingType(SRTTORQ[TestCase]);
        await jobpage.SRTListenerInput(SRTTORQ[TestCase]);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(SRTTORQ[TestCase]);
        await jobpage.OutputButton();
        await jobpage.RTMPOutput(SRTTORQ[TestCase]);
        await jobpage.AddedOutputValidation(SRTTORQ[TestCase]);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        await jobpage.TORQSUBMENUFromJob();
        await jobpage.clickEditButton(SRTTORQ[TestCase].jobName);
        await jobpage.OutputButton();
        await jobpage.ModifyPassword(SRTTORQ[TestCase]);
        await jobpage.JobUpdationPopUp();
        await validateJobStatusNoStoppingJob(jobpage, test, page);
        await jobpage.TORQSUBMENUFromJob();
        await jobpage.clickStartButton(SRTTORQ[TestCase].jobNameSecondary);
        await jobpage.clickEditButtonAndStatPage(SRTTORQ[TestCase].jobNameSecondary);
        await ShouldBeStremLossAndNoThumbnail(jobpage, test, page)
        await jobpage.TORQSUBMENUFromJob();
        await jobpage.clickStopButton(SRTTORQ[TestCase].jobNameSecondary)
        await jobpage.clickStopButton(SRTTORQ[TestCase].jobName)
    });
    test.fixme('SRT-TORQ-FX| TC-> 64 | CHECK THE PLAYBACK OF RTMP OUTPUT', async ({ page }) => {

    });
    test('SRT-TORQ-FX| TC-> 65 | VERIFY THAT AN SRT LISTENER (SOURCE JOB) CAN SEND DATA TO AN SRT CALLER, WITH HLS OUTPUT', async ({ page }) => {
        const TestCase = 'TC65';
        await jobpage.JobNameDecoderScalingType(SRTTORQ[TestCase]);
        await jobpage.SRTListenerInput(SRTTORQ[TestCase]);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(SRTTORQ[TestCase]);
        await jobpage.OutputButton();
        await jobpage.HLSoutput(SRTTORQ[TestCase]);
        await jobpage.AddedOutputValidation(SRTTORQ[TestCase]);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        await jobpage.TORQSUBMENUFromJob();
        await jobpage.clickEditButton(SRTTORQ[TestCase].jobName);
        await jobpage.OutputButton();
        await jobpage.ModifyPassword(SRTTORQ[TestCase]);
        await jobpage.JobUpdationPopUp();
        await validateJobStatusNoStoppingJob(jobpage, test, page);
        await jobpage.TORQSUBMENUFromJob();
        await jobpage.clickEditButton(SRTTORQ[TestCase].jobNameSecondary);
        await validateJobStatus(jobpage, test, page);
        await jobpage.TORQSUBMENUFromJob();
        await jobpage.clickStopButton(SRTTORQ[TestCase].jobName);
    });
    test('SRT-TORQ-FX| TC-> 66 | START SRT CALLER JOB WITHOUT STARTING THE SOURCE JOB', async ({ page }) => {
        const TestCase = 'TC66';
        await jobpage.JobNameDecoderScalingType(SRTTORQ[TestCase]);
        await jobpage.SRTListenerInput(SRTTORQ[TestCase]);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(SRTTORQ[TestCase]);
        await jobpage.OutputButton();
        await jobpage.HLSoutput(SRTTORQ[TestCase]);
        await jobpage.AddedOutputValidation(SRTTORQ[TestCase]);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        await jobpage.StatPage.click();
        await jobpage.StartStatusJob();
        await ShouldBeStremLossAndNoThumbnail(jobpage, test, page);
        await jobpage.TORQSUBMENUFromJob();
        await jobpage.clickStartButton(SRTTORQ[TestCase].jobName);
        await jobpage.clickEditButton(SRTTORQ[TestCase].jobNameSecondary);
        await NoStartingButStopping(jobpage, test, page);
        await jobpage.TORQSUBMENUFromJob();
        await jobpage.clickStopButton(SRTTORQ[TestCase].jobName);
    });
    test('SRT-TORQ-FX| TC-> 67 | START BOTH SRT CALLER AND SOURCE JOB / STOP BOTH SRT CALLER AND SOURCE JOB', async ({ page }) => {
        const TestCase = 'TC67';
        await jobpage.JobNameDecoderScalingType(SRTTORQ[TestCase]);
        await jobpage.SRTListenerInput(SRTTORQ[TestCase]);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(SRTTORQ[TestCase]);
        await jobpage.OutputButton();
        await jobpage.HLSoutput(SRTTORQ[TestCase]);
        await jobpage.AddedOutputValidation(SRTTORQ[TestCase]);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        await jobpage.TORQJobListPage();
        await jobpage.checkBoxJob(SRTTORQ[TestCase].jobName);
        await jobpage.checkBoxJob(SRTTORQ[TestCase].jobNameSecondary);
        await jobpage.BulkStartJob()
        await jobpage.clickEditButtonAndStatPage(SRTTORQ[TestCase].jobName);
        await validateJobStatusNoStartingStoppingJob(jobpage, test, page)
        await jobpage.TORQSUBMENUFromJob();
        await jobpage.clickEditButtonAndStatPage(SRTTORQ[TestCase].jobNameSecondary);
        await validateJobStatusNoStartingStoppingJob(jobpage, test, page)
        await jobpage.TORQSUBMENUFromJob();
        await jobpage.checkBoxJob(SRTTORQ[TestCase].jobName);
        await jobpage.checkBoxJob(SRTTORQ[TestCase].jobNameSecondary);
        await jobpage.BulkStopJob()

    });
    test('SRT-TORQ-FX| TC-> 68 | SOURCE JOB WITH HIGH MUXER RATE', async ({ page }) => {
        const TestCase = 'TC68';
        await jobpage.JobNameDecoderScalingType(SRTTORQ[TestCase]);
        await jobpage.SRTListenerInput(SRTTORQ[TestCase]);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(SRTTORQ[TestCase]);
        await jobpage.OutputButton();
        await jobpage.HLSoutput(SRTTORQ[TestCase]);
        await jobpage.AddedOutputValidation(SRTTORQ[TestCase]);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        await jobpage.TORQSUBMENUFromJob();
        await jobpage.clickEditButton(SRTTORQ[TestCase].jobName);
        await jobpage.OutputButton();
        await jobpage.ModifyBitrate(SRTTORQ[TestCase]);
        await jobpage.JobUpdationPopUp();
        await validateJobStatusNoStoppingJob(jobpage, test, page)
        await jobpage.TORQSUBMENUFromJob();
        await jobpage.clickStartButton(SRTTORQ[TestCase].jobNameSecondary);
        await jobpage.clickEditButton(SRTTORQ[TestCase].jobNameSecondary)
        await validateJobStatusNoStartingStoppingJob(jobpage, test, page)
        await jobpage.TORQSUBMENUFromJob();
        await nodepage.GotoNodeLogs('torq_engine')
        await nodepage.verifyKeywordInFirstN('UNDERFLOW', 20);
        await jobpage.TORQSUBMENUFromJob();
        await jobpage.clickStopButton(SRTTORQ[TestCase].jobNameSecondary);
        await jobpage.clickStopButton(SRTTORQ[TestCase].jobName);

    });
    test('SRT-TORQ-FX| TC-> 69 | CREATE SOURCE JOB WITH OUT PASSWORD AND SECONDARY JOB WITH PASSWORD', async ({ page }) => {
        const TestCase = 'TC69';
        await jobpage.JobNameDecoderScalingType(SRTTORQ[TestCase]);
        await jobpage.SRTListenerInput(SRTTORQ[TestCase]);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(SRTTORQ[TestCase]);
        await jobpage.OutputButton();
        await jobpage.HLSoutput(SRTTORQ[TestCase]);
        await jobpage.AddedOutputValidation(SRTTORQ[TestCase]);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        await jobpage.TORQSUBMENUFromJob();
        await jobpage.clickEditButton(SRTTORQ[TestCase].jobName);
        await jobpage.OutputButton();
        await jobpage.ModifyBitrate(SRTTORQ[TestCase]);
        await jobpage.JobUpdationPopUp();
        await validateJobStatusNoStoppingJob(jobpage, test, page);
        await jobpage.TORQSUBMENUFromJob();
        await jobpage.clickStartButton(SRTTORQ[TestCase].jobNameSecondary);
        await jobpage.clickEditButtonAndStatPage(SRTTORQ[TestCase].jobNameSecondary)
        await ShouldBeStremLossAndNoThumbnail(jobpage, test, page)
        await jobpage.TORQSUBMENUFromJob();
        await jobpage.clickStopButton(SRTTORQ[TestCase].jobNameSecondary);
        await jobpage.clickStopButton(SRTTORQ[TestCase].jobName)

    });
    test('SRT-TORQ-FX| TC-> 70 | CREATE SOURCE JOB AND SECONDARY JOB WITH PASSWORD', async ({ page }) => {
        const TestCase = 'TC70';
        await jobpage.JobNameDecoderScalingType(SRTTORQ[TestCase]);
        await jobpage.SRTListenerInput(SRTTORQ[TestCase]);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(SRTTORQ[TestCase]);
        await jobpage.OutputButton();
        await jobpage.HLSoutput(SRTTORQ[TestCase]);
        await jobpage.AddedOutputValidation(SRTTORQ[TestCase]);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        await jobpage.TORQSUBMENUFromJob();
        await jobpage.clickEditButton(SRTTORQ[TestCase].jobName);
        await jobpage.OutputButton();
        await jobpage.ModifyPassword(SRTTORQ[TestCase]);
        await jobpage.JobUpdationPopUp();
        await validateJobStatusNoStoppingJob(jobpage, test, page);
        await jobpage.TORQSUBMENUFromJob();
        await jobpage.clickEditButton(SRTTORQ[TestCase].jobNameSecondary);
        await validateJobStatus(jobpage, test, page)
        await jobpage.TORQSUBMENUFromJob();
        await jobpage.clickStopButton(SRTTORQ[TestCase].jobName)
    });
    test('SRT-TORQ-FX| TC-> 71 | CREATE SOURCE JOB AND SECONDARY JOB WITH PASSWORD', async ({ page }) => {
        const TestCase = 'TC71';
        await jobpage.JobNameDecoderScalingType(SRTTORQ[TestCase]);
        await jobpage.SRTListenerInput(SRTTORQ[TestCase]);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(SRTTORQ[TestCase]);
        await jobpage.OutputButton();
        await jobpage.HLSoutput(SRTTORQ[TestCase]);
        await jobpage.AddedOutputValidation(SRTTORQ[TestCase]);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        await jobpage.TORQSUBMENUFromJob();
        await jobpage.clickEditButton(SRTTORQ[TestCase].jobName);
        await jobpage.OutputButton();
        await jobpage.ModifyPassword(SRTTORQ[TestCase]);
        await jobpage.JobUpdationPopUp();
        await validateJobStatusNoStoppingJob(jobpage, test, page);
        await jobpage.TORQSUBMENUFromJob();
        await jobpage.clickStartButton(SRTTORQ[TestCase].jobNameSecondary);
        await jobpage.clickEditButtonAndStatPage(SRTTORQ[TestCase].jobNameSecondary);
        await ShouldBeStremLossAndNoThumbnail(jobpage, test, page)
        await jobpage.TORQSUBMENUFromJob();
        await jobpage.clickStopButton(SRTTORQ[TestCase].jobNameSecondary)
        await jobpage.clickStopButton(SRTTORQ[TestCase].jobName)
    });
    test.fixme('SRT-TORQ-FX| TC-> 72 | CHECK THE PLAYBACK OF HLS OUTPUT', async ({ page }) => {

    });
    test('SRT-TORQ-FX| TC-> 73 | VERIFY THAT AN SRT LISTENER (SOURCE JOB) CAN SEND DATA TO AN SRT SRT CALLER, WITH HLS OUTPUT', async ({ page }) => {
        const TestCase = 'TC73';
        await jobpage.JobNameDecoderScalingType(SRTTORQ[TestCase]);
        await jobpage.SRTListenerInput(SRTTORQ[TestCase]);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(SRTTORQ[TestCase]);
        await jobpage.OutputButton();
        await jobpage.SRToutputCaller(SRTTORQ[TestCase]);
        await jobpage.AddedOutputValidation(SRTTORQ[TestCase]);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        await jobpage.TORQSUBMENUFromJob();
        await jobpage.clickEditButton(SRTTORQ[TestCase].jobName);
        await jobpage.OutputButton();
        await jobpage.ModifyPassword(SRTTORQ[TestCase]);
        await jobpage.JobUpdationPopUp();
        await validateJobStatusNoStoppingJob(jobpage, test, page);
        await jobpage.TORQSUBMENUFromJob();
        await jobpage.clickEditButton(SRTTORQ[TestCase].jobNameSecondary);
        await validateJobStatus(jobpage, test, page);
        await jobpage.TORQSUBMENUFromJob();
        await jobpage.clickStopButton(SRTTORQ[TestCase].jobName);
    });
    test('SRT-TORQ-FX| TC-> 74 | START SRT CALLER JOB WITHOUT STARTING THE SOURCE JOB', async ({ page }) => {
        const TestCase = 'TC74';
        await jobpage.JobNameDecoderScalingType(SRTTORQ[TestCase]);
        await jobpage.SRTListenerInput(SRTTORQ[TestCase]);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(SRTTORQ[TestCase]);
        await jobpage.OutputButton();
        await jobpage.SRToutputCaller(SRTTORQ[TestCase]);
        await jobpage.AddedOutputValidation(SRTTORQ[TestCase]);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        await jobpage.StatPage.click();
        await jobpage.StartStatusJob();
        await ShouldBeStremLossAndNoThumbnail(jobpage, test, page);
        await jobpage.TORQSUBMENUFromJob();
        await jobpage.clickStartButton(SRTTORQ[TestCase].jobName);
        await jobpage.clickEditButton(SRTTORQ[TestCase].jobNameSecondary);
        await NoStartingButStopping(jobpage, test, page);
        await jobpage.TORQSUBMENUFromJob();
        await jobpage.clickStopButton(SRTTORQ[TestCase].jobName);
    });
    test('SRT-TORQ-FX| TC-> 75 | START BOTH SRT CALLER AND SOURCE JOB / STOP BOTH SRT CALLER AND SOURCE JOB', async ({ page }) => {
        const TestCase = 'TC75';
        await jobpage.JobNameDecoderScalingType(SRTTORQ[TestCase]);
        await jobpage.SRTListenerInput(SRTTORQ[TestCase]);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(SRTTORQ[TestCase]);
        await jobpage.OutputButton();
        await jobpage.SRToutputCaller(SRTTORQ[TestCase]);
        await jobpage.AddedOutputValidation(SRTTORQ[TestCase]);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        await jobpage.TORQJobListPage();
        await jobpage.checkBoxJob(SRTTORQ[TestCase].jobName);
        await jobpage.checkBoxJob(SRTTORQ[TestCase].jobNameSecondary);
        await jobpage.BulkStartJob()
        await jobpage.clickEditButtonAndStatPage(SRTTORQ[TestCase].jobName);
        await validateJobStatusNoStartingStoppingJob(jobpage, test, page)
        await jobpage.TORQSUBMENUFromJob();
        await jobpage.clickEditButtonAndStatPage(SRTTORQ[TestCase].jobNameSecondary);
        await validateJobStatusNoStartingStoppingJob(jobpage, test, page)
        await jobpage.TORQSUBMENUFromJob();
        await jobpage.checkBoxJob(SRTTORQ[TestCase].jobName);
        await jobpage.checkBoxJob(SRTTORQ[TestCase].jobNameSecondary);
        await jobpage.BulkStopJob()

    });
    test('SRT-TORQ-FX| TC-> 76 | SOURCE JOB WITH HIGH MUXER RATE', async ({ page }) => {
        const TestCase = 'TC76';
        await jobpage.JobNameDecoderScalingType(SRTTORQ[TestCase]);
        await jobpage.SRTListenerInput(SRTTORQ[TestCase]);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(SRTTORQ[TestCase]);
        await jobpage.OutputButton();
        await jobpage.SRToutputCaller(SRTTORQ[TestCase]);
        await jobpage.AddedOutputValidation(SRTTORQ[TestCase]);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        await jobpage.TORQSUBMENUFromJob();
        await jobpage.clickEditButton(SRTTORQ[TestCase].jobName);
        await jobpage.OutputButton();
        await jobpage.ModifyBitrate(SRTTORQ[TestCase]);
        await jobpage.JobUpdationPopUp();
        await validateJobStatusNoStoppingJob(jobpage, test, page)
        await jobpage.TORQSUBMENUFromJob();
        await jobpage.clickStartButton(SRTTORQ[TestCase].jobNameSecondary);
        await jobpage.clickEditButton(SRTTORQ[TestCase].jobNameSecondary)
        await validateJobStatusNoStartingStoppingJob(jobpage, test, page)
        await jobpage.TORQSUBMENUFromJob();
        await nodepage.GotoNodeLogs('torq_engine')
        await nodepage.verifyKeywordInFirstN('UNDERFLOW', 20);
        await jobpage.TORQSUBMENUFromJob();
        await jobpage.clickStopButton(SRTTORQ[TestCase].jobNameSecondary);
        await jobpage.clickStopButton(SRTTORQ[TestCase].jobName);

    });
    test('SRT-TORQ-FX| TC-> 77 | CREATE SOURCE JOB WITH OUT PASSWORD AND SECONDARY JOB WITH PASSWORD', async ({ page }) => {
        const TestCase = 'TC77';
        await jobpage.JobNameDecoderScalingType(SRTTORQ[TestCase]);
        await jobpage.SRTListenerInput(SRTTORQ[TestCase]);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(SRTTORQ[TestCase]);
        await jobpage.OutputButton();
        await jobpage.SRToutputCaller(SRTTORQ[TestCase]);
        await jobpage.AddedOutputValidation(SRTTORQ[TestCase]);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        await jobpage.TORQSUBMENUFromJob();
        await jobpage.clickEditButton(SRTTORQ[TestCase].jobName);
        await jobpage.OutputButton();
        await jobpage.ModifyBitrate(SRTTORQ[TestCase]);
        await jobpage.JobUpdationPopUp();
        await validateJobStatusNoStoppingJob(jobpage, test, page);
        await jobpage.TORQSUBMENUFromJob();
        await jobpage.clickStartButton(SRTTORQ[TestCase].jobNameSecondary);
        await jobpage.clickEditButtonAndStatPage(SRTTORQ[TestCase].jobNameSecondary)
        await ShouldBeStremLossAndNoThumbnail(jobpage, test, page)
        await jobpage.TORQSUBMENUFromJob();
        await jobpage.clickStopButton(SRTTORQ[TestCase].jobNameSecondary);
        await jobpage.clickStopButton(SRTTORQ[TestCase].jobName)

    });
    test('SRT-TORQ-FX| TC-> 78 | CREATE SOURCE JOB AND SECONDARY JOB WITH PASSWORD', async ({ page }) => {
        const TestCase = 'TC78';
        await jobpage.JobNameDecoderScalingType(SRTTORQ[TestCase]);
        await jobpage.SRTListenerInput(SRTTORQ[TestCase]);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(SRTTORQ[TestCase]);
        await jobpage.OutputButton();
        await jobpage.SRToutputCaller(SRTTORQ[TestCase]);
        await jobpage.AddedOutputValidation(SRTTORQ[TestCase]);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        await jobpage.TORQSUBMENUFromJob();
        await jobpage.clickEditButton(SRTTORQ[TestCase].jobName);
        await jobpage.OutputButton();
        await jobpage.ModifyPassword(SRTTORQ[TestCase]);
        await jobpage.JobUpdationPopUp();
        await validateJobStatusNoStoppingJob(jobpage, test, page);
        await jobpage.TORQSUBMENUFromJob();
        await jobpage.clickEditButton(SRTTORQ[TestCase].jobNameSecondary);
        await validateJobStatus(jobpage, test, page)
        await jobpage.TORQSUBMENUFromJob();
        await jobpage.clickStopButton(SRTTORQ[TestCase].jobName)
    });
    test('SRT-TORQ-FX| TC-> 79 | CREATE SOURCE JOB AND SECONDARY JOB WITH PASSWORD', async ({ page }) => {
        const TestCase = 'TC79';
        await jobpage.JobNameDecoderScalingType(SRTTORQ[TestCase]);
        await jobpage.SRTListenerInput(SRTTORQ[TestCase]);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(SRTTORQ[TestCase]);
        await jobpage.OutputButton();
        await jobpage.SRToutputCaller(SRTTORQ[TestCase]);
        await jobpage.AddedOutputValidation(SRTTORQ[TestCase]);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        await jobpage.TORQSUBMENUFromJob();
        await jobpage.clickEditButton(SRTTORQ[TestCase].jobName);
        await jobpage.OutputButton();
        await jobpage.ModifyPassword(SRTTORQ[TestCase]);
        await jobpage.JobUpdationPopUp();
        await validateJobStatusNoStoppingJob(jobpage, test, page);
        await jobpage.TORQSUBMENUFromJob();
        await jobpage.clickStartButton(SRTTORQ[TestCase].jobNameSecondary);
        await jobpage.clickEditButtonAndStatPage(SRTTORQ[TestCase].jobNameSecondary);
        await ShouldBeStremLossAndNoThumbnail(jobpage, test, page)
        await jobpage.TORQSUBMENUFromJob();
        await jobpage.clickStopButton(SRTTORQ[TestCase].jobNameSecondary)
        await jobpage.clickStopButton(SRTTORQ[TestCase].jobName)
    });
    test.fixme('SRT-TORQ-FX| TC-> 80 | CHECK THE PLAYBACK OF SRT CALLER OUTPUT', async ({ page }) => {

    });
});