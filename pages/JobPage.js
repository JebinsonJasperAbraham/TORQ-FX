import { expect } from "@playwright/test";
import { ToastMessages } from '../config/ValidationMessage.js';

export class JobPage {
    constructor(page) {
        this.page = page;

        this.SideMenuJob = page.locator('(//span[@class="sidebar-txt ms-3"])[2]');
        this.TORQSubMenu = page.locator('ul[class="sidebar-link-group "]');
        this.toastMessage = page.locator("//div[@role='alert']").nth(1);
        this.CloseX = page.locator('(//button[@aria-label="close"])[2]');
        this.NewJob = page.locator('.fa-light.fa-plus');
        this.AddSource = page.locator("//div[normalize-space(text())='+ Add Source']");
        this.UDPInAndOut = page.locator('//a[normalize-space()="MpegTS/UDP"]');
        this.UDPInIP = page.locator('#udp_host');
        this.UDPInPort = page.locator('#udp_port');
        this.AddInputBtn = page.locator('//button[normalize-space()="Add Input"]');
        this.ValidatingAddedInput = page.locator('//div[contains(@class,"col-7")][normalize-space()="udp_1"]');
        this.EncodeBtn = page.locator("(//a[normalize-space(text())='Encode'])[1]");
        this.AddProfileBtn = page.locator("//div[normalize-space(text())='+ Add Profile']");
        this.EncodeType = page.locator("#encode_type");
        this.AddProfileInEncode = page.locator('//button[normalize-space()="Add Profile"]');
        this.AddedProfileValidation = page.locator("//div[contains(@class,'job-input-box')]//div[@class='col-10']");
        this.OutputBtn = page.locator("(//a[normalize-space(text())='Output'])[1]");
        this.AddSinkBtn = page.locator("//div[normalize-space(text())='+ Add Output']");
        // this.AddSinkBtn = page.locator("//div[normalize-space(text())='+ Add Sink']");
        this.Outputname = page.locator('#output_name');
        this.JobName = page.locator('#job_name')
        this.OutputMuxBitrate = page.locator('#muxer_bitrate')
        this.AddTrackInOutput = page.locator("//div[normalize-space(text())='+ Add Track']")
        this.VideoTrack1080p = page.locator("//a[contains(text(),'1920x1080') and contains(text(),'video')]")
        this.AudioTrack1080p = page.locator("//a[contains(text(),'1920x1080') and contains(text(),'audio')]")
        this.VideoTrack720p = page.locator("//a[contains(text(),'1280x720') and contains(text(),'video')]")
        this.AudioTrack720p = page.locator("//a[contains(text(),'1280x720') and contains(text(),'audio')]")
        this.VideoTrack480p = page.locator("//a[contains(text(),'854x480') and contains(text(),'video')]")
        this.AudioTrack480p = page.locator("//a[contains(text(),'854x480') and contains(text(),'audio')]")
        this.VideoTrack480p = page.locator("//a[contains(text(),'854x480') and contains(text(),'video')]")
        this.AudioTrack480p = page.locator("//a[contains(text(),'854x480') and contains(text(),'audio')]")
        this.VideoTrack360p = page.locator("//a[contains(text(),'640x360') and contains(text(),'video')]")
        this.AudioTrack360p = page.locator("//a[contains(text(),'640x360') and contains(text(),'audio')]")
        this.VideoTrack576p = page.locator("//a[contains(text(),'720x576') and contains(text(),'video')]")
        this.AudioTrack576p = page.locator("//a[contains(text(),'720x576') and contains(text(),'audio')]")
        this.VideoTrackPassthrough = page.locator("//a[contains(text(),'Passthrough') and contains(text(),'video')]")
        this.AudioTrackPassthrough = page.locator("//a[contains(text(),'Passthrough') and contains(text(),'audio')]")
        this.Video_Trac_Val_1080 = page.locator("//label[contains(text(), '1920x1080') and contains(text(), 'video')]")
        this.Audio_Trac_Val_1080 = page.locator("//label[contains(text(), '1920x1080') and contains(text(), 'audio')]")
        this.Video_Trac_Val_720 = page.locator("//label[contains(text(), '1280x720') and contains(text(), 'video')]")
        this.Audio_Trac_Val_720 = page.locator("//label[contains(text(), '1280x720') and contains(text(), 'audio')]")
        this.Video_Trac_Val_480 = page.locator("//label[contains(text(), '854x480') and contains(text(), 'video')]")
        this.Audio_Trac_Val_480 = page.locator("//label[contains(text(), '854x480') and contains(text(), 'audio')]")
        this.Video_Trac_Val_360 = page.locator("//label[contains(text(), '640x360') and contains(text(), 'video')]")
        this.Audio_Trac_Val_360 = page.locator("//label[contains(text(), '640x360') and contains(text(), 'audio')]")
        this.Video_Trac_Val_576 = page.locator("//label[contains(text(), '720x576') and contains(text(), 'video')]")
        this.Audio_Trac_Val_576 = page.locator("//label[contains(text(), '720x576') and contains(text(), 'audio')]")
        this.Video_Trac_Val_Passthrough = page.locator("//label[contains(text(), 'Passthrough') and contains(text(), 'video')]")
        this.Audio_Trac_Val_Passthrough = page.locator("//label[contains(text(), 'Passthrough') and contains(text(), 'audio')]")
        this.AddOutputBtn = page.locator("//button[normalize-space()='Add Output']")
        // this.AddOutputBtn = page.locator("//div[normalize-space()='+ Add Output']")
        this.AddJob = page.locator("//button[normalize-space()='Add Job']");
        this.JobCreatedPopUp = page.locator("#swal2-html-container");
        this.OkBtn = page.locator("//button[normalize-space()='OK']");
        this.HwScalingToggle = page.locator('[name="hw_scaling"]');
        this.HwDecoderToggle = page.locator('[name="hw_decoder"]');
        this.hwDecFrameTypeDropdown = page.locator('#hw_dec_frame_type');
        this.SourceName = page.locator('[name="stream_name"]');
        this.StartJob = page.locator('//i[contains(@class,"fa-solid fa-circle-play")]');
        this.ActiveIndicatorValidation = page.locator("//div[contains(@class,'job-active')]");
        this.StatPage = page.locator('[data-rr-ui-event-key="stat"]');
        this.StatPageInput = page.locator("(//a[contains(@class,'nav-link') and normalize-space()='Input'])[2]");
        this.JobUpTime = page.locator('//div[@class="text-primary align-self-center"]');
        this.HLSOutBtn = page.locator('//a[normalize-space()="HLS"]');
        this.AddVarientBtn = page.locator('//button[normalize-space()="+ Add Variant"]');
        this.AddedProfileValidForRTMPAndHLSTrackone = page.locator("(//label[contains(@class,'fw-medium')])[1]");
        this.AddedProfileValidForRTMPAndHLSTrackTwo = page.locator("(//label[contains(@class,'fw-medium')])[2]");
        this.SRTInputOutput = page.locator('//a[normalize-space()="SRT"]');
        this.SRTIp = page.locator('#srt_host');
        this.SRTPort = page.locator('#srt_port');
        this.SRTMode = page.locator('#srt_mode');
        this.StatPageThumbnail = page.locator("//img[contains(@src, 'thumbnail')]");
        this.JobIdleVideoAudio = page.locator("//div[contains(@class,'job-idle')]");
        this.JobInactiveVideoAudio = page.locator("//div[contains(@class,'job-inactive')]");
        this.StopJob = page.locator("//div[contains(@class,'text-primary') and contains(@class,'rounded-pill')]").first();
        this.RTMPInputOutput = page.locator('//a[normalize-space()="RTMP"]');
        this.RTMPServerUrl = page.locator('#rtmp_server_url');
        this.SreamName = page.locator('#rtmp_stream_name');
        this.HTTPinput = page.locator('//a[normalize-space()="HTTP"]');
        this.HTTPServerUrl = page.locator('#http_server_url');
        this.FILEStreamInput = page.locator('//a[normalize-space()="File Stream"]');
        this.FMBroswseToFolder = page.locator('//button[@class="list-group-item list-group-item-action"]');
        this.BrowseFileFM = page.locator('//button[normalize-space()="Browse"]');
        this.BrowseFileQA = page.locator('//button[normalize-space()="📁 QA"]');
        this.Assets = page.locator('//button[normalize-space()="📁 assets"]');
        this.FHDFile = page.locator('//button[contains(normalize-space(.), "big_buck_bunny_1080p.mp4")]');
        this.SelectedInputFile = page.locator('//input[@id="file_location"]');
        this.RAWInputDevices = page.locator('#device_persistent_id');
        this.DeviceInterface = page.locator('#device_interface');
        this.MagCheckedStatus = page.locator('#device_persistent_id option:checked');
        this.RAWinput = page.locator('//a[normalize-space()="RAW"]');
        this.TestPatternInput = page.locator('//a[normalize-space()="Test Pattern"]');
        this.Stopvalidation = page.locator("//div[contains(@class,'source-hover') and normalize-space(text())='Stop']");
        this.BulkStart = page.locator('//button[normalize-space()="Start"]');
        this.BulkStop = page.locator('//button[normalize-space()="Stop"]');
        this.outputPageSingle = page.locator('(//*[@class="col-10"])[3]');
        this.UpdateOutput = page.locator('//button[normalize-space()="Update Output"]');
        this.UpdateJob = page.locator('//button[normalize-space()="Update Job"]');
        this.srtPWD = page.locator('#srt_password');
        this.HLSChunkDuration = page.locator('#chunk_duration');
        this.HLSChunkCount = page.locator('#chunk_count');
        this.EnableDisableHLSOOF = page.locator('#overwrite_old_file');
        this.ConfigPage = page.locator('//a[normalize-space()="Config"]');
        this.resolutionDropdown = page.locator(`//select[@id='resolution']`);
        this.frameratedropdown = page.locator('#framerate_preset');
        this.framerateEnableDisable = page.locator("(//input[@id='enable_status'])[1]");
        this.Scalingtype = page.locator('(//select[@id="resizer_method"])[1]');
        this.customframerateinputbox = page.locator('#framerate');
        this.darwidth = page.locator('#dar_width');
        this.darheight = page.locator('#dar_height');
        this.GOPinterval = page.locator('#ifi');
        this.bitratewval = page.locator('#vbitrate');
        this.ratecontrolmode = page.locator('#rc_mode');
        this.bufferdelay = page.locator('#init_delay');
        this.level = page.locator('#level');
        this.rcenable = page.locator('#RcEnable');
        this.minframedelay = page.locator('#minFramesDelay');
        this.vbvmaxrate = page.locator('#vbvMaxRate');
        this.goppresetindex = page.locator('#gopPresetIdx');
        this.audioinencode = page.locator('//a[contains(text(), "audio")]');
        this.audioratecontrolmode = page.locator('//select[@id="acodec_rc"]');
        this.audiobitrate = page.locator('#abitrate');
        this.audioprofile = page.locator('#acodec_profile');
        this.AudioResample = page.locator('[data-element-name="audio_resampler"]');
        this.audiosampledrop = page.locator('#sample_rate');
        this.audioacompliancedrop = page.locator('#acompliance');
        this.audiostreamformatedrop = page.locator('#stream_format');




        // this. = page.locator('');
    }

    async TORQJobListPage() {
        await this.page.waitForTimeout(3000);

        try {
            // Try normal flow
            if (await this.SideMenuJob.isVisible()) {
                await expect.soft(this.SideMenuJob).toBeEnabled();
                await this.SideMenuJob.click();
                await expect.soft(this.TORQSubMenu).toBeEnabled();
                await this.TORQSubMenu.click();
                return; // exit once done
            }
        } catch (e) {
            console.warn("SideMenuJob not immediately available:", e.message);
        }

        // Recovery flow if above fails
        try {
            await expect.soft(this.SideMenuJob).toBeEnabled();
            await this.SideMenuJob.click();

            while (await this.toastMessage.isVisible()) {
                await this.page.waitForTimeout(8000);
                await expect(this.SideMenuJob).toBeEnabled();
                await this.SideMenuJob.click();
                await expect(this.TORQSubMenu).toBeEnabled();
                await this.TORQSubMenu.click();
            }
        } catch (e) {
            console.error("Failed to open TORQ Job List Page:", e.message);
            throw e; // rethrow so test fails
        }
    }
    async TORQSUBMENUFromJob() {
        await this.page.waitForTimeout(2000);

        // Case 1: If TORQ SubMenu is visible, click it
        if (await this.TORQSubMenu.isVisible()) {
            await this.page.waitForTimeout(4000);
            await this.TORQSubMenu.click();
        }

        // Case 2: If not visible, try clicking SideMenuJob until SubMenu appears
        if (!await this.TORQSubMenu.isVisible()) {
            await expect(this.SideMenuJob).toBeEnabled();
            await this.SideMenuJob.click();
            await expect.soft(this.TORQSubMenu).toBeEnabled();
            if (await this.TORQSubMenu.isVisible()) {
                await this.TORQSubMenu.click();

            }
        }

        // Recovery loop while toast is visible
        while (await this.toastMessage.isVisible()) {
            await this.page.waitForTimeout(9000);
            await this.SideMenuJob.click();
            await expect(this.TORQSubMenu).toBeEnabled();
            await this.TORQSubMenu.click();
        }

        await this.page.waitForTimeout(4000);
    }

    // async TORQSUBMENUFromJob() {
    //     await this.page.waitForTimeout(2000);
    //     if (await this.TORQSubMenu.isVisible()) {
    //         await this.page.waitForTimeout(4000);
    //         await this.TORQSubMenu.click();
    //         while (await this.toastMessage.isVisible()) {
    //             await this.page.waitForTimeout(9000);
    //             await this.SideMenuJob.click();
    //             await expect(this.TORQSubMenu).toBeEnabled();
    //             await this.TORQSubMenu.click();
    //         }

    //         if (!await this.TORQSubMenu.isVisible()) {
    //             await expect(this.SideMenuJob).toBeEnabled();
    //             await this.SideMenuJob.click();
    //             await expect.soft(this.TORQSubMenu).toBeEnabled();
    //             await this.TORQSubMenu.click();
    //             while (await this.toastMessage.isVisible()) {
    //                 await this.page.waitForTimeout(9000);
    //                 await this.SideMenuJob.click();
    //                 await expect(this.TORQSubMenu).toBeEnabled();
    //                 await this.TORQSubMenu.click();
    //             }
    //             await this.page.waitForTimeout(4000);
    //         }

    //     }
    // }
    // return; // done, exit
    // Recovery loop ONLY if SubMenu still not visible
    // } catch (error) {
    //     console.log("Failed inside TORQSUBMENUFromJob:", error.message);
    //     throw error; // rethrow so the test fails properly


    async JobNameDecoderScalingType({ HWDecoderDisable, HW_scaling, Jobname, HW_SW_Decode, HW_Decode, SW_Decode }) {
        if (!(await this.HwDecoderToggle.isChecked())) {
            await this.HwDecoderToggle.click();
            await expect(this.HwDecoderToggle).toBeChecked();
        }
        if (HWDecoderDisable) {
            if (await this.HwDecoderToggle.isChecked()) {
                await this.HwDecoderToggle.click();
                await expect(this.HwDecoderToggle).not.toBeChecked();
            }

        }
        await this.page.waitForTimeout(2000);
        if (HW_scaling) {
            await this.HwScalingToggle.click();
            await expect(this.HwScalingToggle).toBeChecked();
        }
        if (HW_SW_Decode) {
            await expect(this.hwDecFrameTypeDropdown).toBeEnabled();
            await this.hwDecFrameTypeDropdown.selectOption(HW_SW_Decode);
            await expect(this.hwDecFrameTypeDropdown).toHaveValue(HW_SW_Decode);
        }
        await expect(this.JobName).toBeEnabled();
        await this.JobName.fill(Jobname);
        await expect(this.JobName).toHaveValue(Jobname)

    }
    async NewJobAddSource() {
        await expect(this.NewJob).toBeEnabled();
        await this.NewJob.click();
        await this.page.waitForTimeout(2000);
    }
    async UDPInput({ udpinip, udpinport }) {
        await this.AddSource.click();
        await this.UDPInAndOut.click();
        await this.UDPInIP.fill(udpinip);
        await expect(this.UDPInIP).toHaveValue(udpinip);
        await this.UDPInPort.fill(udpinport);
        await expect(this.UDPInPort).toHaveValue(udpinport);
    }
    async SRTCallerInput({ srtinip, srtinport, srtpwd }) {
        await this.AddSource.click();
        await this.SRTInputOutput.click();
        await this.SRTIp.fill(srtinip);
        await expect(this.SRTIp).toHaveValue(srtinip);
        if (srtpwd) {
            await this.srtPWD.fill(srtpwd);
            await expect(this.srtPWD).toHaveValue(srtpwd);
        }
        await this.SRTPort.fill(srtinport);
        await expect(this.SRTPort).toHaveValue(srtinport);
    }
    async SRTListenerInput({ srtinip, srtinport, srtmodelistener, srtpwd }) {
        await this.AddSource.click();
        await this.SRTInputOutput.click();
        await this.SRTIp.fill(srtinip);
        await expect(this.SRTIp).toHaveValue(srtinip);
        if (srtpwd) {
            await this.srtPWD.fill(srtpwd);
            await expect(this.srtPWD).toHaveValue(srtpwd);
        }
        await this.SRTPort.fill(srtinport);
        await expect(this.SRTPort).toHaveValue(srtinport);
        await this.SRTMode.selectOption(srtmodelistener);
        await expect(this.SRTMode).toHaveValue(srtmodelistener);
    }
    async RTMPInput({ rtmpserverurl, streamname }) {
        await this.AddSource.click();
        await this.RTMPInputOutput.click();
        await this.RTMPServerUrl.fill(rtmpserverurl);
        await expect(this.RTMPServerUrl).toHaveValue(rtmpserverurl);
        await this.SreamName.fill(streamname);
        await expect(this.SreamName).toHaveValue(streamname);
    }
    async HTTPInput({ httpserverurl }) {
        await this.AddSource.click();
        await this.HTTPinput.click();
        await this.HTTPServerUrl.fill(httpserverurl);
        await expect(this.HTTPServerUrl).toHaveValue(httpserverurl);
    }
    async RAWInput({ rawinputdevice, rawinputdevicevalue, rawinterface }) {
        await this.AddSource.click();
        await this.RAWinput.click();
        await this.RAWInputDevices.selectOption(rawinputdevice);
        await expect(this.RAWInputDevices).toContainText(rawinputdevicevalue);
        // await expect(this.MagCheckedStatus).toHaveText(rawinputdevicevalue); 

        if (rawinterface) {
            await this.DeviceInterface.selectOption(rawinterface);
            await expect(this.DeviceInterface).toHaveValue(rawinterface);

        }

    }
    async FileStreamInput({ selectedfile }) {
        await this.AddSource.click();
        await this.FILEStreamInput.click();
        await this.BrowseFileFM.click();
        await this.BrowseFileQA.click();
        await this.FMBroswseToFolder.click();
        await this.Assets.click();
        // await this.InputFolderBtn.click();
        await this.FHDFile.click();
        const inputValue = await this.SelectedInputFile.inputValue();
        expect(inputValue).toContain(selectedfile);
    }
    async TPInput() {
        await this.AddSource.click();
        await this.TestPatternInput.click();

    }

    async AddInputButton() {
        const SourceNamevalue = await this.JobName.inputValue();
        await this.SourceName.fill(SourceNamevalue);
        await expect(this.AddInputBtn).toBeEnabled();
        await this.AddInputBtn.click();

    }
    async AddedInputValidation() {
        const inputaddedvalidation = await this.JobName.inputValue();
        const addedInputlocator = this.page.locator(`//div[contains(@class,"col-7")][normalize-space()="${inputaddedvalidation}"]`);
        await expect(addedInputlocator).toHaveText(inputaddedvalidation);
    }

    async selectDropdownOption({ profilevalue_1080p, profilevalue_720p, profilevalue_480p, profilevalue_360p, profilevalue_576P, profilevalue_Passthrough, encodetype, resValue, framrateval, customframerate, Scalingtype, darwidthval, darheightval, GOPval, bitrate, ratecontrolmodeval, bufferdelayval, levelval, rcenablestatus, minframedelaystatus, vbvmaxrateval, goppresetindexval, audioratecontrolval, audiobitrateval, audioresampleval, audioacompliancedropval, audiostreamformatedropval, audioprofiledropval }) {
        if (profilevalue_1080p) {
            await expect(this.EncodeBtn).toBeEnabled();
            await this.EncodeBtn.click();
            await expect(this.AddProfileBtn).toBeEnabled();
            await this.AddProfileBtn.click();
            await this.page.locator(`//div[contains(@class,'dropdown-menu') and contains(@class,'show')]//a[normalize-space(text())='${profilevalue_1080p}']`).click();
            if (encodetype) {
                await this.EncodeType.selectOption(encodetype);
                await expect(this.EncodeType).toHaveValue(encodetype);
            }
            if (resValue) {
                await expect(this.resolutionDropdown).toBeEnabled();
                await this.resolutionDropdown.selectOption(resValue, { timeout: 10000 });
                await expect(this.resolutionDropdown).toHaveValue(resValue);
            }

            if (framrateval) {
                await this.framerateEnableDisable.click();
                await expect(this.framerateEnableDisable).toBeChecked();
                await this.frameratedropdown.selectOption(framrateval, { timeout: 10000 });
                await expect(this.frameratedropdown).toHaveValue(framrateval);
            }
            if (customframerate) {
                await expect(this.customframerateinputbox).toBeVisible();
                await this.customframerateinputbox.fill(customframerate);
                await expect(this.customframerateinputbox).toHaveValue(customframerate);

            }
            if (Scalingtype) {
                await this.Scalingtype.selectOption(Scalingtype);
                await expect(this.Scalingtype).toHaveValue(Scalingtype);
            }
            if (darwidthval && darheightval) {
                await this.darwidth.fill(darwidthval);
                await expect(this.darwidth).toHaveValue(darwidthval);
                await this.darheight.fill(darheightval);
                await expect(this.darheight).toHaveValue(darheightval);

            }
            if (GOPval) {
                await this.GOPinterval.fill(GOPval);
                await expect(this.GOPinterval).toHaveValue(GOPval);

            }
            if (bitrate) {
                await expect(this.bitratewval).not.toBeEmpty();

            }
            if (ratecontrolmodeval) {
                await this.ratecontrolmode.selectOption(ratecontrolmodeval);
                await expect(this.ratecontrolmode).toHaveValue(ratecontrolmodeval);

            }
            if (bufferdelayval) {
                await expect(this.bufferdelay).not.toBeEmpty();
            }

            if (ratecontrolmodeval) {
                await this.ratecontrolmode.selectOption(ratecontrolmodeval);
                await expect(this.ratecontrolmode).toHaveValue(ratecontrolmodeval);

            }

            if (levelval) {
                await this.level.selectOption(levelval);
                await expect(this.level).toHaveValue(levelval);

            }
            if (rcenablestatus) {
                await this.rcenable.waitFor({ state: 'attached' })
                await expect(this.rcenable).toBeChecked();
            }

            if (minframedelaystatus) {
                await this.minframedelay.waitFor({ state: 'attached' })
                await expect(this.minframedelay).not.toBeChecked();

            }
            if (vbvmaxrateval) {
                await expect(this.vbvmaxrate).not.toBeEmpty();

            }
            if (goppresetindexval) {
                await this.goppresetindex.selectOption(goppresetindexval);
                await expect(this.goppresetindex).toHaveValue(goppresetindexval);

            }

            //Audio


            if (audioratecontrolval) {
                await this.audioinencode.click();
                await expect(this.audioratecontrolmode).toBeEnabled();
                await this.audioratecontrolmode.selectOption(audioratecontrolval);
                await expect(this.audioratecontrolmode).toHaveValue(audioratecontrolval);

            }

            if (audiobitrateval) {
                await this.audioinencode.click();
                await expect(this.audiobitrate).toHaveText(audiobitrateval);
                await expect(this.audiobitrate).not.toBeEmpty();
            }

            if (audioacompliancedropval && audiostreamformatedropval) {
                await this.audioinencode.click();
                await this.audioacompliancedrop.selectOption(audioacompliancedropval);
                await expect(this.audioacompliancedrop).toHaveValue(audioacompliancedropval);
                await this.audiostreamformatedrop.selectOption(audiostreamformatedropval);
                await expect(this.audiostreamformatedrop).toHaveValue(audiostreamformatedropval);
            }
            if (audioresampleval) {
                await this.audioinencode.click();
                await this.AudioResample.click();
                await expect(this.AudioResample).toBeChecked();
                await this.audiosampledrop.selectOption(audioresampleval);
                await expect(this.audiosampledrop).toHaveValue(audioresampleval);
            }
            if (audioacompliancedropval && audioprofiledropval) {
                await this.audioinencode.click();
                await this.audioacompliancedrop.selectOption(audioacompliancedropval);
                await expect(this.audioacompliancedrop).toHaveValue(audioacompliancedropval);
                await this.audioprofile.selectOption(audioprofiledropval);
                await expect(this.audioprofile).toHaveValue(audioprofiledropval);
            }
            await this.AddProfileInEncode.click();
        }
        if (profilevalue_720p) {
            await expect(this.EncodeBtn).toBeEnabled();
            await this.EncodeBtn.click();
            await expect(this.AddProfileBtn).toBeEnabled();
            await this.AddProfileBtn.click();
            await this.page.locator(`//div[contains(@class,'dropdown-menu') and contains(@class,'show')]//a[normalize-space(text())='${profilevalue_720p}']`).click();
            if (encodetype) {
                await this.EncodeType.selectOption(encodetype);
                await expect(this.EncodeType).toHaveValue(encodetype);
            }
            if (resValue) {
                await expect(this.resolutionDropdown).toBeEnabled();
                await this.resolutionDropdown.selectOption(resValue, { timeout: 10000 });
                await expect(this.resolutionDropdown).toHaveValue(resValue);
            }
            await this.AddProfileInEncode.click();
        }
        if (profilevalue_480p) {
            await expect(this.EncodeBtn).toBeEnabled();
            await this.EncodeBtn.click();
            await expect(this.AddProfileBtn).toBeEnabled();
            await this.AddProfileBtn.click();
            await this.page.locator(`//div[contains(@class,'dropdown-menu') and contains(@class,'show')]//a[normalize-space(text())='${profilevalue_480p}']`).click();
            if (encodetype) {
                await this.EncodeType.selectOption(encodetype);
                await expect(this.EncodeType).toHaveValue(encodetype);
            }
            if (resValue) {
                await expect(this.resolutionDropdown).toBeEnabled();
                await this.resolutionDropdown.selectOption(resValue, { timeout: 10000 });
                await expect(this.resolutionDropdown).toHaveValue(resValue);
            }
            await this.AddProfileInEncode.click();
        }
        if (profilevalue_360p) {
            await expect(this.EncodeBtn).toBeEnabled();
            await this.EncodeBtn.click();
            await expect(this.AddProfileBtn).toBeEnabled();
            await this.AddProfileBtn.click();
            await this.page.locator(`//div[contains(@class,'dropdown-menu') and contains(@class,'show')]//a[normalize-space(text())='${profilevalue_360p}']`).click();
            await this.page.waitForTimeout(800);
            if (encodetype) {
                await this.EncodeType.selectOption(encodetype);
                await expect(this.EncodeType).toHaveValue(encodetype);
            }
            if (resValue) {
                await expect(this.resolutionDropdown).toBeEnabled();
                await this.resolutionDropdown.selectOption(resValue, { timeout: 10000 });
                await expect(this.resolutionDropdown).toHaveValue(resValue);
            }
            await this.AddProfileInEncode.click();
        }
        if (profilevalue_576P) {
            await expect(this.EncodeBtn).toBeEnabled();
            await this.EncodeBtn.click();
            await expect(this.AddProfileBtn).toBeEnabled();
            await this.AddProfileBtn.click();
            await this.page.locator(`//div[contains(@class,'dropdown-menu') and contains(@class,'show')]//a[normalize-space(text())='${profilevalue_576P}']`).click();
            if (encodetype) {
                await this.EncodeType.selectOption(encodetype);
                await expect(this.EncodeType).toHaveValue(encodetype);
            }
            if (resValue) {
                await expect(this.resolutionDropdown).toBeEnabled();
                await this.resolutionDropdown.selectOption(resValue, { timeout: 10000 });
                await expect(this.resolutionDropdown).toHaveValue(resValue);
            }
            await this.AddProfileInEncode.click();
        }
        if (profilevalue_Passthrough) {
            await expect(this.EncodeBtn).toBeEnabled();
            await this.EncodeBtn.click();
            await expect(this.AddProfileBtn).toBeEnabled();
            await this.AddProfileBtn.click();
            if (encodetype) {
                await this.EncodeType.selectOption(encodetype);
                await expect(this.EncodeType).toHaveValue(encodetype);
            }
            if (resValue) {
                await expect(this.resolutionDropdown).toBeEnabled();
                await this.resolutionDropdown.selectOption(resValue, { timeout: 10000 });
                await expect(this.resolutionDropdown).toHaveValue(resValue);
            }
            await this.AddProfileInEncode.click();
        }

    }

    async OutputButton() {
        await this.OutputBtn.click();

    }

    async UDPOutput() {
        await this.UDPInAndOut.click();
    }


    async udpoutput({ udpoutip, udpoutport, outputbitrate, P1080p, P720p, P480p, P360p, P576p, PPassthrough }) {
        await this.AddSinkBtn.click();
        await this.UDPInAndOut.click();
        const sourcenamevalue = await this.JobName.inputValue();
        await this.Outputname.fill(sourcenamevalue);
        await this.UDPInIP.fill(udpoutip);
        await expect(this.UDPInIP).toHaveValue(udpoutip);
        await this.UDPInPort.fill(udpoutport);
        await expect(this.UDPInPort).toHaveValue(udpoutport);
        await this.OutputMuxBitrate.fill(outputbitrate);
        if (P1080p) {
            await this.AddTrackInOutput.click();
            await this.VideoTrack1080p.click();
            await this.AddTrackInOutput.click();
            await this.AudioTrack1080p.click();
            await expect(this.Video_Trac_Val_1080).toBeVisible();
            await expect(this.Audio_Trac_Val_1080).toBeVisible();

        }
        if (P720p) {
            await this.AddTrackInOutput.click();
            await this.VideoTrack720p.click();
            await this.AddTrackInOutput.click();
            await this.AudioTrack720p.click();
            await expect(this.Video_Trac_Val_720).toBeVisible();
            await expect(this.Video_Trac_Val_720).toBeVisible();
        }
        if (P480p) {
            await this.AddTrackInOutput.click();
            await this.VideoTrack480p.click();
            await this.AddTrackInOutput.click();
            await this.AudioTrack480p.click();
            await expect(this.Video_Trac_Val_480).toBeVisible();
            await expect(this.Audio_Trac_Val_480).toBeVisible();

        }
        if (P360p) {
            await this.AddTrackInOutput.click();
            await this.VideoTrack360p.click();
            await this.AddTrackInOutput.click();
            await this.AudioTrack360p.click();
            await expect(this.Video_Trac_Val_360).toBeVisible();
            await expect(this.Audio_Trac_Val_360).toBeVisible();

        }
        if (P576p) {
            await this.AddTrackInOutput.click();
            await this.VideoTrack576p.click();
            await this.AddTrackInOutput.click();
            await this.AudioTrack576p.click();
            await expect(this.Video_Trac_Val_576).toBeVisible();
            await expect(this.Audio_Trac_Val_576).toBeVisible();

        }
        if (PPassthrough) {
            await this.AddTrackInOutput.click();
            await this.VideoTrackPassthrough.click();
            await this.AddTrackInOutput.click();
            await this.AudioTrackPassthrough.click();
            await expect(this.Video_Trac_Val_Passthrough).toBeVisible();
            await expect(this.Audio_Trac_Val_Passthrough).toBeVisible();

        }
        await this.AddOutputBtn.click();



    }
    async SRToutputCaller({ srtoutipcaller, srtoutportcaller, srtmodecaller, outputbitrate, outputNameSuffixcaller, P1080p, P720p, P480p, P360p, P576p, PPassthrough }) {
        await this.AddSinkBtn.click();
        await this.SRTInputOutput.click();
        const sourcenamevalue = await this.JobName.inputValue();
        const finalOutputName = outputNameSuffixcaller ? `${sourcenamevalue}${outputNameSuffixcaller}` : sourcenamevalue;
        await this.Outputname.fill(finalOutputName);
        await this.SRTIp.fill(srtoutipcaller);
        await expect(this.SRTIp).toHaveValue(srtoutipcaller);
        await this.SRTPort.fill(srtoutportcaller);
        await expect(this.SRTPort).toHaveValue(srtoutportcaller);
        await this.SRTMode.selectOption(srtmodecaller);
        await this.OutputMuxBitrate.fill(outputbitrate);

        if (P1080p) {
            await this.AddTrackInOutput.click();
            await this.VideoTrack1080p.click();
            await this.AddTrackInOutput.click();
            await this.AudioTrack1080p.click();
            await expect(this.Video_Trac_Val_1080).toBeVisible();
            await expect(this.Audio_Trac_Val_1080).toBeVisible();

        }
        if (P720p) {
            await this.AddTrackInOutput.click();
            await this.VideoTrack720p.click();
            await this.AddTrackInOutput.click();
            await this.AudioTrack720p.click();
            await expect(this.Video_Trac_Val_720).toBeVisible();
            await expect(this.Video_Trac_Val_720).toBeVisible();
        }
        if (P480p) {
            await this.AddTrackInOutput.click();
            await this.VideoTrack480p.click();
            await this.AddTrackInOutput.click();
            await this.AudioTrack480p.click();
            await expect(this.Video_Trac_Val_480).toBeVisible();
            await expect(this.Audio_Trac_Val_480).toBeVisible();

        }
        if (P360p) {
            await this.AddTrackInOutput.click();
            await this.VideoTrack360p.click();
            await this.AddTrackInOutput.click();
            await this.AudioTrack360p.click();
            await expect(this.Video_Trac_Val_360).toBeVisible();
            await expect(this.Audio_Trac_Val_360).toBeVisible();

        }
        if (P576p) {
            await this.AddTrackInOutput.click();
            await this.VideoTrack576p.click();
            await this.AddTrackInOutput.click();
            await this.AudioTrack576p.click();
            await expect(this.Video_Trac_Val_576).toBeVisible();
            await expect(this.Audio_Trac_Val_576).toBeVisible();

        }
        if (PPassthrough) {
            await this.AddTrackInOutput.click();
            await this.VideoTrackPassthrough.click();
            await this.AddTrackInOutput.click();
            await this.AudioTrackPassthrough.click();
            await expect(this.Video_Trac_Val_Passthrough).toBeVisible();
            await expect(this.Audio_Trac_Val_Passthrough).toBeVisible();

        }

        await this.AddOutputBtn.click();
    }
    async SRToutputListener({ srtoutiplistener, srtoutportlistener, srtmodelistener, outputbitrate, outputNameSuffixlistener, P1080p, P720p, P480p, P360p, P576p, PPassthrough, srtpwd }) {
        await this.AddSinkBtn.click();
        await this.SRTInputOutput.click();
        const sourcenamevalue = await this.JobName.inputValue();
        const finalOutputName = outputNameSuffixlistener ? `${sourcenamevalue}${outputNameSuffixlistener}` : sourcenamevalue;
        await this.Outputname.fill(finalOutputName);
        await this.SRTIp.fill(srtoutiplistener);
        await expect(this.SRTIp).toHaveValue(srtoutiplistener);
        // if (srtpwd) {
        //     await this.srtPWD.fill(srtpwd);
        //     await expect(this.srtPWD).toHaveValue(srtpwd);
        // }
        await this.SRTPort.fill(srtoutportlistener);
        await expect(this.SRTPort).toHaveValue(srtoutportlistener);
        await this.SRTMode.selectOption(srtmodelistener);
        await this.OutputMuxBitrate.fill(outputbitrate);

        if (P1080p) {
            await this.AddTrackInOutput.click();
            await this.VideoTrack1080p.click();
            await this.AddTrackInOutput.click();
            await this.AudioTrack1080p.click();
            await expect(this.Video_Trac_Val_1080).toBeVisible();
            await expect(this.Audio_Trac_Val_1080).toBeVisible();

        }
        if (P720p) {
            await this.AddTrackInOutput.click();
            await this.VideoTrack720p.click();
            await this.AddTrackInOutput.click();
            await this.AudioTrack720p.click();
            await expect(this.Video_Trac_Val_720).toBeVisible();
            await expect(this.Video_Trac_Val_720).toBeVisible();
        }
        if (P480p) {
            await this.AddTrackInOutput.click();
            await this.VideoTrack480p.click();
            await this.AddTrackInOutput.click();
            await this.AudioTrack480p.click();
            await expect(this.Video_Trac_Val_480).toBeVisible();
            await expect(this.Audio_Trac_Val_480).toBeVisible();

        }
        if (P360p) {
            await this.AddTrackInOutput.click();
            await this.VideoTrack360p.click();
            await this.AddTrackInOutput.click();
            await this.AudioTrack360p.click();
            await expect(this.Video_Trac_Val_360).toBeVisible();
            await expect(this.Audio_Trac_Val_360).toBeVisible();

        }
        if (P576p) {
            await this.AddTrackInOutput.click();
            await this.VideoTrack576p.click();
            await this.AddTrackInOutput.click();
            await this.AudioTrack576p.click();
            await expect(this.Video_Trac_Val_576).toBeVisible();
            await expect(this.Audio_Trac_Val_576).toBeVisible();

        }
        if (PPassthrough) {
            await this.AddTrackInOutput.click();
            await this.VideoTrackPassthrough.click();
            await this.AddTrackInOutput.click();
            await this.AudioTrackPassthrough.click();
            await expect(this.Video_Trac_Val_Passthrough).toBeVisible();
            await expect(this.Audio_Trac_Val_Passthrough).toBeVisible();

        }

        await this.AddOutputBtn.click();
    }
    async HLSoutput({ outputNameSuffixHLS, P1080p, P720p, P480p, P360p, P576p, PPassthrough, AddVarient, chunkDuration, chunkCount, OverwriteOldFile }) {
        await this.AddSinkBtn.click();
        await this.HLSOutBtn.click();
        const sourcenamevalue = await this.JobName.inputValue();
        const finalOutputName = outputNameSuffixHLS ? `${sourcenamevalue}${outputNameSuffixHLS}` : sourcenamevalue;
        await this.Outputname.fill(finalOutputName);
        if (chunkDuration) {
            await this.HLSChunkDuration.fill(chunkDuration);

        }
        if (chunkCount) {
            await this.HLSChunkCount.fill(chunkCount);

        }

        if (OverwriteOldFile) {
            await expect(this.EnableDisableHLSOOF).not.toBeChecked()
            await this.EnableDisableHLSOOF.check()
            await expect(this.EnableDisableHLSOOF).toBeChecked()
        }
        await expect(this.AddVarientBtn).toBeEnabled();
        await this.AddVarientBtn.click();
        if (P1080p) {
            await expect(this.AddTrackInOutput.last().last()).toBeEnabled();
            await this.AddTrackInOutput.last().click();
            await this.VideoTrack1080p.click();
            await this.AddTrackInOutput.last().click();
            await this.AudioTrack1080p.click();
            await expect(this.Video_Trac_Val_1080).toBeVisible();
            await expect(this.Audio_Trac_Val_1080).toBeVisible();

        }
        if (P720p) {
            if (AddVarient) {
                await expect(this.AddVarientBtn).toBeEnabled();
                await this.AddVarientBtn.click();
            }
            await expect(this.AddTrackInOutput.last()).toBeEnabled();
            await this.AddTrackInOutput.last().click();
            await this.page.waitForTimeout(2000);
            await this.VideoTrack720p.last().click();
            await this.AddTrackInOutput.last().click();
            await this.AudioTrack720p.last().click();
            await expect(this.Video_Trac_Val_720).toBeVisible();
            await expect(this.Video_Trac_Val_720).toBeVisible();
        }
        if (P480p) {
            if (AddVarient) {
                await expect(this.AddVarientBtn).toBeEnabled();
                await this.AddVarientBtn.click();
            }
            await expect(this.AddTrackInOutput.last()).toBeEnabled();
            await this.AddTrackInOutput.last().click();
            await this.VideoTrack480p.last().click();
            await this.AddTrackInOutput.last().click();
            await this.AudioTrack480p.last().click();
            await expect(this.Video_Trac_Val_480).toBeVisible();
            await expect(this.Audio_Trac_Val_480).toBeVisible();

        }
        if (P360p) {
            if (AddVarient) {
                await expect(this.AddVarientBtn).toBeEnabled();
                await this.AddVarientBtn.click();
            }
            await expect(this.AddTrackInOutput.last()).toBeEnabled();
            await this.AddTrackInOutput.last().click();
            await this.VideoTrack360p.last().click();
            await this.AddTrackInOutput.last().click();
            await this.AudioTrack360p.last().click();
            await expect(this.Video_Trac_Val_360).toBeVisible();
            await expect(this.Audio_Trac_Val_360).toBeVisible();

        }
        if (P576p) {
            if (AddVarient) {
                await expect(this.AddVarientBtn).toBeEnabled();
                await this.AddVarientBtn.click();
            }
            await expect(this.AddTrackInOutput.last()).toBeEnabled();
            await this.AddTrackInOutput.last().click();
            await this.VideoTrack576p.last().click();
            await this.AddTrackInOutput.last().click();
            await this.AudioTrack576p.last().click();
            await expect(this.Video_Trac_Val_576).toBeVisible();
            await expect(this.Audio_Trac_Val_576).toBeVisible();

        }
        if (PPassthrough) {
            if (AddVarient) {
                await expect(this.AddVarientBtn).toBeEnabled();
                await this.AddVarientBtn.click();
            }
            await expect(this.AddTrackInOutput.last()).toBeEnabled();
            await this.AddTrackInOutput.last().click();
            await this.VideoTrackPassthrough.last().click();
            await this.AddTrackInOutput.last().click();
            await this.AudioTrackPassthrough.last().click();
            await expect(this.Video_Trac_Val_Passthrough).toBeVisible();
            await expect(this.Audio_Trac_Val_Passthrough).toBeVisible();

        }
        await this.AddOutputBtn.click();
    }

    async RTMPOutput({ rtmpoutserverurl, streamnameout, outputNameSuffixRTMP, P1080p, P720p, P480p, P360p, P576p, PPassthrough }) {
        await this.AddSinkBtn.click();
        await this.RTMPInputOutput.click();
        await this.RTMPServerUrl.fill(rtmpoutserverurl);
        await expect(this.RTMPServerUrl).toHaveValue(rtmpoutserverurl);
        await this.SreamName.fill(streamnameout);
        await expect(this.SreamName).toHaveValue(streamnameout);
        const sourcenamevalue = await this.JobName.inputValue();
        const finalOutputName = outputNameSuffixRTMP ? `${sourcenamevalue}${outputNameSuffixRTMP}` : sourcenamevalue;
        await this.Outputname.fill(finalOutputName);
        if (P1080p) {
            await expect(this.AddTrackInOutput).toBeEnabled();
            await this.AddTrackInOutput.click();
            await this.VideoTrack1080p.click();
            await this.AddTrackInOutput.click();
            await this.AudioTrack1080p.click();
            await expect(this.Video_Trac_Val_1080).toBeVisible();
            await expect(this.Audio_Trac_Val_1080).toBeVisible();

        }
        if (P720p) {
            await expect(this.AddTrackInOutput).toBeEnabled();
            await this.AddTrackInOutput.click();
            await this.VideoTrack720p.click();
            await this.AddTrackInOutput.click();
            await this.AudioTrack720p.click();
            await expect(this.Video_Trac_Val_720).toBeVisible();
            await expect(this.Video_Trac_Val_720).toBeVisible();
        }
        if (P480p) {
            await expect(this.AddTrackInOutput).toBeEnabled();
            await this.AddTrackInOutput.click();
            await this.VideoTrack480p.click();
            await this.AddTrackInOutput.click();
            await this.AudioTrack480p.click();
            await expect(this.Video_Trac_Val_480).toBeVisible();
            await expect(this.Audio_Trac_Val_480).toBeVisible();

        }
        if (P360p) {
            await expect(this.AddTrackInOutput).toBeEnabled();
            await this.AddTrackInOutput.click();
            await this.VideoTrack360p.click();
            await this.AddTrackInOutput.click();
            await this.AudioTrack360p.click();
            await expect(this.Video_Trac_Val_360).toBeVisible();
            await expect(this.Audio_Trac_Val_360).toBeVisible();

        }
        if (P576p) {
            await expect(this.AddTrackInOutput).toBeEnabled();
            await this.AddTrackInOutput.click();
            await this.VideoTrack576p.click();
            await this.AddTrackInOutput.click();
            await this.AudioTrack576p.click();
            await expect(this.Video_Trac_Val_576).toBeVisible();
            await expect(this.Audio_Trac_Val_576).toBeVisible();

        }
        if (PPassthrough) {
            await expect(this.AddTrackInOutput).toBeEnabled();
            await this.AddTrackInOutput.click();
            await this.VideoTrackPassthrough.click();
            await this.AddTrackInOutput.click();
            await this.AudioTrackPassthrough.click();
            await expect(this.Video_Trac_Val_Passthrough).toBeVisible();
            await expect(this.Audio_Trac_Val_Passthrough).toBeVisible();

        }
        await this.AddOutputBtn.click();
    }

    async AddedOutputValidation({ outputCount }) {
        // const outputaddedvalidation = await this.JobName.inputValue();
        const addedoutputLocator = this.page.locator('//div[contains(@class,"col-10")][starts-with(normalize-space(), "")]');
        await expect(addedoutputLocator).toHaveCount(outputCount);
    }

    async AddJobButton() {
        await expect(this.AddJob).toBeEnabled();
        await this.AddJob.click();
    }


    //     await expect(this.JobCreatedPopUp).toContainText(ToastMessages.JOB_CREATED);
    // await this.JobCreatedPopUp.isVisible({ timeout: 15000 });
    async JobcreationPopUp() {
        await expect(this.OkBtn).toBeEnabled({ timeout: 15000 });
        if (await this.OkBtn.isVisible()) {
            await this.OkBtn.click();
        }

    }

    async JobUpdationPopUp() {
        await expect(this.JobCreatedPopUp).toContainText(ToastMessages.JOB_UPDATION);
        if (await this.JobCreatedPopUp.isVisible()) {
            await this.OkBtn.click();
        }
    }


    async StartStatusJob() {
        await expect(this.StartJob).toBeEnabled();
        await this.StartJob.click();
        await expect(this.toastMessage).toHaveText(ToastMessages.JOB_STARTMSG);
        await expect(this.StartJob).not.toBeVisible();
    }

    async JobStartStatus() {
        await expect(this.StartJob).not.toBeVisible();
    }
    async JobStatIndicator() {
        await this.StatPage.click();
        await expect(this.StatPageInput).toBeVisible();
        await this.page.waitForTimeout(8000);
        const jobActiveIndicators = this.ActiveIndicatorValidation;
        await expect(jobActiveIndicators).not.toHaveCount(0, { timeout: 10000 });

        const count = await jobActiveIndicators.count();
        expect(count).toBeGreaterThanOrEqual(4);

        // await expect(jobActiveIndicators).toBeGreaterThan(5)
        for (let i = 0; i < 4; i++) {
            await expect(jobActiveIndicators.nth(i)).toBeVisible({ timeout: 10000 });
        }
    }

    async StatPageThumbnailvisibility() {
        await expect(this.StatPageThumbnail).toBeVisible({ timeout: 10000 });
    }
    async NoStatPageThubmbnail() {
        await expect(this.StatPageThumbnail).not.toBeVisible({ timeout: 10000 });
    }


    async JobUpTimeStatus() {
        await expect(this.JobUpTime).toBeVisible();
    }

    async IdleInactiveStatus() {
        await expect(this.JobIdleVideoAudio).toHaveCount(0);
        await expect(this.JobInactiveVideoAudio).toHaveCount(0);
    }
    async InactiveJobFailureScenario() {
        // await expect(this.JobIdleVideoAudio).toHaveCount(0);
        // await expect(this.JobInactiveVideoAudio).toHaveCount(5);
        await expect(await this.JobInactiveVideoAudio.count()).toBeGreaterThanOrEqual(4);

    }

    async StoppingJob() {
        if (await this.StopJob.isVisible()) {
            await this.StopJob.click();
            await this.page.waitForTimeout(2000);
            await expect(this.Stopvalidation).not.toBeVisible();
        }


    }
    // Stop button is visible → click it
    // const startBtn = this.startButton(jobName);
    // if (await stopBtn.isVisible()) {

    stopButton(jobName) {
        return this.page.locator(
            `//tr[td[normalize-space()='${jobName}']]//div[contains(@class,'source-hover') and contains(normalize-space(),'Stop')]`
        );
    }

    startButton(jobName) {
        return this.page.locator(
            `//tr[td[normalize-space()='${jobName}']]//div[contains(@class,'source-hover') and contains(normalize-space(),'Start')]`
        );
    }

    async clickStopButton(jobName) {
        const stopBtn = this.stopButton(jobName);
        const startBtn = this.startButton(jobName);

        // Refresh the page to make sure UI is up-to-date
        await this.page.reload();
        await this.page.waitForTimeout(3000);
        if (await stopBtn.isVisible()) {
            await stopBtn.click();

            // Wait until stop button disappears
            await expect(stopBtn).not.toBeVisible({ timeout: 10000 });

            // Wait until start button appears
            await expect(startBtn).toBeVisible({ timeout: 10000 });
        } else {
            console.log(`Stop button not visible for job: ${jobName}`);
        }
    }


    // } else {
    // Optional: log or handle the case when Stop button is not visible
    // console.log(`Stop button for job "${jobName}" is not visible.`);
    // }
    // console.log(`Stop button for job "${jobName}" is not visible, maybe already stopped.`);
    // await expect(startBtn).toBeVisible({ timeout: 10000 });

    // startButton(jobName) {
    //     return this.page.locator(`//tr[td[normalize-space()='${jobName}']]//div[contains(@class,'source-hover') and contains(normalize-space(),'Start')]`);
    // }

    async clickStartButton(jobName) {
        await this.page.waitForTimeout(3000);
        const startBtn = this.startButton(jobName);
        await expect(startBtn).toBeVisible();
        await startBtn.click();
        await this.page.waitForTimeout(3000);
        await expect(startBtn).not.toBeVisible();
    }
    async JobStopCheck(jobName) {
        const startBtn = this.startButton(jobName);
        await expect(startBtn).toBeVisible();
        await startBtn.click();
        await this.page.waitForTimeout(3000);
        await expect(startBtn).not.toBeVisible();
    }
    editButton(jobName) {
        return this.page.locator(
            `//tr[td[normalize-space()='${jobName}']]//i[contains(@class,'fa-pen-to-square')]`
        );
    }

    async clickEditButton(jobName) {
        await this.editButton(jobName).click();
    }
    async clickEditButtonAndStatPage(jobName) {
        await this.editButton(jobName).click();
        await this.StatPage.click();
        await expect(this.StatPageInput).toBeVisible();
    }
    checkbox(jobName) {
        return this.page.locator(`//tr[td[normalize-space()='${jobName}']]//input[@type='checkbox']`);
    }

    async checkBoxJob(jobName) {
        const jobCheckbox = this.checkbox(jobName);
        await expect(jobCheckbox).toBeVisible();   // ✅ make sure it's visible
        await expect(jobCheckbox).toBeEnabled();   // ✅ make sure it's enabled
        await jobCheckbox.check();                 // ✅ check the box
        await expect(jobCheckbox).toBeChecked();   // ✅ verify it's checked
    }
    async BulkStartJob() {
        await expect(this.BulkStart).toBeEnabled();
        await this.BulkStart.click();
        await expect(this.toastMessage).toHaveText(ToastMessages.BULK_START_JOB);
    }
    async BulkStopJob() {
        await expect(this.BulkStop).toBeEnabled();
        await this.BulkStop.click();
        await expect(this.toastMessage).toHaveText(ToastMessages.BULK_STOP_JOB);
        // await this.outputPageSingle.click();
        // await this.OutputMuxBitrate.fill(modifybitrate);

    }

    async ModifyBitrate({ modifybitrate }) {
        await this.outputPageSingle.click();
        await this.OutputMuxBitrate.fill(modifybitrate);
        await this.UpdateOutput.click();
        await this.UpdateJob.click();

    }
    async ModifyBitrateWhileAddingJob({ modifybitrate }) {
        await this.outputPageSingle.click();
        await this.OutputMuxBitrate.fill(modifybitrate);
        await this.UpdateOutput.click();
        await expect(this.AddJob).toBeEnabled();
        await this.AddJob.click();

    }

    async ModifyPassword({ modifypassword }) {
        await this.outputPageSingle.click();
        await this.srtPWD.fill(modifypassword);
        await expect(this.srtPWD).toHaveValue(modifypassword);
        await this.UpdateOutput.click();
        await this.UpdateJob.click();
    }
    async SRTModedropdown({ srtmode, srtoutportlistener }) {
        await this.outputPageSingle.click();
        await this.SRTMode.selectOption(srtmode);
        await this.SRTPort.fill(srtoutportlistener);
        await expect(this.SRTPort).toHaveValue(srtoutportlistener);
        await this.UpdateOutput.click();
        await this.UpdateJob.click();
    }



    // async clickAllStops() {
    //     await this.page.waitForTimeout(3000)
    //     const count = await this.Stopvalidation.count();
    //     for (let i = 0; i < count; i++) {
    //         await this.page.waitForTimeout(3000)
    //         await this.Stopvalidation.nth(i).click();
    //         await this.page.waitForTimeout(2000);
    //         await expect(this.toastMessage).toContainText(ToastMessages.JOB_STOPMSG);
    //         if (await this.toastMessage.isVisible) {
    //             await this.page.waitForTimeout(8000);
    //             await this.page.reload();

    //         }

    //     }
    // }

    async GoToconfigPage() {
        await expect(this.ConfigPage).toBeEnabled();
        await this.ConfigPage.click();
        await expect(this.ConfigPage).toBeVisible();

    }
    async clickAllStops() {
        // short initial wait so the UI can settle
        await this.page.waitForTimeout(500);

        while (true) {
            const total = await this.Stopvalidation.count();
            if (total === 0) {
                // nothing to do
                return;
            }

            // find the first visible Stop button
            let clickedOne = false;
            for (let i = 0; i < total; i++) {
                const btn = this.Stopvalidation.nth(i);
                if (await btn.isVisible()) {
                    clickedOne = true;
                    try {
                        await btn.click();

                        // wait a bit for toast to appear, but don't fail if it doesn't
                        await this.toastMessage.waitFor({ state: 'visible', timeout: 8000 }).catch(() => { });

                        // if toast visible, assert it contains expected stop message
                        if (await this.toastMessage.isVisible()) {
                            await expect(this.toastMessage).toContainText(ToastMessages.JOB_STOPMSG);
                        }

                        // wait until the clicked Stop button disappears (or times out)
                        await expect(btn).not.toBeVisible({ timeout: 10000 }).catch(() => {
                            // if it didn't disappear, continue (page might refresh or DOM changed)
                        });

                    } catch (err) {
                        // log and continue to next visible button
                        console.warn(`[clickAllStops] click failed for index ${i}:`, err.message);
                    }
                    break; // break inner for-loop and re-evaluate locator list
                }
            }

            if (!clickedOne) {
                // There were matched elements but none visible (maybe all hidden). Stop.
                return;
            }

            // small pause before next iteration so DOM can stabilize
            await this.page.waitForTimeout(500);
        }
    }

}



