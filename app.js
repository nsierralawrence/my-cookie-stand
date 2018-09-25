'use strict';

var pikeStore = {
    name: 'First and Pike',
    minCust: 23,
    maxCust: 65, 
    avgCookieSale: 6.3,
    custPerHourArray: [],
    numCookiesPerHourArray: [],
   
    // totalNumCookies: function(){
    //     var sumNumCookies = numCookiesPerHourArray[i].reduce(add, 0);
    //     function add(a, b){
    //         return a + b;
    //     }
    //     console.log(sumNumCookies);
    // }, 

    custPerHour: function(minCust, maxCust) {
        
        for(var i = 0; i < 15; i++){
            // var customers
            this.custPerHourArray.push(Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust);
            console.log(this.custPerHourArray[i]);
        }
            
    },

    numCookiesPerHour: function(){
        for(var i= 0; i < this.custPerHourArray.length; i++){
        var totalCookies = Math.floor(this.avgCookieSale * this.custPerHourArray[i]);
        this.numCookiesPerHourArray.push(totalCookies);
        console.log(this.numCookiesPerHourArray[i]);
        }
    },
};

pikeStore.renderHours = function(){
    var storesContainer = document.getElementById('stores');
    console.log(storesContainer);
    var headerEl = document.createElement('h2');
    console.log(headerEl);
    headerEl.textContent = this.name;
    storesContainer.appendChild(headerEl);
    
    var ulEl = document.createElement('ul');

    for(var i = 0; i < this.numCookiesPerHourArray.length; i++){
        var listItemEl = document.createElement('li');
        listItemEl.textContent = this.numCookiesPerHourArray[i];
        ulEl.appendChild(listItemEl);
    }

    storesContainer.appendChild(ulEl);
};

pikeStore.renderHours();

// var seaTacStore = {
//     name: 'SeaTac Airport',
//     minCust: 3,
//     maxCust: 24,
//     avgCookieSale: 1.3,
//     custPerHourArray: [],
//     numCookiesPerHourArray: [],

//     custPerHour: function(minCust,maxCust){
//         for(var i = 0; i < 15; i++){
//             this.custPerHourArray.push(Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust);
//             console.log(this.custPerHourArray[i]);
//         }
//     },

//     numCookiesPerHour: function(){
//         for(var i = 0; i < this.custPerHourArray.length; i++){
//             var totalCookies = Math.floor(this.avgCookieSale * this.custPerHourArray[i]);
//             this.numCookiesPerHourArray.push(totalCookies);
//             console.log(this.numCookiesPerHourArray[i]);
//         }
//     }
// };

// var seattleCenterStore = {
//     name: 'Seattle Center',
//     minCust: 11,
//     maxCust: 38,
//     avgCookieSale: 3.7,
//     custPerHourArray: [],
//     numCookiesPerHourArray: [],

//     custPerHour: function(minCust, maxCust){
//         for( var i = 0; i < 15; i++){
//             this.custPerHourArray.push(Math.floor(Math.random() * (maxCust - minCust + 1)) + minCust);
//             console.log(this.custPerHourArray[i]);
//         }
//     },

//         numCookiesPerHour: function(){
//             for(var i = 0; i < this.custPerHourArray.length; i++){
//                 var totalCookies = Math.floor(this.avgCookieSale * this.custPerHourArray[i]);
//                 this.numCookiesPerHourArray.totalCookies;
//                 console.log(this.numCookiesPerHourArray[i]);
//             }
//         }
// }

// var capHillStore = {
//     name: 'Capitol Hill',
//     minCust: 20,
//     maxCust: 38,
//     avgCookieSale: 2.3,
//     custPerHourArray: [],
//     numCookiesPerHourArray: [],

//     custPerHour: function(minCust, maxCust){
//         for (var i = 0; i < 15; i++){
//             this.custPerHourArray.push(Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust);
//             console.log(this.custPerHourArray[i]);
//         }
//     }
// }

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