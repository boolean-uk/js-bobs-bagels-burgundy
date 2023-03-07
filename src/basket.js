const MENU = require("./menu.js");
const smallBasket = 5;
const mediumBasket = 10;
const largeBasket = 15;

class Basket {
  constructor(capacity = smallBasket) {
    this.basket = [];
    this.basketSize = capacity;
  }

  getBasket() {
    return this.basket;
  }

  addItem(sku, itemQuantity) {
    const fullMenu = new MENU();

    for (let i = 0; i < fullMenu.inventory.length; i++) {
      if (sku === fullMenu.inventory[i].sku) {
        const insideBasket = {
          sku: fullMenu.inventory[i].sku,
          price: fullMenu.inventory[i].price,
          name: fullMenu.inventory[i].name,
          variant: fullMenu.inventory[i].variant,
          quantity: itemQuantity,
        };
        this.basket.push(insideBasket);
      }
    }
  }

  removeItem(sku) {
    for (let i = 0; i < this.basket.length; i++)
      if (this.basket[i].sku === sku) {
        this.basket.splice(i, 1);
        return this.basket;
      } else {
        return "This item is not in the basket.";
      }
  }

  basketCapacity() {
    const totalCapacity = this.basket.reduce((total, quantity) => {
      return total + quantity.quantity;
    }, 0);
    if (totalCapacity > this.basketSize) {
      return "Basket full, Please choose a bigger basket.";
    }
  }

  priceChecker(itemName) {
    const fullMenu = new MENU();

    for (let i = 0; i < fullMenu.inventory.length; i++) {
      if (itemName === fullMenu.inventory[i].sku) {
        return Number(fullMenu.inventory[i].price);
      }
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
    return "£" + totalPrice.toFixed(2);
  }
}

module.exports = Basket;
