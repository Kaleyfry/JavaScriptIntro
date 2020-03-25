// Implicit Coersion below

// 7 + 7 + 7 = 21

// 7 + 7 + "7" = 
//   14     "7"  = "147"

// "7" + 7 + 7 = "777"

// 7 + 7 + "WIN" = "14WIN"

// "WIN" + 7 + 7 = "WIN77"

// 7 + "WIN" + 7 = "7WIN7"

// 7 + 7 + 2 + "5" = 
// 	16       "5" = "165"



// Explicit Coercion below


var amountRaisedSoFar = 1000;

var newDonation = prompt("How much would you like to donate?"); // returns string but we want a number

//newDonation is now a string 

//function(parameters)

amountRaisedSoFar = Number(newDonation) + amountRaisedSoFar; //changing it to number + number

//console.log()

console.log("We have now raised " + amountRaisedSoFar + "!");






