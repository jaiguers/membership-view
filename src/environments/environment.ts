// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  urlApi: 'https://platzi-store.herokuapp.com',
  urlMembership: 'http://localhost:9087/membership/',
  firebase: {
    apiKey: 'AIzaSyDg41kkE1FHSwl-ym4nJEV9YLCc1IM4CyA',
    authDomain: 'tienda-d15c7.firebaseapp.com',
    databaseURL: 'https://tienda-d15c7.firebaseio.com',
    projectId: 'tienda-d15c7',
    storageBucket: 'tienda-d15c7.appspot.com',
    messagingSenderId: '196865843876',
    appId: '1:196865843876:web:a2164f30d2a55f8b20bc31'
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
