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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;


  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  // console.log(snapShot);

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log(`error creating user ${error.message}`);
    }
  }
  return userRef;

}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;