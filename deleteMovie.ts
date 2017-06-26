'use strict';

const remove = (arr: number[], id: number) => {
    delete arr[id - 1];
};

export {
  remove
};