// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  fb : {
    apiKey: "AIzaSyAirEiJ7yhXuAGarprg6PL0ggN_8zhMH3E",
    authDomain: "angular-auth-test-e7b11.firebaseapp.com",
    projectId: "angular-auth-test-e7b11",
    storageBucket: "angular-auth-test-e7b11.appspot.com",
    messagingSenderId: "1070623688682",
    appId: "1:1070623688682:web:e4b9d1e533b3f584ccd493",
    measurementId: "${config.measurementId}"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
