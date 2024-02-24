import React from 'react';

export default function AddMovie( {movieTitle, changeTitle, handleAdd} ) {

  return (
    <div>
      <input placeholder='Add your favorite movie!' type='text' value={movieTitle} onChange={changeTitle} />
      <button onClick={() => {handleAdd(movieTitle)}}>Add Movie!</button>
    </div>
  );
}