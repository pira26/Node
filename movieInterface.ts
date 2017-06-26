'use strict';

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

export {
    Movie
}