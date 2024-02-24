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
    console.log('this is get request data: ', data);
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
  var query = { title: req.body.title };
  console.log('this is the query: ', query);
  movieList.findOneAndUpdate(query, {watched: !req.body.watched})
  res.send('successful update');
})


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server available at http://localhost${PORT}`);
});
