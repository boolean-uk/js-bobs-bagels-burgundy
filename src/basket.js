const MENU = require('./menu.js');

const SMALL_BASKET = 5;
const MEDIUM_BASKET = 10;
const LARGE_BASKET = 15;

class ShoppingBasket {
  // Constructor to initialize the basket with a default capacity
  constructor(capacity = 5) {
    this.items = []; // Array to hold basket items
    this.capacity = capacity; // Capacity of the basket
  }

  // Getter method to retrieve the basket items
  getItems() {
    return this.items;
  }

  // Setter method to set the basket size with validation
  setBasketSize(size) {
    const validSizes = [SMALL_BASKET, MEDIUM_BASKET, LARGE_BASKET];
    if (validSizes.includes(size)) {
      this.capacity = size;
    } else {
      throw new Error('Invalid basket size');
    }
  }

  // Method to add an item to the basket, with checks for basket capacity and menu availability
  addItem(itemName, itemQuantity) {
    if (this.items.length >= this.capacity) {
      throw new Error('Basket is full');
    }

    const menu = MENU.getMenu();
    const item = menu[itemName];

    if (item !== undefined) {
      const basketItem = {
        item: itemName,
        quantity: itemQuantity,
        price: item,
      };
      this.items.push(basketItem);
    }
  }

  // Method to remove an item from the basket
  removeItem(itemName) {
    const index = this.items.findIndex((item) => item.item === itemName);
    if (index !== -1) {
      this.items.splice(index, 1);
      return this.items;
    } else {
      return 'This item is not in the basket.';
    }
  }

  // Method to check the basket capacity against the items added
  basketCapacity() {
    const totalQuantity = this.items.reduce((total, item) => total + item.quantity, 0);
    if (totalQuantity > this.capacity) {
      return 'Basket full, please choose a bigger basket.';
    }
  }

  // Method to check the price of an item
  priceChecker(itemName) {
    const menu = MENU.getMenu();
    return menu[itemName];
  }

  // Method to calculate the total price of items in the basket
  basketTotal() {
    const totalPrice = this.items.reduce((total, item) => total + item.quantity * item.price, 0);
    return '£' + totalPrice.toFixed(2); // Fixing to two decimal places for currency
  }
}

module.exports = ShoppingBasket;