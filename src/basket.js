const MENU = require("./menu.js");

const defaultBasket = 5;

class Basket {
  constructor(capacity = defaultBasket) {
    this.basket = [];
    this.capacity = capacity;
  }
  getBasket() {
    return this.basket;
  }

  addItem(itemName, itemQuantity) {
    const fullMenu = MENU.GetMenu();
    for (const items in fullMenu) {
      if (items === itemName) {
        const insideBasket = {
          item: itemName,
          quantity: itemQuantity,
          price: fullMenu[items],
        };
        if (this.basketSize() + itemQuantity <= this.capacity) {
            this.basket.push(insideBasket);
            return insideBasket
        } else{
            return "Basket full, Please choose a bigger basket."
        }

      }
    } 
  }

  removeItem(itemName) {
    for (let i = 0; i < this.basket.length; i++){
      if (this.basket[i].item === itemName) {
        this.basket.splice(i, 1);
        return this.basket;
      } 
    }
    return "This item is not in the basket.";
 }

  basketSize() {
    // iterator that can sum numbers in an array
    const totalCapacity = this.basket.reduce((total, quantity) => {
      return total + quantity.quantity;
    }, 0);
    // if (totalCapacity >= this.basketSize) {
    //   return "Basket full, Please choose a bigger basket.";
    // } 
    return totalCapacity
  }

  

  priceChecker(itemName) {
    const fullMenu = MENU.GetMenu();
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
const basket = new Basket()
basket.addItem('bagel', 1)
console.log(basket.addItem('brownie', 100))
console.log(basket.basket)

module.exports = Basket;
