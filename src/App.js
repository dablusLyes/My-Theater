import "./App.css";
import Navbar from "./components/Navbar";
import Movies from "./components/Movies";
import Pagination from "./components/Pagination";
import axios from "axios";
import { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState([]);
  const [sortBy, setSortBy] = useState([]);

  useEffect(() => {
    GetPopular();
  }, []);

  const GetPopular = async (sortBy, page) => {
    const data = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?api_key=8433cf99d057dc015d472aaa543637c0&language=en-US&page=3"
    );
    const movies = await data.data.results;
    console.log(movies);
    setMovies(movies);
  };

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Pagination page={page} setPage={setPage} />
        <Movies movies={movies} />
      </div>
    </Router>
  );
}

export default App;
