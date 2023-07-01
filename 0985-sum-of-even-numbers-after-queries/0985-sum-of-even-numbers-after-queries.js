/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number[]}
 */
var sumEvenAfterQueries = function(nums, queries) {
  let res = []
  for (let i = 0; i < queries.length; i++) {
    let sum = nums[queries[i][1]] + queries[i][0]
    nums[queries[i][1]] = sum
    let even = nums.filter((element) => {
      return element % 2 == 0
    })

    if(even.length === 0){
      res.push(0)
    } else{
      res.push(even.reduce((a, b) => {
        return a + b
      }))
    }
  }
  return res
};