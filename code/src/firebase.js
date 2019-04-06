const firebase = require('firebase');

const config = {
  apiKey: "AIzaSyBvlz9TpNRr4xahCtNj9P1dPwsilWPce1Q",
  authDomain: "isajfdzl2.firebaseapp.com",
  databaseURL: "https://isajfdzl2.firebaseio.com",
  projectId: "isajfdzl2",
  storageBucket: "isajfdzl2.appspot.com",
  messagingSenderId: "995230844138"
};

const app = firebase.initializeApp(config);
export const db = app.database();

export const auth = app.auth();

export const googleProvider = new firebase.auth.GoogleAuthProvider();

export const facebookProvider = new firebase.auth.FacebookAuthProvider();

export const storage = app.storage();

// import { db } from '../firebase.js';
// db.ref('/cats').set({ name: 'fluffy' });

