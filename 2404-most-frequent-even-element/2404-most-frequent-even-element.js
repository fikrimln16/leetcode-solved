/**
 * @param {number[]} nums
 * @return {number}
 */
var mostFrequentEven = function (nums) {
  let map = new Map();
  
  //mencari nilai genap, dan sorting hasilnya secara ascending
  const even = nums.filter(num => num % 2 === 0).sort((a,b) => a-b);
  if(even.length === 0) return -1

  //menghitung / counter untuk mendapatkan jumlah angka genapnya
  even.forEach((element) => {map.set(element, (map.get(element) || 0) + 1);});
  //sorting map berdasarkan value dari yang terkecil
  const result = Array.from(map.entries()).sort((a, b) => b[1] - a[1]).slice(0, 1).map(([key]) => key);

  return result;
};