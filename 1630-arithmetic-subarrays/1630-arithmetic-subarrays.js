/**
 * @param {number[]} nums
 * @param {number[]} l
 * @param {number[]} r
 * @return {boolean[]}
 */
var checkArithmeticSubarrays = function(nums, l, r) {
  let res = [];

  for (let i = 0; i < l.length; i++) {
    let temp = nums.slice(l[i], r[i] + 1);
    let sorted = temp.slice().sort((a, b) => a - b);
    let op = sorted[1] - sorted[0];
    let isArithmetic = true;

    for (let j = 0; j < sorted.length - 1; j++) {
      if (sorted[j] + op !== sorted[j + 1]) {
        isArithmetic = false;
        break;
      }
    }

    res.push(isArithmetic);
  }

  return res;
};