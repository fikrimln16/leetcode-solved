/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number[]}
 */
var sumEvenAfterQueries = function(nums, queries) {
    nums
  let res = []
  for (let i = 0; i < queries.length; i++) {
    const element = queries[i];
    element
    let temp = element[0]
    temp
    let index = element[1]
    index
    let before = nums[index]
    let sum = before + temp
    nums[index] = sum
    nums
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