import { Page, Locator } from '@playwright/test';
import { expect } from '@playwright/test';

export class AddPatientPage {
  readonly page: Page;
  readonly addPatientButton: Locator;
  readonly mrnInput: Locator;
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly dobInput: Locator;
  readonly dischargeDateInput: Locator;
  readonly phoneNumberInput: Locator;
  readonly submitButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.addPatientButton = page.locator('button:has-text("Add Patient")');
    this.mrnInput = page.locator('input[placeholder="MRN"]');
    this.firstNameInput = page.locator('input[placeholder="First Name"]');
    this.lastNameInput = page.locator('input[placeholder="Last Name"]');
    this.dobInput = page.locator('input[placeholder="DOB"]');
    this.dischargeDateInput = page.locator('input[placeholder="Discharge Date"]');
    this.phoneNumberInput = page.locator('input[placeholder="Phone Number"]');
    this.submitButton = page.locator('button:has-text("Submit")');
  }

  async openAddPatientForm() {
    await this.addPatientButton.click();
  }

  async addPatient({ mrn, firstName, lastName, dob, dischargeDate, phoneNumber }: { mrn: string, firstName: string, lastName: string, dob: string, dischargeDate?: string, phoneNumber?: string }) {
    await this.mrnInput.fill(mrn);
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
    await this.dobInput.fill(dob);
    if (dischargeDate) {
      await this.dischargeDateInput.fill(dischargeDate);
    }
    if (phoneNumber) {
      await this.phoneNumberInput.fill(phoneNumber);
    }
    await this.submitButton.click();
  }

  async assertPatientDetails(patientData: { mrn: string, firstName: string, lastName: string, dob: string, phoneNumber?: string }) {
    await expect(this.page.locator(`text=${patientData.mrn}`)).toBeVisible();
    await expect(this.page.locator(`text=${patientData.firstName}`)).toBeVisible();
    await expect(this.page.locator(`text=${patientData.lastName}`)).toBeVisible();
    await expect(this.page.locator(`text=${patientData.dob}`)).toBeVisible();
    if (patientData.phoneNumber) {
      await expect(this.page.locator(`text=${patientData.phoneNumber}`)).toBeVisible();
    }
  }

  static generateRandomPatientData() {
    const randomNum = Math.floor(Math.random() * 100000);
    const mrn = `${1000 + randomNum}`;
    const firstName = `TestFirst${randomNum}`;
    const lastName = `TestLast${randomNum}`;
    const dob = `19${70 + Math.floor(Math.random() * 30)}-0${1 + Math.floor(Math.random() * 9)}-1${Math.floor(Math.random() * 9)}`;
    const dischargeDate = `20${25 + Math.floor(Math.random() * 5)}-0${1 + Math.floor(Math.random() * 9)}-1${Math.floor(Math.random() * 9)}T15:30`;
    const phoneNumber = `${Math.floor(9000000000 + Math.random() * 999999999)}`;
    return { mrn, firstName, lastName, dob, dischargeDate, phoneNumber };
  }
} 