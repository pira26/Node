'use strict';

import * as datas from './data';
const movies = datas.movies;

const newMovie = (movie: object) => {
    if(movie.id) delete movie.id;
    movie.id = movies[movies.length - 1].id + 1;
    movies.push(movie);
};

export {
    newMovie
};
