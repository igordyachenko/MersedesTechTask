var mainPage = function () {
  "use strict";

  // var searchButton = element(By.id('doSearch'));
  // var location = element(By.id('searchBox'));

  this.get = function(site){
    browser.get(site);
  };

  this.getTitle = function(){
    return browser.getTitle();
  };

  this.search = function(){
      searchButton.click();
  };

  this.locationName = function(locatename){
    waitForElementToBePresent(location);
    location.sendKeys(locatename);
  };

  function waitForElementToBePresent(element){
      
      browser.wait(function () {
      return element.isPresent();
      },60000);

      browser.wait(function () {
      return element.isDisplayed();
      },60000);
      };

};
module.exports = mainPage;
