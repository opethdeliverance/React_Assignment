import { useState, useEffect } from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import { Movies, Home, AddMovie, MovieDisplay } from './pages'; 
import NavBar from "./NavBar";


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
    <>
    <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/movies" element={<Movies movies={movies} setMovies={setMovies}/>}/>
          <Route path="/add" element={<AddMovie movies={movies} setMovies = {setMovies}/>}/>
          {/* get form to submit?? */}
        </Routes>        
      </>
  );
}

export default App;
