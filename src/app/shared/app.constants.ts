/**
 * Contants used throughout the applications.
 * @author ndkcha
 * @since 0.1.0
 * @version 0.2.0
 */

// import built-in and third party modules
import { FirebaseAppConfig } from 'angularfire2';

/** Firebase configurations */
export const FIREBASE: FirebaseAppConfig = {
    apiKey: "AIzaSyAyo1ZF-MNzpUF0pHPfDgVhYNRGHt8RV58",
    authDomain: "open-ahmedabad.firebaseapp.com",
    databaseURL: "https://open-ahmedabad.firebaseio.com",
    storageBucket: "open-ahmedabad.appspot.com",
    messagingSenderId: "140801138096"
}

/** Global constants used throughout the application */
export const GLOBAL = {
    /** Suffix of the page title */
    PAGE_TITLE: " - Open Loo",
    /** Status codes */
    STATUS: {
        /** Successful event */
        SUCCESS: 200,
        /** Failed event */
        FAILURE: 400
    }
}