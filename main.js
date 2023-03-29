// Input acquisition from user
let mykm = prompt("How many kilometers you want to travel for:");
let myage = prompt("Insert here your age:");

// conversion type
mykm = parseInt(mykm); 
myage = parseInt(myage);

// Print information output
let userData = `
--------- General Data --------------
> General Informations
--- Kilometers: ${mykm}
--- User age: ${myage}
-------------------------------------
`;

console.log(userData);