'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const testKeysInObj = (obj, arr) => {
    let allKeysOfObj = Object.keys(obj);
    const isMissingElement = el => {
        return allKeysOfObj.includes(el);
    };
    //console.log('allKeysOfArr: ',arr.every(isMissingElement));
    return arr.every(isMissingElement) && testKeysInArr(obj, arr);
};
exports.testKeysInObj = testKeysInObj;
const testKeysInArr = (obj, arr) => {
    let allKeysOfObj = Object.keys(obj);
    const keyIsNotRelevant = el => {
        return arr.includes(el);
    };
    //console.log('allKeysOfObj: ',allKeysOfObj.every(keyIsNotRelevant));
    return allKeysOfObj.every(keyIsNotRelevant);
};
exports.testKeysInArr = testKeysInArr;
const filterById = (arr, id) => {
    const filterMoviesById = el => {
        return parseInt(el.id) === parseInt(id);
    };
    return arr.filter(filterMoviesById);
};
exports.filterById = filterById;
//# sourceMappingURL=helper.js.map