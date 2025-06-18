// Test constants
export const TEST_URLS = {
  BASE_URL: 'https://qa-takehome.dtxplus.com',
  LOGIN_URL: 'https://qa-takehome.dtxplus.com',
  DASHBOARD_URL: 'https://qa-takehome.dtxplus.com/dashboard'
};

export const SELECTORS = {
  DASHBOARD: 'div[id="dashboard"]',
  LOGOUT_BUTTON: 'button:has-text("Logout")',
  ADD_PATIENT_BUTTON: 'button:has-text("Add Patient")',
  SUBMIT_BUTTON: 'button:has-text("Submit")',
  USERNAME_INPUT: 'input[id="username"]',
  PASSWORD_INPUT: 'input[id="password"]',
  LOGIN_BUTTON: 'button[type="submit"], button:has-text("Login")'
};

export const FORM_FIELDS = {
  MRN_INPUT: 'input[placeholder="MRN"]',
  FIRST_NAME_INPUT: 'input[placeholder="First Name"]',
  LAST_NAME_INPUT: 'input[placeholder="Last Name"]',
  DOB_INPUT: 'input[placeholder="DOB"]',
  DISCHARGE_DATE_INPUT: 'input[placeholder="Discharge Date"]',
  PHONE_NUMBER_INPUT: 'input[placeholder="Phone Number"]'
};

export const EXPECTED_VALUES = {
  DOB_PLACEHOLDER: 'dd/mm/yyyy',
  ERROR_MESSAGE: 'MRN must be unique.'
};

export const WAIT_TIMES = {
  SHORT: 1000,
  MEDIUM: 2000,
  LONG: 5000
}; 