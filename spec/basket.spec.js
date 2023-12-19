// Importing the Basket class from the relative path
const Basket = require('../src/basket.js')
// importing the inventory

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
      const expected = [
        { item: 'bagel', quantity: 1, price: 2.99 },
        { item: 'brownie', quantity: 3, price: 3.99 }
      ]

      basket.addItem('bagel', 1) // Adding a bagel to the basket
      basket.addItem('brownie', 3) // Adding brownies to the basket
      const bagelInBasket = basket.getBasket() // Retrieving basket contents
      expect(bagelInBasket).toEqual(expected) // Asserting the basket contents match the expected result
    })

    // Test 2: Remove an item from the basket and check if it's removed correctly
    it('Remove bagel from basket', () => {
      const expected = [{ item: 'brownie', quantity: 3, price: 3.99 }]

      basket.addItem('bagel', 1)
      basket.addItem('brownie', 3)
      basket.removeItem('bagel') // Removing bagel from the basket
      const currentBasket = basket.getBasket()
      expect(currentBasket).toEqual(expected) // Asserting the current basket matches the expected result
    })

    // Test 3: Add multiple units of the same item and check if they're added correctly
    it('favourite bagel quantity', () => {
      const expected = [
        { item: 'chocolateBagel', quantity: 1, price: 4.99 },
        { item: 'chocolateBagel', quantity: 1, price: 4.99 },
        { item: 'chocolateBagel', quantity: 1, price: 4.99 }
      ]

      // Adding chocolate bagels to the basket
      basket.addItem('chocolateBagel', 1)
      basket.addItem('chocolateBagel', 1)
      basket.addItem('chocolateBagel', 1)
      const currentBasket = basket.getBasket()
      expect(currentBasket).toEqual(expected) // Asserting the current basket matches the expected result
    })
  })

  // Describe block that has all the basket capacity features
  describe('Basket size and capacity', () => {
    Object.keys(sizes).forEach((size) => {
      // Test 4: select basket size
      it(`should create a ${size} basket with correct size`, () => {
        const basketInstance = new Basket(sizes[size])
        expect(basketInstance.basketSize).toBe(sizes[size])
      })
    })
  })

  // Desribe block that has other features from the rest
  describe('Cool other features', () => {
    // Test 5: Check if the basket is initially empty
    it('Get all basket', () => {
      const expected = [] // Expected result (empty array)
      const getBasket = basket.getBasket() // Method call to get basket contents
      expect(getBasket).toEqual(expected) // Assertion to check if the basket is empty
    })

    // Test 6: Check if an alert is returned when the basket reaches its capacity
    it('Alert when basket is full', () => {
      const expected = 'Basket full, Please choose a bigger basket.'

      // Adding items to exceed the basket's default capacity
      basket.addItem('bagel', 3)
      basket.addItem('brownie', 5)
      const alert = basket.basketCapacity() // Checking basket capacity
      expect(alert).toEqual(expected) // Asserting the received alert matches the expected message
    })

    // Test 7: Check if the correct alert is returned when trying to remove an item that's not in the basket
    it('Alert when trying to remove item that doesnt exist inside basket', () => {
      const expected = 'This item is not in the basket.'

      basket.addItem('bagel', 3)
      basket.addItem('brownie', 5)
      const alert = basket.removeItem('Kebab') // Attempting to remove an item not in the basket
      expect(alert).toEqual(expected) // Asserting the received alert matches the expected message
    })

    // Test 8: Check the price of a specific item in the basket
    it('price checker for items', () => {
      const expected = 3.99 // Expected price of the brownie

      basket.priceChecker('brownie')
      const checkPrice = basket.priceChecker('brownie') // Checking the price of brownie
      expect(checkPrice).toEqual(expected) // Asserting the received price matches the expected price
    })

    // Test 9: Calculate and check the total price of items in the basket
    it('basket total', () => {
      const expected = '£29.93' // Expected total price

      // Adding items to the basket
      basket.addItem('chocolateBagel', 3)
      basket.addItem('bagel', 1)
      basket.addItem('brownie', 3)
      const total = basket.basketTotal() // Calculating the total price of the basket
      expect(total).toEqual(expected) // Asserting the total price matches the expected price
    })
  })
})
