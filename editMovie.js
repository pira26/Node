'use strict';

const movies = require('./data').movies;
const remove = require('./deleteMovie');

const edit = (arr, id, obj) => {
    remove.movieToDelete(movies, id);
    movies.push(obj);
};

module.exports = {
    movieToEdit: edit
};