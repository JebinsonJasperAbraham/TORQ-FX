import { test } from '@playwright/test';
import { RTMPTORQ } from '../../config/TestData.js';
import { JobPage } from '../../pages/JobPage.js';
import { validateJobStatus } from '../../UtilityTorq/utility.js';
test.describe('TEST SUITE TORQ FX -> LOGIN CREATE NEW JOB', () => {
    let jobpage;
    let nodepage;
    test.beforeEach(async ({ page }) => {
        jobpage = new JobPage(page);
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


    test('HLS-TORQ-FX| TC-> 1 | FILE STREAM | CREATE A JOB WITH RTMP OUTPUT AND ADD STREAM KEY ID AND SERVER CHECK FOR PLAYBACK ', async ({ page }) => {
        const TestCase = 'TC1';
        await jobpage.JobNameDecoderScalingType(RTMPTORQ[TestCase]);
        await jobpage.FileStreamInput(RTMPTORQ[TestCase]);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(RTMPTORQ[TestCase]);
        await jobpage.OutputButton();
        await jobpage.RTMPOutput(RTMPTORQ[TestCase]);
        await jobpage.AddedOutputValidation(RTMPTORQ[TestCase]);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        await validateJobStatus(jobpage, test, page);
    });
    test.skip('HLS-TORQ-FX| TC-> 2 | FILE STREAM |PUSH THE RTMP JOB TO DIFFERENT SERVER AND CHECK THE PLAYBACK', async ({ page }) => {
        const TestCase = 'TC11';
        await jobpage.JobNameDecoderScalingType(HLSTORQ[TestCase]);
        await jobpage.FileStreamInput(HLSTORQ[TestCase]);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(HLSTORQ[TestCase]);
        await jobpage.OutputButton();
        await jobpage.RTMPOutput(HLSTORQ[TestCase]);
        await jobpage.AddedOutputValidation(HLSTORQ[TestCase]);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        await validateJobStatus(jobpage, test, page);
    });
});