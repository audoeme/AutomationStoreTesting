import { Page, Locator, expect } from '@playwright/test';

export class ShoppingCartPage {
  readonly page: Page;
  readonly quantityInput: Locator;
  readonly updateButton: Locator;
  readonly totalPrice: Locator;

  constructor(page: Page) {
    this.page = page;
    this.quantityInput = page.locator('input[name*="quantity"]');
    this.updateButton = page.getByRole('button', { name: 'Update' });
    this.totalPrice = page.locator('.cart_total');
  }

  async updateQuantity(quantity: string) {
    await this.quantityInput.fill(quantity);
    await this.updateButton.click();
  }

  async validateTotalIsVisible() {
    await expect(this.totalPrice).toBeVisible();
  }
}