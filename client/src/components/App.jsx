import React from 'react';
import { useState, useEffect } from 'react';
import AddMovie from './AddMovie';
import MovieList from './MovieList';


export default function App() {
  var list = [
    {title: 'Grown Ups', watched: false},
    {title: 'Mean Girls', watched: false},
    {title: 'Spider-man', watched: true}
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
  if (searchInput.length !== 0) {
    setMovieList(searchedList);
  } else if (searchInput.length === 0) {
    setMovieList(permList);
  }
}, [searchInput])

const handleRemove = (e) => {
  var target = e.target.parentElement
  target.remove();
}

const handleWatch = (movie) => {
  console.log(movie);
  if (movie.watched === true) {
    movie.watched = false;
  } else {
    movie.watched = true;
  }
}

// useEffect(() => {

// }, [])

  return (
    <div id="App">
      <h1>Your Movie List!</h1>
      <input type="text" placeholder="Search here!" onChange={handleSearch} value={searchInput} />
      <AddMovie movieTitle={movieTitle} changeTitle={changeTitle} handleAdd={handleAdd}/>
      <MovieList movieList={movieList} handleRemove={handleRemove} handleWatch={handleWatch}/>
    </div>
  );
}