Feature: Running Cucumber with Protractor
  As a user of Angular
  I should be able to use Cucumber
  In order to run my E2E tests

@AngularPage
  Scenario: Angular Page Test
    Given I go to "https://angular.io/"
    Then I should see One Framework Displayed
