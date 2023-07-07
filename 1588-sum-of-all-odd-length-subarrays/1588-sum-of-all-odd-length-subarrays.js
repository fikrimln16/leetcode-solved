/**
 * @param {number[]} arr
 * @return {number}
 */

function findSubarrays(arr) {
  const subarrays = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      const subarray = arr.slice(i, j + 1);
      subarrays.push(subarray);
    }
  }

  return subarrays;
}

var sumOddLengthSubarrays = function(arr) {
    return findSubarrays(arr).map((element) => {
    if (element.length % 2 !== 0) {
      return element
    }
  }).filter((element) => element!=undefined).reduce((accumulator, currentArray) => {
    return accumulator + currentArray.reduce((subAccumulator, currentValue) => {
      return subAccumulator + currentValue;
    }, 0);
  }, 0);
};