import React from 'react';

export default function MovieEntry( { i, movie, handleRemove, handleWatch } ) {
  return (
    <div>
      <ul key={i} title={movie.title}>{movie.title}</ul>
      {(movie.watched ? <button onClick={()=>{handleWatch(movie.title, movie.watched)}}>watched</button> : <button onClick={()=>{handleWatch(movie.title, movie.watched)}}>to watch</button>)}
      <button onClick={()=>{handleRemove(i)}} >X</button>
    </div>
  );
};