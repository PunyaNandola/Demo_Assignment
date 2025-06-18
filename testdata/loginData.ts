// Login test data
export const validLoginCredentials = [
  {
    username: 'dtxplus',
    password: 'dtxplus'
  },
  {
    username: 'admin',
    password: 'admin123'
  },
  {
    username: 'user1',
    password: 'password1'
  }
];

export const invalidLoginCredentials = [
  {
    username: 'invaliduser',
    password: 'invalidpass'
  },
  {
    username: 'wronguser',
    password: 'wrongpass'
  },
  {
    username: '',
    password: ''
  },
  {
    username: 'user',
    password: ''
  },
  {
    username: '',
    password: 'pass'
  }
];

export const defaultCredentials = {
  username: 'dtxplus',
  password: 'dtxplus'
}; 