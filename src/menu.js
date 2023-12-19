// for part one I started by  defining a basic domain
/*class Menu {

static GetMenu(){

return {
    bagel: 2.99,
    brownie: 3.99,
    chocolateBagel: 4.99 
}
}
}

module.exports = Menu */
const Menu = {
    getMenu: () => {
        return {
            BGLO: 0.49,
            BGLP: 0.39,
            BGLE: 0.49,
            BGLS: 0.49,
            COF: 0.99,
            BGSE: 2.99,
            BGSS: 4.99,
        };
    },
};

module.exports = Menu;

// inventory.js
const Inventory = {
    getInventory: () => {
        return {
            inventory: [
                // ... (your existing inventory entries)
            ],
        };
    },
};

module.exports = Inventory;

