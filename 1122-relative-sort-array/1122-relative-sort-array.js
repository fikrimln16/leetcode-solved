/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
  let res = [];
  let sisa = [];

  let map = new Map();
  arr2.forEach((element) => {
    if (!map.has(element)) {
      map.set(element, 0);
    }
  });

  arr1.forEach((element) => {
    if (!map.has(element)) {
      sisa.push(element);
    } else {
      map.set(element, map.get(element) + 1);
    }
  });

  map.forEach((element, index) => {
    for (let i = 0; i < element; i++) {
      res.push(index);
    }
  });

  return res.concat(sisa.sort((a, b) => a - b));
};