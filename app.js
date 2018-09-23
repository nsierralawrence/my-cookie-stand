'use strict';

var pikeStore = {
    name: 'First and Pike',
    minCust: 23,
    maxCust: 65, 
    avgCookieSale: 6.3,
    custPerHourArray: [],
    numCookiesPerHourArray: [],

    custPerHour: function(minCust, maxCust) {
        
        for(var i = 0; i < 15; i++){
            // var customers
            this.custPerHourArray.push(Math.floor(Math.random() * (maxCust - minCust + 1)) + minCust);
            console.log(this.custPerHourArray[i]);
        }
            
    },

    numCookiesPerHour: function(){
        for(var i= 0; i < this.custPerHourArray.length; i++){
        var totalCookies = Math.round(this.avgCookieSale * this.custPerHourArray[i]);
        this.numCookiesPerHourArray.push(totalCookies);
        console.log('this is the total cookies' + this.numCookiesPerHourArray[i]);
        }
    }

    
}