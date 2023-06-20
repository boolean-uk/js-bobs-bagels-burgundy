const Basket = require("../src/basket.js");

describe("Basket", () => {
  let basket;
  let basketLarge;
  const largeBasket = 15;

  // refreshes the classes before each test is run
  beforeEach(() => {
    basket = new Basket();
    basketLarge = new Basket(largeBasket)
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
  // Happy Path
  it("Add items to basket", () => {
    // set up
    const expected = { item: "bagel", quantity: 1, price: 2.99 };

    // execute
    let bagelInBasket = basket.addItem("bagel", 1);

    // verify
    expect(bagelInBasket).toEqual(expected);
  });

  //Test 2
  // Sad Path if the item is not on the menu
  it('If the itemName is not on the menu', () => {
    // Set up
    const expected = undefined

    // Execute
    let bagelInBasket = basket.addItem('kebab', 1)

    // Verify
    expect(bagelInBasket).toEqual(expected)
  })


  //Test 2
  // Sad path if the basket capacity is reached
  it("Alert when basket is full", () => {
    // set up
    const expected = "Basket full, please choose a bigger basket.";

    // execute
    basketLarge.addItem("bagel", 3);
    let alert = basketLarge.addItem("brownie", 16);
   

    // verify
    expect(alert).toEqual(expected);
  });

  //Test 3
  // Happy Path
  it("Remove bagel from basket", () => {
    // set up
    const expected = (this.basket = [
      { item: "bagel", quantity: 1, price: 2.99 },
    ]);

    // execute
    basket.addItem("bagel", 1);
    basket.addItem("brownie", 3);
    let removeItem = basket.removeItem("brownie");

    // verify
    expect(removeItem).toEqual(expected);
  });

  //Test 3
  // Unhappy Path
  it('Will notify if the item that is being removed is not in the basket', () => {
    // Set up
    const expected = 'This item is not in the basket.'

    // Execute
    basket.addItem("bagel", 1);
    basket.addItem("brownie", 3);
    let removeItem = basket.removeItem('kebab')

    // Verify
    expect(removeItem).toEqual(expected);

  })




  //Test 4
  it('Will return the current capacity of the basket', () => {
    // Set up
    const expected = 7

    // Execute
    basketLarge.addItem('bagel', 2)
    basketLarge.addItem('brownie', 4)
    basketLarge.addItem('chocolateBagel', 1)
    let totalCapcaity = basketLarge.basketSize()


    // Verify
    expect(totalCapcaity).toEqual(expected)
  })


  //Test 5
  it("Create basket with larger size", () => {
    const expected = (this.capacity = largeBasket);
    new Basket(largeBasket);
    let checkSize = this.capacity;
    expect(checkSize).toEqual(expected);
  });


  //Test 6
  it("price checker for items", () => {
    const expected = 3.99;

    basket.priceChecker("brownie");
    let checkPrice = basket.priceChecker("brownie");
    expect(checkPrice).toEqual(expected);
  });

  //Test 7
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

  //Test 8
  xit("basket total", () => {
    const expected = "£29.93";

    basket.addItem("chocolateBagel", 3);
    basket.addItem("bagel", 1);
    basket.addItem("brownie", 3);
    let total = basket.basketTotal();
    expect(total).toEqual(expected);
  });
});
