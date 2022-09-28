import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { genre } from "../../Store/genreSlice";
import { popular } from "../../Store/popularSlice";
import { search } from "../../Store/searchSlice";
import Display from "./Display";

export default function Search() {
  const dispatch = useDispatch();
  dispatch(genre("search/tv"));
  dispatch(popular(""));
  dispatch(search(""));

  return (
    <>
      <Option></Option>
      <div>{<Display />}</div>
    </>
  );
}
const Option = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
