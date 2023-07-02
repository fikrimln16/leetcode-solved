/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array[]}
 */
var chunk = function(arr, size) {
    var chunkedArray = [];
    var index = 0;

    while (index < arr.length) {
        const chunk = arr.slice(index, index + size)
        chunkedArray.push(chunk);
        index += size;
    }

    return chunkedArray;
};