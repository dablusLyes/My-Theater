import './App.css';
import Navbar from './components/Navbar';
import Movies from './components/Movie';
import axios from "axios";
import { useState,useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {

  const [movies, setMovies] = useState([]);

  
  useEffect(() => {
    GetPopular();
  }, []);

  const GetPopular = async () => {
    const data = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=8433cf99d057dc015d472aaa543637c0&language=en-US&page=1")
    const movies = await data.data.results;
    console.log('zebi',movies);
    setMovies(movies);
  }
  

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Movies Movies={movies}/>
      </div>
    </Router>
  );
}

export default App;
