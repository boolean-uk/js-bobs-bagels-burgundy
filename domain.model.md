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
 ### for part two domain model
Menu Object: No changes
2. Basket Object:
Attributes added
basketSize: Maximum capacity of the basket.
Methods:
addItem(itemSku, quantity): Adds an item to the basket with the specified SKU and quantity. Checks if the basket is full before adding.
removeItem(itemSku): Removes an item from the basket based on its SKU. Checks if the item exists in the basket before removal.
getBasketSize(): Retrieves the maximum capacity of the basket.

### here is for part three the domain model and general domain model 
1.  Objects: 
   -  Menu: 
 - Properties:
   - `menuItems`: A collection of menu items, each with a SKU, name, and price.
 - Methods:
   - `getMenu()`: Retrieves the menu items.

   -  Basket: 
 - Properties:
   - `basketItems`: A collection of items in the basket, each with a SKU, name, quantity, and price.
   - `menu`: An instance of the Menu object to access menu information.
   - `basketSize`: The capacity of the basket.
 - Methods:
   - `displayItemPrice(itemSku)`: Displays the price of a specific item.
   - `addItem(itemSku, quantity)`: Adds an item to the basket.
   - `calculateTotal()`: Calculates the total sum of items in the basket.
   - `getBasket()`: Retrieves the items in the basket.
   - `getBasketSize()`: Retrieves the capacity of the basket.

2.  Messages: 
   -  User Messages: 
 - `displayItemPrice(itemSku)`: Display the price of a specific item before adding it to the basket.
 - `addItem(itemSku, quantity)`: Add an item to the basket, checking the capacity of the basket.
 - `calculateTotal()`: Calculate the total sum of items in the basket.

   -  Error Messages: 
 - `Item not found in the menu.`: Indicates that the specified item is not in the menu.
 - `Basket full, Please choose a bigger basket.`: Indicates that the basket is full and a larger basket is needed.

### General Figure 

+------------------------+  +------------------------+
|        User            |          |        System          |
|                        |          |                        |
|  displayItemPrice()    | -------->|                        |
|  addItem()             | -------->|                        |
|  calculateTotal()      | -------->|                        |
|                        |          |                        |
+------------------------+          +------------------------+
          |                                    |
          |                                    |
+------------------------+          +------------------------+
|        Menu            |          |        Basket          |
|                        |          |                        |
|  getMenu()             | -------->|  displayItemPrice()    |
|                        |          |  addItem()             |
+------------------------+          |  calculateTotal()      |
                                    |  getBasket()           |
                                    |  getBasketSize()       |
                                    +------------------------+
