import firebase from 'firebase'
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBJG1TUW4hnMQRt92KMfMlYHzRCA85kk_8",
    authDomain: "lifehack-888ea.firebaseapp.com",
    projectId: "lifehack-888ea",
    storageBucket: "lifehack-888ea.appspot.com",
    messagingSenderId: "332972339335",
    appId: "1:332972339335:web:42503b5189453e74a80822",
    measurementId: "G-7BBNWKGRZC"
  };

firebase.initializeApp(firebaseConfig);

var database = firebase.firestore();
var storage = firebase.storage();

export {
    database,
    storage
}

