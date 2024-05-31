const Basket = require("../src/basket.js")

describe("Basket", () => {
    let basket
    const mediumBasket = 10
    const largeBasket = 15

    beforeEach(() => {
        basket = new Basket()
    })

    it("should get all items in the basket", () => {
        expect(basket.getBasket()).toEqual([])
    })

    it("should add items to the basket", () => {
        const expected = [
            { item: "bagel", quantity: 1, price: 2.99 },
            { item: "brownie", quantity: 3, price: 3.99 }
        ]

        basket.addItem("bagel", 1)
        basket.addItem("brownie", 3)

        expect(basket.getBasket()).toEqual(expected)
    })

    it("should alert adding unfound item", () => {
        const expected = "The item wasn't found in the menu."

        expect(basket.addItem("water", 1)).toBe(expected)
    })

    it("should remove items from the basket", () => {
        const expected = [{ item: "brownie", quantity: 3, price: 3.99 }]

        basket.addItem("bagel", 1)
        basket.addItem("brownie", 3)

        expect(basket.removeItem("bagel")).toEqual(expected)
    })

    it("should alert when the basket is full", () => {
        const expected = "Basket full, please choose a bigger basket."

        basket.addItem("bagel", 3)
        basket.addItem("brownie", 5)

        expect(basket.basketCapacity()).toEqual(expected)
    })

    it("should get the medium size basket", () => {
        new Basket(mediumBasket)
        
        expect(this.basketSize).toEqual(basket.basketSize[mediumBasket])
    })

    it("should get the large size basket", () => {
        new Basket(largeBasket)
        
        expect(this.basketSize).toEqual(basket.basketSize[largeBasket])
    })

    it("should alert when removing an item that doesn't exist in the basket", () => {
        const expected = "This item isn't in the basket."

        basket.addItem("bagel", 3)
        basket.addItem("brownie", 5)

        expect(basket.removeItem("Kebab", 10)).toEqual(expected)
    })

    it("should check the item's price", () => {
        const expected = 3.99

        expect(basket.priceChecker("brownie")).toEqual(expected)
    })

    it("should increase the item's quantity", () => {
        const expected = [
            { item: "chocolateBagel", quantity: 1, price: 4.99 },
            { item: "chocolateBagel", quantity: 1, price: 4.99 },
            { item: "chocolateBagel", quantity: 1, price: 4.99 }
        ]

        basket.addItem("chocolateBagel", 1)
        basket.addItem("chocolateBagel", 1)
        basket.addItem("chocolateBagel", 1)

        expect(basket.getBasket()).toEqual(expected)
    })

    it("should get the basket's total price", () => {
        basket.addItem("chocolateBagel", 3)
        basket.addItem("bagel", 1)
        basket.addItem("brownie", 3)

        expect(basket.basketTotal()).toEqual("£29.93")

        basket.addItem("bagel", 1)
        
        expect(basket.basketTotal()).toEqual("£32.92")
    })
})