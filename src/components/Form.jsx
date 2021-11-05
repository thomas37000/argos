import React, { useState } from "react";
import axios from "axios";
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

export default function Form() {
  const [nom, setNoms] = useState("");
  const [age, setAges] = useState("");
  const [genre, setGenres] = useState("");

  const { REACT_APP_SERVER_ADDRESS } = process.env;

  const addNewArgonaute = (event) => {
    event.preventDefault();
    if (nom && age && genre) {
      axios
        .post("http://localhost:8080/argonautes", {
          nom: nom,
          age: age,
          genre: genre,
        })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => console.log("error: ", err));
    }else {
      // setError
    }
  };

  return (
    <>
      <Wrapper>
        <form onSubmit={addNewArgonaute}>
          <label>
            Name:
            <input
              type="text"
              name="nom"
              placeholder="Charalampos"
              onChange={(event) => setNoms(event.target.value)}
            />
          </label>

          <label>
            genre:
            <input
              type="text"
              name="genre"
              placeholder="Homme"
              onChange={(event) => setGenres(event.target.value)}
            />
          </label>

          <label>
            age:
            <input
              type="text"
              name="age"
              placeholder="23"
              onChange={(event) => setAges(event.target.value)}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </Wrapper>
    </>
  );
}
