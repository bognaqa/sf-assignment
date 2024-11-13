import { test } from '@playwright/test';
import { addScriptToPage } from '../scripts/SFShadowRootOpen';
import { Common } from '../pages/common.model';
import { SmartFrame } from '../pages/smartFrame.model';

let common: Common;
let smartFrame: SmartFrame;

test.beforeEach(async ({ page }) => {
    await page.goto('/p/sf-assignment.html');

    await addScriptToPage(page);
      
    common = new Common(page);
    await common.clickCookieChoiceDismissButtonIfVisible();
})

test('check overlay elements visibility', async ({ page }) => {
    smartFrame = new SmartFrame(page);
    await smartFrame.hoverOverSmartFrame();
    await smartFrame.checkIfVisitOurWebsiteButtonIsVisible();
    await smartFrame.checkIfShareButtonIsVisible();
    await smartFrame.checkIfFullScreenButtonIsVisible();
    await smartFrame.checkIfPictureDescriptionIsVisible();
})

