import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCQH3kL_1ZETTriK1VhsRBbmixqmvpUH5E",
  authDomain: "crwn-db-bd056.firebaseapp.com",
  projectId: "crwn-db-bd056",
  storageBucket: "crwn-db-bd056.appspot.com",
  messagingSenderId: "319172462846",
  appId: "1:319172462846:web:c8d3462542a4aecfe3bdaf",
  measurementId: "G-LZ03MK9C61",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signINWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
