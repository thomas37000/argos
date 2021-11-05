import React from "react";
import styled from "styled-components";
import "../App.css";

const Nav = () => {
  const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: #f1f1f1;
  `;

  const Wrapper = styled.section`
    padding: 2em;
    background: rgb(2, 0, 36);
    background: linear-gradient(
      90deg,
      rgba(9, 9, 121, 1) 5%,
      rgba(0, 212, 255, 1) 100%
    );
  `;
  return (
    <>
      <header>
        <img
          src="https://www.wildcodeschool.com/assets/logo_main-e4f3f744c8e717f1b7df3858dce55a86c63d4766d5d9a7f454250145f097c2fe.png"
          alt="Wild Code School logo"
        />
      </header>
      <Wrapper>
        <Title>Argonautes</Title>
      </Wrapper>
    </>
  );
};

export default Nav;
