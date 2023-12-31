// Importing the Basket class
const ShoppingBasket = require('../src/shoppingBasket.js');

// Test suite for the Shopping Basket class
describe('Shopping Basket', () => {
  let myBasket; // Variable to store the basket instance
  const basketSizes = { small: 5, medium: 10, large: 15 };

  // beforeEach is a Jest hook that runs before each test in this suite
  // It's used here to initialize a new ShoppingBasket instance before every test
  beforeEach(() => {
    myBasket = new ShoppingBasket();
  });

  // Describe block for adding and removing items from the basket
  describe('Adding and Removing Items', () => {
    // Test 1: Add items to the basket and check if they are added correctly
    it('should add items to the basket', () => {
      const expectedContents = [
        { item: 'bagel', quantity: 1, price: 2.99 },
        { item: 'brownie', quantity: 3, price: 3.99 }
      ];

      myBasket.addItem('bagel', 1); // Adding a bagel to the basket
      myBasket.addItem('brownie', 3); // Adding brownies to the basket
      const basketContents = myBasket.getBasket(); // Retrieving basket contents
      expect(basketContents).toEqual(expectedContents); // Asserting the basket contents match the expected result
    });

    // Test 2: Remove an item from the basket and check if it's removed correctly
    it('should remove an item from the basket', () => {
      const expectedContents = [{ item: 'brownie', quantity: 3, price: 3.99 }];

      myBasket.addItem('bagel', 1);
      myBasket.addItem('brownie', 3);
      myBasket.removeItem('bagel'); // Removing bagel from the basket
      const currentContents = myBasket.getBasket();
      expect(currentContents).toEqual(expectedContents); // Asserting the current basket matches the expected result
    });

    // Test 3: Add multiple units of the same item and check if they're added correctly
    it('should add multiple units of the same item', () => {
      const expectedContents = [
        { item: 'chocolateBagel', quantity: 1, price: 4.99 },
        { item: 'chocolateBagel', quantity: 1, price: 4.99 },
        { item: 'chocolateBagel', quantity: 1, price: 4.99 }
      ];

      // Adding chocolate bagels to the basket
      myBasket.addItem('chocolateBagel', 1);
      myBasket.addItem('chocolateBagel', 1);
      myBasket.addItem('chocolateBagel', 1);
      const currentContents = myBasket.getBasket();
      expect(currentContents).toEqual(expectedContents); // Asserting the current basket matches the expected result
    });
  });

  // Describe block for basket size and capacity features
  describe('Basket Size and Capacity', () => {
    // Loop through different basket sizes and check if they are set correctly
    Object.keys(basketSizes).forEach((size) => {
      it(`should create a ${size} basket with the correct size`, () => {
        const basketInstance = new ShoppingBasket(basketSizes[size]);
        expect(basketInstance.basketSize).toBe(basketSizes[size]);
      });
    });
  });

  // Describe block for other features
  describe('Other Cool Features', () => {
    // Test 4: Check if the basket is initially empty
    it('should start with an empty basket', () => {
      const expectedContents = []; // Expected result (empty array)
      const currentContents = myBasket.getBasket(); // Method call to get basket contents
      expect(currentContents).toEqual(expectedContents); // Assertion to check if the basket is empty
    });

    // Test 5: Check if an alert is returned when the basket reaches its capacity
    it('should alert when the basket is full', () => {
      const expectedAlert = 'Basket full, please choose a bigger basket.';

      // Adding items to exceed the basket's default capacity
      myBasket.addItem('bagel', 3);
      myBasket.addItem('brownie', 5);
      const alert = myBasket.basketCapacity(); // Checking basket capacity
      expect(alert).toEqual(expectedAlert); // Asserting the received alert matches the expected message
    });

    // Test 6: Check if the correct alert is returned when trying to remove an item that's not in the basket
    it('should alert when trying to remove an item not in the basket', () => {
      const expectedAlert = 'This item is not in the basket.';

      myBasket.addItem('bagel', 3);
      myBasket.addItem('brownie', 5);
      const alert = myBasket.removeItem('Kebab'); // Attempting to remove an item not in the basket
      expect(alert).toEqual(expectedAlert); // Asserting the received alert matches the expected message
    });

    // Test 7: Check the price of a specific item in the basket
    it('should check the price of an item in the basket', () => {
      const expectedPrice = 3.99; // Expected price of the brownie

      myBasket.priceChecker('brownie');
      const checkPrice = myBasket.priceChecker('brownie'); // Checking the price of brownie
      expect(checkPrice).toEqual(expectedPrice); // Asserting the received price matches the expected price
    });

    // Test 8: Calculate and check the total price of items in the basket
    it('should calculate the total price of the basket', () => {
      const expectedTotal = '£29.93'; // Expected total price

      // Adding items to the basket
      myBasket.addItem('chocolateBagel', 3);
      myBasket.addItem('bagel', 1);
      myBasket.addItem('brownie', 3);
      const total = myBasket.basketTotal(); // Calculating the total price of the basket
      expect(total).toEqual(expectedTotal); // Asserting the total price matches the expected price
    });
  });
});
