import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// we neeed to somehow seed the database

// we need a config here

const config = {
  apiKey: "AIzaSyDYGIZs-kh8IqT_tsd2t7q4k_c6CJK2N4Q",
  authDomain: "my-netflix-de59f.firebaseapp.com",
  projectId: "my-netflix-de59f",
  storageBucket: "my-netflix-de59f.appspot.com",
  messagingSenderId: "319298836754",
  appId: "1:319298836754:web:58a0b87e9bcca3c6313bcb",
};

const firebase = Firebase.initializeApp(config);

export { firebase };
