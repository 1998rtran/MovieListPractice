import React from 'react';
import { useState, useEffect } from 'react';
import AddMovie from './AddMovie';


export default function App() {
  var list = [
    {title: 'Grown Ups', watched: false},
    {title: 'Mean Girls', watched: false},
    {title: 'Spider-man', watched: false}
  ];
  const [movieList, setMovieList] = useState(list);
  const [movieTitle, setMovieTitle] = useState('');

  // list.forEach((movie) => {
  //   console.log(movie);
  // })

const changeTitle = (e) => {
  setMovieTitle(e.target.value);
}

const handleAdd = () => {
  var testList = movieList;
  testList.unshift({title: movieTitle, watched: false});
  setMovieList(testList);
  console.log('new movie list', movieList);
  setMovieTitle('');
}

useEffect(() => {

}, movieList)

console.log('tHis is the movie title', movieTitle);
  return (
    <div id="App">
      <h1>Your Movie List!</h1>
      <AddMovie movieTitle={movieTitle} changeTitle={changeTitle} handleAdd={handleAdd}/>
      <div>
        {(movieList.map((movie, i)=>{return <ul key={i} title={movie.title}>{movie.title}</ul>}))}
      </div>
    </div>
  );
}