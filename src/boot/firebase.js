import * as firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";
import "firebase/database";
import "firebase/storage";
var firebaseConfig = {
  apiKey: "AIzaSyB_EMpNSlRAcz2NVZ0n4zsIS6gcEhq1LwY",
  authDomain: "puneeetkushwah.firebaseapp.com",
  databaseURL: "https://puneeetkushwah.firebaseio.com",
  projectId: "puneeetkushwah",
  storageBucket: "puneeetkushwah.appspot.com",
  messagingSenderId: "613287352707",
  appId: "1:613287352707:web:57e92456514c960a873eb6"
};
// Initialize Firebase
let firebaseApp = firebase.initializeApp(firebaseConfig);
let firebaseAuth = firebaseApp.auth();
let firebaseDb = firebaseApp.database();
let firebaseStorage = firebaseApp.firestore();
let firebaseFileStorage = firebaseApp.storage();
export
{
  firebaseAuth,
  firebaseDb,
  firebaseStorage,
  firebaseFileStorage
}
