/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function(s, k) {
    let split = s.split(' ')
  let res = []
  for (let index = 0; index < k; index++) {
    res.push(split[index])
  }

  return res.join(' ')
};