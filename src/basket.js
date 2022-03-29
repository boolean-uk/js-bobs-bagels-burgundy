const MENU = require("./menu.js");
const smallBasket = 5;
const mediumBasket = 10;
const largeBasket = 15;
const fullMenu = MENU.GetMenu();

class Basket {
  constructor(capacity = smallBasket) {
    this.basket = [];
    this.basketSize = capacity;
  }
  getBasket() {
    return this.basket;
  }
  addItem(itemName, itemQuantity) {
    let itemFound = false;
    for (const items in fullMenu) {
      if (items === itemName) {
        const newItem = {
          item: itemName,
          quantity: itemQuantity,
          price: fullMenu[items],
        };
        this.basket.push(newItem);
        itemFound = true;
        break;
      }
    }
    if (itemFound === false) {
      return "Item is not on the menu, chose something else";
    }
  }

  removeItem(itemName) {
    for (let i = 0; i < this.basket.length; i++)
      if (this.basket[i].item === itemName) {
        this.basket.splice(i, 1);
        return this.basket;
      } else if (this.basket[i].item !== itemName)
        return "This item is not in the basket.";
  }

  basketCapacity() {
    const totalCapacity = this.basket.reduce((total, item) => {
      return total + item.quantity;
    }, 0);
    if (totalCapacity >= this.basketSize) {
      return "Basket full, Please choose a bigger basket.";
    }
  }

  priceChecker(itemName) {
    for (const items in fullMenu)
      if (itemName === items) {
        return fullMenu[items];
      }
  }

  basketTotal() {
    let eachItem = [];
    for (let i = 0; i < this.basket.length; i++) {
      eachItem.push(this.basket[i].quantity * this.basket[i].price);
    }
    const totalPrice = eachItem.reduce((total, quantity) => {
      return total + quantity;
    }, 0);
    return "£" + totalPrice;
  }
}

module.exports = Basket;
