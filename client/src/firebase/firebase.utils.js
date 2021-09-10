import firebase from "firebase/app";

import "firebase/firestore"; //for database
import "firebase/auth"; //for authentication

//app's Firebase configuration
const config = {
  apiKey: "AIzaSyDF4HsT9-e_HxDERBYLKVJ0qz_J7inEeJ4",
  authDomain: "arecanut-trading.firebaseapp.com",
  databaseURL: "https://arecanut-trading-default-rtdb.firebaseio.com/",
  projectId: "arecanut-trading",
  storageBucket: "arecanut-trading.appspot.com",
  messagingSenderId: "46893931516",
  appId: "1:46893931516:web:545ba11c5a7ad67d8d3079",
  measurementId: "G-XPESLNH074"
};

// Initialize Firebase
firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, otherData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`user/${userAuth.uid}`);

  const snapShot = await userRef.get(); //get() is async

  if (!snapShot.exists) {
    //if user doc not existed yet in our database
    const { displayName, email } = userAuth;
    const createAt = new Date();
    try {
      //create user doc and store it into our database
      await userRef.set({
        displayName,
        email,
        createAt,
        ...otherData
      });
    } catch (err) {
      console.log("error creating user", err.message);
    }
  }
  return userRef;
};

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);

  //console.log(collectionRef);

  const batch = firestore.batch();
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

export const convertCollectionsSnapshotToMap = collections => {
  const transformedCollection = collections.docs.map(doc => {
    const { title, items } = doc.data();
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    };
  });
  //console.log(transformedCollection);
  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
