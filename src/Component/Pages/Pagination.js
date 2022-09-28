import React,{useState} from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { prev } from "../../Store/pageSlice";
import { next } from "../../Store/pageSlice";

export default function Pagination() {
  
  const [page, setPage] = useState(2);
    const dispatch = useDispatch();
  
    const handlePrev =  () => {
       page>1?setPage(page - 1):setPage(1)
       dispatch(page>1?prev(page-1):prev(page));
    };
  
    const handleNext =  () => {
       setPage(page + 1)
       dispatch(next(page+1));
    };




  return (
    <Page>
      <a href="#" onClick={handlePrev}>Previous</a>
      <a href="#" className="active" >
        1
      </a>
      <a href="#">
        2
      </a>
      <a href="#">
        3
      </a>
      <a href="#">
        4
      </a>
      <a href="#">
        5
      </a>
      <a href="#" onClick={handleNext}>Next</a>
    </Page>
  );
}

const Page = styled.div`
  /* header styling */
  h1 {
    color: green;
  }

  /* pagination position styling */

  position: relative;

  /* pagination styling */
  a {
    color: black;
    padding: 10px 18px;
    text-decoration: none;
  }

  /* pagination hover effect on non-active */
  a:hover:not(.active) {
    background-color: #031f3b;
    color: white;
  }

  /* pagination hover effect on active*/

  a:nth-child(5) {
    background-color: green;
    color: white;
  }

  a:nth-child(1) {
    font-weight: bold;
  }

  a:nth-child(7) {
    font-weight: bold;
  }
display: flex;
align-items: center;
justify-content: center;
  margin: 50px;
  padding: 15px;
  /* width: 700px;
  height: 200px; */
  border: 2px solid black;
`;
