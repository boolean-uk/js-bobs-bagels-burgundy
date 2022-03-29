const Basket = require("../src/basket.js");
const Item = require("../src/item.js");

describe("Basket", () => {
  let basket;
  const smallBasket = 5;
  const mediumBasket = 10;
  const largeBasket = 15;

  beforeEach(() => {
    basket = new Basket();
  });

  //Test 1
  it("Get all basket", () => {
    const expected = [];
    let getBasket = basket.getBasket();
    expect(getBasket).toEqual(expected);
  });

  // Added Test --------------------------------------------------------------
  it("cant add item that doesnt exist", () => {
    const expected = "this item does not exist";

    let result = basket.addItem("bagelio", 1);
    let bagelInBasket = basket.getBasket();
    expect(result).toEqual(expected);
    expect(bagelInBasket).toEqual([]);
  });
  // Added Test --------------------------------------------------------------

  //Test 2
  it("Add items to basket", () => {
    const newItem1 = new Item("bagel", 1, 2.99);
    const newItem2 = new Item("brownie", 3, 3.99);

    const expected = [newItem1, newItem2];

    basket.addItem("bagel", 1);
    basket.addItem("brownie", 3);
    let result = basket.getBasket();
    expect(result).toEqual(expected);
  });

  //Test 3
  fit("Remove bagel from basket", () => {
    const expected = [new Item("brownie", 3, 3.99)];

    basket.addItem("bagel", 1);
    basket.addItem("brownie", 3);
    basket.removeItem("bagel");
    let result = basket.getBasket();
    expect(result).toEqual(expected);
  });

  // -----------------------------------------------------------------------
  it("Alert when basket is full", () => {
    const expected = "Basket full, Please choose a bigger basket.";

    basket.addItem("brownie", 5);
    let alert = basket.basketCapacity();
    expect(alert).toEqual(expected);
  });
  // -----------------------------------------------------------------------

  //Test 4
  it("Alert when basket is Overflowing", () => {
    const expected = "Basket full, Please choose a bigger basket.";

    basket.addItem("bagel", 3);
    basket.addItem("brownie", 5);
    let alert = basket.basketCapacity();
    expect(alert).toEqual(expected);
  });

  //Test 5
  it("Create basket with larger size", () => {
    const expected = (this.basketSize = largeBasket);

    new Basket(largeBasket);
    let checkSize = this.basketSize;
    expect(checkSize).toEqual(expected);
  });

  //Test 6
  it("Alert when trying to remove item that doesnt exist inside basket", () => {
    const expected = "This item is not in the basket.";

    basket.addItem("bagel", 3);
    basket.addItem("brownie", 5);
    let alert = basket.removeItem("Kebab", 10);
    expect(alert).toEqual(expected);
  });

  //   check for if item doesnt exist

  //Test 7
  it("price checker for items", () => {
    const expected = 3.99;

    basket.priceChecker("brownie");
    let checkPrice = basket.priceChecker("brownie");
    expect(checkPrice).toEqual(expected);
  });

  //Test 8
  it("favourite bagel quantity", () => {
    const expected = [
      { item: "chocolateBagel", quantity: 1, price: 4.99 },
      { item: "chocolateBagel", quantity: 1, price: 4.99 },
      { item: "chocolateBagel", quantity: 1, price: 4.99 },
    ];

    basket.addItem("chocolateBagel", 1);
    basket.addItem("chocolateBagel", 1);
    basket.addItem("chocolateBagel", 1);
    let alert = basket.getBasket();
    expect(alert).toEqual(expected);
  });

  //Test 9
  it("basket total", () => {
    const expected = "£29.93";

    basket.addItem("chocolateBagel", 3);
    basket.addItem("bagel", 1);
    basket.addItem("brownie", 3);
    let total = basket.basketTotal();
    expect(total).toEqual(expected);
  });
});
