import { test } from '@playwright/test';
import { SmokeTestSuite } from '../../config/TestData.js';
import { JobPage } from '../../pages/JobPage.js';
import { validateJobStatus } from '../../UtilityTorq/utility.js';

test.describe('TEST SUITE TORQ FX -> 1 BEFORE ALL STEPS', () => {
    let jobpage;
    test.beforeEach(async ({ page }) => {
        jobpage = new JobPage(page);
        await page.goto('#/dashboardMain');
        await jobpage.TORQJobListPage();
        await jobpage.NewJobAddSource();
    });
    test.setTimeout(80000);
    test('Smoke| TC-> 01 UDPIn DECODE TYPE->_HW SCALING TYPE-> HW ENOCDE TYPE-> HW ', async ({ page }) => {
        await jobpage.JobNameDecoderScalingType(SmokeTestSuite.TC1);
        await jobpage.UDPInput(SmokeTestSuite.TC1);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(SmokeTestSuite.TC1);
        await jobpage.OutputButton();
        await jobpage.udpoutput(SmokeTestSuite.TC1);
        await jobpage.HLSoutput(SmokeTestSuite.TC1);
        await jobpage.SRToutputCaller(SmokeTestSuite.TC1);
        await jobpage.SRToutputListener(SmokeTestSuite.TC1);
        await jobpage.AddedOutputValidation(SmokeTestSuite.TC1);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();

        await validateJobStatus(jobpage, test,page);

    });
    test('Smoke| TC-> 02 UDP DECODETYPE-> SW SCALINGTYPE-> SW ENOCDETYPE->SW ', async ({ page }) => {
        await jobpage.JobNameDecoderScalingType(SmokeTestSuite.TC2)
        await jobpage.UDPInput(SmokeTestSuite.TC2);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(SmokeTestSuite.TC2);
        await jobpage.OutputButton();
        await jobpage.udpoutput(SmokeTestSuite.TC2);
        await jobpage.HLSoutput(SmokeTestSuite.TC2);
        await jobpage.SRToutputCaller(SmokeTestSuite.TC2);
        await jobpage.SRToutputListener(SmokeTestSuite.TC2);
        await jobpage.AddedOutputValidation(SmokeTestSuite.TC2);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        await validateJobStatus(jobpage, test,page);
    });
    test('Smoke| TC-> 03 UDP DECODETYPE->SW SCALINGTYPE-> HW-> ENOCDETYPE->HW ', async ({ page }) => {
        await jobpage.JobNameDecoderScalingType(SmokeTestSuite.TC3)
        await jobpage.UDPInput(SmokeTestSuite.TC3);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(SmokeTestSuite.TC3);
        await jobpage.OutputButton();
        await jobpage.udpoutput(SmokeTestSuite.TC3);
        await jobpage.HLSoutput(SmokeTestSuite.TC3);
        await jobpage.SRToutputCaller(SmokeTestSuite.TC3);
        await jobpage.SRToutputListener(SmokeTestSuite.TC3);
        await jobpage.AddedOutputValidation(SmokeTestSuite.TC3);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        await validateJobStatus(jobpage, test,page);
    });
    test('Smoke| TC-> 04 UDP DECODETYPE-> HWSCALINGTYPE-> SW ENOCDETYPE-> SW ', async ({ page }) => {
        await jobpage.JobNameDecoderScalingType(SmokeTestSuite.TC4)
        await jobpage.UDPInput(SmokeTestSuite.TC4);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(SmokeTestSuite.TC4);
        await jobpage.OutputButton();
        await jobpage.udpoutput(SmokeTestSuite.TC4);
        await jobpage.HLSoutput(SmokeTestSuite.TC4);
        await jobpage.SRToutputCaller(SmokeTestSuite.TC4);
        await jobpage.SRToutputListener(SmokeTestSuite.TC4);
        await jobpage.AddedOutputValidation(SmokeTestSuite.TC4);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        await validateJobStatus(jobpage, test,page);
    });
    test('Smoke| TC-> 05 UDP DECODETYPE-> HWSCALINGTYPE-> HW ENOCDETYPE-> SW ', async ({ page }) => {
        await jobpage.JobNameDecoderScalingType(SmokeTestSuite.TC5)
        await jobpage.UDPInput(SmokeTestSuite.TC5);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(SmokeTestSuite.TC5);
        await jobpage.OutputButton();
        await jobpage.udpoutput(SmokeTestSuite.TC5);
        await jobpage.HLSoutput(SmokeTestSuite.TC5);
        await jobpage.SRToutputCaller(SmokeTestSuite.TC5);
        await jobpage.SRToutputListener(SmokeTestSuite.TC5);
        await jobpage.AddedOutputValidation(SmokeTestSuite.TC5);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        await validateJobStatus(jobpage, test,page);
    });
    test('Smoke| TC-> 06 UDP DECODETYPE-> HWSCALINGTYPE-> SW ENOCDETYPE-> HW ', async ({ page }) => {
        await jobpage.JobNameDecoderScalingType(SmokeTestSuite.TC6)
        await jobpage.UDPInput(SmokeTestSuite.TC6);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(SmokeTestSuite.TC6);
        await jobpage.OutputButton();
        await jobpage.udpoutput(SmokeTestSuite.TC6);
        await jobpage.HLSoutput(SmokeTestSuite.TC6);
        await jobpage.SRToutputCaller(SmokeTestSuite.TC6);
        await jobpage.SRToutputListener(SmokeTestSuite.TC6);
        await jobpage.AddedOutputValidation(SmokeTestSuite.TC6);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        await validateJobStatus(jobpage, test,page);
    });
    test('Smoke| TC-> 07 UDP DECODETYPE-> SWSCALINGTYPE-> HW ENOCDETYPE-> SW ', async ({ page }) => {
        await jobpage.JobNameDecoderScalingType(SmokeTestSuite.TC7)
        await jobpage.UDPInput(SmokeTestSuite.TC7);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(SmokeTestSuite.TC7);
        await jobpage.OutputButton();
        await jobpage.udpoutput(SmokeTestSuite.TC7);
        await jobpage.HLSoutput(SmokeTestSuite.TC7);
        await jobpage.SRToutputCaller(SmokeTestSuite.TC7);
        await jobpage.SRToutputListener(SmokeTestSuite.TC7);
        await jobpage.AddedOutputValidation(SmokeTestSuite.TC7);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        await validateJobStatus(jobpage, test,page);
    });
    test('Smoke| TC-> 08 UDP DECODETYPE-> SWSCALINGTYPE-> SW ENOCDETYPE-> HW ', async ({ page }) => {
        await jobpage.JobNameDecoderScalingType(SmokeTestSuite.TC8)
        await jobpage.UDPInput(SmokeTestSuite.TC8);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(SmokeTestSuite.TC8);
        await jobpage.OutputButton();
        await jobpage.udpoutput(SmokeTestSuite.TC8);
        await jobpage.HLSoutput(SmokeTestSuite.TC8);
        await jobpage.SRToutputCaller(SmokeTestSuite.TC8);
        await jobpage.SRToutputListener(SmokeTestSuite.TC8);
        await jobpage.AddedOutputValidation(SmokeTestSuite.TC8);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        await validateJobStatus(jobpage, test,page);
    });
    test('Smoke| TC-> 09 UDP DECODETYPE-> HWSCALINGTYPE-> HW ENOCDETYPE-> HW ', async ({ page }) => {
        await jobpage.JobNameDecoderScalingType(SmokeTestSuite.TC9)
        await jobpage.UDPInput(SmokeTestSuite.TC9);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(SmokeTestSuite.TC9);
        await jobpage.OutputButton();
        await jobpage.udpoutput(SmokeTestSuite.TC9);
        await jobpage.HLSoutput(SmokeTestSuite.TC9);
        await jobpage.SRToutputCaller(SmokeTestSuite.TC9);
        await jobpage.SRToutputListener(SmokeTestSuite.TC9);
        await jobpage.AddedOutputValidation(SmokeTestSuite.TC9);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        await validateJobStatus(jobpage, test,page);
    });
    test('Smoke| TC-> 10 UDP DECODETYPE-> HWSCALINGTYPE-> SW ENOCDETYPE-> HW ', async ({ page }) => {
        await jobpage.JobNameDecoderScalingType(SmokeTestSuite.TC10)
        await jobpage.UDPInput(SmokeTestSuite.TC10);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(SmokeTestSuite.TC10);
        await jobpage.OutputButton();
        await jobpage.udpoutput(SmokeTestSuite.TC10);
        await jobpage.HLSoutput(SmokeTestSuite.TC10);
        await jobpage.SRToutputCaller(SmokeTestSuite.TC10);
        await jobpage.SRToutputListener(SmokeTestSuite.TC10);
        await jobpage.AddedOutputValidation(SmokeTestSuite.TC10);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        await validateJobStatus(jobpage, test,page);
    });

    test('Smoke| TC-> 11 SRT_CALLER DECODETYPE-> HWSCALINGTYPE-> HW ENOCDETYPE-> HW ', async ({ page }) => {
        await jobpage.JobNameDecoderScalingType(SmokeTestSuite.TC11)
        await jobpage.SRTCallerInput(SmokeTestSuite.TC11);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(SmokeTestSuite.TC11);
        await jobpage.OutputButton();
        await jobpage.udpoutput(SmokeTestSuite.TC11);
        await jobpage.HLSoutput(SmokeTestSuite.TC11);
        await jobpage.SRToutputCaller(SmokeTestSuite.TC11);
        await jobpage.SRToutputListener(SmokeTestSuite.TC11);
        await jobpage.AddedOutputValidation(SmokeTestSuite.TC11);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        await validateJobStatus(jobpage, test,page);
    });
    test('Smoke| TC-> 12 SRT_CALLER DECODETYPE-> SWSCALINGTYPE-> SW ENOCDETYPE-> SW ', async ({ page }) => {
        await jobpage.JobNameDecoderScalingType(SmokeTestSuite.TC12)
        await jobpage.SRTCallerInput(SmokeTestSuite.TC12);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(SmokeTestSuite.TC12);
        await jobpage.OutputButton();
        await jobpage.udpoutput(SmokeTestSuite.TC12);
        await jobpage.HLSoutput(SmokeTestSuite.TC12);
        await jobpage.SRToutputCaller(SmokeTestSuite.TC12);
        await jobpage.SRToutputListener(SmokeTestSuite.TC12);
        await jobpage.AddedOutputValidation(SmokeTestSuite.TC12);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        await validateJobStatus(jobpage, test,page);
    });
    test('Smoke| TC-> 13 SRT_CALLER DECODETYPE-> SWSCALINGTYPE-> HW ENOCDETYPE-> HW ', async ({ page }) => {
        await jobpage.JobNameDecoderScalingType(SmokeTestSuite.TC13)
        await jobpage.SRTCallerInput(SmokeTestSuite.TC13);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(SmokeTestSuite.TC13);
        await jobpage.OutputButton();
        await jobpage.udpoutput(SmokeTestSuite.TC13);
        await jobpage.HLSoutput(SmokeTestSuite.TC13);
        await jobpage.SRToutputCaller(SmokeTestSuite.TC13);
        await jobpage.SRToutputListener(SmokeTestSuite.TC13);
        await jobpage.AddedOutputValidation(SmokeTestSuite.TC13);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        await validateJobStatus(jobpage, test,page);
    });
    test('Smoke| TC-> 14 SRT_CALLER DECODETYPE-> HWSCALINGTYPE-> SW ENOCDETYPE-> SW ', async ({ page }) => {
        await jobpage.JobNameDecoderScalingType(SmokeTestSuite.TC14)
        await jobpage.SRTCallerInput(SmokeTestSuite.TC14);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(SmokeTestSuite.TC14);
        await jobpage.OutputButton();
        await jobpage.udpoutput(SmokeTestSuite.TC14);
        await jobpage.HLSoutput(SmokeTestSuite.TC14);
        await jobpage.SRToutputCaller(SmokeTestSuite.TC14);
        await jobpage.SRToutputListener(SmokeTestSuite.TC14);
        await jobpage.AddedOutputValidation(SmokeTestSuite.TC14);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        await validateJobStatus(jobpage, test,page);
    });
    test('Smoke| TC-> 15 SRT_CALLER DECODETYPE-> HWSCALINGTYPE-> HW ENOCDETYPE-> HW ', async ({ page }) => {
        await jobpage.JobNameDecoderScalingType(SmokeTestSuite.TC15)
        await jobpage.SRTCallerInput(SmokeTestSuite.TC15);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(SmokeTestSuite.TC15);
        await jobpage.OutputButton();
        await jobpage.udpoutput(SmokeTestSuite.TC15);
        await jobpage.HLSoutput(SmokeTestSuite.TC15);
        await jobpage.SRToutputCaller(SmokeTestSuite.TC15);
        await jobpage.SRToutputListener(SmokeTestSuite.TC15);
        await jobpage.AddedOutputValidation(SmokeTestSuite.TC15);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        await validateJobStatus(jobpage, test,page);
    });
    test('Smoke| TC-> 16 SRT_CALLER DECODETYPE-> HWSCALINGTYPE-> SW ENOCDETYPE-> HW ', async ({ page }) => {
        await jobpage.JobNameDecoderScalingType(SmokeTestSuite.TC16)
        await jobpage.SRTCallerInput(SmokeTestSuite.TC16);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(SmokeTestSuite.TC16);
        await jobpage.OutputButton();
        await jobpage.udpoutput(SmokeTestSuite.TC16);
        await jobpage.HLSoutput(SmokeTestSuite.TC16);
        await jobpage.SRToutputCaller(SmokeTestSuite.TC16);
        await jobpage.SRToutputListener(SmokeTestSuite.TC16);
        await jobpage.AddedOutputValidation(SmokeTestSuite.TC16);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        await validateJobStatus(jobpage, test,page);
    });
    test('Smoke| TC-> 17 SRT_Listener DECODETYPE-> HWSCALINGTYPE-> HW ENOCDETYPE-> HW ', async ({ page }) => {
        await jobpage.JobNameDecoderScalingType(SmokeTestSuite.TC17)
        await jobpage.SRTListenerInput(SmokeTestSuite.TC17);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(SmokeTestSuite.TC17);
        await jobpage.OutputButton();
        await jobpage.udpoutput(SmokeTestSuite.TC17);
        await jobpage.HLSoutput(SmokeTestSuite.TC17);
        await jobpage.SRToutputCaller(SmokeTestSuite.TC17);
        await jobpage.SRToutputListener(SmokeTestSuite.TC17);
        await jobpage.AddedOutputValidation(SmokeTestSuite.TC17);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        await validateJobStatus(jobpage, test,page);
    });
    test('Smoke| TC-> 18 SRT_Listener DECODETYPE-> SWSCALINGTYPE-> SW ENOCDETYPE-> SW ', async ({ page }) => {
        await jobpage.JobNameDecoderScalingType(SmokeTestSuite.TC18)
        await jobpage.SRTListenerInput(SmokeTestSuite.TC18);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(SmokeTestSuite.TC18);
        await jobpage.OutputButton();
        await jobpage.udpoutput(SmokeTestSuite.TC18);
        await jobpage.HLSoutput(SmokeTestSuite.TC18);
        await jobpage.SRToutputCaller(SmokeTestSuite.TC18);
        await jobpage.SRToutputListener(SmokeTestSuite.TC18);
        await jobpage.AddedOutputValidation(SmokeTestSuite.TC18);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        await validateJobStatus(jobpage, test,page);
    });
    test('Smoke| TC-> 19 SRT_Listener DECODETYPE-> SWSCALINGTYPE-> HW ENOCDETYPE-> HW ', async ({ page }) => {
        await jobpage.JobNameDecoderScalingType(SmokeTestSuite.TC19)
        await jobpage.SRTListenerInput(SmokeTestSuite.TC19);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(SmokeTestSuite.TC19);
        await jobpage.OutputButton();
        await jobpage.udpoutput(SmokeTestSuite.TC19);
        await jobpage.HLSoutput(SmokeTestSuite.TC19);
        await jobpage.SRToutputCaller(SmokeTestSuite.TC19);
        await jobpage.SRToutputListener(SmokeTestSuite.TC19);
        await jobpage.AddedOutputValidation(SmokeTestSuite.TC19);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        await validateJobStatus(jobpage, test,page);
    });
    test('Smoke| TC-> 20 SRT_Listener DECODETYPE-> HWSCALINGTYPE-> SW ENOCDETYPE-> SW ', async ({ page }) => {
        await jobpage.JobNameDecoderScalingType(SmokeTestSuite.TC20)
        await jobpage.SRTListenerInput(SmokeTestSuite.TC20);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(SmokeTestSuite.TC20);
        await jobpage.OutputButton();
        await jobpage.udpoutput(SmokeTestSuite.TC20);
        await jobpage.HLSoutput(SmokeTestSuite.TC20);
        await jobpage.SRToutputCaller(SmokeTestSuite.TC20);
        await jobpage.SRToutputListener(SmokeTestSuite.TC20);
        await jobpage.AddedOutputValidation(SmokeTestSuite.TC20);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        await validateJobStatus(jobpage, test,page);
    });
    test('Smoke| TC-> 21 SRT_Listener DECODETYPE-> HWSCALINGTYPE-> HW ENOCDETYPE-> HW ', async ({ page }) => {
        await jobpage.JobNameDecoderScalingType(SmokeTestSuite.TC21)
        await jobpage.SRTListenerInput(SmokeTestSuite.TC21);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(SmokeTestSuite.TC21);
        await jobpage.OutputButton();
        await jobpage.udpoutput(SmokeTestSuite.TC21);
        await jobpage.HLSoutput(SmokeTestSuite.TC21);
        await jobpage.SRToutputCaller(SmokeTestSuite.TC21);
        await jobpage.SRToutputListener(SmokeTestSuite.TC21);
        await jobpage.AddedOutputValidation(SmokeTestSuite.TC21);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        await validateJobStatus(jobpage, test,page);
    });
    test('Smoke| TC-> 22 SRT_Listener DECODETYPE-> HWSCALINGTYPE-> SW ENOCDETYPE-> HW ', async ({ page }) => {
        await jobpage.JobNameDecoderScalingType(SmokeTestSuite.TC22)
        await jobpage.SRTListenerInput(SmokeTestSuite.TC22);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(SmokeTestSuite.TC22);
        await jobpage.OutputButton();
        await jobpage.udpoutput(SmokeTestSuite.TC22);
        await jobpage.HLSoutput(SmokeTestSuite.TC22);
        await jobpage.SRToutputCaller(SmokeTestSuite.TC22);
        await jobpage.SRToutputListener(SmokeTestSuite.TC22);
        await jobpage.AddedOutputValidation(SmokeTestSuite.TC22);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        await validateJobStatus(jobpage, test,page);
    });
    test('Smoke| TC-> 23 RAWInput DECODETYPE-> HWSCALINGTYPE-> HW ENOCDETYPE-> HW ', async ({ page }) => {
        await jobpage.JobNameDecoderScalingType(SmokeTestSuite.TC23)
        await jobpage.RAWInput(SmokeTestSuite.TC23);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(SmokeTestSuite.TC23);
        await jobpage.OutputButton();
        await jobpage.udpoutput(SmokeTestSuite.TC23);
        await jobpage.HLSoutput(SmokeTestSuite.TC23);
        await jobpage.SRToutputCaller(SmokeTestSuite.TC23);
        await jobpage.SRToutputListener(SmokeTestSuite.TC23);
        await jobpage.AddedOutputValidation(SmokeTestSuite.TC23);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        await validateJobStatus(jobpage, test,page);
    });
    test('Smoke| TC-> 24 RAWInput DECODETYPE-> SWSCALINGTYPE-> SW ENOCDETYPE-> SW ', async ({ page }) => {
        await jobpage.JobNameDecoderScalingType(SmokeTestSuite.TC24)
        await jobpage.RAWInput(SmokeTestSuite.TC24);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(SmokeTestSuite.TC24);
        await jobpage.OutputButton();
        await jobpage.udpoutput(SmokeTestSuite.TC24);
        await jobpage.HLSoutput(SmokeTestSuite.TC24);
        await jobpage.SRToutputCaller(SmokeTestSuite.TC24);
        await jobpage.SRToutputListener(SmokeTestSuite.TC24);
        await jobpage.AddedOutputValidation(SmokeTestSuite.TC24);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        await validateJobStatus(jobpage, test,page);
    });
    test('Smoke| TC-> 25 RAWInput DECODETYPE-> SWSCALINGTYPE-> HW ENOCDETYPE-> HW ', async ({ page }) => {
        await jobpage.JobNameDecoderScalingType(SmokeTestSuite.TC25)
        await jobpage.RAWInput(SmokeTestSuite.TC25);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(SmokeTestSuite.TC25);
        await jobpage.OutputButton();
        await jobpage.udpoutput(SmokeTestSuite.TC25);
        await jobpage.HLSoutput(SmokeTestSuite.TC25);
        await jobpage.SRToutputCaller(SmokeTestSuite.TC25);
        await jobpage.SRToutputListener(SmokeTestSuite.TC25);
        await jobpage.AddedOutputValidation(SmokeTestSuite.TC25);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        await validateJobStatus(jobpage, test,page);
    });
    test('Smoke| TC-> 26 RAWInput DECODETYPE-> HWSCALINGTYPE-> SW ENOCDETYPE-> SW ', async ({ page }) => {
        await jobpage.JobNameDecoderScalingType(SmokeTestSuite.TC26)
        await jobpage.RAWInput(SmokeTestSuite.TC26);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(SmokeTestSuite.TC26);
        await jobpage.OutputButton();
        await jobpage.udpoutput(SmokeTestSuite.TC26);
        await jobpage.HLSoutput(SmokeTestSuite.TC26);
        await jobpage.SRToutputCaller(SmokeTestSuite.TC26);
        await jobpage.SRToutputListener(SmokeTestSuite.TC26);
        await jobpage.AddedOutputValidation(SmokeTestSuite.TC26);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        await validateJobStatus(jobpage, test,page);
    });
    test('Smoke| TC-> 27 RAWInput DECODETYPE-> HWSCALINGTYPE-> HW ENOCDETYPE-> HW ', async ({ page }) => {
        await jobpage.JobNameDecoderScalingType(SmokeTestSuite.TC27)
        await jobpage.RAWInput(SmokeTestSuite.TC27);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(SmokeTestSuite.TC27);
        await jobpage.OutputButton();
        await jobpage.udpoutput(SmokeTestSuite.TC27);
        await jobpage.HLSoutput(SmokeTestSuite.TC27);
        await jobpage.SRToutputCaller(SmokeTestSuite.TC27);
        await jobpage.SRToutputListener(SmokeTestSuite.TC27);
        await jobpage.AddedOutputValidation(SmokeTestSuite.TC27);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        await validateJobStatus(jobpage, test,page);
    });
    test('Smoke| TC-> 28 RAWInput DECODETYPE-> HWSCALINGTYPE-> SW ENOCDETYPE-> HW ', async ({ page }) => {
        await jobpage.JobNameDecoderScalingType(SmokeTestSuite.TC28)
        await jobpage.RAWInput(SmokeTestSuite.TC28);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(SmokeTestSuite.TC28);
        await jobpage.OutputButton();
        await jobpage.udpoutput(SmokeTestSuite.TC28);
        await jobpage.HLSoutput(SmokeTestSuite.TC28);
        await jobpage.SRToutputCaller(SmokeTestSuite.TC28);
        await jobpage.SRToutputListener(SmokeTestSuite.TC28);
        await jobpage.AddedOutputValidation(SmokeTestSuite.TC28);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        await validateJobStatus(jobpage, test,page);
    });
    test('Smoke| TC-> 29 RTMPInput DECODETYPE-> HWSCALINGTYPE-> HW ENOCDETYPE-> HW ', async ({ page }) => {
        await jobpage.JobNameDecoderScalingType(SmokeTestSuite.TC29)
        await jobpage.RTMPInput(SmokeTestSuite.TC29);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(SmokeTestSuite.TC29);
        await jobpage.OutputButton();
        await jobpage.udpoutput(SmokeTestSuite.TC29);
        await jobpage.HLSoutput(SmokeTestSuite.TC29);
        await jobpage.SRToutputCaller(SmokeTestSuite.TC29);
        await jobpage.SRToutputListener(SmokeTestSuite.TC29);
        await jobpage.AddedOutputValidation(SmokeTestSuite.TC29);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        await validateJobStatus(jobpage, test,page);
    });
    test('Smoke| TC-> 30 RTMPInput DECODETYPE-> SWSCALINGTYPE-> SW ENOCDETYPE-> SW ', async ({ page }) => {
        await jobpage.JobNameDecoderScalingType(SmokeTestSuite.TC30)
        await jobpage.RTMPInput(SmokeTestSuite.TC30);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(SmokeTestSuite.TC30);
        await jobpage.OutputButton();
        await jobpage.udpoutput(SmokeTestSuite.TC30);
        await jobpage.HLSoutput(SmokeTestSuite.TC30);
        await jobpage.SRToutputCaller(SmokeTestSuite.TC30);
        await jobpage.SRToutputListener(SmokeTestSuite.TC30);
        await jobpage.AddedOutputValidation(SmokeTestSuite.TC30);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        await validateJobStatus(jobpage, test,page);
    });
    test('Smoke| TC-> 31 RTMPInput DECODETYPE-> SWSCALINGTYPE-> HW ENOCDETYPE-> HW ', async ({ page }) => {
        await jobpage.JobNameDecoderScalingType(SmokeTestSuite.TC31)
        await jobpage.RTMPInput(SmokeTestSuite.TC31);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(SmokeTestSuite.TC31);
        await jobpage.OutputButton();
        await jobpage.udpoutput(SmokeTestSuite.TC31);
        await jobpage.HLSoutput(SmokeTestSuite.TC31);
        await jobpage.SRToutputCaller(SmokeTestSuite.TC31);
        await jobpage.SRToutputListener(SmokeTestSuite.TC31);
        await jobpage.AddedOutputValidation(SmokeTestSuite.TC31);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        await validateJobStatus(jobpage, test,page);
    });
    test('Smoke| TC-> 32 RTMPInput DECODETYPE-> HWSCALINGTYPE-> SW ENOCDETYPE-> SW ', async ({ page }) => {
        await jobpage.JobNameDecoderScalingType(SmokeTestSuite.TC32)
        await jobpage.RTMPInput(SmokeTestSuite.TC32);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(SmokeTestSuite.TC32);
        await jobpage.OutputButton();
        await jobpage.udpoutput(SmokeTestSuite.TC32);
        await jobpage.HLSoutput(SmokeTestSuite.TC32);
        await jobpage.SRToutputCaller(SmokeTestSuite.TC32);
        await jobpage.SRToutputListener(SmokeTestSuite.TC32);
        await jobpage.AddedOutputValidation(SmokeTestSuite.TC32);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        await validateJobStatus(jobpage, test,page);
    });
    test('Smoke| TC-> 33 RTMPInput DECODETYPE-> HWSCALINGTYPE-> HW ENOCDETYPE-> HW ', async ({ page }) => {
        await jobpage.JobNameDecoderScalingType(SmokeTestSuite.TC33)
        await jobpage.RTMPInput(SmokeTestSuite.TC33);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(SmokeTestSuite.TC33);
        await jobpage.OutputButton();
        await jobpage.udpoutput(SmokeTestSuite.TC33);
        await jobpage.HLSoutput(SmokeTestSuite.TC33);
        await jobpage.SRToutputCaller(SmokeTestSuite.TC33);
        await jobpage.SRToutputListener(SmokeTestSuite.TC33);
        await jobpage.AddedOutputValidation(SmokeTestSuite.TC33);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        await validateJobStatus(jobpage, test,page);
    });
    test('Smoke| TC-> 34 RTMPInput DECODETYPE-> HWSCALINGTYPE-> SW ENOCDETYPE-> HW ', async ({ page }) => {
        await jobpage.JobNameDecoderScalingType(SmokeTestSuite.TC34)
        await jobpage.RTMPInput(SmokeTestSuite.TC34);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(SmokeTestSuite.TC34);
        await jobpage.OutputButton();
        await jobpage.udpoutput(SmokeTestSuite.TC34);
        await jobpage.HLSoutput(SmokeTestSuite.TC34);
        await jobpage.SRToutputCaller(SmokeTestSuite.TC34);
        await jobpage.SRToutputListener(SmokeTestSuite.TC34);
        await jobpage.AddedOutputValidation(SmokeTestSuite.TC34);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        await validateJobStatus(jobpage, test,page);
    });
    test('Smoke| TC-> 35 HTTPInput DECODETYPE-> HWSCALINGTYPE-> HW ENOCDETYPE-> HW ', async ({ page }) => {
        await jobpage.JobNameDecoderScalingType(SmokeTestSuite.TC35)
        await jobpage.HTTPInput(SmokeTestSuite.TC35);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(SmokeTestSuite.TC35);
        await jobpage.OutputButton();
        await jobpage.udpoutput(SmokeTestSuite.TC35);
        await jobpage.HLSoutput(SmokeTestSuite.TC35);
        await jobpage.SRToutputCaller(SmokeTestSuite.TC35);
        await jobpage.SRToutputListener(SmokeTestSuite.TC35);
        await jobpage.AddedOutputValidation(SmokeTestSuite.TC35);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        await validateJobStatus(jobpage, test,page);
    });
    test('Smoke| TC-> 36 FileStreamInput DECODETYPE-> HWSCALINGTYPE-> HW ENOCDETYPE-> HW ', async ({ page }) => {
        await jobpage.JobNameDecoderScalingType(SmokeTestSuite.TC36)
        await jobpage.FileStreamInput(SmokeTestSuite.TC36);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(SmokeTestSuite.TC36);
        await jobpage.OutputButton();
        await jobpage.udpoutput(SmokeTestSuite.TC36);
        await jobpage.HLSoutput(SmokeTestSuite.TC36);
        await jobpage.SRToutputCaller(SmokeTestSuite.TC36);
        await jobpage.SRToutputListener(SmokeTestSuite.TC36);
        await jobpage.AddedOutputValidation(SmokeTestSuite.TC36);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        await validateJobStatus(jobpage, test,page);
    });
    test('Smoke| TC-> 37 FileStreamInput DECODETYPE-> SWSCALINGTYPE-> SW ENOCDETYPE-> SW ', async ({ page }) => {
        await jobpage.JobNameDecoderScalingType(SmokeTestSuite.TC37)
        await jobpage.FileStreamInput(SmokeTestSuite.TC37);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(SmokeTestSuite.TC37);
        await jobpage.OutputButton();
        await jobpage.udpoutput(SmokeTestSuite.TC37);
        await jobpage.HLSoutput(SmokeTestSuite.TC37);
        await jobpage.SRToutputCaller(SmokeTestSuite.TC37);
        await jobpage.SRToutputListener(SmokeTestSuite.TC37);
        await jobpage.AddedOutputValidation(SmokeTestSuite.TC37);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        await validateJobStatus(jobpage, test,page);
    });
    test('Smoke| TC-> 38 FileStreamInput DECODETYPE-> SWSCALINGTYPE-> HW ENOCDETYPE-> HW ', async ({ page }) => {
        await jobpage.JobNameDecoderScalingType(SmokeTestSuite.TC38)
        await jobpage.FileStreamInput(SmokeTestSuite.TC38);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(SmokeTestSuite.TC38);
        await jobpage.OutputButton();
        await jobpage.udpoutput(SmokeTestSuite.TC38);
        await jobpage.HLSoutput(SmokeTestSuite.TC38);
        await jobpage.SRToutputCaller(SmokeTestSuite.TC38);
        await jobpage.SRToutputListener(SmokeTestSuite.TC38);
        await jobpage.AddedOutputValidation(SmokeTestSuite.TC38);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        await validateJobStatus(jobpage, test,page);
    });
    test('Smoke| TC-> 39 FileStreamInput DECODETYPE-> HWSCALINGTYPE-> SW ENOCDETYPE-> SW ', async ({ page }) => {
        await jobpage.JobNameDecoderScalingType(SmokeTestSuite.TC39)
        await jobpage.FileStreamInput(SmokeTestSuite.TC39);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(SmokeTestSuite.TC39);
        await jobpage.OutputButton();
        await jobpage.udpoutput(SmokeTestSuite.TC39);
        await jobpage.HLSoutput(SmokeTestSuite.TC39);
        await jobpage.SRToutputCaller(SmokeTestSuite.TC39);
        await jobpage.SRToutputListener(SmokeTestSuite.TC39);
        await jobpage.AddedOutputValidation(SmokeTestSuite.TC39);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        await validateJobStatus(jobpage, test,page);
    });
    test('Smoke| TC-> 40 FileStreamInput DECODETYPE-> HWSCALINGTYPE-> HW ENOCDETYPE-> HW ', async ({ page }) => {
        await jobpage.JobNameDecoderScalingType(SmokeTestSuite.TC40)
        await jobpage.FileStreamInput(SmokeTestSuite.TC40);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(SmokeTestSuite.TC40);
        await jobpage.OutputButton();
        await jobpage.udpoutput(SmokeTestSuite.TC40);
        await jobpage.HLSoutput(SmokeTestSuite.TC40);
        await jobpage.SRToutputCaller(SmokeTestSuite.TC40);
        await jobpage.SRToutputListener(SmokeTestSuite.TC40);
        await jobpage.AddedOutputValidation(SmokeTestSuite.TC40);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        await validateJobStatus(jobpage, test,page);
    });
    test('Smoke| TC-> 41 FileStreamInput DECODETYPE-> HWSCALINGTYPE-> SW ENOCDETYPE-> HW ', async ({ page }) => {
        await jobpage.JobNameDecoderScalingType(SmokeTestSuite.TC41)
        await jobpage.FileStreamInput(SmokeTestSuite.TC41);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(SmokeTestSuite.TC41);
        await jobpage.OutputButton();
        await jobpage.udpoutput(SmokeTestSuite.TC41);
        await jobpage.HLSoutput(SmokeTestSuite.TC41);
        await jobpage.SRToutputCaller(SmokeTestSuite.TC41);
        await jobpage.SRToutputListener(SmokeTestSuite.TC41);
        await jobpage.AddedOutputValidation(SmokeTestSuite.TC41);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        await validateJobStatus(jobpage, test,page);
    });
});
