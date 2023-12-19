const Menu = require("../src/menu.js")

const smallBasket = 5
const mediumBasket = 10
const largeBasket = 15
/*
class Basket {

    constructor(capacity = smallBasket) {
        this.basket = []
        this.basketSize = capacity
    }
    getBasket() {
        return this.basket
    }
    addItem(itemName, itemQuantity) {
        const fullMenu = MENU.GetMenu()
        for (const items in fullMenu) {
            if (items === itemName) {
                const insideBasket = {
                    item: itemName,
                    quantity: itemQuantity,
                    price: fullMenu[items]
                }
                this.basket.push(insideBasket)
            }
        }
    }

    removeItem(itemName) {
        for (let i = 0; i < this.basket.length; i++)
            if (this.basket[i].item === itemName) {
                this.basket.splice(i, 1)
                return this.basket
            }
            else if (this.basket[i].item !== itemName)
                return "This item is not in the basket."
    }

    basketCapacity() {
        const totalCapacity = this.basket.reduce((total, quantity) => { return total + quantity.quantity }, 0)
        if (totalCapacity > this.basketSize) {
            return "Basket full, Please choose a bigger basket."
        }
    }

    priceChecker(itemName) {
        const fullMenu = MENU.GetMenu()
        for (const items in fullMenu)
            if (itemName === items) { return fullMenu[items] }
    }

    basketTotal() {
        let eachItem = []
        for (let i = 0; i < this.basket.length; i++) {
            eachItem.push(this.basket[i].quantity * this.basket[i].price)
        }
        const totalPrice = eachItem.reduce((total, quantity) => { return total + quantity }, 0)
        return ("£" + totalPrice)
    }
}


module.exports = Basket */

class Basket {
    constructor(capacity = 5) {
        this.basket = []
        this.menu = Menu.getMenu()
        this.basketSize = capacity

    }


    /*addItem(itemSku, quantity) {
        const price = this.menu[itemSku]
        if (price) {
            const newItem = {
                sku: itemSku,
                quantity: quantity,
                price: price,
            };
            this.basket.push(newItem)
        } else {
            throw new Error("Item not found in the menu.")
        }
    }*/
    addItem(itemSku, quantity) {
        const price = this.menu[itemSku]
        if (!price) {
            throw new Error("Item not found in the menu.")
        }
        if (this.basket.length + quantity > this.basketSize) {
            throw new Error("Basket full, Please choose a bigger basket.")
        }
        const newItem = {
            sku: itemSku,
            quantity: quantity,
            price: price,
        }
        this.basket.push(newItem)
    }

    removeItem(itemSku) {
        const index = this.basket.findIndex(item => item.sku === itemSku)
        if (index === -1) {
            throw new Error("Item not found in the basket.")
        }
        this.basket.splice(index, 1)
    }
    getBasket() {
        return this.basket
    }
    getBasketSize() {
        return this.basketSize
    }
}

module.exports = Basket


