const Basket = require("../src/basket.js");

describe("Basket", () => {
  let basket;
  const smallBasket = 5;
  const mediumBasket = 10;
  const largeBasket = 15;

  beforeEach(() => {
    basket = new Basket();
  });

  // Test 1: Get all items in the basket
  it("should get all items in the basket", () => {
    const expected = [];
    const itemsInBasket = basket.getBasket();
    expect(itemsInBasket).toEqual(expected);
  });

  // Test 2: Add items to the basket
  it("should add items to the basket", () => {
    const expected = [
      { item: "bagel", quantity: 1, price: 2.99 },
      { item: "brownie", quantity: 3, price: 3.99 },
    ];

    basket.addItem("bagel", 1);
    basket.addItem("brownie", 3);
    const itemsInBasket = basket.getBasket();

    expect(itemsInBasket).toEqual(expected);
  });

  // Test 3: Remove an item from the basket
  it("should remove an item from the basket", () => {
    const expected = [
      { item: "brownie", quantity: 3, price: 3.99 },
    ];

    basket.addItem("bagel", 1);
    basket.addItem("brownie", 3);
    basket.removeItem("bagel");
    const itemsInBasket = basket.getBasket();

    expect(itemsInBasket).toEqual(expected);
  });

  // Test 4: Indicate when the basket is full
  it("should indicate when the basket is full", () => {
    const expected = "Basket full, Please choose a bigger basket.";

    basket.addItem("bagel", 3);
    basket.addItem("brownie", 5);
    const alert = basket.basketCapacity();

    expect(alert).toEqual(expected);
  });

  // Test 5: Create a basket with larger capacity
  it("should create a basket with larger capacity", () => {
    const expected = 15;

    const largerBasket = new Basket(15);
    const basketSize = largerBasket.basketSize;

    expect(basketSize).toEqual(expected);
  });

  // Test 6: Indicate when trying to remove a non-existent item
  it("should indicate when trying to remove a non-existent item", () => {
    const expected = "This item is not in the basket.";

    basket.addItem("bagel", 3);
    basket.addItem("brownie", 5);
    const alert = basket.removeItem("Kebab");

    expect(alert).toEqual(expected);
  });

  // Test 7: Check the price of an item
  it("should check the price of an item", () => {
    const expected = 3.99;

    const price = basket.priceChecker("brownie");

    expect(price).toEqual(expected);
  });

  // Test 8: Add multiple items of the same type to the basket
  it("should add multiple items of the same type to the basket", () => {
    const expected = [
      { item: "chocolateBagel", quantity: 1, price: 4.99 },
      { item: "chocolateBagel", quantity: 1, price: 4.99 },
      { item: "chocolateBagel", quantity: 1, price: 4.99 },
    ];

    basket.addItem("chocolateBagel", 1);
    basket.addItem("chocolateBagel", 1);
    basket.addItem("chocolateBagel", 1);
    const itemsInBasket = basket.getBasket();

    expect(itemsInBasket).toEqual(expected);
  });

  // Test 9: Calculate the total price of the basket
  it("should calculate the total price of the basket", () => {
    const expected = "£29.93";

    basket.addItem("chocolateBagel", 3);
    basket.addItem("bagel", 1);
    basket.addItem("brownie", 3);
    const totalPrice = basket.basketTotal();

    expect(totalPrice).toEqual(expected);
  });
});
