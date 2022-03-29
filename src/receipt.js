const Basket = require("./basket.js");
const Item = require("./basket.js");

class Receipt {
  constructor(basket, totalPrice) {
    this.basket = basket;
    this.totalPrice = totalPrice;
    this.now = new Date();
    this.year = this.now.getFullYear();
    this.month = this.now.getMonth() + 1;
    this.date = this.now.getDate();
    this.today = this.date + "-" + this.month + "-" + this.year;
  }

  receiptLine(baskets) {
    //console.log("BASKET: ", basket);
    let lineItem = "";
    let lineQty = 0;
    let linePrice = "";
    baskets.forEach((item) => {
      lineItem = item.name;
      lineQty = item.quantity;
      linePrice = item.price;
    });
    let fullLine = lineItem + "    " + lineQty + "x  " + linePrice;
    //console.log("FULL LINE: ", fullLine);
    return fullLine;
  }

  multipleLines(basket) {
    console.log("BASKET: ", basket);
    for (let i = 0; i < basket.length; i++) {
      console.log("iteration: ", i, "ITEM: ", basket[i]);
      let multipleLines = this.receiptLine(basket[i]);
      console.log("MULTIPLELINES: ", multipleLines)
    }
  }
}

module.exports = Receipt;
