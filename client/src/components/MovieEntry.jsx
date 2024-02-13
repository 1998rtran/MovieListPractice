import React from 'react';

export default function MovieEntry( { i, movie } ) {
  return (
    <div>
      <ul key={i} title={movie.title}>{movie.title}</ul>
    </div>
  );
};