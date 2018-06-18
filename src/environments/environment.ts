// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  BASE_URL : 'http://203.143.95.45:12220/',
  appName: 'Indigo Logistics'


};

export const api_params = {
  
BASE_URL        : 'http://203.143.95.45:12220/',
  SIGNUP_URL    : 'backend/public/api/users/register',
  LOGIN_URL     : 'backend/public/api/users/login',
  VERIFY_EMAIL  : 'backend/public/api/users/verify',
  LOGOUT_URL     : 'backend/public/api/users/logout',
  FORGOT_PASSWORD_URL : 'backend/public/api/password/email',
  RESET_PASSWORD_URL : 'backend/public/api/password/reset',
  CHANGE_PASSWORD_URL : 'backend/public/api/users/resetpassword',
  COMPANY_LISTING_URL : 'backend/public/api/companies/listing',
  EMPLOYEE_LISTING_URL : 'backend/public/api/employees/listing',
  ADD_EMPLOYEE_URL : 'backend/public/api/employees/add',
  ADD_COMPANY_URL : 'backend/public/api/companies/add',
  GET_STATE_URL : 'https://www.movit.com.au/ajax/getState'

  
};