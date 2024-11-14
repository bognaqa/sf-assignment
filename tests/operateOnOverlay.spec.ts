import { test, expect } from '@playwright/test';
import { Common } from '../pages/common.model';
import { SmartFrame } from '../pages/smartFrame.model';
import { OverlayHeader } from '../pages/overlay-header.model';
import { OverlayFooter } from '../pages/overlay-footer.model';

test.beforeEach(async ({ page }) => {
    await page.addInitScript({ content: 'window.SFShadowRootOpen = true' });
    await page.goto('/p/sf-assignment.html');
    const common = new Common(page);
    const smartFrame = new SmartFrame(page);
    await common.clickCookieChoiceDismissButtonIfVisible();
    await smartFrame.smartFrame.hover();
})

test('check overlay elements visibility', async ({ page }) => {
    const overlayHeader = new OverlayHeader(page);
    const overlayFooter = new OverlayFooter(page);
    await expect(overlayHeader.visitOurWebsiteButton).toBeVisible();
    await expect(overlayHeader.shareButton).toBeVisible();
    await expect(overlayHeader.fullScreenButton).toBeVisible();
    await expect(overlayFooter.pictureDescription).toBeVisible();
})

test('zoom in on full screen', async ({ page }) => {
    const smartFrame = new SmartFrame(page);
    const overlayHeader = new OverlayHeader(page);
    const overlayFooter = new OverlayFooter(page);
    await overlayHeader.fullScreenButton.click();
    await expect(smartFrame.hyperZoom).toHaveClass('fullscreen');
    await overlayFooter.clickZoomInButtonWhenEnabled();
    await expect(smartFrame.hyperZoom).toHaveClass('max-zoom');
    await page.keyboard.press('Escape');
    await expect(smartFrame.hyperZoom).not.toBeVisible();
    await expect(smartFrame.smartFrame).toHaveAttribute('style');
})