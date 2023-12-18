// Importing the Basket class from the relative path
const Basket = require('../src/basket.js')

// Describe block defines a test suite for the Basket class
describe('Basket', () => {
  // Variables to store basket instances and different basket sizes
  let basket
  const smallBasket = 5
  const mediumBasket = 10
  const largeBasket = 15

  // beforeEach is a Jest hook that runs before each test in this suite
  // It's used here to initialize a new Basket instance before every test
  beforeEach(() => {
    basket = new Basket()
  })

  // Test 1: Check if the basket is initially empty
  it('Get all basket', () => {
    const expected = [] // Expected result (empty array)
    const getBasket = basket.getBasket() // Method call to get basket contents
    expect(getBasket).toEqual(expected) // Assertion to check if the basket is empty
  })

  // Test 2: Add items to the basket and check if they are added correctly
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

  // Test 3: Remove an item from the basket and check if it's removed correctly
  it('Remove bagel from basket', () => {
    const expected = [{ item: 'brownie', quantity: 3, price: 3.99 }]

    basket.addItem('bagel', 1)
    basket.addItem('brownie', 3)
    basket.removeItem('bagel') // Removing bagel from the basket
    const currentBasket = basket.getBasket()
    expect(currentBasket).toEqual(expected) // Asserting the current basket matches the expected result
  })

  // Test 4: Check if an alert is returned when the basket reaches its capacity
  it('Alert when basket is full', () => {
    const expected = 'Basket full, Please choose a bigger basket.'

    // Adding items to exceed the basket's default capacity
    basket.addItem('bagel', 3)
    basket.addItem('brownie', 5)
    const alert = basket.basketCapacity() // Checking basket capacity
    expect(alert).toEqual(expected) // Asserting the received alert matches the expected message
  })

  // Test 5: Create a basket with a larger size and check if size is set correctly
  it('Create basket with larger size', () => {
    const expected = largeBasket // Expected basket size

    const largeBasketInstance = new Basket(largeBasket)
    const checkSize = largeBasketInstance.basketSize // Retrieving the size of the new basket
    expect(checkSize).toEqual(expected) // Asserting the size of the new basket
  })

  // Test 5.1: changing basket size(large)
  it('Basket capacity changing', () => {
    const largeBasketInstance = new Basket(largeBasket)
    expect(largeBasketInstance.basketSize).toBe(15)
  })

  // Test 5.2: create a basket with a medium size and check if size is set correctly
  it('Create basket with medium size', () => {
    const expected = mediumBasket // Expected basket size

    const mediumBasketInstance = new Basket(mediumBasket)
    const checkSize = mediumBasketInstance.basketSize // Retrieving the size of the new basket
    expect(checkSize).toEqual(expected) // Asserting the size of the new basket
  })

  // Test 5.3: changing basket size(medium)
  it('Basket capacity changing', () => {
    const mediumBasketInstance = new Basket(mediumBasket)
    expect(mediumBasketInstance.basketSize).toBe(10)
  })

  // Test 5.4: create a basket with a small size and check if size is set correctly
  it('Create basket with small size', () => {
    const expected = smallBasket // Expected basket size

    const smallBasketInstance = new Basket(smallBasket)
    const checkSize = smallBasketInstance.basketSize // Retrieving the size of the new basket
    expect(checkSize).toEqual(expected) // Asserting the size of the new basket
  })

  // Test 5.5: changing basket size(small)
  it('Basket changing capacity', () => {
    const smallBasketInstance = new Basket(smallBasket)
    expect(smallBasketInstance.basketSize).toBe(5)
  })

  // Test 6: Check if the correct alert is returned when trying to remove an item that's not in the basket
  it('Alert when trying to remove item that doesnt exist inside basket', () => {
    const expected = 'This item is not in the basket.'

    basket.addItem('bagel', 3)
    basket.addItem('brownie', 5)
    const alert = basket.removeItem('Kebab') // Attempting to remove an item not in the basket
    expect(alert).toEqual(expected) // Asserting the received alert matches the expected message
  })

  // Test 7: Check the price of a specific item in the basket
  it('price checker for items', () => {
    const expected = 3.99 // Expected price of the brownie

    const checkPrice = basket.priceChecker('brownie') // Checking the price of brownie
    expect(checkPrice).toEqual(expected) // Asserting the received price matches the expected price
  })

  // Test 8: Add multiple units of the same item and check if they're added correctly
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
