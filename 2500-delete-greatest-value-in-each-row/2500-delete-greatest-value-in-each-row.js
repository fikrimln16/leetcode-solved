/**
 * @param {number[][]} grid
 * @return {number}
 */
var deleteGreatestValue = function (grid) {
  let res = 0

  //sorting sub array, karena kita ingin mengambil yang terbesar
  for (let i = 0; i < grid.length; i++) {
    grid[i].sort((a, b) => b - a);
  }

  //lakukan perulangan dengan jumlah isi dari sub array
  let total_row = grid[0].length
  for (let i = 0; i < total_row; i++) {
    let max = -Infinity;
    //perulangan untuk mencari nilai maks dari isi subarray
    for (let j = 0; j < grid.length; j++) {
      //bandingkan sub array sebelumnya dan sub array selanjutnya
      max = Math.max(max, grid[j][i]);
    }

    //tambah res dengan nilai maksnya, lalu lanjutkan ke sub array selanjutnya
    res += max;
  }

  return res;
};