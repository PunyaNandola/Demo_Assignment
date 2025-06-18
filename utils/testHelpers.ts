
export const randomData = {
  mrnPrefix: '1000',
  firstNamePrefix: 'TestFirst',
  lastNamePrefix: 'TestLast',
  phonePrefix: '555-'
};

export const dateFormats = {
  DOB: 'YYYY-MM-DD',
  DISCHARGE: 'YYYY-MM-DDTHH:mm'
};

export const validationMessages = {
  REQUIRED_FIELD: 'This field is required',
  INVALID_MRN: 'MRN must be unique',
  INVALID_PHONE: 'Invalid phone number format',
  INVALID_DATE: 'Invalid date format'
};

export const testScenarios = {
  VALID_LOGIN: 'Valid login credentials',
  INVALID_LOGIN: 'Invalid login credentials',
  EMPTY_LOGIN: 'Empty login credentials',
  ADD_PATIENT: 'Add new patient',
  DUPLICATE_PATIENT: 'Add patient with existing MRN',
  EMPTY_FORM: 'Submit empty patient form'
}; 