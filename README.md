# kfc-bdd-tests
KFC BDD Tests

Prerequisite: Node.js 12 or 14 and above

cd lpg-bdd-tests

npm install cypress —save-dev

git clone git@github.com:sage01/kfc-bdd-tests.git

# To run from command line:
npx cypress run 

On test failure a screenshot is taken and saved in the lpg-bdd-tests/cypress/screenshots dir.
A video is saved in lpg-bdd-tests/cypress/videos dir.
Test resuts are saved in lpg-bdd-tests/test-results dir

# To run using Cypress Testrunner:
npx cypress open
Double click on the feature file buyMeal.Feature
