Feature: Hotel search
  As a user of https://www.hotwire.com/
  I should be able to Search for hotel in Kiev city for New year eve (31 December 2017 - 01 January 2018) for 2 rooms, 2 adults, and 1 children
  3. Tap on "Search" button
  In order to Check that hotel results are available, and page is fully loaded

  @Search
  Scenario Outline: Login into Tab Account
    Given I go to "https://www.hotwire.com/"

    And I enter date of Check-In "<CheckIn>"
    And I enter date of Check-out "<CheckOut>"
    And I enter number of Rooms "<RoomsAmount>"
    And I enter number of Adults "<AdultsAmount>"
    And I enter number of Children "<ChildrenAmount>"
    When I enter required search "<destination>"
    And I click Find Hotel button
    And I should see list of results
    Examples:
      | destination | CheckIn    | CheckOut   | RoomsAmount | AdultsAmount | ChildrenAmount |
      | Kiev        | 12/31/2017 | 01/01/2018 | 2           | 2            | 1              |