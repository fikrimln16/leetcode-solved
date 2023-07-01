/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} threshold
 * @return {number}
 */
var numOfSubarrays = function(arr, k, threshold) {
  let res = 0;
  let windowSum = 0;

  for (let i = 0; i < k; i++) {
    windowSum += arr[i];
  }

  if (windowSum / k >= threshold) {
    res++;
  }

  for (let i = k; i < arr.length; i++) {
    let nextWindow = arr[i]
    let prevWindow = arr[i-k]
    windowSum += nextWindow - prevWindow;
    if (windowSum / k >= threshold) {
      res++;
    }
  }

  return res;

};