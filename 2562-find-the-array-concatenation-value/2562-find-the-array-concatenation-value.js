/**
 * @param {number[]} nums
 * @return {number}
 */
var findTheArrayConcVal = function(nums) {
    let iterasi = Math.floor(nums.length / 2)

  let start = 0

  let end = nums.length - 1

  let res = 0

  if(nums.length % 2 !== 0){

    res = nums[iterasi]

  }

  while(start < iterasi){

    res += parseInt(`${nums[start]}${nums[end]}`)

    start++

    end--

  }

  return res

};