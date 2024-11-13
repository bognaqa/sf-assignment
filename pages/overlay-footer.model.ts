import { Locator, Page, expect } from "@playwright/test";

export class OverlayFooter {
    page: Page;
    pictureDescription: Locator;
    zoomInButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.pictureDescription = page.locator('#Caption');
        this.zoomInButton = this.page.locator('#zoom-in-button');
    }

    async clickZoomInButtonWhenEnabled(): Promise<void> {
        let zoomInButtonDisabled: boolean = await this.zoomInButton.isDisabled();

        while(!zoomInButtonDisabled) {
            await this.zoomInButton.click();
        }
    }
}