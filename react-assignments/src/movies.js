import React from 'react';

// export function SelectMovie(){
//     <>
//     <ul>
//         <img src = "movie/goodfellas.jpg"/>
//     </ul>
    
    
//     </>
// }

export function MovieList( {movies = [], onChangeMovies = f => f }) {
    return(
        <>
        <h2>Movie Display</h2>
        { movies.map((movie, i) => {
            console.log(movie)
        })}
        </>

    );
}