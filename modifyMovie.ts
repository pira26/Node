'use strict';

const modify = (arr: string[] | number[], id: number, obj: object) => {
    arr[id - 1].id = id;
    arr[id - 1].title = obj.title;
    arr[id - 1].category = obj.category;
    arr[id - 1].releaseYear = obj.releaseYear;
    arr[id - 1].poster = obj.poster;
    arr[id - 1].directors = obj.directors;
    arr[id - 1].actors = obj.actors;
    arr[id - 1].synopsis = obj.synopsis;
    arr[id - 1].rate = obj.rate;
    arr[id - 1].lastViewDate = obj.lastViewDate;
    arr[id - 1].price = obj.price;
};

export {
    modify
};