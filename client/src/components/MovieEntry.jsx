import React from 'react';

export default function MovieEntry( { i, movie, handleRemove } ) {
  return (
    <div>
      <ul key={i} title={movie.title}>{movie.title}</ul>
      <button onClick={handleRemove} >X</button>
    </div>
  );
};