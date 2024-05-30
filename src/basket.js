const MENU = require("./menu.js")
const smallBasket = 5;
const mediumBasket = 10;
const largeBasket = 15;

class Basket
    {

    constructor(capacity = smallBasket) {
        this.basket = []
        this.basketSize = capacity;
    }
    getBasket()
        {
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

                    
                }this.basket.push(insideBasket)
            }
        }
        /*this.contents.filter()
        for(let i = 0; i < this.contents.length; i++){
            for (let j = 0; j < )
        }
    }
    */
    }

// removes an item from the basket
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
        return ("£" + totalPrice) // returns the total price with a currency as a string
    }

    /*
    getTotal() {
        let total = 0
        this.checkDeals()
        console.log(this.countBagelsinBasket())
      for (let i = 0; i < this.contents.length; i++) {
         total += this.contents[i].price * 100
      }
     return total/100
    }
*/
}


module.exports = Basket
