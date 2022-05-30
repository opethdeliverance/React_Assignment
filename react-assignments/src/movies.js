import React from 'react';

export function MovieList( {movies = [], onChangeMovies = f => f }) {
    if ( movies == null || movies == undefined )
        return <h1>No movies to display</h1>

    
    return(
        <>
        <h2>Movie Display</h2>
        { movies.map((movie, i) => {
            console.log(movie);
            return <h2>{movie.name}</h2>;
        })}
        </>

    );
}