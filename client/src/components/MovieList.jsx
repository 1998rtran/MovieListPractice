import React from 'react';
import MovieEntry from './MovieEntry';

export default function MovieList( {movieList, handleRemove, handleWatch} ) {
  return (
    <div>
      {(movieList.map((movie, i)=>{return <MovieEntry key={i} i={i} movie={movie} handleRemove={handleRemove} handleWatch={handleWatch}/>}))}
    </div>
  );
};