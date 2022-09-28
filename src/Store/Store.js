import { configureStore } from "@reduxjs/toolkit";
import pageReducer from "./pageSlice";
import genreReducer from "./genreSlice"; 
import popularReducer from "./popularSlice";
import searchReducer from "./searchSlice";

const store = configureStore({
    reducer : {
        page : pageReducer,
        genre : genreReducer,
        popular : popularReducer,
        search : searchReducer,
    }
});

export default store;
