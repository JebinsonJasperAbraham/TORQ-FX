
import { execSync } from "child_process";
export async function validateJobStatus(jobpage, test, page) {

    try {
        await page.waitForTimeout(5000);
        await test.step('Start Job status', async () => {

            await jobpage.StartStatusJob();
        });
        await test.step('Job Up Time in StatPage', async () => {
            await jobpage.JobUpTimeStatus();
        });
        await page.waitForTimeout(5000);
        await test.step('Start Job Indicator in StatPage', async () => {
            await jobpage.JobStatIndicator();
        });
        await test.step('ThumbnailVisibility', async () => {
            await jobpage.StatPageThumbnailvisibility();
        });
        await test.step('InactiveIdleStatus', async () => {
            await jobpage.IdleInactiveStatus();
        });
    }

    finally {

        await test.step('JobStop', async () => {
            await jobpage.StoppingJob();
        });
    }
}
export async function validateJobStatusNoStoppingJob(jobpage, test, page) {

    await page.waitForTimeout(5000);
    await test.step('Start Job status', async () => {
        await jobpage.StartStatusJob();
    });
    await test.step('Job Up Time in StatPage', async () => {
        await jobpage.JobUpTimeStatus();
    });
    await page.waitForTimeout(5000);
    await test.step('Start Job Indicator in StatPage', async () => {
        await jobpage.JobStatIndicator();
    });
    await test.step('ThumbnailVisibility', async () => {
        await jobpage.StatPageThumbnailvisibility();
    });
    await test.step('InactiveIdleStatus', async () => {
        await jobpage.IdleInactiveStatus();
    });


}
export async function validateJobStatusNoStartingStoppingJob(jobpage, test, page) {

    await page.waitForTimeout(5000);
    await test.step('Job Up Time in StatPage', async () => {
        await jobpage.JobUpTimeStatus();
    });
    await page.waitForTimeout(5000);
    await test.step('Start Job Indicator in StatPage', async () => {
        await jobpage.JobStatIndicator();
    });
    await test.step('ThumbnailVisibility', async () => {
        await jobpage.StatPageThumbnailvisibility();
    });
    await test.step('InactiveIdleStatus', async () => {
        await jobpage.IdleInactiveStatus();
    });

}

export async function NoStartingButStopping(jobpage, test, page) {

    try {
        await page.waitForTimeout(5000);
        await test.step('Job START STATUS', async () => {
            await jobpage.JobStartStatus();
        });
        await test.step('Job Up Time in StatPage', async () => {
            await jobpage.JobUpTimeStatus();
        });
        await page.waitForTimeout(5000);
        await test.step('Start Job Indicator in StatPage', async () => {
            await jobpage.JobStatIndicator();
        });
        await test.step('ThumbnailVisibility', async () => {
            await jobpage.StatPageThumbnailvisibility();
        });
        await test.step('InactiveIdleStatus', async () => {
            await jobpage.IdleInactiveStatus();
        });
    }

    finally {

        await test.step('JobStop', async () => {
            await jobpage.StoppingJob();
        });
    }
}

export async function ShouldBeStremLossAndNoThumbnail(jobpage, test, page) {
    await page.waitForTimeout(5000);
    await test.step('Job Up Time in StatPage', async () => {
        await jobpage.JobUpTimeStatus();
    });
    await page.waitForTimeout(8000);
    await test.step('Job Should Be Inactive/StreamLoss', async () => {
        await jobpage.InactiveJobFailureScenario();
    });
    await test.step('Thumbnail Should Not Be Visibility', async () => {
        await jobpage.NoStatPageThubmbnail();
    });

}



export async function validateSegmentWithFFprobe(segFile) {
    // 🔧 Use absolute path to ffprobe.exe
    const ffprobePath = "J:\\fe\\ffmpeg-8.0-essentials_build\\bin\\ffprobe.exe";

    const cmd = `"${ffprobePath}" -v error -show_streams -of json "${segFile}"`;
    const result = execSync(cmd).toString();
    const parsed = JSON.parse(result);

    const hasVideo = parsed.streams.some(s => s.codec_type === "video");
    const hasAudio = parsed.streams.some(s => s.codec_type === "audio");

    return { hasVideo, hasAudio };


}


