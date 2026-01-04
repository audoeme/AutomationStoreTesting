import { test } from '@playwright/test';
import { LandingPage } from '../src/pages/LandingPage';
import { LoginPage } from '../src/pages/LoginPage';
import 'dotenv/config';
import * as dotenv from 'dotenv';
import { Config } from '../src/config/config';
import { AccountPage } from '../src/pages/AccountPage';

dotenv.config();

test('Login com usuário existente', async ({ page }) => {
    const landingPage = new LandingPage(page);
    const loginPage = new LoginPage(page);
    const accountPage = new AccountPage(page);

  await landingPage.open();

  await landingPage.openLogin();

  await loginPage.login(Config.USER_EMAIL, Config.USER_PASSWORD);

  await accountPage.validateUserIsLogged();

  await accountPage.logout();



});
