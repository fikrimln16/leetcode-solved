/**
 * @param {string} path
 * @return {boolean}
 */
var isPathCrossing = function (path) {
  let arr = path.split("");
  let map = {};

  let x = 0;
  let y = 0;
  map[`${x},${y}`] = true;

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (element === "N") {
      y++;
    } else if (element === "E") {
      x++;
    } else if (element === "S") {
      y--;
    } else if (element === "W") {
      x--;
    }

    let newCoor = `${x},${y}`;
    newCoor;

    //pengecekan
    if (map.hasOwnProperty(newCoor)) {
      return true;
    } else {
      map[newCoor] = true;
    }
  }

  return false;
};