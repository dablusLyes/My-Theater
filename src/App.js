import './App.css';
import Movies from './components/Movies';
import axios from "axios";
import { useState,useEffect } from 'react';

function App() {


  const [movies, setMovies] = useState([]);

  
  useEffect(() => {
    GetPopular();
  }, []);

  const GetPopular = async () => {
    const data = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=8433cf99d057dc015d472aaa543637c0&language=en-US&page=1")
    const movies = await data.data.results;
    
    setMovies(movies);
  }


  
  
  console.log(movies)

  return (
    <div className="App">

      <div className="menu">
        <h1>Movie App</h1>

      </div>
      <div className="movies">
      {
        movies.map((movie,index) => (<Movies key={movie.id} movie={movie}/>))
      }
      </div>
    </div>
  );
}

export default App;
