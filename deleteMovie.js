'use strict';

const movieToDelete = (arr, id) => {
    delete arr[id - 1];
};

module.exports = {
  movieToDelete
};