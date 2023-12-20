const Basket = require('../src/basket.js')

describe('Basket', () => {
  let basket

  beforeEach(() => {
    basket = new Basket()
  })

  describe('Adding and removing from the Basket', () => {
    // Test 1
    it('Add items to basket', () => {
      const expected = [
        { item: 'bagel', quantity: 1, price: 2.99 },
        { item: 'brownie', quantity: 3, price: 3.99 }
      ]

      basket.addItem('bagel', 1)
      basket.addItem('brownie', 3)
      expect(basket.getBasket()).toEqual(expected)
    })
    // Test 2
    it('Remove bagel from basket', () => {
      const expected = [{ item: 'brownie', quantity: 3, price: 3.99 }]

      basket.addItem('bagel', 1)
      basket.addItem('brownie', 3)
      basket.removeItem('bagel')
      expect(basket.getBasket()).toEqual(expected)
    })
    // Test 3
    it('favourite bagel quantity', () => {
      const expected = [
        { item: 'chocolateBagel', quantity: 1, price: 4.99 },
        { item: 'chocolateBagel', quantity: 1, price: 4.99 },
        { item: 'chocolateBagel', quantity: 1, price: 4.99 }
      ]

      basket.addItem('chocolateBagel', 1)
      basket.addItem('chocolateBagel', 1)
      basket.addItem('chocolateBagel', 1)
      expect(basket.getBasket()).toEqual(expected)
    })
  })

  describe('Basket size and capacity', () => {
    ;['small', 'medium', 'large'].forEach((size) => {
      // Test 4
      it(`should create a ${size} basket with correct size`, () => {
        const basketInstance = new Basket(Basket.basketSizes[size])
        expect(basketInstance.basketSize).toBe(Basket.basketSizes[size])
      })
    })
  })

  describe('Cool other features', () => {
    // Test 5
    it('Get all basket', () => {
      const expected = []
      expect(basket.getBasket()).toEqual(expected)
    })
    // Test 6
    it('Alert when basket is full', () => {
      const expected = 'Basket full, Please choose a bigger basket.'

      basket.addItem('bagel', 3)
      basket.addItem('brownie', 5)
      expect(basket.basketCapacity()).toEqual(expected)
    })
    // Test 7
    it("Alert when trying to remove item that doesn't exist inside basket", () => {
      const expected = 'This item is not in the basket.'

      basket.addItem('bagel', 3)
      basket.addItem('brownie', 5)
      expect(basket.removeItem('Kebab')).toEqual(expected)
    })
    // Test 8
    it('price checker for items', () => {
      const expected = 3.99

      expect(basket.priceChecker('brownie')).toEqual(expected)
    })
    // Test 9
    it('basket total', () => {
      const expected = '£29.93'

      basket.addItem('chocolateBagel', 3)
      basket.addItem('bagel', 1)
      basket.addItem('brownie', 3)
      expect(basket.basketTotal()).toEqual(expected)
    })
  })
})
