import { Locator, Page, expect } from "@playwright/test";

export class SmartFrame {
    page: Page;
    smartFrame: Locator;
    hyperZoom: Locator;

    constructor(page: Page) {
        this.page = page;
        this.smartFrame = page.locator('smartframe-embed');
        this.hyperZoom = page.locator('#HyperZoom');
    }
}
