'use strict';

const testKeysInObj = (obj: object, arr: number[]) => {
    let allKeysOfObj = Object.keys(obj);

    const isMissingElement = el => {
        return allKeysOfObj.includes(el);
    };
    //console.log('allKeysOfArr: ',arr.every(isMissingElement));
    return arr.every(isMissingElement) && testKeysInArr(obj, arr);
};

const testKeysInArr = (obj: object, arr: number[]) => {
    let allKeysOfObj = Object.keys(obj);

    const keyIsNotRelevant = el => {
        return arr.includes(el);
    };
    //console.log('allKeysOfObj: ',allKeysOfObj.every(keyIsNotRelevant));
    return allKeysOfObj.every(keyIsNotRelevant);
};

const filterById = (arr: number[], id: number) => {
    const filterMoviesById = el => {
        return parseInt(el.id) === parseInt(id);
    };
    return arr.filter(filterMoviesById);
};

export {
    testKeysInArr,
    testKeysInObj,
    filterById
};