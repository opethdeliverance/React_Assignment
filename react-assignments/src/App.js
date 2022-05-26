import { useState, useEffect } from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import { MovieList } from './movies'; 



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
        
        <h1>
         MOVIE REVIEWS
        </h1>

            <MovieList movies={movies} setMovies={setMovies}/>
         
            {/* <SelectMovie/> */}
          
        
      </header>
    </div>
  );
}

export default App;
