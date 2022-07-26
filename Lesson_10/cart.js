'use strict';

const cart = {

  items: [],
  count: 0,
  get TotalPrice() {
    return this.calculateItemPrice();
  },
  add(item, price, count = 1) {
    this.items.push({
      item,
      price,
      count,
    });

    this.increaseCount(count);
  },
  increaseCount(quantity) {
    this.count += quantity;
  },
  // calculateItemPrice(itemPrice = 0) {
  //     acc = 0;
  //     for (let i = 0; i < this.items.length; i++) {
  //         itemPrice = this.items[i].price * this.items[i].count;
  //         acc += itemPrice
  //     }
  //     return acc;
  // },
  calculateItemPrice() {
    const sum = this.items.reduce((acc, currentItem) => {
      const itemPrice = currentItem.price * currentItem.count;
      return acc + itemPrice;
    }, 0);

    return sum;
  },
  clear() {
    this.items = [],
    this.totalPrice = 0;
    this.count = 0;
  },
  print() {
    console.log(JSON.stringify(this.items));
    console.log(`totalPrice:  ${this.TotalPrice}`);
  },
};


cart.clear();
cart.add('styka', 100, 3);
cart.add('styka2', 10, 2);
cart.add('styka2', 1);
cart.add('styka2', 1000, 4);
cart.print();
