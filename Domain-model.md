# Creating a Basket

| Methods | Inputs | Data | Scenarios | Outputs
| ------ | ------ | ------ | ----- | -----
| Constructor | Capacity(Number,optional,default=5) | |Initialize a new basket with a given or default capacity| A new Basket instance with the specified capacity

# Getting Items from the Basket

| Methods | Inputs | Data | Scenarios | Outputs
| ------ | ------ | ------ | ----- | -----
| Get Basket | None | |Retrive the items currently in the Basket| An array of items currently in the basket

# Adjusting Basket Size

| Methods | Inputs | Data | Scenarios | Outputs
| ------ | ------ | ------ | ----- | -----
| Set Basket Size | Size (Number) | |Set a new size for the Basket,validating against allowed sizes| Sets the Basket Size or throws an error if the size is invalid

# Managing items the Basket

| Methods | Inputs | Data | Scenarios | Outputs
| ------ | ------ | ------ | ----- | -----
| Add Item | item Name (String), item Quantity (Number)| |Add a specified item in a certain quantity to the Basket| Updated basket array or an error if the basket is full or the item is not available

# Removing Item from the Basket

| Methods | Inputs | Data | Scenarios | Outputs
| ------ | ------ | ------ | ----- | -----
| Remove Item |Item Name (String) | |Remove a specific item from the Basket| Updated basket array or a message if item not found

# Checking Basket information

| Methods | Inputs | Data | Scenarios | Outputs
| ------ | ------ | ------ | ----- | -----
| Basket Capacity | None | |Check if the current items exceed the Basket's capacity| Message indicating if the basket is full or has space

# Checking price of items in the basket

| Methods | Inputs | Data | Scenarios | Outputs
| ------ | ------ | ------ | ----- | -----
| Price Checker | item Name (String) | |Check the price of a specific item in the basket| Price of the Specified item

# Measuring total of the Basket

| Methods | Inputs | Data | Scenarios | Outputs
| ------ | ------ | ------ | ----- | -----
| Basket Total | None | |Calculate the total price of items in the Basket| Total price in format £(Total Price)