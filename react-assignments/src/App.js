import { useState, useEffect } from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";

function MovieList(){

}

function App() {

  const [movies, setMovies] = useState(null);
  

  useEffect( () => {
    fetch("./movies.json")
    .then( response => response.json())
    .then( setMovies )
    .then( console.log(movies))
    .catch( e => console.log(e.message));
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        
        <p>
         MOVIE REVIEWS
        </p>

        <MovieList movies={movies} setMovies={setMovies}/>
        
      </header>
    </div>
  );
}

export default App;
