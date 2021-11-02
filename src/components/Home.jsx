import React from "react";
import Form from "./Form";
import "../App.css";
import Equipage from "./Equipage";

const Home = () => {
  return (
    <div className="App">
      <main>
        <Form />
        <h2>Membres de l'équipage</h2>
        <Equipage />
      </main>

      <footer>
        <p>Réalisé par Jason en Anthestérion de l'an 515 avant JC</p>
      </footer>
    </div>
  );
};

export default Home;
