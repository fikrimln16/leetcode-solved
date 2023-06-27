/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
  var str = new Array(indices.length);     
  
  for (let index = 0; index < indices.length; index++) {
    str[indices[index]] = s[index];
  }

  return str.join('')
};