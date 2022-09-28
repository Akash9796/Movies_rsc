import Display from "./Display";
import { useDispatch } from "react-redux";
import { genre } from "../../Store/genreSlice";
import { popular } from "../../Store/popularSlice";

export default function Trending() {
  const dispatch = useDispatch();
  dispatch(genre("trending/all"));
  dispatch(popular("day"));

  return <div>{<Display />}</div>;
}
