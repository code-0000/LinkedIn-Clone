import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAOBzPV68KJBUF_CMm35UKRcnvLd0o1o14",
  authDomain: "linkedin-clone-yt-eb5cf.firebaseapp.com",
  projectId: "linkedin-clone-yt-eb5cf",
  storageBucket: "linkedin-clone-yt-eb5cf.appspot.com",
  messagingSenderId: "1093374922534",
  appId: "1:1093374922534:web:0aba67a309805526f87be7",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
