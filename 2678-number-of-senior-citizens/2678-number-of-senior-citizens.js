/**
 * @param {string[]} details
 * @return {number}
 */
var countSeniors = function(details) {
    let count = 0;
  details.forEach(element => {
    const age = element.slice(11,13)
    if(age > 60) count++
  });

  return count
};