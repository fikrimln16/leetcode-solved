/**
 * @param {number[]} arr
 * @return {number}
 */

var sumOddLengthSubarrays = function(arr) {
  const n = arr.length;
  let sum = 0;
  
  if (n === 1) return arr[0];
  
  // Turn arr into a prefix sum array
  for (let i = 1; i < n; i++)
      arr[i] += arr[i-1];
  
  let numOfSlidingWindows = Math.ceil(n/2);
  
  for (let i = 0; i < numOfSlidingWindows; i++) {
      for (let j = i*2; j < n; j++) {
          if (j-(i*2)-1 < 0) {
              sum += arr[j];
          }
          else sum += arr[j] - arr[j-(i*2)-1]
      }
  }
  return sum;
};  
