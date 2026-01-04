import { test } from '@playwright/test';
import { LandingPage } from '../src/pages/LandingPage';

test('Landing Page - Navegar pelo menu Skincare', async ({ page }) => {
  const home = new LandingPage(page);

  await home.open();           
  await home.navigateViaMenu();
  await home.navigateViaSubMenu();
  
});
