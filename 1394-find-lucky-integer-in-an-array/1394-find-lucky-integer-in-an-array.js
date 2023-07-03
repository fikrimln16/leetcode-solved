/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function(arr) {
  const frequency = {};

  // Menghitung frekuensi setiap elemen dalam array
  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    if (frequency[num]) {
      frequency[num]++;
    } else {
      frequency[num] = 1;
    }
  }

  frequency

  // Mencari angka beruntung (lucky number)
  let luckyNumber = -1;
  for (const key in frequency) {
    if (parseInt(key) === frequency[key]) {
      luckyNumber = Math.max(luckyNumber, parseInt(key));
    }
  }

  return luckyNumber;
};