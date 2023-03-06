# 1 STORY

user would like to add an item to their basket:

OBJECT:
item = {
sku: str
price: number
name: string
variant: string
quantity: number
}

actions: add, remove

CLASS: Basket
basket: []

METHOD:
addItem(sku: string)
INPUT = sku to add
OUTPUT = basket [item]
removeItem(sku: string)
INPUT = sku to remove
OUTPUT= basket[] - item that has been removed

Final OUTPUT: Basket: []

# 2 STORY

## User would like to know when their basket is full

CLASS Basket

METHOD:
    INPUT: checkBasketSize(void)
    OUTPUT: alert "Basket full, Please choose a bigger basket."

## User: would like to create baskets with larger capacity

CLASS Basket
    constructor: basketSize
        smallBasket,
        mediumBasket,
        largeBasket

METHOD:
    INPUT: basket(@basketSize)
    OUTPUT: basket with increased capacity to match @basketSize

# 3 STORY

   user would like to see the price of each item
Class Basket

METHOD:
    INPUT: priceChecker(sku: string)
    OUTPUT: price of the checked item

   user would like to know the total price of the items in the basket
    INPUT: basketTotal(void)
    OUTPUT: the total of all item prices: number