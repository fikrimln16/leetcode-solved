/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    const result = [];

    for (let index = 0; index < arr.length; index++) {
        if(fn(arr[index], index)){
        result.push(arr[index])
        };
    }

    return result;
};