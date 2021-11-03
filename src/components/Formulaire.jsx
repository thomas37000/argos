import React, { useState } from "react";
import { firebaseConfig } from "../utils/firebaseConfig";
import styled from "styled-components";

const Wrapper = styled.section`
  padding: 2em;
  background: rgb(2, 0, 36);
  background: linear-gradient(
    90deg,
    rgba(9, 9, 121, 1) 5%,
    rgba(0, 212, 255, 1) 100%
  );
  color: #f1f1f1;
`;

const Formulaire = () => {
  const [nom, setNoms] = useState("");
  const [age, setAges] = useState("");
  const [genre, setGenres] = useState("");

  //   const uid = useContext(UidContext);

  const Formulaire = () => {
    const argosDB = firebaseConfig.database().ref("argosDB");
    const argonaute = {
      //   idArgonaute,
      nom,
      age,
      genre,
    };

    argosDB.push(argonaute);

    setNoms("");
    setAges("");
    setGenres("");
  };

  return (
    <>
      <Wrapper>
        <div className="Formulaire">
          <h4>Ajouter un Argonaute</h4>
          <div className="form">
            <input
              type="text"
              placeholder="Charalampos"
              value={nom}
              onChange={(e) => setNoms(e.target.value)}
            />
            <input
              type="text"
              placeholder="23"
              value={age}
              onChange={(e) => setAges(e.target.value)}
            />

            <button onClick={Formulaire}>Submit</button>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default Formulaire;
