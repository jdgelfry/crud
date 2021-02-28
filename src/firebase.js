import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCySX415aSczVMRGZDL7ZqdShWB1ZPcClg",
    authDomain: "crud-9df00.firebaseapp.com",
    projectId: "crud-9df00",
    storageBucket: "crud-9df00.appspot.com",
    messagingSenderId: "348287211456",
    appId: "1:348287211456:web:541b9cc93eb2d2e2171a25"
  };

export const firebaseApp = firebase.initializeApp(firebaseConfig);