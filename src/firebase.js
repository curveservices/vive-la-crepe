// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCM_zG9Jn4W8hbP0eAj7BTO-eXEXFPOu-I',
  authDomain: 'vive-la-crepe.firebaseapp.com',
  databaseURL:
    'https://vive-la-crepe-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'vive-la-crepe',
  storageBucket: 'vive-la-crepe.appspot.com',
  messagingSenderId: '1002749778208',
  appId: '1:1002749778208:web:57fedd05a8e1bae2799f45',
  measurementId: 'G-CDDXEPQLPJ',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
