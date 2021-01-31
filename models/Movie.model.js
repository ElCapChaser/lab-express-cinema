const mongoose = require('mongoose');

//Movie Schema
const movieSchema = new mongoose.Schema({
  title: String,
  director: String,
  //testing different string type declarations
  stars: [{ type: String }],
  image: String,
  description: String,
  showtimes: [String]
});

//Movie model
const Movie = mongoose.model('Movie', movieSchema);

//Export movie model
module.exports = Movie;
