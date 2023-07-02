/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
   let map = new Map();

  nums.forEach((element, index) => {
    if (map.has(element) === false) {
      let temp = 0;
      map.set(element, temp + 1);
    } else {
      let temp = map.get(element);
      map.set(element, temp + 1);
    }
  });

  map
  let res = 0;
  map.forEach((kunci, nilai) => {
    if (kunci === 1) {
      res = nilai;
    }
  });

  return res; 
};