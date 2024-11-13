import { Page } from '@playwright/test';

export async function addScriptToPage(page: Page) {
    await page.evaluate(() => {
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.text = 'window.SFShadowRootOpen = true';
        document.head.appendChild(script);
    });
}
