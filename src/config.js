import firebase from 'firebase/app'
import firestore from 'firebase/firestore'
import "firebase/auth"

const settings = {timestampsInSnapshots: true};

const config = {
    apiKey: " ",
    authDomain: " ",
    databaseURL: " ",
    projectId: " ",
    storageBucket: " ",
    messagingSenderId: " ",
    appId: " "
};
firebase.initializeApp(config);

export const auth = firebase.auth() 
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider()
