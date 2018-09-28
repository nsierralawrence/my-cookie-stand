'use strict';

// var pikeStore = {
//     name: 'First and Pike',
//     min: 23,
//     max: 65, 
//     avgCookieSale: 6.3,
//     numCookiesPerHourArray: [],
//     hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', 'Daily Total']
// };

// pikeStore.calculateCookiesSoldPerHour = function (){
//     for(var i = 0; i < 15; i++){
//     var randomCustNum = Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
//     return Math.round(randomCustNum * this.avgCookieSale);
//     }
// };


// pikeStore.numCookiesSoldPerHour = function(){
//     for(var i = 0; i < 15; i++){
//         this.numCookiesPerHourArray.push(this.calculateCookiesSoldPerHour());
//     }
// };

// pikeStore.numCookiesSoldPerHour();

// pikeStore.totalNumCookies = function(){
//         var sumNumCookies = this.numCookiesPerHourArray.reduce(function(a,n) {
//             return a + n;
//         });
//         this.numCookiesPerHourArray.push(sumNumCookies);
//         console.log(sumNumCookies);
//     };

// pikeStore.totalNumCookies();

// pikeStore.renderHours = function(){
//     var storesContainer = document.getElementById('stores');
//     console.log(storesContainer);
//     var headerEl = document.createElement('h2');
//     console.log(headerEl);
//     headerEl.textContent = this.name;
//     storesContainer.appendChild(headerEl);
    
//     var ulEl = document.createElement('ul');

//     for(var i = 0; i < this.hours.length; i++){
//         var listItemEl = document.createElement('li');
//             listItemEl.textContent = this.hours[i] + ': ' + this.numCookiesPerHourArray[i];
//             ulEl.appendChild(listItemEl);
        
//     };

//     storesContainer.appendChild(ulEl);
// };

// pikeStore.renderHours();

var CookiesStore = function (name, minCustomersPerHour, maxCustomersPerHour, avgCookiesSoldPerPerson){
    this.name = name;
    this.min = minCustomersPerHour;
    this.max = maxCustomersPerHour;
    this.avgCookieSale = avgCookiesSoldPerPerson;
    this.numCookiesPerHourArray = [];
    this.hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', 'Daily Total'];
};

CookiesStore.prototype.calculateCookiesSoldPerHour = function(){
    for(var i = 0; i < 15; i++){
        var randomCustNum = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
        return Math.round(randomCustNum * this.avgCookieSale); 
    }
};

// calculateCookiesSoldPerHour();

CookiesStore.prototype.cookiesArrayObject = function(){
    for(var i = 0; i < 15; i++){
        this.numCookiesPerHourArray.push(this.calculateCookiesSoldPerHour());
    } 
};
    console.log(this.arrayObject);   
// CookiesStore.arrayObject();

CookiesStore.prototype.totalNumCookies = function(){
    var sumNumCookies = this.numCookiesPerHourArray.reduce(function(a,n){
        return a + n;
    });
    this.numCookiesPerHourArray.push(sumNumCookies);
    console.log(sumNumCookies);
};

CookiesStore.prototype.renderHours = function(){
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

    if(!this.hours.length){
        this.numCookiesSoldPerHour();
    }

    storesContainer.appendChild(ulEl);
};

var pikeStore = new CookiesStore('First and Pike', 23, 65, 6.3,);
var seaTacStore = new CookiesStore('SeaTac Airport', 3, 24, 1.3,);
var seattleCenterStore = new CookiesStore('Seattle Center', 11, 38, 3.7,);
var capHillStore = new CookiesStore('Capitol Hill', 20, 38, 2.3);
var alkiStore = new CookiesStore('Alki', 2, 16, 4.6);

var allCookiesStores = [];
allCookiesStores.push(pikeStore, seaTacStore, seattleCenterStore, capHillStore, alkiStore);

// var storeInfo = [];
// storeInfo.push('Min Customers', 'Max Customers', 'Average Sold Per Customer');

// var tableHeaders = storeInfo.concat(this.hours);

// console.log(this.tableHeaders);
// var addAllStoreArrayObjects = function(){
// pikeStore.cookiesArrayObject();
// seaTacStore.cookiesArrayObject();
// seattleCenterStore.cookiesArrayObject();
// capHillStore.cookiesArrayObject();
// alkiStore.cookiesArrayObject();
// };

// var allStoresTotalNumCookiesSold = function(){
//     pikeStore.totalNumCookies();
//     seaTacStore.totalNumCookies();
//     seattleCenterStore.totalNumCookies();
//     capHillStore.totalNumCookies();
//     alkiStore.totalNumCookies();
// };

// var renderAllCookiesStores = function(){
//     pikeStore.renderHours();
//     seaTacStore.renderHours();
//     seattleCenterStore.renderHours();
//     capHillStore.renderHours();
//     alkiStore.renderHours();
// };

// addAllStoreArrayObjects();
// allStoresTotalNumCookiesSold();
// renderAllCookiesStores();

CookiesStore.prototype.renderAsTableRow = function(){
    this.cookiesArrayObject();
    var cookiesTableEl = document.getElementById('cookies-table');

    var trEl = document.createElement('tr');
    
    // var thEl = document.createElement('th');
    // thEl.textContent = 'Store Info';
    // trEl.appendChild(thEl);

    // for(var i = 0; i < this.tableHeaders.length; i++){
    //     var tdEl = document.createElement('td');
    //     tdEl.textContent = this.tableHeaders[i];
    //     trEl.appendChild(tdEl);
    // };

    trEl = document.createElement('tr');

    var thEl = document.createElement('th');
    thEl.textContent = this.name;
    trEl.appendChild(thEl);

    var tdEl = document.createElement('td');
    tdEl.textContent = this.min;
    trEl.appendChild(tdEl);

    tdEl = document.createElement('td');
    tdEl.textContent = this.max;
    trEl.appendChild(tdEl);

    tdEl = document.createElement('td');
    tdEl.textContent = this.avgCookieSale;
    trEl.appendChild(tdEl);

    for(var i = 0; i < this.numCookiesPerHourArray.length; i++){
    tdEl = document.createElement('td');
    tdEl.textContent = this.numCookiesPerHourArray[i];
    trEl.appendChild(tdEl);
    }

    cookiesTableEl.appendChild(trEl);
};

for(var i = 0; i < allCookiesStores.length; i++){
    allCookiesStores[i].cookiesArrayObject();
    allCookiesStores[i].totalNumCookies();
    allCookiesStores[i].renderHours();
    allCookiesStores[i].renderAsTableRow();
};

// allCookiesStores.renderAsTableRow();


// var seaTacStore = {
//     name: 'SeaTac Airport',
//     min: 3,
//     max: 24,
//     avgCookieSale: 1.3,
//     numCookiesPerHourArray: []
// };

// var seattleCenterStore = {
//     name: 'Seattle Center',
//     min: 11,
//     max: 38,
//     avgCookieSale: 3.7,
//     numCookiesPerHourArray: []
// };

// var capHillStore = {
//     name: 'Capitol Hill',
//     min: 20,
//     max: 38,
//     avgCookieSale: 2.3,
//     calculateCookiesSoldPerHour: [],
//     numCookiesPerHourArray: []
// };

// var seaTac = new Store('SeaTac', 

// Store.prototype.CookiesSoldPerHour = function(){
//     //insert method here
// }

//PandaStore.prototype.calculatePandasSoldEachHour = function() {
 //   for(var i = 0; i < this.hoursOpen; i++){
    //  this.pandasSoldEachHour.push(this.calculatePandasSoldEachHour());
//  }
//}
// PandaStore.prototype.renderStoreHours = function(){
//     if(!this.pandasSoldEachHour.length){ makes sure we are not doubling the data in the array
//         this.calculatePandasSoldEachHour(); we call this here to populate our pandas sold each hour array
//     }
// }
// Step 1. Reference a container element
// var pandaStoreContainer = document.getElementById('stores');
// Step 2. Make a new element
// var headerEl = document.createElement('h2');
// Step 3. Give element content
// headerEl.textContent = this.name;
// step 4. append the newly created element to the container element
// pandaStoreContainer.appendChild(headerEl);
// start step 2. again but here we have created a ul, which is a container element that needs other elements as its content
// var ulEl = document.createElement('ul');
// step 3. give our ul content
// for (var i = 0; i < this.pandasSoldEachHour.length; i++){
    // create a li


