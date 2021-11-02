import React from "react";
import styled from "styled-components";

export default function Form() {
  const Wrapper = styled.section`
    padding: 4rem;
    background: rgb(2, 0, 36);
    background: linear-gradient(
      90deg,
      rgba(9, 9, 121, 1) 5%,
      rgba(0, 212, 255, 1) 100%
    );
    color: #f1f1f1;
  `;
  
  return (
    <>
      <Wrapper>
        <form className="">
          <label>
            Name:
            <input type="text" name="nom" placeholder="Charalampos" />
          </label>

          <label>
            genre:
            <input type="text" name="genre" placeholder="Homme" />
          </label>

          <label>
            age:
            <input type="text" name="age" placeholder="23" className="" />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </Wrapper>
    </>
  );
}
