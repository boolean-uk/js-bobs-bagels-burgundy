// Importing the Basket class
const Basket = require("../src/basket.js");

// Test suite for the Basket class
describe("Basket", () => {
  let basket;
  const smallBasket = 5;
  const mediumBasket = 10;
  const largeBasket = 15;

  beforeEach(() => {
    basket = new Basket();
  });

  // Test 1: Check if the basket is initially empty
  it("should start with an empty basket", () => {
    const getBasket = basket.getBasket();
    expect(getBasket).toEqual([]);
  });

  // Test 2: Add items to the basket and check if they are added correctly
  it("should add items to the basket", () => {
    const expected = [
      { item: "bagel", quantity: 1, price: 2.99 },
      { item: "brownie", quantity: 3, price: 3.99 },
    ];

    basket.addItem("bagel", 1);
    basket.addItem("brownie", 3);
    const bagelInBasket = basket.getBasket();
    expect(bagelInBasket).toEqual(expected);
  });

  // Test 3: Remove an item from the basket and check if it's removed correctly
  it("should remove an item from the basket", () => {
    const expected = [
      { item: "brownie", quantity: 3, price: 3.99 },
    ];

    basket.addItem("bagel", 1);
    basket.addItem("brownie", 3);
    basket.removeItem("bagel");
    const currentBasket = basket.getBasket();
    expect(currentBasket).toEqual(expected);
  });

  // Test 4: Check if an alert is returned when the basket reaches its capacity
  it("should alert when the basket is full", () => {
    const expected = "Basket full, Please choose a bigger basket.";

    basket.addItem("bagel", 3);
    basket.addItem("brownie", 5);
    const alert = basket.basketCapacity();
    expect(alert).toEqual(expected);
  });

  // Test 5: Create a basket with a larger size and check if size is set correctly
  it("should create a basket with a larger size", () => {
    const expected = largeBasket;

    const largeBasketInstance = new Basket(largeBasket);
    const checkSize = largeBasketInstance.basketSize;
    expect(checkSize).toEqual(expected);
  });

  // Test 6: Check if the correct alert is returned when trying to remove an item that's not in the basket
  it("should alert when trying to remove an item not in the basket", () => {
    const expected = "This item is not in the basket.";

    basket.addItem("bagel", 3);
    basket.addItem("brownie", 5);
    const alert = basket.removeItem("Kebab");
    expect(alert).toEqual(expected);
  });

  // Test 7: Check the price of a specific item in the basket
  it("should check the price of an item in the basket", () => {
    const expected = 3.99;

    const checkPrice = basket.priceChecker("brownie");
    expect(checkPrice).toEqual(expected);
  });

  // Test 8: Add multiple units of the same item and check if they're added correctly
  it("should add multiple units of the same item", () => {
    const expected = [
      { item: "chocolateBagel", quantity: 1, price: 4.99 },
      { item: "chocolateBagel", quantity: 1, price: 4.99 },
      { item: "chocolateBagel", quantity: 1, price: 4.99 },
    ];

    basket.addItem("chocolateBagel", 1);
    basket.addItem("chocolateBagel", 1);
    basket.addItem("chocolateBagel", 1);
    const currentBasket = basket.getBasket();
    expect(currentBasket).toEqual(expected);
  });

  // Test 9: Calculate and check the total price of items in the basket
  it("should calculate the total price of the basket", () => {
    const expected = "£29.93";

    basket.addItem("chocolateBagel", 3);
    basket.addItem("bagel", 1);
    basket.addItem("brownie", 3);
    const total = basket.basketTotal();
    expect(total).toEqual(expected);
  });
});
