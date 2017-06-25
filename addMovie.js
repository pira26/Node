'use strict';

const movies = require('./data').movies;

const newMovie = movie => {
    if(movie.id) delete movie.id;
    movie.id = movies[movies.length - 1].id + 1;
    movies.push(movie);
};

module.exports = {
    newMovie
};