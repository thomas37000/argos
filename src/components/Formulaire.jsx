import React, { useState } from "react";
import { db, firebaseConfig } from "../utils/firebaseConfig";
import { collection, addDoc } from "@firebase/firestore";
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
  //   const [age, setAges] = useState("");
  //   const [genre, setGenres] = useState("");

  const handleChange = async (event) => {
    event.preventDefault();
    await addDoc(collection(db, "nom"), {
      nom,
    });

    setNoms("");
  };

  return (
    <>
      <Wrapper>
        <div className="Formulaire">
          <form onSubmit={handleChange}>
            <label>
              Name:
              <input
                type="text"
                name="nom"
                placeholder="Charalampos"
                onChange={(e) => setNoms(e.target.value)}
              />
            </label>

            <input type="submit" value="Submit" />
          </form>
        </div>
      </Wrapper>
    </>
  );
};

export default Formulaire;
