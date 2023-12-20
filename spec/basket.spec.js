// Import the Basket module
const Basket = require('../src/basket.js')

// Describe the Basket class
describe('Basket', () => {
  let basket

  // Set up a new basket before each test
  beforeEach(() => {
    basket = new Basket()
  })

  // Tests related to adding and removing items from the basket
  describe('Adding and removing from the Basket', () => {
    // Test 1: Add items to basket
    it('Add items to basket', () => {
      // Define the expected basket content
      const expected = [
        { item: 'bagel', quantity: 1, price: 2.99 },
        { item: 'brownie', quantity: 3, price: 3.99 }
      ]

      // Add items to the basket and check if it matches the expected content
      basket.addItem('bagel', 1)
      basket.addItem('brownie', 3)
      expect(basket.getBasket()).toEqual(expected)
    })

    // Test 2: Remove bagel from basket
    it('Remove bagel from basket', () => {
      // Define the expected basket content after removing the bagel
      const expected = [{ item: 'brownie', quantity: 3, price: 3.99 }]

      // Add items, remove bagel, and check if the basket matches the expected content
      basket.addItem('bagel', 1)
      basket.addItem('brownie', 3)
      basket.removeItem('bagel')
      expect(basket.getBasket()).toEqual(expected)
    })

    // Test 3: Favorite bagel quantity
    it('Favorite bagel quantity', () => {
      // Define the expected basket content with multiple instances of chocolateBagel
      const expected = [
        { item: 'chocolateBagel', quantity: 1, price: 4.99 },
        { item: 'chocolateBagel', quantity: 1, price: 4.99 },
        { item: 'chocolateBagel', quantity: 1, price: 4.99 }
      ]

      // Add chocolateBagel multiple times and check if the basket matches the expected content
      basket.addItem('chocolateBagel', 1)
      basket.addItem('chocolateBagel', 1)
      basket.addItem('chocolateBagel', 1)
      expect(basket.getBasket()).toEqual(expected)
    })
  })

  // Tests related to basket size and capacity
  describe('Basket size and capacity', () => {
    // Iterate over small, medium, and large basket sizes
    ;['small', 'medium', 'large'].forEach((size) => {
      // Test 4: Check if the basket is created with the correct size
      it(`should create a ${size} basket with correct size`, () => {
        // Create a basket instance with the specified size and check if the size matches
        const basketInstance = new Basket(Basket.basketSizes[size])
        expect(basketInstance.basketSize).toBe(Basket.basketSizes[size])
      })
    })
  })

  // Tests for additional features
  describe('Cool other features', () => {
    // Test 5: Get all basket
    it('Get all basket', () => {
      // Define the expected basket content (empty in this case)
      const expected = []

      // Check if the basket is initially empty
      expect(basket.getBasket()).toEqual(expected)
    })

    // Test 6: Alert when basket is full
    it('Alert when basket is full', () => {
      // Define the expected alert message
      const expected = 'Basket full, Please choose a bigger basket.'

      // Add items to exceed the basket capacity and check if the alert matches
      basket.addItem('bagel', 3)
      basket.addItem('brownie', 5)
      expect(basket.basketCapacity()).toEqual(expected)
    })

    // Test 7: Alert when trying to remove item that doesn't exist inside basket
    it("Alert when trying to remove item that doesn't exist inside basket", () => {
      // Define the expected alert message
      const expected = 'This item is not in the basket.'

      // Add items and attempt to remove a non-existent item, check if the alert matches
      basket.addItem('bagel', 3)
      basket.addItem('brownie', 5)
      expect(basket.removeItem('Kebab')).toEqual(expected)
    })

    // Test 8: Price checker for items
    it('Price checker for items', () => {
      // Define the expected price for the brownie
      const expected = 3.99

      // Check if the price checker returns the expected price for the brownie
      expect(basket.priceChecker('brownie')).toEqual(expected)
    })

    // Test 9: Basket total
    it('Basket total', () => {
      // Define the expected total price for a specific basket content
      const expected = '£29.93'

      // Add items to the basket and check if the calculated total matches the expected total
      basket.addItem('chocolateBagel', 3)
      basket.addItem('bagel', 1)
      basket.addItem('brownie', 3)
      expect(basket.basketTotal()).toEqual(expected)
    })
  })
})
