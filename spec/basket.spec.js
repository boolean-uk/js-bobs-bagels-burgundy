const Basket = require("../src/basket.js");

describe("Basket", () => {
  let basket;
  const smallBasket = 5;
  const mediumBasket = 10;
  const largeBasket = 15;

  // refreshes the classes before each test is run
  beforeEach(() => {
    basket = new Basket();
  });

  //Test 1
  it("Get all basket", () => {
    // set up
    const expected = [{ item: "bagel", quantity: 1, price: 2.99 }];

    // execute
    let getBasket = basket.getBasket();
    basket.addItem("bagel", 1);

    // verify
    expect(getBasket).toEqual(expected);
  });

  //Test 2
  it("Add items to basket", () => {
    // set up
    const expected = { item: "bagel", quantity: 1, price: 2.99 };

    // execute
    let bagelInBasket = basket.addItem("bagel", 1);

    // verify
    expect(bagelInBasket).toEqual(expected);
  });

  //Test 3
  it("Remove bagel from basket", () => {
    // set up
    const expected = (this.basket = [
      { item: "brownie", quantity: 3, price: 3.99 },
    ]);

    // execute
    basket.addItem("bagel", 1);
    basket.addItem("brownie", 3);
    let removeItem = basket.removeItem("bagel");

    // verify
    expect(removeItem).toEqual(expected);
  });

  //Test 4
  it("Alert when basket is full", () => {
    // set up
    const expected = "Basket full, Please choose a bigger basket.";

    // execute
    basket.addItem("bagel", 3);
    basket.addItem("brownie", 5);
    let alert = basket.basketCapacity();

    // verify
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
