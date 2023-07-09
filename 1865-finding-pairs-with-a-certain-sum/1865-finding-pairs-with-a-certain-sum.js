var FindSumPairs = function (nums1, nums2) {
  this.nums1 = nums1;
  this.nums2 = nums2;
  this.map = new Map();
  this.map2 = new Map();

  nums1.forEach((num1) => {
    this.map.set(num1, (this.map.get(num1) || 0) + 1);
  });
  nums2.forEach((num2) => {
    this.map2.set(num2, (this.map2.get(num2) || 0) + 1);
  });
};

FindSumPairs.prototype.add = function (index, val) {
  var x = this.nums2[index];
  this.map2.set(x, this.map2.get(x) - 1);
  this.nums2[index] += val;
  var newX = x + val;
  this.map2.set(newX, (this.map2.get(newX) || 0) + 1);
};

FindSumPairs.prototype.count = function (tot) {
  var count = 0;
  for (var [key, value] of this.map) {
    var diff = tot - key;
    var value2 = this.map2.get(diff);
    if (value2 !== undefined) {
      count += value * value2;
    }
  }
  return count;
};