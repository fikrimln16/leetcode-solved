/**
 * @param {string[]} bank
 * @return {number}
 */
var numberOfBeams = function (bank) {

  //variable untuk menyimpan total device yang tersedia
  let devices = [];

  //metode matriks untuk mengambil setiap value
  for (let i = 0; i < bank.length; i++) {
    const row = bank[i].split("");
    
    //deviceBaris untuk menentukan berapa devices dari setiap baris
    let deviceBaris = 0;
    for (let j = 0; j < row.length; j++) {
      const col = bank[i][j];
      //jika setiap value bernilai 1,
      if (col === "1") {
        //tambah ke deviceBaris
        deviceBaris++;
      }
    }

    //jika deviceBaris tidak ada, tidak usah dimasukkan ke devices
    if (deviceBaris > 0) {
      devices.push(deviceBaris);
    }
  }

  //variable untuk menyimpan laser-lasernya
  let res = 0;
  //melalukan perhitungan Math untuk menghubungkan devices ke devices
  for (let i = 0; i < devices.length - 1; i++) {
    res += devices[i] * devices[i + 1]
  }

  return res;
};