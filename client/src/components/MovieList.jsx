import React from 'react';
import MovieEntry from './MovieEntry';

export default function MovieList( {movieList} ) {
  return (
    <div>
      {(movieList.map((movie, i)=>{return <MovieEntry key={i} i={i} movie={movie}/>}))}
    </div>
  );
};