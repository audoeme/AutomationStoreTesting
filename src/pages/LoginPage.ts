import { Page, Locator, expect } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly accountLoginHeading: Locator;

  constructor(page: Page) {
    this.page = page;

    this.accountLoginHeading= page.getByRole('heading', {name: ' Account Login'});

    this.emailInput = page.locator('#loginFrm_loginname');
    this.passwordInput = page.locator('#loginFrm_password');
    this.loginButton = page.getByRole('button', { name: 'Login' });

    
  }

  async login(USER_EMAIL: string, USER_PASSWORD: string) {
    
    await this.page.waitForLoadState('domcontentloaded');

    await this.emailInput.waitFor({ state: 'visible' });
    await this.emailInput.click({ force: true });
    await this.emailInput.fill(USER_EMAIL);

    await this.passwordInput.waitFor({ state: 'visible' });
    await this.passwordInput.click({ force: true });
    await this.passwordInput.fill(USER_PASSWORD);

    await this.loginButton.click();
    
  }
}