const Basket = require("../src/basket.js");
const Item = require("../src/item.js");
const Receipt = require("../src/receipt.js");

describe("Basket", () => {
  let basket;
  const smallBasket = 5;
  const mediumBasket = 10;
  const largeBasket = 15;

  beforeEach(() => {
    basket = new Basket();
    receipt = new Receipt();
  });

  //Test 1
  it("Get all basket", () => {
    const expected = [];
    let getBasket = basket.getBasket();
    expect(getBasket).toEqual(expected);
  });

  //Test 2
  it("Add items to basket", () => {
    const itemOne = new Item("bagel", 1, 2.99);
    const itemTwo = new Item("brownie", 3, 3.99);
    const expected = [itemOne, itemTwo];
    basket.addItem("bagel", 1);
    basket.addItem("brownie", 3);
    let bagelInBasket = basket.getBasket();
    expect(bagelInBasket).toEqual(expected);
  });

  it("Add items to basket what is NOT on the menu", () => {
    const expected = "Item is not on the menu, chose something else";
    basket.addItem("bagel", 1);
    basket.addItem("brownie", 3);
    let test = basket.addItem("cheese", 1);
    expect(test).toEqual(expected);
  });

  //Test 3
  it("Remove bagel from basket", () => {
    const itemOne = new Item("brownie", 3, 3.99);
    const expected = [itemOne];
    basket.addItem("bagel", 1);
    basket.addItem("brownie", 3);
    let result = basket.removeItem("bagel");
    expect(result).toEqual(expected);
  });

  //Test 4
  it("Alert when basket is overflowing", () => {
    const expected = "Basket full, Please choose a bigger basket.";

    basket.addItem("bagel", 3);
    basket.addItem("brownie", 15);
    let alert = basket.basketCapacity();
    expect(alert).toEqual(expected);
  });

  it("Also alert when basket is just full", () => {
    const expected = "Basket full, Please choose a bigger basket.";

    basket.addItem("bagel", 3);
    basket.addItem("brownie", 2);
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

  //Test 7 - check if did not exist
  it("price checker for items", () => {
    const expected = 3.99;

    basket.priceChecker("brownie");
    let checkPrice = basket.priceChecker("brownie");
    expect(checkPrice).toEqual(expected);
  });

  //Test 8
  it("favourite bagel quantity", () => {
    const itemOne = new Item("chocolateBagel", 1, 4.99);
    const itemTwo = new Item("chocolateBagel", 1, 4.99);
    const itemThree = new Item("chocolateBagel", 1, 4.99);

    const expected = [itemOne, itemTwo, itemThree];

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
