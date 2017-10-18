
var HomePage = require('../../pages/resultPage');

var homePage = function(){

  var angularPage = new HomePage();

  //this.Given(/^I go to "([^"]*)"$/, function(site) {
  //  angularPage.get(site);
  //});


 this.Then(/^I should see my "([^"]*)" in the list$/, function (inputText) {
    var todoList = element.all(by.repeater('match in matches track by $index'));
    return expect((todoList.get(0).getText()).to.elementTextContains('Kiev')).click();
    //callback();
  });
};

module.exports = homePage;
