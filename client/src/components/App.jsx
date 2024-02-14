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
  const [permList, setPermList] = useState(list);
  const [movieTitle, setMovieTitle] = useState('');
  const [searchInput, setSearchInput] = useState('');

const changeTitle = (e) => {
  setMovieTitle(e.target.value);
}

const handleAdd = () => {
  var newList = movieList;
  newList.unshift({title: movieTitle, watched: false});
  setMovieList(newList);
  setMovieTitle('');
}

const handleSearch = (e) => {
setSearchInput(e.target.value);
}

var searchedList = movieList.filter((movie) => {
  {return movie.title.toLowerCase().includes(searchInput.toLowerCase())}
})

useEffect(() => {
  if (searchInput !== 0) {
    setMovieList(searchedList);
  }
}, [searchInput])

  return (
    <div id="App">
      <h1>Your Movie List!</h1>
      <input type="text" placeholder="Search here!" onChange={handleSearch} value={searchInput} />
      <AddMovie movieTitle={movieTitle} changeTitle={changeTitle} handleAdd={handleAdd}/>
      <MovieList movieList={movieList}/>
    </div>
  );
}