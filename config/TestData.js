// export const COMMON = {
//     UDP_OUT_IP: '192.168.200.4',
//     OUTPUT_BITRATE: '3275',
//     RAW_MAG_DEVICE: '/dev/video0',
//     RAW_MAG_DEVICE_VALUE: 'VIDEO_0_RSMC-B4',
//     '1080p': 'OTT_HD_1920x1080',
//     '720p': 'OTT_HD_1280x720',
//     '480p': 'OTT_HD_854x480',
//     '360p': 'OTT_HD_640x360',
//     '576': 'OTT_PAL_720x576',
//     'Pass': 'OTT_Passthrough',
// };

// const RESOLUTION = '720p';
// const COMMON_IP = '10.0.90.64';

// const BASE_CONFIG = {
//     // Common output settings
//     udpoutip: COMMON.UDP_OUT_IP,
//     udpoutport: '7000',
//     outputbitrate: COMMON.OUTPUT_BITRATE,

//     // HLS Output
//     outputNameSuffixHLS: 'HLS',

//     // RTMP Output
//     outputNameSuffixRTMP: 'RTMP',

//     // SRT Caller
//     outputNameSuffixcaller: 'SRTC',
//     srtoutipcaller: COMMON_IP,
//     srtoutportcaller: '7001',
//     srtmodecaller: 'caller',

//     // SRT Listener
//     outputNameSuffixlistener: 'SRTL',
//     srtoutiplistener: COMMON_IP,
//     srtoutportlistener: '7002',
//     srtmodelistener: 'listener',
// };

// const createTestConfig = (overrides) => ({
//     ...BASE_CONFIG,
//     ...overrides
// });

// const SingleProfile = (TestSuiteNo,TestSuiteName, tcNumber, inputConfig, encodeConfig,ADDEDOUTPUT ={}) =>
//     createTestConfig({
//         Jobname: `${TestSuiteNo}_${TestSuiteName}_TC${tcNumber}`,
//         ...inputConfig,
//         // ENCODE DATA
//         [`profilevalue_${RESOLUTION}`]: COMMON[RESOLUTION],
//         [`P${RESOLUTION}`]: true,
//         ...encodeConfig,
//         ...ADDEDOUTPUT
//     });

// const MultiProfile = (TestSuiteNo,TestSuiteName, tcNumber, inputConfig) =>
//     createTestConfig({
//         Jobname: `${TestSuiteNo}_${TestSuiteName}_TC${tcNumber}`,
//         ...inputConfig,
//         // ENCODE DATA
//         profilevalue_1080p: COMMON['1080p'],
//         profilevalue_720p: COMMON['720p'],
//         profilevalue_480p: COMMON['480p'],
//         profilevalue_576P: COMMON['576'],
//         encodetype: 'HW',
//         P1080p: true,
//         P720p: true,
//         P480p: true,
//         P576p: true,
//     });

// // Input configurations
// const UDP_INPUT = {
//     udpinip: COMMON_IP,
//     udpinport: '6000',
// };

// const SRT_CALLER_INPUT = {
//     srtinip: COMMON_IP,
//     srtinport: '6001',
// };

// const SRT_LISTENER_INPUT = {
//     srtinip: COMMON_IP,
//     srtinport: '6002',
// };

// const RAW_INPUT = {
//     rawinputdevice: COMMON.RAW_MAG_DEVICE,
//     rawinputdevicevalue: COMMON.RAW_MAG_DEVICE_VALUE,
//     rawinterface: 'SDI',
// };

// const RTMP_INPUT = {
//     rtmpserverurl: 'rtmp://10.0.90.64:1935/live',
//     streamname: 'RTMP',
// };

// const HTTP_INPUT = {
//     httpserverurl: 'http://10.0.90.64:80/storage/device/QA/Node9064/live/HLS/master.m3u8',
// };

// const FILE_INPUT = {
//     selectedfile: 'big_buck_bunny_1080p.mp4',
// };

// export const SmokeTestSuite = {
//     // UDP Input Tests (TC1-TC10)
//     TC1: SingleProfile(1, { ...UDP_INPUT, HW_SW_Decode: 'hw_frame', HW_scaling: true }, { encodetype: 'HW' }),

//     TC2: SingleProfile(2, { ...UDP_INPUT, HW_SW_Decode: 'sw_frame', HW_scaling: false }, { encodetype: 'SW' }),

//     TC3: SingleProfile(3, { ...UDP_INPUT, HW_SW_Decode: 'sw_frame', HW_scaling: true }, { encodetype: 'HW' }),

//     TC4: SingleProfile(4, { ...UDP_INPUT, HW_SW_Decode: 'hw_frame', HW_scaling: false }, { encodetype: 'SW' }),

//     TC5: SingleProfile(5, { ...UDP_INPUT, HW_SW_Decode: 'hw_frame', HW_scaling: true }, { encodetype: 'SW' }),

//     TC6: SingleProfile(6, { ...UDP_INPUT, HW_SW_Decode: 'hw_frame', HW_scaling: false }, { encodetype: 'HW' }),

//     TC7: SingleProfile(7, { ...UDP_INPUT, HW_SW_Decode: 'sw_frame', HW_scaling: true }, { encodetype: 'SW' }),

//     TC8: SingleProfile(8, { ...UDP_INPUT, HW_SW_Decode: 'sw_frame', HW_scaling: false }, { encodetype: 'HW' }),

//     TC9: MultiProfile(9, { ...UDP_INPUT, HW_SW_Decode: 'hw_frame', HW_scaling: true }),

//     TC10: MultiProfile(10, { ...UDP_INPUT, HW_SW_Decode: 'hw_frame', HW_scaling: false }),

//     // SRT Caller Input Tests (TC11-TC16)
//     TC11: SingleProfile(11, { ...SRT_CALLER_INPUT, HW_SW_Decode: 'hw_frame', HW_scaling: true }, { encodetype: 'HW' }),

//     TC12: SingleProfile(12, { ...SRT_CALLER_INPUT, HW_SW_Decode: 'sw_frame', HW_scaling: false }, { encodetype: 'SW' }),

//     TC13: SingleProfile(13, { ...SRT_CALLER_INPUT, HW_SW_Decode: 'sw_frame', HW_scaling: true }, { encodetype: 'HW' }),

//     TC14: SingleProfile(14, { ...SRT_CALLER_INPUT, HW_SW_Decode: 'hw_frame', HW_scaling: false }, { encodetype: 'SW' }),

//     TC15: MultiProfile(15, { ...SRT_CALLER_INPUT, HW_SW_Decode: 'hw_frame', HW_scaling: true }),

//     TC16: MultiProfile(16, { ...SRT_CALLER_INPUT, HW_SW_Decode: 'hw_frame', HW_scaling: false }),

//     // SRT Listener Input Tests (TC17-TC22)
//     TC17: SingleProfile(17, { ...SRT_LISTENER_INPUT, HW_SW_Decode: 'hw_frame', HW_scaling: true }, { encodetype: 'HW' }),

//     TC18: SingleProfile(18, { ...SRT_LISTENER_INPUT, HW_SW_Decode: 'sw_frame', HW_scaling: false }, { encodetype: 'SW' }),

//     TC19: SingleProfile(19, { ...SRT_LISTENER_INPUT, HW_SW_Decode: 'sw_frame', HW_scaling: true }, { encodetype: 'HW' }),

//     TC20: SingleProfile(20, { ...SRT_LISTENER_INPUT, HW_SW_Decode: 'hw_frame', HW_scaling: false }, { encodetype: 'SW' }),

//     TC21: MultiProfile(21, { ...SRT_LISTENER_INPUT, HW_SW_Decode: 'hw_frame', HW_scaling: true }),

//     TC22: MultiProfile(22, { ...SRT_LISTENER_INPUT, HW_SW_Decode: 'hw_frame', HW_scaling: false }),

//     // Raw Input Tests (TC23-TC28)
//     TC23: SingleProfile(23, { ...RAW_INPUT, HW_SW_Decode: 'hw_frame', HW_scaling: true }, { encodetype: 'HW' }),

//     TC24: SingleProfile(24, { ...RAW_INPUT, HW_SW_Decode: 'sw_frame', HW_scaling: false }, { encodetype: 'SW' }),

//     TC25: SingleProfile(25, { ...RAW_INPUT, HW_SW_Decode: 'sw_frame', HW_scaling: true }, { encodetype: 'HW' }),

//     TC26: SingleProfile(26, { ...RAW_INPUT, HW_SW_Decode: 'hw_frame', HW_scaling: false }, { encodetype: 'SW' }),

//     TC27: MultiProfile(27, { ...RAW_INPUT, HW_SW_Decode: 'hw_frame', HW_scaling: true }),

//     TC28: MultiProfile(28, { ...RAW_INPUT, HW_SW_Decode: 'hw_frame', HW_scaling: false }),

//     // RTMP Input Tests (TC29-TC34)
//     TC29: SingleProfile(29, { ...RTMP_INPUT, HW_SW_Decode: 'hw_frame', HW_scaling: true }, { encodetype: 'HW' }),

//     TC30: SingleProfile(30, { ...RTMP_INPUT, HW_SW_Decode: 'sw_frame', HW_scaling: false }, { encodetype: 'SW' }),

//     TC31: SingleProfile(31, { ...RTMP_INPUT, HW_SW_Decode: 'sw_frame', HW_scaling: true }, { encodetype: 'HW' }),

//     TC32: SingleProfile(32, { ...RTMP_INPUT, HW_SW_Decode: 'hw_frame', HW_scaling: false }, { encodetype: 'SW' }),

//     TC33: MultiProfile(33, { ...RTMP_INPUT, HW_SW_Decode: 'hw_frame', HW_scaling: true }),

//     TC34: MultiProfile(34, { ...RTMP_INPUT, HW_SW_Decode: 'hw_frame', HW_scaling: false }),

//     // HTTP Input Test (TC35)
//     TC35: SingleProfile(35, { ...HTTP_INPUT, HW_SW_Decode: 'hw_frame', HW_scaling: true }, { encodetype: 'HW' }),

//     // File Input Tests (TC36-TC41)
//     TC36: SingleProfile(36, { ...FILE_INPUT, HW_SW_Decode: 'hw_frame', HW_scaling: true }, { encodetype: 'HW' }),

//     TC37: SingleProfile(37, { ...FILE_INPUT, HW_SW_Decode: 'sw_frame', HW_scaling: false }, { encodetype: 'SW' }),

//     TC38: SingleProfile(38, { ...FILE_INPUT, HW_SW_Decode: 'sw_frame', HW_scaling: true }, { encodetype: 'HW' }),

//     TC39: SingleProfile(39, { ...FILE_INPUT, HW_SW_Decode: 'hw_frame', HW_scaling: false }, { encodetype: 'SW' }),

//     TC40: MultiProfile(40, { ...FILE_INPUT, HW_SW_Decode: 'hw_frame', HW_scaling: true }),

//     TC41: MultiProfile(41, { ...FILE_INPUT, HW_SW_Decode: 'hw_frame', HW_scaling: false }),
// };
// Set resolution for single resolution configs


const RESOLUTION = '1080p';

export const COMMON = {
    // General Config
    COMMON_IP: '10.0.90.64',
    OUTPUT_BITRATE: '3275',

    //RAW INPUT
    RAW_MAG_DEVICE: '/dev/video0',
    RAW_MAG_DEVICE_VALUE: 'VIDEO_0_RSMC-B4',
    rawinterface: 'SDI',

    // UDP INPUT
    udpinport: '6000',

    // SRT INPUTS
    srtinportcaller: '6001',
    srtinportlistener: '6002',

    //RTMP INPUT
    rtmpserverurl: 'rtmp://10.0.90.64:1935/live',
    streamname: 'RTMP',

    // HLS INPUT
    httpserverurl: 'http://10.0.90.64:80/storage/device/QA/Node9064/live/HLS/master.m3u8',

    //FILE INPUT
    selectedfile: 'big_buck_bunny_1080p.mp4',

    // UDP Output 
    udpoutport: '7000',
    UDP_OUT_IP: '192.168.200.4',

    // SRT Caller Output
    srtoutportcaller: '7001',
    srtmodecaller: 'caller',
    outputNameSuffixcaller: 'SRTC',

    // SRT Listener Output
    srtoutportlistener: '7002',
    srtmodelistener: 'listener',
    outputNameSuffixlistener: 'SRTL',

    //HLS Output
    outputNameSuffixHLS: 'HLS',

    //RTMP OUTPUT
    outputNameSuffixRTMP: 'RTMP',
    RTMPOUT_SERVER_URL: 'rtmp://10.0.90.64:1935/live',
    RTMPOUT_STREAM_NAME: 'RTMPOUT',

    // Resolution Profiles
    '1080p': 'OTT_HD_1920x1080',
    '720p': 'OTT_HD_1280x720',
    '480p': 'OTT_HD_854x480',
    '360p': 'OTT_HD_640x360',
    '576': 'OTT_PAL_720x576',
    'Pass': 'OTT_Passthrough',
};



// Base configuration for all jobs
const BASE_CONFIG = {
    udpoutip: COMMON.UDP_OUT_IP,
    udpoutport: COMMON.udpoutport,
    outputbitrate: COMMON.OUTPUT_BITRATE,

    // Output name HLS
    outputNameSuffixHLS: COMMON.outputNameSuffixHLS,

    // Output name RTMP

    outputNameSuffixRTMP: COMMON.outputNameSuffixRTMP,
    rtmpoutserverurl: COMMON.RTMPOUT_SERVER_URL,
    streamnameout: COMMON.RTMPOUT_STREAM_NAME,


    // SRT Caller
    outputNameSuffixcaller: COMMON.outputNameSuffixcaller,
    srtoutipcaller: COMMON.COMMON_IP,
    srtoutportcaller: COMMON.srtoutportcaller,
    srtmodecaller: COMMON.srtmodecaller,

    // SRT Listener
    outputNameSuffixlistener: COMMON.outputNameSuffixlistener,
    srtoutiplistener: COMMON.COMMON_IP,
    srtoutportlistener: COMMON.srtoutportlistener,
    srtmodelistener: COMMON.srtmodelistener
};

// Utility to merge base config and overrides
const createTestConfig = (overrides) => ({
    ...BASE_CONFIG,
    ...overrides
});

// Single resolution job configuration
const SingleProfile = (TestSuiteNo, TestSuiteName, tcNumber, inputConfig, encodeConfig, extras = {}) =>
    createTestConfig({
        Jobname: `${TestSuiteNo}_${TestSuiteName}_TC${tcNumber}`,
        ...inputConfig,
        [`profilevalue_${RESOLUTION}`]: COMMON[RESOLUTION],
        [`P${RESOLUTION}`]: true,
        ...encodeConfig,
        ...extras
    });

// Multi-resolution job configuration
const MultiProfile = (TestSuiteNo, TestSuiteName, tcNumber, inputConfig, encodeConfig, extras = {}) =>
    // const MultiProfile = (TestSuiteNo, TestSuiteName, tcNumber, inputConfig, extras = {}) =>
    createTestConfig({
        // createTestConfig({
        Jobname: `${TestSuiteNo}_${TestSuiteName}_TC${tcNumber}`,
        ...inputConfig,
        profilevalue_1080p: COMMON['1080p'],
        profilevalue_720p: COMMON['720p'],
        profilevalue_480p: COMMON['480p'],
        profilevalue_576P: COMMON['576'],
        // encodetype: 'HW',
        P1080p: true,
        P720p: true,
        P480p: true,
        P576p: true,
        ...encodeConfig,
        ...extras,
    });

// Input configurations
const UDP_INPUT = {
    udpinip: COMMON.COMMON_IP,
    udpinport: COMMON.udpinport
};

const SRT_CALLER_INPUT = {
    srtinip: COMMON.COMMON_IP,
    srtinport: COMMON.srtinportcaller
};

const SRT_LISTENER_INPUT = {
    srtinip: COMMON.COMMON_IP,
    srtinport: COMMON.srtinportlistener
};

const RAW_INPUT = {
    rawinputdevice: COMMON.RAW_MAG_DEVICE,
    rawinputdevicevalue: COMMON.RAW_MAG_DEVICE_VALUE,
    rawinterface: COMMON.rawinterface
};

const RTMP_INPUT = {
    rtmpserverurl: COMMON.rtmpserverurl,
    streamname: COMMON.streamname
};

const HTTP_INPUT = {
    httpserverurl: COMMON.httpserverurl
};

const FILE_INPUT = {
    selectedfile: COMMON.selectedfile
};

// Smoke Test Suite
export const SmokeTestSuite = {
    // UDP Input Tests (TC1-TC10)
    TC1: SingleProfile(1, 'SM', 1, { ...UDP_INPUT, HW_SW_Decode: 'hw_frame', HW_scaling: true }, { encodetype: 'HW' }, { outputCount: 6 }),
    TC2: SingleProfile(1, 'SM', 2, { ...UDP_INPUT, HW_SW_Decode: 'hw_frame', HW_scaling: true }, { encodetype: 'HW' }, { outputCount: 6 }),
    TC3: SingleProfile(1, 'SM', 3, { ...UDP_INPUT, HW_SW_Decode: 'sw_frame', HW_scaling: true }, { encodetype: 'HW' }, { outputCount: 6 }),
    TC4: SingleProfile(1, 'SM', 4, { ...UDP_INPUT, HW_SW_Decode: 'hw_frame', HW_scaling: false }, { encodetype: 'SW' }, { outputCount: 6 }),
    TC5: SingleProfile(1, 'SM', 5, { ...UDP_INPUT, HW_SW_Decode: 'hw_frame', HW_scaling: true }, { encodetype: 'SW' }, { outputCount: 6 }),
    TC6: SingleProfile(1, 'SM', 6, { ...UDP_INPUT, HW_SW_Decode: 'hw_frame', HW_scaling: false }, { encodetype: 'HW' }, { outputCount: 6 }),
    TC7: SingleProfile(1, 'SM', 7, { ...UDP_INPUT, HW_SW_Decode: 'sw_frame', HW_scaling: true }, { encodetype: 'SW' }, { outputCount: 6 }),
    TC8: SingleProfile(1, 'SM', 8, { ...UDP_INPUT, HW_SW_Decode: 'sw_frame', HW_scaling: false }, { encodetype: 'HW' }, { outputCount: 6 }),
    TC9: MultiProfile(1, 'SM', 9, { ...UDP_INPUT, HW_SW_Decode: 'hw_frame', HW_scaling: true }, { outputCount: 9 }),
    TC10: MultiProfile(1, 'SM', 10, { ...UDP_INPUT, HW_SW_Decode: 'hw_frame', HW_scaling: false }, { outputCount: 9 }),

    // SRT Caller Input Tests (TC11-TC16)
    TC11: SingleProfile(1, 'SM', 11, { ...SRT_CALLER_INPUT, HW_SW_Decode: 'hw_frame', HW_scaling: true }, { encodetype: 'HW' }, { outputCount: 6 }),
    TC12: SingleProfile(1, 'SM', 12, { ...SRT_CALLER_INPUT, HW_SW_Decode: 'sw_frame', HW_scaling: false }, { encodetype: 'SW' }, { outputCount: 6 }),
    TC13: SingleProfile(1, 'SM', 13, { ...SRT_CALLER_INPUT, HW_SW_Decode: 'sw_frame', HW_scaling: true }, { encodetype: 'HW' }, { outputCount: 6 }),
    TC14: SingleProfile(1, 'SM', 14, { ...SRT_CALLER_INPUT, HW_SW_Decode: 'hw_frame', HW_scaling: false }, { encodetype: 'SW' }, { outputCount: 6 }),
    TC15: MultiProfile(1, 'SM', 15, { ...SRT_CALLER_INPUT, HW_SW_Decode: 'hw_frame', HW_scaling: true }, { outputCount: 9 }),
    TC16: MultiProfile(1, 'SM', 16, { ...SRT_CALLER_INPUT, HW_SW_Decode: 'hw_frame', HW_scaling: false }, { outputCount: 9 }),

    // SRT Listener Input Tests (TC17-TC22)
    TC17: SingleProfile(1, 'SM', 17, { ...SRT_LISTENER_INPUT, HW_SW_Decode: 'hw_frame', HW_scaling: true }, { encodetype: 'HW' }, { outputCount: 6 }),
    TC18: SingleProfile(1, 'SM', 18, { ...SRT_LISTENER_INPUT, HW_SW_Decode: 'sw_frame', HW_scaling: false }, { encodetype: 'SW' }, { outputCount: 6 }),
    TC19: SingleProfile(1, 'SM', 19, { ...SRT_LISTENER_INPUT, HW_SW_Decode: 'sw_frame', HW_scaling: true }, { encodetype: 'HW' }, { outputCount: 6 }),
    TC20: SingleProfile(1, 'SM', 20, { ...SRT_LISTENER_INPUT, HW_SW_Decode: 'hw_frame', HW_scaling: false }, { encodetype: 'SW' }, { outputCount: 6 }),
    TC21: MultiProfile(1, 'SM', 21, { ...SRT_LISTENER_INPUT, HW_SW_Decode: 'hw_frame', HW_scaling: true }, { outputCount: 9 }),
    TC22: MultiProfile(1, 'SM', 22, { ...SRT_LISTENER_INPUT, HW_SW_Decode: 'hw_frame', HW_scaling: false }, { outputCount: 9 }),

    // Raw Input Tests (TC23-TC28)
    TC23: SingleProfile(1, 'SM', 23, { ...RAW_INPUT, HW_SW_Decode: 'hw_frame', HW_scaling: true }, { encodetype: 'HW' }, { outputCount: 6 }),
    TC24: SingleProfile(1, 'SM', 24, { ...RAW_INPUT, HW_SW_Decode: 'sw_frame', HW_scaling: false }, { encodetype: 'SW' }, { outputCount: 6 }),
    TC25: SingleProfile(1, 'SM', 25, { ...RAW_INPUT, HW_SW_Decode: 'sw_frame', HW_scaling: true }, { encodetype: 'HW' }, { outputCount: 6 }),
    TC26: SingleProfile(1, 'SM', 26, { ...RAW_INPUT, HW_SW_Decode: 'hw_frame', HW_scaling: false }, { encodetype: 'SW' }, { outputCount: 6 }),
    TC27: MultiProfile(1, 'SM', 27, { ...RAW_INPUT, HW_SW_Decode: 'hw_frame', HW_scaling: true }, { outputCount: 9 }),
    TC28: MultiProfile(1, 'SM', 28, { ...RAW_INPUT, HW_SW_Decode: 'hw_frame', HW_scaling: false }, { outputCount: 9 }),

    // RTMP Input Tests (TC29-TC34)
    TC29: SingleProfile(1, 'SM', 29, { ...RTMP_INPUT, HW_SW_Decode: 'hw_frame', HW_scaling: true }, { encodetype: 'HW' }, { outputCount: 6 }),
    TC30: SingleProfile(1, 'SM', 30, { ...RTMP_INPUT, HW_SW_Decode: 'sw_frame', HW_scaling: false }, { encodetype: 'SW' }, { outputCount: 6 }),
    TC31: SingleProfile(1, 'SM', 31, { ...RTMP_INPUT, HW_SW_Decode: 'sw_frame', HW_scaling: true }, { encodetype: 'HW' }, { outputCount: 6 }),
    TC32: SingleProfile(1, 'SM', 32, { ...RTMP_INPUT, HW_SW_Decode: 'hw_frame', HW_scaling: false }, { encodetype: 'SW' }, { outputCount: 6 }),
    TC33: MultiProfile(1, 'SM', 33, { ...RTMP_INPUT, HW_SW_Decode: 'hw_frame', HW_scaling: true }, { outputCount: 9 }),
    TC34: MultiProfile(1, 'SM', 34, { ...RTMP_INPUT, HW_SW_Decode: 'hw_frame', HW_scaling: false }, { outputCount: 9 }),

    // HTTP Input Test (TC35)
    TC35: SingleProfile(1, 'SM', 35, { ...HTTP_INPUT, HW_SW_Decode: 'hw_frame', HW_scaling: true }, { encodetype: 'HW' }, { outputCount: 6 }),

    // File Input Tests (TC36-TC41)
    TC36: SingleProfile(1, 'SM', 36, { ...FILE_INPUT, HW_SW_Decode: 'hw_frame', HW_scaling: true }, { encodetype: 'HW' }, { outputCount: 6 }),
    TC37: SingleProfile(1, 'SM', 37, { ...FILE_INPUT, HW_SW_Decode: 'sw_frame', HW_scaling: false }, { encodetype: 'SW' }, { outputCount: 6 }),
    TC38: SingleProfile(1, 'SM', 38, { ...FILE_INPUT, HW_SW_Decode: 'sw_frame', HW_scaling: true }, { encodetype: 'HW' }, { outputCount: 6 }),
    TC39: SingleProfile(1, 'SM', 39, { ...FILE_INPUT, HW_SW_Decode: 'hw_frame', HW_scaling: false }, { encodetype: 'SW' }, { outputCount: 6 }),
    TC40: MultiProfile(1, 'SM', 40, { ...FILE_INPUT, HW_SW_Decode: 'hw_frame', HW_scaling: true }, { outputCount: 9 }),
    TC41: MultiProfile(1, 'SM', 41, { ...FILE_INPUT, HW_SW_Decode: 'hw_frame', HW_scaling: false }, { outputCount: 9 })
};


// Test Data for File Manager Tests
export const FileManagerTestData = {
    TC_FM_01: {
        expectedFolders: ["live", "thumbnail"]
    },
    TC_FM_03: {
        uploadFile: "TC_FM_03.mp4",
        expectedSize: "20.03 MB",
        expectedDate: "Sep"
    },
    TC_FM_04: {
        searchTerms: ["live", "TC_FM_03.mp4"]
    },
    TC_FM_05: {
        folderName: "live"
    },
    TC_FM_07: {
        uploadFiles: [
            "AutomationImageSlate.jpg",
            "big_buck_bunny_1080p.mp3",
            "TC_FM_07.mp4"
        ]
    },
    TC_FM_08: {
        uploadFile: "Extraction.mp4"
    },
    TC_FM_09: {
        uploadFile: "TC_FM_9.mp4",
        expectedCount: 1
    },
    TC_FM_10: {
        uploadFile: "TC_FM_10.mp4",
        expectedCount: 0
    },
    TC_FM_11: {
        uploadFile: "TC_FM_11.mp4",
        expectedCount: 0
    },
    TC_FM_12: {
        folderName: "TC_FM_12",
        expectedCount: 1
    },
    TC_FM_13: {
        folderName: "TC_FM_13@#$%",
        expectedDialog: "Folder name should not contain any spaces or special characters"
    },
    TC_FM_14: {
        folderName: "TC_FM_14",
        expectedCount: 1
    },
    TC_FM_16: {
        folderName: "TC_FM_16",
        uploadFiles: [
            "AutomationImageSlate.jpg",
            "big_buck_bunny_1080p.mp3",
            "TC_FM_16.mp4"
        ]
    },
    TC_FM_18: {
        folderName: "TC_FM_18",
        uploadFile: "Extraction.mp4",
        downloadFile: "File_TC_FM_18.mp4",
        downloadFolder: "fOLDER.zip"
    },
    TC_FM_20: {
        folderName: "TC_FM_20",
        uploadFile: "10_Hours.mp4"
    },
    TC_FM_21: {
        screenshots: [
            "TC_FM_21_NameAscendingSorting",
            "TC_FM_21_NameAscendingDescending",
            "TC_FM_21_SizeAscendingSorting",
            "TC_FM_21_SizeDescendingSorting",
            "TC_FM_21_DateAscendingSorting",
            "TC_FM_21_DateDescendingSorting"
        ]
    },
    TC_FM_22: {
        filesToView: ["big_buck_bunny_1080p.mp3", "Extraction.mp4"]
    },
    TC_FM_23: {
        foldersToCreate: [
            "TC_FM_23",
            "TC_FM_23D",
            "TC_FM_23D2",
            "TC_FM_23D3"
        ]
    },
    TC_FM_24: {
        folderName: "TC_FM_24",
        expectedCount: 1,
        uploadFiles: [
            "TC_FM_24.mov",
            "big_buck_bunny_1080p.mp3",
            "TC_FM_24.mp4"
        ],
        filesToView: [
            "big_buck_bunny_1080p.mp3",
            "TC_FM_24.mp4",
            "TC_FM_24.mov"
        ]
    }
};

// File Paths Configuration
export const FmUploadDownloadPaths = {
    TCFM03mp4: "Y:/Users/Jebinson/TORQ_AutomationData/TORQ_FX/TORQ_FX_AutomationSource/TS_TORQ_006_File Manager/TC_FM_03.mp4",
    automationImage: "Y:/Users/Jebinson/TORQ_AutomationData/TORQ_FX/TORQ_FX_AutomationSource/TS_TORQ_006_File Manager/AutomationImageSlate.jpg",
    bigBuckBunnyMP3: "Y:/Users/Jebinson/TORQ_AutomationData/TORQ_FX/TORQ_FX_AutomationSource/TS_TORQ_006_File Manager/big_buck_bunny_1080p.mp3",
    extractionMP4: "Y:/Users/Jebinson/TORQ_AutomationData/TORQ_FX/TORQ_FX_AutomationSource/TS_TORQ_006_File Manager/Extraction.mp4",
    testFileFM7: "Y:/Users/Jebinson/TORQ_AutomationData/TORQ_FX/TORQ_FX_AutomationSource/TS_TORQ_006_File Manager/TC_FM_07.mp4",
    testFileFM9: "Y:/Users/Jebinson/TORQ_AutomationData/TORQ_FX/TORQ_FX_AutomationSource/TS_TORQ_006_File Manager/TC_FM_9.mp4",
    testFileFM10: "Y:/Users/Jebinson/TORQ_AutomationData/TORQ_FX/TORQ_FX_AutomationSource/TS_TORQ_006_File Manager/TC_FM_10.mp4",
    testFileFM11: "Y:/Users/Jebinson/TORQ_AutomationData/TORQ_FX/TORQ_FX_AutomationSource/TS_TORQ_006_File Manager/TC_FM_11.mp4",
    testFileFM16: "Y:/Users/Jebinson/TORQ_AutomationData/TORQ_FX/TORQ_FX_AutomationSource/TS_TORQ_006_File Manager/TC_FM_16.mp4",
    testFileFM24MOV: "Y:/Users/Jebinson/TORQ_AutomationData/TORQ_FX/TORQ_FX_AutomationSource/TS_TORQ_006_File Manager/TC_FM_24.mov",
    testFileFM24MP4: "Y:/Users/Jebinson/TORQ_AutomationData/TORQ_FX/TORQ_FX_AutomationSource/TS_TORQ_006_File Manager/TC_FM_24.mp4",
    tenHoursMP4: "Y:/Users/Jebinson/TORQ_AutomationData/TORQ_FX/TORQ_FX_AutomationSource/TS_TORQ_006_File Manager/10_Hours.mp4",
    // Download locations
    downloadFolder: "Y:/Users/Jebinson/TORQ_AutomationData/TORQ_FX/TORQ_FX_AutomationSource/TS_TORQ_006_File_Manager_Downloads",
    downloadFile: "Y:/Users/Jebinson/TORQ_AutomationData/TORQ_FX/TORQ_FX_AutomationSource/TS_TORQ_006_File_Manager_Downloads",
    // Screenshot locations
    screenshotFolder: "Y:/Users/Jebinson/TORQ_AutomationData/TORQ_FX/TORQ_FX_AutomationSource/TS_TORQ_006_File_Manager_Screenshot/"

};

export const AccountTestData = {
    TC01: {
        testName: 'Click on add account'
    },
    TC02: {
        accountName: "TC2"
    },
    TC03: {
        accountName: "TC3"
    },
    TC04: {
        accountName: 'TC4'
    },
    TC05: {
        accountName: 'TC5'
    },
    TC06: {
        accountName: 'TC6',
        accountCountry: 'TC6Country',
        expectedValues: ['TC6', 'TC6Country']
    },
    TC07: {
        accountName: 'TC7'
    },
    TC08: {
        accountName: 'TC7!@#'
    },
    TC09: {
        accountName: 'TC9',
        renameAccountName: 'TC9Rename'
    },
    TC10: {
        accountName: 'TC10'
    },
    TC11: {
        accountName: 'TC11'
    },
    TC12: {
        accountName: 'TC12',
        email: 'TC12@riversilica.com',
        password: 'Pixfix@123',
        confirmPassword: 'Pixfix@123',
        role: 'super-admin'
    },
    TC13: {
        accountName: 'TC13'
    },
    TC14: {
        accountName: 'TC14',
        email: 'TC14@riversilica.com',
        password: 'Pixfix@123',
        role: 'super-admin',
        emptyRole: 'Select Role'
    },
    TC15: {
        accountName: 'TC15',
        userName: 'TC14!@#',
        email: 'TC15@riversilica.com',
        password: 'Pixfix@123',
        confirmPassword: 'Pixfix@123',
        role: 'super-admin'
    },
    TC16: {
        accountName: 'TC16',
        email: 'T!@#$%@riversilica.com',
        password: 'Pixfix@123',
        role: 'super-admin',
        confirmPassword: 'Pixfix@123'
    },
    TC17: {
        accountName: 'TC17',
        email: 'TC17riversilica.com',
        password: 'Pixfix@123',
        role: 'super-admin',
        mobileNumber: '!@@##$$%$%%',
        confirmPassword: 'Pixfix@123'
    },
    TC18: {
        accountName: 'TC18',
        email: 'TC18@riversilica.com',
        password: 'Pixfix@123',
        role: 'super-admin',
        confirmPassword: 'Pixfix'
    },
    TC19: {
        accountName: 'TC19',
        email: 'TC19@riversilica.com',
        password: 'Pixfix@123',
        role: 'super-admin',
        confirmPassword: 'Pixfix@123'
    },
    TC20: {
        accountName: 'TC20',
        email: 'TC20@riversilica.com',
        password: 'Pixfix@123',
        role: 'super-admin',
        confirmPassword: 'Pixfix@123'
    },
    TC21: {
        accountName: 'TC21',
        email: 'TC21@riversilica.com',
        password: 'Pixfix@123',
        role: 'super-admin',
        confirmPassword: 'Pixfix@123'
    },
    TC22: {
        accountName: 'TC22',
        email: 'TC22@riversilica.com',
        password: 'Pixfix@123',
        role: 'super-admin',
        confirmPassword: 'Pixfix@123'
    },
    TC23: {
        accountName: 'TC23',
        email: 'TC23@riversilica.com',
        password: 'Pixfix@123',
        role: 'super-admin',
        confirmPassword: 'Pixfix@123',
        oldPassword: 'Pixfix@1234'
    },
    TC24: {
        accountName: 'TC24',
        email: 'TC24@riversilica.com',
        password: 'Pixfix@123',
        role: 'super-admin',
        confirmPassword: 'Pixfix@123',
        oldPassword: 'Pixfix@123',
        newPassword: 'Pixfix@1234',
        dashboardURL: 'http://10.0.90.64/#/dashboardMain',
        username: 'TC24'
    },
    TC25: {
        accountName: 'TC25',
        email: 'TC25@riversilica.com',
        password: 'Pixfix@123',
        role: 'super-admin',
        confirmPassword: 'Pixfix@123'
    },
    TC26: {
        accountName: 'TC26',
        email: 'TC26@riversilica.com',
        password: 'Pixfix@123',
        role: 'super-admin',
        confirmPassword: 'Pixfix@123',
        username: 'TC26',
        userPassword: 'Pixfix@123',
        dashboardURL: 'http://10.0.90.64/#/dashboardMain'
    },
    TC27: {
        accountName: 'TC27',
        email: 'TC27@riversilica.com',
        password: 'Pixfix@123',
        role: 'super-admin',
        confirmPassword: 'Pixfix@123',
        username: 'TC27',
        userPassword: 'Pixfix@123',
        dashboardURL: 'http://10.0.90.64/#/dashboardMain',
        accountNameTwo: 'TC27D'
    },
    TC28: {
        accountName: 'TC28',
        email: 'TC28@riversilica.com',
        password: 'Pixfix@123',
        role: 'super-admin',
        confirmPassword: 'Pixfix@123',
        username: 'TC28',
        userPassword: 'Pixfix@123',
        dashboardURL: 'http://10.0.90.64/#/dashboardMain',
        accountNameTwo: 'TC28U2'
    },
    TC29: {
        uploadFile: "Y:/Users/Jebinson/TORQ_AutomationData/TORQ_FX/TORQ_FX_AutomationSource/TS_TORQ_006_File Manager/Account_TC29.mp4"
    },

    TC00: {
        testName: 'Adding Admin Account and user',
        accountName: 'alice',
        email: 'alice@riversilica.com',
        password: 'Pixfix@123',
        role: 'admin',
        confirmPassword: 'Pixfix@123',
        username: 'alice',
        userPassword: 'Pixfix@123',
        dashboardURL: 'http://10.0.90.64/#/dashboardMain'
    },
    TC30: {
        testName: 'Click on add account'
    },
    TC31: {
        accountName: "TC31"
    },
    TC32: {
        accountName: "TC32"
    },
    TC33: {
        accountName: 'TC33'
    },
    TC34: {
        accountName: 'TC34'
    },
    TC35: {
        accountName: 'TC35',
        accountCountry: 'TC35Country',
        expectedValues: ['TC35', 'TC35Country']
    },
    TC36: {
        accountName: 'TC36'
    },
    TC37: {
        accountName: 'TC37!@#'
    },
    TC38: {
        accountName: 'TC38',
        renameAccountName: 'TC38Rename'
    },
    TC39: {
        accountName: 'TC39'
    },
    TC40: {
        accountName: 'TC40'
    },
    TC41: {
        accountName: 'TC41',
        email: 'TC41@riversilica.com',
        password: 'Pixfix@123',
        confirmPassword: 'Pixfix@123',
        role: 'admin'
    },
    TC42: {
        accountName: 'TC42'
    },
    TC43: {
        accountName: 'TC43',
        email: 'TC43@riversilica.com',
        password: 'Pixfix@123',
        role: 'admin',
        emptyRole: 'Select Role'
    },
    TC44: {
        accountName: 'TC44',
        userName: 'TC44!@#',
        email: 'TC44@riversilica.com',
        password: 'Pixfix@123',
        confirmPassword: 'Pixfix@123',
        role: 'admin'
    },
    TC45: {
        accountName: 'TC45',
        email: 'T!@#$%@riversilica.com',
        password: 'Pixfix@123',
        role: 'admin',
        confirmPassword: 'Pixfix@123'
    },
    TC46: {
        accountName: 'TC46',
        email: 'TC46riversilica.com',
        password: 'Pixfix@123',
        role: 'admin',
        mobileNumber: '!@@##$$%$%%',
        confirmPassword: 'Pixfix@123'
    },
    TC47: {
        accountName: 'TC47',
        email: 'TC47@riversilica.com',
        password: 'Pixfix@123',
        role: 'admin',
        confirmPassword: 'Pixfix'
    },
    TC48: {
        accountName: 'TC48',
        email: 'TC48@riversilica.com',
        password: 'Pixfix@123',
        role: 'admin',
        confirmPassword: 'Pixfix@123'
    },
    TC49: {
        accountName: 'TC49',
        email: 'TC49@riversilica.com',
        password: 'Pixfix@123',
        role: 'admin',
        confirmPassword: 'Pixfix@123'
    },
    TC50: {
        accountName: 'TC50',
        email: 'TC50@riversilica.com',
        password: 'Pixfix@123',
        role: 'admin',
        confirmPassword: 'Pixfix@123'
    },
    TC51: {
        accountName: 'TC51',
        email: 'TC51@riversilica.com',
        password: 'Pixfix@123',
        role: 'admin',
        confirmPassword: 'Pixfix@123'
    },
    TC52: {
        accountName: 'TC52',
        email: 'TC52@riversilica.com',
        password: 'Pixfix@123',
        role: 'admin',
        confirmPassword: 'Pixfix@123',
        oldPassword: 'Pixfix@1234'
    },
    TC53: {
        accountName: 'TC53',
        email: 'TC53@riversilica.com',
        password: 'Pixfix@123',
        role: 'admin',
        confirmPassword: 'Pixfix@123',
        oldPassword: 'Pixfix@123',
        newPassword: 'Pixfix@1234',
        dashboardURL: 'http://10.0.90.64/#/dashboardMain',
        username: 'TC53'
    },
    TC54: {
        accountName: 'TC54',
        email: 'TC54@riversilica.com',
        password: 'Pixfix@123',
        role: 'admin',
        confirmPassword: 'Pixfix@123'
    },
    TC55: {
        accountName: 'TC55',
        email: 'TC55@riversilica.com',
        password: 'Pixfix@123',
        role: 'admin',
        confirmPassword: 'Pixfix@123',
        username: 'TC55',
        userPassword: 'Pixfix@123',
        dashboardURL: 'http://10.0.90.64/#/dashboardMain'
    },
    TC56: {
        accountName: 'TC56',
        email: 'TC56@riversilica.com',
        password: 'Pixfix@123',
        role: 'admin',
        confirmPassword: 'Pixfix@123',
        username: 'TC56',
        userPassword: 'Pixfix@123',
        dashboardURL: 'http://10.0.90.64/#/dashboardMain',
        accountNameTwo: 'TC56D'
    },
    TC57: {
        accountName: 'TC57',
        email: 'TC57@riversilica.com',
        password: 'Pixfix@123',
        role: 'admin',
        confirmPassword: 'Pixfix@123',
        username: 'TC57',
        userPassword: 'Pixfix@123',
        dashboardURL: 'http://10.0.90.64/#/dashboardMain',
        accountNameTwo: 'TC57U2'
    },
    TC58: {
        uploadFile: "Account_TC29.mp4"
    },
    TC66: {
        accountName: 'QA',
        country: 'India',
        username: 'alice',
        email: 'alice@riversilica.com',
        password: 'Pixfix@123',
        cpassword: 'Pixfix@123',
        role: 'Admin',
        mobilenumber: '9876543210',
        clickButton: 'true',
        NODENAME: 'Node9064',
        labelTextPrimary: 'riversilica',
        labelTextSecondary: 'QA',
        Licname: 'Lic',
        activestatus: 'Active',
        Licusername: 'jebinson@riversilica.com',
        Licpassword: 'PixFix@123',
        licensename: 'Torlic',
        product: 'torq',
        producttype: 'hw',
        productversion: '115.25.09',
        jobcount: '1,2',
        frequencytype: 'monthly',
        methodvalue: 'job',
        timezonecountry: 'Asia/Kolkata',
    }

};
export const IOCombination = {
    TC1: SingleProfile(7, 'IO', 1, { ...UDP_INPUT, HW_SW_Decode: 'hw_frame', HW_scaling: true }, { encodetype: 'HW' }, { outputCount: 3 }),
    TC2: SingleProfile(7, 'IO', 2, { ...UDP_INPUT, HW_SW_Decode: 'hw_frame', HW_scaling: true }, { encodetype: 'HW' }, { outputCount: 3 }),
    TC3: SingleProfile(7, 'IO', 3, { ...UDP_INPUT, HW_SW_Decode: 'hw_frame', HW_scaling: true }, { encodetype: 'HW' }, { outputCount: 3 }),
    TC4: SingleProfile(7, 'IO', 4, { ...UDP_INPUT, HW_SW_Decode: 'hw_frame', HW_scaling: true }, { encodetype: 'HW' }, { outputCount: 3 }),
    TC5: SingleProfile(7, 'IO', 5, { ...UDP_INPUT, HW_SW_Decode: 'hw_frame', HW_scaling: true }, { encodetype: 'HW' }, { outputCount: 3 }),
    TC6: SingleProfile(7, 'IO', 6, { ...UDP_INPUT, HW_SW_Decode: 'hw_frame', HW_scaling: true }, { encodetype: 'SW' }, { outputCount: 3 }),
    TC7: SingleProfile(7, 'IO', 7, { ...UDP_INPUT, HW_SW_Decode: 'hw_frame', HW_scaling: true }, { encodetype: 'SW' }, { outputCount: 3 }),
    TC8: SingleProfile(7, 'IO', 8, { ...UDP_INPUT, HW_SW_Decode: 'hw_frame', HW_scaling: true }, { encodetype: 'SW' }, { outputCount: 3 }),
    TC9: SingleProfile(7, 'IO', 9, { ...UDP_INPUT, HW_SW_Decode: 'hw_frame', HW_scaling: true }, { encodetype: 'SW' }, { outputCount: 3 }),
    TC10: SingleProfile(7, 'IO', 10, { ...UDP_INPUT, HW_SW_Decode: 'hw_frame', HW_scaling: true }, { encodetype: 'SW' }, { outputCount: 3 }),
    TC11: SingleProfile(7, 'IO', 11, { ...UDP_INPUT, HW_SW_Decode: 'sw_frame', HW_scaling: false }, { encodetype: 'HW' }, { outputCount: 3 }),
    TC12: SingleProfile(7, 'IO', 12, { ...UDP_INPUT, HW_SW_Decode: 'sw_frame', HW_scaling: false }, { encodetype: 'HW' }, { outputCount: 3 }),
    TC13: SingleProfile(7, 'IO', 13, { ...UDP_INPUT, HW_SW_Decode: 'sw_frame', HW_scaling: false }, { encodetype: 'HW' }, { outputCount: 3 }),
    TC14: SingleProfile(7, 'IO', 14, { ...UDP_INPUT, HW_SW_Decode: 'sw_frame', HW_scaling: false }, { encodetype: 'HW' }, { outputCount: 3 }),
    TC15: SingleProfile(7, 'IO', 15, { ...UDP_INPUT, HW_SW_Decode: 'sw_frame', HW_scaling: false }, { encodetype: 'HW' }, { outputCount: 3 }),
    TC16: SingleProfile(7, 'IO', 16, { ...UDP_INPUT, HW_SW_Decode: 'sw_frame', HW_scaling: false }, { encodetype: 'SW' }, { outputCount: 3 }),
    TC17: SingleProfile(7, 'IO', 17, { ...UDP_INPUT, HW_SW_Decode: 'sw_frame', HW_scaling: false }, { encodetype: 'SW' }, { outputCount: 3 }),
    TC18: SingleProfile(7, 'IO', 18, { ...UDP_INPUT, HW_SW_Decode: 'sw_frame', HW_scaling: false }, { encodetype: 'SW' }, { outputCount: 3 }),
    TC19: SingleProfile(7, 'IO', 19, { ...UDP_INPUT, HW_SW_Decode: 'sw_frame', HW_scaling: false }, { encodetype: 'SW' }, { outputCount: 3 }),
    TC20: SingleProfile(7, 'IO', 20, { ...UDP_INPUT, HW_SW_Decode: 'sw_frame', HW_scaling: false }, { encodetype: 'SW' }, { outputCount: 3 }),
    TC21: SingleProfile(7, 'IO', 21, { ...SRT_CALLER_INPUT, HW_SW_Decode: 'hw_frame', HW_scaling: true }, { encodetype: 'HW' }, { outputCount: 3 }),
    TC22: SingleProfile(7, 'IO', 22, { ...SRT_CALLER_INPUT, HW_SW_Decode: 'hw_frame', HW_scaling: true }, { encodetype: 'HW' }, { outputCount: 3 }),
    TC23: SingleProfile(7, 'IO', 23, { ...SRT_CALLER_INPUT, HW_SW_Decode: 'hw_frame', HW_scaling: true }, { encodetype: 'HW' }, { outputCount: 3 }),
    TC24: SingleProfile(7, 'IO', 24, { ...SRT_CALLER_INPUT, HW_SW_Decode: 'hw_frame', HW_scaling: true }, { encodetype: 'HW' }, { outputCount: 3 }),
    TC25: SingleProfile(7, 'IO', 25, { ...SRT_CALLER_INPUT, HW_SW_Decode: 'hw_frame', HW_scaling: true }, { encodetype: 'HW' }, { outputCount: 3 }),
    TC26: SingleProfile(7, 'IO', 26, { ...SRT_CALLER_INPUT, HW_SW_Decode: 'hw_frame', HW_scaling: true }, { encodetype: 'SW' }, { outputCount: 3 }),
    TC27: SingleProfile(7, 'IO', 27, { ...SRT_CALLER_INPUT, HW_SW_Decode: 'hw_frame', HW_scaling: true }, { encodetype: 'SW' }, { outputCount: 3 }),
    TC28: SingleProfile(7, 'IO', 28, { ...SRT_CALLER_INPUT, HW_SW_Decode: 'hw_frame', HW_scaling: true }, { encodetype: 'SW' }, { outputCount: 3 }),
    TC29: SingleProfile(7, 'IO', 29, { ...SRT_CALLER_INPUT, HW_SW_Decode: 'hw_frame', HW_scaling: true }, { encodetype: 'SW' }, { outputCount: 3 }),
    TC30: SingleProfile(7, 'IO', 30, { ...SRT_CALLER_INPUT, HW_SW_Decode: 'hw_frame', HW_scaling: true }, { encodetype: 'SW' }, { outputCount: 3 }),
    TC31: SingleProfile(7, 'IO', 31, { ...SRT_CALLER_INPUT, HW_SW_Decode: 'sw_frame', HW_scaling: false }, { encodetype: 'HW' }, { outputCount: 3 }),
    TC32: SingleProfile(7, 'IO', 32, { ...SRT_CALLER_INPUT, HW_SW_Decode: 'sw_frame', HW_scaling: false }, { encodetype: 'HW' }, { outputCount: 3 }),
    TC33: SingleProfile(7, 'IO', 33, { ...SRT_CALLER_INPUT, HW_SW_Decode: 'sw_frame', HW_scaling: false }, { encodetype: 'HW' }, { outputCount: 3 }),
    TC34: SingleProfile(7, 'IO', 34, { ...SRT_CALLER_INPUT, HW_SW_Decode: 'sw_frame', HW_scaling: false }, { encodetype: 'HW' }, { outputCount: 3 }),
    TC35: SingleProfile(7, 'IO', 35, { ...SRT_CALLER_INPUT, HW_SW_Decode: 'sw_frame', HW_scaling: false }, { encodetype: 'HW' }, { outputCount: 3 }),
    TC36: SingleProfile(7, 'IO', 36, { ...SRT_CALLER_INPUT, HW_SW_Decode: 'sw_frame', HW_scaling: false }, { encodetype: 'SW' }, { outputCount: 3 }),
    TC37: SingleProfile(7, 'IO', 37, { ...SRT_CALLER_INPUT, HW_SW_Decode: 'sw_frame', HW_scaling: false }, { encodetype: 'SW' }, { outputCount: 3 }),
    TC38: SingleProfile(7, 'IO', 38, { ...SRT_CALLER_INPUT, HW_SW_Decode: 'sw_frame', HW_scaling: false }, { encodetype: 'SW' }, { outputCount: 3 }),
    TC39: SingleProfile(7, 'IO', 39, { ...SRT_CALLER_INPUT, HW_SW_Decode: 'sw_frame', HW_scaling: false }, { encodetype: 'SW' }, { outputCount: 3 }),
    TC40: SingleProfile(7, 'IO', 40, { ...SRT_CALLER_INPUT, HW_SW_Decode: 'sw_frame', HW_scaling: false }, { encodetype: 'SW' }, { outputCount: 3 }),
    TC41: SingleProfile(7, 'IO', 41, { ...SRT_LISTENER_INPUT, HW_SW_Decode: 'hw_frame', HW_scaling: true }, { encodetype: 'HW' }, { outputCount: 3 }),
    TC42: SingleProfile(7, 'IO', 42, { ...SRT_LISTENER_INPUT, HW_SW_Decode: 'hw_frame', HW_scaling: true }, { encodetype: 'HW' }, { outputCount: 3 }),
    TC43: SingleProfile(7, 'IO', 43, { ...SRT_LISTENER_INPUT, HW_SW_Decode: 'hw_frame', HW_scaling: true }, { encodetype: 'HW' }, { outputCount: 3 }),
    TC44: SingleProfile(7, 'IO', 44, { ...SRT_LISTENER_INPUT, HW_SW_Decode: 'hw_frame', HW_scaling: true }, { encodetype: 'HW' }, { outputCount: 3 }),
    TC45: SingleProfile(7, 'IO', 45, { ...SRT_LISTENER_INPUT, HW_SW_Decode: 'hw_frame', HW_scaling: true }, { encodetype: 'HW' }, { outputCount: 3 }),
    TC46: SingleProfile(7, 'IO', 46, { ...SRT_LISTENER_INPUT, HW_SW_Decode: 'hw_frame', HW_scaling: true }, { encodetype: 'SW' }, { outputCount: 3 }),
    TC47: SingleProfile(7, 'IO', 47, { ...SRT_LISTENER_INPUT, HW_SW_Decode: 'hw_frame', HW_scaling: true }, { encodetype: 'SW' }, { outputCount: 3 }),
    TC48: SingleProfile(7, 'IO', 48, { ...SRT_LISTENER_INPUT, HW_SW_Decode: 'hw_frame', HW_scaling: true }, { encodetype: 'SW' }, { outputCount: 3 }),
    TC49: SingleProfile(7, 'IO', 49, { ...SRT_LISTENER_INPUT, HW_SW_Decode: 'hw_frame', HW_scaling: true }, { encodetype: 'SW' }, { outputCount: 3 }),
    TC50: SingleProfile(7, 'IO', 50, { ...SRT_LISTENER_INPUT, HW_SW_Decode: 'hw_frame', HW_scaling: true }, { encodetype: 'SW' }, { outputCount: 3 }),
    TC51: SingleProfile(7, 'IO', 51, { ...SRT_LISTENER_INPUT, HW_SW_Decode: 'sw_frame', HW_scaling: false }, { encodetype: 'HW' }, { outputCount: 3 }),
    TC52: SingleProfile(7, 'IO', 52, { ...SRT_LISTENER_INPUT, HW_SW_Decode: 'sw_frame', HW_scaling: false }, { encodetype: 'HW' }, { outputCount: 3 }),
    TC53: SingleProfile(7, 'IO', 53, { ...SRT_LISTENER_INPUT, HW_SW_Decode: 'sw_frame', HW_scaling: false }, { encodetype: 'HW' }, { outputCount: 3 }),
    TC54: SingleProfile(7, 'IO', 54, { ...SRT_LISTENER_INPUT, HW_SW_Decode: 'sw_frame', HW_scaling: false }, { encodetype: 'HW' }, { outputCount: 3 }),
    TC55: SingleProfile(7, 'IO', 55, { ...SRT_LISTENER_INPUT, HW_SW_Decode: 'sw_frame', HW_scaling: false }, { encodetype: 'HW' }, { outputCount: 3 }),
    TC56: SingleProfile(7, 'IO', 56, { ...SRT_LISTENER_INPUT, HW_SW_Decode: 'sw_frame', HW_scaling: false }, { encodetype: 'SW' }, { outputCount: 3 }),
    TC57: SingleProfile(7, 'IO', 57, { ...SRT_LISTENER_INPUT, HW_SW_Decode: 'sw_frame', HW_scaling: false }, { encodetype: 'SW' }, { outputCount: 3 }),
    TC58: SingleProfile(7, 'IO', 58, { ...SRT_LISTENER_INPUT, HW_SW_Decode: 'sw_frame', HW_scaling: false }, { encodetype: 'SW' }, { outputCount: 3 }),
    TC59: SingleProfile(7, 'IO', 59, { ...SRT_LISTENER_INPUT, HW_SW_Decode: 'sw_frame', HW_scaling: false }, { encodetype: 'SW' }, { outputCount: 3 }),
    TC60: SingleProfile(7, 'IO', 60, { ...SRT_LISTENER_INPUT, HW_SW_Decode: 'sw_frame', HW_scaling: false }, { encodetype: 'SW' }, { outputCount: 3 }),
    TC61: SingleProfile(7, 'IO', 61, { ...RTMP_INPUT, HW_SW_Decode: 'hw_frame', HW_scaling: true }, { encodetype: 'HW' }, { outputCount: 3 }),
    TC62: SingleProfile(7, 'IO', 62, { ...RTMP_INPUT, HW_SW_Decode: 'hw_frame', HW_scaling: true }, { encodetype: 'HW' }, { outputCount: 3 }),
    TC63: SingleProfile(7, 'IO', 63, { ...RTMP_INPUT, HW_SW_Decode: 'hw_frame', HW_scaling: true }, { encodetype: 'HW' }, { outputCount: 3 }),
    TC64: SingleProfile(7, 'IO', 64, { ...RTMP_INPUT, HW_SW_Decode: 'hw_frame', HW_scaling: true }, { encodetype: 'HW' }, { outputCount: 3 }),
    TC65: SingleProfile(7, 'IO', 65, { ...RTMP_INPUT, HW_SW_Decode: 'hw_frame', HW_scaling: true }, { encodetype: 'HW' }, { outputCount: 3 }),
    TC66: SingleProfile(7, 'IO', 66, { ...RTMP_INPUT, HW_SW_Decode: 'hw_frame', HW_scaling: true }, { encodetype: 'SW' }, { outputCount: 3 }),
    TC67: SingleProfile(7, 'IO', 67, { ...RTMP_INPUT, HW_SW_Decode: 'hw_frame', HW_scaling: true }, { encodetype: 'SW' }, { outputCount: 3 }),
    TC68: SingleProfile(7, 'IO', 68, { ...RTMP_INPUT, HW_SW_Decode: 'hw_frame', HW_scaling: true }, { encodetype: 'SW' }, { outputCount: 3 }),
    TC69: SingleProfile(7, 'IO', 69, { ...RTMP_INPUT, HW_SW_Decode: 'hw_frame', HW_scaling: true }, { encodetype: 'SW' }, { outputCount: 3 }),
    TC70: SingleProfile(7, 'IO', 70, { ...RTMP_INPUT, HW_SW_Decode: 'hw_frame', HW_scaling: true }, { encodetype: 'SW' }, { outputCount: 3 }),
    TC71: SingleProfile(7, 'IO', 71, { ...RTMP_INPUT, HW_SW_Decode: 'sw_frame', HW_scaling: false }, { encodetype: 'HW' }, { outputCount: 3 }),
    TC72: SingleProfile(7, 'IO', 72, { ...RTMP_INPUT, HW_SW_Decode: 'sw_frame', HW_scaling: false }, { encodetype: 'HW' }, { outputCount: 3 }),
    TC73: SingleProfile(7, 'IO', 73, { ...RTMP_INPUT, HW_SW_Decode: 'sw_frame', HW_scaling: false }, { encodetype: 'HW' }, { outputCount: 3 }),
    TC74: SingleProfile(7, 'IO', 74, { ...RTMP_INPUT, HW_SW_Decode: 'sw_frame', HW_scaling: false }, { encodetype: 'HW' }, { outputCount: 3 }),
    TC75: SingleProfile(7, 'IO', 75, { ...RTMP_INPUT, HW_SW_Decode: 'sw_frame', HW_scaling: false }, { encodetype: 'HW' }, { outputCount: 3 }),
    TC76: SingleProfile(7, 'IO', 76, { ...RTMP_INPUT, HW_SW_Decode: 'sw_frame', HW_scaling: false }, { encodetype: 'SW' }, { outputCount: 3 }),
    TC77: SingleProfile(7, 'IO', 77, { ...RTMP_INPUT, HW_SW_Decode: 'sw_frame', HW_scaling: false }, { encodetype: 'SW' }, { outputCount: 3 }),
    TC78: SingleProfile(7, 'IO', 78, { ...RTMP_INPUT, HW_SW_Decode: 'sw_frame', HW_scaling: false }, { encodetype: 'SW' }, { outputCount: 3 }),
    TC79: SingleProfile(7, 'IO', 79, { ...RTMP_INPUT, HW_SW_Decode: 'sw_frame', HW_scaling: false }, { encodetype: 'SW' }, { outputCount: 3 }),
    TC80: SingleProfile(7, 'IO', 80, { ...RTMP_INPUT, HW_SW_Decode: 'sw_frame', HW_scaling: false }, { encodetype: 'SW' }, { outputCount: 3 }),
    TC81: SingleProfile(7, 'IO', 81, { ...HTTP_INPUT, HW_SW_Decode: 'hw_frame', HW_scaling: true }, { encodetype: 'HW' }, { outputCount: 3 }),
    TC82: SingleProfile(7, 'IO', 82, { ...HTTP_INPUT, HW_SW_Decode: 'hw_frame', HW_scaling: true }, { encodetype: 'HW' }, { outputCount: 3 }),
    TC83: SingleProfile(7, 'IO', 83, { ...HTTP_INPUT, HW_SW_Decode: 'hw_frame', HW_scaling: true }, { encodetype: 'HW' }, { outputCount: 3 }),
    TC84: SingleProfile(7, 'IO', 84, { ...HTTP_INPUT, HW_SW_Decode: 'hw_frame', HW_scaling: true }, { encodetype: 'HW' }, { outputCount: 3 }),
    TC85: SingleProfile(7, 'IO', 85, { ...HTTP_INPUT, HW_SW_Decode: 'hw_frame', HW_scaling: true }, { encodetype: 'HW' }, { outputCount: 3 }),
    TC86: SingleProfile(7, 'IO', 86, { ...HTTP_INPUT, HW_SW_Decode: 'hw_frame', HW_scaling: true }, { encodetype: 'SW' }, { outputCount: 3 }),
    TC87: SingleProfile(7, 'IO', 87, { ...HTTP_INPUT, HW_SW_Decode: 'hw_frame', HW_scaling: true }, { encodetype: 'SW' }, { outputCount: 3 }),
    TC88: SingleProfile(7, 'IO', 88, { ...HTTP_INPUT, HW_SW_Decode: 'hw_frame', HW_scaling: true }, { encodetype: 'SW' }, { outputCount: 3 }),
    TC89: SingleProfile(7, 'IO', 89, { ...HTTP_INPUT, HW_SW_Decode: 'hw_frame', HW_scaling: true }, { encodetype: 'SW' }, { outputCount: 3 }),
    TC90: SingleProfile(7, 'IO', 90, { ...HTTP_INPUT, HW_SW_Decode: 'hw_frame', HW_scaling: true }, { encodetype: 'SW' }, { outputCount: 3 }),
    TC91: SingleProfile(7, 'IO', 91, { ...HTTP_INPUT, HW_SW_Decode: 'sw_frame', HW_scaling: false }, { encodetype: 'HW' }, { outputCount: 3 }),
    TC92: SingleProfile(7, 'IO', 92, { ...HTTP_INPUT, HW_SW_Decode: 'sw_frame', HW_scaling: false }, { encodetype: 'HW' }, { outputCount: 3 }),
    TC93: SingleProfile(7, 'IO', 93, { ...HTTP_INPUT, HW_SW_Decode: 'sw_frame', HW_scaling: false }, { encodetype: 'HW' }, { outputCount: 3 }),
    TC94: SingleProfile(7, 'IO', 94, { ...HTTP_INPUT, HW_SW_Decode: 'sw_frame', HW_scaling: false }, { encodetype: 'HW' }, { outputCount: 3 }),
    TC95: SingleProfile(7, 'IO', 95, { ...HTTP_INPUT, HW_SW_Decode: 'sw_frame', HW_scaling: false }, { encodetype: 'HW' }, { outputCount: 3 }),
    TC96: SingleProfile(7, 'IO', 96, { ...HTTP_INPUT, HW_SW_Decode: 'sw_frame', HW_scaling: false }, { encodetype: 'SW' }, { outputCount: 3 }),
    TC97: SingleProfile(7, 'IO', 97, { ...HTTP_INPUT, HW_SW_Decode: 'sw_frame', HW_scaling: false }, { encodetype: 'SW' }, { outputCount: 3 }),
    TC98: SingleProfile(7, 'IO', 98, { ...HTTP_INPUT, HW_SW_Decode: 'sw_frame', HW_scaling: false }, { encodetype: 'SW' }, { outputCount: 3 }),
    TC99: SingleProfile(7, 'IO', 99, { ...HTTP_INPUT, HW_SW_Decode: 'sw_frame', HW_scaling: false }, { encodetype: 'SW' }, { outputCount: 3 }),
    TC100: SingleProfile(7, 'IO', 100, { ...HTTP_INPUT, HW_SW_Decode: 'sw_frame', HW_scaling: false }, { encodetype: 'SW' }, { outputCount: 3 }),
    TC101: SingleProfile(7, 'IO', 101, { ...FILE_INPUT, HW_SW_Decode: 'hw_frame', HW_scaling: true }, { encodetype: 'HW' }, { outputCount: 3 }),
    TC102: SingleProfile(7, 'IO', 102, { ...FILE_INPUT, HW_SW_Decode: 'hw_frame', HW_scaling: true }, { encodetype: 'HW' }, { outputCount: 3 }),
    TC103: SingleProfile(7, 'IO', 103, { ...FILE_INPUT, HW_SW_Decode: 'hw_frame', HW_scaling: true }, { encodetype: 'HW' }, { outputCount: 3 }),
    TC104: SingleProfile(7, 'IO', 104, { ...FILE_INPUT, HW_SW_Decode: 'hw_frame', HW_scaling: true }, { encodetype: 'HW' }, { outputCount: 3 }),
    TC105: SingleProfile(7, 'IO', 105, { ...FILE_INPUT, HW_SW_Decode: 'hw_frame', HW_scaling: true }, { encodetype: 'HW' }, { outputCount: 3 }),
    TC106: SingleProfile(7, 'IO', 106, { ...FILE_INPUT, HW_SW_Decode: 'hw_frame', HW_scaling: true }, { encodetype: 'SW' }, { outputCount: 3 }),
    TC107: SingleProfile(7, 'IO', 107, { ...FILE_INPUT, HW_SW_Decode: 'hw_frame', HW_scaling: true }, { encodetype: 'SW' }, { outputCount: 3 }),
    TC108: SingleProfile(7, 'IO', 108, { ...FILE_INPUT, HW_SW_Decode: 'hw_frame', HW_scaling: true }, { encodetype: 'SW' }, { outputCount: 3 }),
    TC109: SingleProfile(7, 'IO', 109, { ...FILE_INPUT, HW_SW_Decode: 'hw_frame', HW_scaling: true }, { encodetype: 'SW' }, { outputCount: 3 }),
    TC110: SingleProfile(7, 'IO', 110, { ...FILE_INPUT, HW_SW_Decode: 'hw_frame', HW_scaling: true }, { encodetype: 'SW' }, { outputCount: 3 }),
    TC111: SingleProfile(7, 'IO', 111, { ...FILE_INPUT, HW_SW_Decode: 'sw_frame', HW_scaling: false }, { encodetype: 'HW' }, { outputCount: 3 }),
    TC112: SingleProfile(7, 'IO', 112, { ...FILE_INPUT, HW_SW_Decode: 'sw_frame', HW_scaling: false }, { encodetype: 'HW' }, { outputCount: 3 }),
    TC113: SingleProfile(7, 'IO', 113, { ...FILE_INPUT, HW_SW_Decode: 'sw_frame', HW_scaling: false }, { encodetype: 'HW' }, { outputCount: 3 }),
    TC114: SingleProfile(7, 'IO', 114, { ...FILE_INPUT, HW_SW_Decode: 'sw_frame', HW_scaling: false }, { encodetype: 'HW' }, { outputCount: 3 }),
    TC115: SingleProfile(7, 'IO', 115, { ...FILE_INPUT, HW_SW_Decode: 'sw_frame', HW_scaling: false }, { encodetype: 'HW' }, { outputCount: 3 }),
    TC116: SingleProfile(7, 'IO', 116, { ...FILE_INPUT, HW_SW_Decode: 'sw_frame', HW_scaling: false }, { encodetype: 'SW' }, { outputCount: 3 }),
    TC117: SingleProfile(7, 'IO', 117, { ...FILE_INPUT, HW_SW_Decode: 'sw_frame', HW_scaling: false }, { encodetype: 'SW' }, { outputCount: 3 }),
    TC118: SingleProfile(7, 'IO', 118, { ...FILE_INPUT, HW_SW_Decode: 'sw_frame', HW_scaling: false }, { encodetype: 'SW' }, { outputCount: 3 }),
    TC119: SingleProfile(7, 'IO', 119, { ...FILE_INPUT, HW_SW_Decode: 'sw_frame', HW_scaling: false }, { encodetype: 'SW' }, { outputCount: 3 }),
    TC120: SingleProfile(7, 'IO', 120, { ...FILE_INPUT, HW_SW_Decode: 'sw_frame', HW_scaling: false }, { encodetype: 'SW' }, { outputCount: 3 }),
    TC121: SingleProfile(7, 'IO', 121, { ...RAW_INPUT, HW_SW_Decode: 'hw_frame', HW_scaling: true }, { encodetype: 'HW' }, { outputCount: 3 }),
    TC122: SingleProfile(7, 'IO', 122, { ...RAW_INPUT, HW_SW_Decode: 'hw_frame', HW_scaling: true }, { encodetype: 'HW' }, { outputCount: 3 }),
    TC123: SingleProfile(7, 'IO', 123, { ...RAW_INPUT, HW_SW_Decode: 'hw_frame', HW_scaling: true }, { encodetype: 'HW' }, { outputCount: 3 }),
    TC124: SingleProfile(7, 'IO', 124, { ...RAW_INPUT, HW_SW_Decode: 'hw_frame', HW_scaling: true }, { encodetype: 'HW' }, { outputCount: 3 }),
    TC125: SingleProfile(7, 'IO', 125, { ...RAW_INPUT, HW_SW_Decode: 'hw_frame', HW_scaling: true }, { encodetype: 'HW' }, { outputCount: 3 }),
    TC126: SingleProfile(7, 'IO', 126, { ...RAW_INPUT, HW_SW_Decode: 'hw_frame', HW_scaling: true }, { encodetype: 'SW' }, { outputCount: 3 }),
    TC127: SingleProfile(7, 'IO', 127, { ...RAW_INPUT, HW_SW_Decode: 'hw_frame', HW_scaling: true }, { encodetype: 'SW' }, { outputCount: 3 }),
    TC128: SingleProfile(7, 'IO', 128, { ...RAW_INPUT, HW_SW_Decode: 'hw_frame', HW_scaling: true }, { encodetype: 'SW' }, { outputCount: 3 }),
    TC129: SingleProfile(7, 'IO', 129, { ...RAW_INPUT, HW_SW_Decode: 'hw_frame', HW_scaling: true }, { encodetype: 'SW' }, { outputCount: 3 }),
    TC130: SingleProfile(7, 'IO', 130, { ...RAW_INPUT, HW_SW_Decode: 'hw_frame', HW_scaling: true }, { encodetype: 'SW' }, { outputCount: 3 }),
    TC131: SingleProfile(7, 'IO', 131, { ...RAW_INPUT, HW_SW_Decode: 'sw_frame', HW_scaling: false }, { encodetype: 'HW' }, { outputCount: 3 }),
    TC132: SingleProfile(7, 'IO', 132, { ...RAW_INPUT, HW_SW_Decode: 'sw_frame', HW_scaling: false }, { encodetype: 'HW' }, { outputCount: 3 }),
    TC133: SingleProfile(7, 'IO', 133, { ...RAW_INPUT, HW_SW_Decode: 'sw_frame', HW_scaling: false }, { encodetype: 'HW' }, { outputCount: 3 }),
    TC134: SingleProfile(7, 'IO', 134, { ...RAW_INPUT, HW_SW_Decode: 'sw_frame', HW_scaling: false }, { encodetype: 'HW' }, { outputCount: 3 }),
    TC135: SingleProfile(7, 'IO', 135, { ...RAW_INPUT, HW_SW_Decode: 'sw_frame', HW_scaling: false }, { encodetype: 'HW' }, { outputCount: 3 }),
    TC136: SingleProfile(7, 'IO', 136, { ...RAW_INPUT, HW_SW_Decode: 'sw_frame', HW_scaling: false }, { encodetype: 'SW' }, { outputCount: 3 }),
    TC137: SingleProfile(7, 'IO', 137, { ...RAW_INPUT, HW_SW_Decode: 'sw_frame', HW_scaling: false }, { encodetype: 'SW' }, { outputCount: 3 }),
    TC138: SingleProfile(7, 'IO', 138, { ...RAW_INPUT, HW_SW_Decode: 'sw_frame', HW_scaling: false }, { encodetype: 'SW' }, { outputCount: 3 }),
    TC139: SingleProfile(7, 'IO', 139, { ...RAW_INPUT, HW_SW_Decode: 'sw_frame', HW_scaling: false }, { encodetype: 'SW' }, { outputCount: 3 }),
    TC140: SingleProfile(7, 'IO', 140, { ...RAW_INPUT, HW_SW_Decode: 'sw_frame', HW_scaling: false }, { encodetype: 'SW' }, { outputCount: 3 }),
    TC141: SingleProfile(7, 'IO', 141, { HW_SW_Decode: 'hw_frame', HW_scaling: true }, { encodetype: 'HW' }, { outputCount: 3 }),
    TC142: SingleProfile(7, 'IO', 142, { HW_SW_Decode: 'hw_frame', HW_scaling: true }, { encodetype: 'HW' }, { outputCount: 3 }),
    TC143: SingleProfile(7, 'IO', 143, { HW_SW_Decode: 'hw_frame', HW_scaling: true }, { encodetype: 'HW' }, { outputCount: 3 }),
    TC144: SingleProfile(7, 'IO', 144, { HW_SW_Decode: 'hw_frame', HW_scaling: true }, { encodetype: 'HW' }, { outputCount: 3 }),
    TC145: SingleProfile(7, 'IO', 145, { HW_SW_Decode: 'hw_frame', HW_scaling: true }, { encodetype: 'HW' }, { outputCount: 3 }),
    TC146: SingleProfile(7, 'IO', 146, { HW_SW_Decode: 'hw_frame', HW_scaling: true }, { encodetype: 'SW' }, { outputCount: 3 }),
    TC147: SingleProfile(7, 'IO', 147, { HW_SW_Decode: 'hw_frame', HW_scaling: true }, { encodetype: 'SW' }, { outputCount: 3 }),
    TC148: SingleProfile(7, 'IO', 148, { HW_SW_Decode: 'hw_frame', HW_scaling: true }, { encodetype: 'SW' }, { outputCount: 3 }),
    TC149: SingleProfile(7, 'IO', 149, { HW_SW_Decode: 'hw_frame', HW_scaling: true }, { encodetype: 'SW' }, { outputCount: 3 }),
    TC150: SingleProfile(7, 'IO', 140, { HW_SW_Decode: 'hw_frame', HW_scaling: true }, { encodetype: 'SW' }, { outputCount: 3 }),
    TC151: SingleProfile(7, 'IO', 151, { HW_SW_Decode: 'sw_frame', HW_scaling: false }, { encodetype: 'HW' }, { outputCount: 3 }),
    TC152: SingleProfile(7, 'IO', 152, { HW_SW_Decode: 'sw_frame', HW_scaling: false }, { encodetype: 'HW' }, { outputCount: 3 }),
    TC153: SingleProfile(7, 'IO', 153, { HW_SW_Decode: 'sw_frame', HW_scaling: false }, { encodetype: 'HW' }, { outputCount: 3 }),
    TC154: SingleProfile(7, 'IO', 154, { HW_SW_Decode: 'sw_frame', HW_scaling: false }, { encodetype: 'HW' }, { outputCount: 3 }),
    TC155: SingleProfile(7, 'IO', 155, { HW_SW_Decode: 'sw_frame', HW_scaling: false }, { encodetype: 'HW' }, { outputCount: 3 }),
    TC156: SingleProfile(7, 'IO', 156, { HW_SW_Decode: 'sw_frame', HW_scaling: false }, { encodetype: 'SW' }, { outputCount: 3 }),
    TC157: SingleProfile(7, 'IO', 157, { HW_SW_Decode: 'sw_frame', HW_scaling: false }, { encodetype: 'SW' }, { outputCount: 3 }),
    TC158: SingleProfile(7, 'IO', 158, { HW_SW_Decode: 'sw_frame', HW_scaling: false }, { encodetype: 'SW' }, { outputCount: 3 }),
    TC159: SingleProfile(7, 'IO', 159, { HW_SW_Decode: 'sw_frame', HW_scaling: false }, { encodetype: 'SW' }, { outputCount: 3 }),
    TC160: SingleProfile(7, 'IO', 160, { HW_SW_Decode: 'sw_frame', HW_scaling: false }, { encodetype: 'SW' }, { outputCount: 3 }),

};

export const SRTTORQ = {
    sourceSRTL: SingleProfile(7, 'Source', 'SRTL', { ...FILE_INPUT, HWDecoderDisable: true, HW_scaling: false }, { encodetype: 'SW' }, { outputCount: 3, srtoutportlistener: '6001' }),
    TC1: SingleProfile(7, 'SRT', 1, { ...SRT_CALLER_INPUT, HWDecoderDisable: true, HW_scaling: false }, { encodetype: 'SW' }, { outputCount: 3, jobName: '7_Source_TCSRTL', jobNameSecondary: '7_SRT_TC1' }),
    TC2: SingleProfile(7, 'SRT', 2, { ...SRT_CALLER_INPUT, HWDecoderDisable: true, HW_scaling: false }, { encodetype: 'SW' }, { outputCount: 3, jobName: '7_Source_TCSRTL', jobNameSecondary: '7_SRT_TC2' }),
    TC3: SingleProfile(7, 'SRT', 3, { ...SRT_CALLER_INPUT, HWDecoderDisable: true, HW_scaling: false }, { encodetype: 'SW' }, { outputCount: 3, jobName: '7_Source_TCSRTL', jobNameSecondary: '7_SRT_TC3' }),
    TC4: SingleProfile(7, 'SRT', 4, { ...SRT_CALLER_INPUT, HWDecoderDisable: true, HW_scaling: false }, { encodetype: 'SW' }, { outputCount: 3, jobName: '7_Source_TCSRTL', jobNameSecondary: '7_SRT_TC4', modifybitrate: '7000', }),
    TC5: SingleProfile(7, 'SRT', 5, { ...SRT_CALLER_INPUT, HWDecoderDisable: true, HW_scaling: false }, { encodetype: 'SW' }, { outputCount: 3, jobName: '7_Source_TCSRTL', jobNameSecondary: '7_SRT_TC5', modifybitrate: '3125', srtpwd: 'qwertyuiop' }),
    TC6: SingleProfile(7, 'SRT', 6, { ...SRT_CALLER_INPUT, HWDecoderDisable: true, HW_scaling: false }, { encodetype: 'SW' }, { outputCount: 3, jobName: '7_Source_TCSRTL', jobNameSecondary: '7_SRT_TC6', srtpwd: 'qwertyuiop', modifypassword: 'qwertyuiop' }),
    TC7: SingleProfile(7, 'SRT', 7, { ...SRT_CALLER_INPUT, HWDecoderDisable: true, HW_scaling: false }, { encodetype: 'SW' }, { outputCount: 3, jobName: '7_Source_TCSRTL', jobNameSecondary: '7_SRT_TC7', modifypassword: 'qwertyuiop' }),
    TC9: SingleProfile(7, 'SRT', 9, { ...SRT_CALLER_INPUT, HWDecoderDisable: true, HW_scaling: false }, { encodetype: 'SW' }, { outputCount: 3, jobName: '7_Source_TCSRTL', jobNameSecondary: '7_SRT_TC9', modifypassword: '' }),
    TC10: SingleProfile(7, 'SRT', 10, { ...SRT_CALLER_INPUT, HWDecoderDisable: true, HW_scaling: false }, { encodetype: 'SW' }, { outputCount: 3, jobName: '7_Source_TCSRTL', jobNameSecondary: '7_SRT_TC10' }),
    TC11: SingleProfile(7, 'SRT', 11, { ...SRT_CALLER_INPUT, HWDecoderDisable: true, HW_scaling: false }, { encodetype: 'SW' }, { outputCount: 3, jobName: '7_Source_TCSRTL', jobNameSecondary: '7_SRT_TC11' }),
    TC12: SingleProfile(7, 'SRT', 12, { ...SRT_CALLER_INPUT, HWDecoderDisable: true, HW_scaling: false }, { encodetype: 'SW' }, { outputCount: 3, jobName: '7_Source_TCSRTL', jobNameSecondary: '7_SRT_TC12', modifybitrate: '7000', }),
    TC13: SingleProfile(7, 'SRT', 13, { ...SRT_CALLER_INPUT, HWDecoderDisable: true, HW_scaling: false }, { encodetype: 'SW' }, { outputCount: 3, jobName: '7_Source_TCSRTL', jobNameSecondary: '7_SRT_TC13', modifybitrate: '3125', srtpwd: 'qwertyuiop' }),
    TC14: SingleProfile(7, 'SRT', 14, { ...SRT_CALLER_INPUT, HWDecoderDisable: true, HW_scaling: false }, { encodetype: 'SW' }, { outputCount: 3, jobName: '7_Source_TCSRTL', jobNameSecondary: '7_SRT_TC14', srtpwd: 'qwertyuiop', modifypassword: 'qwertyuiop' }),
    TC15: SingleProfile(7, 'SRT', 15, { ...SRT_CALLER_INPUT, HWDecoderDisable: true, HW_scaling: false }, { encodetype: 'SW' }, { outputCount: 3, jobName: '7_Source_TCSRTL', jobNameSecondary: '7_SRT_TC15', modifypassword: 'qwertyuiop' }),
    TC17: SingleProfile(7, 'SRT', 17, { ...SRT_CALLER_INPUT, HWDecoderDisable: true, HW_scaling: false }, { encodetype: 'SW' }, { outputCount: 3, jobName: '7_Source_TCSRTL', jobNameSecondary: '7_SRT_TC17', modifypassword: '' }),
    TC18: SingleProfile(7, 'SRT', 18, { ...SRT_CALLER_INPUT, HWDecoderDisable: true, HW_scaling: false }, { encodetype: 'SW' }, { outputCount: 3, jobName: '7_Source_TCSRTL', jobNameSecondary: '7_SRT_TC18' }),
    TC19: SingleProfile(7, 'SRT', 19, { ...SRT_CALLER_INPUT, HWDecoderDisable: true, HW_scaling: false }, { encodetype: 'SW' }, { outputCount: 3, jobName: '7_Source_TCSRTL', jobNameSecondary: '7_SRT_TC19' }),
    TC20: SingleProfile(7, 'SRT', 20, { ...SRT_CALLER_INPUT, HWDecoderDisable: true, HW_scaling: false }, { encodetype: 'SW' }, { outputCount: 3, jobName: '7_Source_TCSRTL', jobNameSecondary: '7_SRT_TC20', modifybitrate: '7000', }),
    TC21: SingleProfile(7, 'SRT', 21, { ...SRT_CALLER_INPUT, HWDecoderDisable: true, HW_scaling: false }, { encodetype: 'SW' }, { outputCount: 3, jobName: '7_Source_TCSRTL', jobNameSecondary: '7_SRT_TC21', modifybitrate: '3125', srtpwd: 'qwertyuiop' }),
    TC22: SingleProfile(7, 'SRT', 22, { ...SRT_CALLER_INPUT, HWDecoderDisable: true, HW_scaling: false }, { encodetype: 'SW' }, { outputCount: 3, jobName: '7_Source_TCSRTL', jobNameSecondary: '7_SRT_TC22', srtpwd: 'qwertyuiop', modifypassword: 'qwertyuiop' }),
    TC23: SingleProfile(7, 'SRT', 23, { ...SRT_CALLER_INPUT, HWDecoderDisable: true, HW_scaling: false }, { encodetype: 'SW' }, { outputCount: 3, jobName: '7_Source_TCSRTL', jobNameSecondary: '7_SRT_TC23', modifypassword: 'qwertyuiop' }),
    TC25: SingleProfile(7, 'SRT', 25, { ...SRT_CALLER_INPUT, HWDecoderDisable: true, HW_scaling: false }, { encodetype: 'SW' }, { outputCount: 3, jobName: '7_Source_TCSRTL', jobNameSecondary: '7_SRT_TC25', modifypassword: '' }),
    TC26: SingleProfile(7, 'SRT', 26, { ...SRT_CALLER_INPUT, HWDecoderDisable: true, HW_scaling: false }, { encodetype: 'SW' }, { outputCount: 3, jobName: '7_Source_TCSRTL', jobNameSecondary: '7_SRT_TC26' }),
    TC27: SingleProfile(7, 'SRT', 27, { ...SRT_CALLER_INPUT, HWDecoderDisable: true, HW_scaling: false }, { encodetype: 'SW' }, { outputCount: 3, jobName: '7_Source_TCSRTL', jobNameSecondary: '7_SRT_TC27' }),
    TC28: SingleProfile(7, 'SRT', 28, { ...SRT_CALLER_INPUT, HWDecoderDisable: true, HW_scaling: false }, { encodetype: 'SW' }, { outputCount: 3, jobName: '7_Source_TCSRTL', jobNameSecondary: '7_SRT_TC28', modifybitrate: '7000', }),
    TC29: SingleProfile(7, 'SRT', 29, { ...SRT_CALLER_INPUT, HWDecoderDisable: true, HW_scaling: false }, { encodetype: 'SW' }, { outputCount: 3, jobName: '7_Source_TCSRTL', jobNameSecondary: '7_SRT_TC29', modifybitrate: '3125', srtpwd: 'qwertyuiop' }),
    TC30: SingleProfile(7, 'SRT', 30, { ...SRT_CALLER_INPUT, HWDecoderDisable: true, HW_scaling: false }, { encodetype: 'SW' }, { outputCount: 3, jobName: '7_Source_TCSRTL', jobNameSecondary: '7_SRT_TC30', srtpwd: 'qwertyuiop', modifypassword: 'qwertyuiop' }),
    TC31: SingleProfile(7, 'SRT', 31, { ...SRT_CALLER_INPUT, HWDecoderDisable: true, HW_scaling: false }, { encodetype: 'SW' }, { outputCount: 3, jobName: '7_Source_TCSRTL', jobNameSecondary: '7_SRT_TC31', modifypassword: 'qwertyuiop' }),
    TC33: SingleProfile(7, 'SRT', 33, { ...SRT_CALLER_INPUT, HWDecoderDisable: true, HW_scaling: false }, { encodetype: 'SW' }, { outputCount: 3, jobName: '7_Source_TCSRTL', jobNameSecondary: '7_SRT_TC33', modifypassword: '' }),
    TC34: SingleProfile(7, 'SRT', 34, { ...SRT_CALLER_INPUT, HWDecoderDisable: true, HW_scaling: false }, { encodetype: 'SW' }, { outputCount: 3, jobName: '7_Source_TCSRTL', jobNameSecondary: '7_SRT_TC34' }),
    TC35: SingleProfile(7, 'SRT', 35, { ...SRT_CALLER_INPUT, HWDecoderDisable: true, HW_scaling: false }, { encodetype: 'SW' }, { outputCount: 3, jobName: '7_Source_TCSRTL', jobNameSecondary: '7_SRT_TC35' }),
    TC36: SingleProfile(7, 'SRT', 36, { ...SRT_CALLER_INPUT, HWDecoderDisable: true, HW_scaling: false }, { encodetype: 'SW' }, { outputCount: 3, jobName: '7_Source_TCSRTL', jobNameSecondary: '7_SRT_TC36', modifybitrate: '7000', }),
    TC37: SingleProfile(7, 'SRT', 37, { ...SRT_CALLER_INPUT, HWDecoderDisable: true, HW_scaling: false }, { encodetype: 'SW' }, { outputCount: 3, jobName: '7_Source_TCSRTL', jobNameSecondary: '7_SRT_TC37', modifybitrate: '3125', srtpwd: 'qwertyuiop' }),
    TC38: SingleProfile(7, 'SRT', 38, { ...SRT_CALLER_INPUT, HWDecoderDisable: true, HW_scaling: false }, { encodetype: 'SW' }, { outputCount: 3, jobName: '7_Source_TCSRTL', jobNameSecondary: '7_SRT_TC38', srtpwd: 'qwertyuiop', modifypassword: 'qwertyuiop' }),
    TC39: SingleProfile(7, 'SRT', 39, { ...SRT_CALLER_INPUT, HWDecoderDisable: true, HW_scaling: false }, { encodetype: 'SW' }, { outputCount: 3, jobName: '7_Source_TCSRTL', jobNameSecondary: '7_SRT_TC39', modifypassword: 'qwertyuiop' }),
    TC41: SingleProfile(7, 'SRT', 41, { ...SRT_LISTENER_INPUT, HWDecoderDisable: true, HW_scaling: false }, { encodetype: 'SW' }, { outputCount: 3, jobName: '7_Source_TCSRTL', jobNameSecondary: '7_SRT_TC41', modifypassword: '', srtmode: 'caller', srtoutportlistener: '6002' }),
    TC42: SingleProfile(7, 'SRT', 42, { ...SRT_LISTENER_INPUT, HWDecoderDisable: true, HW_scaling: false }, { encodetype: 'SW' }, { outputCount: 3, jobName: '7_Source_TCSRTL', jobNameSecondary: '7_SRT_TC42' }),
    TC43: SingleProfile(7, 'SRT', 43, { ...SRT_LISTENER_INPUT, HWDecoderDisable: true, HW_scaling: false }, { encodetype: 'SW' }, { outputCount: 3, jobName: '7_Source_TCSRTL', jobNameSecondary: '7_SRT_TC43' }),
    TC44: SingleProfile(7, 'SRT', 44, { ...SRT_LISTENER_INPUT, HWDecoderDisable: true, HW_scaling: false }, { encodetype: 'SW' }, { outputCount: 3, jobName: '7_Source_TCSRTL', jobNameSecondary: '7_SRT_TC44', modifybitrate: '7000', }),
    TC45: SingleProfile(7, 'SRT', 45, { ...SRT_LISTENER_INPUT, HWDecoderDisable: true, HW_scaling: false }, { encodetype: 'SW' }, { outputCount: 3, jobName: '7_Source_TCSRTL', jobNameSecondary: '7_SRT_TC45', modifybitrate: '3125', srtpwd: 'qwertyuiop' }),
    TC46: SingleProfile(7, 'SRT', 46, { ...SRT_LISTENER_INPUT, HWDecoderDisable: true, HW_scaling: false }, { encodetype: 'SW' }, { outputCount: 3, jobName: '7_Source_TCSRTL', jobNameSecondary: '7_SRT_TC46', srtpwd: 'qwertyuiop', modifypassword: 'qwertyuiop' }),
    TC47: SingleProfile(7, 'SRT', 47, { ...SRT_LISTENER_INPUT, HWDecoderDisable: true, HW_scaling: false }, { encodetype: 'SW' }, { outputCount: 3, jobName: '7_Source_TCSRTL', jobNameSecondary: '7_SRT_TC47', modifypassword: 'qwertyuiop' }),
    TC49: SingleProfile(7, 'SRT', 49, { ...SRT_LISTENER_INPUT, HWDecoderDisable: true, HW_scaling: false }, { encodetype: 'SW' }, { outputCount: 3, jobName: '7_Source_TCSRTL', jobNameSecondary: '7_SRT_TC49', modifypassword: '' }),
    TC50: SingleProfile(7, 'SRT', 50, { ...SRT_LISTENER_INPUT, HWDecoderDisable: true, HW_scaling: false }, { encodetype: 'SW' }, { outputCount: 3, jobName: '7_Source_TCSRTL', jobNameSecondary: '7_SRT_TC50' }),
    TC51: SingleProfile(7, 'SRT', 51, { ...SRT_LISTENER_INPUT, HWDecoderDisable: true, HW_scaling: false }, { encodetype: 'SW' }, { outputCount: 3, jobName: '7_Source_TCSRTL', jobNameSecondary: '7_SRT_TC51' }),
    TC52: SingleProfile(7, 'SRT', 52, { ...SRT_LISTENER_INPUT, HWDecoderDisable: true, HW_scaling: false }, { encodetype: 'SW' }, { outputCount: 3, jobName: '7_Source_TCSRTL', jobNameSecondary: '7_SRT_TC52', modifybitrate: '7000', }),
    TC53: SingleProfile(7, 'SRT', 53, { ...SRT_LISTENER_INPUT, HWDecoderDisable: true, HW_scaling: false }, { encodetype: 'SW' }, { outputCount: 3, jobName: '7_Source_TCSRTL', jobNameSecondary: '7_SRT_TC53', modifybitrate: '3125', srtpwd: 'qwertyuiop' }),
    TC54: SingleProfile(7, 'SRT', 54, { ...SRT_LISTENER_INPUT, HWDecoderDisable: true, HW_scaling: false }, { encodetype: 'SW' }, { outputCount: 3, jobName: '7_Source_TCSRTL', jobNameSecondary: '7_SRT_TC54', srtpwd: 'qwertyuiop', modifypassword: 'qwertyuiop' }),
    TC55: SingleProfile(7, 'SRT', 55, { ...SRT_LISTENER_INPUT, HWDecoderDisable: true, HW_scaling: false }, { encodetype: 'SW' }, { outputCount: 3, jobName: '7_Source_TCSRTL', jobNameSecondary: '7_SRT_TC55', modifypassword: 'qwertyuiop' }),
    TC57: SingleProfile(7, 'SRT', 57, { ...SRT_LISTENER_INPUT, HWDecoderDisable: true, HW_scaling: false }, { encodetype: 'SW' }, { outputCount: 3, jobName: '7_Source_TCSRTL', jobNameSecondary: '7_SRT_TC57', modifypassword: '' }),
    TC58: SingleProfile(7, 'SRT', 58, { ...SRT_LISTENER_INPUT, HWDecoderDisable: true, HW_scaling: false }, { encodetype: 'SW' }, { outputCount: 3, jobName: '7_Source_TCSRTL', jobNameSecondary: '7_SRT_TC58' }),
    TC59: SingleProfile(7, 'SRT', 59, { ...SRT_LISTENER_INPUT, HWDecoderDisable: true, HW_scaling: false }, { encodetype: 'SW' }, { outputCount: 3, jobName: '7_Source_TCSRTL', jobNameSecondary: '7_SRT_TC59' }),
    TC60: SingleProfile(7, 'SRT', 60, { ...SRT_LISTENER_INPUT, HWDecoderDisable: true, HW_scaling: false }, { encodetype: 'SW' }, { outputCount: 3, jobName: '7_Source_TCSRTL', jobNameSecondary: '7_SRT_TC60', modifybitrate: '7000', }),
    TC61: SingleProfile(7, 'SRT', 61, { ...SRT_LISTENER_INPUT, HWDecoderDisable: true, HW_scaling: false }, { encodetype: 'SW' }, { outputCount: 3, jobName: '7_Source_TCSRTL', jobNameSecondary: '7_SRT_TC61', modifybitrate: '3125', srtpwd: 'qwertyuiop' }),
    TC62: SingleProfile(7, 'SRT', 62, { ...SRT_LISTENER_INPUT, HWDecoderDisable: true, HW_scaling: false }, { encodetype: 'SW' }, { outputCount: 3, jobName: '7_Source_TCSRTL', jobNameSecondary: '7_SRT_TC62', srtpwd: 'qwertyuiop', modifypassword: 'qwertyuiop' }),
    TC63: SingleProfile(7, 'SRT', 63, { ...SRT_LISTENER_INPUT, HWDecoderDisable: true, HW_scaling: false }, { encodetype: 'SW' }, { outputCount: 3, jobName: '7_Source_TCSRTL', jobNameSecondary: '7_SRT_TC63', modifypassword: 'qwertyuiop' }),
    TC65: SingleProfile(7, 'SRT', 65, { ...SRT_LISTENER_INPUT, HWDecoderDisable: true, HW_scaling: false }, { encodetype: 'SW' }, { outputCount: 3, jobName: '7_Source_TCSRTL', jobNameSecondary: '7_SRT_TC65', modifypassword: '' }),
    TC66: SingleProfile(7, 'SRT', 66, { ...SRT_LISTENER_INPUT, HWDecoderDisable: true, HW_scaling: false }, { encodetype: 'SW' }, { outputCount: 3, jobName: '7_Source_TCSRTL', jobNameSecondary: '7_SRT_TC66' }),
    TC67: SingleProfile(7, 'SRT', 67, { ...SRT_LISTENER_INPUT, HWDecoderDisable: true, HW_scaling: false }, { encodetype: 'SW' }, { outputCount: 3, jobName: '7_Source_TCSRTL', jobNameSecondary: '7_SRT_TC67' }),
    TC68: SingleProfile(7, 'SRT', 68, { ...SRT_LISTENER_INPUT, HWDecoderDisable: true, HW_scaling: false }, { encodetype: 'SW' }, { outputCount: 3, jobName: '7_Source_TCSRTL', jobNameSecondary: '7_SRT_TC68', modifybitrate: '7000', }),
    TC69: SingleProfile(7, 'SRT', 69, { ...SRT_LISTENER_INPUT, HWDecoderDisable: true, HW_scaling: false }, { encodetype: 'SW' }, { outputCount: 3, jobName: '7_Source_TCSRTL', jobNameSecondary: '7_SRT_TC69', modifybitrate: '3125', srtpwd: 'qwertyuiop' }),
    TC70: SingleProfile(7, 'SRT', 70, { ...SRT_LISTENER_INPUT, HWDecoderDisable: true, HW_scaling: false }, { encodetype: 'SW' }, { outputCount: 3, jobName: '7_Source_TCSRTL', jobNameSecondary: '7_SRT_TC70', srtpwd: 'qwertyuiop', modifypassword: 'qwertyuiop' }),
    TC71: SingleProfile(7, 'SRT', 71, { ...SRT_LISTENER_INPUT, HWDecoderDisable: true, HW_scaling: false }, { encodetype: 'SW' }, { outputCount: 3, jobName: '7_Source_TCSRTL', jobNameSecondary: '7_SRT_TC71', modifypassword: 'qwertyuiop' }),
    TC73: SingleProfile(7, 'SRT', 73, { ...SRT_LISTENER_INPUT, HWDecoderDisable: true, HW_scaling: false }, { encodetype: 'SW' }, { outputCount: 3, jobName: '7_Source_TCSRTL', jobNameSecondary: '7_SRT_TC73', modifypassword: '' }),
    TC74: SingleProfile(7, 'SRT', 74, { ...SRT_LISTENER_INPUT, HWDecoderDisable: true, HW_scaling: false }, { encodetype: 'SW' }, { outputCount: 3, jobName: '7_Source_TCSRTL', jobNameSecondary: '7_SRT_TC74' }),
    TC75: SingleProfile(7, 'SRT', 75, { ...SRT_LISTENER_INPUT, HWDecoderDisable: true, HW_scaling: false }, { encodetype: 'SW' }, { outputCount: 3, jobName: '7_Source_TCSRTL', jobNameSecondary: '7_SRT_TC75' }),
    TC76: SingleProfile(7, 'SRT', 76, { ...SRT_LISTENER_INPUT, HWDecoderDisable: true, HW_scaling: false }, { encodetype: 'SW' }, { outputCount: 3, jobName: '7_Source_TCSRTL', jobNameSecondary: '7_SRT_TC76', modifybitrate: '7000', }),
    TC77: SingleProfile(7, 'SRT', 77, { ...SRT_LISTENER_INPUT, HWDecoderDisable: true, HW_scaling: false }, { encodetype: 'SW' }, { outputCount: 3, jobName: '7_Source_TCSRTL', jobNameSecondary: '7_SRT_TC77', modifybitrate: '3125', srtpwd: 'qwertyuiop' }),
    TC78: SingleProfile(7, 'SRT', 78, { ...SRT_LISTENER_INPUT, HWDecoderDisable: true, HW_scaling: false }, { encodetype: 'SW' }, { outputCount: 3, jobName: '7_Source_TCSRTL', jobNameSecondary: '7_SRT_TC78', srtpwd: 'qwertyuiop', modifypassword: 'qwertyuiop' }),
    TC79: SingleProfile(7, 'SRT', 79, { ...SRT_LISTENER_INPUT, HWDecoderDisable: true, HW_scaling: false }, { encodetype: 'SW' }, { outputCount: 3, jobName: '7_Source_TCSRTL', jobNameSecondary: '7_SRT_TC79', modifypassword: 'qwertyuiop' }),
};
export const HLSTORQ = {
    TC00: SingleProfile(12, 'HLS', 10, { ...FILE_INPUT, HWDecoderDisable: true, HW_scaling: false }, { encodetype: 'SW' }, { outputCount: 3, jobName: 'JOB_TORQ_7' }),
    sourceHLS: SingleProfile(7, 'Source', 'SRTL', { ...FILE_INPUT, HWDecoderDisable: true, HW_scaling: false }, { encodetype: 'SW' }, { outputCount: 3, srtoutportlistener: '6001' }),
    TC1: SingleProfile(12, 'HLS', 1, { ...FILE_INPUT, HWDecoderDisable: true, HW_scaling: false }, { encodetype: 'SW' }, { outputCount: 3, jobName: '12_HLS_TC1' }),
    TC2: MultiProfile(12, 'HLS', 2, { ...FILE_INPUT, HWDecoderDisable: true, HW_scaling: false }, { encodetype: 'SW' }, { outputCount: 6, jobName: '12_HLS_TC2', AddVarient: true }),
    TC3: SingleProfile(12, 'HLS', 3, { ...FILE_INPUT, HWDecoderDisable: true, HW_scaling: false }, { encodetype: 'SW' }, { outputCount: 3, jobName: '12_HLS_TC3', chunkDuration: '8000' }),
    TC4: SingleProfile(12, 'HLS', 4, { ...FILE_INPUT, HWDecoderDisable: true, HW_scaling: false }, { encodetype: 'SW' }, { outputCount: 3, jobName: '12_HLS_TC4', chunkCount: '6000' }),
    TC6: SingleProfile(12, 'HLS', 6, { ...FILE_INPUT, HWDecoderDisable: true, HW_scaling: false }, { encodetype: 'SW' }, { outputCount: 3, jobName: '12_HLS_TC6', OverwriteOldFile: true, TestCase: '12_HLS_TC6HLS', chunkname: 'profile_0_media_00002.ts' }),
    TC10: SingleProfile(12, 'HLS', 10, { ...FILE_INPUT, HWDecoderDisable: true, HW_scaling: false }, { encodetype: 'SW' }, { outputCount: 3, jobName: '12_HLS_TC10' }),
    TC11: SingleProfile(12, 'HLS', 11, { ...UDP_INPUT, HWDecoderDisable: true, HW_scaling: false }, { encodetype: 'SW' }, { outputCount: 3, }),
    TC12: MultiProfile(12, 'HLS', 12, { ...UDP_INPUT, HWDecoderDisable: true, HW_scaling: false }, { encodetype: 'SW' }, { outputCount: 6, jobName: '12_HLS_TC12', AddVarient: true }),
    TC13: SingleProfile(12, 'HLS', 13, { ...UDP_INPUT, HWDecoderDisable: true, HW_scaling: false }, { encodetype: 'SW' }, { outputCount: 3, jobName: '12_HLS_TC13', chunkDuration: '8000' }),
    TC14: SingleProfile(12, 'HLS', 14, { ...UDP_INPUT, HWDecoderDisable: true, HW_scaling: false }, { encodetype: 'SW' }, { outputCount: 3, jobName: '12_HLS_TC14', chunkCount: '6000' }),
    TC16: SingleProfile(12, 'HLS', 16, { ...UDP_INPUT, HWDecoderDisable: true, HW_scaling: false }, { encodetype: 'SW' }, { outputCount: 3, jobName: '12_HLS_TC16', OverwriteOldFile: true, TestCase: '12_HLS_TC16HLS', chunkname: 'profile_0_media_00002.ts' }),
    TC20: SingleProfile(12, 'HLS', 20, { ...UDP_INPUT, HWDecoderDisable: true, HW_scaling: false }, { encodetype: 'SW' }, { outputCount: 3, jobName: '12_HLS_TC20' }),
    TC21: SingleProfile(12, 'HLS', 21, { ...SRT_CALLER_INPUT, HWDecoderDisable: true, HW_scaling: false }, { encodetype: 'SW' }, { outputCount: 3 }),
    TC22: MultiProfile(12, 'HLS', 22, { ...SRT_CALLER_INPUT, HWDecoderDisable: true, HW_scaling: false }, { encodetype: 'SW' }, { outputCount: 6, jobName: '12_HLS_TC22', AddVarient: true }),
    TC23: SingleProfile(12, 'HLS', 23, { ...SRT_CALLER_INPUT, HWDecoderDisable: true, HW_scaling: false }, { encodetype: 'SW' }, { outputCount: 3, jobName: '12_HLS_TC23', chunkDuration: '8000' }),
    TC24: SingleProfile(12, 'HLS', 24, { ...SRT_CALLER_INPUT, HWDecoderDisable: true, HW_scaling: false }, { encodetype: 'SW' }, { outputCount: 3, jobName: '12_HLS_TC24', chunkCount: '6000' }),
    TC26: SingleProfile(12, 'HLS', 26, { ...SRT_CALLER_INPUT, HWDecoderDisable: true, HW_scaling: false }, { encodetype: 'SW' }, { outputCount: 3, jobName: '12_HLS_TC26', OverwriteOldFile: true, TestCase: '12_HLS_TC26HLS', chunkname: 'profile_0_media_00002.ts' }),
    TC30: SingleProfile(12, 'HLS', 30, { ...SRT_CALLER_INPUT, HWDecoderDisable: true, HW_scaling: false }, { encodetype: 'SW' }, { outputCount: 3, jobName: '12_HLS_TC30' }),
    TC31: SingleProfile(12, 'HLS', 31, { ...RTMP_INPUT, HWDecoderDisable: true, HW_scaling: false }, { encodetype: 'SW' }, { outputCount: 3 }),
    TC32: MultiProfile(12, 'HLS', 32, { ...RTMP_INPUT, HWDecoderDisable: true, HW_scaling: false }, { encodetype: 'SW' }, { outputCount: 6, jobName: '12_HLS_TC32', AddVarient: true }),
    TC33: SingleProfile(12, 'HLS', 33, { ...RTMP_INPUT, HWDecoderDisable: true, HW_scaling: false }, { encodetype: 'SW' }, { outputCount: 3, jobName: '12_HLS_TC33', chunkDuration: '8000' }),
    TC34: SingleProfile(12, 'HLS', 34, { ...RTMP_INPUT, HWDecoderDisable: true, HW_scaling: false }, { encodetype: 'SW' }, { outputCount: 3, jobName: '12_HLS_TC34', chunkCount: '6000' }),
    TC36: SingleProfile(12, 'HLS', 36, { ...RTMP_INPUT, HWDecoderDisable: true, HW_scaling: false }, { encodetype: 'SW' }, { outputCount: 3, jobName: '12_HLS_TC36', OverwriteOldFile: true, TestCase: '12_HLS_TC36HLS', chunkname: 'profile_0_media_00002.ts' }),
    TC40: SingleProfile(12, 'HLS', 40, { ...RTMP_INPUT, HWDecoderDisable: true, HW_scaling: false }, { encodetype: 'SW' }, { outputCount: 3, jobName: '12_HLS_TC40' }),


};



export const RTMPTORQ = {
    TC1: SingleProfile(12, 'RTMP', 1, { ...FILE_INPUT, HWDecoderDisable: true, HW_scaling: false }, { encodetype: 'SW' }, { outputCount: 3, jobName: '12_RTMP_TC1' }),

};
export const ProfileParams = {
    TC1: SingleProfile(26, 'PP', 1, { ...UDP_INPUT, HWDecoderDisable: true, HW_scaling: false }, { encodetype: 'SW' }, { resValue: '144p', outputCount: 3, jobName: '1_PP_TC1', modifybitrate: '585' }),
    TC2: SingleProfile(26, 'PP', 2, { ...UDP_INPUT, HWDecoderDisable: true, HW_scaling: false }, { encodetype: 'SW' }, { resValue: '240p', outputCount: 3, jobName: '1_PP_TC2', modifybitrate: '987' }),
    TC3: SingleProfile(26, 'PP', 3, { ...UDP_INPUT, HWDecoderDisable: true, HW_scaling: false }, { encodetype: 'SW' }, { resValue: '360p', outputCount: 3, jobName: '1_PP_TC3', modifybitrate: '1590' }),
    TC4: SingleProfile(26, 'PP', 4, { ...UDP_INPUT, HWDecoderDisable: true, HW_scaling: false }, { encodetype: 'SW' }, { resValue: '480p', outputCount: 3, jobName: '1_PP_TC4', modifybitrate: '2175' }),
    TC5: SingleProfile(26, 'PP', 5, { ...UDP_INPUT, HWDecoderDisable: true, HW_scaling: false }, { encodetype: 'SW' }, { resValue: '720p', outputCount: 3, jobName: '1_PP_TC5', modifybitrate: '3275' }),
    TC6: SingleProfile(26, 'PP', 6, { ...UDP_INPUT, HWDecoderDisable: true, HW_scaling: false }, { encodetype: 'SW' }, { resValue: '1080i/1080p', outputCount: 3, jobName: '1_PP_TC6', modifybitrate: '7125' }),
    TC7: SingleProfile(26, 'PP', 7, { ...UDP_INPUT, HWDecoderDisable: true, HW_scaling: false }, { encodetype: 'SW' }, { resValue: '480i', outputCount: 3, jobName: '1_PP_TC7', modifybitrate: '7125' }),
    TC8: SingleProfile(26, 'PP', 8, { ...UDP_INPUT, HWDecoderDisable: true, HW_scaling: false }, { encodetype: 'SW' }, { resValue: '576i', outputCount: 3, jobName: '1_PP_TC8', modifybitrate: '2175' }),
    TC9: SingleProfile(26, 'PP', 9, { ...UDP_INPUT, HWDecoderDisable: true, HW_scaling: false }, { encodetype: 'SW' }, { resValue: '2160p UHD', outputCount: 3, jobName: '1_PP_TC9', modifybitrate: '11525' }),
    TC10: SingleProfile(26, 'PP', 10, { ...UDP_INPUT, HWDecoderDisable: true, HW_scaling: false }, { encodetype: 'SW' }, { resValue: '4k DCI', outputCount: 3, jobName: '1_PP_TC10', modifybitrate: '11525' }),
    TC11: SingleProfile(26, 'PP', 11, { ...UDP_INPUT, HWDecoderDisable: true, HW_scaling: false }, { encodetype: 'SW' }, { resValue: 'custom', outputCount: 3, jobName: '1_PP_TC11', modifybitrate: '2175' }),
    TC12: SingleProfile(26, 'PP', 12, { ...UDP_INPUT, HWDecoderDisable: true, HW_scaling: false }, { encodetype: 'HW' }, { outputCount: 3, jobName: '1_PP_TC12' }),
    TC13: SingleProfile(26, 'PP', 13, { ...UDP_INPUT, HWDecoderDisable: true, HW_scaling: false }, { encodetype: 'SW' }, { outputCount: 3, jobName: '1_PP_TC13' }),
    TC14: SingleProfile(26, 'PP', 14, { ...UDP_INPUT, HWDecoderDisable: true, HW_scaling: false }, { encodetype: 'SW' }, { framrateval: '23.976', outputCount: 3, jobName: '1_PP_TC14' }),
    TC15: SingleProfile(26, 'PP', 15, { ...UDP_INPUT, HWDecoderDisable: true, HW_scaling: false }, { encodetype: 'SW' }, { framrateval: '24', outputCount: 3, jobName: '1_PP_TC15' }),
    TC16: SingleProfile(26, 'PP', 16, { ...UDP_INPUT, HWDecoderDisable: true, HW_scaling: false }, { encodetype: 'SW' }, { framrateval: '25', outputCount: 3, jobName: '1_PP_TC16' }),
    TC17: SingleProfile(26, 'PP', 17, { ...UDP_INPUT, HWDecoderDisable: true, HW_scaling: false }, { encodetype: 'SW' }, { framrateval: '30', outputCount: 3, jobName: '1_PP_TC17' }),
    TC18: SingleProfile(26, 'PP', 18, { ...UDP_INPUT, HWDecoderDisable: true, HW_scaling: false }, { encodetype: 'SW' }, { framrateval: '60', outputCount: 3, jobName: '1_PP_TC18' }),
    TC19: SingleProfile(26, 'PP', 19, { ...UDP_INPUT, HWDecoderDisable: true, HW_scaling: false }, { encodetype: 'SW' }, { framrateval: 'custom', customframerate: '45', outputCount: 3, jobName: '1_PP_TC19' }),
    TC20: SingleProfile(26, 'PP', 20, { ...UDP_INPUT, HWDecoderDisable: true, HW_scaling: false }, { encodetype: 'SW' }, { Scalingtype: 'LOW_COMPLEXITY', outputCount: 3, jobName: '1_PP_TC20' }),
    TC21: SingleProfile(26, 'PP', 21, { ...UDP_INPUT, HWDecoderDisable: true, HW_scaling: false }, { encodetype: 'SW' }, { Scalingtype: 'HIGH_QUALITY', outputCount: 3, jobName: '1_PP_TC21' }),
    TC22: SingleProfile(26, 'PP', 22, { ...UDP_INPUT, HWDecoderDisable: true, HW_scaling: false }, { encodetype: 'SW' }, { Scalingtype: 'Anti alias', outputCount: 3, jobName: '1_PP_TC22' }),
    TC23: SingleProfile(26, 'PP', 23, { ...UDP_INPUT, HWDecoderDisable: true, HW_scaling: false }, { encodetype: 'SW' }, { Scalingtype: 'SINC', outputCount: 3, jobName: '1_PP_TC23' }),
    TC24: SingleProfile(26, 'PP', 24, { ...UDP_INPUT, HWDecoderDisable: true, HW_scaling: false }, { encodetype: 'SW' }, { Scalingtype: 'FAST_BILINEAR', outputCount: 3, jobName: '1_PP_TC24' }),
    TC25: SingleProfile(26, 'PP', 25, { ...UDP_INPUT, HWDecoderDisable: true, HW_scaling: false }, { encodetype: 'SW' }, { Scalingtype: 'BILINEAR', outputCount: 3, jobName: '1_PP_TC25' }),
    TC26: SingleProfile(26, 'PP', 26, { ...UDP_INPUT, HWDecoderDisable: true, HW_scaling: false }, { encodetype: 'SW' }, { Scalingtype: 'BICUBIC', outputCount: 3, jobName: '1_PP_TC26' }),
    TC31: SingleProfile(26, 'PP', 31, { ...UDP_INPUT, HWDecoderDisable: true, HW_scaling: false }, { encodetype: 'SW' }, { darwidthval: '4', darheightval: '3', outputCount: 3, jobName: '1_PP_TC26' }),
    TC32: SingleProfile(26, 'PP', 32, { ...UDP_INPUT, HWDecoderDisable: true, HW_scaling: false }, { encodetype: 'SW' }, { darwidthval: '16', darheightval: '9', outputCount: 3, jobName: '1_PP_TC26' }),

    TC33: SingleProfile(26, 'PP', 33, { ...UDP_INPUT, HWDecoderDisable: false, HW_scaling: true }, { encodetype: 'HW' }, { goppresetindexval: '-1', outputCount: 3, jobName: '1_PP_TC26' }),
    TC34: SingleProfile(26, 'PP', 34, { ...UDP_INPUT, HWDecoderDisable: false, HW_scaling: true }, { encodetype: 'HW' }, { goppresetindexval: '0', outputCount: 3, jobName: '1_PP_TC26' }),
    TC35: SingleProfile(26, 'PP', 35, { ...UDP_INPUT, HWDecoderDisable: false, HW_scaling: true }, { encodetype: 'HW' }, { goppresetindexval: '1', outputCount: 3, jobName: '1_PP_TC26' }),
    TC36: SingleProfile(26, 'PP', 36, { ...UDP_INPUT, HWDecoderDisable: false, HW_scaling: true }, { encodetype: 'HW' }, { goppresetindexval: '3', outputCount: 3, jobName: '1_PP_TC26' }),
    TC37: SingleProfile(26, 'PP', 37, { ...UDP_INPUT, HWDecoderDisable: false, HW_scaling: true }, { encodetype: 'HW' }, { goppresetindexval: '4', outputCount: 3, jobName: '1_PP_TC26' }),
    TC38: SingleProfile(26, 'PP', 38, { ...UDP_INPUT, HWDecoderDisable: false, HW_scaling: true }, { encodetype: 'HW' }, { goppresetindexval: '5', outputCount: 3, jobName: '1_PP_TC26' }),
    TC39: SingleProfile(26, 'PP', 39, { ...UDP_INPUT, HWDecoderDisable: false, HW_scaling: true }, { encodetype: 'HW' }, { goppresetindexval: '7', outputCount: 3, jobName: '1_PP_TC26' }),
    TC40: SingleProfile(26, 'PP', 40, { ...UDP_INPUT, HWDecoderDisable: false, HW_scaling: true }, { encodetype: 'HW' }, { goppresetindexval: '8', outputCount: 3, jobName: '1_PP_TC26' }),
    TC41: SingleProfile(26, 'PP', 41, { ...UDP_INPUT, HWDecoderDisable: false, HW_scaling: true }, { encodetype: 'HW' }, { goppresetindexval: '9', outputCount: 3, jobName: '1_PP_TC26' }),
    TC42: SingleProfile(26, 'PP', 42, { ...UDP_INPUT, HWDecoderDisable: false, HW_scaling: true }, { encodetype: 'HW' }, { goppresetindexval: '10', outputCount: 3, jobName: '1_PP_TC26' }),

    TC42: SingleProfile(26, 'PP', 42, { ...UDP_INPUT, HWDecoderDisable: true, HW_scaling: false }, { encodetype: 'SW' }, { GOPval: '50', outputCount: 3, jobName: '1_PP_TC42' }),
    TC43: SingleProfile(26, 'PP', 43, { ...UDP_INPUT, HWDecoderDisable: true, HW_scaling: false }, { encodetype: 'SW' }, { bitrate: true, outputCount: 3, jobName: '1_PP_TC43' }),
    TC44: SingleProfile(26, 'PP', 44, { ...UDP_INPUT, HWDecoderDisable: false, HW_scaling: true }, { encodetype: 'HW' }, { vbvmaxrateval: true, outputCount: 3, jobName: '1_PP_TC43' }),
    TC45: SingleProfile(26, 'PP', 45, { ...UDP_INPUT, HWDecoderDisable: true, HW_scaling: false }, { encodetype: 'SW' }, { ratecontrolmodeval: 'CBR', outputCount: 3, jobName: '1_PP_TC43' }),
    TC46: SingleProfile(26, 'PP', 46, { ...UDP_INPUT, HWDecoderDisable: true, HW_scaling: false }, { encodetype: 'SW' }, { ratecontrolmodeval: 'VBR', outputCount: 3, jobName: '1_PP_TC43' }),
    TC47: SingleProfile(26, 'PP', 47, { ...UDP_INPUT, HWDecoderDisable: true, HW_scaling: false }, { encodetype: 'SW' }, { ratecontrolmodeval: 'CVBR', outputCount: 3, jobName: '1_PP_TC43' }),
    TC48: SingleProfile(26, 'PP', 48, { ...UDP_INPUT, HWDecoderDisable: true, HW_scaling: false }, { encodetype: 'SW' }, { ratecontrolmodeval: 'CQP', outputCount: 3, jobName: '1_PP_TC43' }),
    TC49: SingleProfile(26, 'PP', 49, { ...UDP_INPUT, HWDecoderDisable: true, HW_scaling: false }, { encodetype: 'SW' }, { bufferdelayval: true, outputCount: 3, jobName: '1_PP_TC43' }),
    TC50: SingleProfile(26, 'PP', 50, { ...UDP_INPUT, HWDecoderDisable: true, HW_scaling: false }, { encodetype: 'SW' }, { profilecodec: 'baseline', outputCount: 3, jobName: '1_PP_TC43' }),
    TC51: SingleProfile(26, 'PP', 51, { ...UDP_INPUT, HWDecoderDisable: true, HW_scaling: false }, { encodetype: 'SW' }, { profilecodec: 'main', outputCount: 3, jobName: '1_PP_TC43' }),
    TC52: SingleProfile(26, 'PP', 52, { ...UDP_INPUT, HWDecoderDisable: true, HW_scaling: false }, { encodetype: 'SW' }, { profilecodec: 'high', outputCount: 3, jobName: '1_PP_TC43' }),
    TC53: SingleProfile(26, 'PP', 53, { ...UDP_INPUT, HWDecoderDisable: true, HW_scaling: false }, { encodetype: 'SW' }, { profilecodec: 'high10', outputCount: 3, jobName: '1_PP_TC43' }),
    TC54: SingleProfile(26, 'PP', 54, { ...UDP_INPUT, HWDecoderDisable: true, HW_scaling: false }, { encodetype: 'SW' }, { levelval: '0', outputCount: 3, jobName: '1_PP_TC43' }),
    TC55: SingleProfile(26, 'PP', 55, { ...UDP_INPUT, HWDecoderDisable: false, HW_scaling: true }, { encodetype: 'HW' }, { rcenablestatus: true, outputCount: 3, jobName: '1_PP_TC43' }),
    TC56: SingleProfile(26, 'PP', 56, { ...UDP_INPUT, HWDecoderDisable: false, HW_scaling: true }, { encodetype: 'HW' }, { minframedelaystatus: true, outputCount: 3, jobName: '1_PP_TC43' }),
    TC56: SingleProfile(26, 'PP', 56, { ...UDP_INPUT, HWDecoderDisable: false, HW_scaling: true }, { encodetype: 'HW' }, { minframedelaystatus: true, outputCount: 3, jobName: '1_PP_TC43' }),
    TC1AC: SingleProfile(26, 'PP', '1AC', { ...UDP_INPUT, HWDecoderDisable: true, HW_scaling: false }, { encodetype: 'SW' }, { audioratecontrolval: 'CBR', outputCount: 3, jobName: '1_PP_TC43' }),
    TC2AC: SingleProfile(26, 'PP', '2AC', { ...UDP_INPUT, HWDecoderDisable: true, HW_scaling: false }, { encodetype: 'SW' }, { audioratecontrolval: 'VBR', outputCount: 3, jobName: '1_PP_TC43' }),
    TC3AC: SingleProfile(26, 'PP', '3AC', { ...UDP_INPUT, HWDecoderDisable: true, HW_scaling: false }, { encodetype: 'SW' }, { audioratecontrolval: 'CVBR', outputCount: 3, jobName: '1_PP_TC43' }),
    TC4AC: SingleProfile(26, 'PP', '4AC', { ...UDP_INPUT, HWDecoderDisable: true, HW_scaling: false }, { encodetype: 'SW' }, { audiobitrateval: '128', outputCount: 3, jobName: '1_PP_TC43' }),
    TC5AC: SingleProfile(26, 'PP', '5AC', { ...UDP_INPUT, HWDecoderDisable: true, HW_scaling: false }, { encodetype: 'SW' }, { audioacompliancedropval: false, audioratecontrolval: 'LC', outputCount: 3, jobName: '1_PP_TC43' }),
    TC6AC: SingleProfile(26, 'PP', '6AC', { ...UDP_INPUT, HWDecoderDisable: true, HW_scaling: false }, { encodetype: 'SW' }, { audioacompliancedropval: 'Strict Compliance', audioprofiledropval: 'HE', outputCount: 3, jobName: '1_PP_TC43' }),
    TC7AC: SingleProfile(26, 'PP', '7AC', { ...UDP_INPUT, HWDecoderDisable: true, HW_scaling: false }, { encodetype: 'SW' }, { audioacompliancedropval: 'Strict Compliance', audioprofiledropval: 'HEv2', outputCount: 3, jobName: '1_PP_TC43' }),
    TC8AC: SingleProfile(26, 'PP', '8AC', { ...UDP_INPUT, HWDecoderDisable: true, HW_scaling: false }, { encodetype: 'SW' }, { audioresampleval: '8000', outputCount: 3, jobName: '1_PP_TC43' }),
    TC9AC: SingleProfile(26, 'PP', '9AC', { ...UDP_INPUT, HWDecoderDisable: true, HW_scaling: false }, { encodetype: 'SW' }, { audioresampleval: '11025', outputCount: 3, jobName: '1_PP_TC43' }),
    TC10AC: SingleProfile(26, 'PP', '10AC', { ...UDP_INPUT, HWDecoderDisable: true, HW_scaling: false }, { encodetype: 'SW' }, { audioresampleval: '16000', outputCount: 3, jobName: '1_PP_TC43' }),
    TC11AC: SingleProfile(26, 'PP', '11AC', { ...UDP_INPUT, HWDecoderDisable: true, HW_scaling: false }, { encodetype: 'SW' }, { audioresampleval: '22050', outputCount: 3, jobName: '1_PP_TC43' }),
    TC12AC: SingleProfile(26, 'PP', '12AC', { ...UDP_INPUT, HWDecoderDisable: true, HW_scaling: false }, { encodetype: 'SW' }, { audioresampleval: '24000', outputCount: 3, jobName: '1_PP_TC43' }),
    TC13AC: SingleProfile(26, 'PP', '13AC', { ...UDP_INPUT, HWDecoderDisable: true, HW_scaling: false }, { encodetype: 'SW' }, { audioresampleval: '32000', outputCount: 3, jobName: '1_PP_TC43' }),
    TC14AC: SingleProfile(26, 'PP', '14AC', { ...UDP_INPUT, HWDecoderDisable: true, HW_scaling: false }, { encodetype: 'SW' }, { audioresampleval: '44100', outputCount: 3, jobName: '1_PP_TC43' }),
    TC15AC: SingleProfile(26, 'PP', '15AC', { ...UDP_INPUT, HWDecoderDisable: true, HW_scaling: false }, { encodetype: 'SW' }, { audioresampleval: '48000', outputCount: 3, jobName: '1_PP_TC43' }),
    TC16AC: SingleProfile(26, 'PP', '16AC', { ...UDP_INPUT, HWDecoderDisable: true, HW_scaling: false }, { encodetype: 'SW' }, { audioresampleval: '96000', outputCount: 3, jobName: '1_PP_TC43' }),
    TC17AC: SingleProfile(26, 'PP', '17AC', { ...UDP_INPUT, HWDecoderDisable: true, HW_scaling: false }, { encodetype: 'SW' }, { audiostreamformatedropval: 'AUTO', outputCount: 3, jobName: '1_PP_TC43' }),
    TC18AC: SingleProfile(26, 'PP', '18AC', { ...UDP_INPUT, HWDecoderDisable: true, HW_scaling: false }, { encodetype: 'SW' }, { audiostreamformatedropval: 'RAW', outputCount: 3, jobName: '1_PP_TC43' }),
    TC19AC: SingleProfile(26, 'PP', '19AC', { ...UDP_INPUT, HWDecoderDisable: true, HW_scaling: false }, { encodetype: 'SW' }, { audiostreamformatedropval: 'ADTS', outputCount: 3, jobName: '1_PP_TC43' }),
    TC20AC: SingleProfile(26, 'PP', '20AC', { ...UDP_INPUT, HWDecoderDisable: true, HW_scaling: false }, { encodetype: 'SW' }, { audioacompliancedropval: 'Strict Compliance', audioratecontrolval: 'HEv2', outputCount: 3, jobName: '1_PP_TC43' }),

};
export const TestDataAlice = {
    username: "alice",
    password: "Pixfix@123",
    baseURL: "http://10.0.90.64/",
    dashboardURL: "http://10.0.90.64/#/dashboardMain"
};
export const TestDataSuperAdmin = {
    Susername: "support@riversilica.com",
    Spassword: "PixFlex@9999",
    SbaseURL: "http://10.0.90.64/",
    SdashboardURL: "http://10.0.90.64/#/dashboardMain"
};
export const TestDataloginAdmin = {
    Ausername: "TORQADMIN",
    Apassword: "Pixfix@123",
    AbaseURL: "http://10.0.90.64/",
    AdashboardURL: "http://10.0.90.64/#/dashboardMain"
};
export const TestDataloginUser = {
    Uusername: "alice",
    Upassword: "Pixfix@123",
    UbaseURL: "http://10.0.90.64/",
    UdashboardURL: "http://10.0.90.64/#/dashboardMain"
};

export const TestDatalogoutURL = {
    logoutdashboardURL: "http://10.0.90.64/"

};

export const LicensData = {
    Licusername: 'jebinson@riversilica.com',
    Licusername: 'PixFix@123',
    licensename: 'Torqlic',
    product: 'torq',
    producttype: 'hw',
    productversion: '115.25.07',
    jobcount: '1,120',
    frequencytype: 'monthly',
    methodvalue: 'job',
    timezonecountry: 'Asia/Kolkata',
};

export const HIDPATH = {
    HIDdownloadpath: 'Y:/Users/Jebinson/TORQ_AutomationData/TORQ_FX/TORQAutomationSink/02_Account/TORQ.hid',


}

export const ACCOUNT_DATA_FOR_QA = {
    accountName: 'QA',
    country: 'India',
    username: 'alice',
    email: 'alice@riversilica.com',
    password: 'Pixfix@123',
    cpassword: 'Pixfix@123',
    role: 'Admin',
    mobilenumber: '9876543210',
    clickButton: 'true',
    NODENAME: 'Node9064',
    labelTextPrimary: 'riversilica',
    labelTextSecondary: 'QA',
    Licname: 'Lic',
    activestatus: 'Active'
};
