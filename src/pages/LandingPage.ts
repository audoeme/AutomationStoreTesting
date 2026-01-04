import { Page, Locator, expect } from '@playwright/test';

export class LandingPage {
  readonly page: Page;
  readonly skincareMenu: Locator;
  readonly faceSubMenu: Locator;
  readonly searchInput: Locator;
  readonly searchButton: Locator;
  readonly addCartButton: Locator;
  readonly cartItemCount: Locator;
  readonly cartButton: Locator;
  readonly accountButton: Locator;
  readonly loginLink: Locator;

  constructor(page: Page) {

    this.page = page;
    this.skincareMenu = page.getByRole('link', { name: 'Skincare' });
    this.faceSubMenu = page.getByRole('link', { name: 'Face', exact: true });

    this.searchInput = page.getByRole('textbox', {name: 'Search Keywords'});
    this.searchButton = page.locator('.button-in-search[title="Go"]');
    
    this.addCartButton = page.locator('a.productcart[title="Add to Cart"]').first();
    this.cartItemCount = page.locator('#cart .label');

    this.cartButton = page.getByRole('link', { name: /Items/ });

    this.accountButton = page.locator('#main_menu_top >> text=Account');

    this.loginLink = page.locator('#main_menu_top >> text=Login');

  }

  async open() {
    await this.page.goto('https://automationteststore.com/', { waitUntil: 'domcontentloaded' });
    await expect(this.skincareMenu).toBeVisible();
  }

  async navigateViaMenu() {
    await this.skincareMenu.hover();
  }

  async navigateViaSubMenu() {
    await expect(this.faceSubMenu).toBeVisible();
    await this.faceSubMenu.click();
  }

  async searchFor(term: string) {
    await this.searchInput.fill(term);
    await this.searchButton.click();
  }

  async addProductToCart() {
    await this.addCartButton.click();
  }

  async validateCartButton() {
    await expect(this.cartButton).toBeVisible();
  }

  async openShoppingCart() {
    await this.cartButton.click();
  }

  async openLogin() {
    await this.accountButton.hover();
    await expect(this.loginLink).toBeVisible();
    await this.loginLink.click();  
  }

}