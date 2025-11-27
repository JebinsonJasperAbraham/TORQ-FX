import { execSync } from 'child_process';


import { fs } from 'fs';
const path = require('path');

const testSuite = process.argv[2];

if (!testSuite) {
    console.error('❌ Please provide the test suite name (e.g., 01_SmokeTest)');
    process.exit(1);
}

const allureResultsPath = path.resolve('allure-results');
if (fs.existsSync(allureResultsPath)) {
    console.log('🧹 Cleaning old Allure results...');
    fs.rmSync(allureResultsPath, { recursive: true, force: true });
}

const testPath = `./tests/TORQ/${testSuite}.spec.js`;

try {
    console.log(`▶ Running Playwright test: ${testPath}`);
    execSync(`npx playwright test ${testPath}`, { stdio: 'inherit' });
} catch (error) {
    console.error('⚠ Tests failed, but proceeding to generate Allure report...');
}

try {
    console.log('✅ Opening Allure report...');
    execSync(`npx allure serve allure-results`, { stdio: 'inherit' });
} catch (error) {
    console.error('❌ Failed to open Allure report:', error.message);
    process.exit(1);
}

