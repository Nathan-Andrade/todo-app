import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDWZy3U58hGcqgXkNsBdE_ZAbEjl8TayfI",
  authDomain: "todo-app-6e12d.firebaseapp.com",
  databaseURL: "https://todo-app-6e12d.firebaseio.com",
  projectId: "todo-app-6e12d",
  storageBucket: "todo-app-6e12d.appspot.com",
  messagingSenderId: "814073376318",
  appId: "1:814073376318:web:d63a7839dfcb1a7bcdeb6f",
  measurementId: "G-7VZYYZSNZP"
});

const db = firebaseApp.firestore();

export default db;