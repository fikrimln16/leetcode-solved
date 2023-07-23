/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {

  let found = [];
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[0].length; col++) {
      if (matrix[row][col] === 0) {
        let foundAt = [row, col];
        found.push(foundAt);
      }
    }
  }

  for (let i = 0; i < found.length; i++) {
    const [row, col] = found[i];

    for (let i = 0; i < matrix.length; i++) {
      matrix[i][col] = 0
    }

    for (let i = 0; i < matrix[0].length; i++) {
      matrix[row][i] = 0
    }
    
  }

  return matrix
};