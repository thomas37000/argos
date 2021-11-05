import React from "react";
import styled from "styled-components";

const CardDiv = styled.section`
  margin: 0 auto;
  width: 450px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export default function Card({ handleClick, idEquipage, nom, age, genre }) {
  return (
    <div className="divCard">
      <div className="card">
        <CardDiv>
          <div className="cardDiv">
            <h3 className="cardName">{nom}</h3>
            <h4>{age}</h4>
            <h5>{genre}</h5>
            <button className="btn">détails</button>
            <button className="btn" onClick={handleClick}>
              supprimer
            </button>
          </div>
        </CardDiv>
      </div>
    </div>
  );
}
