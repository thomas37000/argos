// import firebase from "firebase/app";
import React from "react";
import {
  FirebaseDatabaseProvider,
  FirebaseDatabaseMutation,
} from "@react-firebase/database";
import { firebaseConfig } from "./utils/firebaseConfig";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import Home from "./components/Home";
import Nav from "./components/Nav";

function App() {
  return (
    <FirebaseDatabaseProvider {...firebaseConfig} firebase={firebase}>
      <div className="App">
        <Nav />
        <Home />
        {/* <FirebaseDatabaseMutation type="update" path="user_bookmarks/a">
          {({ runMutation }) => {
            return (
              <div>
                <button
                  onClick={() => {
                    runMutation({
                      new_data: `Oh hai again ${Date.now()}`,
                      updated_at: firebase.database.ServerValue.TIMESTAMP,
                    }).then(() => {
                      console.log("Ran mutation");
                    });
                  }}
                >
                  Click me to run mutation
                </button>
              </div>
            );
          }}
        </FirebaseDatabaseMutation> */}
      </div>
    </FirebaseDatabaseProvider>
  );
}

export default App;
