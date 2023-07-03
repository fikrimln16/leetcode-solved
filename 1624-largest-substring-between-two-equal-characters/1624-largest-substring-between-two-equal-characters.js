/**
 * @param {string} s
 * @return {number}
 */
var maxLengthBetweenEqualCharacters = function(s) {
 let array = s.split('')

  let temp = []
  let res = []
  let max = 0
  for (let i = 0; i < array.length; i++) {
    for (let j = i+1; j < array.length; j++) {
      if(array[i] === array[j]){
        temp.push(i, j)
      }
    }
  }

  for (let i = 0; i < temp.length; i++) {
    let element = temp[i]
    let element2 = temp[i+1]
    let sum = element2 - element
    if(sum > max){
      max = sum
    }
  }

  if(temp.length && res.length >= 0){
    return max-1
  } else if (temp.length && res.length === 0){
    return temp.length
  } else {
    return -1
  }
};