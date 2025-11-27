import { test } from '@playwright/test';
import { IOCombination } from '../../config/TestData.js';
import { JobPage } from '../../pages/JobPage.js';

test.describe('TEST SUITE TORQ FX -> 1 BEFORE ALL STEPS', () => {
    let jobpage;
    test.beforeEach(async ({ page }) => {
        jobpage = new JobPage(page);
        await page.goto('#/dashboardMain');
        await jobpage.TORQJobListPage();
        await jobpage.NewJobAddSource();
    });

    test.setTimeout(70000);
    test('IO-Combi-TORQ-FX| TC-> 01 | UDPIn | DECODE TYPE-> HW | SCALING TYPE-> HW | ENOCDE TYPE-> HW | SRT LISTENER', async ({ page }) => {
        await jobpage.JobNameDecoderScalingType(IOCombination.TC1);
        await jobpage.UDPInput(IOCombination.TC1);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(IOCombination.TC1);
        await jobpage.OutputButton();
        await jobpage.SRToutputListener(IOCombination.TC1);
        await jobpage.AddedOutputValidation(IOCombination.TC1);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        //await validateJobStatus(jobpage, test);

    });
    test('IO-Combi-TORQ-FX| TC-> 02 | UDPIn | DECODE TYPE-> HW | SCALING TYPE-> HW | ENOCDE TYPE-> HW | SRT CALLER', async ({ page }) => {
        await jobpage.JobNameDecoderScalingType(IOCombination.TC2);
        await jobpage.UDPInput(IOCombination.TC2);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(IOCombination.TC2);
        await jobpage.OutputButton();
        await jobpage.SRToutputCaller(IOCombination.TC2);
        await jobpage.AddedOutputValidation(IOCombination.TC2);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        //await validateJobStatus(jobpage, test);

    });
    test('IO-Combi-TORQ-FX| TC-> 03 | UDPIn | DECODE TYPE-> HW | SCALING TYPE-> HW ENOCDE TYPE-> HW | UDP', async ({ page }) => {
        await jobpage.JobNameDecoderScalingType(IOCombination.TC3);
        await jobpage.UDPInput(IOCombination.TC3);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(IOCombination.TC3);
        await jobpage.OutputButton();
        await jobpage.udpoutput(IOCombination.TC3);
        await jobpage.AddedOutputValidation(IOCombination.TC3);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        //await validateJobStatus(jobpage, test);

    });
    test('IO-Combi-TORQ-FX | TC-> 04 | UDPIn | DECODE TYPE -> HW | SCALING TYPE-> HW | ENOCDE TYPE-> HW | HLS', async ({ page }) => {
        await jobpage.JobNameDecoderScalingType(IOCombination.TC4);
        await jobpage.UDPInput(IOCombination.TC4);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(IOCombination.TC4);
        await jobpage.OutputButton();
        await jobpage.HLSoutput(IOCombination.TC4);
        await jobpage.AddedOutputValidation(IOCombination.TC4);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        //await validateJobStatus(jobpage, test);

    });
    test('IO-Combi-TORQ-FX | TC-> 05 | UDPIn | DECODE TYPE -> HW | SCALING TYPE-> HW | ENOCDE TYPE-> HW | RTMP', async ({ page }) => {
        await jobpage.JobNameDecoderScalingType(IOCombination.TC5);
        await jobpage.UDPInput(IOCombination.TC5);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(IOCombination.TC5);
        await jobpage.OutputButton();
        await jobpage.RTMPOutput(IOCombination.TC5);
        await jobpage.AddedOutputValidation(IOCombination.TC5);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        //await validateJobStatus(jobpage, test);

    });

    test('IO-Combi-TORQ-FX| TC-> 06 | UDPIn | DECODE TYPE-> HW | SCALING TYPE-> HW | ENOCDE TYPE-> SW | SRT LISTENER', async ({ page }) => {
        await jobpage.JobNameDecoderScalingType(IOCombination.TC6);
        await jobpage.UDPInput(IOCombination.TC6);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(IOCombination.TC6);
        await jobpage.OutputButton();
        await jobpage.SRToutputListener(IOCombination.TC6);
        await jobpage.AddedOutputValidation(IOCombination.TC6);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        //await validateJobStatus(jobpage, test);

    });
    test('IO-Combi-TORQ-FX| TC-> 07 | UDPIn | DECODE TYPE-> HW | SCALING TYPE-> HW | ENOCDE TYPE-> SW | SRT CALLER', async ({ page }) => {
        await jobpage.JobNameDecoderScalingType(IOCombination.TC7);
        await jobpage.UDPInput(IOCombination.TC7);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(IOCombination.TC7);
        await jobpage.OutputButton();
        await jobpage.SRToutputCaller(IOCombination.TC7);
        await jobpage.AddedOutputValidation(IOCombination.TC7);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        //await validateJobStatus(jobpage, test);

    });
    test('IO-Combi-TORQ-FX| TC-> 08 | UDPIn | DECODE TYPE-> HW | SCALING TYPE-> HW ENOCDE TYPE-> SW | UDP', async ({ page }) => {
        await jobpage.JobNameDecoderScalingType(IOCombination.TC8);
        await jobpage.UDPInput(IOCombination.TC8);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(IOCombination.TC8);
        await jobpage.OutputButton();
        await jobpage.udpoutput(IOCombination.TC8);
        await jobpage.AddedOutputValidation(IOCombination.TC8);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        //await validateJobStatus(jobpage, test);

    });
    test('IO-Combi-TORQ-FX | TC-> 09 | UDPIn | DECODE TYPE -> HW | SCALING TYPE-> HW | ENOCDE TYPE-> SW | HLS', async ({ page }) => {
        await jobpage.JobNameDecoderScalingType(IOCombination.TC9);
        await jobpage.UDPInput(IOCombination.TC9);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(IOCombination.TC9);
        await jobpage.OutputButton();
        await jobpage.HLSoutput(IOCombination.TC9);
        await jobpage.AddedOutputValidation(IOCombination.TC9);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        //await validateJobStatus(jobpage, test);

    });
    test('IO-Combi-TORQ-FX | TC-> 10 | UDPIn | DECODE TYPE -> HW | SCALING TYPE-> HW | ENOCDE TYPE-> SW | RTMP', async ({ page }) => {
        await jobpage.JobNameDecoderScalingType(IOCombination.TC10);
        await jobpage.UDPInput(IOCombination.TC10);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(IOCombination.TC10);
        await jobpage.OutputButton();
        await jobpage.RTMPOutput(IOCombination.TC10);
        await jobpage.AddedOutputValidation(IOCombination.TC10);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        //await validateJobStatus(jobpage, test);

    });
    test('IO-Combi-TORQ-FX| TC-> 11 | UDPIn | DECODE TYPE-> SW | SCALING TYPE-> HW | ENOCDE TYPE-> HW | SRT LISTENER', async ({ page }) => {
        await jobpage.JobNameDecoderScalingType(IOCombination.TC11);
        await jobpage.UDPInput(IOCombination.TC11);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(IOCombination.TC11);
        await jobpage.OutputButton();
        await jobpage.SRToutputListener(IOCombination.TC11);
        await jobpage.AddedOutputValidation(IOCombination.TC11);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        //await validateJobStatus(jobpage, test);

    });
    test('IO-Combi-TORQ-FX| TC-> 12 | UDPIn | DECODE TYPE-> SW | SCALING TYPE-> HW | ENOCDE TYPE-> HW | SRT CALLER', async ({ page }) => {
        await jobpage.JobNameDecoderScalingType(IOCombination.TC12);
        await jobpage.UDPInput(IOCombination.TC12);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(IOCombination.TC12);
        await jobpage.OutputButton();
        await jobpage.SRToutputCaller(IOCombination.TC12);
        await jobpage.AddedOutputValidation(IOCombination.TC12);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        //await validateJobStatus(jobpage, test);

    });
    test('IO-Combi-TORQ-FX| TC-> 13 | UDPIn | DECODE TYPE-> SW | SCALING TYPE-> HW ENOCDE TYPE-> HW | UDP', async ({ page }) => {
        await jobpage.JobNameDecoderScalingType(IOCombination.TC13);
        await jobpage.UDPInput(IOCombination.TC13);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(IOCombination.TC13);
        await jobpage.OutputButton();
        await jobpage.udpoutput(IOCombination.TC13);
        await jobpage.AddedOutputValidation(IOCombination.TC13);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        //await validateJobStatus(jobpage, test);

    });
    test('IO-Combi-TORQ-FX | TC-> 14 | UDPIn | DECODE TYPE-> SW | SCALING TYPE-> HW | ENOCDE TYPE-> HW | HLS', async ({ page }) => {
        await jobpage.JobNameDecoderScalingType(IOCombination.TC14);
        await jobpage.UDPInput(IOCombination.TC14);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(IOCombination.TC14);
        await jobpage.OutputButton();
        await jobpage.HLSoutput(IOCombination.TC14);
        await jobpage.AddedOutputValidation(IOCombination.TC14);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        //await validateJobStatus(jobpage, test);

    });
    test('IO-Combi-TORQ-FX | TC-> 15 | UDPIn | DECODE TYPE-> SW | SCALING TYPE-> HW | ENOCDE TYPE-> HW | RTMP', async ({ page }) => {
        await jobpage.JobNameDecoderScalingType(IOCombination.TC15);
        await jobpage.UDPInput(IOCombination.TC15);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(IOCombination.TC15);
        await jobpage.OutputButton();
        await jobpage.RTMPOutput(IOCombination.TC15);
        await jobpage.AddedOutputValidation(IOCombination.TC15);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        //await validateJobStatus(jobpage, test);

    });
    test('IO-Combi-TORQ-FX| TC-> 16 | UDPIn | DECODE TYPE-> SW | SCALING TYPE-> SW | ENOCDE TYPE-> SW | SRT LISTENER', async ({ page }) => {
        await jobpage.JobNameDecoderScalingType(IOCombination.TC16);
        await jobpage.UDPInput(IOCombination.TC16);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(IOCombination.TC16);
        await jobpage.OutputButton();
        await jobpage.SRToutputListener(IOCombination.TC16);
        await jobpage.AddedOutputValidation(IOCombination.TC16);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        //await validateJobStatus(jobpage, test);

    });
    test('IO-Combi-TORQ-FX| TC-> 17 | UDPIn | DECODE TYPE-> SW | SCALING TYPE-> SW | ENOCDE TYPE-> SW | SRT CALLER', async ({ page }) => {
        await jobpage.JobNameDecoderScalingType(IOCombination.TC17);
        await jobpage.UDPInput(IOCombination.TC17);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(IOCombination.TC17);
        await jobpage.OutputButton();
        await jobpage.SRToutputCaller(IOCombination.TC17);
        await jobpage.AddedOutputValidation(IOCombination.TC17);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        //await validateJobStatus(jobpage, test);

    });
    test('IO-Combi-TORQ-FX| TC-> 18 | UDPIn | DECODE TYPE-> SW | SCALING TYPE-> SW ENOCDE TYPE-> SW | UDP', async ({ page }) => {
        await jobpage.JobNameDecoderScalingType(IOCombination.TC18);
        await jobpage.UDPInput(IOCombination.TC18);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(IOCombination.TC18);
        await jobpage.OutputButton();
        await jobpage.udpoutput(IOCombination.TC18);
        await jobpage.AddedOutputValidation(IOCombination.TC18);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        //await validateJobStatus(jobpage, test);

    });
    test('IO-Combi-TORQ-FX | TC-> 19 | UDPIn | DECODE TYPE-> SW | SCALING TYPE-> SW | ENOCDE TYPE-> SW | HLS', async ({ page }) => {
        await jobpage.JobNameDecoderScalingType(IOCombination.TC19);
        await jobpage.UDPInput(IOCombination.TC19);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(IOCombination.TC19);
        await jobpage.OutputButton();
        await jobpage.HLSoutput(IOCombination.TC19);
        await jobpage.AddedOutputValidation(IOCombination.TC19);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        //await validateJobStatus(jobpage, test);

    });
    test('IO-Combi-TORQ-FX | TC-> 20 | UDPIn | DECODE TYPE-> SW | SCALING TYPE-> SW | ENOCDE TYPE-> SW | RTMP', async ({ page }) => {
        await jobpage.JobNameDecoderScalingType(IOCombination.TC20);
        await jobpage.UDPInput(IOCombination.TC20);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(IOCombination.TC20);
        await jobpage.OutputButton();
        await jobpage.RTMPOutput(IOCombination.TC20);
        await jobpage.AddedOutputValidation(IOCombination.TC20);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        //await validateJobStatus(jobpage, test);
    });


    //SRT CALLER

    test('IO-Combi-TORQ-FX| TC-> 21 | SRT CALLER | DECODE TYPE-> HW | SCALING TYPE-> HW | ENOCDE TYPE-> HW | SRT LISTENER', async ({ page }) => {
        await jobpage.JobNameDecoderScalingType(IOCombination.TC21);
        await jobpage.SRTCallerInput(IOCombination.TC21);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(IOCombination.TC21);
        await jobpage.OutputButton();
        await jobpage.SRToutputListener(IOCombination.TC21);
        await jobpage.AddedOutputValidation(IOCombination.TC21);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        //await validateJobStatus(jobpage, test);

    });
    test('IO-Combi-TORQ-FX| TC-> 22 | SRT CALLER | DECODE TYPE-> HW | SCALING TYPE-> HW | ENOCDE TYPE-> HW | SRT CALLER', async ({ page }) => {
        await jobpage.JobNameDecoderScalingType(IOCombination.TC22);
        await jobpage.SRTCallerInput(IOCombination.TC22);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(IOCombination.TC22);
        await jobpage.OutputButton();
        await jobpage.SRToutputCaller(IOCombination.TC22);
        await jobpage.AddedOutputValidation(IOCombination.TC22);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        //await validateJobStatus(jobpage, test);

    });
    test('IO-Combi-TORQ-FX| TC-> 23 | SRT CALLER | DECODE TYPE-> HW | SCALING TYPE-> HW ENOCDE TYPE-> HW | UDP', async ({ page }) => {
        await jobpage.JobNameDecoderScalingType(IOCombination.TC23);
        await jobpage.SRTCallerInput(IOCombination.TC23);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(IOCombination.TC23);
        await jobpage.OutputButton();
        await jobpage.udpoutput(IOCombination.TC23);
        await jobpage.AddedOutputValidation(IOCombination.TC23);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        //await validateJobStatus(jobpage, test);

    });
    test('IO-Combi-TORQ-FX | TC-> 24 | SRT CALLER | DECODE TYPE -> HW | SCALING TYPE-> HW | ENOCDE TYPE-> HW | HLS', async ({ page }) => {
        await jobpage.JobNameDecoderScalingType(IOCombination.TC24);
        await jobpage.SRTCallerInput(IOCombination.TC24);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(IOCombination.TC24);
        await jobpage.OutputButton();
        await jobpage.HLSoutput(IOCombination.TC24);
        await jobpage.AddedOutputValidation(IOCombination.TC24);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        //await validateJobStatus(jobpage, test);

    });
    test('IO-Combi-TORQ-FX | TC-> 25 | SRT CALLER | DECODE TYPE -> HW | SCALING TYPE-> HW | ENOCDE TYPE-> HW | RTMP', async ({ page }) => {
        await jobpage.JobNameDecoderScalingType(IOCombination.TC25);
        await jobpage.SRTCallerInput(IOCombination.TC25);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(IOCombination.TC25);
        await jobpage.OutputButton();
        await jobpage.RTMPOutput(IOCombination.TC25);
        await jobpage.AddedOutputValidation(IOCombination.TC25);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        //await validateJobStatus(jobpage, test);
    });

    test('IO-Combi-TORQ-FX| TC-> 26 | SRT CALLER | DECODE TYPE-> HW | SCALING TYPE-> HW | ENOCDE TYPE-> SW | SRT LISTENER', async ({ page }) => {
        await jobpage.JobNameDecoderScalingType(IOCombination.TC26);
        await jobpage.SRTCallerInput(IOCombination.TC26);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(IOCombination.TC26);
        await jobpage.OutputButton();
        await jobpage.SRToutputListener(IOCombination.TC26);
        await jobpage.AddedOutputValidation(IOCombination.TC26);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        //await validateJobStatus(jobpage, test);

    });
    test('IO-Combi-TORQ-FX| TC-> 27 | SRT CALLER | DECODE TYPE-> HW | SCALING TYPE-> HW | ENOCDE TYPE-> SW | SRT CALLER', async ({ page }) => {
        await jobpage.JobNameDecoderScalingType(IOCombination.TC27);
        await jobpage.SRTCallerInput(IOCombination.TC27);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(IOCombination.TC27);
        await jobpage.OutputButton();
        await jobpage.SRToutputCaller(IOCombination.TC27);
        await jobpage.AddedOutputValidation(IOCombination.TC27);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        //await validateJobStatus(jobpage, test);

    });
    test('IO-Combi-TORQ-FX| TC-> 28 | SRT CALLER | DECODE TYPE-> HW | SCALING TYPE-> HW ENOCDE TYPE-> SW | UDP', async ({ page }) => {
        await jobpage.JobNameDecoderScalingType(IOCombination.TC28);
        await jobpage.SRTCallerInput(IOCombination.TC28);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(IOCombination.TC28);
        await jobpage.OutputButton();
        await jobpage.udpoutput(IOCombination.TC28);
        await jobpage.AddedOutputValidation(IOCombination.TC28);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        //await validateJobStatus(jobpage, test);

    });
    test('IO-Combi-TORQ-FX | TC-> 29 | SRT CALLER | DECODE TYPE -> HW | SCALING TYPE-> HW | ENOCDE TYPE-> SW | HLS', async ({ page }) => {
        await jobpage.JobNameDecoderScalingType(IOCombination.TC29);
        await jobpage.SRTCallerInput(IOCombination.TC29);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(IOCombination.TC29);
        await jobpage.OutputButton();
        await jobpage.HLSoutput(IOCombination.TC29);
        await jobpage.AddedOutputValidation(IOCombination.TC29);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        //await validateJobStatus(jobpage, test);

    });
    test('IO-Combi-TORQ-FX | TC-> 30 | SRT CALLER | DECODE TYPE -> HW | SCALING TYPE-> HW | ENOCDE TYPE-> SW | RTMP', async ({ page }) => {
        await jobpage.JobNameDecoderScalingType(IOCombination.TC30);
        await jobpage.SRTCallerInput(IOCombination.TC30);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(IOCombination.TC30);
        await jobpage.OutputButton();
        await jobpage.RTMPOutput(IOCombination.TC30);
        await jobpage.AddedOutputValidation(IOCombination.TC30);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        //await validateJobStatus(jobpage, test);

    });
    test('IO-Combi-TORQ-FX| TC-> 31 | SRT CALLER | DECODE TYPE-> SW | SCALING TYPE-> HW | ENOCDE TYPE-> HW | SRT LISTENER', async ({ page }) => {
        await jobpage.JobNameDecoderScalingType(IOCombination.TC31);
        await jobpage.SRTCallerInput(IOCombination.TC31);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(IOCombination.TC31);
        await jobpage.OutputButton();
        await jobpage.SRToutputListener(IOCombination.TC31);
        await jobpage.AddedOutputValidation(IOCombination.TC31);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        //await validateJobStatus(jobpage, test);

    });
    test('IO-Combi-TORQ-FX| TC-> 32 | SRT CALLER | DECODE TYPE-> SW | SCALING TYPE-> HW | ENOCDE TYPE-> HW | SRT CALLER', async ({ page }) => {
        await jobpage.JobNameDecoderScalingType(IOCombination.TC32);
        await jobpage.SRTCallerInput(IOCombination.TC32);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(IOCombination.TC32);
        await jobpage.OutputButton();
        await jobpage.SRToutputCaller(IOCombination.TC32);
        await jobpage.AddedOutputValidation(IOCombination.TC32);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        //await validateJobStatus(jobpage, test);
    });
    test('IO-Combi-TORQ-FX| TC-> 33 | SRT CALLER | DECODE TYPE-> SW | SCALING TYPE-> HW ENOCDE TYPE-> HW | UDP', async ({ page }) => {
        await jobpage.JobNameDecoderScalingType(IOCombination.TC33);
        await jobpage.SRTCallerInput(IOCombination.TC33);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(IOCombination.TC33);
        await jobpage.OutputButton();
        await jobpage.udpoutput(IOCombination.TC33);
        await jobpage.AddedOutputValidation(IOCombination.TC33);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        //await validateJobStatus(jobpage, test);

    });
    test('IO-Combi-TORQ-FX | TC-> 34 | SRT CALLER | DECODE TYPE-> SW | SCALING TYPE-> HW | ENOCDE TYPE-> HW | HLS', async ({ page }) => {
        await jobpage.JobNameDecoderScalingType(IOCombination.TC34);
        await jobpage.SRTCallerInput(IOCombination.TC34);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(IOCombination.TC34);
        await jobpage.OutputButton();
        await jobpage.HLSoutput(IOCombination.TC34);
        await jobpage.AddedOutputValidation(IOCombination.TC34);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        //await validateJobStatus(jobpage, test);

    });
    test('IO-Combi-TORQ-FX | TC-> 35 | SRT CALLER | DECODE TYPE-> SW | SCALING TYPE-> HW | ENOCDE TYPE-> HW | RTMP', async ({ page }) => {
        await jobpage.JobNameDecoderScalingType(IOCombination.TC35);
        await jobpage.SRTCallerInput(IOCombination.TC35);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(IOCombination.TC35);
        await jobpage.OutputButton();
        await jobpage.RTMPOutput(IOCombination.TC35);
        await jobpage.AddedOutputValidation(IOCombination.TC35);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        //await validateJobStatus(jobpage, test);

    });
    test('IO-Combi-TORQ-FX| TC-> 36 | SRT CALLER | DECODE TYPE-> SW | SCALING TYPE-> SW | ENOCDE TYPE-> SW | SRT LISTENER', async ({ page }) => {
        await jobpage.JobNameDecoderScalingType(IOCombination.TC36);
        await jobpage.SRTCallerInput(IOCombination.TC36);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(IOCombination.TC36);
        await jobpage.OutputButton();
        await jobpage.SRToutputListener(IOCombination.TC36);
        await jobpage.AddedOutputValidation(IOCombination.TC36);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        //await validateJobStatus(jobpage, test);

    });
    test('IO-Combi-TORQ-FX| TC-> 37 | SRT CALLER | DECODE TYPE-> SW | SCALING TYPE-> SW | ENOCDE TYPE-> SW | SRT CALLER', async ({ page }) => {
        await jobpage.JobNameDecoderScalingType(IOCombination.TC37);
        await jobpage.SRTCallerInput(IOCombination.TC37);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(IOCombination.TC37);
        await jobpage.OutputButton();
        await jobpage.SRToutputCaller(IOCombination.TC37);
        await jobpage.AddedOutputValidation(IOCombination.TC37);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        //await validateJobStatus(jobpage, test);

    });
    test('IO-Combi-TORQ-FX| TC-> 38 | SRT CALLER | DECODE TYPE-> SW | SCALING TYPE-> SW ENOCDE TYPE-> SW | UDP', async ({ page }) => {
        await jobpage.JobNameDecoderScalingType(IOCombination.TC38);
        await jobpage.SRTCallerInput(IOCombination.TC38);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(IOCombination.TC38);
        await jobpage.OutputButton();
        await jobpage.udpoutput(IOCombination.TC38);
        await jobpage.AddedOutputValidation(IOCombination.TC38);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        //await validateJobStatus(jobpage, test);

    });
    test('IO-Combi-TORQ-FX | TC-> 39 | SRT CALLER | DECODE TYPE-> SW | SCALING TYPE-> SW | ENOCDE TYPE-> SW | HLS', async ({ page }) => {
        await jobpage.JobNameDecoderScalingType(IOCombination.TC39);
        await jobpage.SRTCallerInput(IOCombination.TC39);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(IOCombination.TC39);
        await jobpage.OutputButton();
        await jobpage.HLSoutput(IOCombination.TC39);
        await jobpage.AddedOutputValidation(IOCombination.TC39);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        //await validateJobStatus(jobpage, test);

    });
    test('IO-Combi-TORQ-FX | TC-> 40 | SRT CALLER | DECODE TYPE-> SW | SCALING TYPE-> SW | ENOCDE TYPE-> SW | RTMP', async ({ page }) => {
        await jobpage.JobNameDecoderScalingType(IOCombination.TC40);
        await jobpage.SRTCallerInput(IOCombination.TC40);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(IOCombination.TC40);
        await jobpage.OutputButton();
        await jobpage.RTMPOutput(IOCombination.TC40);
        await jobpage.AddedOutputValidation(IOCombination.TC40);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        //await validateJobStatus(jobpage, test);
    });

    //SRT LISTENER

    test('IO-Combi-TORQ-FX| TC-> 41 | SRT LISTENER | DECODE TYPE-> HW | SCALING TYPE-> HW | ENOCDE TYPE-> HW | SRT LISTENER', async ({ page }) => {
        await jobpage.JobNameDecoderScalingType(IOCombination.TC41);
        await jobpage.SRTListenerInput(IOCombination.TC41);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(IOCombination.TC41);
        await jobpage.OutputButton();
        await jobpage.SRToutputListener(IOCombination.TC41);
        await jobpage.AddedOutputValidation(IOCombination.TC41);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        //await validateJobStatus(jobpage, test);

    });
    test('IO-Combi-TORQ-FX| TC-> 42 | SRT LISTENER | DECODE TYPE-> HW | SCALING TYPE-> HW | ENOCDE TYPE-> HW | SRT CALLER', async ({ page }) => {
        await jobpage.JobNameDecoderScalingType(IOCombination.TC42);
        await jobpage.SRTListenerInput(IOCombination.TC42);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(IOCombination.TC42);
        await jobpage.OutputButton();
        await jobpage.SRToutputCaller(IOCombination.TC42);
        await jobpage.AddedOutputValidation(IOCombination.TC42);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        //await validateJobStatus(jobpage, test);

    });
    test('IO-Combi-TORQ-FX| TC-> 43 | SRT LISTENER | DECODE TYPE-> HW | SCALING TYPE-> HW ENOCDE TYPE-> HW | UDP', async ({ page }) => {
        await jobpage.JobNameDecoderScalingType(IOCombination.TC43);
        await jobpage.SRTListenerInput(IOCombination.TC43);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(IOCombination.TC43);
        await jobpage.OutputButton();
        await jobpage.udpoutput(IOCombination.TC43);
        await jobpage.AddedOutputValidation(IOCombination.TC43);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        //await validateJobStatus(jobpage, test);

    });
    test('IO-Combi-TORQ-FX | TC-> 44 | SRT LISTENER | DECODE TYPE -> HW | SCALING TYPE-> HW | ENOCDE TYPE-> HW | HLS', async ({ page }) => {
        await jobpage.JobNameDecoderScalingType(IOCombination.TC44);
        await jobpage.SRTListenerInput(IOCombination.TC44);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(IOCombination.TC44);
        await jobpage.OutputButton();
        await jobpage.HLSoutput(IOCombination.TC44);
        await jobpage.AddedOutputValidation(IOCombination.TC44);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        //await validateJobStatus(jobpage, test);

    });
    test('IO-Combi-TORQ-FX | TC-> 45 | SRT LISTENER | DECODE TYPE -> HW | SCALING TYPE-> HW | ENOCDE TYPE-> HW | RTMP', async ({ page }) => {
        await jobpage.JobNameDecoderScalingType(IOCombination.TC45);
        await jobpage.SRTListenerInput(IOCombination.TC45);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(IOCombination.TC45);
        await jobpage.OutputButton();
        await jobpage.RTMPOutput(IOCombination.TC45);
        await jobpage.AddedOutputValidation(IOCombination.TC45);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        //await validateJobStatus(jobpage, test);
    });

    test('IO-Combi-TORQ-FX| TC-> 46 | SRT LISTENER | DECODE TYPE-> HW | SCALING TYPE-> HW | ENOCDE TYPE-> SW | SRT LISTENER', async ({ page }) => {
        await jobpage.JobNameDecoderScalingType(IOCombination.TC46);
        await jobpage.SRTListenerInput(IOCombination.TC46);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(IOCombination.TC46);
        await jobpage.OutputButton();
        await jobpage.SRToutputListener(IOCombination.TC46);
        await jobpage.AddedOutputValidation(IOCombination.TC46);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        //await validateJobStatus(jobpage, test);

    });
    test('IO-Combi-TORQ-FX| TC-> 47 | SRT LISTENER | DECODE TYPE-> HW | SCALING TYPE-> HW | ENOCDE TYPE-> SW | SRT CALLER', async ({ page }) => {
        await jobpage.JobNameDecoderScalingType(IOCombination.TC47);
        await jobpage.SRTListenerInput(IOCombination.TC47);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(IOCombination.TC47);
        await jobpage.OutputButton();
        await jobpage.SRToutputCaller(IOCombination.TC47);
        await jobpage.AddedOutputValidation(IOCombination.TC47);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        //await validateJobStatus(jobpage, test);

    });
    test('IO-Combi-TORQ-FX| TC-> 48 | SRT LISTENER | DECODE TYPE-> HW | SCALING TYPE-> HW ENOCDE TYPE-> SW | UDP', async ({ page }) => {
        await jobpage.JobNameDecoderScalingType(IOCombination.TC48);
        await jobpage.SRTListenerInput(IOCombination.TC48);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(IOCombination.TC48);
        await jobpage.OutputButton();
        await jobpage.udpoutput(IOCombination.TC48);
        await jobpage.AddedOutputValidation(IOCombination.TC48);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        //await validateJobStatus(jobpage, test);

    });
    test('IO-Combi-TORQ-FX | TC-> 49 | SRT LISTENER | DECODE TYPE -> HW | SCALING TYPE-> HW | ENOCDE TYPE-> SW | HLS', async ({ page }) => {
        await jobpage.JobNameDecoderScalingType(IOCombination.TC49);
        await jobpage.SRTListenerInput(IOCombination.TC49);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(IOCombination.TC49);
        await jobpage.OutputButton();
        await jobpage.HLSoutput(IOCombination.TC49);
        await jobpage.AddedOutputValidation(IOCombination.TC49);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        //await validateJobStatus(jobpage, test);

    });
    test('IO-Combi-TORQ-FX | TC-> 50 | SRT LISTENER | DECODE TYPE -> HW | SCALING TYPE-> HW | ENOCDE TYPE-> SW | RTMP', async ({ page }) => {
        await jobpage.JobNameDecoderScalingType(IOCombination.TC50);
        await jobpage.SRTListenerInput(IOCombination.TC50);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(IOCombination.TC50);
        await jobpage.OutputButton();
        await jobpage.RTMPOutput(IOCombination.TC50);
        await jobpage.AddedOutputValidation(IOCombination.TC50);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        //await validateJobStatus(jobpage, test);

    });
    test('IO-Combi-TORQ-FX| TC-> 51 | SRT LISTENER | DECODE TYPE-> SW | SCALING TYPE-> HW | ENOCDE TYPE-> HW | SRT LISTENER', async ({ page }) => {
        await jobpage.JobNameDecoderScalingType(IOCombination.TC51);
        await jobpage.SRTListenerInput(IOCombination.TC51);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(IOCombination.TC51);
        await jobpage.OutputButton();
        await jobpage.SRToutputListener(IOCombination.TC51);
        await jobpage.AddedOutputValidation(IOCombination.TC51);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        //await validateJobStatus(jobpage, test);

    });
    test('IO-Combi-TORQ-FX| TC-> 52 | SRT LISTENER | DECODE TYPE-> SW | SCALING TYPE-> HW | ENOCDE TYPE-> HW | SRT CALLER', async ({ page }) => {
        await jobpage.JobNameDecoderScalingType(IOCombination.TC52);
        await jobpage.SRTListenerInput(IOCombination.TC52);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(IOCombination.TC52);
        await jobpage.OutputButton();
        await jobpage.SRToutputCaller(IOCombination.TC52);
        await jobpage.AddedOutputValidation(IOCombination.TC52);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        //await validateJobStatus(jobpage, test);
    });
    test('IO-Combi-TORQ-FX| TC-> 53 | SRT LISTENER | DECODE TYPE-> SW | SCALING TYPE-> HW ENOCDE TYPE-> HW | UDP', async ({ page }) => {
        await jobpage.JobNameDecoderScalingType(IOCombination.TC53);
        await jobpage.SRTListenerInput(IOCombination.TC53);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(IOCombination.TC53);
        await jobpage.OutputButton();
        await jobpage.udpoutput(IOCombination.TC53);
        await jobpage.AddedOutputValidation(IOCombination.TC53);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        //await validateJobStatus(jobpage, test);

    });
    test('IO-Combi-TORQ-FX | TC-> 54 | SRT LISTENER | DECODE TYPE-> SW | SCALING TYPE-> HW | ENOCDE TYPE-> HW | HLS', async ({ page }) => {
        await jobpage.JobNameDecoderScalingType(IOCombination.TC54);
        await jobpage.SRTListenerInput(IOCombination.TC54);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(IOCombination.TC54);
        await jobpage.OutputButton();
        await jobpage.HLSoutput(IOCombination.TC54);
        await jobpage.AddedOutputValidation(IOCombination.TC54);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        //await validateJobStatus(jobpage, test);

    });
    test('IO-Combi-TORQ-FX | TC-> 55 | SRT LISTENER | DECODE TYPE-> SW | SCALING TYPE-> HW | ENOCDE TYPE-> HW | RTMP', async ({ page }) => {
        await jobpage.JobNameDecoderScalingType(IOCombination.TC55);
        await jobpage.SRTListenerInput(IOCombination.TC55);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(IOCombination.TC55);
        await jobpage.OutputButton();
        await jobpage.RTMPOutput(IOCombination.TC55);
        await jobpage.AddedOutputValidation(IOCombination.TC55);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        //await validateJobStatus(jobpage, test);

    });
    test('IO-Combi-TORQ-FX| TC-> 56 | SRT LISTENER | DECODE TYPE-> SW | SCALING TYPE-> SW | ENOCDE TYPE-> SW | SRT LISTENER', async ({ page }) => {
        await jobpage.JobNameDecoderScalingType(IOCombination.TC56);
        await jobpage.SRTListenerInput(IOCombination.TC56);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(IOCombination.TC56);
        await jobpage.OutputButton();
        await jobpage.SRToutputListener(IOCombination.TC56);
        await jobpage.AddedOutputValidation(IOCombination.TC56);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        //await validateJobStatus(jobpage, test);

    });
    test('IO-Combi-TORQ-FX| TC-> 57 | SRT LISTENER | DECODE TYPE-> SW | SCALING TYPE-> SW | ENOCDE TYPE-> SW | SRT CALLER', async ({ page }) => {
        await jobpage.JobNameDecoderScalingType(IOCombination.TC57);
        await jobpage.SRTListenerInput(IOCombination.TC57);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(IOCombination.TC57);
        await jobpage.OutputButton();
        await jobpage.SRToutputCaller(IOCombination.TC57);
        await jobpage.AddedOutputValidation(IOCombination.TC57);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        //await validateJobStatus(jobpage, test);

    });
    test('IO-Combi-TORQ-FX| TC-> 58 | SRT LISTENER | DECODE TYPE-> SW | SCALING TYPE-> SW ENOCDE TYPE-> SW | UDP', async ({ page }) => {
        await jobpage.JobNameDecoderScalingType(IOCombination.TC58);
        await jobpage.SRTListenerInput(IOCombination.TC58);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(IOCombination.TC58);
        await jobpage.OutputButton();
        await jobpage.udpoutput(IOCombination.TC58);
        await jobpage.AddedOutputValidation(IOCombination.TC58);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        //await validateJobStatus(jobpage, test);

    });
    test('IO-Combi-TORQ-FX | TC-> 59 | SRT LISTENER | DECODE TYPE-> SW | SCALING TYPE-> SW | ENOCDE TYPE-> SW | HLS', async ({ page }) => {
        await jobpage.JobNameDecoderScalingType(IOCombination.TC59);
        await jobpage.SRTListenerInput(IOCombination.TC59);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(IOCombination.TC59);
        await jobpage.OutputButton();
        await jobpage.HLSoutput(IOCombination.TC59);
        await jobpage.AddedOutputValidation(IOCombination.TC59);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        //await validateJobStatus(jobpage, test);

    });
    test('IO-Combi-TORQ-FX | TC-> 60 | SRT LISTENER | DECODE TYPE-> SW | SCALING TYPE-> SW | ENOCDE TYPE-> SW | RTMP', async ({ page }) => {
        await jobpage.JobNameDecoderScalingType(IOCombination.TC60);
        await jobpage.SRTListenerInput(IOCombination.TC60);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(IOCombination.TC60);
        await jobpage.OutputButton();
        await jobpage.RTMPOutput(IOCombination.TC60);
        await jobpage.AddedOutputValidation(IOCombination.TC60);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        //await validateJobStatus(jobpage, test);
    });

    //RTMP

    test('IO-Combi-TORQ-FX| TC-> 61 | RTMP | DECODE TYPE-> HW | SCALING TYPE-> HW | ENOCDE TYPE-> HW | SRT LISTENER', async ({ page }) => {
        await jobpage.JobNameDecoderScalingType(IOCombination.TC61);
        await jobpage.RTMPInput(IOCombination.TC61);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(IOCombination.TC61);
        await jobpage.OutputButton();
        await jobpage.SRToutputListener(IOCombination.TC61);
        await jobpage.AddedOutputValidation(IOCombination.TC61);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        //await validateJobStatus(jobpage, test);

    });
    test('IO-Combi-TORQ-FX| TC-> 62 | RTMP | DECODE TYPE-> HW | SCALING TYPE-> HW | ENOCDE TYPE-> HW | SRT CALLER', async ({ page }) => {
        await jobpage.JobNameDecoderScalingType(IOCombination.TC62);
        await jobpage.RTMPInput(IOCombination.TC62);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(IOCombination.TC62);
        await jobpage.OutputButton();
        await jobpage.SRToutputCaller(IOCombination.TC62);
        await jobpage.AddedOutputValidation(IOCombination.TC62);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        //await validateJobStatus(jobpage, test);

    });
    test('IO-Combi-TORQ-FX| TC-> 63 | RTMP | DECODE TYPE-> HW | SCALING TYPE-> HW ENOCDE TYPE-> HW | UDP', async ({ page }) => {
        await jobpage.JobNameDecoderScalingType(IOCombination.TC63);
        await jobpage.RTMPInput(IOCombination.TC63);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(IOCombination.TC63);
        await jobpage.OutputButton();
        await jobpage.udpoutput(IOCombination.TC63);
        await jobpage.AddedOutputValidation(IOCombination.TC63);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        //await validateJobStatus(jobpage, test);

    });
    test('IO-Combi-TORQ-FX | TC-> 64 | RTMP | DECODE TYPE -> HW | SCALING TYPE-> HW | ENOCDE TYPE-> HW | HLS', async ({ page }) => {
        await jobpage.JobNameDecoderScalingType(IOCombination.TC64);
        await jobpage.RTMPInput(IOCombination.TC64);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(IOCombination.TC64);
        await jobpage.OutputButton();
        await jobpage.HLSoutput(IOCombination.TC64);
        await jobpage.AddedOutputValidation(IOCombination.TC64);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        //await validateJobStatus(jobpage, test);

    });
    test('IO-Combi-TORQ-FX | TC-> 65 | RTMP | DECODE TYPE -> HW | SCALING TYPE-> HW | ENOCDE TYPE-> HW | RTMP', async ({ page }) => {
        await jobpage.JobNameDecoderScalingType(IOCombination.TC65);
        await jobpage.RTMPInput(IOCombination.TC65);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(IOCombination.TC65);
        await jobpage.OutputButton();
        await jobpage.RTMPOutput(IOCombination.TC65);
        await jobpage.AddedOutputValidation(IOCombination.TC65);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        //await validateJobStatus(jobpage, test);
    });

    test('IO-Combi-TORQ-FX| TC-> 66 | RTMP | DECODE TYPE-> HW | SCALING TYPE-> HW | ENOCDE TYPE-> SW | SRT LISTENER', async ({ page }) => {
        await jobpage.JobNameDecoderScalingType(IOCombination.TC66);
        await jobpage.RTMPInput(IOCombination.TC66);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(IOCombination.TC66);
        await jobpage.OutputButton();
        await jobpage.SRToutputListener(IOCombination.TC66);
        await jobpage.AddedOutputValidation(IOCombination.TC66);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        //await validateJobStatus(jobpage, test);

    });
    test('IO-Combi-TORQ-FX| TC-> 67 | RTMP | DECODE TYPE-> HW | SCALING TYPE-> HW | ENOCDE TYPE-> SW | SRT CALLER', async ({ page }) => {
        await jobpage.JobNameDecoderScalingType(IOCombination.TC67);
        await jobpage.RTMPInput(IOCombination.TC67);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(IOCombination.TC67);
        await jobpage.OutputButton();
        await jobpage.SRToutputCaller(IOCombination.TC67);
        await jobpage.AddedOutputValidation(IOCombination.TC67);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        //await validateJobStatus(jobpage, test);

    });
    test('IO-Combi-TORQ-FX| TC-> 68 | RTMP | DECODE TYPE-> HW | SCALING TYPE-> HW ENOCDE TYPE-> SW | UDP', async ({ page }) => {
        await jobpage.JobNameDecoderScalingType(IOCombination.TC68);
        await jobpage.RTMPInput(IOCombination.TC68);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(IOCombination.TC68);
        await jobpage.OutputButton();
        await jobpage.udpoutput(IOCombination.TC68);
        await jobpage.AddedOutputValidation(IOCombination.TC68);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        //await validateJobStatus(jobpage, test);

    });
    test('IO-Combi-TORQ-FX | TC-> 69 | RTMP | DECODE TYPE -> HW | SCALING TYPE-> HW | ENOCDE TYPE-> SW | HLS', async ({ page }) => {
        await jobpage.JobNameDecoderScalingType(IOCombination.TC69);
        await jobpage.RTMPInput(IOCombination.TC69);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(IOCombination.TC69);
        await jobpage.OutputButton();
        await jobpage.HLSoutput(IOCombination.TC69);
        await jobpage.AddedOutputValidation(IOCombination.TC69);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        //await validateJobStatus(jobpage, test);

    });
    test('IO-Combi-TORQ-FX | TC-> 70 | RTMP | DECODE TYPE -> HW | SCALING TYPE-> HW | ENOCDE TYPE-> SW | RTMP', async ({ page }) => {
        await jobpage.JobNameDecoderScalingType(IOCombination.TC70);
        await jobpage.RTMPInput(IOCombination.TC70);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(IOCombination.TC70);
        await jobpage.OutputButton();
        await jobpage.RTMPOutput(IOCombination.TC70);
        await jobpage.AddedOutputValidation(IOCombination.TC70);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        //await validateJobStatus(jobpage, test);

    });
    test('IO-Combi-TORQ-FX| TC-> 71 | RTMP | DECODE TYPE-> SW | SCALING TYPE-> HW | ENOCDE TYPE-> HW | SRT LISTENER', async ({ page }) => {
        await jobpage.JobNameDecoderScalingType(IOCombination.TC71);
        await jobpage.RTMPInput(IOCombination.TC71);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(IOCombination.TC71);
        await jobpage.OutputButton();
        await jobpage.SRToutputListener(IOCombination.TC71);
        await jobpage.AddedOutputValidation(IOCombination.TC71);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        //await validateJobStatus(jobpage, test);

    });
    test('IO-Combi-TORQ-FX| TC-> 72 | RTMP | DECODE TYPE-> SW | SCALING TYPE-> HW | ENOCDE TYPE-> HW | SRT CALLER', async ({ page }) => {
        await jobpage.JobNameDecoderScalingType(IOCombination.TC72);
        await jobpage.RTMPInput(IOCombination.TC72);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(IOCombination.TC72);
        await jobpage.OutputButton();
        await jobpage.SRToutputCaller(IOCombination.TC72);
        await jobpage.AddedOutputValidation(IOCombination.TC72);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        //await validateJobStatus(jobpage, test);
    });
    test('IO-Combi-TORQ-FX| TC-> 73 | RTMP | DECODE TYPE-> SW | SCALING TYPE-> HW ENOCDE TYPE-> HW | UDP', async ({ page }) => {
        await jobpage.JobNameDecoderScalingType(IOCombination.TC73);
        await jobpage.RTMPInput(IOCombination.TC73);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(IOCombination.TC73);
        await jobpage.OutputButton();
        await jobpage.udpoutput(IOCombination.TC73);
        await jobpage.AddedOutputValidation(IOCombination.TC73);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        //await validateJobStatus(jobpage, test);

    });
    test('IO-Combi-TORQ-FX | TC-> 74 | RTMP | DECODE TYPE-> SW | SCALING TYPE-> HW | ENOCDE TYPE-> HW | HLS', async ({ page }) => {
        await jobpage.JobNameDecoderScalingType(IOCombination.TC74);
        await jobpage.RTMPInput(IOCombination.TC74);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(IOCombination.TC74);
        await jobpage.OutputButton();
        await jobpage.HLSoutput(IOCombination.TC74);
        await jobpage.AddedOutputValidation(IOCombination.TC74);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        //await validateJobStatus(jobpage, test);

    });
    test('IO-Combi-TORQ-FX | TC-> 75 | RTMP | DECODE TYPE-> SW | SCALING TYPE-> HW | ENOCDE TYPE-> HW | RTMP', async ({ page }) => {
        await jobpage.JobNameDecoderScalingType(IOCombination.TC75);
        await jobpage.RTMPInput(IOCombination.TC75);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(IOCombination.TC75);
        await jobpage.OutputButton();
        await jobpage.RTMPOutput(IOCombination.TC75);
        await jobpage.AddedOutputValidation(IOCombination.TC75);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        //await validateJobStatus(jobpage, test);

    });
    test('IO-Combi-TORQ-FX| TC-> 76 | RTMP | DECODE TYPE-> SW | SCALING TYPE-> SW | ENOCDE TYPE-> SW | SRT LISTENER', async ({ page }) => {
        await jobpage.JobNameDecoderScalingType(IOCombination.TC76);
        await jobpage.RTMPInput(IOCombination.TC76);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(IOCombination.TC76);
        await jobpage.OutputButton();
        await jobpage.SRToutputListener(IOCombination.TC76);
        await jobpage.AddedOutputValidation(IOCombination.TC76);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        //await validateJobStatus(jobpage, test);

    });
    test('IO-Combi-TORQ-FX| TC-> 77 | RTMP | DECODE TYPE-> SW | SCALING TYPE-> SW | ENOCDE TYPE-> SW | SRT CALLER', async ({ page }) => {
        await jobpage.JobNameDecoderScalingType(IOCombination.TC77);
        await jobpage.RTMPInput(IOCombination.TC77);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(IOCombination.TC77);
        await jobpage.OutputButton();
        await jobpage.SRToutputCaller(IOCombination.TC77);
        await jobpage.AddedOutputValidation(IOCombination.TC77);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        //await validateJobStatus(jobpage, test);

    });
    test('IO-Combi-TORQ-FX| TC-> 78 | RTMP | DECODE TYPE-> SW | SCALING TYPE-> SW ENOCDE TYPE-> SW | UDP', async ({ page }) => {
        await jobpage.JobNameDecoderScalingType(IOCombination.TC78);
        await jobpage.RTMPInput(IOCombination.TC78);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(IOCombination.TC78);
        await jobpage.OutputButton();
        await jobpage.udpoutput(IOCombination.TC78);
        await jobpage.AddedOutputValidation(IOCombination.TC78);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        //await validateJobStatus(jobpage, test);

    });
    test('IO-Combi-TORQ-FX | TC-> 79 | RTMP | DECODE TYPE-> SW | SCALING TYPE-> SW | ENOCDE TYPE-> SW | HLS', async ({ page }) => {
        await jobpage.JobNameDecoderScalingType(IOCombination.TC79);
        await jobpage.RTMPInput(IOCombination.TC79);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(IOCombination.TC79);
        await jobpage.OutputButton();
        await jobpage.HLSoutput(IOCombination.TC79);
        await jobpage.AddedOutputValidation(IOCombination.TC79);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        //await validateJobStatus(jobpage, test);

    });
    test('IO-Combi-TORQ-FX | TC-> 80 | RTMP | DECODE TYPE-> SW | SCALING TYPE-> SW | ENOCDE TYPE-> SW | RTMP', async ({ page }) => {
        await jobpage.JobNameDecoderScalingType(IOCombination.TC80);
        await jobpage.RTMPInput(IOCombination.TC80);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(IOCombination.TC80);
        await jobpage.OutputButton();
        await jobpage.RTMPOutput(IOCombination.TC80);
        await jobpage.AddedOutputValidation(IOCombination.TC80);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        //await validateJobStatus(jobpage, test);
    });

    // HTTP 
    test('IO-Combi-TORQ-FX| TC-> 81 | HTTP | DECODE TYPE-> HW | SCALING TYPE-> HW | ENOCDE TYPE-> HW | SRT LISTENER', async ({ page }) => {
        await jobpage.JobNameDecoderScalingType(IOCombination.TC81);
        await jobpage.HTTPInput(IOCombination.TC81);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(IOCombination.TC81);
        await jobpage.OutputButton();
        await jobpage.SRToutputListener(IOCombination.TC81);
        await jobpage.AddedOutputValidation(IOCombination.TC81);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        //await validateJobStatus(jobpage, test);

    });
    test('IO-Combi-TORQ-FX| TC-> 82 | HTTP | DECODE TYPE-> HW | SCALING TYPE-> HW | ENOCDE TYPE-> HW | SRT CALLER', async ({ page }) => {
        await jobpage.JobNameDecoderScalingType(IOCombination.TC82);
        await jobpage.HTTPInput(IOCombination.TC82);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(IOCombination.TC82);
        await jobpage.OutputButton();
        await jobpage.SRToutputCaller(IOCombination.TC82);
        await jobpage.AddedOutputValidation(IOCombination.TC82);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        //await validateJobStatus(jobpage, test);

    });
    test('IO-Combi-TORQ-FX| TC-> 83 | HTTP | DECODE TYPE-> HW | SCALING TYPE-> HW ENOCDE TYPE-> HW | UDP', async ({ page }) => {
        await jobpage.JobNameDecoderScalingType(IOCombination.TC83);
        await jobpage.HTTPInput(IOCombination.TC83);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(IOCombination.TC83);
        await jobpage.OutputButton();
        await jobpage.udpoutput(IOCombination.TC83);
        await jobpage.AddedOutputValidation(IOCombination.TC83);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        //await validateJobStatus(jobpage, test);

    });
    test('IO-Combi-TORQ-FX | TC-> 84 | HTTP | DECODE TYPE -> HW | SCALING TYPE-> HW | ENOCDE TYPE-> HW | HLS', async ({ page }) => {
        await jobpage.JobNameDecoderScalingType(IOCombination.TC84);
        await jobpage.HTTPInput(IOCombination.TC84);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(IOCombination.TC84);
        await jobpage.OutputButton();
        await jobpage.HLSoutput(IOCombination.TC84);
        await jobpage.AddedOutputValidation(IOCombination.TC84);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        //await validateJobStatus(jobpage, test);

    });
    test('IO-Combi-TORQ-FX | TC-> 85 | HTTP | DECODE TYPE -> HW | SCALING TYPE-> HW | ENOCDE TYPE-> HW | RTMP', async ({ page }) => {
        await jobpage.JobNameDecoderScalingType(IOCombination.TC85);
        await jobpage.HTTPInput(IOCombination.TC85);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(IOCombination.TC85);
        await jobpage.OutputButton();
        await jobpage.RTMPOutput(IOCombination.TC85);
        await jobpage.AddedOutputValidation(IOCombination.TC85);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        //await validateJobStatus(jobpage, test);
    });

    test('IO-Combi-TORQ-FX| TC-> 86 | HTTP | DECODE TYPE-> HW | SCALING TYPE-> HW | ENOCDE TYPE-> SW | SRT LISTENER', async ({ page }) => {
        await jobpage.JobNameDecoderScalingType(IOCombination.TC86);
        await jobpage.HTTPInput(IOCombination.TC86);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(IOCombination.TC86);
        await jobpage.OutputButton();
        await jobpage.SRToutputListener(IOCombination.TC86);
        await jobpage.AddedOutputValidation(IOCombination.TC86);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        //await validateJobStatus(jobpage, test);

    });
    test('IO-Combi-TORQ-FX| TC-> 87 | HTTP | DECODE TYPE-> HW | SCALING TYPE-> HW | ENOCDE TYPE-> SW | SRT CALLER', async ({ page }) => {
        await jobpage.JobNameDecoderScalingType(IOCombination.TC87);
        await jobpage.HTTPInput(IOCombination.TC87);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(IOCombination.TC87);
        await jobpage.OutputButton();
        await jobpage.SRToutputCaller(IOCombination.TC87);
        await jobpage.AddedOutputValidation(IOCombination.TC87);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        //await validateJobStatus(jobpage, test);

    });
    test('IO-Combi-TORQ-FX| TC-> 88 | HTTP | DECODE TYPE-> HW | SCALING TYPE-> HW ENOCDE TYPE-> SW | UDP', async ({ page }) => {
        await jobpage.JobNameDecoderScalingType(IOCombination.TC88);
        await jobpage.HTTPInput(IOCombination.TC88);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(IOCombination.TC88);
        await jobpage.OutputButton();
        await jobpage.udpoutput(IOCombination.TC88);
        await jobpage.AddedOutputValidation(IOCombination.TC88);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        //await validateJobStatus(jobpage, test);

    });
    test('IO-Combi-TORQ-FX | TC-> 89 | HTTP | DECODE TYPE -> HW | SCALING TYPE-> HW | ENOCDE TYPE-> SW | HLS', async ({ page }) => {
        await jobpage.JobNameDecoderScalingType(IOCombination.TC89);
        await jobpage.HTTPInput(IOCombination.TC89);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(IOCombination.TC89);
        await jobpage.OutputButton();
        await jobpage.HLSoutput(IOCombination.TC89);
        await jobpage.AddedOutputValidation(IOCombination.TC89);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        //await validateJobStatus(jobpage, test);

    });
    test('IO-Combi-TORQ-FX | TC-> 90 | HTTP | DECODE TYPE -> HW | SCALING TYPE-> HW | ENOCDE TYPE-> SW | RTMP', async ({ page }) => {
        await jobpage.JobNameDecoderScalingType(IOCombination.TC90);
        await jobpage.HTTPInput(IOCombination.TC90);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(IOCombination.TC90);
        await jobpage.OutputButton();
        await jobpage.RTMPOutput(IOCombination.TC90);
        await jobpage.AddedOutputValidation(IOCombination.TC90);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        //await validateJobStatus(jobpage, test);

    });
    test('IO-Combi-TORQ-FX| TC-> 91 | HTTP | DECODE TYPE-> SW | SCALING TYPE-> HW | ENOCDE TYPE-> HW | SRT LISTENER', async ({ page }) => {
        await jobpage.JobNameDecoderScalingType(IOCombination.TC91);
        await jobpage.HTTPInput(IOCombination.TC91);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(IOCombination.TC91);
        await jobpage.OutputButton();
        await jobpage.SRToutputListener(IOCombination.TC91);
        await jobpage.AddedOutputValidation(IOCombination.TC91);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        //await validateJobStatus(jobpage, test);

    });
    test('IO-Combi-TORQ-FX| TC-> 92 | HTTP | DECODE TYPE-> SW | SCALING TYPE-> HW | ENOCDE TYPE-> HW | SRT CALLER', async ({ page }) => {
        await jobpage.JobNameDecoderScalingType(IOCombination.TC92);
        await jobpage.HTTPInput(IOCombination.TC92);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(IOCombination.TC92);
        await jobpage.OutputButton();
        await jobpage.SRToutputCaller(IOCombination.TC92);
        await jobpage.AddedOutputValidation(IOCombination.TC92);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        //await validateJobStatus(jobpage, test);
    });
    test('IO-Combi-TORQ-FX| TC-> 93 | HTTP | DECODE TYPE-> SW | SCALING TYPE-> HW ENOCDE TYPE-> HW | UDP', async ({ page }) => {
        await jobpage.JobNameDecoderScalingType(IOCombination.TC93);
        await jobpage.HTTPInput(IOCombination.TC93);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(IOCombination.TC93);
        await jobpage.OutputButton();
        await jobpage.udpoutput(IOCombination.TC93);
        await jobpage.AddedOutputValidation(IOCombination.TC93);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        //await validateJobStatus(jobpage, test);

    });
    test('IO-Combi-TORQ-FX | TC-> 94 | HTTP | DECODE TYPE-> SW | SCALING TYPE-> HW | ENOCDE TYPE-> HW | HLS', async ({ page }) => {
        await jobpage.JobNameDecoderScalingType(IOCombination.TC94);
        await jobpage.HTTPInput(IOCombination.TC94);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(IOCombination.TC94);
        await jobpage.OutputButton();
        await jobpage.HLSoutput(IOCombination.TC94);
        await jobpage.AddedOutputValidation(IOCombination.TC94);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        //await validateJobStatus(jobpage, test);

    });
    test('IO-Combi-TORQ-FX | TC-> 95 | HTTP | DECODE TYPE-> SW | SCALING TYPE-> HW | ENOCDE TYPE-> HW | RTMP', async ({ page }) => {
        await jobpage.JobNameDecoderScalingType(IOCombination.TC95);
        await jobpage.HTTPInput(IOCombination.TC95);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(IOCombination.TC95);
        await jobpage.OutputButton();
        await jobpage.RTMPOutput(IOCombination.TC95);
        await jobpage.AddedOutputValidation(IOCombination.TC95);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        //await validateJobStatus(jobpage, test);

    });
    test('IO-Combi-TORQ-FX| TC-> 96 | HTTP | DECODE TYPE-> SW | SCALING TYPE-> SW | ENOCDE TYPE-> SW | SRT LISTENER', async ({ page }) => {
        await jobpage.JobNameDecoderScalingType(IOCombination.TC96);
        await jobpage.HTTPInput(IOCombination.TC96);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(IOCombination.TC96);
        await jobpage.OutputButton();
        await jobpage.SRToutputListener(IOCombination.TC96);
        await jobpage.AddedOutputValidation(IOCombination.TC96);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        //await validateJobStatus(jobpage, test);

    });
    test('IO-Combi-TORQ-FX| TC-> 97 | HTTP | DECODE TYPE-> SW | SCALING TYPE-> SW | ENOCDE TYPE-> SW | SRT CALLER', async ({ page }) => {
        await jobpage.JobNameDecoderScalingType(IOCombination.TC97);
        await jobpage.HTTPInput(IOCombination.TC97);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(IOCombination.TC97);
        await jobpage.OutputButton();
        await jobpage.SRToutputCaller(IOCombination.TC97);
        await jobpage.AddedOutputValidation(IOCombination.TC97);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        //await validateJobStatus(jobpage, test);

    });
    test('IO-Combi-TORQ-FX| TC-> 98 | HTTP | DECODE TYPE-> SW | SCALING TYPE-> SW ENOCDE TYPE-> SW | UDP', async ({ page }) => {
        await jobpage.JobNameDecoderScalingType(IOCombination.TC98);
        await jobpage.HTTPInput(IOCombination.TC98);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(IOCombination.TC98);
        await jobpage.OutputButton();
        await jobpage.udpoutput(IOCombination.TC98);
        await jobpage.AddedOutputValidation(IOCombination.TC98);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        //await validateJobStatus(jobpage, test);

    });
    test('IO-Combi-TORQ-FX | TC-> 99 | HTTP | DECODE TYPE-> SW | SCALING TYPE-> SW | ENOCDE TYPE-> SW | HLS', async ({ page }) => {
        await jobpage.JobNameDecoderScalingType(IOCombination.TC99);
        await jobpage.HTTPInput(IOCombination.TC99);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(IOCombination.TC99);
        await jobpage.OutputButton();
        await jobpage.HLSoutput(IOCombination.TC99);
        await jobpage.AddedOutputValidation(IOCombination.TC99);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        //await validateJobStatus(jobpage, test);

    });
    test('IO-Combi-TORQ-FX | TC-> 100 | HTTP | DECODE TYPE-> SW | SCALING TYPE-> SW | ENOCDE TYPE-> SW | RTMP', async ({ page }) => {
        await jobpage.JobNameDecoderScalingType(IOCombination.TC100);
        await jobpage.HTTPInput(IOCombination.TC100);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(IOCombination.TC100);
        await jobpage.OutputButton();
        await jobpage.RTMPOutput(IOCombination.TC100);
        await jobpage.AddedOutputValidation(IOCombination.TC100);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        //await validateJobStatus(jobpage, test);
    });
    // FILE STREAM INPUT
    test('IO-Combi-TORQ-FX| TC-> 101 | FILE STREAM INPUT | DECODE TYPE-> HW | SCALING TYPE-> HW | ENOCDE TYPE-> HW | SRT LISTENER', async ({ page }) => {
        await jobpage.JobNameDecoderScalingType(IOCombination.TC101);
        await jobpage.FileStreamInput(IOCombination.TC101);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(IOCombination.TC101);
        await jobpage.OutputButton();
        await jobpage.SRToutputListener(IOCombination.TC101);
        await jobpage.AddedOutputValidation(IOCombination.TC101);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        //await validateJobStatus(jobpage, test);

    });
    test('IO-Combi-TORQ-FX| TC-> 102 | FILE STREAM INPUT | DECODE TYPE-> HW | SCALING TYPE-> HW | ENOCDE TYPE-> HW | SRT CALLER', async ({ page }) => {
        await jobpage.JobNameDecoderScalingType(IOCombination.TC102);
        await jobpage.FileStreamInput(IOCombination.TC102);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(IOCombination.TC102);
        await jobpage.OutputButton();
        await jobpage.SRToutputCaller(IOCombination.TC102);
        await jobpage.AddedOutputValidation(IOCombination.TC102);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        //await validateJobStatus(jobpage, test);

    });
    test('IO-Combi-TORQ-FX| TC-> 103 | FILE STREAM INPUT | DECODE TYPE-> HW | SCALING TYPE-> HW ENOCDE TYPE-> HW | UDP', async ({ page }) => {
        await jobpage.JobNameDecoderScalingType(IOCombination.TC103);
        await jobpage.FileStreamInput(IOCombination.TC103);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(IOCombination.TC103);
        await jobpage.OutputButton();
        await jobpage.udpoutput(IOCombination.TC103);
        await jobpage.AddedOutputValidation(IOCombination.TC103);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        //await validateJobStatus(jobpage, test);

    });
    test('IO-Combi-TORQ-FX | TC-> 104 | FILE STREAM INPUT | DECODE TYPE -> HW | SCALING TYPE-> HW | ENOCDE TYPE-> HW | HLS', async ({ page }) => {
        await jobpage.JobNameDecoderScalingType(IOCombination.TC104);
        await jobpage.FileStreamInput(IOCombination.TC104);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(IOCombination.TC104);
        await jobpage.OutputButton();
        await jobpage.HLSoutput(IOCombination.TC104);
        await jobpage.AddedOutputValidation(IOCombination.TC104);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        //await validateJobStatus(jobpage, test);

    });
    test('IO-Combi-TORQ-FX | TC-> 105 | FILE STREAM INPUT | DECODE TYPE -> HW | SCALING TYPE-> HW | ENOCDE TYPE-> HW | RTMP', async ({ page }) => {
        await jobpage.JobNameDecoderScalingType(IOCombination.TC105);
        await jobpage.FileStreamInput(IOCombination.TC105);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(IOCombination.TC105);
        await jobpage.OutputButton();
        await jobpage.RTMPOutput(IOCombination.TC105);
        await jobpage.AddedOutputValidation(IOCombination.TC105);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        //await validateJobStatus(jobpage, test);
    });

    test('IO-Combi-TORQ-FX| TC-> 106 | FILE STREAM INPUT | DECODE TYPE-> HW | SCALING TYPE-> HW | ENOCDE TYPE-> SW | SRT LISTENER', async ({ page }) => {
        await jobpage.JobNameDecoderScalingType(IOCombination.TC106);
        await jobpage.FileStreamInput(IOCombination.TC106);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(IOCombination.TC106);
        await jobpage.OutputButton();
        await jobpage.SRToutputListener(IOCombination.TC106);
        await jobpage.AddedOutputValidation(IOCombination.TC106);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        //await validateJobStatus(jobpage, test);

    });
    test('IO-Combi-TORQ-FX| TC-> 107 | FILE STREAM INPUT | DECODE TYPE-> HW | SCALING TYPE-> HW | ENOCDE TYPE-> SW | SRT CALLER', async ({ page }) => {
        await jobpage.JobNameDecoderScalingType(IOCombination.TC107);
        await jobpage.FileStreamInput(IOCombination.TC107);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(IOCombination.TC107);
        await jobpage.OutputButton();
        await jobpage.SRToutputCaller(IOCombination.TC107);
        await jobpage.AddedOutputValidation(IOCombination.TC107);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        //await validateJobStatus(jobpage, test);

    });
    test('IO-Combi-TORQ-FX| TC-> 108 | FILE STREAM INPUT | DECODE TYPE-> HW | SCALING TYPE-> HW ENOCDE TYPE-> SW | UDP', async ({ page }) => {
        await jobpage.JobNameDecoderScalingType(IOCombination.TC108);
        await jobpage.FileStreamInput(IOCombination.TC108);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(IOCombination.TC108);
        await jobpage.OutputButton();
        await jobpage.udpoutput(IOCombination.TC108);
        await jobpage.AddedOutputValidation(IOCombination.TC108);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        //await validateJobStatus(jobpage, test);

    });
    test('IO-Combi-TORQ-FX | TC-> 109 | FILE STREAM INPUT | DECODE TYPE -> HW | SCALING TYPE-> HW | ENOCDE TYPE-> SW | HLS', async ({ page }) => {
        await jobpage.JobNameDecoderScalingType(IOCombination.TC109);
        await jobpage.FileStreamInput(IOCombination.TC109);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(IOCombination.TC109);
        await jobpage.OutputButton();
        await jobpage.HLSoutput(IOCombination.TC109);
        await jobpage.AddedOutputValidation(IOCombination.TC109);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        //await validateJobStatus(jobpage, test);

    });
    test('IO-Combi-TORQ-FX | TC-> 110 | FILE STREAM INPUT | DECODE TYPE -> HW | SCALING TYPE-> HW | ENOCDE TYPE-> SW | RTMP', async ({ page }) => {
        await jobpage.JobNameDecoderScalingType(IOCombination.TC110);
        await jobpage.FileStreamInput(IOCombination.TC110);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(IOCombination.TC110);
        await jobpage.OutputButton();
        await jobpage.RTMPOutput(IOCombination.TC110);
        await jobpage.AddedOutputValidation(IOCombination.TC110);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        //await validateJobStatus(jobpage, test);

    });
    test('IO-Combi-TORQ-FX| TC-> 111 | FILE STREAM INPUT | DECODE TYPE-> SW | SCALING TYPE-> HW | ENOCDE TYPE-> HW | SRT LISTENER', async ({ page }) => {
        await jobpage.JobNameDecoderScalingType(IOCombination.TC111);
        await jobpage.FileStreamInput(IOCombination.TC111);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(IOCombination.TC111);
        await jobpage.OutputButton();
        await jobpage.SRToutputListener(IOCombination.TC111);
        await jobpage.AddedOutputValidation(IOCombination.TC111);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        //await validateJobStatus(jobpage, test);

    });
    test('IO-Combi-TORQ-FX| TC-> 112 | FILE STREAM INPUT | DECODE TYPE-> SW | SCALING TYPE-> HW | ENOCDE TYPE-> HW | SRT CALLER', async ({ page }) => {
        await jobpage.JobNameDecoderScalingType(IOCombination.TC112);
        await jobpage.FileStreamInput(IOCombination.TC112);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(IOCombination.TC112);
        await jobpage.OutputButton();
        await jobpage.SRToutputCaller(IOCombination.TC112);
        await jobpage.AddedOutputValidation(IOCombination.TC112);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        //await validateJobStatus(jobpage, test);
    });
    test('IO-Combi-TORQ-FX| TC-> 113 | FILE STREAM INPUT | DECODE TYPE-> SW | SCALING TYPE-> HW ENOCDE TYPE-> HW | UDP', async ({ page }) => {
        await jobpage.JobNameDecoderScalingType(IOCombination.TC113);
        await jobpage.FileStreamInput(IOCombination.TC113);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(IOCombination.TC113);
        await jobpage.OutputButton();
        await jobpage.udpoutput(IOCombination.TC113);
        await jobpage.AddedOutputValidation(IOCombination.TC113);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        //await validateJobStatus(jobpage, test);

    });
    test('IO-Combi-TORQ-FX | TC-> 114 | FILE STREAM INPUT | DECODE TYPE-> SW | SCALING TYPE-> HW | ENOCDE TYPE-> HW | HLS', async ({ page }) => {
        await jobpage.JobNameDecoderScalingType(IOCombination.TC114);
        await jobpage.FileStreamInput(IOCombination.TC114);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(IOCombination.TC114);
        await jobpage.OutputButton();
        await jobpage.HLSoutput(IOCombination.TC114);
        await jobpage.AddedOutputValidation(IOCombination.TC114);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        //await validateJobStatus(jobpage, test);

    });
    test('IO-Combi-TORQ-FX | TC-> 115 | FILE STREAM INPUT | DECODE TYPE-> SW | SCALING TYPE-> HW | ENOCDE TYPE-> HW | RTMP', async ({ page }) => {
        await jobpage.JobNameDecoderScalingType(IOCombination.TC115);
        await jobpage.FileStreamInput(IOCombination.TC115);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(IOCombination.TC115);
        await jobpage.OutputButton();
        await jobpage.RTMPOutput(IOCombination.TC115);
        await jobpage.AddedOutputValidation(IOCombination.TC115);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        //await validateJobStatus(jobpage, test);

    });
    test('IO-Combi-TORQ-FX| TC-> 116 | FILE STREAM INPUT | DECODE TYPE-> SW | SCALING TYPE-> SW | ENOCDE TYPE-> SW | SRT LISTENER', async ({ page }) => {
        await jobpage.JobNameDecoderScalingType(IOCombination.TC116);
        await jobpage.FileStreamInput(IOCombination.TC116);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(IOCombination.TC116);
        await jobpage.OutputButton();
        await jobpage.SRToutputListener(IOCombination.TC116);
        await jobpage.AddedOutputValidation(IOCombination.TC116);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        //await validateJobStatus(jobpage, test);

    });
    test('IO-Combi-TORQ-FX| TC-> 117 | FILE STREAM INPUT | DECODE TYPE-> SW | SCALING TYPE-> SW | ENOCDE TYPE-> SW | SRT CALLER', async ({ page }) => {
        await jobpage.JobNameDecoderScalingType(IOCombination.TC117);
        await jobpage.FileStreamInput(IOCombination.TC117);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(IOCombination.TC117);
        await jobpage.OutputButton();
        await jobpage.SRToutputCaller(IOCombination.TC117);
        await jobpage.AddedOutputValidation(IOCombination.TC117);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        //await validateJobStatus(jobpage, test);

    });
    test('IO-Combi-TORQ-FX| TC-> 118 | FILE STREAM INPUT | DECODE TYPE-> SW | SCALING TYPE-> SW ENOCDE TYPE-> SW | UDP', async ({ page }) => {
        await jobpage.JobNameDecoderScalingType(IOCombination.TC118);
        await jobpage.FileStreamInput(IOCombination.TC118);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(IOCombination.TC118);
        await jobpage.OutputButton();
        await jobpage.udpoutput(IOCombination.TC118);
        await jobpage.AddedOutputValidation(IOCombination.TC118);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        //await validateJobStatus(jobpage, test);

    });
    test('IO-Combi-TORQ-FX | TC-> 119 | FILE STREAM INPUT | DECODE TYPE-> SW | SCALING TYPE-> SW | ENOCDE TYPE-> SW | HLS', async ({ page }) => {
        await jobpage.JobNameDecoderScalingType(IOCombination.TC119);
        await jobpage.FileStreamInput(IOCombination.TC119);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(IOCombination.TC119);
        await jobpage.OutputButton();
        await jobpage.HLSoutput(IOCombination.TC119);
        await jobpage.AddedOutputValidation(IOCombination.TC119);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        //await validateJobStatus(jobpage, test);

    });
    test('IO-Combi-TORQ-FX | TC-> 120 | FILE STREAM INPUT | DECODE TYPE-> SW | SCALING TYPE-> SW | ENOCDE TYPE-> SW | RTMP', async ({ page }) => {
        await jobpage.JobNameDecoderScalingType(IOCombination.TC120);
        await jobpage.FileStreamInput(IOCombination.TC120);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(IOCombination.TC120);
        await jobpage.OutputButton();
        await jobpage.RTMPOutput(IOCombination.TC120);
        await jobpage.AddedOutputValidation(IOCombination.TC120);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        //await validateJobStatus(jobpage, test);
    });

    // RAW INPUT
    test.skip('IO-Combi-TORQ-FX| TC-> 121 | RAW INPUT | DECODE TYPE-> HW | SCALING TYPE-> HW | ENOCDE TYPE-> HW | SRT LISTENER', async ({ page }) => {
        await jobpage.JobNameDecoderScalingType(IOCombination.TC121);
        await jobpage.RAWInput(IOCombination.TC121);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(IOCombination.TC121);
        await jobpage.OutputButton();
        await jobpage.SRToutputListener(IOCombination.TC121);
        await jobpage.AddedOutputValidation(IOCombination.TC121);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        //await validateJobStatus(jobpage, test);

    });
    test.skip('IO-Combi-TORQ-FX| TC-> 122 | RAW INPUT | DECODE TYPE-> HW | SCALING TYPE-> HW | ENOCDE TYPE-> HW | SRT CALLER', async ({ page }) => {
        await jobpage.JobNameDecoderScalingType(IOCombination.TC122);
        await jobpage.RAWInput(IOCombination.TC122);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(IOCombination.TC122);
        await jobpage.OutputButton();
        await jobpage.SRToutputCaller(IOCombination.TC122);
        await jobpage.AddedOutputValidation(IOCombination.TC122);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        //await validateJobStatus(jobpage, test);

    });
    test.skip('IO-Combi-TORQ-FX| TC-> 123 | RAW INPUT | DECODE TYPE-> HW | SCALING TYPE-> HW ENOCDE TYPE-> HW | UDP', async ({ page }) => {
        await jobpage.JobNameDecoderScalingType(IOCombination.TC123);
        await jobpage.RAWInput(IOCombination.TC123);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(IOCombination.TC123);
        await jobpage.OutputButton();
        await jobpage.udpoutput(IOCombination.TC123);
        await jobpage.AddedOutputValidation(IOCombination.TC123);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        //await validateJobStatus(jobpage, test);

    });
    test.skip('IO-Combi-TORQ-FX | TC-> 124 | RAW INPUT | DECODE TYPE -> HW | SCALING TYPE-> HW | ENOCDE TYPE-> HW | HLS', async ({ page }) => {
        await jobpage.JobNameDecoderScalingType(IOCombination.TC124);
        await jobpage.RAWInput(IOCombination.TC124);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(IOCombination.TC124);
        await jobpage.OutputButton();
        await jobpage.HLSoutput(IOCombination.TC124);
        await jobpage.AddedOutputValidation(IOCombination.TC124);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        //await validateJobStatus(jobpage, test);

    });
    test.skip('IO-Combi-TORQ-FX | TC-> 125 | RAW INPUT | DECODE TYPE -> HW | SCALING TYPE-> HW | ENOCDE TYPE-> HW | RTMP', async ({ page }) => {
        await jobpage.JobNameDecoderScalingType(IOCombination.TC125);
        await jobpage.RAWInput(IOCombination.TC125);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(IOCombination.TC125);
        await jobpage.OutputButton();
        await jobpage.RTMPOutput(IOCombination.TC125);
        await jobpage.AddedOutputValidation(IOCombination.TC125);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        //await validateJobStatus(jobpage, test);
    });

    test.skip('IO-Combi-TORQ-FX| TC-> 126 | RAW INPUT | DECODE TYPE-> HW | SCALING TYPE-> HW | ENOCDE TYPE-> SW | SRT LISTENER', async ({ page }) => {
        await jobpage.JobNameDecoderScalingType(IOCombination.TC126);
        await jobpage.RAWInput(IOCombination.TC126);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(IOCombination.TC126);
        await jobpage.OutputButton();
        await jobpage.SRToutputListener(IOCombination.TC126);
        await jobpage.AddedOutputValidation(IOCombination.TC126);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        //await validateJobStatus(jobpage, test);

    });
    test.skip('IO-Combi-TORQ-FX| TC-> 127 | RAW INPUT | DECODE TYPE-> HW | SCALING TYPE-> HW | ENOCDE TYPE-> SW | SRT CALLER', async ({ page }) => {
        await jobpage.JobNameDecoderScalingType(IOCombination.TC127);
        await jobpage.RAWInput(IOCombination.TC127);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(IOCombination.TC127);
        await jobpage.OutputButton();
        await jobpage.SRToutputCaller(IOCombination.TC127);
        await jobpage.AddedOutputValidation(IOCombination.TC127);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        //await validateJobStatus(jobpage, test);

    });
    test.skip('IO-Combi-TORQ-FX| TC-> 128 | RAW INPUT | DECODE TYPE-> HW | SCALING TYPE-> HW ENOCDE TYPE-> SW | UDP', async ({ page }) => {
        await jobpage.JobNameDecoderScalingType(IOCombination.TC128);
        await jobpage.RAWInput(IOCombination.TC128);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(IOCombination.TC128);
        await jobpage.OutputButton();
        await jobpage.udpoutput(IOCombination.TC128);
        await jobpage.AddedOutputValidation(IOCombination.TC128);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        //await validateJobStatus(jobpage, test);

    });
    test.skip('IO-Combi-TORQ-FX | TC-> 129 | RAW INPUT | DECODE TYPE -> HW | SCALING TYPE-> HW | ENOCDE TYPE-> SW | HLS', async ({ page }) => {
        await jobpage.JobNameDecoderScalingType(IOCombination.TC129);
        await jobpage.RAWInput(IOCombination.TC129);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(IOCombination.TC129);
        await jobpage.OutputButton();
        await jobpage.HLSoutput(IOCombination.TC129);
        await jobpage.AddedOutputValidation(IOCombination.TC129);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        //await validateJobStatus(jobpage, test);

    });
    test.skip('IO-Combi-TORQ-FX | TC-> 130 | RAW INPUT | DECODE TYPE -> HW | SCALING TYPE-> HW | ENOCDE TYPE-> SW | RTMP', async ({ page }) => {
        await jobpage.JobNameDecoderScalingType(IOCombination.TC130);
        await jobpage.RAWInput(IOCombination.TC130);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(IOCombination.TC130);
        await jobpage.OutputButton();
        await jobpage.RTMPOutput(IOCombination.TC130);
        await jobpage.AddedOutputValidation(IOCombination.TC130);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        //await validateJobStatus(jobpage, test);

    });
    test.skip('IO-Combi-TORQ-FX| TC-> 131 | RAW INPUT | DECODE TYPE-> SW | SCALING TYPE-> HW | ENOCDE TYPE-> HW | SRT LISTENER', async ({ page }) => {
        await jobpage.JobNameDecoderScalingType(IOCombination.TC131);
        await jobpage.RAWInput(IOCombination.TC131);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(IOCombination.TC131);
        await jobpage.OutputButton();
        await jobpage.SRToutputListener(IOCombination.TC131);
        await jobpage.AddedOutputValidation(IOCombination.TC131);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        //await validateJobStatus(jobpage, test);

    });
    test.skip('IO-Combi-TORQ-FX| TC-> 132 | RAW INPUT | DECODE TYPE-> SW | SCALING TYPE-> HW | ENOCDE TYPE-> HW | SRT CALLER', async ({ page }) => {
        await jobpage.JobNameDecoderScalingType(IOCombination.TC132);
        await jobpage.RAWInput(IOCombination.TC132);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(IOCombination.TC132);
        await jobpage.OutputButton();
        await jobpage.SRToutputCaller(IOCombination.TC132);
        await jobpage.AddedOutputValidation(IOCombination.TC132);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        //await validateJobStatus(jobpage, test);
    });
    test.skip('IO-Combi-TORQ-FX| TC-> 133 | RAW INPUT | DECODE TYPE-> SW | SCALING TYPE-> HW ENOCDE TYPE-> HW | UDP', async ({ page }) => {
        await jobpage.JobNameDecoderScalingType(IOCombination.TC133);
        await jobpage.RAWInput(IOCombination.TC133);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(IOCombination.TC133);
        await jobpage.OutputButton();
        await jobpage.udpoutput(IOCombination.TC133);
        await jobpage.AddedOutputValidation(IOCombination.TC113);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        //await validateJobStatus(jobpage, test);

    });
    test.skip('IO-Combi-TORQ-FX | TC-> 134 | RAW INPUT | DECODE TYPE-> SW | SCALING TYPE-> HW | ENOCDE TYPE-> HW | HLS', async ({ page }) => {
        await jobpage.JobNameDecoderScalingType(IOCombination.TC134);
        await jobpage.RAWInput(IOCombination.TC134);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(IOCombination.TC134);
        await jobpage.OutputButton();
        await jobpage.HLSoutput(IOCombination.TC134);
        await jobpage.AddedOutputValidation(IOCombination.TC134);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        //await validateJobStatus(jobpage, test);

    });
    test.skip('IO-Combi-TORQ-FX | TC-> 135 | RAW INPUT | DECODE TYPE-> SW | SCALING TYPE-> HW | ENOCDE TYPE-> HW | RTMP', async ({ page }) => {
        await jobpage.JobNameDecoderScalingType(IOCombination.TC135);
        await jobpage.RAWInput(IOCombination.TC135);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(IOCombination.TC135);
        await jobpage.OutputButton();
        await jobpage.RTMPOutput(IOCombination.TC135);
        await jobpage.AddedOutputValidation(IOCombination.TC135);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        //await validateJobStatus(jobpage, test);

    });
    test.skip('IO-Combi-TORQ-FX| TC-> 136 | RAW INPUT | DECODE TYPE-> SW | SCALING TYPE-> SW | ENOCDE TYPE-> SW | SRT LISTENER', async ({ page }) => {
        await jobpage.JobNameDecoderScalingType(IOCombination.TC136);
        await jobpage.RAWInput(IOCombination.TC136);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(IOCombination.TC136);
        await jobpage.OutputButton();
        await jobpage.SRToutputListener(IOCombination.TC136);
        await jobpage.AddedOutputValidation(IOCombination.TC136);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        //await validateJobStatus(jobpage, test);

    });
    test.skip('IO-Combi-TORQ-FX| TC-> 137 | RAW INPUT | DECODE TYPE-> SW | SCALING TYPE-> SW | ENOCDE TYPE-> SW | SRT CALLER', async ({ page }) => {
        await jobpage.JobNameDecoderScalingType(IOCombination.TC137);
        await jobpage.RAWInput(IOCombination.TC137);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(IOCombination.TC137);
        await jobpage.OutputButton();
        await jobpage.SRToutputCaller(IOCombination.TC137);
        await jobpage.AddedOutputValidation(IOCombination.TC137);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        //await validateJobStatus(jobpage, test);

    });
    test.skip('IO-Combi-TORQ-FX| TC-> 138 | RAW INPUT | DECODE TYPE-> SW | SCALING TYPE-> SW ENOCDE TYPE-> SW | UDP', async ({ page }) => {
        await jobpage.JobNameDecoderScalingType(IOCombination.TC138);
        await jobpage.RAWInput(IOCombination.TC138);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(IOCombination.TC138);
        await jobpage.OutputButton();
        await jobpage.udpoutput(IOCombination.TC138);
        await jobpage.AddedOutputValidation(IOCombination.TC138);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        //await validateJobStatus(jobpage, test);

    });
    test.skip('IO-Combi-TORQ-FX | TC-> 139 | RAW INPUT | DECODE TYPE-> SW | SCALING TYPE-> SW | ENOCDE TYPE-> SW | HLS', async ({ page }) => {
        await jobpage.JobNameDecoderScalingType(IOCombination.TC139);
        await jobpage.RAWInput(IOCombination.TC139);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(IOCombination.TC139);
        await jobpage.OutputButton();
        await jobpage.HLSoutput(IOCombination.TC139);
        await jobpage.AddedOutputValidation(IOCombination.TC139);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        //await validateJobStatus(jobpage, test);

    });
    test.skip('IO-Combi-TORQ-FX | TC-> 140 | RAW INPUT | DECODE TYPE-> SW | SCALING TYPE-> SW | ENOCDE TYPE-> SW | RTMP', async ({ page }) => {
        await jobpage.JobNameDecoderScalingType(IOCombination.TC140);
        await jobpage.RAWInput(IOCombination.TC140);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(IOCombination.TC140);
        await jobpage.OutputButton();
        await jobpage.RTMPOutput(IOCombination.TC140);
        await jobpage.AddedOutputValidation(IOCombination.TC140);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        //await validateJobStatus(jobpage, test);
    });

    // TEST PATTERN INPUT
    test('IO-Combi-TORQ-FX| TC-> 141 | TEST PATTERN INPUT | DECODE TYPE-> HW | SCALING TYPE-> HW | ENOCDE TYPE-> HW | SRT LISTENER', async ({ page }) => {
        await jobpage.JobNameDecoderScalingType(IOCombination.TC141);
        await jobpage.TPInput(IOCombination.TC141);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(IOCombination.TC141);
        await jobpage.OutputButton();
        await jobpage.SRToutputListener(IOCombination.TC141);
        await jobpage.AddedOutputValidation(IOCombination.TC141);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        //await validateJobStatus(jobpage, test);

    });
    test('IO-Combi-TORQ-FX| TC-> 142 | TEST PATTERN INPUT | DECODE TYPE-> HW | SCALING TYPE-> HW | ENOCDE TYPE-> HW | SRT CALLER', async ({ page }) => {
        await jobpage.JobNameDecoderScalingType(IOCombination.TC142);
        await jobpage.TPInput(IOCombination.TC142);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(IOCombination.TC142);
        await jobpage.OutputButton();
        await jobpage.SRToutputCaller(IOCombination.TC142);
        await jobpage.AddedOutputValidation(IOCombination.TC142);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        //await validateJobStatus(jobpage, test);

    });
    test('IO-Combi-TORQ-FX| TC-> 143 | TEST PATTERN INPUT | DECODE TYPE-> HW | SCALING TYPE-> HW ENOCDE TYPE-> HW | UDP', async ({ page }) => {
        await jobpage.JobNameDecoderScalingType(IOCombination.TC143);
        await jobpage.TPInput(IOCombination.TC143);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(IOCombination.TC143);
        await jobpage.OutputButton();
        await jobpage.udpoutput(IOCombination.TC143);
        await jobpage.AddedOutputValidation(IOCombination.TC143);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        //await validateJobStatus(jobpage, test);

    });
    test('IO-Combi-TORQ-FX | TC-> 144 | TEST PATTERN INPUT | DECODE TYPE -> HW | SCALING TYPE-> HW | ENOCDE TYPE-> HW | HLS', async ({ page }) => {
        await jobpage.JobNameDecoderScalingType(IOCombination.TC144);
        await jobpage.TPInput(IOCombination.TC144);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(IOCombination.TC144);
        await jobpage.OutputButton();
        await jobpage.HLSoutput(IOCombination.TC144);
        await jobpage.AddedOutputValidation(IOCombination.TC144);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        //await validateJobStatus(jobpage, test);

    });
    test('IO-Combi-TORQ-FX | TC-> 145 | TEST PATTERN INPUT | DECODE TYPE -> HW | SCALING TYPE-> HW | ENOCDE TYPE-> HW | RTMP', async ({ page }) => {
        await jobpage.JobNameDecoderScalingType(IOCombination.TC145);
        await jobpage.TPInput(IOCombination.TC145);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(IOCombination.TC145);
        await jobpage.OutputButton();
        await jobpage.RTMPOutput(IOCombination.TC145);
        await jobpage.AddedOutputValidation(IOCombination.TC145);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        //await validateJobStatus(jobpage, test);
    });

    test('IO-Combi-TORQ-FX| TC-> 146 | TEST PATTERN INPUT | DECODE TYPE-> HW | SCALING TYPE-> HW | ENOCDE TYPE-> SW | SRT LISTENER', async ({ page }) => {
        await jobpage.JobNameDecoderScalingType(IOCombination.TC146);
        await jobpage.TPInput(IOCombination.TC146);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(IOCombination.TC146);
        await jobpage.OutputButton();
        await jobpage.SRToutputListener(IOCombination.TC146);
        await jobpage.AddedOutputValidation(IOCombination.TC146);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        //await validateJobStatus(jobpage, test);

    });
    test('IO-Combi-TORQ-FX| TC-> 147 | TEST PATTERN INPUT | DECODE TYPE-> HW | SCALING TYPE-> HW | ENOCDE TYPE-> SW | SRT CALLER', async ({ page }) => {
        await jobpage.JobNameDecoderScalingType(IOCombination.TC147);
        await jobpage.TPInput(IOCombination.TC147);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(IOCombination.TC147);
        await jobpage.OutputButton();
        await jobpage.SRToutputCaller(IOCombination.TC147);
        await jobpage.AddedOutputValidation(IOCombination.TC147);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        //await validateJobStatus(jobpage, test);

    });
    test('IO-Combi-TORQ-FX| TC-> 148 | TEST PATTERN INPUT | DECODE TYPE-> HW | SCALING TYPE-> HW ENOCDE TYPE-> SW | UDP', async ({ page }) => {
        await jobpage.JobNameDecoderScalingType(IOCombination.TC148);
        await jobpage.TPInput(IOCombination.TC148);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(IOCombination.TC148);
        await jobpage.OutputButton();
        await jobpage.udpoutput(IOCombination.TC148);
        await jobpage.AddedOutputValidation(IOCombination.TC148);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        //await validateJobStatus(jobpage, test);

    });
    test('IO-Combi-TORQ-FX | TC-> 149 | TEST PATTERN INPUT | DECODE TYPE -> HW | SCALING TYPE-> HW | ENOCDE TYPE-> SW | HLS', async ({ page }) => {
        await jobpage.JobNameDecoderScalingType(IOCombination.TC149);
        await jobpage.TPInput(IOCombination.TC149);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(IOCombination.TC149);
        await jobpage.OutputButton();
        await jobpage.HLSoutput(IOCombination.TC149);
        await jobpage.AddedOutputValidation(IOCombination.TC149);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        //await validateJobStatus(jobpage, test);

    });
    test('IO-Combi-TORQ-FX | TC-> 150 | TEST PATTERN INPUT | DECODE TYPE -> HW | SCALING TYPE-> HW | ENOCDE TYPE-> SW | RTMP', async ({ page }) => {
        await jobpage.JobNameDecoderScalingType(IOCombination.TC150);
        await jobpage.TPInput(IOCombination.TC150);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(IOCombination.TC150);
        await jobpage.OutputButton();
        await jobpage.RTMPOutput(IOCombination.TC150);
        await jobpage.AddedOutputValidation(IOCombination.TC150);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        //await validateJobStatus(jobpage, test);

    });
    test('IO-Combi-TORQ-FX| TC-> 151 | TEST PATTERN INPUT | DECODE TYPE-> SW | SCALING TYPE-> HW | ENOCDE TYPE-> HW | SRT LISTENER', async ({ page }) => {
        await jobpage.JobNameDecoderScalingType(IOCombination.TC151);
        await jobpage.TPInput(IOCombination.TC151);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(IOCombination.TC151);
        await jobpage.OutputButton();
        await jobpage.SRToutputListener(IOCombination.TC151);
        await jobpage.AddedOutputValidation(IOCombination.TC151);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        //await validateJobStatus(jobpage, test);

    });
    test('IO-Combi-TORQ-FX| TC-> 152 | TEST PATTERN INPUT | DECODE TYPE-> SW | SCALING TYPE-> HW | ENOCDE TYPE-> HW | SRT CALLER', async ({ page }) => {
        await jobpage.JobNameDecoderScalingType(IOCombination.TC152);
        await jobpage.TPInput(IOCombination.TC152);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(IOCombination.TC152);
        await jobpage.OutputButton();
        await jobpage.SRToutputCaller(IOCombination.TC152);
        await jobpage.AddedOutputValidation(IOCombination.TC152);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        //await validateJobStatus(jobpage, test);
    });
    test('IO-Combi-TORQ-FX| TC-> 153 | TEST PATTERN INPUT | DECODE TYPE-> SW | SCALING TYPE-> HW ENOCDE TYPE-> HW | UDP', async ({ page }) => {
        await jobpage.JobNameDecoderScalingType(IOCombination.TC153);
        await jobpage.TPInput(IOCombination.TC153);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(IOCombination.TC153);
        await jobpage.OutputButton();
        await jobpage.udpoutput(IOCombination.TC153);
        await jobpage.AddedOutputValidation(IOCombination.TC153);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        //await validateJobStatus(jobpage, test);

    });
    test('IO-Combi-TORQ-FX | TC-> 154 | TEST PATTERN INPUT | DECODE TYPE-> SW | SCALING TYPE-> HW | ENOCDE TYPE-> HW | HLS', async ({ page }) => {
        await jobpage.JobNameDecoderScalingType(IOCombination.TC154);
        await jobpage.TPInput(IOCombination.TC154);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(IOCombination.TC154);
        await jobpage.OutputButton();
        await jobpage.HLSoutput(IOCombination.TC154);
        await jobpage.AddedOutputValidation(IOCombination.TC154);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        //await validateJobStatus(jobpage, test);

    });
    test('IO-Combi-TORQ-FX | TC-> 155 | TEST PATTERN INPUT | DECODE TYPE-> SW | SCALING TYPE-> HW | ENOCDE TYPE-> HW | RTMP', async ({ page }) => {
        await jobpage.JobNameDecoderScalingType(IOCombination.TC155);
        await jobpage.TPInput(IOCombination.TC155);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(IOCombination.TC155);
        await jobpage.OutputButton();
        await jobpage.RTMPOutput(IOCombination.TC155);
        await jobpage.AddedOutputValidation(IOCombination.TC155);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        //await validateJobStatus(jobpage, test);

    });
    test('IO-Combi-TORQ-FX| TC-> 156 | TEST PATTERN INPUT | DECODE TYPE-> SW | SCALING TYPE-> SW | ENOCDE TYPE-> SW | SRT LISTENER', async ({ page }) => {
        await jobpage.JobNameDecoderScalingType(IOCombination.TC156);
        await jobpage.TPInput(IOCombination.TC156);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(IOCombination.TC156);
        await jobpage.OutputButton();
        await jobpage.SRToutputListener(IOCombination.TC156);
        await jobpage.AddedOutputValidation(IOCombination.TC156);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        //await validateJobStatus(jobpage, test);

    });
    test('IO-Combi-TORQ-FX| TC-> 157 | TEST PATTERN INPUT | DECODE TYPE-> SW | SCALING TYPE-> SW | ENOCDE TYPE-> SW | SRT CALLER', async ({ page }) => {
        await jobpage.JobNameDecoderScalingType(IOCombination.TC157);
        await jobpage.TPInput(IOCombination.TC157);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(IOCombination.TC157);
        await jobpage.OutputButton();
        await jobpage.SRToutputCaller(IOCombination.TC157);
        await jobpage.AddedOutputValidation(IOCombination.TC157);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        //await validateJobStatus(jobpage, test);

    });
    test('IO-Combi-TORQ-FX| TC-> 158 | TEST PATTERN INPUT | DECODE TYPE-> SW | SCALING TYPE-> SW ENOCDE TYPE-> SW | UDP', async ({ page }) => {
        await jobpage.JobNameDecoderScalingType(IOCombination.TC158);
        await jobpage.TPInput(IOCombination.TC158);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(IOCombination.TC158);
        await jobpage.OutputButton();
        await jobpage.udpoutput(IOCombination.TC158);
        await jobpage.AddedOutputValidation(IOCombination.TC158);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        //await validateJobStatus(jobpage, test);

    });
    test('IO-Combi-TORQ-FX | TC-> 159 | TEST PATTERN INPUT | DECODE TYPE-> SW | SCALING TYPE-> SW | ENOCDE TYPE-> SW | HLS', async ({ page }) => {
        await jobpage.JobNameDecoderScalingType(IOCombination.TC159);
        await jobpage.TPInput(IOCombination.TC159);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(IOCombination.TC159);
        await jobpage.OutputButton();
        await jobpage.HLSoutput(IOCombination.TC159);
        await jobpage.AddedOutputValidation(IOCombination.TC159);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        //await validateJobStatus(jobpage, test);

    });
    test('IO-Combi-TORQ-FX | TC-> 160 | TEST PATTERN INPUT | DECODE TYPE-> SW | SCALING TYPE-> SW | ENOCDE TYPE-> SW | RTMP', async ({ page }) => {
        await jobpage.JobNameDecoderScalingType(IOCombination.TC160);
        await jobpage.TPInput(IOCombination.TC160);
        await jobpage.AddInputButton();
        await jobpage.AddedInputValidation();
        await jobpage.selectDropdownOption(IOCombination.TC160);
        await jobpage.OutputButton();
        await jobpage.RTMPOutput(IOCombination.TC160);
        await jobpage.AddedOutputValidation(IOCombination.TC160);
        await jobpage.AddJobButton();
        await jobpage.JobcreationPopUp();
        //await validateJobStatus(jobpage, test);
    });
    // await jobpage.udpoutput(SmokeTestSuite.TC1);
    // await jobpage.HLSoutput(SmokeTestSuite.TC1);
    // await jobpage.SRToutputCaller(SmokeTestSuite.TC1);
    // await jobpage.SRToutputListener(SmokeTestSuite.TC1);
});