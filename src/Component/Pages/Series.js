import React from "react";
import { useDispatch } from "react-redux";
import { genre } from "../../Store/genreSlice";
import { popular } from "../../Store/popularSlice";
import Display from "./Display";

export default function Series() {
  const dispatch = useDispatch();
  dispatch(genre("tv"));
  dispatch(popular("popular"));


  return <div>{<Display />}</div>;
}
