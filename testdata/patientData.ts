// Patient test data
export const patientData = [
  {
    mrn: '1001',
    firstName: 'John',
    lastName: 'Doe',
    dob: '1985-03-15',
    dischargeDate: '2025-01-15T14:30',
    phoneNumber: '555-123-4567'
  },
  {
    mrn: '1002',
    firstName: 'Jane',
    lastName: 'Smith',
    dob: '1990-07-22',
    dischargeDate: '2025-02-20T10:15',
    phoneNumber: '555-987-6543'
  },
  {
    mrn: '1003',
    firstName: 'Michael',
    lastName: 'Johnson',
    dob: '1978-11-08',
    dischargeDate: '2025-03-10T16:45',
    phoneNumber: '555-456-7890'
  },
  {
    mrn: '1004',
    firstName: 'Sarah',
    lastName: 'Williams',
    dob: '1992-05-12',
    dischargeDate: '2025-04-05T09:20',
    phoneNumber: '555-789-0123'
  },
  {
    mrn: '1005',
    firstName: 'David',
    lastName: 'Brown',
    dob: '1980-12-03',
    dischargeDate: '2025-05-18T11:45',
    phoneNumber: '555-321-6540'
  }
];

export const duplicatePatientData = {
  mrn: '1002',
  firstName: 'Duplicate',
  lastName: 'Patient',
  dob: '1980-01-01',
  dischargeDate: '2025-01-01T15:30',
  phoneNumber: '1234567890'
};

export const emptyPatientData = {
  mrn: '',
  firstName: '',
  lastName: '',
  dob: '',
  dischargeDate: '',
  phoneNumber: ''
}; 