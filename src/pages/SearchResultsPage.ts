import { Page, Locator, expect } from '@playwright/test';

export class SearchResultsPage {
  readonly page: Page;
  readonly pageTitle: Locator;
  readonly pageSubtitle: Locator;
  readonly productCards: Locator;

  constructor(page: Page) {
    this.page = page;

    this.pageTitle = page.locator('h1:has-text("Search")');
    this.pageSubtitle = page.getByText('Products meeting the search criteria',{exact: true});
    this.productCards = page.locator('.prdocutname');

  }

  async validateSearchPage() {
    await expect(this.pageTitle).toBeVisible();
    await expect(this.pageSubtitle).toBeVisible();
  }

  async validateProductsFound() {
    await expect(this.productCards.first()).toBeVisible();
  }

  async openFirstProduct() {
    await this.productCards.first().click();
  }
  
}