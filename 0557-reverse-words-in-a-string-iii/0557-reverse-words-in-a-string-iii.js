/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  let split = s.split(' ')
  let res = []

  split.forEach((element, index) => {
    let reverseKata = element.split('')
    for (let i = reverseKata.length-1; i >= 0; i--) {
      res.push(reverseKata[i]);
    }
    index === split.length - 1 ? res.push() : res.push(' ');
  })
  return res.join('')
};