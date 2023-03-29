// Input acquisition from user
let mykm = prompt("How many kilometers you want to travel for:");
let myage = prompt("Insert here your age:");

// Conversion type
mykm = parseInt(mykm); 
myage = parseInt(myage);

// Calculate price
let pricePerKilometer = 0.21;
let kilometers = mykm;
let ticketPrice = pricePerKilometer * mykm;
let priceDiscount20 = ticketPrice / 100 * 80;
let priceDiscount40 = ticketPrice / 100 * 60;

// Apply discount based on the age
if (myage < 18){
    console.log("Total price with a 20% discount:" + priceDiscount20);
    document.getElementById("20%discount").innerHTML = priceDiscount20.toFixed(2)+"&euro;";
}
else if (myage > 65){
    console.log("Total price with a 40% discount:" + priceDiscount40);
    document.getElementById("40%discount").innerHTML = priceDiscount40.toFixed(2)+"&euro;";
}
else{
    console.log("Total price without a discount:" + ticketPrice);
    document.getElementById("Ticketprice").innerHTML = ticketPrice.toFixed(2)+"&euro;";
}

// Print information output
let userData = `
--------- General Data --------------
> General Informations
--- Kilometers: ${mykm}
--- User age: ${myage}
-------------------------------------
`;

console.log(userData);