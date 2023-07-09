/**
 * @param {number} big
 * @param {number} medium
 * @param {number} small
 */
var ParkingSystem = function (big, medium, small) {
  this.big = big
  this.medium = medium
  this.small = small
};

/**
 * @param {number} carType
 * @return {boolean}
 */
ParkingSystem.prototype.addCar = function (carType) {
  if(carType === 1) {
    if(this.big === 0){
      return false
    }
    this.big--
    return true
  }
  if(carType === 2) {
    if(this.medium === 0){
      return false
    }
    this.medium--
    return true
  }
  if(carType === 3) {
    if(this.small === 0){
      return false
    }
    this.small--
    return true
  }
};