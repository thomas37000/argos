import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";


export const firebaseConfig = {
  apiKey: "AIzaSyAfXX3QgXkjpWgvoxKf6mh6PRLtc3eJ48o",
  authDomain: "argos-7724d.firebaseapp.com",
  databaseURL: "https://argos-7724d-default-rtdb.firebaseio.com",
  projectId: "argos-7724d",
  storageBucket: "argos-7724d.appspot.com",
  messagingSenderId: "838583652798",
  appId: "1:838583652798:web:976a18b5ebe18b167929ef",
  measurementId: "G-5RMX67EYSE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};
