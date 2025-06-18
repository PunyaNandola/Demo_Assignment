import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { patientData, duplicatePatientData, emptyPatientData } from '../testdata/patientData';
import { validLoginCredentials, invalidLoginCredentials, defaultCredentials } from '../testdata/loginData';
import { TEST_URLS, SELECTORS, WAIT_TIMES } from '../utils/constants';

test.describe('Login Test', () => {
  test('should login successfully with valid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(defaultCredentials.username, defaultCredentials.password);
    await expect(page.locator(SELECTORS.DASHBOARD)).toBeVisible();
  });

  test('should show error with invalid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(invalidLoginCredentials[0].username, invalidLoginCredentials[0].password);
    await expect(page).toHaveURL(TEST_URLS.LOGIN_URL);
    await expect(page.locator(SELECTORS.DASHBOARD)).not.toBeVisible();
  });

  test('should not login with empty credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(invalidLoginCredentials[2].username, invalidLoginCredentials[2].password);
   
    await expect(page).toHaveURL(TEST_URLS.LOGIN_URL);
    await expect(page.locator(SELECTORS.DASHBOARD)).not.toBeVisible();
  });

  test('should login successfully with valid credentials and logout', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(defaultCredentials.username, defaultCredentials.password);
    await expect(page.locator(SELECTORS.DASHBOARD)).toBeVisible();
    await page.locator(SELECTORS.LOGOUT_BUTTON).click();
    await expect(page).toHaveURL(TEST_URLS.LOGIN_URL);
    await expect(page.locator(SELECTORS.DASHBOARD)).not.toBeVisible();
  });

}); 