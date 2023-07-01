/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number[]}
 */
var sumEvenAfterQueries = function(nums, queries) {
  let res = [];
  let evenSum = nums.reduce((acc, curr) => acc + (curr % 2 === 0 ? curr : 0), 0);

  for (let i = 0; i < queries.length; i++) {
    const val = queries[i][0];
    const index = queries[i][1];
    const prevNum = nums[index];
    const newNum = prevNum + val;

    if (prevNum % 2 === 0) {
      evenSum -= prevNum;
    }
    if (newNum % 2 === 0) {
      evenSum += newNum;
    }

    nums[index] = newNum;
    res.push(evenSum);
  }

  return res;
};
