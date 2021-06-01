class chooseRestaurantPage {
    
    static selectButton(buttonName) {
        switch (buttonName) {
            case "ORDER COLLECTION NOW":
                cy.get('.sc-1ofu0p6-4 > .sc-jQMNup > .sc-bJHhxl > .sc-dphlzf > .sc-hARARD > .sc-hlILIN > a > .sc-TOsTZ').click({ force: true });
                break;
            case "DELIVERY":
                cy.get('.sc-1ofu0p6-4 > .sc-jQMNup > .sc-bJHhxl > .sc-dphlzf > .sc-hARARD > .gUqzg > a > .sc-TOsTZ').click({ force: true });
                break;               
        }
    }
}
export default chooseRestaurantPage