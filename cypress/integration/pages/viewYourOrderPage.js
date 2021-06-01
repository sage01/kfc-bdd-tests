class viewYourOrderPage {
    
    static findOrderInBasket(foodName) {
        switch (foodName) {
            case "1 x 20 Hot Wings Bucket":
                cy.get('.sc-1ofu0p6-4 > .sc-jQMNup > .sc-bJHhxl > .sc-dphlzf > .sc-hARARD > .sc-hlILIN > a > .sc-TOsTZ').should('includes',foodName);
                break;
            case "DELIVERY":
                cy.get('.sc-1ofu0p6-4 > .sc-jQMNup > .sc-bJHhxl > .sc-dphlzf > .sc-hARARD > .gUqzg > a > .sc-TOsTZ').click({ force: true });
                break;               
        }
    }
}
export default viewYourOrderPage