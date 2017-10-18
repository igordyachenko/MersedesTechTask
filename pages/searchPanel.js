var mainPage = function () {
  "use strict";

  var findHotel = element(by.id('doSearch'));
  var destinationField = $('#destination');
  var roomsButtonPlus = $('#rooms .btn-plus')
  var adultsButtonPlus = $('#adult .btn-plus');
  var childrenButtonPlus = $('#children .btn-plus');
  var occupants =  $('#occupants');

  var listDestination = element.all(by.repeater('match in matches track by $index'));
  
  var checkIn = element(by.model('datepicker.startDate'));
  var checkOut = element(by.model('datepicker.endDate'));

  this.get = function(site){
    browser.get(site);
  };

  this.listDestinations = function(){
    waitForElementToBePresent(listDestination);
  };

  this.HotelDestination = function(destination){
    destinationField.sendKeys(destination, protractor.Key.ENTER);
  };

  this.CheckInDate = function(checkInDate){
    checkIn.clear();
    checkIn.sendKeys(checkInDate);
  };

  this.CheckOutDate = function(checkOutDate){
    checkOut.clear();
    checkOut.sendKeys(checkOutDate);
  };

this.findHotel = function(){
  findHotel.click();

};
//ToDo: try with get[i]
  //ToDo: refactor Add rooms, Adults, Children steps to extract common logic
  this.roomsAdd = function(roomsAmount){
    occupants.click();
    for (var i=1; i<roomsAmount; i++){
      roomsButtonPlus.click();
    }
  };

  this.adultsButtonAdd = function(adultsAmount){
    occupants.click();
    for (var i=2; i<adultsAmount; i++){
      adultsButtonPlus.click();
    }
  };

  this.childrenAdd = function(childrenAmount){
    occupants.click();
    for (var i=0; i<childrenAmount; i++){
      childrenButtonPlus.click();
    }
  };
  
  function waitForElementToBePresent(element){
      browser.wait(function () {
        return element.isPresent();
      },60000);
   };

};
module.exports = mainPage;
