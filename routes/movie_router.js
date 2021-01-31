const express = require('express');
const movieRouter = express.Router();
const mongoose = require('mongoose');
const Movie = require('./../models/Movie.model');

movieRouter.get('/movies', (req, res, next) => {
  Movie.find()
    .then((movies) => {
      console.log(movies);
      res.render('movies', { movies: movies });
    })
    .catch((error) => next(error));
});

movieRouter.get('/movies/:id', (req, res, next) => {
  const id = req.params.id;
  console.log(id);
  Movie.findById(id)
    .then((movie) => {
      res.render('singleMovie', { movie });
    })
    .catch((err) => next(err));
});

module.exports = movieRouter;
