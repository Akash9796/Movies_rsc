import React from "react";
import styled from "styled-components";

export default function Header() {
  return (
    <>
      <Container>
        <div>🎥Entertainment Hub📷</div>
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 100%;
  cursor: pointer;
  position: fixed;
  display: flex;
  justify-content: center;
  text-transform: uppercase;
  background-color: #39445a;
  font-family: sans-serif;
  font-size: 1.8rem;
  padding-bottom: 15px;
  box-shadow: 0px 1px 5px black;
  color: white;
  z-index: 100;

  @media (max-width: 430px) {
    padding-top: 15px;
    font-size: 1.5rem;
  }
`;
