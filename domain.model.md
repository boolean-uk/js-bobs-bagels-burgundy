### Domain Model:

## 1. `Menu` Object:

- Attributes:
  - `menuData`: A collection of menu items with their corresponding SKUs and prices.

- Methods:
  - `getMenu()`: Retrieves the menu data.

## 2. `Basket` Object:

- Attributes:
  - `basketItems`: An array containing items added to the basket.
  - `menu`: Reference to the `Menu` object for retrieving menu data.

- Methods:
  - `addItem(itemSku, quantity)`: Adds an item to the basket with the specified SKU and quantity.
  - `removeItem(itemSku)`: Removes an item from the basket based on its SKU.
  - `getBasket()`: Retrieves the items currently in the basket.
  - *(Additional Methods based on your implementation)*
    - `basketCapacity()`: Checks if the basket has reached its capacity.
    - `priceChecker(itemSku)`: Retrieves the price of an item based on its SKU.
    - `basketTotal()`: Calculates the total cost of items in the basket.

### way I did it

Creating instances of Menu and Basket
Adding items to the basket
Retrieving the basket contents
Removing an item from the basket
Checking the updated basket contents
const updatedBasket = basket.getBasket();
console.log("Updated Basket:", updatedBasket);bas
Additional functionality (if implemented)