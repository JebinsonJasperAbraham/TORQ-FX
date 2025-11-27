import { expect, test } from '@playwright/test';

test.setTimeout(120000);
test('JobCreation', async ({ page }) => {
  await page.goto('http://10.0.0.53/');
  await page.fill('[name="username"]', 'alice');
  await page.fill('[name="password"]', 'Pixfix@123');
  await page.locator('[type="submit"]').click();
  // await page.waitForTimeout(3000);

  for (let i = 92; i <= 100; i++) {
    const jobName = `jobname_${i}`;
    const srtPort = 6000 + i;
    const portnum = '9005'

    await page.waitForSelector("//span[normalize-space()='Jobs']", { timeout: 10000 });
    await page.locator("//span[normalize-space()='Jobs']").click();

    await page.waitForSelector("//span[normalize-space()='TORQ']", { timeout: 10000 });
    await page.locator("//span[normalize-space()='TORQ']").click();

    await page.waitForSelector("//a[normalize-space()='Add New']", { timeout: 10000 });
    await page.locator("//a[normalize-space()='Add New']").click();
    // Input
    await page.getByText('+ Add Source').click({ timeout: 10000 });

    await page.waitForSelector("//a[normalize-space()='File Stream']");
    await expect(page.locator("//a[normalize-space()='File Stream']")).toBeEnabled();
    await page.locator("//a[normalize-space()='File Stream']").click();

    await page.waitForSelector("//button[normalize-space()='Browse']");
    await expect(page.locator("//button[normalize-space()='Browse']")).toBeEnabled();
    await page.locator("//button[normalize-space()='Browse']").click();

    await page.waitForSelector(".list-group-item.list-group-item-action");
    await expect(page.locator(".list-group-item.list-group-item-action")).toBeEnabled();
    await page.locator(".list-group-item.list-group-item-action").click();

    await page.waitForSelector(".list-group-item.list-group-item-action");
    await expect(page.locator(".list-group-item.list-group-item-action")).toBeEnabled();
    await page.locator(".list-group-item.list-group-item-action").click();

    await page.waitForSelector(".list-group-item.list-group-item-action:nth-child(1)");
    await expect(page.locator(".list-group-item.list-group-item-action:nth-child(1)")).toBeEnabled();
    await page.locator('.list-group-item.list-group-item-action:nth-child(1)').click();

    await page.waitForSelector(".list-group-item.list-group-item-action:nth-child(1)");
    await expect(page.locator(".list-group-item.list-group-item-action:nth-child(1)")).toBeEnabled();
    await page.locator('.list-group-item.list-group-item-action:nth-child(1)').click();

    await expect(page.locator("//a[normalize-space()='MpegTS/UDP']")).toBeEnabled();
    await page.waitForSelector("//a[normalize-space()='MpegTS/UDP']");
    await page.waitForSelector("#udp_host");
    await expect(page.locator("#udp_host")).toBeEnabled();
    await page.locator("#udp_host").fill("10.0.0.43");
    await page.waitForSelector("#udp_port");
    await expect(page.locator("#udp_port")).toBeEnabled();
    await page.locator("#udp_port").fill(portnum);

    // await expect(page.locator("//a[normalize-space()='SRT']")).toBeEnabled();
    // await page.waitForSelector("//input[@id='srt_host']");
    // await expect(page.locator("//input[@id='srt_host']")).toBeEnabled();
    // await page.locator("//input[@id='srt_host']").fill("10.0.0.43");
    // await page.waitForSelector("//input[@id='srt_port']");
    // await expect(page.locator("//input[@id='srt_port']")).toBeEnabled();
    // await page.locator("//a[normalize-space()='SRT']").click();
    // await page.locator("//input[@id='srt_port']").fill(portnum);
    // // await page.locator("//select[@id='srt_mode']").selectOption('listener');
    // await page.waitForSelector("[id='log_level']");
    // await expect(page.locator("[id='log_level']")).toBeEnabled();
    // // await page.waitForTimeout(2000);


    await page.locator("[id='log_level']").selectOption('INFO');
    await expect.soft(page.locator("[id='log_level']")).toHaveValue('INFO');
    await page.locator("[id='log_level']").selectOption('INFO');
    await expect.soft(page.locator("[id='log_level']")).toHaveValue('INFO');
    await page.locator("[id='log_level']").selectOption('INFO');
    await expect.soft(page.locator("[id='log_level']")).toHaveValue('INFO');
    // await page.waitForTimeout(2000);

    // const dropdown = page.locator("[id='log_level']");

    // await dropdown.waitFor();
    // await expect(dropdown).toBeEnabled();

    // const maxRetries = 5;
    // let selected = false;

    // for (let attempt = 1; attempt <= maxRetries; attempt++) {
    //   await dropdown.selectOption('INFO');
    //   const value = await dropdown.inputValue();

    //   if (value === 'INFO') {
    //     selected = true;
    //     break;
    //   }

    //   console.warn(`Attempt ${attempt}: Selection failed, retrying...`);
    //   await page.waitForTimeout(500); // short delay before retry
    // }

    // expect(selected).toBeTruthy(); // Final assertion: should be selected

    await page.waitForSelector("//button[normalize-space()='Add Input']");
    await expect(page.locator("//button[normalize-space()='Add Input']")).toBeEnabled();
    // await page.waitForTimeout(6000);
    await page.locator("//button[normalize-space()='Add Input']").click();
    await page.waitForSelector("//button[normalize-space()='Next']");
    await expect(page.locator("//button[normalize-space()='Next']")).toBeEnabled();
    await page.locator("//button[normalize-space()='Next']").click();

    // Profile
    await page.getByText('+ Add Profile').waitFor();
    expect(page.getByText('+ Add Profile')).toBeEnabled
    await page.getByText('+ Add Profile').click();
    await page.waitForSelector("//a[normalize-space()='OTT_PAL_720x576']");
    await page.locator("//a[normalize-space()='OTT_PAL_720x576']").click();
    await page.locator("//div[@class='form-check form-switch d-flex align-items-center m-0 gap-3']//input[@id='enable_status']").click();
    await page.locator("//select[@id='framerate_preset']").selectOption('25');
    await page.locator('[id="vbitrate"]').waitFor();
    await page.locator('[id="vbitrate"]').fill("1500");
    await page.waitForSelector("//button[normalize-space()='Add Profile']");
    await expect(page.locator("//button[normalize-space()='Add Profile']")).toBeEnabled();
    await page.locator("//button[normalize-space()='Add Profile']").click();
    await page.waitForSelector("//button[normalize-space()='Next']")
    await expect(page.locator("//button[normalize-space()='Next']")).toBeEnabled();
    await page.locator("//button[normalize-space()='Next']").click();

    // Output
    await page.getByRole('button', { name: 'Output' }).waitFor();
    await page.getByRole('button', { name: 'Output' }).click();
    await expect(page.getByRole('button', { name: 'Output' })).toBeEnabled();
    await page.getByText('+ Add Sink').waitFor();
    await expect(page.getByText('+ Add Sink')).toBeEnabled();
    await page.getByText('+ Add Sink').click();

    // await page.waitForSelector("//a[normalize-space()='HLS']")
    // await expect(page.locator("//a[normalize-space()='HLS']")).toBeEnabled();
    // await page.locator("//a[normalize-space()='HLS']").click();
    // await page.locator("//input[@id='output_name']").fill(jobName);
    // await page.getByRole('button', { name: '+ Add Variant' }).click();
    // // await page.getByRole('spinbutton', { name: 'Bitrate*' }).fill("3275");
    // await page.getByText('+ Add Track').waitFor();
    // await expect(page.getByText('+ Add Track')).toBeEnabled();
    // await page.getByText('+ Add Track').click();
    // await page.waitForSelector("//a[normalize-space()='1_video ( 1_OTT_PAL_720x576 )']")
    // await expect(page.locator("//a[normalize-space()='1_video ( 1_OTT_PAL_720x576 )']")).toBeEnabled();
    // await page.locator("//a[normalize-space()='1_video ( 1_OTT_PAL_720x576 )']").click();
    // await expect(page.getByText('+ Add Track')).toBeEnabled();
    // await page.getByText('+ Add Track').click();
    // await page.waitForSelector("//a[normalize-space()='1_audio ( 1_OTT_PAL_720x576 )']");
    // await expect(page.locator("//a[normalize-space()='1_audio ( 1_OTT_PAL_720x576 )']")).toBeEnabled();
    // await page.locator("//a[normalize-space()='1_audio ( 1_OTT_PAL_720x576 )']").click();
    // await expect(page.locator("//button[normalize-space()='Add Output']")).toBeEnabled();
    // await page.locator("//button[normalize-space()='Add Output']").click();
    // await expect(page.locator(("//button[normalize-space()='Add Job']"))).toBeEnabled();
    // await page.locator("//button[normalize-space()='Add Job']").click();


    // await page.waitForSelector("/ / a[normalize - space()='MpegTS/UDP']")
    // await expect(page.locator("//a[normalize-space()='MpegTS/UDP']")).toBeEnabled();
    // await page.locator("//a[normalize-space()='MpegTS/UDP']").click();
    // await page.locator("//input[@id='output_name']").fill(jobName); // Use dynamic job name
    // await page.locator("#udp_host").fill("10.0.100.56");
    // await page.locator("#udp_port").fill(srtPort.toString()); // Dynamic port

    // TracksE
    // await page.getByText('+ Add Track').waitFor();
    // await expect(page.getByText('+ Add Track')).toBeEnabled();
    // await page.getByText('+ Add Track').click();
    // await page.waitForSelector("//a[normalize-space()='1_video ( 1_OTT_PAL_720x576 )']']")
    // await expect(page.locator("//a[normalize-space()='1_video ( 1_OTT_PAL_720x576 )']']")).toBeEnabled();
    // await page.locator("//a[normalize-space()='1_video ( 1_OTT_PAL_720x576 )']']").click();
    // await expect(page.getByText('+ Add Track')).toBeEnabled();
    // await page.getByText('+ Add Track').click();
    // await page.waitForSelector("//a[normalize-space()='1_audio ( 1_OTT_PAL_720x576 )']']");
    // await expect(page.locator("//a[normalize-space()='1_audio ( 1_OTT_PAL_720x576 )']']")).toBeEnabled();
    // await page.locator("//a[normalize-space()='1_audio ( 1_OTT_PAL_720x576 )']']").click();
    // await expect(page.locator("//button[normalize-space()='Add Output']")).toBeEnabled();
    // await page.locator("//button[normalize-space()='Add Output']").click();
    // await expect(page.locator(("//button[normalize-space()='Add Job']"))).toBeEnabled();
    // await page.locator("//button[normalize-space()='Add Job']").click();
    await page.reload();
    console.log(`Created job: ${jobName} with port ${srtPort}`);

  }
});
