const cart = {
    
    items: [],
    totalPrice: 0,
    count: 0,
    getTotalPrice() {
        return this.totalPrice;
    },
    add(item, price, count = 1) {
        this.items.push({
            item,
            price,
            count,
        });

        this.increaseCount(count);
        this.calculateItemPrice();
    },
    increaseCount(quantity) {
        this.count += quantity;
    },
    calculateItemPrice(itemPrice = 0) {
        
        for (let i = 0; i < this.items.length; i++) {
            itemPrice = this.items[i].price * this.items[i].count;            
        }
        this.totalPrice += itemPrice;
        
        return itemPrice;
    },
    clear() {
        this.items = [],
            this.totalPrice = 0;
        this.count = 0;
    },
    print() {
        console.log(JSON.stringify(this.items));
        console.log(`totalPrice:  ${this.getTotalPrice()}`);
    },
}


cart.clear();
cart.add('styka', 100, 3);
cart.add('styka2', 10, 2);
cart.add('styka2', 1);

cart.print();