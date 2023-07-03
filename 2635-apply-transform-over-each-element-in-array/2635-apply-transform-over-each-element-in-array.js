/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    const toReturnArr = new Array(arr.length);
    for( let i=0;i<arr.length; ++i){
        toReturnArr[i] = fn(arr[i],i)
    }
    return toReturnArr
};