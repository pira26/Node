'use strict';

import * as datas from './data';
const movies = datas.movies;
import * as movieToDelete from './deleteMovie';

interface Movie {
    id: number,
    title: string,
    category: string ,
    releaseYear: number,
    poster: string,
    directors: string,
    actors: string,
    synopsis: string,
    rate: number,
    lastViewDate: string,
    price: number
}

const edit = (arr: object[], id: number, obj: Movie) => {
    movieToDelete.remove(movies, id);
    movies.push(obj);
};

export {
    edit
};