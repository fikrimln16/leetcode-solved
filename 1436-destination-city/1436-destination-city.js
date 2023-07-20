/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function (paths) {
  let set = new Set();

  paths.forEach((path) => {
    set.add(path[1]);
  });

  paths.forEach((path) => {
    if(set.has(path[0])) set.delete(path[0])
  })

  let res = ''
  set.forEach((element)=>{
    res = element
  })

  return res
};