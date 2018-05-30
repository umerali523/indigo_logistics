// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  API_HOST: 'https://api.carecinch.com/',
  BASE_URL: 'https://pms.carecinch.com/',
  appName: 'Ethizo'
};

export const api_params = {
  API_BASE_URL: 'https://api-charlie.carecinch.com/',
  LOGIN_HOST_URL : 'users/login.json',
  LOGOUT_HOST_URL : 'users/logout.json',
  PRACTICE_LISTING_URL : 'practices/listing.json',
  LOCATION_LISTING_URL : 'practices/locations.json',
};