class homePage {

    static selectMenuOption(menuOption) {
        cy.waitFor('.sc-epnACN > [href="/"] > .sc-hSdWYo > img')
        switch (menuOption) {
            case "OUR MENU":
                cy.get('.fGuJXz > .sc-hSdWYo > .sc-iAyFgw').click();
                break;
            case "ORDER ONLINE":
                cy.get(':nth-child(4) > :nth-child(2) > .sc-hSdWYo > .sc-iAyFgw').click();
                break;
            case "FIND A KFC":
                cy.get(':nth-child(4) > :nth-child(3) > .sc-hSdWYo > .sc-iAyFgw').click();
                break;
            case "DISCOVER KFC":
                cy.get(':nth-child(4) > :nth-child(4) > .sc-hSdWYo > .sc-iAyFgw').click();
                break;
            case "CONTACT":
                cy.get(':nth-child(5) > .sc-hSdWYo > .sc-iAyFgw').click();
                break;
            case "DEVELOPMENTS":
                cy.get(':nth-child(6) > .sc-hSdWYo > .sc-iAyFgw')
                break;
            case "MY ACCOUNT":
                cy.get('.inzZLV > .sc-hSdWYo > .sc-iAyFgw').click();
                break;
        }
    }
}
export default homePage