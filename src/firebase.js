import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDYip1yn-nS5-vkKDYcIn_xyP8bEa8Er8g",
  authDomain: "clone-13670.firebaseapp.com",
  databaseURL: "https://clone-13670.firebaseio.com",
  projectId: "clone-13670",
  storageBucket: "clone-13670.appspot.com",
  messagingSenderId: "107405365588",
  appId: "1:107405365588:web:6ef4384eb6fa6b5d1038c1",
  measurementId: "G-LV22KFJJ4K",
});

const auth = firebase.auth();

export { auth };
