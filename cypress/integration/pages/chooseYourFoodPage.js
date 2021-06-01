class chooseYourFoodPage {
    
    static chooseYourFood(foodName) {
        switch (foodName) {
            case "20 HOT WINGS BUCKET":
                cy.get('.sc-jWBwVP > .sc-kgoBCf > .sc-ckVGcZ > :nth-child(1) > .sc-eHgmQL > .sc-jWojfa > .sc-hycgNl > .StyledIconBase-sc-bdy9j4 > path').click({ force: true });
                cy.get(':nth-child(2) > .bZKYXV > :nth-child(1) > .sc-AnqlK > .sc-jWBwVP > .sc-kgAjT').click({ force: true });
                break;
            case "20 HOT WINGS BUCKET WITH 2 LARGE SIDES":
                cy.get('.sc-1ofu0p6-4 > .sc-jQMNup > .sc-bJHhxl > .sc-dphlzf > .sc-hARARD > .gUqzg > a > .sc-TOsTZ').click({ force: true });
                break;               
        }
    }

    static selectOptionInPopUp(popUpOption) {
        switch (popUpOption) {
            case "CONTINUE WITH MY ORDER":
                cy.get('.lnwZbP').click();
                cy.get('.hVfKAj > .sc-cJSrbW').click();
                break;
            case "SIGN IN":
                cy.get('.sc-1ofu0p6-4 > .sc-jQMNup > .sc-bJHhxl > .sc-dphlzf > .sc-hARARD > .gUqzg > a > .sc-TOsTZ').click({ force: true });
                break;               
        }
    }
}
export default chooseYourFoodPage