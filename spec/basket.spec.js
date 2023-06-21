const Basket = require("../src/basket.js");

describe("Basket", () => {
  let basket;
  const smallBasket = 5;
  const mediumBasket = 10;
  const largeBasket = 15;

  beforeEach(() => {
    basket = new Basket();
  });

  // Test 1: Adding an item to the basket
  it("should add an item to the basket", () => {
    const expected = [
      { item: "bagel", quantity: 1, price: 2.99 }
    ];

    basket.addItem("bagel", 1);
    const itemsInBasket = basket.getBasket();

    expect(itemsInBasket).toEqual(expected);
  });

  // Test 2: Removing an item from the basket
  it("should remove an item from the basket", () => {
    const expected = [];

    basket.addItem("bagel", 1);
    basket.removeItem("bagel");
    const itemsInBasket = basket.getBasket();

    expect(itemsInBasket).toEqual(expected);
  });

  // Test 3: Checking basket capacity
  it("should indicate when the basket is full", () => {
    const expected = "Basket full, Please choose a bigger basket.";

    basket.addItem("bagel", 3);
    basket.addItem("brownie", 5);
    const alert = basket.basketCapacity();

    expect(alert).toEqual(expected);
  });

  // Test 4: Creating a basket with larger capacity
  it("should create a basket with a larger capacity", () => {
    const expected = 15;

    const largerBasket = new Basket(largeBasket);
    const basketSize = largerBasket.basketSize;

    expect(basketSize).toEqual(expected);
  });

  // Test 5: Alert when trying to remove an item that doesn't exist in the basket
  it("should alert when trying to remove a non-existent item from the basket", () => {
    const expected = "This item is not in the basket.";

    basket.addItem("bagel", 3);
    basket.addItem("brownie", 5);
    const alert = basket.removeItem("Kebab");

    expect(alert).toEqual(expected);
  });

  // Test 6: Checking the price of an item
  it("should return the price of an item", () => {
    const expected = 3.99;

    const price = basket.priceChecker("brownie");

    expect(price).toEqual(expected);
  });

  // Test 7: Checking the basket total
  it("should calculate the total price of the basket", () => {
    const expected = "£29.93";

    basket.addItem("chocolateBagel", 3);
    basket.addItem("bagel", 1);
    basket.addItem("brownie", 3);
    const totalPrice = basket.basketTotal();

    expect(totalPrice).toEqual(expected);
  });
});
