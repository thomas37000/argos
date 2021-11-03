// import firebase from "firebase/app";
import React from "react";
import "firebase/compat/auth";
import firebase from "firebase/compat/app";
import {FirebaseAuthProvider} from "@react-firebase/auth";
import {firebaseConfig} from "./utils/firebaseConfig";
import Home from "./components/Home";
import Nav from "./components/Nav";

function App() {
  return (
    <FirebaseAuthProvider {...firebaseConfig} firebase={firebase}>
      <div className="App">
        <Nav />
        <Home />
      </div>
    </FirebaseAuthProvider>
  );
}

export default App;
