class Basket {
    constructor(basketSize = 5) {
      this.basket = []
      this.basketSize = basketSize
      this.menu = {
        bagel: 2.99,
        brownie: 3.99,
        chocolateBagel: 4.99
      }
    }
  
    getBasket() {
      return this.basket
    }
  
    addItem(itemName, itemQuantity) {
      for (const items in this.menu) {
        if (items === itemName) {
          const insideBasket = {
            item: itemName,
            quantity: itemQuantity,
            price: this.menu[items]
          }
  
          this.basket.push(insideBasket)
        }
      }

      return "The item wasn't found in the menu."
    }
  
    removeItem(itemName) {
      const basket = this.basket
  
      for (let i = 0; i < basket.length; i++) {
        if (basket[i].item === itemName) {
          basket.splice(i, 1)
          return basket
        }
      }  

      return "This item isn't in the basket."
    }
  
    basketCapacity() {
      const totalQuantity = this.basket.reduce((total, quantity) => {
        return total + quantity.quantity
      }, 0)
  
      if (totalQuantity > this.basketSize) {
        return 'Basket full, please choose a bigger basket.'
      }
    }
  
    priceChecker(itemName) {
      for (const items in this.menu) {
        if (itemName === items) {
          return this.menu[items]
        }
      }
    }
  
    basketTotal() {
      const eachItem = []
      const basket = this.basket
  
      for (let i = 0; i < basket.length; i++) {
        eachItem.push(basket[i].quantity * basket[i].price)
      }
  
      const totalPrice = eachItem.reduce((total, quantity) => {
        return total + quantity
      }, 0)
  
      return '£' + totalPrice
    }
  }
  
  module.exports = Basket
  