class Cashier {
  constructor(n, discount, products, prices) {
    this.map = new Map();
    for (let i = 0; i < products.length; i++) {
      this.map.set(products[i], prices[i]);
    }

    this.n = n;
    this.discount = discount;
    this.count = 0;
  }

  getBill(product, amount) {
    this.total = 0;
    this.barang = 0;
    for (let i = 0; i < product.length; i++) {
      let jumlah_barang = amount[i];
      this.barang++;
      this.total += this.map.get(product[i]) * jumlah_barang;
    }

    this.count++;
    if (this.count === this.n) {
      this.count = 0;
      return this.total * ((100 - this.discount) / 100);
    }

    return this.total;
  }
}