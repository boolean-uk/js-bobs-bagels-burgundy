// Import the MENU module
const MENU = require('./menu.js')

// Define the Basket class
class Basket {
  // Static property defining basket sizes
  static basketSizes = {
    small: 5,
    medium: 10,
    large: 15
  }

  // Constructor method to initialize a new basket with a specified capacity
  constructor(capacity = Basket.basketSizes.small) {
    this.basket = [] // Array to store items in the basket
    this.basketSize = capacity // Current basket size
  }

  // Getter method to retrieve the items in the basket
  getBasket() {
    return this.basket
  }

  // Setter method to set the basket size to a specific value
  setBasketSize(size) {
    if (Object.values(Basket.basketSizes).includes(size)) {
      this.basketSize = size
    } else {
      throw new Error('Invalid basket size')
    }
  }

  // Method to add an item to the basket
  addItem(itemName, itemQuantity) {
    // Check if the basket is full
    if (this.basket.length >= this.basketSize) {
      throw new Error('Basket is full')
    }

    // Retrieve the full menu from the MENU module
    const fullMenu = MENU.GetMenu()
    const selectedMenuItem = fullMenu[itemName]

    // Check if the selected item exists in the menu
    if (selectedMenuItem !== undefined) {
      const insideBasket = {
        item: itemName,
        quantity: itemQuantity,
        price: selectedMenuItem
      }
      this.basket.push(insideBasket) // Add the item to the basket
    }
  }

  // Method to remove an item from the basket
  removeItem(itemName) {
    const indexToRemove = this.basket.findIndex(
      (item) => item.item === itemName
    )

    if (indexToRemove !== -1) {
      this.basket.splice(indexToRemove, 1) // Remove the item from the basket
      return this.basket
    } else {
      return 'This item is not in the basket.'
    }
  }

  // Method to check if the basket is over its capacity
  basketCapacity() {
    const totalCapacity = this.basket.reduce(
      (total, item) => total + item.quantity,
      0
    )
    if (totalCapacity > this.basketSize) {
      return 'Basket full, Please choose a bigger basket.'
    }
  }

  // Method to check the price of a specific item
  priceChecker(itemName) {
    const fullMenu = MENU.GetMenu()
    return fullMenu[itemName]
  }

  // Method to calculate the total price of all items in the basket
  basketTotal() {
    const totalPrice = this.basket.reduce(
      (total, item) => total + item.quantity * item.price,
      0
    )
    return `£${totalPrice.toFixed(2)}`
  }
}

// Export the Basket class for use in other modules
module.exports = Basket
