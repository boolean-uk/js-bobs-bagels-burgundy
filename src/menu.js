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
            /* this code part has been used for part one and twoBGLO: 0.49,
            BGLP: 0.39,
            BGLE: 0.49,
            BGLS: 0.49,
            COF: 0.99,
            BGSE: 2.99,
            BGSS: 4.99,*/
            //for part 3 
            BGLO: { price: 0.49, name: "Bagel - Onion" },
            BGLP: { price: 0.39, name: "Bagel - Plain" },
            BGLE: { price: 0.49, name: "Bagel - Everything" },
            BGLS: { price: 0.49, name: "Bagel - Sesame" },
            COF: { price: 0.99, name: "Coffee" },
            BGSE: { price: 2.99, name: "Bagel Sandwich - Everything" },
            BGSS: { price: 4.99, name: "Bagel Sandwich - Sesame" },
        };
    },
};

module.exports = Menu
