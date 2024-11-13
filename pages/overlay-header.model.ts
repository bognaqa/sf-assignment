import { Locator, Page, expect } from "@playwright/test";

export class OverlayHeader {
    page: Page;
    visitOurWebsiteButton: Locator;
    shareButton: Locator;
    fullScreenButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.visitOurWebsiteButton = page.locator('#custom-button');
        this.shareButton = page.locator('#share-button');
        this.fullScreenButton = page.locator('#full-screen-button');
    }
}