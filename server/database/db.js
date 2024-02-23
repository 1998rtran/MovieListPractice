const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/movielistpractice')
.then(()=> {console.log('Connetion Successful')})
.catch(error => handleError(error));

const movieListSchema = new mongoose.Schema({
  title: String,
  watched: Boolean
});

const movieList = mongoose.model('movie', movieListSchema);

module.exports.movieList = movieList;