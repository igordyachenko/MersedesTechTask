var homePage= function () {
    "use strict";
    var taskList = element(by.model('todoList.todoText'));
    var taskButton = element(by.css('[value="add"]'));
    var hotelResult = $('.description-summary-container');

    this.get = function(site){
      browser.get(site);
    };


    //return the Angular Page Title
     this.getTitle = function(){
       return browser.getTitle();
     }


};
module.exports = homePage;
