class kfcNearMePage {
    
    static enterSearchText(searchText) {
        cy.get('.kCfFDd > .sc-gojNiO').click({ force: true }).type(searchText, {force: true})
        cy.get('.sc-cMljjf > .sc-TOsTZ').click({ force: true })
    } 
}
export default kfcNearMePage