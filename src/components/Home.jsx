import React from "react";
import Equipage from "./Equipage";
import Formulaire from "./Formulaire";
import "../App.css";

const Home = () => {
  return (
    <div className="App">
      <main>
        <Formulaire />
        <h2>Membres de l'équipage</h2>
        {/* <Equipage /> */}
      </main>

      <footer>
        <p>Réalisé par Jason en Anthestérion de l'an 515 avant JC</p>
      </footer>
    </div>
  );
};

export default Home;
