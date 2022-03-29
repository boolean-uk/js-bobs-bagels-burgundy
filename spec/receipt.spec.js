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
    date = new Date();
    totalPrice = basket.basketTotal()
  });

  it("Prints a receipt line only", () => {
    const receiptLine = "chocolateBagel    2x  4.99"
    expected = receiptLine
    //execute
    basket.addItem("chocolateBagel", 2);
    let solution = receipt.receiptLine(basket.basket);
    expect(solution).toEqual(expected);
  });

  it("creates multiple receipt lines", () => {
    const lines = "bagel              4x"
                "brownie            3x"
                "chocolateBagel     2x"
    expected = lines
    //execute
    basket.addItem("bagel", 4);
    basket.addItem("brownie", 3);
    basket.addItem("chocolateBagel", 2);
    let solution = receipt.multipleLines(basket.basket);
    expect(solution).toEqual(expected);
  });


});
