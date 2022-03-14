//Part 1:Objects
// let person = {
//     name:'Esme',
//     age:32
// };
// person['age'] = 25;

// console.log(person.age);

//Part 2: Arrays

// let evaluations = ['red', 'blue', 'green'];
// evaluations[3] = 'black';
// evaluations.push('pink');
// evaluations.push('5');
// evaluations.push('Hi, I am an object');


// console.log(evaluations[6]);


//Part 3: Real life object

const catBreeds = [{
    name: "Abyssinian",
    description: "The Abyssinian is easy to care for, and a joy to have in your home. They’re affectionate cats and love both people and other animals.",
    dog_friendly: 4,
    energy_level: 5,
    life_span: "14 - 15",
    origin: "Egypt",
    temperament: ["Active", "Energetic", "Independent", "Intelligent", "Gentle"],
    wikipedia_url: "https://en.wikipedia.org/wiki/Abyssinian_(cat)",
    food: {favourite_food: "fish",
    medium_liked_food: "dried fruits", 
    disliked_food: "walnuts"
    }},
    {name: "Aegean",
    description: "Native to the Greek islands known as the Cyclades in the Aegean Sea, these are natural cats, meaning they developed without humans getting involved in their breeding. As a breed, Aegean Cats are rare, although they are numerous on their home islands. They are generally friendly toward people and can be excellent cats for families with children.",
    dog_friendly: 4,
    energy_level: 53,
    life_span: "9- 12",
    origin: "Greece",
    temperament: [ "Affectionate", "Social", "Intelligent", "Playful", "Active"],
    wikipedia_url: "https://en.wikipedia.org/wiki/Aegean_cat",
    food: {favourite_food: "tuna",
    medium_liked_food: "canned food", 
    disliked_food: "all fruits"
    }},
    {name: "American Bobtail",
    description: "American Bobtails are loving and incredibly intelligent cats possessing a distinctive wild appearance. They are extremely interactive cats that bond with their human family with great devotion.",
    dog_friendly: 5,
    energy_level: 3,
    life_span: "11 - 15",
    origin: "United States",
    temperament: [ "Intelligent", "Interactive", "Lively", "Playful", "Sensitive"],
    wikipedia_url: "https://en.wikipedia.org/wiki/American_Bobtail",
    food: {favourite_food: "meaty things",
    medium_liked_food: "tuna", 
    disliked_food: "canned food"
    }}
    ]
    console.log("Favourite food of catbreed 3:", catBreeds[2].food.favourite_food);



















// // Reference types 
// let person = {
//     name:"Esme", 
//     age:32
// };

// // Dot Notation 
// person.name ="John";
// //Bracket Notation 
// person ['name'] = 'Mary';
 
// console.log (person);



// Part Age Variable
// var myAge = 26;

// if (myAge < 18 || myAge > 30 || myAge === 25){
//     document.write("Ya aint coming in!");
    
// }
// else {
//     document.write("Ya cool dude, come in");
// }

// // Part 1

// const age = 26;
// const firstName = "Bramm";
// const isFemale = true;
// const driverStatus ="designated";
// const totalAmount =115;

// if (age >= 18) {
//     document.write("You're 18 or older.Welcome in the pub!");
// }
// else if (age <= 18) {
//     document.write("You're under 18. You cannot enter the pub");
// }

// if (age >= 18 && age <= 25) {
//     document.write("Welcome, You get a 50% discount!");
// }

// if (firstName === "Bram" || firstName === "Sarah") {
//     document.write("You're Sarah or Bram, You get free beers forever!");
// }
// else {
//     document.write("Sorry your parents should have called you differently.")
// }

// if (isFemale){
//     document.write("You are a female.Buy your ticket here");
// }
// else {
//     document.write("This ticket is for females only");
// }

// if (driverStatus =="designated") {
//     document.write("You are allowed to drive.");
// }
// else {
//     document.write("Not allowed to drive");
// }

// if (totalAmount >= 100) {
//     document.write("Whoop, champange on the house!")
// }
// else if (totalAmount > 50) {
//     document.write("You've spent over 50. Nacho's on the house!")
// }
// else if (totalAmount >= 25) {
//     document.write("You've spent over 25. You get a free portion of bitterballen!")
// }
// else if (totalAmount < 24){
//     document.write("No discounts. You havent spent over 25.")
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