/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function (words, k) {
  let map = new Map();
  words.forEach((element) => map.set(element, (map.get(element) || 0) + 1));

  return Array.from(map.entries()).sort((a, b) => {
    let countCompare = b[1] - a[1];
    //bandingkan sesuai leksikografis jika value nya sama
    if (countCompare === 0) {
      return a[0].localeCompare(b[0]);
    } else {
      return countCompare;
    }
  }).slice(0, k).map((entry) => entry[0])
};