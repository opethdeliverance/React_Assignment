import React, { useState } from 'react';
import './App.css';


export function Movies({movies, setMovies}){
    return(
        <div id="movies">
            
            <MovieList movies={movies} onChangeMovies = {
                movieTitle => {const newMovie = movies.filter(movie => movie.name !== movieTitle);
                    setMovies(newMovie);}}/>     
        </div>
    )
}

export function MovieList( {movies = [], onChangeMovies = f => f }) {
    if ( movies == null || movies == undefined )
        return <h1>No movies to display</h1>    
    return(
        <div id="movielist">
    
        { movies.map((movie, i) => {
            console.log(movie);
            return <MovieDisplay key={movie.name} {...movie} onRemove={onChangeMovies}/>;            
        })}
        </div>
    );
}

export function MovieDisplay( {name, year, cast, poster, rating, onRemove = f => f}){
    return(
        <>
        <h1>{name} ({year})</h1>
        <img src={poster} height="500px" width="300px"/>
        <h2>Cast: {cast.join(", ")}</h2>
        <h3>Rating (out of 10): {rating}</h3>
        <br></br>
        <button onClick={() => onRemove(name)}>DELETE {name}</button> 
        </>
    )
}

export function Home(){
    return(
        <div id="home">
            <h1></h1>
            <img src={"movie/steveimdb.jpg"} alt="homelogo" class="center" height="400px"  ></img>
        </div>
    )
}

export function AddMovie({add}){
    const [movies, setMovies] = useState({
        name: "", year: "", cast: "", poster: "", rating: ""
    });

    const changeForm = (event) => {
        setMovies({...movies, [event.target.id]: event.target.value});
    }

    const submitForm = (event) => {
        event.preventDefault();
        add(movies);
        setMovies({name: "", year: "", cast: "", poster: "", rating: ""})
    }

    return(
        <>
        <div id="add">
            <form onSubmit={submitForm}>
                <input type="text" id="name" placeholder='Title' value={movies.name} onChange={changeForm} required/><br></br>                
                <input type="text" id="year" placeholder='Year of release' value={movies.year} onChange={changeForm} required/><br></br>
                <input type="text" id="cast" placeholder='Cast' value={movies.cast} onChange={changeForm} required/><br></br>
                <input type="file" id="poster" placeholder='Poster'  value={movies.poster} onChange={changeForm} required/><br></br>
                <input type="text" id="rating" placeholder='Rating out of 10' value={movies.rating} onChange={changeForm} required/><br></br>
                <button>Add Movie!</button>
            </form> 
        </div>        
        </>
    )
}
// TODO GET FORM TO SUBMIT!!!!

// function DisplayMovie({form}) {
//     return(
//         <div id="add">
//             {form.map((movie) => (
//                 <>
//                 <h1>{name} ({year})</h1>
//                 <img src={poster} height="500px" width="300px"/>
//                 <h2>Cast: {cast.join(", ")}</h2>
//                 <h3>Rating (out of 10): {rating}</h3>
//                 </>
//             ))}
//         </div>
//     )
// }