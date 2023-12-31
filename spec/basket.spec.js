// Importing the Basket class from the relative path
const Basket = require('../src/basket.js')

// Describe block defines a test suite for the Basket class
describe('Basket', () => {
  // Variables to store basket instances and different basket sizes
  let basket
  const sizes = { small: 5, medium: 10, large: 15 }

  // beforeEach is a Jest hook that runs before each test in this suite
  // It's used here to initialize a new Basket instance before every test
  beforeEach(() => {
    basket = new Basket()
  })

  // Describe block that has features that add and remove from basket
  describe('Adding and removing from the Basket', () => {
    // Test 1: Add items to the basket and check if they are added correctly
    it('Add items to basket', () => {
      // Expected basket contents after adding items
      const expected = [
        { item: 'bagel', quantity: 1, price: 2.99 },
        { item: 'brownie', quantity: 3, price: 3.99 }
      ]

      // Adding items to the basket
      basket.addItem('bagel', 1)
      basket.addItem('brownie', 3)
      
      // Retrieving basket contents
      const bagelInBasket = basket.getBasket()
      
      // Asserting the basket contents match the expected result
      expect(bagelInBasket).toEqual(expected)
    })

    // Test 2: Remove an item from the basket and check if it's removed correctly
    it('Remove bagel from basket', () => {
      // Expected basket contents after removing an item
      const expected = [{ item: 'brownie', quantity: 3, price: 3.99 }]

      // Adding items to the basket
      basket.addItem('bagel', 1)
      basket.addItem('brownie', 3)
      
      // Removing an item from the basket
      basket.removeItem('bagel')
      
      // Retrieving current basket contents
      const currentBasket = basket.getBasket()
      
      // Asserting the current basket matches the expected result
      expect(currentBasket).toEqual(expected)
    })

    // Test 3: Add multiple units of the same item and check if they're added correctly
    it('Favorite bagel quantity', () => {
      // Expected basket contents after adding multiple units of the same item
      const expected = [
        { item: 'chocolateBagel', quantity: 1, price: 4.99 },
        { item: 'chocolateBagel', quantity: 1, price: 4.99 },
        { item: 'chocolateBagel', quantity: 1, price: 4.99 }
      ]

      // Adding multiple units of the same item to the basket
      basket.addItem('chocolateBagel', 1)
      basket.addItem('chocolateBagel', 1)
      basket.addItem('chocolateBagel', 1)
      
      // Retrieving current basket contents
      const currentBasket = basket.getBasket()
      
      // Asserting the current basket matches the expected result
      expect(currentBasket).toEqual(expected)
    })
  })

  // Describe block that has all the basket capacity features
  describe('Basket size and capacity', () => {
    // Test 4: Select basket size
    Object.keys(sizes).forEach((size) => {
      it(`Should create a ${size} basket with correct size`, () => {
        // Creating a basket with a specific size
        const basketInstance = new Basket(sizes[size])
        
        // Asserting the basket size matches the expected size
        expect(basketInstance.basketSize).toBe(sizes[size])
      })
    })
  })

  // Describe block that has other features from the rest
  describe('Cool other features', () => {
    // Test 10: Check if the basket is initially empty
    it('Get all basket', () => {
      // Expected result (empty array)
      const expected = []
      
      // Method call to get basket contents
      const getBasket = basket.getBasket()
      
      // Assertion to check if the basket is empty
      expect(getBasket).toEqual(expected)
    })

    // Test 11: Check if an alert is returned when the basket reaches its capacity
    it('Alert when basket is full', () => {
      // Expected alert message
      const expected = 'Basket full, Please choose a bigger basket.'

      // Adding items to exceed the basket's default capacity
      basket.addItem('bagel', 3)
      basket.addItem('brownie', 5)
      
      // Checking basket capacity
      const alert = basket.basketCapacity()
      
      // Asserting the received alert matches the expected message
      expect(alert).toEqual(expected)
    })

    // Test 12: Check if the correct alert is returned when trying to remove an item that's not in the basket
    it('Alert when trying to remove item that doesn\'t exist inside basket', () => {
      // Expected alert message
      const expected = 'This item is not in the basket.'

      // Adding items to the basket
      basket.addItem('bagel', 3)
      basket.addItem('brownie', 5)
      
      // Attempting to remove an item not in the basket
      const alert = basket.removeItem('Kebab')
      
      // Asserting the received alert matches the expected message
      expect(alert).toEqual(expected)
    })

    // Test 13: Check the price of a specific item in the basket
    it('Price checker for items', () => {
      // Expected price of the brownie
      const expected = 3.99

      // Checking the price of brownie
      const checkPrice = basket.priceChecker('brownie')
      
      // Asserting the received price matches the expected price
      expect(checkPrice).toEqual(expected)
    })

    // Test 14: Calculate and check the total price of items in the basket
    it('Basket total', () => {
      // Expected total price
      const expected = 'Â£29.93'

      // Adding items to the basket
      basket.addItem('chocolateBagel', 3)
      basket.addItem('bagel', 1)
      basket.addItem('brownie', 3)
      
      // Calculating the total price of the basket
      const total = basket.basketTotal()
      
      // Asserting the total price matches the expected price
      expect(total).toEqual(expected)
    })
  })
})
