import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { img_300 } from "../config";
import { useSelector } from "react-redux";

export default function Display({}) {
  const page = useSelector((state) => state.page);
  const genre = useSelector((state) => state.genre);
  const popular = useSelector((state) => state.popular);
  const search = useSelector((state) => state.search);

  console.log(search);
  const [data, setData] = useState(null);

  const fetch = async () => {
    await axios
      .get(
        `https://api.themoviedb.org/3/${genre}/${popular}?api_key=219abf0a69c0d25a16cca43a3fa1c110&query=${search}&page=${
          page ? page : "1"
        }`
      )
      .then((resp) => {
        setData(resp.data.results);
        console.log(resp.data.results);
      });
  };
  useEffect(() => {
    fetch();
  }, [page]);

  return (
    <>
      <Container>
        <Content>
          {data ? (
            data.map((movie, index) => (
              <Wrap key={index}>
                <img
                  src={`${img_300}/${movie?.backdrop_path}`}
                  alt={movie?.name}
                />
              </Wrap>
            ))
          ) : (
            <h1>Loading...</h1>
          )}
        </Content>
      </Container>
    </>
  )
}
const Container = styled.div`
overflow-y: hidden;
`;

const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  padding: 0 5px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));

  @media screen and (max-width: 420px) {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    margin: 0;
  }

  /* @media screen and (max-width: 300px) {
    grid-template-columns: auto;
    margin: 0;
    padding: 0;
  } */
`;

const Wrap = styled.div`
  border: 3px solid rgba(249, 249, 249, 0.1);
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  transition: 250ms;

  img,
  h4 {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  &:hover {
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 72%) 0px 16px 10px -10px;
  }
  overflow-y: hidden;
`;
