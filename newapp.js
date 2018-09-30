'use strict';

var cookieForm = document.getElementById('cookie-form');
var bodyElement = document.getElementById('body');
var allStores = [];

var CookiesStore = function (name, minCustomersPerHour, maxCustomersPerHour, avgCookiesSoldPerPerson){
    this.name = name;
    this.min = minCustomersPerHour;
    this.max = maxCustomersPerHour;
    this.avgCookieSale = avgCookiesSoldPerPerson;
    this.numCookiesPerHourArray = [];
    this.hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', 'Daily Total'];
};

var handleMakeStore = function (event){
    event.stopPropagation();
    event.preventDefault();

    var storeName = event.target[store-name].value;
    var minCust = event.target[min-customers].value;
    var maxCust = event.target[max-customers].value;
    var avgCookieSold = event.target[avg-num-cookies].value;
    var cookiesPerHour = event.target[num-cookies-per-hour].value;

    var newStore = new Store (storeName, minCust, maxCust, avgCookieSold,cookiesPerHour);
    allStores.push(newStore);
};

bodyElement.addEventListener('click', function(event){});

cookieForm.addEventListener('submit', handleMakeStore);