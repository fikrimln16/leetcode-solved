/**
 * @param {number[]} nums
 * @return {number}
 */
var averageValue = function(nums) {
  let total = 0;
  let even = Math.floor(nums.filter((element) => {
    if (element % 3 === 0 && element % 2 === 0) {
      total++;
      return element % 3 === 0 && element % 2 === 0;
    }
  }).reduce((cur, number) => {
    return cur + number
  }, 0) / total);


  if (total === 0) {
    return 0;
  } else {
    return even;
  }
};