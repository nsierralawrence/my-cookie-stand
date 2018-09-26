'use strict';

var pikeStore = {
    name: 'First and Pike',
    min: 23,
    max: 65, 
    avgCookieSale: 6.3,
    numCookiesPerHourArray: [],
    hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', 'Daily Total']
};

pikeStore.calculateCustPerHour = function (){
    for(var i = 0; i < 15; i++){
    var randomCustNum = Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
    return Math.round(randomCustNum * this.avgCookieSale);
    }
};


pikeStore.numCookiesSoldPerHour = function(){
    for(var i = 0; i < 15; i++){
        this.numCookiesPerHourArray.push(this.calculateCustPerHour());
    }
};

pikeStore.numCookiesSoldPerHour();

pikeStore.totalNumCookies = function(){
        var sumNumCookies = this.numCookiesPerHourArray.reduce(function(a,n) {
            return a + n;
        });
        this.numCookiesPerHourArray.push(sumNumCookies);
        console.log(sumNumCookies);
    };

pikeStore.totalNumCookies();

pikeStore.renderHours = function(){
    var storesContainer = document.getElementById('stores');
    console.log(storesContainer);
    var headerEl = document.createElement('h2');
    console.log(headerEl);
    headerEl.textContent = this.name;
    storesContainer.appendChild(headerEl);
    
    var ulEl = document.createElement('ul');

    for(var i = 0; i < this.hours.length; i++){
        var listItemEl = document.createElement('li');
            listItemEl.textContent = this.hours[i] + ': ' + this.numCookiesPerHourArray[i];
            ulEl.appendChild(listItemEl);
        
    };

    storesContainer.appendChild(ulEl);
};

pikeStore.renderHours();

var seaTacStore = {
    name: 'SeaTac Airport',
    min: 3,
    max: 24,
    avgCookieSale: 1.3,
    numCookiesPerHourArray: []
};

var seattleCenterStore = {
    name: 'Seattle Center',
    min: 11,
    max: 38,
    avgCookieSale: 3.7,
    numCookiesPerHourArray: []
};

var capHillStore = {
    name: 'Capitol Hill',
    min: 20,
    max: 38,
    avgCookieSale: 2.3,
    calculateCustPerHour: [],
    numCookiesPerHourArray: []
};

// var createStoreWithObject = function(storeObject){
//     var storeContainer = document.getElementById('pageInfo');

//     var h2El = document.createAttribute('h2');
//     h2El.textContent = storeObject.name;

//     storeContainer.appendChild(h2El);

//     var ulEl = document.createElement('ul');

//     for (var i = 0; i< storeObject.numCookiesPerHourArray.length; i++){
//         var liEl = document.createElement('li');
//         liEl.textContent = storeObject.numCookiesPerHourArray[i];
//         ulEl.appendChild(liEl);
//     }

//     storeContainer.appendChild(ulEl);
// };

// var createItem = function(){
//     var storeContainer = document.getElementById('storeInfo');

// var h1El = document.createElement('h1');
// h1El.textContent = 'Average Hourly and Daily Sale By Location';

// storeContainer.appendChild(h1El);
// };

// createItem();
// var elName = document.getElementById('storeName');
// elName.textContent = store.name;

// var Store = function(name, minCustPerHour, maxCustPerHour, avgCookieSalePerPerson){
//     this.name = name;
//     this.min = min;
//     this.max = maxCustPerHour;
//     this.avgCookieSale = avgCookieSale;
// };

// var seaTac = new Store('SeaTac', 

// Store.prototype.custPerHour = function(){
//     //insert method here
// }