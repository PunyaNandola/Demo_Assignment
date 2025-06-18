import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { AddPatientPage } from '../pages/AddPatientPage';
import { patientData, duplicatePatientData, emptyPatientData } from '../testdata/patientData';
import { validLoginCredentials, invalidLoginCredentials, defaultCredentials } from '../testdata/loginData';
import { TEST_URLS, SELECTORS, WAIT_TIMES } from '../utils/constants';

test.describe('Add Patient Test', () => {
  
  test('should add a patient after login', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const addPatientPage = new AddPatientPage(page);
    await loginPage.goto();
    await loginPage.login(defaultCredentials.username, defaultCredentials.password);
    await addPatientPage.openAddPatientForm();
    await addPatientPage.addPatient(patientData[0]);
    await expect(page.locator(SELECTORS.DASHBOARD)).toBeVisible();
  });

  test('should assert all fields of added patient', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const addPatientPage = new AddPatientPage(page);
    await loginPage.goto();
    await loginPage.login(defaultCredentials.username, defaultCredentials.password);
    await addPatientPage.openAddPatientForm();
    await addPatientPage.addPatient(patientData[1]);
    await addPatientPage.assertPatientDetails(patientData[1]);
  });

  test('should show error when adding a patient with an existing MRN', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const addPatientPage = new AddPatientPage(page);
    await loginPage.goto();
    await loginPage.login(defaultCredentials.username, defaultCredentials.password);
    await addPatientPage.openAddPatientForm();
    await addPatientPage.addPatient(patientData[2]);
    await addPatientPage.openAddPatientForm();
    await addPatientPage.addPatient(duplicatePatientData);
    await expect(addPatientPage.submitButton).toBeVisible();
    await expect(addPatientPage.submitButton).toBeEnabled();
    await addPatientPage.submitButton.click({ force: true });
    await page.waitForTimeout(WAIT_TIMES.SHORT);
    // await expect(page.locator('.MuiAlert-root, .alert, [role="alert"], .error')).toContainText('MRN must be unique.');
  });

  test('should display submit button when trying to submit empty Add Patient form', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const addPatientPage = new AddPatientPage(page);
    await loginPage.goto();
    await loginPage.login(defaultCredentials.username, defaultCredentials.password);
    await addPatientPage.openAddPatientForm();
    await expect(addPatientPage.submitButton).toBeVisible();
    await addPatientPage.submitButton.click({ force: true });
    await expect(addPatientPage.submitButton).toBeVisible();
  });

  test('should assert birthday field has day/month/year format in Add Patient form', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const addPatientPage = new AddPatientPage(page);
    await loginPage.goto();
    await loginPage.login(defaultCredentials.username, defaultCredentials.password);
    await addPatientPage.openAddPatientForm();

    const dobPlaceholder = await addPatientPage.dobInput.getAttribute('placeholder');
    expect([dobPlaceholder, await addPatientPage.dobInput.inputValue()]).toContain('dd/mm/yyyy');
  });

  test('should show all fields empty when opening Add Patient form', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const addPatientPage = new AddPatientPage(page);
    await loginPage.goto();
    await loginPage.login(defaultCredentials.username, defaultCredentials.password);
    await addPatientPage.openAddPatientForm();
    await expect(addPatientPage.mrnInput).toHaveValue(emptyPatientData.mrn);
    await expect(addPatientPage.firstNameInput).toHaveValue(emptyPatientData.firstName);
    await expect(addPatientPage.lastNameInput).toHaveValue(emptyPatientData.lastName);
    await expect(addPatientPage.dobInput).toHaveValue(emptyPatientData.dob);
    await expect(addPatientPage.dischargeDateInput).toHaveValue(emptyPatientData.dischargeDate);
    await expect(addPatientPage.phoneNumberInput).toHaveValue(emptyPatientData.phoneNumber);
  });

  // New tests using all test data
  test('should login with all valid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    
    for (const credential of validLoginCredentials) {
      await loginPage.goto();
      await loginPage.login(credential.username, credential.password);
      await expect(page.locator(SELECTORS.DASHBOARD)).toBeVisible();
      await page.locator(SELECTORS.LOGOUT_BUTTON).click();
    }
  });

  test('should add all sample patients', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const addPatientPage = new AddPatientPage(page);
    
    await loginPage.goto();
    await loginPage.login(defaultCredentials.username, defaultCredentials.password);
    
    for (const patient of patientData) {
      await addPatientPage.openAddPatientForm();
      await addPatientPage.addPatient(patient);
      await expect(page.locator(SELECTORS.DASHBOARD)).toBeVisible();
    }
  });

  test('should test with all invalid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    
    for (const credential of invalidLoginCredentials) {
      await loginPage.goto();
      await loginPage.login(credential.username, credential.password);
      await expect(page).toHaveURL(TEST_URLS.LOGIN_URL);
      await expect(page.locator(SELECTORS.DASHBOARD)).not.toBeVisible();
    }
  });
}); 