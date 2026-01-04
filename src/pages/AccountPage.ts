import { Page, Locator, expect } from '@playwright/test';

export class AccountPage {
    readonly page: Page;
    readonly myAccountHeading: Locator;
    readonly logoutLink: Locator;


    
    constructor(page: Page) {
        this.page = page;

        this.myAccountHeading = page.getByRole('heading', { name: /my account/i });
        this.logoutLink = page.getByRole('link', { name: 'logout' });


    }

    async validateUserIsLogged() {
        await expect(this.myAccountHeading).toBeVisible();
    }

    async logout() {
        await this.logoutLink.click();
    }

}