'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const modify = (arr, id, obj) => {
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
exports.modify = modify;
//# sourceMappingURL=modifyMovie.js.map