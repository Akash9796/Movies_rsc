import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Component/Header";
import MainNav from "./Component/MainNav";
import Trending from "./Component/Pages/Trending";
import Movies from "./Component/Pages/Movies";
import Series from "./Component/Pages/Series";
import Search from "./Component/Pages/Search";
import Pagination from "./Component/Pages/Pagination";

function App() {
  return (
    <Router basename="/Movies_rsc">
      <Header />
      <div className="App">
        <MainNav />
      <Pagination />
        <Routes>
          <Route path="/" element={<Trending/>} />
          <Route path="/Movies" element={<Movies/>} />
          <Route path="/Series" element={<Series/>} />
          <Route path="/Search" element={<Search/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;