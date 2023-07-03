/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function(groupSizes) {
  const result = [];
  const map = new Map();

  for (let index = 0; index < groupSizes.length; index++) {
    const groupSize = groupSizes[index];
    
    //periksa apakah sudah ada key nya atau belum, 
    //jika tidak buat key dengan value array temp
    if (map.has(groupSize) === false) {
      map.set(groupSize, []);
    }
    
    //masukan index(index) ke array temp tadi
    map.get(groupSize).push(index);

    //cek terlebih dahulu jika size array sama dengan value groupsize
    if (map.get(groupSize).length === groupSize) {
      //masukan temp array tadi ke result
      let arr = map.get(groupSize)
      result.push(arr);
      //hapus key sebelumnya
      map.delete(groupSize);
    }
  }

  return result;
};