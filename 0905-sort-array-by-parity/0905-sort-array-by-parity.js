/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    let res = []
  let even = [] ; let odd = []
  nums.map((element) => {
    if(element % 2 === 0){
      even.push(element)
    } else {
      odd.push(element)
    }
  })

  return res.concat(even, odd)
};