import React from "react";
import Form from "./Form";
import "../App.css";

const Home = () => {
  return (
    <div className="App">
      <main>
        <h1> Les Argonautes</h1>
        <h2>Ajouter un(e) Argonaute</h2>
        <Form />
        <h2>Membres de l'équipage</h2>
      </main>

      <footer>
        <p>Réalisé par Jason en Anthestérion de l'an 515 avant JC</p>
      </footer>
    </div>
  );
};

export default Home;
