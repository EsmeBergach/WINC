
// var myAge = 26;

// if (myAge < 18 || myAge > 30 || myAge === 25){
//     document.write("Ya aint coming in!");
    
// }
// else {
//     document.write("Ya cool dude, come in");
// }

// Part 1

const age = 26;
const firstName = "Bramm";
const isFemale = true;
const driverStatus ="designated";
const totalAmount = 15;

if (age >= 18) {
    document.write("You're 18 or older.Welcome in the pub!");
}
else if (age <= 18) {
    document.write("You're under 18. You cannot enter the pub");
}

if (age >= 18 && age <= 25) {
    document.write("Welcome, You get a 50% discount!");
}

if (firstName === "Bram" || firstName === "Sarah") {
    document.write("You're Sarah or Bram, You get free beers forever!");
}
else {
    document.write("Sorry your parents should have called you differently.")
}

if (isFemale){
    document.write("You are a female.Buy your ticket here");
}
else {
    document.write("This ticket is for females only");
}

if (driverStatus =="designated") {
    document.write("You are allowed to drive.");
}
else {
    document.write("Not allowed to drive");
}

if (totalAmount >= 100) {
    document.write("Whoop, champange on the house!")
}
else if (totalAmount > 50) {
    document.write("You've spent over 50. Nacho's on the house!")
}
else if (totalAmount >= 25) {
    document.write("You've spent over 25. You get a free portion of bitterballen!")
}
else if (totalAmount < 25){
    console.log("No discounts. You havent spent over 25.")
}

// console.log ("Hola world and students");

// var myAge = 19;

// if (myAge > 30){
//     document.write("you're old");

// }

// else if (myAge > 20) {
//     document.write("you're over 20");

// }

// else if (myAge > 10){
//     document.write ("you are so young");
// }

// else {
//     document.write("get back to school");
// }











// Sums of number 

// var myNum = 10;

// if (myNum == 10){
//     document.write("Num is equal");
// }
// else {
//     document.write("Not equal");
// }




// var youlikeMeat = true;

// if (youlikeMeat) {
//     document.write("Here is the menu");
// }