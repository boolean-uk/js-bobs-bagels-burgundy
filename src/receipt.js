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
      console.log("MULTIPLELINES: ", multipleLines);
    }
  }
}

module.exports = Receipt;

// class Receipt {
//   constructor(obj = {}) {
//     this.purchases = obj;
//     this.date = new Date();
//     this.total = 0;
//   }
//   getReceipt() {
//     return `
// -=+=-   Bob's Bagels   -=+=-

//        ${this.date.toDateString()}
// ----------------------------
// ${this.getPurchaseList()}
// Total                 £${this.total.toFixed(2)}
//         Thank you
//       for your order!         `;
//   }

//   getPurchaseList() {
//     this.total = 0;
//     let purchaseLines = "";
//     for (let key in this.purchases) {
//       let receiptLine = "";
//       receiptLine += Bagel.getTypeOfBagel(key) ? Bagel.getTypeOfBagel(key) : "";
//       for (let i = 0; i < 19; i++) {
//         if (receiptLine.length < 19) {
//           receiptLine += " ";
//         }
//       }
//       receiptLine += this.purchases[`${key}`];
//       for (let i = 0; i < 4; i++) {
//         if (receiptLine.length < 23) {
//           receiptLine += " ";
//         }
//         console.log("Purchase List", getPurchaseList);
//       }
//       receiptLine += "£";
//       const subtotal = Basket.getSubtotal(this.purchases, key);
//       receiptLine += subtotal;
//       this.total += subtotal;
//       purchaseLines += `${receiptLine}\n`;
//     }
//     return purchaseLines;
//   }
// }
// module.exports = Receipt;
