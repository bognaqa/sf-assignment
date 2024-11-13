import { Locator, Page, expect } from "@playwright/test";

export class SmartFrame {
    page: Page;
    smartFrame: Locator;
    visitOurWebsiteButton: Locator;
    shareButton: Locator;
    fullScreenButton: Locator;
    pictureDescription: Locator;

    constructor(page: Page) {
        this.page = page;
        this.smartFrame = page.locator('smartframe-embed');
        this.visitOurWebsiteButton = page.locator('#custom-button');
        this.shareButton = page.locator('#share-button');
        this.fullScreenButton = page.locator('#full-screen-button');
        this.pictureDescription = page.locator('#Caption');
    }

    async hoverOverSmartFrame(): Promise<void> {
        await this.smartFrame.hover();
    }

    async checkIfVisitOurWebsiteButtonIsVisible(): Promise<void> {
        await expect(this.visitOurWebsiteButton).toBeVisible();
    }

    async checkIfShareButtonIsVisible(): Promise<void> {
        await expect(this.shareButton).toBeVisible();
    }

    async checkIfFullScreenButtonIsVisible(): Promise<void> {
        await expect(this.fullScreenButton).toBeVisible();
    }

    async checkIfPictureDescriptionIsVisible(): Promise<void> {
        await expect(this.pictureDescription).toBeVisible();
    }

    async clickFullScreenButton(): Promise<void> {
        await this.fullScreenButton.click();
    }
}
