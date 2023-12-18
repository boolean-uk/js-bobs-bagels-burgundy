# Adding an item to the basket
Nouns
-Member of the public
-Bagel
-Item
-Basket
Verbs
-Order a bagel
-Add an item
| Methods | Inputs | Data | Scenario | Outputs
| ------ | ------ | ------ | ----- | -----
| additemtoBasket(item ) |  item(@item) | @item:sku@string ,price@string,name@string, variant@string| Add a valid item | returns true

# remove an item  from the basket
Nouns
-Member of the public
-Item
-Basket
Verbs
-Change an Order
-Remove an item
| Methods | Inputs | Data | Scenario | Outputs
| ------ | ------ | ------ | ----- | -----
| removeitemfromBasket(item ) |  item(@item) | @item:sku@string ,price@string,name@string, variant@string| remove a valid item | returns true

# not overfill my basket
Noun
-member of the public
-Item
-Basket
Verbs
-overfill my small bagel basket
-Add an item
| Methods | Inputs | Data | Scenario | Outputs
| ------ | ------ | ------ | ----- | -----
| notOverfillbasket(item ) |  item(@item) | @item:sku@string ,price@string,name@string, variant@string| overfill basket | returns expected

# create baskets with larger capacity
Noun
-Manager
-Bobs Bagels
-sales
-Basket
Verbs
-record
-create
| Methods | Inputs | Data | Scenario | Outputs
| ------ | ------ | ------ | ----- | -----
| basketwithlargercapacity(item ) |  item(@item) | @item:sku@string ,price@string,name@string, variant@string| largerCapacity | returns true

# remove an item that doesn't exist in my basket. 
Noun
-member of the public
-sanity
-item
-basket
Verbs
-maintain my sanity
-remove an item that doesn't exist in my basket
| Methods | Inputs | Data | Scenario | Outputs
| ------ | ------ | ------ | ----- | -----
| itemnotexisting(item ) |  item(@item) | @item:sku@string ,price@string,name@string, variant@string| notExisting | returns true

# see the price of each item before I add it to my basket
Noun
-member of the public
-bagels
-price
-item
-basket
Verbs
-know how much 
-see the price
| Methods | Inputs | Data | Scenario | Outputs
| ------ | ------ | ------ | ----- | -----
| price(item ) |  item(@item) | @item:sku@string ,price@string,name@string, variant@string| price | returns number

# The total sum of the bagels in my basket
Noun
-member of the public
-bagels
-price
-item
-basket
Verbs
-Pay
-Checkout/Total sum
| Methods | Inputs | Data | Scenario | Outputs
| ------ | ------ | ------ | ----- | -----
| Checkout(item ) |  item(@item) | @item:sku@string ,price@string,name@string, variant@string| Total sum | returns expected number
# Part 3
As a member of the public,
So that I can know how much my bagels are,
I’d like to see the price of each item before I add it to my basket.

As a member of the public,
So that I can prepare to pay
When I go to checkout I'd like to know the total sum of the bagels in my basket
```


