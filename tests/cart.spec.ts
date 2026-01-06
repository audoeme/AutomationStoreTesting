import { test } from '@playwright/test';
import { LandingPage } from '../src/pages/LandingPage';
import { ShoppingCartPage } from '../src/pages/ShoppingCartPage';

test('Adicionar produto ao carrinho', async ({ page }) => {
  const landingPage = new LandingPage(page);
  const shoppingCartPage = new ShoppingCartPage(page);

  await landingPage.open();

  await landingPage.addProductToCart();

  await landingPage.openShoppingCart();

  await shoppingCartPage.validateTotalIsVisible();

});