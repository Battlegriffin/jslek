// PEDMAS

// + , -, *, /, %, **, ()

var a = 30;
var b =10;

var expression = 2 * 10 - 5

// console.log(expression);

// ==== DISCOUNT CALC ====== //

var listingPrice = 7.69;
var sellingPrice = 5.62;

var savings = Math.round(listingPrice - sellingPrice);

var discount = Math.round(savings/listingPrice * 100)

console.log(`You save $${savings}`);
console.log(`You Got a discount of ${discount}%`);

