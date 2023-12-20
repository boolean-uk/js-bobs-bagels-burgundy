const MENU = require('./menu.js')

class Basket {
  static basketSizes = {
    small: 5,
    medium: 10,
    large: 15
  }
  constructor(capacity = Basket.basketSizes.small) {
    this.basket = []
    this.basketSize = capacity
  }
  getBasket() {
    return this.basket
  }
  setBasketSize(size) {
    if (Object.values(Basket.basketSizes).includes(size)) {
      this.basketSize = size
    } else {
      throw new Error('Invalid basket size')
    }
  }
  addItem(itemName, itemQuantity) {
    if (this.basket.length >= this.basketSize) {
      throw new Error('Basket is full')
    }

    const fullMenu = MENU.GetMenu()
    const selectedMenuItem = fullMenu[itemName]

    if (selectedMenuItem !== undefined) {
      const insideBasket = {
        item: itemName,
        quantity: itemQuantity,
        price: selectedMenuItem
      }
      this.basket.push(insideBasket)
    }
  }

  removeItem(itemName) {
    for (let i = 0; i < this.basket.length; i++)
      if (this.basket[i].item === itemName) {
        this.basket.splice(i, 1)
        return this.basket
      } else if (this.basket[i].item !== itemName)
        return 'This item is not in the basket.'
  }

  basketCapacity() {
    const totalCapacity = this.basket.reduce((total, quantity) => {
      return total + quantity.quantity
    }, 0)
    if (totalCapacity > this.basketSize) {
      return 'Basket full, Please choose a bigger basket.'
    }
  }

  priceChecker(itemName) {
    const fullMenu = MENU.GetMenu()
    for (const items in fullMenu)
      if (itemName === items) {
        return fullMenu[items]
      }
  }

  basketTotal() {
    let eachItem = []
    for (let i = 0; i < this.basket.length; i++) {
      eachItem.push(this.basket[i].quantity * this.basket[i].price)
    }
    const totalPrice = eachItem.reduce((total, quantity) => {
      return total + quantity
    }, 0)
    return '£' + totalPrice
  }
}

module.exports = Basket
