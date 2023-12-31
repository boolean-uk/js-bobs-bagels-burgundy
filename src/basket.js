// Importing the menu module
const MENU = require('./menu.js')

// Defining constants for basket sizes
const smallBasket = 5
const mediumBasket = 10
const largeBasket = 15

class Basket {
  // Constructor to initialize the basket with a default capacity
  constructor(capacity = 5) {
    this.basket = [] // Array to hold basket items
    this.basketSize = capacity // Capacity of the basket
  }

  // Getter method to retrieve the basket items
  getBasket() {
    return this.basket
  }

  // Setter method to set the basket size with validation
  setBasketSize(size) {
    // Check if the provided size is valid
    if ([smallBasket, mediumBasket, largeBasket].includes(size)) {
      this.basketSize = size
    } else {
      throw new Error('Invalid basket size')
    }
  }

  // Method to add an item to the basket, with checks for basket capacity and menu availability
  addItem(itemName, itemQuantity) {
    // Check if the basket is full
    if (this.basket.length >= this.basketSize) {
      throw new Error('Basket is full')
    }

    // Get the full menu from the MENU module
    const fullMenu = MENU.GetMenu()

    // Loop through the menu to find the item and add it to the basket
    for (const items in fullMenu) {
      if (items === itemName) {
        const insideBasket = {
          item: itemName,
          quantity: itemQuantity,
          price: fullMenu[items]
        }
        this.basket.push(insideBasket)
        break // Stop the loop once the item is found and added
      }
    }
  }

  // Method to remove an item from the basket
  removeItem(itemName) {
    for (let i = 0; i < this.basket.length; i++) {
      if (this.basket[i].item === itemName) {
        this.basket.splice(i, 1)
        return this.basket
      } else if (this.basket[i].item !== itemName) {
        return 'This item is not in the basket.'
      }
    }
  }

  // Method to check the basket capacity against the items added
  basketCapacity() {
    const totalCapacity = this.basket.reduce((total, quantity) => {
      return total + quantity.quantity
    }, 0)
    if (totalCapacity > this.basketSize) {
      return 'Basket full, Please choose a bigger basket.'
    }
  }

  // Method to check the price of an item
  priceChecker(itemName) {
    const fullMenu = MENU.GetMenu()

    // Loop through the menu to find the item and return its price
    for (const items in fullMenu) {
      if (itemName === items) {
        return fullMenu[items]
      }
    }
  }

  // Method to calculate the total price of items in the basket
  basketTotal() {
    const eachItem = []

    // Loop through the basket items and calculate the price for each
    for (let i = 0; i < this.basket.length; i++) {
      eachItem.push(this.basket[i].quantity * this.basket[i].price)
    }

    // Calculate the total price
    const totalPrice = eachItem.reduce((total, quantity) => {
      return total + quantity
    }, 0)

    // Return the total price in the specified format
    return 'Â£' + totalPrice
  }
}

// Exporting the Basket class
module.exports = Basket
