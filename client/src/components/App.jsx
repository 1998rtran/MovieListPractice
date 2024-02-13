import React from 'react';
import { useState, useEffect } from 'react';
import AddMovie from './AddMovie';
import MovieList from './MovieList';


export default function App() {
  var list = [
    {title: 'Grown Ups', watched: false},
    {title: 'Mean Girls', watched: false},
    {title: 'Spider-man', watched: false}
  ];
  const [movieList, setMovieList] = useState(list);
  const [movieTitle, setMovieTitle] = useState('');

const changeTitle = (e) => {
  setMovieTitle(e.target.value);
}

const handleAdd = () => {
  var newList = movieList;
  newList.unshift({title: movieTitle, watched: false});
  setMovieList(newList);
  setMovieTitle('');
}

// useEffect(() => {

// }, movieList)

  return (
    <div id="App">
      <h1>Your Movie List!</h1>
      <AddMovie movieTitle={movieTitle} changeTitle={changeTitle} handleAdd={handleAdd}/>
      <MovieList movieList={movieList}/>
      {/* <div>
        {(movieList.map((movie, i)=>{return <ul key={i} title={movie.title}>{movie.title}</ul>}))}
      </div> */}
    </div>
  );
}