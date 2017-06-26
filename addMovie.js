'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const datas = require("./data");
const movies = datas.movies;
const newMovie = (movie) => {
    if (movie.id)
        delete movie.id;
    movie.id = movies[movies.length - 1].id + 1;
    movies.push(movie);
};
exports.newMovie = newMovie;
//# sourceMappingURL=addMovie.js.map