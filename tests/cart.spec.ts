import { test } from '@playwright/test';
import { LandingPage } from '../src/pages/LandingPage';
import { ShoppingCartPage } from '../src/pages/ShoppingCartPage';

test('Adicionar produto ao carrinho', async ({ page }) => {
  const landingPage = new LandingPage(page);

  await landingPage.open();

  await landingPage.addProductToCart();

  await landingPage.openShoppingCart();

  //await ShoppingCartPage.   validar nome da página: Shopping Cart

  //await ShoppingCartPage.validateCartCounter('1');

  //await ShoppingCartPage.validateProductIsPresent();

  


  //await ShoppingCartPage.validateCartCounterEnd('2'); 


});