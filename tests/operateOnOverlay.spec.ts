import { test } from '@playwright/test';
import { readFileSync } from 'fs';
import { Common } from '../pages/common.model';
import { SmartFrame } from '../pages/smartFrame.model';

let common: Common;
let smartFrame: SmartFrame;

test.beforeEach(async ({ page }) => {
    await page.goto('/p/sf-assignment.html');

    const scriptContent = readFileSync('scripts/SFShadowRootOpen.js', 'utf8');
    await page.evaluate(script => { eval(script); }, scriptContent);
      
    common = new Common(page);
    await common.clickCookieChoiceDismissButtonIfVisible();
    await page.waitForTimeout(3000);
})

test('check overlay elements visibility', async ({ page }) => {
    smartFrame = new SmartFrame(page);
    await smartFrame.hoverOverSmartFrame();
    await smartFrame.checkIfVisitOurWebsiteButtonIsVisible();
    await smartFrame.checkIfShareButtonIsVisible();
    await smartFrame.checkIfFullScreenButtonIsVisible();
    await smartFrame.checkIfPictureDescriptionIsVisible();
})

