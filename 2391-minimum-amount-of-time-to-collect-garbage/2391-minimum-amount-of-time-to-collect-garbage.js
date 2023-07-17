/**
 * @param {string[]} garbage
 * @param {number[]} travel
 * @return {number}
 */
var garbageCollection = function (garbage, travel) {
  let prefixSum = [];
  prefixSum[0] = 0
  prefixSum[1] = travel[0];
  for (let i = 2; i <= travel.length; i++) {
    prefixSum[i] = prefixSum[i - 1] + travel[i-1];
  }

  let g = 0;
  let index_g = 0;
  let p = 0;
  let index_p = 0;
  let m = 0;
  let index_m = 0;

  for (let i = 0; i < garbage.length; i++) {
    let element = garbage[i];
    if (element.includes("G")) {
      index_g = i;
      g = g + element.split("").filter(function (element) {
        return element === "G";
      }).length;
    }
    if (element.includes("P")) {
      index_p = i ;
      p = p + element.split("").filter(function (element) {
        return element === "P";
      }).length;
    }
    if (element.includes("M")) {
      index_m = i;
      m = m + element.split("").filter(function (element) {
        return element === "M";
      }).length;
    }
  }

  return prefixSum[index_g] + g + prefixSum[index_p] + p + prefixSum[index_m] + m
};