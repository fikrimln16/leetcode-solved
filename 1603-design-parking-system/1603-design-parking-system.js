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
ParkingSystem.prototype.addCar = function(carType) {
  switch (carType) {
      case 1:
          return --this.big >= 0;
      case 2:
          return --this.medium >= 0;
      case 3:
          return --this.small >= 0;
      default:
          break;
  }
};