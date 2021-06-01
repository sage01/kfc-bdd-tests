
import { When, And, Then } from 'cypress-cucumber-preprocessor/steps'
require('cypress-iframe')
import homePage from '../pages/homePage'
import kfcNearMePage from '../pages/kfcNearMePage'
import chooseRestuarantPage from '../pages/chooseRestaurantPage'
import chooseYourFoodPage from '../pages/chooseYourFoodPage'
import viewYourOrderPage from '../pages/viewYourOrderPage'

When("I select a menu option {string}", (menuOption) => {   
    homePage.selectMenuOption(menuOption)
})

When("I enter {string} in the search field on the KFC near me page", (searchText) => {
    kfcNearMePage.enterSearchText(searchText)
})

When("I select button {string}", (buttonName) => {
    chooseRestuarantPage.selectButton(buttonName)
})

When("I add {string} to my basket", (foodName) => {
    chooseYourFoodPage.chooseYourFood(foodName)
})

And("I select {string} option in the popup", (popUpOption) => {
    chooseYourFoodPage.selectOptionInPopUp(popUpOption)
})

Then("I should see {string} in my basket", (foodName) => {
    viewYourOrderPage.findOrderInBasket(foodName)
})
