import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
export default function MainNav() {
  return (
    <>
      <Nav>
        <ul>
          <li>
            <Link to="/">Trending</Link>
          </li>
          <li>
            <Link to="/Movies">Movies</Link>
          </li>
          <li>
            <Link to="/Series">Series</Link>
          </li>
          <li>
            <Link to="/Search">Search</Link>
          </li>
        </ul>
      </Nav>
    </>
  );
}

const Nav = styled.div`
  width: 100%;

  border: 2px solid white;

  ul {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  li {
    list-style: none;
    margin: 0 10px;
    position: relative;
  }

  a {
    text-decoration: none;
    color: #fff;
    text-transform: uppercase;
  }
  @media screen and (max-width: 300px) {
    ul {
      padding: 0;
      place-content: center;
      font-size: 0.8rem;
    }
  }
`;
