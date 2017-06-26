'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const datas = require("./data");
const movies = datas.movies;
const movieToDelete = require("./deleteMovie");
const edit = (arr, id, obj) => {
    movieToDelete.remove(movies, id);
    movies.push(obj);
};
exports.edit = edit;
//# sourceMappingURL=editMovie.js.map