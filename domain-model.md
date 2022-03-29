Domain model

| object | properties                          | method           | input                                     | Output                                                       |
| ------ | ----------------------------------- | ---------------- | ----------------------------------------- | ------------------------------------------------------------ |
| Menu   |                                     | getMenu()        |                                           | menu object                                                  |
|        |                                     |                  |                                           |                                                              |
| Basket | basket(array), basket-size(integer) | getBasket()      |                                           | basket(array)                                                |
|        |                                     | addItem()        | item name(string), item qunatity(integer) | no output (getbasket()is used)                               |
|        |                                     | removeItem()     | item name(string)                         | basket(array) or error(string)                               |
|        |                                     | basketCapacity() |                                           | no. items in basket(integer), error(string) if more than max |
|        |                                     | PriceChecker()   | item name(string)                         |                                                              |
|        |                                     | basketTotal()    |                                           | total price(integer)                                         |
