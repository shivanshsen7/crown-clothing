import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBGdfa3R9NHglt_BXf_lH4aJ5zEEbRvvpU",
  authDomain: "crown-db-4b369.firebaseapp.com",
  databaseURL: "https://crown-db-4b369.firebaseio.com",
  projectId: "crown-db-4b369",
  storageBucket: "crown-db-4b369.appspot.com",
  messagingSenderId: "657657552724",
  appId: "1:657657552724:web:e2c8e95fb63aea0285b2c1",
  measurementId: "G-3RP5WMG9FK"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;