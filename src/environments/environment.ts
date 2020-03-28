// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyBIrOmxNDDkBJjxEurDZMbmgqemvirzVCA',
    authDomain: 'note-app-angular.firebaseapp.com',
    databaseURL: 'https://note-app-angular.firebaseio.com',
    projectId: 'note-app-angular',
    storageBucket: 'note-app-angular.appspot.com',
    messagingSenderId: '810620521191',
    appId: '1:810620521191:web:18ec427d34bd8d06f7b042'
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
