require('dotenv').config();
const path = require('path');


const express = require('express');
const morgan = require('morgan');


const app = express();
const {movieList} = require('./database/db.js');

app.use(morgan('dev'));


app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/movielist', (req, res) => {
  movieList.find({}).exec()
  .then((data)=> {
    // console.log('this is GET request data: ', data);
    res.send(data);
  })
  .catch((error)=> {
    console.error('Unable to get movie list');
  })
})

app.post('/movielist', (req, res) => {
  console.log("this is the request's body :", req.body);
  movieList.create({ title: req.body.title, watched: req.body.watched });
  res.send('successful post');
})


app.patch('/movielist', (req, res) => {
  var movie = req.body.movie;
  movieList.findOneAndUpdate({_id: movie._id}, {watched: !movie.watched})
  .then(()=>{
    res.status(200).send('successful watched update');
  })
  .catch((err) => {
    console.error('Unable to update watched status', err);
  })
})

app.delete('/movielist', (req, res) => {
  console.log('delete request: ', req.body);
movieList.findOneAndDelete({_id: req.body._id})
.then(() => {
  res.status(200).send('successful delete');
})
})
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server available at http://localhost${PORT}`);
});
