import { Locator, Page, expect } from "@playwright/test";

export class Common {
    page: Page;
    cookieChoiceDismissButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.cookieChoiceDismissButton = page.locator('#cookieChoiceDismiss');
    }

    async clickCookieChoiceDismissButtonIfVisible(): Promise<void> {
        let cookieChoiceDismissButtonIsVisible: boolean = await this.cookieChoiceDismissButton.isVisible();

        if (cookieChoiceDismissButtonIsVisible) {
            await this.cookieChoiceDismissButton.click();
        } 
        else if (!cookieChoiceDismissButtonIsVisible) {
            console.log('Cookie info pop-up is not present.');
        }
        else {
            throw Error('Something extremely unexpected happened with cookie info pop-up.');
        }
    }
}
