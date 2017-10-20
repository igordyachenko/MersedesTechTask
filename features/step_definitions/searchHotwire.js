var LandingPage = require('../../pages/searchPanel');
var count;
// var hotels = ['NBA', 'A-League', 'ATP Dubai', 'Super Rugby', 'NBL Finals', 'Todays Specials'];

var tabPage;
tabPage = function () {

    var homePage = new LandingPage();

    this.Given(/^I go to "([^"]*)"$/, function(site) {

        homePage.get(site);
    });

//ToDo: investigate why the assertion stop working (options: incorrect WebStorm config or  missed expects in configs)
    this.Then(/^I should see the page title$/, function () {
        homePage.getTitle().then(function (title) {
            expect(title).textToBePresentInElement('Hotels & Hotel Deals | Book Hotel Reservations | Hotwire');
        });
    });

    this.Given(/^I click on the Search Button$/, function () {
        return homePage.search();
    });


    this.Given(/^I enter a "([^"]*)" name$/, function (locatename) {

        return homePage.locationName(locatename);
    });

    //ToDo: move locator to page object; re-work properly to wait hotel list result
    this.Then(/^I should see list of results$/, function () {
        expect(element(by.css('.description-summary-container')));
        // var searchList = element.all($('.summary-container'));
        // return expect(searchList.get(0).getElement()).isElementPresent('.summary-container');

    });
//ToDo: re-work/nice to have list of hotels
    this.Then('I should view the list of hotels', function () {
        homePage.listDestinations();
        var listAll = element.all(by.repeater('item in controller.menuItems.filtered'));
        element.all(by.repeater('match in matches track by $index')).count().then(function (count) {
            console.log(count);

            for (var i = 0; i < count; ++i) {
                listAll.get(i).getText().then(function (text) {
                    expect(text[i]).to.eventually.equal(hotels[i])
                });
            }//end for loop
        });
    });

    this.When(/^I enter required search "([^"]*)"$/, function (destination) {
        homePage.HotelDestination(destination, protractor.Key.ENTER);
    });

    this.When(/^I enter date of Check-In "([^"]*)"$/, function (date) {
        // Write code here that turns the phrase above into concrete actions
        return homePage.CheckInDate(date, protractor.Key.TAB);
    });

    this.When(/^I enter date of Check-out "([^"]*)"$/, function (date) {
        // Write code here that turns the phrase above into concrete actions
        return homePage.CheckOutDate(date);
    });

    this.When(/^I enter number of Rooms "([^"]*)"$/, function (amountR) {
        // Write code here that turns the phrase above into concrete actions
       return homePage.roomsAdd(amountR);
    });
    
    this.When(/^I enter number of Adults "([^"]*)"$/, function (amountA) {
        // Write code here that turns the phrase above into concrete actions
        return homePage.adultsButtonAdd(amountA);
    });
    
    this.When(/^I enter number of Children "([^"]*)"$/, function (amountC) {
        // Write code here that turns the phrase above into concrete actions
        return homePage.childrenAdd(amountC);
    });
    
    this.When(/^I click Find Hotel button$/, function () {
        // Write code here that turns the phrase above into concrete actions
        return homePage.findHotel();
    });

};
module.exports = tabPage;