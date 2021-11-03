import React from "react";
import styled from "styled-components";

export default function Card({ handleClick, idEquipage, nom, age, genre }) {
  return (
    <div className="divCard">
      <div className="card">
        <div className="cardDiv">
          <h3 className="cardName">{nom}</h3>
          <h4>{age}</h4>
          <h5>{genre}</h5>
          <button className="btn">détails</button>
          <button className="btn" onClick={handleClick}>
            supprimer
          </button>
        </div>
      </div>
    </div>
  );
}
