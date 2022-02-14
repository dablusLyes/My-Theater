import './App.css';
import { useState,useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Movies from './components/Movie';
import GetPopular from './services/PopularMovies';

function App() {


  const [movies, setMovies] = useState([]);


  GetPopular()
  useEffect(() => {
    console.log("useEffect");
  }, []);


  

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
