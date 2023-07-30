/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var findRow = function(matrix, target) {
  let top = 0;
  let bottom = matrix.length - 1;
  let indexRow = -1; // Inisialisasi dengan nilai -1 untuk menandakan bahwa elemen tidak ditemukan

  while (top <= bottom) {
    indexRow = Math.floor((top + bottom) / 2);

    if (matrix[indexRow][matrix[0].length - 1] < target) {
      top = indexRow + 1;
    } else if (matrix[indexRow][0] > target) {
      bottom = indexRow - 1;
    } else {
      return indexRow;
    }
  }

  // Jika elemen tidak ditemukan, maka nilai indexRow akan tetap -1
  return indexRow;
};

var findColumn = function(matrix, row, target) {
  let left = 0;
  let right = matrix[0].length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (matrix[row][mid] === target) {
      return true; // Elemen ditemukan, kembalikan indeks kolom
    } else if (matrix[row][mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return false; // Elemen tidak ditemukan dalam baris yang ditentukan
};


var searchMatrix = function(matrix, target) {
  let row = findRow(matrix, target);
  if (row === -1) {
    return false; // Elemen tidak ditemukan dalam matriks, langsung kembalikan -1
  }

  let col = findColumn(matrix, row, target);
  return col;
};