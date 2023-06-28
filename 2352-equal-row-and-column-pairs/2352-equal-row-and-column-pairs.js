/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function(grid) {
  let count = 0;
  const kolom = [];

  for (let row = 0; row < grid.length; row++) {
    let temp = [];
    for (let col = 0; col < grid.length; col++) {
      temp.push(grid[col][row]);
    }
    kolom.push([...temp]);
  }

  for (let i = 0; i < grid.length; i++) {
    const baris = grid[i];
    for (let j = 0; j < kolom.length; j++) {
      const row = kolom[j];
      if (JSON.stringify(row) === JSON.stringify(baris)) {
        count++;
      }
    }
  }

  return count;
};