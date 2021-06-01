Feature: Order delivery bucket meal from KFC
  I want to order a delivery bucket meal from KFC

  @regression @e2e @smoke
  Scenario: Order a bucket to share meal from KFC via Find a FKC
    Given I am on the KFC home page 
    And I accept all cookies
    When I select a menu option "FIND A KFC"
    Then I should be on the "kfc-near-me" page
    When I enter "Cobham" in the search field on the KFC near me page 
    Then I should be on the "choose-restaurant" page
    When I select button "ORDER COLLECTION NOW" 
    Then I should be on the "order-online/choose-your-food" page
    When I add "20 HOT WINGS BUCKET" to my basket
    And I select "CONTINUE WITH MY ORDER" option in the popup
    And I select the basket icon
    Then I should be on the "order-online/your-order" page