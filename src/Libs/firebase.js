import firebase from 'firebase';
import 'firebase/firestore';

 const firebaseConfig = {
    apiKey: "AIzaSyD_QnHGJqVFBXI64Pcm7BU86Vq5n7E6S14",
    authDomain: "boquitaecomerce.firebaseapp.com",
    projectId: "boquitaecomerce",
    storageBucket: "boquitaecomerce.appspot.com",
    messagingSenderId: "774381812990",
    appId: "1:774381812990:web:1e0b0714b25ca34a08f9af",
    measurementId: "G-SGV7R6D981"
  };
const app = firebase.initializeApp(firebaseConfig)

export function getFirebase() {
    return app;
}

export function getFirestore() {

    return firebase.firestore(app);

}