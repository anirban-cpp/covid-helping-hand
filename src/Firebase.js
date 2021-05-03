// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBSPL2DOV98aAi7RxETD_3eOgiM9kVaMTc",
    authDomain: "covid-helping-hand.firebaseapp.com",
    projectId: "covid-helping-hand",
    storageBucket: "covid-helping-hand.appspot.com",
    messagingSenderId: "424505534255",
    appId: "1:424505534255:web:32a60c1a36bc7d8ee1e3da",
    measurementId: "G-VKF3K986HR"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;