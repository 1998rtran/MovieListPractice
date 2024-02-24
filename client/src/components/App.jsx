import React from 'react';
import { useState, useEffect } from 'react';
import AddMovie from './AddMovie';
import MovieList from './MovieList';
const axios = require('axios').default;

export default function App() {
  var list = [
    {title: 'Grown Ups', watched: false},
    {title: 'Mean Girls', watched: false},
    {title: 'Spider-man', watched: true}
  ];
  const [movieList, setMovieList] = useState([]);
  const [permList, setPermList] = useState([]);
  const [movieTitle, setMovieTitle] = useState('');
  const [searchInput, setSearchInput] = useState('');

useEffect(() => {
  axios.get('/movielist')
  .then((response) => {
    console.log('this is the http request data: ', response.data);
    setMovieList(response.data);
    setPermList(response.data);
  })
  .catch((error) => {
    console.error('Error retreiving response');
  })
}, [])

const changeTitle = (e) => {
  setMovieTitle(e.target.value);
}

const handleAdd = (movieTitle) => {
  axios.post('/movielist', {title: movieTitle, watched: false})
  .then(() => {
    return axios.get('/movielist')
    .then((response) => {
      setMovieList(response.data);
      setPermList(response.data);
    })
    .catch((error) => {
      console.error('Error retrieving response');
    })
    .then(() => {
      setMovieTitle('');
    })
  })
}

const handleSearch = (e) => {
setSearchInput(e.target.value);
}

var searchedList = permList.filter((movie) => {{return movie.title.toLowerCase().includes(searchInput.toLowerCase())}})

useEffect(() => {
  if (searchInput.length !== 0) {
    setMovieList(searchedList);
  } else if (searchInput.length === 0) {
    setMovieList(permList);
  }
}, [searchInput])

const handleRemove = (i) => {
  // var target = e.target.parentElement
  // target.remove();
  console.log(i)
  var oldList = movieList
  var newList = oldList.splice(i, 1);
  setMovieList(oldList);
}

const handleWatch = (movie) => {
console.log(movie);
  if (movie.watched === true) {
    movie.watched = false;
  } else {
    movie.watched = true;
  }
}

const filterWatched = () => {
  var watchedList = permList.filter((movie) => {
    return movie.watched;
  })
  setMovieList(watchedList);
}

const filterToWatch = () => {
  var toWatchList = permList.filter((movie) => {
    return !movie.watched;
  })
  setMovieList(toWatchList);
}

const resetList = () => {
  setMovieList(permList);
}

  return (
    <div id="App">
      <h1>Your Movie List!</h1>
      <input type="text" placeholder="Search here!" onChange={handleSearch} value={searchInput} />
      <AddMovie movieTitle={movieTitle} changeTitle={changeTitle} handleAdd={handleAdd}/>
      <div>
        <button onClick={filterWatched}>Watched</button>
        <button onClick={filterToWatch}>To Watch</button>
        <button onClick={resetList}>Reset List!</button>
      </div>
      <MovieList movieList={movieList} handleRemove={handleRemove} handleWatch={handleWatch}/>
    </div>
  );
}