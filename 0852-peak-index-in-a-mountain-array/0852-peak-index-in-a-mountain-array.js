var peakIndexInMountainArray = function (arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] < arr[mid - 1]) {
      right = mid - 1;
    } else {
      left = mid + 1
    }
  }
  
  return right
};