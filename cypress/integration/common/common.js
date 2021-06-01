import { Given, When, And } from 'cypress-cucumber-preprocessor/steps'
require('cypress-iframe')

Given('I am on the KFC home page', () => {
    cy.visit('/')
})

And('I accept all cookies', () => {
    cy.get('#onetrust-accept-btn-handler').click()
})

Then('I should be on the {string} page', (pathname) => {
    cy.expectPathname('/'+pathname)
})

And('I select the basket icon', () =>{
    cy.get('.sc-iFMziU > a > .sc-eHgmQL > .sc-kgAjT').click()
})
