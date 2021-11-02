import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";

export default function Form() {
  const [argonautes, setArgonautes] = useState({ nom: "", age: "", genre: "" });
  
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

  const Label = styled.label`
    padding: 0.5rem;
  `;

  const Input = styled.input.attrs(({ type }) => ({
    type: type || "text",
  }))`
    margin: 1.5vh 0;
    padding: 0.5rem 1rem;
  `;

  const Inputt = styled.input.attrs({
    type: "submit",
    value: "Submit",
  })`
    background: "#fff";
    color: blue;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid blue;
    border-radius: 5px;
  `;

  return (
    <>
      <Wrapper>
        <h2>Ajouter un(e) Argonaute</h2>
        <form className="">
          <Label>
            Nom de l'Argonaute:
            <Input name="nom" placeholder="Charalampos" />
          </Label>

          <Label>
            genre:
            <Input name="genre" placeholder="Homme" />
          </Label>

          <Label>
            age:
            <Input name="age" placeholder="23" />
          </Label>

          <Inputt />
        </form>
      </Wrapper>
    </>
  );
}
