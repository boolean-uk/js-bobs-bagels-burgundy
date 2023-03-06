const Basket = require("../src/basket.js");

describe("Basket", () => {
  let basket;
  // pre-set basket sizes. owner can pick from 3, cant set own sizes
  // will want to see pre-set basket size in the code
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

  //Test 2
  it("Add items to basket", () => {
    const expected = [
      {
        sku: "BGLS",
        price: "0.49",
        name: "Bagel",
        variant: "Sesame",
        quantity: 1,
      },
      {
        sku: "COF",
        price: "0.99",
        name: "Bagel",
        variant: "",
        quantity: 3,
      },
    ];

    basket.addItem("BGLS", 1);
    basket.addItem("COF", 3);

    let itemsInBasket = basket.getBasket();
    expect(itemsInBasket).toEqual(expected);
  });

  //Test 3
  it("Remove bagel from basket", () => {
    const expected = (this.basket = [
      {
        sku: "COF",
        price: "0.99",
        name: "Bagel",
        variant: "",
        quantity: 3,
      },
    ]);

    basket.addItem("BGLS", 1);
    basket.addItem("COF", 3);
    let removeItem = basket.removeItem("BGLS");
    expect(removeItem).toEqual(expected);
  });

  //Test 4
  it("Alert when basket is full", () => {
    const expected = "Basket full, Please choose a bigger basket.";

    basket.addItem("BGLS", 3);
    basket.addItem("COF", 5);
    let alert = basket.basketCapacity();
    expect(alert).toEqual(expected);
  });

  //Test 5
  //or "create specific basket size" ?
  it("Create basket with larger size", () => {
    const expected = (this.basketCapacity = largeBasket);

    new Basket(largeBasket);
    let checkSize = this.basketCapacity;
    expect(checkSize).toEqual(expected);
  });

  //Test 6
  it("Alert when trying to remove item that doesnt exist inside basket", () => {
    const expected = "This item is not in the basket.";

    basket.addItem("BGLS", 4);
    basket.addItem("COF", 6);
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
  // not tooo sure why this one doesn't just go into addItem()
  // also seems it will add an item x number of times instead of updating quantity. will need to see code for this.
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
