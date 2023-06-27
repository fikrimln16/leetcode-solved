/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
  let arr = []
  arr.push(0, gain[0])
  
  for (let i = 0; i < gain.length-1; i++) {
    let sum = arr[i+1] + gain[i+1]
    arr.push(sum)
  }

  let alt = arr.sort((a, b) => b-a)

  return alt[0]
};