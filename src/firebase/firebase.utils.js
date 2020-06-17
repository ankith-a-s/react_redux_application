import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyC8E6GIICOZMfp_BnFPCvPFj9H8fIMo96Y',
  authDomain: 'react-redux-application-c5cde.firebaseapp.com',
  databaseURL: 'https://react-redux-application-c5cde.firebaseio.com',
  projectId: 'react-redux-application-c5cde',
  storageBucket: 'react-redux-application-c5cde.appspot.com',
  messagingSenderId: '674476439273',
  appId: '1:674476439273:web:5e47b5b503daed4c43a278',
  measurementId: 'G-K5G80QSY8Z',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;